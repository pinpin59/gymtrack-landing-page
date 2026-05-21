"use client";
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
  benefit: IBenefit;
  imageAtRight?: boolean;
}

const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const childVariants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
  const { title, description, imageSrc, bullets } = benefit;

  return (
    <section className="benefit-section">
      {/* Mobile card layout */}
      <motion.div
        className="lg:hidden bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        {/* Image banner au-dessus */}
        <div className="flex justify-center items-end bg-gradient-to-b from-gray-50 to-white pt-8 pb-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            width={504}
            height={762}
            quality={100}
            style={{ width: "auto", height: "400px" }}
          />
        </div>
        {/* Contenu */}
        <div className="px-5 pb-7 pt-4">
          <motion.div variants={childVariants}>
            <SectionTitle>
              <h3 className="text-center my-5">{title}</h3>
            </SectionTitle>
            <p className="mt-2 text-sm leading-relaxed text-foreground-accent">
              {description}
            </p>
          </motion.div>
          <div className="mt-1">
            {bullets.map((item, index) => (
              <BenefitBullet
                key={index}
                title={item.title}
                icon={item.icon}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Desktop layout */}
      <motion.div
        className="hidden lg:flex flex-row items-center justify-center gap-20 flex-nowrap mb-24"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <div
          className={clsx("flex items-center w-full max-w-lg", {
            "justify-start": imageAtRight,
            "order-1 justify-end": !imageAtRight,
          })}
        >
          <div className="w-full text-left">
            <motion.div
              className="flex flex-col w-full"
              variants={childVariants}
            >
              <SectionTitle>
                <h3 className="max-w-2xl">{title}</h3>
              </SectionTitle>
              <p className="mt-1.5 leading-normal text-foreground-accent">
                {description}
              </p>
            </motion.div>
            <div className="w-full">
              {bullets.map((item, index) => (
                <BenefitBullet
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={clsx("flex-none", { "order-2": imageAtRight })}>
          <Image
            src={imageSrc}
            alt={title}
            width={504}
            height={762}
            quality={100}
            style={{ width: "auto", maxWidth: "360px", height: "auto" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitSection;
