// // breadcrumb.config.ts

// import { VariantProps, cva } from "class-variance-authority";

// // Define the configuration type for the breadcrumb
// export interface BreadcrumbConfigType {
//   defaultVariants: {
//     separator: "default" | "slash" | "arrow" | null | undefined;
//   };
// }

// // Define the breadcrumb variants using class-variance-authority
// export const breadcrumbVariants = cva("breadcrumb", {
//   defaultVariants: {
//     separator: "default",
//   },
// });

// export type BreadcrumbProps = {
//   data?: { link: string; label: string }[];
//   separator?: React.ReactNode;
// } & React.ComponentPropsWithoutRef<"nav"> &
//   VariantProps<typeof breadcrumbVariants>;
