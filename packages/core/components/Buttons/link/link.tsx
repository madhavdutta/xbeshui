import { forwardRef, useMemo, useState, isValidElement, cloneElement } from "react";
import { cn } from "../../../../utils";
import type { LinkProps } from "../button/button.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant,
      size,
      leftSection,
      radius,
      rightSection,
      href,
      target,
      children,
      glitchEffect = true,
      underline = false,
      ...props
    },
    ref
  ) => {
    useXbeshProviderCheck();

    const text = typeof children === "string" ? children : "";
    const characters = text.split("");
    const [isHovered, setIsHovered] = useState(false);
    const [glitchedText, setGlitchedText] = useState(text);
    const [animationDone, setAnimationDone] = useState(false);

    const handleHover = () => {
      if (!glitchEffect || animationDone) return;
      setIsHovered(true);
      let i = 0;
      const interval = setInterval(() => {
        if (i >= characters.length) {
          clearInterval(interval);
          setGlitchedText(text);
          setAnimationDone(true);
          return;
        }
        const randomChars = Array.from({ length: 2 }, () => getRandomChar()).join("");
        const randomUnderscores = Array.from({ length: Math.floor(Math.random() * 2) }, () => "_").join("");
        const newText = characters
          .map((char, index) => {
            if (index === i) {
              return char === " " ? " " : randomChars;
            // biome-ignore lint/style/noUselessElse: <explanation>
            } else if (index > i && index <= i + randomUnderscores.length) {
              return "_";
            // biome-ignore lint/style/noUselessElse: <explanation>
            } else {
              return char;
            }
          })
          .join("");
        setGlitchedText(newText);
        i++;
      }, 40);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setGlitchedText(text);
      setAnimationDone(false);
    };

    const getRandomChar = useMemo(() => {
      const chars = "*_+{}-?abcdefghijklmnopqrstuvwxyzZ0123456789";
      return () => chars[Math.floor(Math.random() * chars.length)];
    }, []);

	const renderGlitchedText = () => {
		if (typeof children === "string") {
		  return (
			<span className="inline-block overflow-hidden whitespace-nowrap" style={{ width: `${text.length}ch` }}>
			  {glitchedText.split("").map((char, index) => (
				<span
				  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				  key={char + index}
				  className={`flipChar ${isHovered && glitchEffect ? "glitch" : ""}`}
				  style={{
					marginRight: char === " " ? "0.5em" : "0",
					transition: "opacity 0.3s",
				  }}
				>
				  {char}
				</span>
			  ))}
			</span>
		  );
		// biome-ignore lint/style/noUselessElse: <explanation>
		} else if (isValidElement(children)) {
		  const childProps = children.props;
		  const modifiedProps = {
			...childProps,
			...(childProps.className
			  ? { className: cn(childProps.className, isHovered && glitchEffect ? "glitch" : "") }
			  : {}),
		  };
		  return cloneElement(children, modifiedProps);
		// biome-ignore lint/style/noUselessElse: <explanation>
		} else {
		  return children;
		}
	  };

    return !underline ? (
      <a
        className={cn("flipText cursor-pointer no-underline hover:underline", className)}
        href={href}
        target={target}
        ref={ref}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        style={{ textDecoration: underline ? "underline" : "none" }}
        {...props}
      >
        {leftSection && <span className="mr-2">{leftSection}</span>}
        {renderGlitchedText()}
        {rightSection && <span className="ml-2">{rightSection}</span>}
      </a>
    ) : (
      <a
        className={cn("cursor-pointer hover:underline", className)}
        href={href}
        target={target}
        ref={ref}
        {...props}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        {leftSection && <span className="mr-2">{leftSection}</span>}
        {glitchedText}
        {rightSection && <span className="ml-2">{rightSection}</span>}
      </a>
    );
  }
);

Link.displayName = "Link";
export { Link };