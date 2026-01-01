import {Button} from "@/components/Button";
import { Github, Instagram, Linkedin, ChevronDown, Download, ArrowRight} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  { category: "Programming", items: ["Python", "C++", "MATLAB"] },
  { category: "Web", items: ["React", "Tailwind CSS"] },
  { category: "Data", items: ["SQL", "Power BI"] },
  { category: "Tools", items: ["Git", "GitHub Actions"] },
];



export const Hero = () => {
    return(
        <section id="Hero" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0">
                <img 
                    src="/hero-bg.jpg"
                    alt="Hero image" 
                    className="w-full h-full object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_,i) => (
                    <div
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#8AA7BC",
                            left:`${Math.random()*100}%`,
                            top: `${Math.random()*100}%`,
                            animation: `slow-drift ${15 + Math.random()*20}s ease-in-out infinite`,
                            animationDelay: `${Math.random()*5}s`,
                        }}
                    />
                ))}
            </div>

            

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    Aspiring Web Developer 
                                    {/* | C++, Python, and SQL */}
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                              Turning <span className="text-primary glow-text">Mathematical Thinking</span>
                              <br />
                              into <span className="font-serif italic font-normal text-primary">
                                 Practical Solutions.
                              </span>
                              <br />
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                                Hi, I’m Siti Sahrani — a Master’s graduate in Mathematics with a strong foundation in analytical thinking and programming. I am currently learning web development,
                                with hands-on experience using Python, Django, SQL, and React through academic and personal projects. I am interested in building practical web applications and continuously
                                developing my skills through real-world projects and learning-focused programs.

                            </p>
                        </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                       <a href="#contact">
                         <Button size="lg">
                           Contact Me <ArrowRight className="w-5 h-5" />
                         </Button> 
                       </a>

                       <AnimatedBorderButton asChild>
                        <a
                           href="https://drive.google.com/file/d/1Wq587sTDUxFSaPbxYMmHMEyHCRR8RRr7/view"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                        <Download className="w-5 h-5" />
                        Download CV
                        </a>
                        </AnimatedBorderButton>

                    </div>

                    {/* Sosial Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow: </span>
                        {[
                            {icon: Github, href: "https://github.com/SitiSahrani/"},
                            {icon: Linkedin, href: "https://www.linkedin.com/in/sitiishrn/"},
                            {icon: Instagram, href: "https://www.instagram.com/sitiishrn_/"},
                        ].map((social, idx) => (
                            <a 
                             key={idx}
                             href={social.href}
                             className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                {<social.icon className="w-5 h-5" />}
                            </a>
                        ))}
                    </div>
                    </div>
                    {/* Right Column - Profile Image */} 
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                                <div className="relative glass rounded-3xl p-2 glow-border">
                                    <img 
                                     src="/profile-photo.png"
                                     alt="Siti Sahrani"
                                     className="w-full aspect-[4/5] object-cover rounded-2xl"
                                    />
                                    {/* Floating Badge */}
                                    <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                            <span>Available for work</span>
                                        </div>
                                    </div>
                                </div>
                                    {/* Stat Badge */}
                                    {/* <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                        <div className="text-2xl font-bold text-primary">5+</div>
                                        <div className="text-xs text-muted-foreground">
                                            Years Exp.
                                        </div>
                                    </div> */}

                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Tech Stack
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"/>
                        <div className="flex gap-6 animate-marquee">
                            {[...skills, ...skills].map((group, idx) => (
                                <div key={idx} className="flex items-center gap-3 px-4 py-2 glass rounded-full">
                                    <span className="text-xs text-primary font-medium">
                                        {group.category}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        {group.items.join(" • ")}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );

};