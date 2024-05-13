import React, { forwardRef, useState } from "react";
import { cn } from "../../../../utils";
import { buttonVariants, type ButtonProps } from "./button.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
import Confetti from "react-confetti";
import { BorderBeam } from "../../Misc/borerBeam";

// Normal Button Component
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftSection,
      radius,
      rightSection,
      children,
      ...props
    },
    ref
  ) => {
    useXbeshProviderCheck();
    return (
      <button
        className={cn(buttonVariants({ variant, size, radius }), className)}
        ref={ref}
        {...props}
      >
        {leftSection && <span className="mr-2">{leftSection}</span>}
        {children}
        {rightSection && <span className="ml-2">{rightSection}</span>}
      </button>
    );
  }
);

const BeamButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftSection,
      radius,
      rightSection,
      children,
      ...props
    },
    ref
  ) => {
    useXbeshProviderCheck();
    return (
      <>
        <button
          className={cn(buttonVariants({ variant, size, radius }), className)}
          ref={ref}
          {...props}
        >
          {leftSection && <span className="mr-2">{leftSection}</span>}
          {children}
          {rightSection && <span className="ml-2">{rightSection}</span>}
        </button>
        <BorderBeam  duration={12} delay={9} />
      </>
    );
  }
);

// Button with Confetti Effect Component
const ConfettiButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftSection,
      radius,
      rightSection,
      children,
      ...props
    },
    ref
  ) => {
    useXbeshProviderCheck();
    const [confettiVisible, setConfettiVisible] = useState(false);

    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      setConfettiVisible(true);
      setTimeout(() => {
        setConfettiVisible(false);
      }, 3000);
      if (props.onClick) props.onClick(e);
    };

    return (
      <>
        {confettiVisible && <Confetti />}
        <button
          className={cn(buttonVariants({ variant, size, radius }), className)}
          ref={ref}
          onClick={handleClick}
          {...props}
        >
          {leftSection && <span className="mr-2">{leftSection}</span>}
          {children}
          {rightSection && <span className="ml-2">{rightSection}</span>}
        </button>
      </>
    );
  }
);

export { Button, BeamButton, ConfettiButton };
