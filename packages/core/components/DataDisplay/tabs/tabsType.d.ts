export interface TabsConfigType{
    variants: {
        variant: {
            default:string;
            outline: string;
            pill: string;
            underline:string;
        },
        radius: {
            default:string;
            xs: string;
            sm: string;
            md:string;
            lg:string;
            xl:string;
        },
        orientation: {
            default: string;
            horizontal:string;
            vertical: string;
        },
        size: {
            default:string;
            xs:string;
            sm:string;
            md: string;
            lg:string;
            xl:string;
        },
    },
    defaultVariants: {
        variant: keyof TabsConfigType['variants']['variant'];
        radius:  keyof TabsConfigType['variants']['radius'];
        orientation:  keyof TabsConfigType['variants']['orientation'];
        size: keyof TabsConfigType['variants']['size'];
    },
}

