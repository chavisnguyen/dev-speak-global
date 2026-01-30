import { Code2 } from "lucide-react";
import { contactLinks } from "@/data/const";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo & tagline */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Code2 className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">English for Global works</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Tiếng Anh thực chiến cho IT guys hướng tới thị trường global.
              </p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h4 className="font-semibold mb-4">Liên hệ tư vấn</h4>
              <div className="flex flex-col gap-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 justify-center md:justify-start text-muted-foreground hover:text-primary transition-colors"
                  >
                    {"iconImg" in link ? (
                      <img src={link.iconImg} alt={link.name} className="w-5 h-5 object-contain flex-shrink-0" />
                    ) : (
                      <link.icon className="w-5 h-5" />
                    )}
                    <div className="text-left">
                      <span className="text-sm font-medium">{link.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">{link.description}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Free trial banner */}
            <div className="text-center md:text-right">
              <div className="inline-block p-4 rounded-xl bg-accent/10 border border-accent/30">
                <p className="text-sm font-bold text-accent mb-1">🎁 Học thử miễn phí</p>
                <p className="text-xs text-muted-foreground">
                  1 buổi test trình độ + học thử
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 English for Global Devs. Made with 💙 for Vietnamese IT guys.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
