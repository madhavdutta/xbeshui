// Types for Breadcrumb components
type BreadcrumbProps = React.ComponentPropsWithoutRef<"nav"> & {
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
