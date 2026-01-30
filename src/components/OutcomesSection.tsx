import { Mic2, MessageSquare, Presentation, FileText, CheckCircle2 } from "lucide-react";

const outcomes = [
  {
    icon: Mic2,
    title: "Run meeting & stand-up bằng tiếng Anh",
    description: "Không còn im lặng 3 giây. Báo cáo trôi chảy, tự tin phát biểu ý kiến.",
  },
  {
    icon: MessageSquare,
    title: "Trả lời phỏng vấn IT tự tin",
    description: "Giải thích experience, discuss technical decisions, ask smart questions.",
  },
  {
    icon: Presentation,
    title: "Dẫn dắt demo & discussion với client",
    description: "Present solution, handle questions, pushback khi cần, xử lý tình huống khó.",
  },
  {
    icon: FileText,
    title: "Viết email & report chuyên nghiệp",
    description: "Đúng tone, đúng format, đúng context. Không còn sợ viết tiếng Anh.",
  },
];

const OutcomesSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Từ học tập đến thực tiễn
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sau khóa học, bạn <span className="text-gradient">đạt được gì?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Không phải là lý thuyết suông. Đây là những kỹ năng bạn áp dụng ngay vào công việc.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <outcome.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {outcome.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional metrics */}
        <div className="mt-16 p-8 rounded-2xl bg-card border border-border max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold text-foreground">8 buổi</span>
              </div>
              <p className="text-muted-foreground text-sm">Thời gian ngắn, thực hành hiệu quả</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold text-foreground">100%</span>
              </div>
              <p className="text-muted-foreground text-sm">100% đạt mục tiêu học tập</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold text-foreground">1:1</span>
              </div>
              <p className="text-muted-foreground text-sm">Feedback cá nhân, sửa lỗi ngay tại lớp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
