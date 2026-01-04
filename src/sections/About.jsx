import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Programming Fundamentals",
    description: "Python, SQL, C++, and MATLAB with strong logical foundations.",
  },
  {
    icon: Rocket,
    title: "Algorithmic Thinking",
    description: "Experience with numerical methods and mathematical modeling.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Academic and project experience working in teams.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical approach to structured and systematic solutions.",
  },
];



export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            {/* <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground"> */}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Learning and building,
              <span className="font-serif italic font-normal text-primary-foreground">
                {" "}
                one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
            <p>
              I am a Master’s graduate in Mathematics with a strong foundation in
              programming and analytical problem solving.
            </p>
            <p>
              My experience includes Python, SQL, C++, and MATLAB through coursework
              and academic projects such as numerical analysis, mathematical
              modeling, and computational visualization.
            </p>
            <p>
              I am interested in web development, particularly backend systems,
              and I am building my skills through continuous learning and hands-on practice.

            </p>

            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
               "Strong fundamentals in logic and programming, with a continuous learning mindset."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};