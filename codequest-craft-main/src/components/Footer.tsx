import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  const handleEmailClick = () => {
    const email = "Codequestcontact2@gmail.com";
    const subject = "Interesse em presença digital para minha empresa";
    const body = "Olá CodeQuest,\n\nEstou interessado em conhecer mais sobre os serviços de presença digital para minha empresa.\n\nAguardo retorno.\n\nAtenciosamente,";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/company/code-questcontact2/about/', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/codequestcontact', '_blank');
  };

  return (
    <footer className="border-t border-border bg-card/50 py-12 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground">
              Transformando ideias em soluções digitais de alta performance.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Websites</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Sistemas</li>
              <li className="hover:text-primary transition-colors cursor-pointer">E-commerce</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Consultoria</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Sobre</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Portfólio</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Contato</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <button 
                  onClick={handleEmailClick}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Codequestcontact2@gmail.com
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                (21) 97388-8196
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Rio de Janeiro, RJ
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-primary" />
                <button 
                  onClick={handleLinkedInClick}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  LinkedIn
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-primary" />
                <button 
                  onClick={handleInstagramClick}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Instagram
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Code Quest. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
