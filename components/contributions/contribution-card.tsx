import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { contributionsInterface } from "@/config/contributions";

interface ContributionCardProps {
  contributions: contributionsInterface[];
}

export default function ContributionCard({
  contributions,
}: ContributionCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
      {contributions.map((contribution, id) => (
        <Link
          href={contribution.link}
          target="_blank"
          key={id}
          className="h-full w-full min-w-0"
        >
          <div className="relative flex h-full w-full flex-col rounded-[18px] border border-[#e0e0e0] bg-white p-2 transition-colors hover:border-primary">
            <Icons.externalLink
              size={35}
              className="absolute bottom-3 right-3 z-10 h-8 w-8 cursor-pointer rounded-full border border-[#e0e0e0] bg-white p-1.5 text-primary sm:h-10 sm:w-10 sm:p-2"
            />
            <div className="flex min-h-[170px] flex-col justify-between rounded-md p-4 sm:p-6 pb-12 sm:pb-6 flex-grow">
              <div className="flex flex-row justify-between items-start gap-2 mb-4 min-w-0">
                <h3 className="flex min-w-0 flex-1 items-center space-x-2 text-[17px] font-semibold tracking-[-0.374px] text-[#1d1d1f]">
                  <Icons.gitRepoIcon
                    size={18}
                    className="flex-shrink-0 sm:w-5 sm:h-5"
                  />
                  <span className="truncate text-sm sm:text-base min-w-0">
                    {contribution.repo}
                  </span>
                </h3>
                <Icons.gitBranch
                  size={18}
                  className="flex-shrink-0 sm:w-5 sm:h-5"
                />
              </div>
              <div className="space-y-3 sm:space-y-4 min-w-0">
                <p className="line-clamp-3 break-words text-sm leading-[1.43] tracking-[-0.224px] text-[#333333]">
                  {contribution.contibutionDescription}
                </p>
                <p className="flex min-w-0 items-center space-x-2 text-sm tracking-[-0.224px] text-[#7a7a7a]">
                  <Icons.gitOrgBuilding
                    size={14}
                    className="flex-shrink-0 sm:w-4 sm:h-4"
                  />
                  <span className="truncate min-w-0">
                    {contribution.repoOwner}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
