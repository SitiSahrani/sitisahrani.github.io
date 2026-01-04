import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
    {
    title: "Academic Research Publication (SINTA 2)",
    description:
      "Master’s thesis research resulting in a peer-reviewed journal publication, focusing on computational modeling and numerical analysis.",
    image: "/publication.png",
    tags: ["C++", "MATLAB", "Computational Modeling"],
    link: "https://jurnal.ar-raniry.ac.id/index.php/elkawnie/article/view/25438",
  },
  {
    title: "Fractal Visualization Project",
    description:
      "A research-based project focusing on computational modeling and numerical visualization using iterative algorithms.",
    image: "/fractal.png",
    tags: ["Python", "C++", "MATLAB", "Numerical Modeling"],
    link: "#",
    github: "https://github.com/SitiSahrani/Fractal-Generator-Python/",
  },
  {
    title: "AI Blog Generator",
    description:
      "An AI-based blog generator that converts YouTube videos into written articles, developed with a backend-focused approach.",
    image: "/ai-blog.png",
    tags: ["Python", "Django", "HTML", "JavaScript"],
    link: "#",
    github: "https://github.com/SitiSahrani/AI-Blog-Generator/",
  },
  {
    title: "Public Savings Analysis Dashboard",
    description:
      "Analysis of public savings across several banks in Indonesia with structured data processing and visualization.",
    image: "/savings2.png",
    tags: ["Excel", "Power BI", "Data Processing"],
    link: "#",
    github: "https://github.com/SitiSahrani/Analysis-of-Public-Savings-at-Bank-Indonesia-2025-",
  },
//   {
//     title: "COVID-19 Data Analysis Dashboard",
//     description:
//       "A dashboard project analyzing COVID-19 data trends with preprocessing and visual reporting.",
//     image: "/projects/covid.png",
//     tags: ["Excel", "Power BI", "Data Visualization"],
//     link: "#",
//     github: "#",
//   },

];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          {/* <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"> */}
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Programming and research projects developed through academic
            collaboration and published work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                    group-hover:translate-x-1 
                    group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton asChild>
            <a href="#projects" className="flex items-center gap-2">
              View All Projects
            <ArrowUpRight className="w-5 h-5" />
            </a>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};