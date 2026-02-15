import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  action?: React.ReactNode;
}

function PageHeader({ title, subtitle, description, action }: PageHeaderProps) {
  return (
    <div className="flex w-full items-end justify-between gap-6 sm:flex-col sm:items-start">
      <div className="flex flex-col gap-3">
        {subtitle && <p className="text-semibold18 text-lime500">{subtitle}</p>}
        <h1 className="text-bold40 text-black">{title}</h1>
        {description && (
          <p className="text-medium18 text-gray500">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

PageHeader.defaultProps = {
  subtitle: undefined,
  description: undefined,
  action: undefined,
};

export default PageHeader;
