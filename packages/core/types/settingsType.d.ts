export type ColorsType = {
    slate: { "slate-50", "slate-100", "slate-200", "slate-300", "slate-400", "slate-500", "slate-600", "slate-700", "slate-800", "slate-900" },
    gray: { "gray-50", "gray-100", "gray-200", "gray-300", "gray-400", "gray-500", "gray-600", "gray-700", "gray-800", "gray-900" },
    zinc: { "zinc-50", "zinc-100", "zinc-200", "zinc-300", "zinc-400", "zinc-500", "zinc-600", "zinc-700", "zinc-800", "zinc-900" },
    natural: { "natural-50", "natural-100", "natural-200", "natural-300", "natural-400", "natural-500", "natural-600", "natural-700", "natural-800", "natural-900" },
    stone: { "stone-50", "stone-100", "stone-200", "stone-300", "stone-400", "stone-500", "stone-600", "stone-700", "stone-800", "stone-900" },
    red: { "red-50", "red-100", "red-200", "red-300", "red-400", "red-500", "red-600", "red-700", "red-800", "red-900" },
    orange: { "orange-50", "orange-100", "orange-200", "orange-300", "orange-400", "orange-500", "orange-600", "orange-700", "orange-800", "orange-900" },
    amber: { "amber-50", "amber-100", "amber-200", "amber-300", "amber-400", "amber-500", "amber-600", "amber-700", "amber-800", "amber-900" },
    yellow: { "yellow-50", "yellow-100", "yellow-200", "yellow-300", "yellow-400", "yellow-500", "yellow-600", "yellow-700", "yellow-800", "yellow-900" },
    lime: { "lime-50", "lime-100", "lime-200", "lime-300", "lime-400", "lime-500", "lime-600", "lime-700", "lime-800", "lime-900" },
    green: { "green-50", "green-100", "green-200", "green-300", "green-400", "green-500", "green-600", "green-700", "green-800", "green-900" },
    emerald: { "emerald-50", "emerald-100", "emerald-200", "emerald-300", "emerald-400", "emerald-500", "emerald-600", "emerald-700", "emerald-800", "emerald-900" },
    teal: { "teal-50", "teal-100", "teal-200", "teal-300", "teal-400", "teal-500", "teal-600", "teal-700", "teal-800", "teal-900" },
    cyan: { "cyan-50", "cyan-100", "cyan-200", "cyan-300", "cyan-400", "cyan-500", "cyan-600", "cyan-700", "cyan-800", "cyan-900" },
    sky: { "sky-50", "sky-100", "sky-200", "sky-300", "sky-400", "sky-500", "sky-600", "sky-700", "sky-800", "sky-900" },
    blue: { "blue-50", "blue-100", "blue-200", "blue-300", "blue-400", "blue-500", "blue-600", "blue-700", "blue-800", "blue-900" },
    indigo: { "indigo-50", "indigo-100", "indigo-200", "indigo-300", "indigo-400", "indigo-500", "indigo-600", "indigo-700", "indigo-800", "indigo-900" },
    violet: { "violet-50", "violet-100", "violet-200", "violet-300", "violet-400", "violet-500", "violet-600", "violet-700", "violet-800", "violet-900" },
    purple: { "purple-50", "purple-100", "purple-200", "purple-300", "purple-400", "purple-500", "purple-600", "purple-700", "purple-800", "purple-900" },
    fuchsia: { "fuchsia-50", "fuchsia-100", "fuchsia-200", "fuchsia-300", "fuchsia-400", "fuchsia-500", "fuchsia-600", "fuchsia-700", "fuchsia-800", "fuchsia-900" },
    pink: { "pink-50", "pink-100", "pink-200", "pink-300", "pink-400", "pink-500", "pink-600", "pink-700", "pink-800", "pink-900" },
    rose: { "rose-50", "rose-100", "rose-200", "rose-300", "rose-400", "rose-500", "rose-600", "rose-700", "rose-800", "rose-900" },
}

