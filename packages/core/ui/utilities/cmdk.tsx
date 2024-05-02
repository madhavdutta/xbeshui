import React, { useState, useRef, useEffect } from 'react';

interface Command {
  title: string;
  icon: string;
  shortcut: string;
  onSelect: () => void;
  group?: string;
  subgroup?: string;
}

interface CommandMenuProps {
  commands: Command[];
  onClose: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ commands, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const groupedCommands = commands.reduce((acc, command) => {
    const { group = 'Uncategorized', subgroup = 'General', ...rest } = command;
    if (!acc[group]) {
      acc[group] = { subgroups: {} };
    }
    if (!acc[group].subgroups[subgroup]) {
      acc[group].subgroups[subgroup] = [];
    }
    acc[group].subgroups[subgroup].push(rest);
    return acc;
  }, {} as { [key: string]: { subgroups: { [key: string]: Command[] } } });

  const filteredGroups = Object.entries(groupedCommands).reduce((acc, [group, { subgroups }]) => {
    const filteredSubgroups = Object.entries(subgroups).reduce((subAcc, [subgroup, commands]) => {
      const filteredCommands = commands.filter((command) =>
        command.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredCommands.length > 0) {
        subAcc[subgroup] = filteredCommands;
      }
      return subAcc;
    }, {} as { [key: string]: Command[] });

    if (Object.keys(filteredSubgroups).length > 0) {
      acc[group] = { subgroups: filteredSubgroups };
    }
    return acc;
  }, {} as { [key: string]: { subgroups: { [key: string]: Command[] } } });

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-[90vw] rounded-md shadow-lg p-4 z-50 dark:bg-gray-800 bg-white"
      >
        <div className="mb-4">
          <input
            ref={inputRef}
            type="text"
            className="w-full border-none rounded-md px-4 py-3 focus:outline-none dark:bg-gray-700 dark:text-gray-300 bg-gray-100 text-gray-800"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="space-y-4">
          {Object.entries(filteredGroups).map(([group, { subgroups }]) => (
            <div key={group}>
              <h3
                className="text-lg font-bold mb-2 dark:text-gray-300 text-gray-800"
              >
                {group}
              </h3>
              {Object.entries(subgroups).map(([subgroup, commands]) => (
                <div key={subgroup}>
                  <h4
                    className="text-md font-medium mb-1 dark:text-gray-300 text-gray-800"
                  >
                    {subgroup}
                  </h4>
                  <ul className="max-h-[200px] overflow-y-auto">
                    {commands.map((command, index) => (
                      <li
                        key={index}
                        className="flex items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-gray-800"
                        onClick={() => command.onSelect()}
                      >
                        <div
                          className="mr-3 dark:text-gray-500 text-gray-600"
                        >
                          {command.icon}
                        </div>
                        <div className="flex-1 text-sm">{command.title}</div>
                        <div
                          className="dark:text-gray-500 text-gray-600 text-xs"
                        >
                          {command.shortcut}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommandMenu;