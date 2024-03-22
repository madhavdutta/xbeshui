type AlertVariant = {
    default: string
    destructive: string
    success: string;
    warning: string;
    notice: string;
    muted: string;
}

interface AlertVariantsType {
    variants: {
        variant: AlertVariant
    }
    defaultVariants: {
        variant: keyof AlertVariant
    }
}

interface AlertPropsType extends React.HTMLAttributes<HTMLDivElement>, AlertVariantsType {
    id: string;
    title?: string;
    message?: string;
    icon?: React.ReactNode;
    variant?: keyof AlertVariant
}

export {AlertVariant, AlertPositions, AlertVariantsType, AlertPropsType }