import { User, Heart, Coffee, Code } from "lucide-react";
import { Card } from "../ui/card";

export const About = () => {
  return (
    <div className="min-h-full p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <User className="h-12 w-12 text-primary" />
            <h2 className="text-2xl font-semibold">Who I Am</h2>
            <p className="text-muted-foreground">
              A dedicated developer who loves solving complex problems and building 
              intuitive user interfaces. With years of experience in full-stack development, 
              I bring ideas to life through clean, efficient code.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <Heart className="h-12 w-12 text-primary" />
            <h2 className="text-2xl font-semibold">What I Love</h2>
            <p className="text-muted-foreground">
              Creating seamless user experiences, learning new technologies, and 
              contributing to open-source projects. I believe in writing code that 
              not only works but is maintainable and scalable.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <Coffee className="h-12 w-12 text-primary" />
            <h2 className="text-2xl font-semibold">My Approach</h2>
            <p className="text-muted-foreground">
              I combine technical expertise with creative problem-solving. Every project 
              is an opportunity to push boundaries and deliver exceptional results that 
              exceed expectations.
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <Code className="h-12 w-12 text-primary" />
            <h2 className="text-2xl font-semibold">My Philosophy</h2>
            <p className="text-muted-foreground">
              Write clean code, embrace best practices, and never stop learning. 
              Technology evolves rapidly, and staying curious and adaptable is key 
              to building better solutions.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const aboutHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio - About</title>
  <style>
    body { font-family: sans-serif; background: #f9f9f9; margin: 0; padding: 2rem; }
    main { max-width: 800px; margin: 0 auto; }
    h1 { font-size: 2.5rem; margin-bottom: 0.5rem; text-align: center; }
    .subtitle { font-size: 1.2rem; color: #6b7280; margin-bottom: 2rem; text-align: center; }
    .about-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
    article { background: #fff; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: box-shadow 0.2s; }
    article:hover { box-shadow: 0 4px 8px rgba(0,0,0,0.15); }
    .icon { width: 48px; height: 48px; color: #3b82f6; margin-bottom: 0.5rem; }
    h2 { font-size: 1.5rem; margin-bottom: 0.5rem; }
    p { color: #4b5563; line-height: 1.5; }
  </style>
</head>
<body>
  <main>
    <section class="about">
      <h1>About Me</h1>
      <p class="subtitle">Passionate developer with a love for creating exceptional digital experiences</p>

      <div class="about-grid">
        <article>
          <div class="icon">👤</div>
          <h2>Who I Am</h2>
          <p>A dedicated developer who loves solving complex problems and building intuitive user interfaces. With years of experience in full-stack development, I bring ideas to life through clean, efficient code.</p>
        </article>

        <article>
          <div class="icon">❤️</div>
          <h2>What I Love</h2>
          <p>Creating seamless user experiences, learning new technologies, and contributing to open-source projects. I believe in writing code that not only works but is maintainable and scalable.</p>
        </article>

        <article>
          <div class="icon">☕</div>
          <h2>My Approach</h2>
          <p>I combine technical expertise with creative problem-solving. Every project is an opportunity to push boundaries and deliver exceptional results that exceed expectations.</p>
        </article>

        <article>
          <div class="icon">💻</div>
          <h2>My Philosophy</h2>
          <p>Write clean code, embrace best practices, and never stop learning. Technology evolves rapidly, and staying curious and adaptable is key to building better solutions.</p>
        </article>
      </div>
    </section>
  </main>
</body>
</html>
`;
