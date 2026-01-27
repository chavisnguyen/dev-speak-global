import { Check, X } from "lucide-react";

const forYou = [
  "Developer muốn làm việc với team hoặc client quốc tế",
  "Đã có nền tảng code, chỉ cần bổ sung English đúng ngữ cảnh",
  "Muốn tăng rate, tăng cơ hội, giảm stress trong công việc",
  "Sẵn sàng đầu tư thời gian để học và thực hành",
  "Nghiêm túc về sự nghiệp, không tìm phép màu",
];

const notForYou = [
  "Muốn học tiếng Anh học thuật, IELTS, TOEIC",
  "Chưa có kinh nghiệm code, muốn học lập trình",
  "Tìm kiếm khóa học miễn phí hoặc tự học qua video",
  "Không có thời gian practice và áp dụng",
];

const WhoIsThisForSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Dành cho ai?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Khóa học này <span className="text-gradient">phù hợp với bạn?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Thẳng thắn để bạn quyết định đúng.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For You */}
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Phù hợp cho bạn nếu:</h3>
            </div>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-destructive">Không phù hợp nếu:</h3>
            </div>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
