import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar, Gift, Mail } from "lucide-react";

const contactMethods = [
  { name: "Zalo", href: "https://zalo.me/0123456789", icon: MessageCircle },
  { name: "Threads", href: "https://threads.net/@englishforglobaldevs", icon: MessageCircle },
  { name: "Email", href: "mailto:hello@englishforglobaldevs.com", icon: Mail },
];

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Free trial highlight */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-accent/20 border-2 border-accent mb-8 animate-pulse-glow">
            <Gift className="w-6 h-6 text-accent" />
            <div className="text-left">
              <p className="text-lg font-bold text-accent">1 buổi test trình độ + học thử MIỄN PHÍ</p>
              <p className="text-sm text-accent/80">Đánh giá trình độ và trải nghiệm phương pháp học</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Sẵn sàng <span className="text-gradient">lên level</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Đừng để tiếng Anh cản trở sự nghiệp của bạn. 
            Đăng ký tư vấn miễn phí để tìm khóa học phù hợp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="xl" className="group">
              <Calendar className="w-5 h-5" />
              Đăng ký học thử miễn phí
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Contact methods */}
          <div className="mb-12">
            <p className="text-sm text-muted-foreground mb-4">Liên hệ trực tiếp:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {contactMethods.map((method) => (
                <a
                  key={method.name}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:text-primary transition-all"
                >
                  <method.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{method.name}</span>
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
              <span>Không ép đăng ký</span>
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
