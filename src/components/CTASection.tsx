import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, Calendar, Gift } from "lucide-react";
import { contactLinks } from "@/data/const";

type CTASectionProps = {
  consultOpen: boolean;
  onConsultOpenChange: (open: boolean) => void;
};

const CTASection = ({ consultOpen, onConsultOpenChange }: CTASectionProps) => {

  return (
    <section id="consult" className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Sẵn sàng <span className="text-gradient">up level</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Đừng để &quot;ngại tiếng Anh&quot; cản trở sự nghiệp của bạn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() => onConsultOpenChange(true)}
            >
              <Calendar className="w-5 h-5" />
              Đăng ký học thử Miễn phí
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Modal: Liên hệ trực tiếp */}
          <Dialog open={consultOpen} onOpenChange={onConsultOpenChange}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center">Liên hệ trực tiếp</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-3 pt-2">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:text-primary transition-all font-medium"
                    onClick={() => onConsultOpenChange(false)}
                  >
                    {"iconImg" in link ? (
                      <img src={link.iconImg} alt={link.name} className="w-6 h-6 object-contain" />
                    ) : (
                      <link.icon className="w-5 h-5" />
                    )}
                    {link.name}
                  </a>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          {/* Contact methods */}
          <div className="mb-12">
            <p className="text-sm text-muted-foreground mb-4">Liên hệ trực tiếp:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:text-primary transition-all"
                >
                  {"iconImg" in link ? (
                    <img src={link.iconImg} alt={link.name} className="w-5 h-5 object-contain" />
                  ) : (
                    <link.icon className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Tư vấn 1:1 miễn phí</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Feedback trong 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
