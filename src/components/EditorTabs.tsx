import { X } from "lucide-react";

interface Tab {
  name: string;
  path: string;
}

interface EditorTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (path: string) => void;
  onTabClose?: (path: string) => void;
}

export const EditorTabs = ({ tabs, activeTab, onTabClick, onTabClose }: EditorTabsProps) => {
  return (
    <div className="flex items-center bg-editor-sidebar border-b border-border overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.path}
          className={`flex items-center gap-2 px-4 py-2 text-sm border-r border-border cursor-pointer transition-colors ${
            activeTab === tab.path
              ? 'bg-editor-tab-active text-foreground'
              : 'bg-editor-tab-inactive text-muted-foreground hover:bg-editor-tab-active/50'
          }`}
          onClick={() => onTabClick(tab.path)}
        >
          <span>{tab.name}</span>
          {onTabClose && tabs.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab.path);
              }}
              className="hover:bg-secondary/50 rounded p-0.5 transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
