import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { BlogMeta } from "@/lib/blogs";

interface BlogCardProps {
  blog: BlogMeta;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const isoDate = new Date(blog.date).toISOString();

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-[#e0e0e0] bg-white transition-colors duration-300 hover:border-primary"
    >
      <article className="flex flex-col h-full">
        {/* Cover image */}
        {blog.coverImage && (
          <div className="relative h-[124px] w-full flex-shrink-0 overflow-hidden bg-[#f5f5f7] md:h-[136px]">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-grow flex-col gap-2.5 p-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5" aria-label="Tags">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-primary px-2 py-0.5 text-xs font-normal text-primary"
              >
                {tag}
              </span>
            ))}
            {blog.tags.length > 3 && (
              <span className="inline-flex items-center rounded-full border border-[#e0e0e0] bg-[#fafafc] px-2 py-0.5 text-xs font-normal text-[#7a7a7a]">
                +{blog.tags.length - 3}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-[17px] font-semibold leading-[1.19] tracking-[0.231px] text-[#1d1d1f] transition-colors duration-200 group-hover:text-primary">
            {blog.title}
          </h3>

          {/* Description */}
          <p className="flex-grow text-[13px] font-normal leading-[1.35] tracking-[-0.224px] text-[#333333]">
            {blog.description}
          </p>

          {/* Footer: date + read time + arrow */}
          <div className="mt-auto flex items-center justify-between border-t border-[#e0e0e0] pt-2">
            <div className="flex items-center gap-2 text-[11px] text-[#7a7a7a]">
              <time dateTime={isoDate} className="flex items-center gap-1">
                <Icons.calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </time>
              {blog.readingTime && (
                <span className="flex items-center gap-1">
                  <Icons.clock className="w-3.5 h-3.5" />
                  {blog.readingTime} min read
                </span>
              )}
            </div>
            {/* Decorative read indicator */}
            <span
              className="inline-flex items-center gap-0.5 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200"
              aria-hidden="true"
            >
              Read
              <Icons.chevronRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
