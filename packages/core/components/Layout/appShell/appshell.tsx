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
    ref
  ) => {
    useXbeshProviderCheck();

    const [asideOpened, setAsideOpened] = React.useState(false);


    const renderNavbarAlt = () => (
      <IfElse condition={!!Navbar}>
        <nav
          className={`fixed hidden sm:hidden md:flex lg:flex left-0 top-16 mt-[.01rem] z-10 ${withBorder ? "border-r" : ""
            } ${variant === "default"
              ? "w-16 left-0 top-0 bottom-0"
              : "w-72 left-0 top-0 bottom-0"
            }`}
          aria-label="NavBarAlt"
        >
          {Navbar && Navbar}
        </nav>
        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
        <></>
      </IfElse>
    );

    const renderHeaderAlt = () => (
      <IfElse condition={!!Header}>
        <header
          className={` h-16 md:right-0 top-0 left-0 right-0 z-10 ${fixedHeader ? "fixed" : ""
            } flex items-center ${withBorder ? "border-b" : ""}`}
        aria-label="HeaderAlt"
        >
          <Sheet
            side="left"
            className="flex items-start justify-start"
            Trigger={
              <div className="p-2 ml-2 text-foreground flex flex-col justify-start items-start  rounded-md cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-50 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <IconMenu2 stroke={1.5} />
                <span className="sr-only">Toggle sidebar</span>
              </div>
            }
            onClose={() => console.log("closed")}
            title="Menu"
          >
            {Navbar && Navbar}
          </Sheet>
          <div className="w-full">{Header && Header}</div>
        </header>
        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
        <></>
      </IfElse>
    );

    const renderMainAlt = () => (
      <motion.div
        initial={{ right: 47 }}
        animate={{
          right: asideOpened ? 510 : 47,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        aria-label="MainAlt"
        className={`h-screen fixed left-0 mt-16 sm:mr-0 
          ${Aside ? (asideOpened ? "md:right-[510px]" : "md:right-0") : "md:right-0"} 
          ${Header ? (fixedHeader ? "mt-[66px]" : "mt-4") : "mt-0"} 
          ${Footer ? "pb-20" : "pb-0"} px-0 
          ${Navbar ? variant==="inner"? "left-0 md:left-72" : "left-0 md:left-16" : "left-0"}`}
      >
        {props.children}
      </motion.div>

    );



    const renderFooterAlt = () => (
      <IfElse condition={!!Footer}>
        <motion.div
          initial={{ right: 55 }}
          animate={{
            right: asideOpened ? 510 : 47,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          aria-label="FooterAlt"
          className={`h-16 ${withBorder ? "border-t" : ""} flex fixed bottom-0 items-center mr-0 "md:mr-0"} left-0 px-0 right-12 md:mr-0
          
          ${Navbar ? "md:ml-16" : "md:ml-0 mt-16"}`}

        >
          {Footer && Footer}
        </motion.div>

        <></>
      </IfElse>
    );

    const renderAsideAlt = () => (
      <IfElse condition={!!Aside}>
        <>
          <motion.div
            initial={{ display: "none", right: "0" }}
            animate={{
              display: asideOpened ? "block" : "none",
              right: asideOpened ? "12px" : "-500px",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`fixed z-8 bg-red-400 h-full ${withBorder ? "border-l" : ""
              } ${layout === "alt" ? "top-16" : "top-0"}`}
            aria-label="AsideAlt"
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

    const renderNavbarDefault = () => (
      <IfElse condition={!!Navbar}>
        <nav
          className={`fixed mt-[.01rem] h-screen z-10 bottom-0 hidden sm:hidden md:flex lg:flex ${withBorder ? "border-r" : ""
            } ${variant === "default"
              ? "w-16 left-0 top-0 bottom-0"
              : "w-72 left-0 top-0 bottom-0"
            }`}
          aria-label="SideNavDefault"
        >
          {Navbar && Navbar}
        </nav>
        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
        <></>
      </IfElse>
    );

    const renderHeaderDefault = () => (

      <IfElse condition={!!Header}>
        <motion.div
          initial={{ right: 55 }}
          animate={{
            right: asideOpened ? 510 : 47,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          aria-label="HeaderDefault"
          className={`h-16 z-20 bg-purple-300 top-0 ${variant == "inner" ? "left-0 md:left-72 right-12" : "left-0 right-12 md:left-0"} ${fixedHeader ? "fixed" : ""
            } ${withBorder ? "border-b" : ""}`}

        >
          <header>
            <IfElse condition={!!asideOpened}>
              <></>
              <div className="flex items-center fixed">
              <Sheet
                side="left"
                className="flex items-center fixed"
                Trigger={
                  <div className="p-2 fixed text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-50 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <IconMenu2 stroke={1.5} />
                    <span className="sr-only">Toggle sidebar</span>
                  </div>
                }
                onClose={() => console.log("closed")}
                title="Menu"
              >
                {Navbar && Navbar}
              </Sheet>
              </div>
            </IfElse>
            {Header && Header}
          </header>
        </motion.div>

        <></>
      </IfElse>
    );

    const renderMainDefault = () => (
      <motion.div
        initial={{ right: 47 }}
        animate={{
          right: asideOpened ? 510 : 47,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        aria-label="MainDefault"
        className={`h-screen bg-blue-300 fixed  sm:mr-0 
          ${Aside ? (asideOpened ? "md:right-[510px]" : "md:right-0") : "md:right-0"} 
          ${Header ? (fixedHeader ? "mt-[66px]" : "mt-4") : "mt-0"} 
          ${Footer ? "pb-20" : "pb-0"} px-0 
          ${Navbar ? variant==="inner"? "left-0 md:left-72" : "left-0 md:left-16" : "left-0"}`}
      >
        {props.children}
      </motion.div>

    );

    const renderFooterDefault = () => (
      <IfElse condition={!!Footer}>
        <motion.div
          initial={{ right: 55 }}
          animate={{
            right: asideOpened ? 510 : 47,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          aria-label="FooterDefault"
          className={`h-16 ${withBorder ? "border-t" : ""} flex fixed bottom-0 items-center mr-0 "md:mr-0"} left-0 px-0 right-12 md:mr-0
          
          ${Navbar ? "md:ml-16" : "md:ml-0 mt-16"}`}

        >
          {Footer && Footer}
        </motion.div>

        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
        <></>
      </IfElse>
    );

    const renderAsideDefault = () => (
      <IfElse condition={!!Aside}>
        <>
          <motion.div
            initial={{ display: "none", right: "0" }}
            animate={{
              display: asideOpened ? "block" : "none",
              right: asideOpened ? "12px" : "-500px",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`fixed z-30 w-[500px] h-full ${withBorder ? "border-l" : ""
              } ${layout === "default" ? "top-0 z-10" : ""}`}
            aria-label="AsideDefault"
          >
            {Aside}
          </motion.div>
          <div
            className={`w-12 z-40 fixed mt-[0.01rem] right-0 top-0 h-screen ${withBorder ? "border-l" : ""
              } pt-4 bg-background flex flex-col items-center`}
          >
            <Stack>
              <span className={`border-l-2 ${withBorder ? "border-primary" : "border-transparent"} w-full px-2`}>
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
          "w-full h-screen overflow-auto text-primary"
        )}
        {...props}
        ref={ref}
      >
        <div className="w-full flex flex-col h-screen">
          {layout === "default" ? renderHeaderDefault() : renderHeaderAlt()}
          <div className="flex flex-row justify-between">
            {layout === "default" ? renderNavbarDefault() : renderNavbarAlt()}
            {layout === "default" ? renderMainDefault() : renderMainAlt()}
            {layout === "default" ? renderAsideDefault() : renderAsideAlt()}
          </div>
          {layout === "default" ? renderFooterDefault() : renderFooterAlt()}
        </div>
      </div>
    );
  }
);

AppShell.displayName = "AppShell";

export { AppShell };
