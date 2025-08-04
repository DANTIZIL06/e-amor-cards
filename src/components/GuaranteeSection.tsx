import { Shield, Lock, Award, CheckCircle } from "lucide-react";
const guarantees = [{
  icon: Shield,
  title: "Garantia de 7 dias",
  description: "100% do seu dinheiro de volta"
}, {
  icon: Lock,
  title: "Compra 100% segura",
  description: "Site protegido e certificado"
}, {
  icon: Award,
  title: "Qualidade premium",
  description: "Material desenvolvido com cuidado"
}, {
  icon: CheckCircle,
  title: "Entrega imediata",
  description: "Acesso instantâneo por email"
}];
const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-background/50 rounded-lg border border-border/50 backdrop-blur-sm"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{guarantee.title}</h3>
                <p className="text-muted-foreground text-sm">{guarantee.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default GuaranteeSection;