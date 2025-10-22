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
    <footer className="border-t border-border bg-card/50 py-8 sm:py-12 px-4">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Logo size="sm" />
            <p className="text-xs sm:text-sm text-muted-foreground">
              Transformando ideias em soluções digitais de alta performance.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Serviços</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Websites</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Sistemas</li>
              <li className="hover:text-primary transition-colors cursor-pointer">E-commerce</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Consultoria</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Empresa</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Sobre</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Portfólio</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Contato</li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Contato</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                <button 
                  onClick={handleEmailClick}
                  className="hover:text-primary transition-colors cursor-pointer text-left break-all"
                >
                  Codequestcontact2@gmail.com
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                (21) 97388-8196
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                Rio de Janeiro, RJ
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <button 
                  onClick={handleLinkedInClick}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  LinkedIn
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
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
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Code Quest. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
