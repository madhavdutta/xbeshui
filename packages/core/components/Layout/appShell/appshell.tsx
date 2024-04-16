import React from "react";
import { appShellProps, appShellVariant } from "./appShell.config";
import { cn } from "../../../../utils";
import { IconMenu2 } from "@tabler/icons-react";
import {
  Sheet
} from "../..";

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
      ...props
    },
    ref
  ) => {


    return layout === "default" ? (
      <div
        className={cn(
          appShellVariant({ layout, variant, className }),
          "w-full h-full overflow-auto bg-background text-primary"
        )}
        {...props}
        ref={ref}
      >
        <div className="w-full flex flex-row justify-between h-full">
          {Navbar ? (
            variant === "default" ? (
              <nav
                className={`w-16 fixed left-0 top-0 bottom-0 h-full hidden sm:hidden md:flex lg:flex ${withBorder ? "border-r" : ""
                  }  `}
                aria-label="Sidenav"
              >
                <Navbar />
              </nav>
            ) : (
              <nav
                className={`w-72 fixed h-full hidden sm:hidden md:flex lg:flex  ${withBorder ? "border-r" : ""
                  }  `}
                aria-label="Sidenav"
              >
                <Navbar />
              </nav>
            )
          ) : null}
          <div
            className={`w-full h-full  ml-0 sm:ml-0 ${Navbar ? "md:ml-16" : "md:ml-0"
              } ${Navbar
                ? variant === "inner"
                  ? "md:ml-72"
                  : "md:ml-16"
                : "md:ml-0"
              }`}
          >
            {Header && (
              <header
                className={`h-16 fixed top-0 bg-background left-0 sm:left-0 md:left-16 flex items-center  ${Navbar
                    ? variant === "inner"
                      ? "md:left-72"
                      : "md:left-16"
                    : "md:left-0"
                  } right-0 ${Aside ? "lg:right-96" : "lg:right-0"} ${Aside ? "lg:right-96" : "lg:right-0"
                  } ${withBorder ? "border-b" : ""}`}
              >
                <Sheet
                  side="left"
                  className="flex items-center"
                  Trigger={
                    <>
                      <button
                        className="p-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-50 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <IconMenu2 stroke={1.5} />
                        <span className="sr-only">Toggle sidebar</span>
                      </button>
                    </>
                  }
                  onClose={() => console.log("closed")}
                  title="Header Sheet"
                >
                  {Navbar && <Navbar />}
                </Sheet>

                <Header />
              </header>
            )}

            <main
              className={`py-20 h-auto mr-0 ${Aside ? "lg:mr-96" : "lg:mr-0"} ${Header ? "pt-20" : "pt-0"
                } ${Footer ? "pb-20" : "pb-0"} px-0 ${Aside ? "lg:mr-96" : "lg:mr-0"
                }`}
            >
              {props.children}
            </main>

            {Footer && (
              <footer
                className={`h-16 flex items-center bg-background fixed bottom-0 left-0 sm:left-0 md:left-16 ${Navbar
                    ? variant === "inner"
                      ? "md:left-72"
                      : "md:left-16"
                    : "md:left-0"
                  } right-0 ${Aside ? "lg:right-96" : "lg:right-0"} mr ${Aside ? "lg:right-96" : "lg:right-0"
                  } ${withBorder ? "border-t" : ""}`}
              >
                <Footer />
              </footer>
            )}
          </div>
          {Aside && (
            <aside
              className={`w-96 fixed right-0 top-0 bottom-0 h-full lg:flex hidden ${withBorder ? "border-l" : ""
                }`}
              aria-label="Sidebar"
              id=""
            >
              <Aside />
            </aside>
          )}
        </div>
      </div>
    ) : (
      <div
        className={cn(
          appShellVariant({ layout, variant, className }),
          "w-full h-full overflow-auto bg-background text-primary"
        )}
        {...props}
        ref={ref}
      >
        <div className="w-full flex flex-col h-full">
          {Header && (
            <header
              className={`h-16 fixed top-0 bg-background w-full ${withBorder ? "border-b" : ""
                }`}
            >
              <Header />
            </header>
          )}
          <div className="flex flex-row justify-between">
            {Navbar ? (
              variant === "default" ? (
                <nav
                  className={`w-24 fixed left-0 ${Header ? "top-20" : "top-0"
                    } bottom-0 h-full hidden sm:hidden md:flex lg:flex ${withBorder ? "border-r" : ""
                    }  `}
                >
                  <Navbar />
                </nav>
              ) : (
                <nav
                  className={`w-72 fixed fixed left-0 ${Header ? "top-20" : "top-0"
                    } bottom-0 h-full hidden sm:hidden md:flex lg:flex  ${withBorder ? "border-r" : ""
                    }`}
                >
                  <Navbar />
                </nav>
              )
            ) : null}
            <main
              className={`w-full py-20 h-auto ml-0 sm:ml-0 ${Header ? "pt-20" : "pt-0"
                } ${Navbar
                  ? variant === "inner"
                    ? "md:ml-72"
                    : "md:ml-16"
                  : "md:ml-0"
                } ml-0 mr-0  ${Aside ? "lg:mr-96" : "lg:mr-0"}`}
            >
              {props.children}
            </main>
            {Aside && (
              <aside
                className={`w-96 fixed right-0 bottom-0 lg:flex hidden ${Header ? "top-20" : "top-0"
                  } ${withBorder ? "border-l" : ""}`}
              >
                <Aside />
              </aside>
            )}
          </div>

          {Footer && (
            <footer
              className={`h-20 bg-background fixed bottom-0 left-0 w-full ${withBorder ? "border-t" : ""
                }`}
            >
              <Footer />
            </footer>
          )}
        </div>
      </div>
    );
  }
);

AppShell.displayName = "AppShell";

export { AppShell };
