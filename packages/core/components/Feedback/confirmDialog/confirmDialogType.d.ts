export interface ConfirmOptions {
  title: string;
  children: React.ReactNode;
  labels: {
    confirm: string;
    cancel: string;
  };
  onConfirm: () => void;
}

export interface AlertDialogWrapperProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  options: ConfirmOptions;
  onConfirm: () => void;
  onCancel: () => void;
}
