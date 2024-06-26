import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-0 md:mt-8">
      <div className=" max-w-5xl">
        
        <Link
          heading="Innovation Studios"
          subheading="Co-Founded a consulting company offering technical services."
          imgSrc="https://res.cloudinary.com/dl2adjye7/image/upload/v1714381657/57shots_so_v6zzeu.png"
          href="https://innovationstudios.uk/"
        />
        <Link
          heading="Il Etait Une Asso"
          subheading="Editorial project on EMLyon's associative life "
          imgSrc="https://res.cloudinary.com/dl2adjye7/image/upload/v1717142074/unnamed_2_alobpb.png"
          href="https://www.instagram.com/il_etait_une_asso/?igsh=MzRlODBiNWFlZA%3D%3D"
        />
        <Link
          heading="Un Arret Sur Image"
          subheading="Our Work speaks for itself!"
          imgSrc="https://res.cloudinary.com/dl2adjye7/image/upload/v1717142074/unnamed_3_yunace.png"
          href="https://www.instagram.com/1arretsurimage/?igsh=MzRlODBiNWFlZA%3D%3D"
        />
        <Link
          heading="OneCvaDay | Web App"
          subheading="Developed and Market a web app registering Profesional CVs. 500+ Users"
          imgSrc="https://res.cloudinary.com/dl2adjye7/image/upload/v1714398540/246shots_so_1_cmjim3.png"
          href="https://www.onecvaday.com/"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-purple-600 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block font-bold text-neutral-500 transition-colors duration-500 group-hover:text-purple-600 text-xl md:text-5xl"
        >
          {heading.split(" ").map((word, index) => (
  <span key={index}>
    {word.split("").map((char, charIndex) => (
      <motion.span
        variants={{
          initial: { x: 0 },
          whileHover: { x: 16 },
        }}
        transition={{ type: "spring" }}
        className="inline-block"
        key={charIndex}
      >
        {char}
      </motion.span>
    ))}
    {index < heading.split(" ").length - 1 && <span>&nbsp;</span>} {/* Add spaces explicitly */}
  </span>
))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-purple-600">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};