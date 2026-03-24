import { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const GRID_VISIBLE_COUNT = 6;

const feedbackImageUrls: string[] = (() => {
  const png = import.meta.glob<string>("../assets/feedback/*.png", { eager: true, import: "default" });
  const pngUpper = import.meta.glob<string>("../assets/feedback/*.PNG", { eager: true, import: "default" });
  const jpg = import.meta.glob<string>("../assets/feedback/*.jpg", { eager: true, import: "default" });
  const jpeg = import.meta.glob<string>("../assets/feedback/*.jpeg", { eager: true, import: "default" });
  const webp = import.meta.glob<string>("../assets/feedback/*.webp", { eager: true, import: "default" });
  const imageModules = { ...png, ...pngUpper, ...jpg, ...jpeg, ...webp };
  return Object.keys(imageModules)
    .sort((a, b) => a.localeCompare(b))
    .map((key) => imageModules[key]);
})();

const FeedbackSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = feedbackImageUrls.length;
  const hasMore = total > GRID_VISIBLE_COUNT;
  const gridThumbs = hasMore
    ? feedbackImageUrls.slice(0, GRID_VISIBLE_COUNT - 1)
    : feedbackImageUrls;
  const morePreviewSrc = hasMore ? feedbackImageUrls[GRID_VISIBLE_COUNT - 1] : undefined;
  const moreCount = hasMore ? total - GRID_VISIBLE_COUNT : 0;

  const openAt = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, total - 1)));
    setLightboxOpen(true);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i <= 0 ? total - 1 : i - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i >= total - 1 ? 0 : i + 1));
  }, [total]);

  useEffect(() => {
    if (!lightboxOpen || total === 0) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, total, goPrev, goNext]);

  if (total === 0) {
    return null;
  }

  return (
    <section id="feedback" className="py-24 bg-background relative scroll-mt-20">
      <div className="absolute inset-0 bg-glow pointer-events-none opacity-50" />
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Phản hồi thực tế
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Feedback từ <span className="text-gradient">học viên</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {gridThumbs.map((src, i) => (
            <div key={src} className="break-inside-avoid mb-4">
              <button
                type="button"
                onClick={() => openAt(i)}
                className={cn(
                  "group w-full text-left rounded-xl overflow-hidden border border-border bg-secondary/20",
                  "ring-offset-background transition-all hover:ring-2 hover:ring-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                )}
                aria-label={`Mở ảnh feedback ${i + 1} trên ${total}`}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
              </button>
            </div>
          ))}

          {hasMore && morePreviewSrc !== undefined && (
            <div className="break-inside-avoid mb-4">
              <button
                type="button"
                onClick={() => openAt(GRID_VISIBLE_COUNT)}
                className={cn(
                  "group relative w-full text-left rounded-xl overflow-hidden border border-border",
                  "ring-offset-background transition-all hover:ring-2 hover:ring-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                )}
                aria-label={`Xem thêm ${moreCount} ảnh — mở từ ảnh ${GRID_VISIBLE_COUNT + 1}`}
              >
                <img
                  src={morePreviewSrc}
                  alt=""
                  className="w-full h-auto object-cover block opacity-70 group-hover:opacity-55 transition-opacity"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 group-hover:bg-black/50 transition-colors px-4"
                  aria-hidden
                >
                  <span className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
                    +{moreCount} ảnh
                  </span>
                  <span className="text-white/90 text-sm font-medium mt-1">Xem thêm</span>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          className={cn(
            "fixed inset-0 left-0 top-0 z-50 flex h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-none border-0 bg-black/95 p-0 shadow-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "[&>button]:right-3 [&>button]:top-3 [&>button]:z-[60] [&>button]:text-white [&>button]:opacity-90 [&>button]:hover:opacity-100 [&>button]:hover:bg-white/10",
          )}
        >
          <DialogTitle className="sr-only">
            Ảnh feedback {currentIndex + 1} trên {total}
          </DialogTitle>

          <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-3 pb-6 pt-14 sm:px-6 sm:pb-8 sm:pt-16">
            <div className="relative flex w-full max-w-6xl flex-1 items-center justify-center">
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-0 z-[55] flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-1 md:left-2"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>

              <img
                src={feedbackImageUrls[currentIndex]}
                alt=""
                className="max-h-[min(78vh,100%)] w-auto max-w-full object-contain"
              />

              <button
                type="button"
                onClick={goNext}
                className="absolute right-0 z-[55] flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-1 md:right-2"
                aria-label="Ảnh sau"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </div>

            <p className="mt-4 text-sm text-white/80" aria-live="polite">
              {currentIndex + 1} / {total}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeedbackSection;
