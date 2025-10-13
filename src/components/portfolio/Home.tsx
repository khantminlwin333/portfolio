import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";

export const Home = () => {
  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="relative max-w-3xl text-center space-y-8 bg-editor-tab-inactive rounded-xl p-8 shadow-lg">        

        {/* Content */}
        <div className="space-y-4 relative z-10">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome from <span className="text-primary">ML TeachHub</span>
          </h1>
          <p className="text-2xl text-muted-foreground">
            Full Stack Developer & Entrepreneur
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto relative z-10">
          I create beautiful, functional, and user-centered digital experiences. 
          Passionate about turning ideas into elegant solutions through code.
        </p>

        <div className="flex gap-4 justify-center pt-4 relative z-10">
          <a href="https://github.com/khantminlwin333" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const homeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Home</title>
</head>
<body>
    <main>
        <section class="hero">
            <h1>Hello, I'm <span>Your Name</span></h1>
            <p class="subtitle">Full Stack Developer & Entrepreneur</p>
            
            <p class="description">
                I create beautiful, functional, and user-centered digital experiences. 
                Passionate about turning ideas into elegant solutions through code.
            </p>
            
            <div class="social-links">
                <a href="https://github.com/khantminlwin333">GitHub</a>
            </div>
        </section>
    </main>
</body>
</html>`;
