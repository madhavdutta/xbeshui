import { useState, useRef, useEffect } from 'react';

const Navmenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const itemsRef = useRef<HTMLDivElement>(null);

  const items = [
    { title: 'AI copywriter', image: 'https://assets-global.website-files.com/645a9acecda2e0594fac6126/657c692967be27c5b8f02d2c_ai-copywriter.png', status: 'In Development' },
    { title: 'Synced whiteboard', image: 'https://assets-global.website-files.com/645a9acecda2e0594fac6126/657c692978f74dd817118082_synced-whiteborad.png', status: 'Planned' },
    { title: 'Notion like editor', image: 'https://assets-global.website-files.com/645a9acecda2e0594fac6126/657c692a05329ebd9b46f958_Notion%20like%20editor.png', status: 'Launched' },
    { title: 'Block editor', image: 'https://assets-global.website-files.com/645a9acecda2e0594fac6126/657c692918318caccd2689f1_Block-editor.png', status: 'Planned' },
    { title: 'Chat interface', image: 'https://assets-global.website-files.com/645a9acecda2e0594fac6126/657c6929c2caebeffbd39a0f_chat-interface.png', status: 'Planned' },
    { title: 'Website builder', image: 'https://assets-global.website-files.com/645a9acecda2e0594fac6126/657c692aa63569d842a9fb78_website-builder.png', status: 'Planned' },
    { title: 'Collaborative todo list', image: 'https://assets-global.website-files.com/645a9acecda2e0594fac6126/657c6929d57f792e5cab06a3_Collaborative%20todo%20list.png', status: 'Planned' },
  ];

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setIsLoading(true);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (itemsRef.current) {
      const activeItem = itemsRef.current.children[activeIndex] as HTMLElement;
      const itemWidth = activeItem.offsetWidth;
      // const itemsWidth = itemsRef.current.scrollWidth;
      const containerWidth = itemsRef.current.offsetWidth;
      const scrollPosition = activeItem.offsetLeft - (containerWidth - itemWidth) / 2;
  
      itemsRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [activeIndex, itemsRef]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="flex flex-col items-center">
      <div
        ref={itemsRef}
        className="flex overflow-x-auto scrollbar-hide space-x-6 p-6 w-full"
      >
        {items.map((item, index) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className={`flex-shrink-0 w-40 h-40 rounded-lg shadow-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 ${
              index === activeIndex ? 'border-4 border-indigo-500' : ''
            }`}
            onClick={() => handleItemClick(index)}
          >
            <div className="flex flex-col items-center justify-center h-full font-semibold p-4">
              <img src={item.image} alt={item.title} className="w-12 h-12 mb-2" />
              <div className="text-center">{item.title}</div>
              <div className="text-sm text-gray-500">{item.status}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 rounded-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900" />
          </div>
        )}
        <img
          src={items[activeIndex].image}
          alt={items[activeIndex].title}
          className={`w-96 h-96 object-cover rounded-lg shadow-lg transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default Navmenu;