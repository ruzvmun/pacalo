import type React from "react";
import { useMemo } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Review } from "../models/reviews";
import { SITE_CONFIG } from "@/@pacalo.core/data/constants";
import { DEFAULT_REVIEWS } from "../data/reviews";

type ReviewsStripCarouselProps = {
  writeReviewHref?: string;
  intervalMs?: number;
  className?: string;
  reviews?: Review[];
};

const ReviewsStripCarousel: React.FC<ReviewsStripCarouselProps> = ({
  writeReviewHref = SITE_CONFIG.WRITE_REVIEW_HREF,
  intervalMs = 6000,
  className = "",
  reviews,
}) => {
  const items = useMemo(
    () => (reviews && reviews.length ? reviews : DEFAULT_REVIEWS),
    [reviews]
  );

  return (
    <section
      aria-label="Customer Reviews"
      className={`w-full bg-white/60 backdrop-blur-sm border-t border-white/30 ${className}`}
    >
      <div className=" px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
        <div className="flex flex-col items-end align-middle gap-3 shrink-0 text-right">
          <div className="flex justify-end text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className="h-5 w-5" />
            ))}
          </div>
          <strong className="text-gray-900 text-sm">Highest-Rated in Central Illinois</strong>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={items.length > 1}
          autoplay={{
            delay: intervalMs,
            disableOnInteraction: false,
          }}
          className="flex-1 min-w-0 max-w-md"
        >
          {items.map((review, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={review.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 px-1"
              >
                <FaQuoteLeft className="text-pacalo-blue/40 w-5 h-5 shrink-0" aria-hidden />
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-gray-700 text-sm italic leading-snug line-clamp-2 group-hover:text-pacalo-blue transition-colors">
                    {review.body}
                  </p>
                  {review.author && (
                    <p className="mt-1 text-xs text-gray-500 font-medium not-italic">
                      — {review.author}
                    </p>
                  )}
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <a
          href={writeReviewHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-5 md:px-6 py-2 bg-white/80 border-2 border-pacalo-blue text-pacalo-blue font-bold rounded-full hover:bg-pacalo-blue hover:text-white transition-colors whitespace-nowrap shrink-0"
        >
          Read all reviews
        </a>
      </div>
    </section>
  );
};

export default ReviewsStripCarousel;