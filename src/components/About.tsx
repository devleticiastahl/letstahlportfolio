import { BarChart3, FileSpreadsheet, FileText, Search } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    name: "Dashboards claros e intuitivos",
    color: "from-primary/20 to-primary/10"
  },
  {
    icon: FileSpreadsheet,
    name: "Planilhas administrativas",
    color: "from-accent/20 to-accent/10"
  },
  {
    icon: FileText,
    name: "Relatórios e Apresentações Gerenciais",
    color: "from-primary/20 to-primary/10"
  },
  {
    icon: Search,
    name: "Análise de dados",
    color: "from-accent/20 to-accent/10"
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 mb-16 text-lg text-muted-foreground leading-relaxed animate-fade-in-up">
          <p>
            Minha trajetória começou na área de informática, onde desenvolvi habilidades fundamentais 
            em lógica, programação e desenvolvimento web. Ao longo da minha carreira, atuei nos setores 
            administrativos e de vendas internacionais, experiências que me permitiram unir tecnologia 
            às demandas do ambiente corporativo e colaborar com equipes multiculturais.
          </p>
          <p>
            Hoje, meu propósito é transformar dados em decisões acessíveis, ajudando gestores e 
            colaboradores a enxergarem com clareza as informações essenciais para o dia a dia da empresa.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground leading-snug">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
