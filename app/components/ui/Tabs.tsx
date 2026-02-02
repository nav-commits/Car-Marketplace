"use client";

import clsx from "clsx";

type TabsProps = {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
}) => {
  return (
    <div className={clsx("flex gap-6 justify-center", className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={clsx(
            "pb-2 text-sm transition-colors cursor-pointer",
            activeTab === tab
              ? "border-b-2 border-[#405FF2] font-semibold"
              : "hover:text-black"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
