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
      {/* Botão CTA Fixo */}
      <Button 
        onClick={scrollToTarget}
        className="btn-floating"
        aria-label="Quero agora!"
      >
        Quero agora!
      </Button>

      {/* Chat Bubble */}
      <div className="chat-bubble" onClick={() => setShowChat(!showChat)}>
        <MessageCircle className="w-6 h-6 text-white" />
      </div>

      {/* Chat Widget */}
      {showChat && (
        <div className="fixed bottom-24 left-6 w-80 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 animate-slide-in-left">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Assistente DOMUS</h4>
                <p className="text-xs opacity-90">Online agora</p>
              </div>
            </div>
            <button 
              onClick={() => setShowChat(false)}
              className="w-6 h-6 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Mensagens */}
          <div className="p-4 space-y-3">
            <div className="bg-secondary rounded-lg p-3">
              <p className="text-sm text-musgo">
                Olá! 👋 Posso te ajudar com alguma dúvida sobre os Cards DOMUS?
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-3">
              <p className="text-sm text-musgo">
                Temos garantia de 7 dias e entrega imediata por email! 💌
              </p>
            </div>
          </div>
          
          {/* Input */}
          <div className="p-4 border-t border-muted">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Digite sua dúvida..."
                className="flex-1 px-3 py-2 text-sm border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm" className="px-3">
                Enviar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Notificações de compra */}
      {showNotification && (
        <div className="notification-popup">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
            <p className="text-sm text-musgo font-medium">
              {notifications[currentNotification]}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingElements;