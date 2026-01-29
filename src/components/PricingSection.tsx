import { Button } from "@/components/ui/button";
import { Check, Sparkles, Users, Clock, ArrowRight } from "lucide-react";

const courses = [
  {
    name: "IT English Reborn",
    level: "Foundation",
    price: "120.000đ",
    total: "960.000đ",
    sessions: 8,
    color: "course-foundation",
    variant: "courseFoundation" as const,
  },
  {
    name: "The Global Candidate",
    level: "Career",
    price: "140.000đ",
    total: "1.120.000đ",
    sessions: 8,
    color: "course-career",
    variant: "courseCareer" as const,
    featured: true,
  },
  {
    name: "Client Mastery",
    level: "Mastery",
    price: "160.000đ",
    total: "1.280.000đ",
    sessions: 8,
    color: "course-mastery",
    variant: "courseMastery" as const,
  },
];

const benefits = [
  "Lớp học nhỏ 6-8 học viên",
  "Giảng viên có kinh nghiệm làm việc global",
  "Tài liệu thực tế từ môi trường IT",
  "Feedback cá nhân từng buổi",
  "Recording để xem lại",
  "Group chat hỗ trợ ngoài giờ học",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Đầu tư cho sự nghiệp
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Chi phí <span className="text-gradient">minh bạch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Một lần đầu tư, cả sự nghiệp hưởng lợi.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 bg-card border transition-all duration-300 hover:scale-[1.02] ${
                course.featured ? "border-course-career shadow-lg shadow-course-career/10" : "border-border"
              }`}
            >
              {course.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-course-career text-primary-foreground text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Phổ biến nhất
                </div>
              )}

              <div className="text-center mb-6">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
                  style={{
                    backgroundColor: `hsl(var(--${course.color}) / 0.1)`,
                    color: `hsl(var(--${course.color}))`,
                  }}
                >
                  {course.level}
                </span>
                <h3 className="text-xl font-bold">{course.name}</h3>
              </div>

              <div className="text-center mb-6">
                <p className="text-muted-foreground">
                  Liên hệ để biết giá ({course.sessions} buổi)
                </p>
              </div>

              <Button variant={course.variant} className="w-full" asChild>
                <a href="#consult">
                  Đăng ký ngay
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Combo offer */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl border-gradient bg-card mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent">Combo 3 khóa</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Lộ trình hoàn chỉnh</h3>
              <p className="text-muted-foreground">
                Đăng ký cả 3 khóa để được giảm 10% và có mentor support xuyên suốt.
              </p>
            </div>
            <div className="text-center md:text-right flex-shrink-0">
              <p className="text-muted-foreground">Liên hệ để biết giá combo</p>
              <Button variant="hero" className="mt-4" asChild>
                <a href="#consult">Đăng ký combo</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8">Tất cả các khóa đều bao gồm:</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency */}
        <div className="max-w-2xl mx-auto mt-12 p-6 rounded-2xl bg-destructive/10 border border-destructive/20 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Users className="w-5 h-5 text-destructive" />
            <span className="font-semibold text-destructive">Lớp học giới hạn 6-8 học viên</span>
          </div>
          <p className="text-muted-foreground">
            Để đảm bảo chất lượng, mỗi lớp chỉ nhận tối đa 8 học viên. Đăng ký sớm để giữ chỗ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
