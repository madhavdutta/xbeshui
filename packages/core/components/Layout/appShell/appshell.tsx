import React from "react";
import { appShellProps, appShellVariant } from "./appShell.config";
import { cn } from "../../../../utils";
import { IconMenu2 } from "@tabler/icons-react";
import { Sheet } from "../../Overlays/sheet/sheet";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
import { IfElse } from "../../Misc/ifElse/ifElse";

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
      ...props
    },
    ref
  ) => {
    useXbeshProviderCheck();

    const renderNavbar = () => (
      <IfElse condition={!!Navbar}>
        <nav
          className={`fixed h-screen hidden sm:hidden md:flex lg:flex ${withBorder ? "border-r" : ""
            } ${variant === "default" ? "w-16 left-0 top-0 bottom-0" : "w-72"}`}
          aria-label="Sidenav"
        >
          {Navbar && Navbar}
        </nav>
        <></>
      </IfElse>
    );

    const renderHeader = () => (
      <IfElse condition={!!Header}>
        <header
          className={`h-16 top-0 ${fixedHeader ? "fixed" :""}  flex items-center ${withBorder ? "border-b" : ""
            } left-0 sm:left-0 ${layout === "default"
              ? Navbar
                ? variant === "inner"
                  ? "md:left-72"
                  : "md:left-16"
                : "md:left-0"
              : (Navbar ? (variant == "inner" ? "md:left-72" : "md:left-16") : "md:left-0")

            } ${Aside ? (fixedHeader? "md:right-96" : "md:mr-96") : "md:right-0"}`}
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
        <></>
      </IfElse>
    );

    const renderMain = () => (
      <main
        className={`h-screen mr-0 ${Aside ? "md:mr-96" : "md:mr-0"} ${Header ? (fixedHeader ? "pt-20" : "pt-4") : "pt-0"
          } ${Footer ? "pb-20" : "pb-0"} px-0 ${(variant == "default" && layout == "alt") ? "md:ml-16" : "md:ml-0"} ${(variant == "inner" && layout == "alt") ? "md:ml-72" : "md:ml-0"}`}
      >
        {props.children}
      </main>
    );

    const renderFooter = () => (
      <IfElse condition={!!Footer}>
        <footer
          className={`h-16 flex items-center fixed bottom-0 ${withBorder ? "border-t" : ""
            } left-0 sm:left-0 ${Navbar
              ? variant === "inner"
                ? "md:left-72"
                : "md:left-16"
              : "md:left-0"
            } right-0 ${Aside ? "lg:right-96" : "lg:right-0"}`}
        >
          {Footer && Footer}
        </footer>
        <></>
      </IfElse>
    );

    const renderAside = () => (
      <IfElse condition={!!Aside}>
        <aside
          className={`w-96 fixed right-0 top-0 bottom-0 h-screen lg:flex hidden ${withBorder ? "border-l" : ""
            }`}
          aria-label="Sidebar"
        >
          {Aside && Aside}
        </aside>
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
        <IfElse condition={layout === "default"}>
          <div className="w-full flex flex-row justify-between h-screen">
            {renderNavbar()}
            <div
              className={`w-full h-full ml-0 sm:ml-0 ${Navbar
                  ? variant === "inner"
                    ? "md:ml-72"
                    : "md:ml-16"
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
  }
);

AppShell.displayName = "AppShell";

export { AppShell };
