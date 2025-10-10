import { ShoppingCart, TrendingUp, Database, ExternalLink, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Dashboard de E-commerce",
    description: "Dashboard que não apenas mostra números, mas conta a história do comportamento do cliente, performance de produtos e oportunidades de crescimento. Desenvolvido com foco na experiência do usuário final.",
    icon: ShoppingCart,
    tags: ["Power BI", "UX Design", "Análise Descritiva", "Storytelling"],
    link: "#",
    status: "completed",
    gradient: "from-primary/20 to-accent/20"
  },
  {
    id: 2,
    title: "Modelo Preditivo de Vendas",
    description: "Solução que combina machine learning com visualizações intuitivas para prever tendências e identificar oportunidades. Focado em entregar insights acionáveis para equipes comerciais.",
    icon: TrendingUp,
    tags: ["Python", "Machine Learning", "Visualização", "Análise Preditiva"],
    status: "in-progress",
    gradient: "from-accent/20 to-primary/20"
  },
  {
    id: 3,
    title: "Análise comparativa de algoritmos supervisionados para detecção de fraude",
    description: "Estudo comparativo entre algoritmos de aprendizado supervisionado aplicados à detecção de fraudes em transações de cartão de crédito, utilizando o ambiente distribuído Databricks para processamento de grandes volumes de dados.",
    icon: Database,
    tags: ["Python", "Databricks", "Machine Learning", "Big Data", "Fraude"],
    status: "in-progress",
    gradient: "from-primary/20 to-accent/20"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos em Destaque</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Project Icon Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-foreground opacity-80"></div>
                  <Icon className="w-16 h-16 text-primary-foreground relative z-10 group-hover:scale-110 transition-transform" />
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-foreground text-xs font-medium rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {project.status === "completed" ? (
                    <Button variant="outline" className="w-full group/btn" asChild>
                      <a href={project.link}>
                        Ver Detalhes do Projeto
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  ) : (
                    <div className="bg-muted border border-border rounded-lg px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2 text-muted-foreground font-semibold">
                        <Wrench className="w-4 h-4" />
                        <span className="text-sm">Em Construção</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
