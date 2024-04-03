export interface Page {
    label: string;
    href: string;
    isActive?: boolean;
  }
  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }