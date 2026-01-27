import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Trước đây mình sợ meeting lắm. Giờ mình chủ động raise issue trước mặt client luôn. Cảm giác được tôn trọng khác hẳn.",
    name: "Tuấn A.",
    role: "Senior Dev @ Remote Startup",
    rating: 5,
  },
  {
    quote: "Khóa 2 giúp mình pass phỏng vấn sau 2 tuần học. Interviewer khen là communicate clear, ask good questions. Đó là điều mình không ngờ tới.",
    name: "Linh M.",
    role: "Frontend Dev • Vừa join công ty Singapore",
    rating: 5,
  },
  {
    quote: "Mình làm freelance 2 năm nhưng rate không tăng. Sau khóa Client Mastery, mình biết cách demo, tư vấn, và đàm phán. Rate tăng 50%.",
    name: "Khoa V.",
    role: "Fullstack Freelancer",
    rating: 5,
  },
  {
    quote: "Điểm hay nhất là học xong áp dụng ngay được. Không phải lý thuyết xa vời. Tuần sau stand-up mình đã thấy khác.",
    name: "Hải D.",
    role: "Backend Dev @ Outsource Company",
    rating: 5,
  },
  {
    quote: "Lớp học nhỏ nên được feedback nhiều. Thầy sửa từng câu, từng cách diễn đạt. Đây là điều mình không tìm được ở các khóa online khác.",
    name: "Phương T.",
    role: "Junior Dev",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="students" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Học viên nói gì
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Feedback <span className="text-gradient">thật</span> từ dev thật
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Quote text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
