import React from "react";
import {
  appShellVariant,
  type appShellProps,
  type IAsideProps,
} from "./appShell.config";
import { cn, isBrowser } from "../../../../utils";
import {
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { Sheet } from "../../Overlays/sheet/sheet";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
import { IfElse } from "../../Misc/ifElse/ifElse";
import { ActionIcon } from "../../Buttons/actionIcon/actionIcon";
import { Stack } from "../stack/stack";
import { motion } from "framer-motion";
import { Group, Skeleton, Tooltip, Text, Button, ScrollArea } from "../..";

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
      shrinkedAside,
      ...props
    },
    ref,
  ) => {
    useXbeshProviderCheck();

    const [asideOpened, setAsideOpened] = React.useState(false);
    const [_, setAsideId] = React.useState<string | null>(null);
    const [renderAsideData, setRenderAsideData] =
      React.useState<IAsideProps | null>(null);
    const [loading, setLoading] = React.useState(false);
    const height = isBrowser() ? window.innerHeight : 0;
    const calculateHeader = Header ? 64 :0
    const calculateFooter = Footer ? 64 :0
    const viewPortHeight = height - calculateHeader - calculateFooter;


    
    const renderNavbarAlt = () => (
      <IfElse condition={!!Navbar}>
        <nav
          className={`fixed z-30 hidden sm:hidden md:flex lg:flex left-0 top-16 mt-[.01rem] ${withBorder ? "border-r" : ""
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
          className={`z-30 h-16 md:right-0 top-0 left-0 right-0 fixed flex items-center ${withBorder ? "border-b" : ""}`}
          aria-label="HeaderAlt"
        >
          <Sheet
            side="left"
            className="flex items-start justify-start"
            Trigger={
              <div className="p-2 ml-2 text-foreground flex flex-col justify-start items-start  rounded-md cursor-pointer md:hidden hover:bg-primary hover:text-accent transition-colors duration-300">
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
        initial={{ right: Aside ? 47 : 0 }}
        animate={{
          right: asideOpened ? 510 : Aside ? 47 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        aria-label="MainAlt"
        className={`h-screen z-20 absolute left-0 mt-16 sm:mr-0 
          ${!asideOpened ? "sm:block" : "hidden sm:block"}
          ${Aside
            ? asideOpened
              ? "md:right-[510px]"
              : "md:right-0"
            : "md:right-0"
          } 
          ${Header ? "mt-[63px]" : "mt-0"} 
          ${Footer ? "pb-20" : "pb-0"} px-0 
          ${Navbar
            ? variant === "inner"
              ? "left-0 md:left-72"
              : "left-0 md:left-16"
            : "left-0"
          }`}
      >
        <ScrollArea className="overflow-y-auto" style={{height:`${viewPortHeight}px`}}>
        {props.children}
        </ScrollArea>
      </motion.div>
    );

    const renderFooterAlt = () => (
      <IfElse condition={!!Footer}>
        <motion.div
          initial={{ right: Aside ? 47 : 0 }}
          animate={{
            right: asideOpened ? 510 : Aside ? 47 : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          aria-label="FooterAlt"
          className={`z-30 h-16 ${withBorder ? "border-t" : ""} flex fixed bottom-0 items-center mr-0 "md:mr-0"} left-0 px-0 right-12
          
          ${Navbar
              ? variant === "inner"
                ? "md:ml-72"
                : "md:ml-16 mt-16"
              : "md:ml-0 mt-16"
            }`}
        >
          {Footer && Footer}
        </motion.div>

        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
        <></>
      </IfElse>
    );

    const handleFilter = (aside: IAsideProps | null) => {
      if (!aside) {
        setLoading(false);
        setRenderAsideData(null);
        return;
      }

      setLoading(true);
      setAsideId(aside.id);

      const asideData = Aside?.find((item) => item.id === aside.id);

      if (asideData) {
        setRenderAsideData(asideData);
      }

      setLoading(false);
    };

    const renderAsideComponent = (aside: IAsideProps) => {
      return (
        <div key={aside.title}>
          {aside.isOpenable && (
            <motion.div
              key={aside.title}
              initial={{ right: 0 }}
              animate={{
                right: asideOpened ? 12 : -500,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`fixed bg-background top-16 w-[500px] h-full ${withBorder ? "border-l" : ""
                }`}
              aria-label="AsideAlt"
            >
              {loading ? (
                <Group gap="xs" className="m-6">
                  <Stack className="gap-2">
                    <Skeleton
                      animate="default"
                      className="bg-gray-300 w-5/6 h-8"
                    />
                    <Skeleton
                      animate="default"
                      className="bg-gray-300 w-72 h-8"
                    />
                    <Skeleton
                      animate="default"
                      className="bg-gray-300 w-56 h-8"
                    />
                    <Skeleton
                      animate="default"
                      className="bg-gray-300 w-5/6 h-8"
                    />
                    <Skeleton
                      animate="default"
                      className="bg-gray-300 w-72 h-8"
                    />
                    <Skeleton
                      animate="default"
                      className="bg-gray-300 w-5/6 h-8"
                    />
                  </Stack>
                </Group>
              ) : (
                aside.openedAsideComponent ?
                  <>
                    <Group
                      gap="xs"
                      justify="spaceBetween"
                      className="bg-secondary/30 h-16 border-b pl-4 pr-12"
                    >
                      <Group gap="xs">
                        {aside.icon}
                        <Text size="md" fontWeight="bold">{aside.title}</Text>
                      </Group>
                      <Group gap="xs" justify="right">
                        {/* <Button variant={"ghost"}>
												<IconArrowsDiagonalMinimize2 width={16} />
											</Button> */}
                        <Button variant={"ghost"} onClick={() => setAsideOpened(false)}>
                          <IconX width={16} />
                        </Button>
                      </Group>
                    </Group>

                    
                    {aside && <ScrollArea style={{height:viewPortHeight,}}>{aside.openedAsideComponent}</ScrollArea>}
                  </>
                  : null
              )}
            </motion.div>
          )}
        </div>
      );
    };

    const renderAsideAlt = (Aside: IAsideProps[]) => (
      <IfElse condition={Aside && Array.isArray(Aside) && Aside.length > 0}>
        <div className="z-30">
          {renderAsideData &&
            renderAsideComponent(renderAsideData as IAsideProps)}

          <div
            className={`fixed mt-[0.01rem] right-0 top-16 h-screen ${withBorder ? "border-l" : ""
              } pt-4 bg-background flex flex-col items-center`}
          >
            <Stack justify="center" align="center" className="px-0">
              {Array.isArray(Aside) && Aside.map((aside) => (
                <ActionIcon
                  onClick={() =>
                    aside.isOpenable
                      ? [setAsideOpened(!asideOpened), handleFilter(aside)]
                      : aside.onClick
                        ? aside.onClick()
                        : null
                  }
                  size="lg"
                  key={aside.title}
                  variant="ghost"
                  radius="none"
                  className="active:bg-accent active:text-foreground transition-colors duration-300"
                  loading={loading}
                // disabled={loading}
                >
                  <Tooltip>
                    <Tooltip.Trigger asChild>{aside.icon}</Tooltip.Trigger>
                    <Tooltip.Content side="left">
                      <p>{aside.title}</p>
                    </Tooltip.Content>
                  </Tooltip>
                </ActionIcon>
              ))}
            </Stack>
          </div>
        </div>
        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
        <></>
      </IfElse>
    );

    const renderNavbarDefault = () => (
      <IfElse condition={!!Navbar}>
        <nav
          className={`fixed z-30 mt-[.01rem] h-screen bottom-0 hidden sm:hidden md:flex lg:flex ${withBorder ? "border-r" : ""
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
          initial={{ right: 50 }}
          animate={{
            right: asideOpened ? 510 : 50,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          aria-label="HeaderDefault"
          className={`z-30 h-16 bg-background top-0 ${variant === "inner"
              ? "left-0 md:left-72 right-16"
              : "left-0  md:left-16"
            } "fixed" ${withBorder ? "border-b" : ""}`}
        >
          <header className="h-full flex items-center">
            <IfElse condition={!!asideOpened}>
              {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
              <></>
              <div className="flex items-center">
                <Sheet
                  side="left"
                  className="flex items-center "
                  Trigger={
                    <div className="p-2 ml-2 text-foreground flex flex-col justify-start items-start  rounded-md cursor-pointer md:hidden hover:bg-primary hover:text-accent transition-colors duration-300">
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

        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
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
        className={`h-screen z-20 bg-background/30 fixed  sm:mr-0 
        ${!asideOpened ? "sm:block" : "hidden sm:block"}
          ${Aside
            ? asideOpened
              ? "md:right-[510px]"
              : "md:right-0"
            : "md:right-0"
          } 
          ${Header ? "mt-[66px]" : "mt-0"} 
          ${Footer ? "pb-20" : "pb-0"} px-0 
          ${Navbar
            ? variant === "inner"
              ? "left-0 md:left-72"
              : "left-0 md:left-16"
            : "left-0"
          }`}
      >
        {props.children}
      </motion.div>
    );

    const renderFooterDefault = () => (
      <IfElse condition={!!Footer}>
        <motion.div
          initial={{ right: 50 }}
          animate={{
            right: asideOpened ? 510 : 50,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          aria-label="FooterDefault"
          className={`z-30 h-16 ${withBorder ? "border-t" : ""} flex fixed bottom-0 items-center mr-0 "md:mr-0"} left-0 px-0 right-12 md:mr-0
          
          ${Navbar
              ? variant === "inner"
                ? "md:ml-72"
                : "md:ml-16 mt-16"
              : "md:ml-0 mt-16"
            }`}
        >
          {Footer && Footer}
        </motion.div>

        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
        <></>
      </IfElse>
    );

    // const renderAsideDefault = () => (
    // 	<IfElse condition={!!Aside}>
    // 		<div className="z-50">
    // 			<motion.div
    // 				initial={{ right: "0" }}
    // 				animate={{
    // 					right: asideOpened ? 12 : -500,
    // 				}}
    // 				transition={{ type: "spring", stiffness: 500, damping: 30 }}
    // 				className={`fixed bg-background w-[498px] top-0 h-full ${
    // 					withBorder ? "border-l" : ""
    // 				}`}
    // 				aria-label="AsideDefault"
    // 			>
    // 				{Aside}
    // 			</motion.div>
    // 			<div
    // 				className={`w-12 fixed mt-[0.01rem] right-0 top-0 h-screen ${
    // 					withBorder ? "border-l" : ""
    // 				} pt-4 bg-background flex flex-col items-center`}
    // 			>
    // 				<Stack>
    // 					<span className="border-l-2 border-primary w-full px-2">
    // 						<ActionIcon
    // 							onClick={() => setAsideOpened(!asideOpened)}
    // 							size="xs"
    // 							variant="secondary"
    // 							radius="full"
    // 						>
    // 							<IconTarget size={20} />
    // 						</ActionIcon>
    // 					</span>
    // 					<span className="border-l-2 border-transparent w-full px-2">
    // 						<ActionIcon size="xs" radius="full">
    // 							<IconTarget size={20} />
    // 						</ActionIcon>
    // 					</span>
    // 				</Stack>
    // 			</div>
    // 		</div>
    // 		{/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
    // 		<></>
    // 	</IfElse>
    // );

    return (
      <div
        className={cn(
          appShellVariant({ layout, variant, className }),
          "w-full h-screen text-primary",
        )}
        {...props}
        ref={ref}
      >
        <div className="w-full flex flex-col">
          {layout === "default" ? renderHeaderDefault() : renderHeaderAlt()}
          <div className="flex flex-row justify-between">
            {layout === "default" ? renderNavbarDefault() : renderNavbarAlt()}
            {layout === "default" ? renderMainDefault() : renderMainAlt()}
            {/* {layout === "default" ? renderAsideDefault() : renderAsideAlt()} */}
            {renderAsideAlt(Aside as IAsideProps[])}
          </div>
          {layout === "default" ? renderFooterDefault() : renderFooterAlt()}
        </div>
      </div>
    );
  },
);

AppShell.displayName = "AppShell";

export { AppShell };
