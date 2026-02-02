import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Eye } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  nome: string;
  whatsapp: string;
}

export function Header({ nome, whatsapp }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappLink = `https://wa.me/${whatsapp}?text=Olá! Gostaria de agendar uma consulta.`;

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#areas", label: "Especialidades" },
    { href: "#atendimento", label: "Atendimento" },
    { href: "#faq", label: "Dúvidas" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Name */}
          <a href="#" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Eye className="w-4 h-4 text-white" />
            </div>
            <span className="hidden sm:inline">{nome.split(" ").slice(0, 2).join(" ")}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="bg-gradient-hero hover:opacity-90 shadow-md">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Agendar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-gradient-hero">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Agendar consulta
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
