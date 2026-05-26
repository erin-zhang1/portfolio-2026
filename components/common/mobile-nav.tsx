import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
  onLinkClick?: () => void;
}

export function MobileNav({ items, children, onLinkClick }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-11 z-50 grid h-[calc(100vh-2.75rem)] grid-flow-row auto-rows-max overflow-auto bg-black/95 p-6 pb-32 backdrop-blur-xl animate-in slide-in-from-top-10 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 text-white">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-[21px] font-semibold tracking-[0.231px]">
            {siteConfig.authorName}
          </span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-[17px]">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              onClick={onLinkClick}
              className={cn(
                "flex w-full items-center border-b border-white/10 py-4 font-normal text-white/80 hover:text-white",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children ? <div className="pt-2">{children}</div> : null}
      </div>
    </div>
  );
}
