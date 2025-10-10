import { Mail, Linkedin, Github } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "leticia@exemplo.com",
    link: "mailto:leticia@exemplo.com",
    color: "from-primary/20 to-primary/10"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/leticiastahl",
    link: "https://linkedin.com/in/leticiastahl",
    color: "from-accent/20 to-accent/10"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/leticiastahl",
    link: "https://github.com/leticiastahl",
    color: "from-primary/20 to-primary/10"
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Vamos Criar Juntos</h2>
          <p className="text-lg text-muted-foreground">
            Pronto para transformar seus dados em histórias que impulsionam decisões?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md`}>
                  <Icon className="w-9 h-9 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{method.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
