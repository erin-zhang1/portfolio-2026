import { NextRequest, NextResponse } from "next/server";

import { siteConfig } from "@/config/site";

export const dynamic = "force-dynamic";

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionResponse = {
  total: Record<string, number>;
  contributions: ContributionDay[];
};

export async function GET(request: NextRequest) {
  const username =
    request.nextUrl.searchParams.get("username") ?? siteConfig.username;

  if (!/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(username)) {
    return NextResponse.json(
      { error: "Invalid GitHub username" },
      { status: 400 }
    );
  }

  let response: Response;

  try {
    response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      {
        headers: {
          accept: "application/json",
        },
        next: {
          revalidate: 3600,
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to reach GitHub contribution service" },
      { status: 502 }
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: "Unable to fetch GitHub contribution data" },
      { status: response.status }
    );
  }

  const data = (await response.json()) as ContributionResponse;

  return NextResponse.json({
    username,
    total:
      data.total.lastYear ??
      data.total.last ??
      Object.values(data.total).reduce((sum, value) => sum + value, 0),
    contributions: data.contributions,
  });
}
