// breadcrumbType.d.ts

import React from "react";

// Types for Breadcrumb components
type BreadcrumbProps = React.ComponentPropsWithoutRef<"nav"> & {
  data?: { link: string; label: string }[];
  separator?: React.ReactNode;
};

type BreadcrumbItemProps = React.ComponentPropsWithoutRef<"li">;

type BreadcrumbLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  asChild?: boolean;
};

type BreadcrumbPageProps = React.ComponentPropsWithoutRef<"span">;

type BreadcrumbSeparatorProps = React.ComponentProps<"li">;

type BreadcrumbEllipsisProps = React.ComponentProps<"span">;

export {
  BreadcrumbProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbPageProps,
  BreadcrumbSeparatorProps,
  BreadcrumbEllipsisProps,
};
