import React from "react";

interface PageSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

function PageSection({ title, description, children }: PageSectionProps) {
  return (
    <section className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-semibold24 text-black">{title}</h2>
        {description && (
          <p className="text-medium16 text-gray500">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}

PageSection.defaultProps = {
  description: undefined,
};

export default PageSection;
