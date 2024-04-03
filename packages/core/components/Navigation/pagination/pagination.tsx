import * as React from "react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconDots,
} from "@tabler/icons-react";

import { cn } from "../../../../utils";
import { ButtonProps } from "../../Buttons/button/button.d";
import { buttonVariants } from "../../Buttons/button/button.config";
import { Page, PaginationProps } from "./paginationType";

const generatePages = (currentPage: number, totalPages: number): Page[] => {
  const pages: Page[] = [];
  const range = 2; // Number of pages to show on each side of the current page

  // Add Previous button
  pages.push({
    label: "Previous",
    href: "",
    isActive: false,
  });

  // Add ellipsis if needed
  if (currentPage - range > 1) {
    pages.push({
      label: "1",
      href: "1",
      isActive: false,
    });
    if (currentPage - range > 2) {
      pages.push({
        label: "...",
        href: "",
        isActive: false,
      });
    }
  }

  // Add pages around the current page
  for (
    let i = Math.max(1, currentPage - range);
    i <= Math.min(currentPage + range, totalPages);
    i++
  ) {
    pages.push({
      label: i.toString(),
      href: i.toString(),
      isActive: i === currentPage,
    });
  }

  // Add ellipsis if needed
  if (currentPage + range < totalPages) {
    if (currentPage + range < totalPages - 1) {
      pages.push({
        label: "...",
        href: "",
        isActive: false,
      });
    }
    pages.push({
      label: totalPages.toString(),
      href: totalPages.toString(),
      isActive: false,
    });
  }

  // Add Next button
  pages.push({
    label: "Next",
    href: "",
    isActive: false,
  });

  return pages;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = generatePages(currentPage, totalPages);

  return (
    <Paginationcomp>
      <PaginationContent>
        {pages.map((page, index) => (
          <PaginationItem key={index}>
            {page.label === "Previous" ? (
              <PaginationPrevious
                disabled={currentPage === 1}
                onClick={() => {
                  if (!(currentPage === 1)) onPageChange(currentPage - 1);
                }}
              />
            ) : page.label === "Next" ? (
              <PaginationNext
                disabled={currentPage === totalPages}
                onClick={() => {
                  if (!(currentPage === totalPages))
                    onPageChange(currentPage + 1);
                }}
              />
            ) : page.label === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                isActive={page.isActive}
                onClick={() => onPageChange(parseInt(page.label))}
              >
                {page.label}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
      </PaginationContent>
    </Paginationcomp>
  );
};

const Paginationcomp = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Paginationcomp.displayName = "Paginationcomp";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean; // Add disabled prop
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size ="default",
  disabled,
  ...props
}: PaginationLinkProps) => {
  if (disabled) {
    return (
      <span
        className={cn(
          buttonVariants({
            variant: isActive ? "outline" : "ghost",
            size,
          }),
          "cursor-not-allowed",
          className
        )}
        {...props}
      />
    );
  }

  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  );
};

PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { disabled: boolean }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
    disabled={disabled} // Disable the button based on the disabled prop
  >
    <IconChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { disabled: boolean }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
    disabled={disabled} // Disable the button based on the disabled prop
  >
    <span>Next</span>
    <IconChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <IconDots className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export { Pagination };
