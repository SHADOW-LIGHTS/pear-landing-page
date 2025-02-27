"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight as ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import ExpandableCards from "./ui/expandable-cards";
import AIModelsList from "./ai-models-list";
import Image from "next/image";

export default function Hero() {
  const textVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/landing-image.png"
            alt="Hero Background"
            width={1920}
            height={1080}
            className="h-[80%] w-[80%] translate-y-40 rounded-tr-xl object-cover object-right"
            priority
          />
        </div>
        <div className="relative mx-36 py-20">
          <div className="relative my-20 flex flex-col items-center px-6 lg:items-start">
            <motion.div
              className="group mb-2 flex scale-95 items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
            >
              <div className="h-4 w-4 rounded-sm bg-[#f26625] text-center font-mono text-xs font-medium text-white-50 sm:h-5 sm:w-5 sm:rounded-md sm:text-sm">
                Y
              </div>
              <a
                href="https://www.ycombinator.com/companies/pearai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-semibold text-black/50 transition-colors hover:text-black/70 dark:text-gray-600 dark:hover:text-gray-500"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-in-out group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                  BACKED BY Y COMBINATOR
                </span>{" "}
                <ChevronRightIcon className="h-3 w-3" strokeWidth={3} />
              </a>
            </motion.div>

            {/* Title */}
            <motion.div
              className="max-w-64 text-center text-4xl font-medium sm:max-w-[340px] sm:text-5xl lg:text-left"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.2,
              }}
            >
              <h1 className="bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-text text-transparent dark:from-neutral-50 dark:to-neutral-300">
                PearAI: The
                <br />
                AI Code Editor
                <br />
                For Your Next Project
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              className="my-4 max-w-sm text-center sm:my-6 sm:max-w-md lg:text-left"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.4,
              }}
            >
              <p className="text-base text-black/60 dark:text-gray-500 sm:text-lg">
                Bring your ideas to life with the best AI tools integrated into
                a single code editor. Built to supercharge your project
                development all the way from inception to running at scale.
                Always open source.{" "}
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              className="z-10 rounded-xl p-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
            >
              <Button asChild>
                <Link href="/pricing" className="font-semibold">
                  Try For Free
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <AIModelsList />
      <ExpandableCards />
    </>
  );
}
