import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "../xBeshTheme/xBeshThemeProvider";
import { Button, DropdownMenu } from "../../index";
import { useXbeshProviderCheck } from "../xBeshTheme/xbeshProvider";
import type { ButtonVariantType, ButtonRadiusType, ButtonSizeType } from "../../Buttons/button/buttonType";

interface XbeshThemeSwitchProps {
  size?: keyof ButtonSizeType;
  radius?: keyof ButtonRadiusType;
  variant?: keyof ButtonVariantType;
  border?: boolean;
  className?: string;
}

export function XbeshThemeSwitch({
  size = "default",
  radius = "sm",
  variant = "default",
  border = true,
  className = "",
}: XbeshThemeSwitchProps) {
  useXbeshProviderCheck();
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button
          variant={variant || "default"}
          size={size}
          radius={radius}
          className={className}
          style={{ borderWidth: border ? "1px" : "0" }}
        >
          <IconSun size={20} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <IconMoon size={20} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Item onClick={() => setTheme("light")}>
          Light
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme("system")}>
          System
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}