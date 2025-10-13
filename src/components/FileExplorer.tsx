import {
  FileText,
  ChevronRight,
  ChevronDown,
  Folder,
  Share2,
  Moon,
  Sun,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface FileItem {
  name: string;
  path: string;
  type: "file" | "folder";
}

interface FileExplorerProps {
  currentFile: string;
  onFileSelect: (path: string) => void;
}

const files: FileItem[] = [
  { name: "index.html", path: "/", type: "file" },
  { name: "about.html", path: "/about", type: "file" },
  { name: "skills.html", path: "/skills", type: "file" },
  { name: "projects.html", path: "/projects", type: "file" },
  { name: "contact.html", path: "/contact", type: "file" },
];

export const FileExplorer = ({ currentFile, onFileSelect }: FileExplorerProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const handleShare = async () => {
    const shareData = {
      title: "ML TeachHub Portfolio",
      text: "Check out this amazing portfolio!",
      url: window.location.href, // current page
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Shared successfully!");
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard!");
      } catch {
        alert("Could not copy link. Please manually copy the URL.");
      }
    }
  }

  return (
    <>
      {/* 🖥️ Desktop Sidebar */}
      <div className="hidden md:flex w-40 bg-editor-sidebar border-r border-border h-screen flex-col">
        <div className="p-3 border-b border-border">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Explorer
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center w-full text-sm text-foreground hover:bg-secondary/50 rounded px-2 py-1 transition-colors"
            >
              {isOpen ? (
                <ChevronDown className="h-4 w-4 mr-1" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-1" />
              )}
              <Folder className="h-4 w-4 mr-2 text-primary" />
              <span className="font-medium">portfolio</span>
            </button>

            {isOpen && (
              <div className="ml-6 mt-1 space-y-1">
                {files.map((file) => (
                  <button
                    key={file.path}
                    onClick={() => onFileSelect(file.path)}
                    className={`flex items-center w-full text-sm rounded px-2 py-1 transition-colors ${
                      currentFile === file.path
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    }`}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    <span>{file.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom icons */}
        <div className="p-3 border-t border-border flex justify-between items-center">
          {/* Share */}
          <button onClick={handleShare} className="hover:text-primary transition-colors">
            <Share2 className="h-5 w-5" />
          </button>

          {/* Theme Toggle */}
          {isMounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-primary transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* 📱 Mobile — Arrow-only Explorer (bottom fixed) */}
<div className="md:hidden fixed bottom-4 left-4 z-40">
  {/* Arrow button */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="p-2 rounded-full bg-editor-sidebar border border-border text-foreground hover:bg-secondary/60 transition-all shadow-md"
    aria-label="Toggle explorer"
  >
    {isOpen ? (
      <ChevronDown className="h-5 w-5" />
    ) : (
      <ChevronRight className="h-5 w-5" />
    )}
  </button>

  {/* Dropdown when expanded */}
  {isOpen && (
    <div className="absolute bottom-12 left-0 w-52 bg-editor-sidebar border border-border rounded-lg shadow-xl p-2 animate-slideIn">
      {files.map((file) => (
        <button
          key={file.path}
          onClick={() => {
            onFileSelect(file.path);
            setIsOpen(false);
          }}
          className={`flex items-center w-full text-sm rounded px-2 py-1 transition-colors ${
            currentFile === file.path
              ? "bg-secondary text-foreground"
              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
          }`}
        >
          <FileText className="h-4 w-4 mr-2" />
          <span>{file.name}</span>
        </button>
      ))}

      {/* Mobile bottom icons */}
      <div className="mt-2 border-t border-border pt-2 flex justify-between">
        <button onClick={handleShare} className="hover:text-primary transition-colors">
          <Share2 className="h-5 w-5" />
        </button>

        {isMounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:text-primary transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
    </div>
  )}
      </div>
    </>
  );
};
