import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Sparkles } from "lucide-react";

const notifications = [
  "✨ Maria de SP acabou de garantir os seus cards!",
  "🙏 Ana do RJ transformou a rotina da família!",
  "💝 Carla de MG recebeu os cards com sucesso!",
  "⭐ Paula de PR está adorando o material!",
  "🌟 Fernanda de SC recomenda para todas as mães!"
];

const FloatingElements = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showChat, setShowChat] = useState(false);

  // Sistema de notificações falsas
  useEffect(() => {
    const showNotificationInterval = setInterval(() => {
      setCurrentNotification(Math.floor(Math.random() * notifications.length));
      setShowNotification(true);
      
      setTimeout(() => {
        setShowNotification(false);
      }, 4000);
    }, Math.random() * 15000 + 15000); // Entre 15-30 segundos

    return () => clearInterval(showNotificationInterval);
  }, []);

  const scrollToTarget = () => {
    const element = document.getElementById("comprar");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Botão CTA Fixo - otimizado para mobile */}
      <Button 
        onClick={scrollToTarget}
        className="btn-floating text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 min-h-[44px]"
        aria-label="Quero agora!"
      >
        <span className="hidden sm:inline">Quero agora!</span>
        <span className="sm:hidden">Quero!</span>
      </Button>

      {/* Chat Bubble - ajustado para mobile */}
      <div className="chat-bubble w-12 h-12 sm:w-14 sm:h-14" onClick={() => setShowChat(!showChat)}>
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>

      {/* Chat Widget - responsivo */}
      {showChat && (
        <div className="fixed bottom-20 sm:bottom-24 left-2 sm:left-6 w-[calc(100vw-1rem)] sm:w-80 max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 animate-slide-in-left">
          {/* Header */}
          <div className="bg-primary text-white p-3 sm:p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-xs sm:text-sm">Assistente DOMUS</h4>
                <p className="text-xs opacity-90 hidden sm:block">Online agora</p>
              </div>
            </div>
            <button 
              onClick={() => setShowChat(false)}
              className="w-6 h-6 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Mensagens */}
          <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
            <div className="bg-secondary rounded-lg p-2 sm:p-3">
              <p className="text-xs sm:text-sm text-musgo">
                Olá! 👋 Posso te ajudar com alguma dúvida sobre os Cards DOMUS?
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-2 sm:p-3">
              <p className="text-xs sm:text-sm text-musgo">
                Temos garantia de 7 dias e entrega imediata por email! 💌
              </p>
            </div>
          </div>
          
          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-muted">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Digite sua dúvida..."
                className="flex-1 px-2 sm:px-3 py-2 text-xs sm:text-sm border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
              />
              <Button size="sm" className="px-2 sm:px-3 min-h-[44px] min-w-[44px]">
                <span className="hidden sm:inline">Enviar</span>
                <span className="sm:hidden">→</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Notificações de compra - otimizadas para mobile */}
      {showNotification && (
        <div className="notification-popup text-xs sm:text-sm p-2 sm:p-3 max-w-[calc(100vw-2rem)] sm:max-w-xs">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
            <p className="text-xs sm:text-sm text-musgo font-medium leading-tight">
              {notifications[currentNotification]}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingElements;