import { useState, useEffect } from "react";
import { Terminal, ChevronUp, ChevronDown } from "lucide-react";

interface CodeViewProps {
  content: string;
}

export const CodeView = ({ content }: CodeViewProps) => {
  // Simple syntax highlighting for HTML
  const highlightHTML = (html: string) => {
    return html
      .replace(/(&lt;!--.*?--&gt;)/g, '<span class="text-syntax-comment">$1</span>')
      .replace(/(&lt;\/?)([\w-]+)/g, '<span class="text-syntax-tag">$1$2</span>')
      .replace(/([\w-]+)=/g, '<span class="text-syntax-attribute">$1</span>=')
      .replace(/=&quot;([^&quot;]*)&quot;/g, '=<span class="text-syntax-string">&quot;$1&quot;</span>')
      .replace(
        /\b(function|const|let|var|return|if|else|for|while)\b/g,
        '<span class="text-syntax-keyword">$1</span>'
      );
  };

  const escapeHTML = (html: string) => {
    return html
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  const escapedContent = escapeHTML(content);
  const highlightedContent = highlightHTML(escapedContent);
  const lines = highlightedContent.split("\n");

  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);

  useEffect(() => {
    // Fun fake startup commands
    setTimeout(() => {
      setTerminalOutput([
        "ML TeachHub is runing now....... ✅",
      ]);
    }, 500);
  }, []);

  return (
    <div className="flex flex-col h-full bg-background border-l border-border font-mono text-sm overflow-hidden">
      {/* Code Editor Section */}
      <div className="flex-1 flex overflow-hidden">
        {/* Line numbers */}
        <div className="flex-shrink-0 bg-editor-sidebar text-editor-line text-right pr-4 pl-2 py-4 select-none border-r border-border">
          {lines.map((_, index) => (
            <div key={index} className="leading-6">
              {index + 1}
            </div>
          ))}
        </div>

        {/* Code content */}
        <div className="flex-1 overflow-auto">
          <pre className="p-4 leading-6">
            <code dangerouslySetInnerHTML={{ __html: highlightedContent }} />
          </pre>
        </div>
      </div>

      {/* Terminal Header */}
      <div className="bg-editor-sidebar border-t border-border flex items-center justify-between px-3 py-2 text-xs text-muted-foreground select-none cursor-pointer"
        onClick={() => setIsTerminalOpen(!isTerminalOpen)}
      >
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4" />
          <span>TERMINAL</span>
        </div>
        {isTerminalOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronUp className="h-4 w-4" />
        )}
      </div>

      {/* Terminal Content */}
      {isTerminalOpen && (
        <div className="bg-black text-green-400 px-4 py-3 font-mono text-xs border-t border-border h-32 overflow-auto">
          {terminalOutput.map((line, index) => (
            <div key={index} className="leading-5">
              <span className="text-green-500">$</span> {line}
            </div>
          ))}
          <div className="flex items-center">
            <span className="text-green-500">$</span>
            <span className="ml-2 animate-pulse">▊</span>
          </div>
        </div>
      )}
    </div>
  );
};
