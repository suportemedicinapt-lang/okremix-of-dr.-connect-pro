import { Instagram, Linkedin, Facebook, Eye } from "lucide-react";

interface FooterProps {
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
    <footer className="bg-navy-dark py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">
              {nome}
            </h3>
          </div>
          
          <p className="text-white/70 mb-1">
            {especialidade}
          </p>
          <p className="text-white/50 text-sm mb-8">
            CRM/{uf} {crm}
          </p>

          {/* Social Links */}
          {(redesSociais.instagram || redesSociais.linkedin || redesSociais.facebook) && (
            <div className="flex justify-center gap-4 mb-10">
              {redesSociais.instagram && (
                <a
                  href={redesSociais.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white/80" />
                </a>
              )}
              {redesSociais.linkedin && (
                <a
                  href={redesSociais.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white/80" />
                </a>
              )}
              {redesSociais.facebook && (
                <a
                  href={redesSociais.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white/80" />
                </a>
              )}
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            {/* Legal Notice - CFM Compliant */}
            <p className="text-white/40 text-xs leading-relaxed max-w-2xl mx-auto mb-4">
              Este site tem caráter informativo e não substitui a consulta médica presencial. 
              As informações aqui contidas seguem as diretrizes do Conselho Federal de Medicina (CFM).
            </p>
            <p className="text-white/30 text-xs">
              © {currentYear} {nome}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
