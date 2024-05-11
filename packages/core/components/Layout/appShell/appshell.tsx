import React from "react";
import { appShellVariant, type appShellProps } from "./appShell.config";
import { cn } from "../../../../utils";
import { IconMenu2, IconTarget } from "@tabler/icons-react";
import { Sheet } from "../../Overlays/sheet/sheet";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
import { IfElse } from "../../Misc/ifElse/ifElse";
import { ActionIcon } from "../../Buttons/actionIcon/actionIcon";
import { Stack } from "../stack/stack";
import { motion } from "framer-motion";

const AppShell = React.forwardRef<HTMLDivElement, appShellProps>(
  (
    {
      className,
      layout,
      variant,
      Header,
      Footer,
      Aside,
      Navbar,
      withBorder,
      fixedHeader,
      shrinkedAside,
      ...props
    },
    ref,
  ) => {
    useXbeshProviderCheck();

    const [asideOpened, setAsideOpened] = React.useState(false);

    const renderNavbar = () => (
      <IfElse condition={!!Navbar}>
        <nav
          className={`fixed bg-red-300 h-screen hidden sm:hidden md:flex lg:flex ${withBorder ? "border-r" : ""
            } ${variant === "default"
              ? "w-16 left-0 top-0 bottom-0"
              : "w-72 left-0 top-0 bottom-0"
            } ${layout === "alt"
              ? `left-0 ${variant === "default"
                ? "top-16 mt-[.01rem]"
                : "top-16 mt-[.01rem]"
              } z-10 bottom-0`
              : ""
            }`}
          aria-label="Sidenav"
        >
          {Navbar && Navbar}
        </nav>
        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
        <></>
      </IfElse>
    );

    const renderHeader = () => (
      <IfElse condition={!!Header}>
        <header
          className={`bg-green-200 h-16 top-0 ${fixedHeader ? "fixed" : ""
            } flex items-center ${withBorder ? "border-b" : ""} ${layout === "alt"
              ? "left-0 right-0 z-10"
              : variant === "default"
                ? Navbar
                  ? "md:left-16"
                  : "md:left-0"
                : Navbar
                  ? "md:left-72"
                  : "md:left-0"
            } ${Aside && layout !== "alt"
              ? fixedHeader
                ? "md:right-96"
                : "md:mr-96"
              : "md:right-0"
            }`}
        >
          <Sheet
            side="left"
            className="flex items-center"
            Trigger={
              <div className="p-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-50 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <IconMenu2 stroke={1.5} />
                <span className="sr-only">Toggle sidebar</span>
              </div>
            }
            onClose={() => console.log("closed")}
            title="Menu"
          >
            {/* <IfElse condition={!!Navbar}>
              {renderNavbar()}
              <></>
            </IfElse> */}
            {Navbar && Navbar}
          </Sheet>

          <div className="w-full">{Header && Header}</div>
        </header>
        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
        <></>
      </IfElse>
    );

    const renderMain = () => (
      <motion.div
        initial={{ marginRight: 55 }}
        animate={{
          marginRight: asideOpened ? 510 : 47,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        aria-label="Sidebar"
        className={`h-screen bg-blue-200 w-full mr-0 ${Aside ? (asideOpened ? "md:mr-[510px]" : "md:mr-12") : "md:mr-0"
          } ${Header ? (fixedHeader ? "mt-[66px]" : "mt-4") : "mt-0"} ${Footer ? "pb-20" : "pb-0"
          } px-0 ${layout === "alt"
            ? variant === "default"
              ? Navbar
                ? "md:ml-16 top-16 mt-[2px] "
                : "md:ml-0 mt-16"
              : "md:ml-72 mt-16"
            : variant === "default"
              ? Navbar
                ? "md:ml-16"
                : "md:ml-0"
              : Navbar
                ? "md:ml-72"
                : "md:ml-0"
          }`}
      >
        {props.children}
      </motion.div>
    );

    const renderFooter = () => (
      <IfElse condition={!!Footer}>
        <motion.div
          initial={{ right: 55 }}
          animate={{
            right: asideOpened ? 510 : 47,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          aria-label="Footer"
          className={`h-16 bg-purple-300 ${withBorder ? "border-t" : ""
            } flex fixed items-center bottom-0  w-full mr-0 "md:mr-0"
            } px-0 ${layout === "alt"
              ? variant === "default"
                ? Navbar
                  ? "md:ml-16 mt-[2px] "
                  : "md:ml-0 mt-16"
                : "md:ml-72 mt-16"
              : variant === "default"
                ? Navbar
                  ? "md:ml-16"
                  : "md:ml-0"
                : Navbar
                  ? "md:ml-72"
                  : "md:ml-0"
            }`}
        >
          {Footer && Footer}
        </motion.div>
        {/* <footer
					className={`h-16 flex items-center fixed bottom-0 ${
						withBorder ? "border-t" : ""
					} left-0 sm:left-0 ${
						layout === "alt"
							? variant === "default"
								? "md:left-16"
								: "md:left-72"
							: Navbar
								? variant === "inner"
									? "md:left-72"
									: "md:left-16"
								: "md:left-0"
					} right-0 ${Aside ? "lg:right-96" : "lg:right-0"}`}
				>
					{Footer && Footer}
				</footer> */}
        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
        <></>
      </IfElse>
    );

    const renderAside = () => (
      <IfElse condition={!!Aside}>
        <>
          <motion.div
            initial={{ display: "none", right: "0" }}
            animate={{
              display: asideOpened ? "block" : "none",
              right: asideOpened ? "12px" : "-500px",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`fixed z-8 w-[500px] hidden h-full ${withBorder ? "border-l" : ""
              } ${layout === "alt" ? "top-16 z-10" : "top-0"}`}
            aria-label="Sidebar"
          >
            {Aside}
          </motion.div>
          <div
            className={`w-12 z-10 fixed mt-[0.01rem] right-0 top-16 h-screen ${withBorder ? "border-l" : ""
              } pt-4 bg-background flex flex-col items-center`}
          >
            <Stack>
              <span className="border-l-2 border-primary w-full px-2">
                <ActionIcon
                  onClick={() => setAsideOpened(!asideOpened)}
                  size="xs"
                  variant="secondary"
                  radius="full"
                >
                  <IconTarget size={20} />
                </ActionIcon>
              </span>
              <span className="border-l-2 border-transparent w-full px-2">
                <ActionIcon size="xs" radius="full">
                  <IconTarget size={20} />
                </ActionIcon>
              </span>
            </Stack>
          </div>
        </>
        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
        <></>
      </IfElse>
    );

    return (
      <div
        className={cn(
          appShellVariant({ layout, variant, className }),
          "w-full h-screen overflow-auto text-primary",
        )}
        {...props}
        ref={ref}
      >
        <IfElse condition={layout === "default"}>
          <div className="w-full flex flex-row justify-between h-screen">
            {renderNavbar()}
            <div
              className={`w-full h-full ml-0 sm:ml-0 ${variant === "default"
                  ? Navbar
                    ? "md:ml-16"
                    : "md:ml-0"
                  : Navbar
                    ? "md:ml-72"
                    : "md:ml-0"
                }`}
            >
              {renderHeader()}
              {renderMain()}
              {renderFooter()}
            </div>
            {renderAside()}
          </div>

          <div className="w-full flex flex-col h-screen">
            {renderHeader()}
            <div className="flex flex-row justify-between">
              {renderNavbar()}
              {renderMain()}
              {renderAside()}
            </div>
            {renderFooter()}
          </div>
        </IfElse>
      </div>
    );
  },
);

AppShell.displayName = "AppShell";

export { AppShell };