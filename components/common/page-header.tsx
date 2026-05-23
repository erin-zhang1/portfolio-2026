interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 px-5 pb-12 pt-20 text-center md:pb-16 md:pt-24">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-[34px] font-semibold leading-[1.1] tracking-[-0.374px] text-[#1d1d1f] sm:text-[40px] lg:text-[56px] lg:leading-[1.07] lg:tracking-[-0.28px] capitalize">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-[21px] font-normal leading-[1.35] tracking-[0.196px] text-[#333333] sm:text-[24px]">
            {description}
          </p>
        </div>
      </div>
      <hr className="border-[#e0e0e0]" />
    </>
  );
}
