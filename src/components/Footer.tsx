const footerLinks = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre Mim" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-2xl font-bold font-serif">
            Letícia Stahl
          </div>

          <nav className="flex flex-wrap gap-6 justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-background/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-background/60 text-sm">
            &copy; {new Date().getFullYear()} Letícia Stahl. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
