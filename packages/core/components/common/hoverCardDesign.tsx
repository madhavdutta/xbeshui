export const HoverCardDesign = () => {
  return (
    <div className="flex justify-between space-x-2">
      <div>
        {/* <img width={50} src="https://www.xbesh.com/images/logo.svg" alt=""/> */}
      </div>
      <div className="space-y-1">
        <h4 className="text-md font-semibold">xbesh UI</h4>
        <p className="text-sm">
          The React Framework – created and maintained by xbesh.
        </p>
        <div className="flex items-center pt-2">
          {/* <IconCalendarMonth /> */}
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  );
};
