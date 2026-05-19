import type React from "react";
import { useMemo } from "react";
import { FaStar } from "react-icons/fa";
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
      className={`w-full ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="bg-white/90 backdrop-blur-sm ring-1 ring-gray-200 rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col md:flex-row gap-4 md:gap-5 items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="h-5 w-5" />
              ))}
            </div>
            <strong className="text-gray-900 font-bold text-sm md:text-base">Highest-Rated in Central Illinois</strong>
          </div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={items.length > 1}
            autoplay={{
              delay: intervalMs,
              disableOnInteraction: false,
            }}
            className="flex-1 w-full max-w-md md:max-w-xl"
          >
            {items.map((review, idx) => (
              <SwiperSlide key={idx}>
                <a
                  href={review.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center"
                >
                  <span className="text-gray-700 italic line-clamp-1 md:line-clamp-2">
                    "{review.body}"
                  </span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          <a
            href={writeReviewHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-5 md:px-6 py-2.5 bg-white border-2 border-pacalo-blue text-pacalo-blue font-bold rounded-full hover:bg-blue-50 transition-colors whitespace-nowrap shadow-sm"
          >
            Read all reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsStripCarousel;