import { useState } from "react";
import { FileExplorer } from "@/components/FileExplorer";
import { EditorTabs } from "@/components/EditorTabs";
import { ViewToggle } from "@/components/ViewToggle";
import { CodeView } from "@/components/CodeView";
import { Home, homeHTML } from "@/components/portfolio/Home";
import { About, aboutHTML } from "@/components/portfolio/About";
import { Skills, skillsHTML } from "@/components/portfolio/Skills";
import { Projects, projectsHTML } from "@/components/portfolio/Projects";
import { Contact, contactHTML } from "@/components/portfolio/Contact";

const routes = [
  { path: '/', name: 'index.html', component: Home, html: homeHTML },
  { path: '/about', name: 'about.html', component: About, html: aboutHTML },
  { path: '/skills', name: 'skills.html', component: Skills, html: skillsHTML },
  { path: '/projects', name: 'projects.html', component: Projects, html: projectsHTML },
  { path: '/contact', name: 'contact.html', component: Contact, html: contactHTML },
];

const Index = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const [view, setView] = useState<'ui' | 'code'>('ui');
  const [openTabs, setOpenTabs] = useState([{ path: '/', name: 'index.html' }]);

  const handleFileSelect = (path: string) => {
    const route = routes.find(r => r.path === path);
    if (!route) return;

    setCurrentPath(path);
    
    // Add to tabs if not already open
    if (!openTabs.find(tab => tab.path === path)) {
      setOpenTabs([...openTabs, { path, name: route.name }]);
    }
  };

  const handleTabClose = (path: string) => {
    const newTabs = openTabs.filter(tab => tab.path !== path);
    setOpenTabs(newTabs);
    
    // If closing current tab, switch to first available tab
    if (path === currentPath && newTabs.length > 0) {
      setCurrentPath(newTabs[0].path);
    }
  };

  const currentRoute = routes.find(r => r.path === currentPath);
  const CurrentComponent = currentRoute?.component || Home;
  const currentHTML = currentRoute?.html || homeHTML;

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      <FileExplorer currentFile={currentPath} onFileSelect={handleFileSelect} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <EditorTabs 
          tabs={openTabs}
          activeTab={currentPath}
          onTabClick={setCurrentPath}
          onTabClose={handleTabClose}
        />
        
        <ViewToggle view={view} onToggle={setView} />
        
        <div className="flex-1 overflow-auto bg-background">
          {view === 'ui' ? (
            <>
            <CurrentComponent />
            </>
          ) : (
            <CodeView content={currentHTML} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
