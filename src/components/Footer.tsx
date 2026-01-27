import { Code2, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo & tagline */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Code2 className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">English for Global Devs</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Tiếng Anh thực chiến cho developer hướng tới thị trường global.
              </p>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:hello@englishforglobaldevs.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">Messenger</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 English for Global Devs. Made with 💙 for Vietnamese developers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
