"use client";

import { motion, useInView } from "framer-motion";
import { Bot, Heart, LucideIcon, MapPin, Waves } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { AboutCard, aboutCards } from "@/config/about";

const iconMap: Record<AboutCard["icon"], LucideIcon> = {
  robot: Bot,
  reef: Waves,
  travel: MapPin,
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: "easeOut" as const },
  },
};

function AboutMedia({
  card,
  isSectionInView,
}: {
  card: AboutCard;
  isSectionInView: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const playVideo = () => {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.pause();
        });
      }
    };

    const stopVideo = () => {
      video.pause();
      video.currentTime = 0;
    };

    if (!isSectionInView) {
      stopVideo();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
          return;
        }

        stopVideo();
      },
      { threshold: 0.35 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      stopVideo();
    };
  }, [isSectionInView]);

  if (card.video) {
    return (
      <video
        ref={videoRef}
        className="pointer-events-none h-full w-full object-cover"
        aria-label={card.imageAlt}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        onEnded={(event) => {
          const video = event.currentTarget;
          video.currentTime = 0;

          if (isSectionInView) {
            void video.play();
          }
        }}
      >
        <source src={card.video} type="video/mp4" />
      </video>
    );
  }

  if (!card.image) {
    return null;
  }

  return (
    <Image
      src={card.image}
      alt={card.imageAlt}
      fill
      sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
      className="object-cover"
    />
  );
}

function AboutCardItem({
  card,
  isSectionInView,
}: {
  card: AboutCard;
  isSectionInView: boolean;
}) {
  const Icon = iconMap[card.icon];

  return (
    <motion.article
      className="overflow-hidden rounded-[18px] border border-white/10 bg-[#f8f3ea] shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
      variants={cardVariants}
    >
      <div className="relative h-48 overflow-hidden bg-[#1d1d1f] sm:h-56 lg:h-40 xl:h-44">
        <AboutMedia card={card} isSectionInView={isSectionInView} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_55%,rgba(0,0,0,0.18)_100%)]" />
      </div>

      <div className="min-h-[176px] bg-[#fbf6ed] p-4 md:p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#0066cc]/20 bg-white text-[#0066cc]">
            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <h3 className="font-heading text-[20px] font-semibold leading-[1.19] tracking-[0.231px] text-[#1d1d1f]">
            {card.title}
          </h3>
        </div>
        <p className="mt-3 text-[14px] font-normal leading-[1.47] tracking-[-0.224px] text-[#333333] md:text-[15px]">
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}

export function MoreAboutMeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, {
    amount: 0.45,
  });

  return (
    <motion.section
      ref={sectionRef}
      id="about-me"
      className="overflow-hidden bg-[#151412] px-5 py-12 text-white md:px-8 md:py-14 lg:min-h-[calc(100svh-44px)] lg:py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariants}
    >
      <div className="mx-auto flex max-w-[1120px] flex-col justify-center lg:min-h-[calc(100svh-124px)]">
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">
          <motion.div
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#2997ff]"
            variants={headerVariants}
          >
            <Heart className="h-5 w-5" aria-hidden="true" />
            <span className="absolute -right-1 top-2 h-1.5 w-1.5 rounded-full bg-[#2997ff]" />
            <span className="absolute right-1 top-0 h-2 w-px rotate-45 rounded-full bg-[#2997ff]" />
            <span className="absolute -top-1 right-4 h-2 w-px -rotate-12 rounded-full bg-[#2997ff]" />
          </motion.div>

          <motion.h2
            className="mt-3 font-heading text-[32px] font-semibold leading-[1.1] tracking-[-0.374px] text-white md:text-[38px]"
            variants={headerVariants}
          >
            More About Me
          </motion.h2>
          <motion.p
            className="mt-3 max-w-[720px] text-[17px] font-normal leading-[1.42] tracking-[0.196px] text-[#d8d1c7] md:text-[19px]"
            variants={headerVariants}
          >
            Outside of work, I&apos;m usually building a Gundam kit, taking care
            of my reef tank, or planning my next trip.
          </motion.p>
        </div>

        <motion.div
          className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={sectionVariants}
        >
          {aboutCards.map((card) => (
            <AboutCardItem
              key={card.title}
              card={card}
              isSectionInView={isSectionInView}
            />
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-7 flex max-w-[760px] flex-col items-center text-center"
          variants={headerVariants}
        >
          <div className="flex w-full items-center gap-4 text-[#b9aa98]">
            <span className="h-px flex-1 bg-[#6f6254]" />
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2997ff]/30 bg-[#2997ff]/10 text-[#2997ff]">
              <Waves className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="h-px flex-1 bg-[#6f6254]" />
          </div>
          <p className="mt-4 max-w-[720px] text-[15px] font-normal leading-[1.47] tracking-[-0.374px] text-[#eee4d8] md:text-[16px]">
            The things I enjoy outside of work usually have something in common:
            patience, curiosity, and attention to detail.
            <Heart
              className="ml-2 inline h-4 w-4 align-[-2px] text-[#2997ff]"
              aria-hidden="true"
            />
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
