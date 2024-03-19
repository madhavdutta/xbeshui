export type AccordionVariant = {
    default: string;
    filled: string;
    contained: string;
    separated: string;
};

export type Radius = {
    default: "rounded-none";
    none: "rounded-none";
    sm: "rounded-sm";
    md: "rounded-md";
    lg: "rounded-lg";
    xl: "rounded-xl";
    xxl: "rounded-2xl";
    full: "rounded-full";
};

export type chevronPosition = {
    default: string;
    left: string;
    right: string;
};

export type chevronSize = {
    default: string;
    sm: string;
    md: string;
    lg: string;
};

export type AccordionVariants = {
    variants: {
        variant: AccordionVariant;
        radius: Radius;
        chevronPosition: chevronPosition;
        chevronSize: chevronSize;
        multiple: {default: boolean; true: boolean; false: boolean;};
    };
    defaultVariants: {
        variant: keyof AccordionVariant;
        radius: keyof Radius;
        chevronPosition: keyof chevronPosition;
        chevronSize: keyof chevronSize;
        multiple: "default"
    };
};


