import { AlertTriangle, Clock, MessageSquareX, ShieldX } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Daily stand-up? Im lặng 3 giây.",
    description: "Biết mình làm gì, nhưng không biết diễn đạt. Mỗi lần đến lượt là tim đập, miệng khô, câu nói đứt đoạn.",
  },
  {
    icon: MessageSquareX,
    title: "Phỏng vấn tiếng Anh = Đứng hình",
    description: "Skill tốt, CV đẹp, nhưng vào phỏng vấn thì đơ. Hết cơ hội không phải vì không giỏi, mà vì không nói được.",
  },
  {
    icon: ShieldX,
    title: "Client nói, mình chỉ gật",
    description: "Scope bất hợp lý? Deadline phi thực tế? Biết sai nhưng không dám pushback. Kết quả: overtime, underpaid, burn out.",
  },
  {
    icon: AlertTriangle,
    title: "Code tốt nhưng không được tin",
    description: "Làm đúng việc nhưng không giải thích được. Bị đánh giá thấp hơn thực lực. Rate thấp, cơ hội ít, stress cao.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-background relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            Nỗi đau thật của Dev/BA/Designer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tiếng Anh yếu = <span className="text-destructive">Mất quyền chủ động</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Bạn không thiếu skill kỹ thuật. Bạn thiếu tiếng Anh đúng ngữ cảnh để được lắng nghe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-destructive/30 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-destructive/10 text-destructive mb-4">
                  <problem.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-destructive transition-colors">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition text */}
        <div className="max-w-3xl mx-auto text-center mt-16 pt-16 border-t border-border">
          <p className="text-xl text-muted-foreground">
            Nhưng tin tốt là: <span className="text-foreground font-semibold">Tiếng Anh không khó học.</span>
          </p>
          <p className="text-xl text-primary mt-2 font-medium">
            Chỉ cần học đúng thứ, đúng cách, đúng ngữ cảnh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