export type ShadowType =  "shadow-sm" | "shadow" | "shadow-md" | "shadow-lg" | "shadow-xl" | "shadow-2xl" | "shadow-inner" | "shadow-outline" | "shadow-none";
export type BorderRadiusType = "rounded-none" | "rounded-sm" | "rounded" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-2xl" | "rounded-3xl" | "rounded-full";
export type SpacingType = "gap-0" | "gap-x-0" | "gap-y-0" | "gap-px" | "gap-x-px" | "gap-y-px" | "gap-0.5" | "gap-x-0.5" | "gap-y-0.5" | "gap-1" | "gap-x-1" | "gap-y-1" | "gap-1.5" | "gap-x-1.5" | "gap-y-1.5" | "gap-2" | "gap-x-2" | "gap-y-2" | "gap-2.5" | "gap-x-2.5" | "gap-y-2.5" | "gap-3" | "gap-x-3" | "gap-y-3" | "gap-3.5" | "gap-x-3.5" | "gap-y-3.5" | "gap-4" | "gap-x-4" | "gap-y-4" | "gap-5" | "gap-x-5" | "gap-y-5" | "gap-6" | "gap-x-6" | "gap-y-6" | "gap-7" | "gap-x-7" | "gap-y-7" | "gap-8" | "gap-x-8" | "gap-y-8" | "gap-9" | "gap-x-9" | "gap-y-9" | "gap-10" | "gap-x-10" | "gap-y-10" | "gap-12" | "gap-x-12" | "gap-y-12" | "gap-16" | "gap-x-16" | "gap-y-16" | "gap-20" | "gap-x-20" | "gap-y-20" | "gap-24" | "gap-x-24" | "gap-y-24" | "gap-28" | "gap-x-28" | "gap-y-28" | "gap-32" | "gap-x-32" | "gap-y-32" | "gap-36" | "gap-x-36" | "gap-y-36" | "gap-40" | "gap-x-40" | "gap-y-40" | "gap-44" | "gap-x-44" | "gap-y-44" | "gap-48" | "gap-x-48" | "gap-y-48" | "gap-52" | "gap-x-52" | "gap-y-52" | "gap-56" | "gap-x-56" | "gap-y-56" | "gap-60" | "gap-x-60" | "gap-y-60" | "gap-64" | "gap-x-64" | "gap-y-64" | "gap-72" | "gap-x-72" | "gap-y-72" | "gap-80" | "gap-x-80" | "gap-y-80" | "gap-96" | "gap-x-96" | "gap-y-96";
export type FontWeightType = "font-thin" | "font-extralight" | "font-light" | "font-normal" | "font-medium" | "font-semibold" | "font-bold" | "font-extrabold" | "font-black";
export type FontSizeType = "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl" | "text-6xl" | "text-7xl" | "text-8xl" | "text-9xl";
export type LineHeightType = "leading-3" | "leading-4" | "leading-5" | "leading-6" | "leading-7" | "leading-8" | "leading-9" | "leading-10" | "leading-none" | "leading-tight" | "leading-snug" | "leading-normal" | "leading-relaxed" | "leading-loose";
export type LetterSpacingType = "tracking-tighter" | "tracking-tight" | "tracking-normal" | "tracking-wide" | "tracking-wider" | "tracking-widest";
export type OpacityType = "opacity-0" | "opacity-5" | "opacity-10" | "opacity-20" | "opacity-25" | "opacity-30" | "opacity-35" | "opacity-40" | "opacity-45" | "opacity-50" | "opacity-55" | "opacity-60" | "opacity-65" | "opacity-70" | "opacity-75" | "opacity-80" | "opacity-85" | "opacity-90" | "opacity-95" | "opacity-100";
export type FontFamilyType = "font-sans" | "font-serif" | "font-mono";
export type TransitionType = "transition-none" | "transition-all" | "transition-colors" | "transition-opacity" | "transition-shadow" | "transition-transform";
export type ZIndexType = "z-0" | "z-10" | "z-20" | "z-30" | "z-40" | "z-50" | "z-auto";
export type DurationType = "duration-0" | "duration-75" | "duration-100" | "duration-150" | "duration-200" | "duration-300" | "duration-500" | "duration-700" | "duration-1000";
export type EasingType = "ease-linear" | "ease-in" | "ease-out" | "ease-in-out";
export type BreakpointsType = "sm" | "md" | "lg" | "xl" | "2xl";
export type ScreenType = "sm" | "md" | "lg" | "xl" | "2xl";