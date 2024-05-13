import { Group, Text, Tooltip } from "../../../components/index"

interface NavItemProps {
  headerItem?: React.ReactNode;
  navItem: {
    link: string;
    title: string;
    icon: React.ReactNode;
  }[];
  footerItem?: React.ReactNode;
}
const NavbarUI = ({ headerItem, navItem, footerItem }: NavItemProps) => {

  
  return (
    <>
      <aside className="pb-14 sm:pb-6 pt-4 justify-between bg-background w-full flex flex-col items-start sm:items-center">
        <nav className="flex flex-col gap-6 items-start sm:items-center">
          <div className={"hidden sm:flex rounded-full bg-primary text-secondary w-10 h-10  justify-center items-center scale-100 hover:scale-90 cursor-pointer transition-scale ease-in duration-200 "}>{headerItem && headerItem}</div>
          {navItem.map((item) => {
            return (
              <Tooltip key={item.title}>
                <Tooltip.Trigger asChild>
                  <a href={item.link} key={item.title}>
                    <Group gap="xs">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-accent ease-in duration-200 cursor-pointer text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
                        {item.icon}
                      </div>
                      <Text className="flex md:hidden lg:hidden" size={"sm"}>{item.title}</Text>
                    </Group>
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Content side="right">
                  {item.title}
                </Tooltip.Content>
              </Tooltip>

            );
          })}
        </nav>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-accent ease-in duration-200 cursor-pointer text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"> {footerItem && footerItem} </div>
      </aside>
    </>
  );
};

NavbarUI.displayName = "NavbarUI";

export { NavbarUI };