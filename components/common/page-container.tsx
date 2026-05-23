import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  children,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <div className="bg-[#f5f5f7] pb-20">
        <PageHeader title={title} description={description} />
        <div className="mx-auto max-w-[1440px] overflow-x-hidden px-5 sm:px-8 lg:px-12">
          {children}
        </div>
      </div>
    </ClientPageWrapper>
  );
}
