import { Code2, Database, Layout, Smartphone, Cloud, GitBranch } from "lucide-react";
import { Card } from "../ui/card";
import { Progress } from "../ui/progress";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL/MongoDB", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Mobile & UI/UX",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 75 },
      { name: "Responsive Design", level: 95 },
      { name: "Figma", level: 80 },
      { name: "User Research", level: 70 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "AWS/Vercel", level: 80 },
    ],
  },
];

export const Skills = () => {
  return (
    <div className="min-h-full p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground">Skills & Technologies</h1>
          <p className="text-xl text-muted-foreground">
            My technical toolkit and areas of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <category.icon className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export const skillsHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio - Skills</title>
  <style>
    body { font-family: sans-serif; background: #f9f9f9; margin: 0; padding: 2rem; }
    main { max-width: 800px; margin: 0 auto; }
    h1 { font-size: 2.5rem; margin-bottom: 0.5rem; text-align: center; }
    .subtitle { font-size: 1.2rem; color: #6b7280; margin-bottom: 2rem; text-align: center; }
    .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
    article { background: #fff; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: box-shadow 0.2s; }
    article:hover { box-shadow: 0 4px 8px rgba(0,0,0,0.15); }
    h2 { font-size: 1.5rem; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem; }
    ul { list-style: none; padding: 0; margin: 0; }
    li { margin-bottom: 0.5rem; font-size: 0.95rem; display: flex; justify-content: space-between; }
    .progress { background: #e5e7eb; border-radius: 0.25rem; height: 0.5rem; width: 100%; margin-top: 0.25rem; }
    .progress-bar { background: #3b82f6; height: 100%; border-radius: 0.25rem; }
  </style>
</head>
<body>
  <main>
    <section class="skills">
      <h1>Skills & Technologies</h1>
      <p class="subtitle">My technical toolkit and areas of expertise</p>

      <div class="skills-grid">
        <article>
          <h2>Frontend Development</h2>
          <ul>
            <li>
              <span>React / Next.js</span>
              <span>90%</span>
            </li>
            <div class="progress"><div class="progress-bar" style="width:90%"></div></div>
            
            <li>
              <span>TypeScript</span>
              <span>85%</span>
            </li>
            <div class="progress"><div class="progress-bar" style="width:85%"></div></div>
            
            <li>
              <span>Tailwind CSS</span>
              <span>95%</span>
            </li>
            <div class="progress"><div class="progress-bar" style="width:95%"></div></div>
            
            <li>
              <span>HTML/CSS</span>
              <span>95%</span>
            </li>
            <div class="progress"><div class="progress-bar" style="width:95%"></div></div>
          </ul>
        </article>

        <article>
          <h2>Backend Development</h2>
          <ul>
            <li><span>Node.js</span><span>85%</span></li>
            <div class="progress"><div class="progress-bar" style="width:85%"></div></div>

            <li><span>Python</span><span>80%</span></li>
            <div class="progress"><div class="progress-bar" style="width:80%"></div></div>

            <li><span>PostgreSQL/MongoDB</span><span>75%</span></li>
            <div class="progress"><div class="progress-bar" style="width:75%"></div></div>

            <li><span>REST APIs</span><span>90%</span></li>
            <div class="progress"><div class="progress-bar" style="width:90%"></div></div>
          </ul>
        </article>

        <article>
          <h2>Mobile & UI/UX</h2>
          <ul>
            <li><span>React Native</span><span>75%</span></li>
            <div class="progress"><div class="progress-bar" style="width:75%"></div></div>

            <li><span>Responsive Design</span><span>95%</span></li>
            <div class="progress"><div class="progress-bar" style="width:95%"></div></div>

            <li><span>Figma</span><span>80%</span></li>
            <div class="progress"><div class="progress-bar" style="width:80%"></div></div>

            <li><span>User Research</span><span>70%</span></li>
            <div class="progress"><div class="progress-bar" style="width:70%"></div></div>
          </ul>
        </article>

        <article>
          <h2>DevOps & Tools</h2>
          <ul>
            <li><span>Git & GitHub</span><span>90%</span></li>
            <div class="progress"><div class="progress-bar" style="width:90%"></div></div>

            <li><span>Docker</span><span>70%</span></li>
            <div class="progress"><div class="progress-bar" style="width:70%"></div></div>

            <li><span>CI/CD</span><span>75%</span></li>
            <div class="progress"><div class="progress-bar" style="width:75%"></div></div>

            <li><span>AWS/Vercel</span><span>80%</span></li>
            <div class="progress"><div class="progress-bar" style="width:80%"></div></div>
          </ul>
        </article>
      </div>
    </section>
  </main>
</body>
</html>
`;
