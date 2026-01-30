import { Button } from "@/components/ui/button";
import { BookOpen, Target, Rocket, Check, ArrowRight } from "lucide-react";

const courses = [
  {
    id: "foundation",
    level: "Level 1",
    name: "IT English Reborn",
    subtitle: "Foundation",
    icon: BookOpen,
    color: "foundation",
    colorClass: "course-foundation",
    price: "120.000đ",
    priceUnit: "/ buổi",
    duration: "8 buổi × 60 phút/buổi",
    target: "Củng cố nền tảng ngôn ngữ ngành",
    outcomes: [
      "Viết daily report rõ ràng, đúng format",
      "Đọc hiểu tài liệu kỹ thuật tiếng Anh",
      "Viết email công việc cơ bản",
      "Tự tin lên tiếng trong stand-up",
    ],
    buttonVariant: "courseFoundation" as const,
  },
  {
    id: "career",
    level: "Level 2",
    name: "The Global Candidate",
    subtitle: "Career",
    icon: Target,
    color: "career",
    colorClass: "course-career",
    price: "140.000đ",
    priceUnit: "/ buổi",
    duration: "8 buổi × 60 phút/buổi",
    target: "Giành lấy tấm vé tới môi trường global",
    outcomes: [
      "Trả lời phỏng vấn IT tự tin, mạch lạc",
      "Giải thích kỹ thuật bằng tiếng Anh",
      "Giao tiếp hiệu quả với team quốc tế",
      "Thảo luận code review, PR comments",
    ],
    buttonVariant: "courseCareer" as const,
    featured: false,
  },
  {
    id: "mastery",
    level: "Level 3",
    name: "Client Mastery",
    subtitle: "The Consultative Dev",
    icon: Rocket,
    color: "mastery",
    colorClass: "course-mastery",
    price: "160.000đ",
    priceUnit: "/ buổi",
    duration: "8 buổi × 60 phút/buổi",
    target: "Nâng tầm vị thế từ \"thợ code\" tới \"chuyên gia\"",
    outcomes: [
      "Tư vấn giải pháp kỹ thuật cho client",
      "Pushback scope/deadline hợp lý",
      "Dẫn dắt demo & technical discussion",
      "Xử lý tình huống khó",
    ],
    buttonVariant: "courseMastery" as const,
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Lộ trình 3 cấp độ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lộ trình <span className="text-gradient">3 bước</span> từ Foundation đến Mastery
          </h2>
          <p className="text-lg text-muted-foreground">
            3 khóa học nối tiếp nhau. Bạn chọn điểm bắt đầu phù hợp với trình độ hiện tại, sau đó tiếp tục lên level.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`relative group rounded-2xl p-1 transition-all duration-300 hover:scale-[1.02] ${
                course.featured ? "lg:-mt-4 lg:mb-4" : ""
              }`}
              style={{
                background: `linear-gradient(135deg, hsl(var(--${course.colorClass}) / 0.3), hsl(var(--${course.colorClass}) / 0.1))`,
              }}
            >
              <div className="bg-card rounded-xl p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `hsl(var(--${course.colorClass}) / 0.15)` }}
                  >
                    <course.icon className="w-6 h-6" style={{ color: `hsl(var(--${course.colorClass}))` }} />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">{course.level}</span>
                    <h3 className="text-xl font-bold">{course.name}</h3>
                  </div>
                </div>

                {/* Subtitle */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit"
                  style={{
                    backgroundColor: `hsl(var(--${course.colorClass}) / 0.1)`,
                    color: `hsl(var(--${course.colorClass}))`,
                  }}
                >
                  {course.subtitle}
                </div>

                {/* Target */}
                <p className="text-muted-foreground mb-6 flex-grow">{course.target}</p>

                {/* Outcomes */}
                <div className="space-y-3 mb-6">
                  <p className="text-sm font-semibold text-foreground">Sau khóa học, bạn sẽ:</p>
                  {course.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: `hsl(var(--${course.colorClass}))` }}
                      />
                      <span className="text-sm text-muted-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing - ẩn giá, chỉ hiển thị thông tin liên hệ */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">{course.duration}</p>

                  <Button variant={course.buttonVariant} className="w-full group/btn" asChild>
                    <a href="#consult">
                      Tôi muốn đi từ đây
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;
