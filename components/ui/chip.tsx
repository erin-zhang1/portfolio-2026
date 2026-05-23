interface ChipProps {
  content: string;
}

export default function Chip({ content }: ChipProps) {
  return (
    <div className="center relative inline-block select-none whitespace-nowrap rounded-full border border-[#e0e0e0] bg-white px-4 py-2 align-baseline font-sans text-sm font-normal leading-none tracking-[-0.224px] text-[#1d1d1f]">
      {content}
    </div>
  );
}
