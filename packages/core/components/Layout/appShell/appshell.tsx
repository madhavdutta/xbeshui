import React, { useEffect, useState } from "react";
import { appShellProps, appShellVariant } from "./appShell.config";
import { cn } from "../../../../utils";

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
    const [mainHeight, setMainHeight] = useState<number>(window.innerHeight - 160);

    useEffect(() => {
      const handleResize = () => {
        if (layout === "default") setMainHeight(window.innerHeight - 160);
        else setMainHeight(window.innerHeight - 100);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
      layout === "default" ? (
        <div
          className={cn(
            appShellVariant({ layout, variant, className }),
            "w-full h-screen  overflow-auto bg-background text-primary"
          )}
          {...props}
          ref={ref}
        >
          <div className="w-full flex flex-row justify-between h-screen">
            {Navbar ? variant === "default" ? (
              <nav
                className={`w-24 fixed left-0 top-0 bottom-0 h-screen hidden sm:hidden md:flex lg:flex p-2 ${withBorder ? "border-r" : ""
                  }  `}
                aria-label="Sidenav"
              >
                <Navbar />
              </nav>
            ) : <nav
              className={`h-screen hidden sm:hidden md:flex lg:flex  ${withBorder ? "border-r" : ""
                }  `}
              aria-label="Sidenav"
            >
              <Navbar />
            </nav> : null}
            <div className={`w-full h-screen  ml-0 sm:ml-0 md:ml-24 ${Navbar ? 'md:ml-24': 'md:ml-0'}`}>
              {Header && (
                <header
                  className={`h-20 fixed top-0 bg-background left-0 sm:left-0 md:left-24 ${Navbar ? 'md:left-24': 'md:left-0'} right-0 lg:right-96 ${Aside ? 'lg:right-96': 'lg:right-0'}  min-h-20 px-4 ${withBorder ? "border-b" : ""}`}
                >
                  <Header />
                </header>
              )}

              <main className={`mr-0 lg:mr-96 ${Header ? 'pt-20': 'pt-0'} px-0 ${Aside ? 'lg:mr-96': 'lg:mr-0'}`}>
                {props.children}
              </main>

              {Footer && (
                <footer
                  className={`h-20 p-2 bg-background fixed bottom-0 left-0 sm:left-0 md:left-24 ${Navbar ? 'md:left-24': 'md:left-0'} right-0 lg:right-96 mr ${Aside ? 'lg:right-96': 'lg:right-0'} ${withBorder ? "border-t" : ""}`}
                >
                  <Footer />
                </footer>
              )}
            </div>
            {Aside && (
              <aside
                className={`w-96 fixed right-0 top-0 bottom-0 h-screen lg:flex hidden p-2 ${withBorder ? "border-l" : ""
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
            "w-full h-screen overflow-auto bg-background text-primary"
          )}
          {...props}
          ref={ref}
        >
          <div className="w-full flex flex-col h-screen">
            {Header && (
              <header
                className={`h-20 fixed top-0 bg-background w-full px-4 ${withBorder ? "border-b" : ""}`}
              >
                <Header />
              </header>
            )}
            <div className="flex flex-row justify-between">
              {Navbar ? variant === "default" ? (
                <nav
                  className={`w-24 fixed left-0 ${Header ? 'top-20': 'top-0'} bottom-0 h-screen hidden sm:hidden md:flex lg:flex p-2 ${withBorder ? "border-r" : ""
                    }  `}
                  aria-label="Sidenav"
                  
                >
                  <Navbar />
                </nav>
              ) : <nav
                className={` w-96 h-screen hidden sm:hidden md:flex lg:flex  ${withBorder ? "border-r" : ""
                  }  `}
                aria-label="Sidenav"
               
              >
                <Navbar />
              </nav> : null}
              <main className={`w-full py-20 h-auto ml-0 sm:ml-0 ${Header ? 'pt-20': 'pt-0'} ${Navbar ? 'md:ml-24': 'md:ml-0'} md:ml-24 mr-0  ${Aside ? 'lg:mr-96': 'lg:mr-0'}`}>
                {props.children}
              </main>
              {Aside && (
                <aside
                  className={`w-96 fixed right-0 bottom-0 lg:flex hidden p-2 ${Header ? 'top-20': 'top-0'} ${withBorder ? "border-l" : ""
                    }`}
                  aria-label="Sidebar"
                  id=""
                >
                  <Aside />
                </aside>
              )}
            </div>


            {Footer && (
              <footer
                className={`h-20 bg-background fixed bottom-0 left-0 w-full p-2 ${withBorder ? "border-t" : ""}`}
              >
                <Footer />
              </footer>
            )}


          </div>
        </div>
      )
    );
  }
);

AppShell.displayName = "AppShell";

export { AppShell };
