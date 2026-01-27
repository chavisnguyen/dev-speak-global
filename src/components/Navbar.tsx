import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code2, Menu, X, Mail } from "lucide-react";
import zaloIcon from "@/assets/zalo.png";
import threadIcon from "@/assets/thread.png";

const navLinks = [
  { name: "Khóa học", href: "#courses" },
  { name: "Học viên", href: "#students" },
  { name: "Bảng giá", href: "#pricing" },
];

const contactLinks = [
  { name: "Zalo", href: "https://zalo.me/0123456789", iconImg: zaloIcon },
  { name: "Threads", href: "https://threads.net/@englishforglobaldevs", iconImg: threadIcon },
  { name: "Email", href: "mailto:hello@englishforglobaldevs.com", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg hidden sm:block">English for Global Devs</span>
            <span className="font-bold text-lg sm:hidden">E4GD</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  title={link.name}
                >
                  {"iconImg" in link ? (
                    <img src={link.iconImg} alt={link.name} className="w-4 h-4 object-contain" />
                  ) : (
                    <link.icon className="w-4 h-4" />
                  )}
                </a>
              ))}
            </div>
            <Button variant="hero" size="sm" asChild>
              <a href="#consult">Đăng ký tư vấn</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-border">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {"iconImg" in link ? (
                      <img src={link.iconImg} alt={link.name} className="w-4 h-4 object-contain" />
                    ) : (
                      <link.icon className="w-4 h-4" />
                    )}
                    {link.name}
                  </a>
                ))}
              </div>
              <Button variant="hero" className="w-full mt-2" asChild>
                <a href="#consult" onClick={() => setIsOpen(false)}>
                  Đăng ký tư vấn
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
