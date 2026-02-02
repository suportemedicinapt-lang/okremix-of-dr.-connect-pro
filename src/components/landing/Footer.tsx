import { Instagram, Linkedin, Facebook } from "lucide-react";

interface FooterProps {
  // TODO: Conectar com Med.ID
  nome: string;
  crm: string;
  uf: string;
  especialidade: string;
  redesSociais: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export function Footer({
  nome,
  crm,
  uf,
  especialidade,
  redesSociais,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medical-heading py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name and CRM */}
          <h3 className="text-xl font-semibold text-primary-foreground mb-2">
            {/* TODO: Nome dinâmico */}
            {nome}
          </h3>
          <p className="text-primary-foreground/70 mb-1">
            {/* TODO: Especialidade dinâmica */}
            {especialidade}
          </p>
          <p className="text-primary-foreground/50 text-sm mb-6">
            {/* TODO: CRM dinâmico */}
            CRM/{uf} {crm}
          </p>

          {/* Social Links */}
          {(redesSociais.instagram || redesSociais.linkedin || redesSociais.facebook) && (
            <div className="flex justify-center gap-4 mb-8">
              {/* TODO: Links dinâmicos das redes sociais */}
              {redesSociais.instagram && (
                <a
                  href={redesSociais.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground/80" />
                </a>
              )}
              {redesSociais.linkedin && (
                <a
                  href={redesSociais.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary-foreground/80" />
                </a>
              )}
              {redesSociais.facebook && (
                <a
                  href={redesSociais.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground/80" />
                </a>
              )}
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-primary-foreground/10 pt-6">
            {/* Legal Notice - CFM Compliant */}
            <p className="text-primary-foreground/40 text-xs leading-relaxed max-w-2xl mx-auto mb-4">
              Este site tem caráter informativo e não substitui a consulta médica presencial. 
              As informações aqui contidas seguem as diretrizes do Conselho Federal de Medicina (CFM).
            </p>
            <p className="text-primary-foreground/30 text-xs">
              © {currentYear} {nome}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
