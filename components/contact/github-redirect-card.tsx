"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function GithubRedirectCard() {
  return (
    <Card className="mt-5 h-fit w-full max-w-sm overflow-hidden bg-white">
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="mb-6">
          <Github className="h-11 w-11 text-primary" />
        </div>
        <h2 className="font-heading text-[28px] font-semibold leading-[1.14] tracking-[0.196px] text-[#1d1d1f]">
          View my GitHub
        </h2>
        <p className="mb-10 mt-3 text-[17px] leading-[1.47] tracking-[-0.374px] text-[#333333]">
          Explore my code, projects, and technical work on GitHub.
        </p>
      </CardContent>
      <CardFooter className="px-8 pb-8 pt-0">
        <Link
          href={"https://github.com/erin-zhang1"}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full bg-transparent py-6"
          )}
        >
          <span className="mr-2">GitHub Profile</span>
          <ExternalLink className="w-5 h-5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
