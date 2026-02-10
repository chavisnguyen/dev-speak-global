import { Button } from "@/components/ui/button";
import { BookOpen, MessageCircle, Target, Rocket, Check, ArrowRight } from "lucide-react";

const courses = [
  {
    id: "foundation",
    level: "Level 1",
    name: "IT English Reborn",
    subtitle: "Xây nền — biết đủ để bước vào thế giới nói.",
    icon: BookOpen,
    color: "foundation",
    colorClass: "course-foundation",
    duration: "8 buổi × 1h",
    target: "A1–A2: xây nền ngữ pháp + từ vựng IT trong ngữ cảnh công việc (hardware, software, standup, specs). Chuẩn bị cho bước nói thật.",
    outcomes: [
      "Hiểu và dùng từ vựng IT cơ bản (hardware, software, process, standup, specs)",
      "Nắm lại ngữ pháp cần cho giao tiếp (câu đơn, thì cơ bản, câu hỏi)",
      "Đọc tài liệu kỹ thuật đơn giản, viết email/chat ngắn",
      "Sẵn sàng học IT Speaking Foundation để chuyển từ \"biết\" sang \"nói được\"",
    ],
    buttonVariant: "courseFoundation" as const,
  },
  {
    id: "speaking",
    level: "Level 2",
    name: "IT Speaking Foundation",
    subtitle: "Từ im lặng đến nói được mỗi ngày với client.",
    icon: MessageCircle,
    color: "speaking",
    colorClass: "course-speaking",
    duration: "16 buổi × 60 phút",
    target: "A2–B1: phản xạ nói + tự tin trong tình huống công việc hàng ngày (standup, small talk, hỏi lại, báo bug, sync với PM/BA, chat). 70%+ thời lượng là nói.",
    outcomes: [
      "Small talk, trả lời nhanh, standup (hôm qua/hôm nay, blocker, tiến độ)",
      "Hỏi làm rõ requirement, sửa hiểu lầm, nhờ nhắc lại khi không nghe rõ",
      "Đưa ý kiến, không đồng ý lịch sự; mô tả bug, sync với PM/BA/Designer",
      "Tham gia call với client, demo ngắn khi được hỏi; chat Slack/Teams đúng tone",
    ],
    buttonVariant: "courseSpeaking" as const,
    featured: true,
  },
  {
    id: "career",
    level: "Level 3",
    name: "Global Candidate",
    subtitle: "Thể hiện mình đáng được chọn — interview, CV, demo.",
    icon: Target,
    color: "career",
    colorClass: "course-career",
    duration: "10 buổi × 1h",
    target: "B1+: interview + CV + cách kể chuyện nghề nghiệp. Portfolio/CV gây ấn tượng, trả lời phỏng vấn chuẩn, Running a Demo, Strategic Progress Briefing, Handling Objections.",
    outcomes: [
      "Viết và trình bày CV/portfolio thu hút nhà tuyển dụng",
      "Trả lời câu hỏi phỏng vấn chuẩn, xử lý phản đối và feedback trong interview",
      "Chạy demo như bài presentation có cấu trúc; trình bày tiến độ dự án chiến lược",
      "Tự tin trong Technical Mock Interview và tình huống \"what if\"",
    ],
    buttonVariant: "courseCareer" as const,
  },
  {
    id: "mastery",
    level: "Level 4",
    name: "Client Mastery",
    subtitle: "Từ task-doer lên tech consultant.",
    icon: Rocket,
    color: "mastery",
    colorClass: "course-mastery",
    duration: "8 buổi × 1h",
    target: "B1+ đã làm môi trường global: tâm lý khách hàng, requirement elicitation, cross-functional, Art of \"No\", consultative selling, ad-hoc meetings, real-world simulation.",
    outcomes: [
      "Hiểu và ứng phó với tâm lý client; hỏi đúng để elicit requirement",
      "Làm việc cross-functional hiệu quả; nói \"No\" một cách chuyên nghiệp",
      "Hỗ trợ collaboration, ad-hoc meeting; bán ý tưởng theo kiểu consultative",
      "Xử lý tình huống thực tế phức tạp trong simulation",
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
            Lộ trình 4 cấp độ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">4 bước</span> từ Foundation đến Mastery
          </h2>
          <p className="text-lg text-muted-foreground">
            4 khóa học nối tiếp nhau. Bạn chọn điểm bắt đầu phù hợp với trình độ hiện tại, sau đó tiếp tục lên level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
