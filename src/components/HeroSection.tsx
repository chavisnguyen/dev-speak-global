import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Globe, TrendingUp } from "lucide-react";

type HeroSectionProps = {
  onOpenConsult?: () => void;
};

const HeroSection = ({ onOpenConsult }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge: Khóa học trên, 1 buổi test + học thử dưới */}
          <div className="inline-flex flex-col items-center gap-3 mb-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Khóa học tiếng Anh chuyên biệt cho IT guys</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0 animate-pulse" aria-hidden />
              <span className="text-sm font-medium text-primary">Online 100%, tương tác trực tiếp</span>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-accent/20 border-2 border-accent text-accent font-bold animate-pulse-glow">
              <span className="text-lg">🎁</span>
              <span>1 buổi test trình độ + học thử MIỄN PHÍ</span>
            </div>
          </div>

          {/* Main headline - Tiếng Anh thực chiến trong môi trường IT Global */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-snug mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s", lineHeight: '1.3' }}
          >
            <span className="text-gradient">Tiếng Anh thực chiến trong môi trường IT Global</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Xóa tan nỗi niềm &quot;ngại nói&quot;, &quot;sợ sai&quot;, &quot;không tự tin&quot;
          </p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Đã đến lúc <strong className="text-primary">làm chủ tiếng Anh</strong> để &quot;bơi ra biển lớn&quot;, được tin tưởng, được tôn trọng, và <strong className="text-accent">tăng thu nhập</strong>.
          </p>

          {/* Pathway indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-course-foundation/10 border border-course-foundation/30">
              <div className="w-3 h-3 rounded-full bg-course-foundation" />
              <span className="text-sm font-medium">Foundation</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground self-center hidden sm:block" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-course-career/10 border border-course-career/30">
              <div className="w-3 h-3 rounded-full bg-course-career" />
              <span className="text-sm font-medium">Career</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground self-center hidden sm:block" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-course-mastery/10 border border-course-mastery/30">
              <div className="w-3 h-3 rounded-full bg-course-mastery" />
              <span className="text-sm font-medium">Mastery</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button
              variant="hero"
              size="xl"
              onClick={() => onOpenConsult?.()}
            >
              <Globe className="w-5 h-5" />
              Đăng ký test trình độ miễn phí
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#courses">
                <TrendingUp className="w-5 h-5" />
                Danh sách khóa học
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Đạt mục tiêu học tập</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Feedback tích cực</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
