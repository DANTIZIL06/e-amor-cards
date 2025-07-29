import { Facebook, Instagram, MessageCircle, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-musgo text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">DOMUS 2025</h3>
              <p className="text-green-100 text-sm">
                Lares firmados na fé e no amor
              </p>
            </div>
            <p className="text-green-100 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            
            {/* Redes sociais */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links úteis */}
          <div>
            <h4 className="font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-green-100">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Sobre DOMUS</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Como funciona</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Depoimentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-green-100">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@domus2025.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp: (11) 99999-9999</span>
              </div>
            </div>
            
            {/* Horário */}
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Atendimento</h5>
              <p className="text-green-100 text-sm">
                Segunda à Sexta<br />
                8h às 18h
              </p>
            </div>
          </div>
        </div>
        
        <hr className="border-white/20 my-8" />
        
        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-green-100 text-sm">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>© 2025 DOMUS. Feito com amor para famílias cristãs.</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;