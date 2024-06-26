import * as SeparatorPrimitive from "@radix-ui/react-separator";
import React from "react";
import {SepratorConfig} from './separator.config'
export interface SepratorConfigType {
  variants: {
    variant: {
      default: string;
      dashed: string;
      solid:  string;
      dotted: string;
    };
    width: {
      default: string;
      xs: string;
      md: string;
      lg: string;
    },
    orientation: {
      default: string;
      horizontal: string;
      vertical: string;
    };
    labelSize: {
      default: string;
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
      "8xl": string;
      "9xl": string;
    };
    labelPosition: {
      default: string;
      left: string;
      right: string;
      center: string;
    };
  };
  defaultVariants: {
    variant: keyof SepratorConfigType["variants"]["variant"];
    orientation: keyof SepratorConfigType["variants"]["orientation"];
    labelSize: keyof SepratorConfigType["variants"]["labelSize"];
    labelPosition: keyof SepratorConfigType["variants"]["labelPosition"];
    width:keyof SepratorConfigType["variants"]["width"];
  };
}
