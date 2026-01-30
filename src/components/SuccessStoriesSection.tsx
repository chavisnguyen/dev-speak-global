import { ArrowRight, TrendingUp, Shield, DollarSign } from "lucide-react";

const stories = [
  {
    name: "Minh T.",
    role: "Backend Developer • 3 năm kinh nghiệm",
    avatar: "MT",
    before: {
      title: "Trước khóa học",
      points: [
        "Làm outsource, chỉ code theo spec",
        "Meeting với client toàn im lặng, để PM nói hết",
        "Bị ép deadline liên tục, không dám phản đối",
        "Rate thấp hơn 20% so với market",
      ],
    },
    after: {
      title: "Sau 3 tháng",
      points: [
        "Tự tham gia daily call với client",
        "Pushback được 2 scope changes thành công",
        "100% feedback tiến bộ từ client",
      ],
    },
    icon: TrendingUp,
    accentColor: "primary",
  },
  {
    name: "Hương N.",
    role: "Frontend Developer • Fresher",
    avatar: "HN",
    before: {
      title: "Trước khóa học",
      points: [
        "Portfolio tốt nhưng phỏng vấn tiếng Anh fail",
        "Đã fail 3 lần phỏng vấn với các công ty Global",
        "Mất tự tin, không dám apply tiếp",
      ],
    },
    after: {
      title: "Sau khóa 2",
      points: [
        "Pass vòng technical interview với startup US",
        "Tự tin giải thích project portfolio",
        "Nhận offer với mức lương x2",
      ],
    },
    icon: Shield,
    accentColor: "course-career",
  },
  {
    name: "Đức P.",
    role: "Fullstack Dev • Freelancer",
    avatar: "DP",
    before: {
      title: "Trước khóa học",
      points: [
        "Làm freelance qua Upwork nhưng rate thấp",
        "Client hay complain về communication",
        "Không dám nhận project phức tạp",
      ],
    },
    after: {
      title: "Sau cả 3 khóa",
      points: [
        "Rating 5.0 với Top Rated badge",
        "Tự tin proposal và demo solution",
        "Rate tăng từ $10 lên $20/giờ",
        "Có 2 long-term clients",
      ],
    },
    icon: DollarSign,
    accentColor: "course-mastery",
  },
];

const SuccessStoriesSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Kết quả học viên
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Họ đã <span className="text-gradient">thay đổi</span> như thế nào?
          </h2>
          <p className="text-lg text-muted-foreground">
            Sau khi hoàn thành lý thuyết kết hợp thực thành & nhận feedback lại từ mentor
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <div
              key={index}
              className="rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                    {story.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                </div>
              </div>

              {/* Before */}
              <div className="p-6 bg-destructive/5 border-b border-border">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                  <span className="text-sm font-semibold text-destructive">{story.before.title}</span>
                </div>
                <ul className="space-y-2">
                  {story.before.points.map((point, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-destructive/60">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-3 bg-card">
                <ArrowRight className="w-5 h-5 text-primary rotate-90" />
              </div>

              {/* After */}
              <div className="p-6 bg-primary/5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold text-primary">{story.after.title}</span>
                </div>
                <ul className="space-y-2">
                  {story.after.points.map((point, i) => (
                    <li key={i} className="text-sm text-foreground flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
