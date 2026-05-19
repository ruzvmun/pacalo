import type React from "react";
import { useMemo } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Review } from "../models/reviews";
import { SITE_CONFIG } from "@/@pacalo.core/data/constants";
import { DEFAULT_REVIEWS } from "../data/reviews";
import 'swiper/swiper-bundle.css'

type ReviewsCarouselProps = {
  writeReviewHref?: string;
  intervalMs?: number;
  className?: string;
  reviews?: Review[];
};

const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({
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
      className={`w-full py-16 bg-gradient-to-br from-slate-50 to-blue-50 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="h-6 w-6 text-yellow-400" />
                ))}
              </div>
              <span className="text-3xl font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-600 text-lg">Trusted by Central Illinois</p>
          </div>

          <a
            href={writeReviewHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3 bg-pacalo-gold text-pacalo-blue font-bold rounded-lg hover:bg-yellow-500 transition-all hover:shadow-lg"
          >
            <FaStar className="mr-2 h-5 w-5" />
            Write a Review
          </a>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: intervalMs,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="pb-12"
        >
          {items.map((review, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={review.link}
                target="_blank"
                rel="noreferrer"
                className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-pacalo-blue h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-pacalo-blue transition-colors">
                      {review.author}
                    </h3>
                    {review.details && (
                      <p className="text-xs text-gray-500 mb-2">{review.details}</p>
                    )}
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.ago}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed line-clamp-2 mb-4">
                  {review.body}
                </p>

                <div className="text-pacalo-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read full review on Google →
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsCarousel;