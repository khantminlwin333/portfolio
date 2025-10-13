import { Code2, Eye } from "lucide-react";
import { Button } from "./ui/button";

interface ViewToggleProps {
  view: 'ui' | 'code';
  onToggle: (view: 'ui' | 'code') => void;
}

export const ViewToggle = ({ view, onToggle }: ViewToggleProps) => {
  return (
    <div className="flex items-center gap-2 p-3 border-b border-border bg-editor-sidebar">
      <Button
        variant={view === 'ui' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onToggle('ui')}
        className="gap-2"
      >
        <Eye className="h-4 w-4" />
        UI View
      </Button>
      <Button
        variant={view === 'code' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onToggle('code')}
        className="gap-2"
      >
        <Code2 className="h-4 w-4" />
        Code View
      </Button>
    </div>
  );
};
