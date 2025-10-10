import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  "Excel", "PowerPoint", "Power BI", "SQL", "Python", 
  "Figma", "HTML", "CSS"
];

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transformando dados em{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
                decisões estratégicas
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unindo teoria, design intuitivo e storytelling para criar soluções de Business Intelligence 
              que realmente fazem a diferença nos negócios.
            </p>
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="group shadow-purple hover:shadow-lg transition-all"
            >
              Ver Projetos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center items-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-50 animate-float"></div>
              <img
                src="https://raw.githubusercontent.com/devleticiastahl/letstahlportfolio/97396e2449a6fcc6a0aa816e1e17cde8db54f1c6/illustrations/myself-darkblue.svg"
                alt="Letícia Stahl"
                className="relative w-full max-w-md h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Tools Carousel */}
        <div className="mt-16 bg-primary rounded-2xl overflow-hidden shadow-purple">
          <div className="relative py-5 overflow-hidden">
            <div className="flex animate-scroll">
              {[...tools, ...tools].map((tool, index) => (
                <div
                  key={`${tool}-${index}`}
                  className="flex-shrink-0 px-8 text-primary-foreground font-semibold text-base whitespace-nowrap"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
