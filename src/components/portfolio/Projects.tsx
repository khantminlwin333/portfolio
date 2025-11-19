import { ExternalLink, Github, FileText } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Donation Platform",
    description: "A full-featured Donation platform with cart, checkout, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Paypal"],
    github: "https://github.com/khantminlwin333/aidfunding",
    live: "https://gazaneedus.site/donate",
    image: "/assets/donation.png",
    isApp: false,
  },
  {
    title: "Finance Tracker App (Currently Android only)",
    description: "Collaborative task management tool with real-time updates and income/outcome tracking.",
    tags: ["ReactNative", "Expo", "TypeScript"],
    github: "https://github.com/khantminlwin333/MTP",
    policies: "/mtp-policies", // This enables the Policies button
    live: "https://play.google.com/store/apps/details?id=com.khantminlwin.MTP",
    image: "/assets/mtp.png",
    isApp: true,
  },
  {
    title: "SoS Tracker (Currently Android only)",
    description: "Online and Offline support tool that helps people who are getting in trouble.",
    tags: ["React", "Java", "WebSocket", "NodeJs", "Firebase", "MongoDB"],
    github: "https://github.com/khantminlwin333/sosmmmobile",
    policies: "/sos-policies", // You can add different policy routes for different apps
    live: "https://drive.usercontent.google.com/download?id=1pDDYcDSnWyNTnpjJom4HJNNrKopPaytY&export=download&authuser=0",
    image: "/assets/sosmm.png",
    isApp: true,
  },
  // ... other projects
];

export const Projects = () => {
  const navigate = useNavigate();

  const handlePoliciesClick = (policiesRoute) => {
    navigate(policiesRoute);
  };

  return (
    <div className="min-h-full p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">Projects</h1>
          <p className="text-xl text-muted-foreground">
            Some of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="p-6 space-y-4 hover:shadow-lg transition-shadow"
            >
              {/* Project image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-40 h-38 object-cover rounded-md mx-auto"
                />
              )}

              <h2 className="text-2xl font-semibold text-foreground">{project.title}</h2>
              <p className="text-muted-foreground">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* BUTTONS SECTION - All buttons together */}
              <div className="flex gap-3 pt-2 flex-wrap">
                {/* GitHub Code Button */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </a>
                )}

                {/* Download/Live Demo Button */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="default" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      {project.isApp ? "Download" : "Live Demo"}
                    </Button>
                  </a>
                )}

                {/* Policies Button - Only for apps with policies defined */}
                {project.policies && project.isApp && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => handlePoliciesClick(project.policies)}
                  >
                    <FileText className="h-4 w-4" />
                    Policies
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export const projectsHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio - Projects</title>
  <style>
    body { font-family: sans-serif; padding: 2rem; background: #f9f9f9; }
    .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
    .card { background: #fff; padding: 1rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: box-shadow 0.2s; }
    .card:hover { box-shadow: 0 4px 8px rgba(0,0,0,0.15); }
    .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.5rem 0; }
    .tag { background: #e5e7eb; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.8rem; }
    .links { display: flex; gap: 0.5rem; margin-top: 0.5rem; }
    .links a { text-decoration: none; padding: 0.5rem 0.75rem; border-radius: 0.25rem; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 0.25rem; }
    .code-btn { border: 1px solid #4b5563; color: #1f2937; }
    .live-btn { background: #3b82f6; color: #fff; }
    .project-img { width: 100%; height: 180px; object-fit: cover; border-radius: 0.5rem; margin-bottom: 0.5rem; }
  </style>
</head>
<body>
  <main>
    <section class="projects">
      <h1>Projects</h1>
      <p class="subtitle">Some of my recent work and side projects</p>

      <div class="projects-grid">
        <!-- Donation Platform -->
        <article class="card">
          <img src="/assets/donation.png" alt="Donation Platform" class="project-img" />
          <h2>Donation Platform</h2>
          <p>A full-featured Donation platform with cart, checkout, and payment integration. Built with modern technologies for optimal performance.</p>
          <div class="tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
            <span class="tag">MongoDB</span>
            <span class="tag">Paypal</span>
          </div>
          <div class="links">
            <a href="https://github.com/khantminlwin333/aidfunding" target="_blank" class="code-btn">GitHub</a>
            <a href="https://gazaneedus.site/donate" target="_blank" class="live-btn">Live Demo</a>
          </div>
        </article>

        <!-- Finance Tracker App -->
        <article class="card">
          <img src="/assets/mtp.png" alt="Finance Tracker App" class="project-img" />


          <h2>Finance Tracker App (Currently Android only)</h2>
          <p>Collaborative task management tool with real-time updates, currency features, and income/outcome tracking capabilities.</p>
          <div class="tags">
            <span class="tag">ReactNative</span>
            <span class="tag">Expo</span>
            <span class="tag">TypeScript</span>
          </div>
          <div class="links">
            <a href="https://github.com/khantminlwin333/MTP" target="_blank" class="code-btn">GitHub</a>
            <a href="https://docs.google.com/uc?export=download&id=1R2rlyQpSpQAA76zRQzc345EXnnLMDxs9" target="_blank" class="live-btn">Download</a>
          </div>
        </article>

        <!-- SoS Tracker -->
        <article class="card">
          <img src="/assets/sosmm.png" alt="SoS Tracker" class="project-img" />

          <h2>SoS Tracker (Currently Android only)</h2>
          <p>Online and Offline support tool that helps people who are getting in trouble.</p>
          <div class="tags">
            <span class="tag">React</span>
            <span class="tag">Java</span>
            <span class="tag">WebSocket</span>
            <span class="tag">NodeJs</span>
            <span class="tag">Firebase</span>
            <span class="tag">MongoDB</span>
          </div>
          <div class="links">
            <a href="https://github.com/khantminlwin333/sosmmmobile" target="_blank" class="code-btn">GitHub</a>
            <a href="https://drive.usercontent.google.com/download?id=1pDDYcDSnWyNTnpjJom4HJNNrKopPaytY&export=download&authuser=0" target="_blank" class="live-btn">Download</a>
          </div>
        </article>

        <!-- Myanmar Dictionary -->
        <article class="card">
          <img src="/assets/mmmu.png" alt="Myanmar Dictionary" class="project-img" />
          <h2>Myanmar Dictionary (Currently Android only)</h2>
          <p>Analytics dashboard for portfolio tracking with real-time data visualization and comprehensive reporting features.</p>
          <div class="tags">
            <span class="tag">ReactJs</span>
            <span class="tag">MongoDB</span>
            <span class="tag">Material UI</span>
          </div>
          <div class="links">
            <!-- No GitHub for this project -->
            <a href="https://docs.google.com/uc?export=download&id=1jXZYyIZInDJgut0-AHKJGWZ2vk7hqbB2" target="_blank" class="live-btn">Download</a>
          </div>
        </article>
      </div>
    </section>
  </main>
</body>
</html>
`;
