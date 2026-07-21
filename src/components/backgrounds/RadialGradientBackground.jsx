import React from "react";

const GlowGradientBackground = ({ variant = "hero", gradients = [] }) => {
  const variants = {
    hero: [
      {
        position: "top-0 left-1/2 -translate-x-1/2",
        size: "w-[1400px] h-[900px]",
        colors: [
          { color: "rgba(141, 255, 105, 0.25)", stop: "0%" },
          { color: "rgba(141, 255, 105, 0.15)", stop: "30%" },
          { color: "rgba(141, 255, 105, 0.08)", stop: "60%" },
          { color: "rgba(141, 255, 105, 0.02)", stop: "85%" },
          { color: "rgba(141, 255, 105, 0)", stop: "100%" },
        ],
        blur: "8px",
        opacity: 1,
      },
      {
        position: "top-[10%] left-[5%]",
        size: "w-[800px] h-[800px]",
        colors: [
          { color: "rgba(141, 255, 105, 0.20)", stop: "0%" },
          { color: "rgba(141, 255, 105, 0.10)", stop: "40%" },
          { color: "rgba(141, 255, 105, 0.04)", stop: "70%" },
          { color: "rgba(141, 255, 105, 0)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.8,
      },
      {
        position: "bottom-[-10%] right-[-5%]",
        size: "w-[1000px] h-[800px]",
        colors: [
          { color: "rgba(141, 255, 105, 0.18)", stop: "0%" },
          { color: "rgba(141, 255, 105, 0.08)", stop: "40%" },
          { color: "rgba(141, 255, 105, 0.03)", stop: "70%" },
          { color: "rgba(141, 255, 105, 0)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.7,
      },
    ],
    about: [
      {
        position: "bottom-[-20%] left-[70%]",
        size: "w-[900px] h-[900px]",
        colors: [
          { color: "rgba(141, 255, 105, 0.20)", stop: "0%" },
          { color: "rgba(141, 255, 105, 0.10)", stop: "40%" },
          { color: "rgba(141, 255, 105, 0.04)", stop: "70%" },
          { color: "rgba(141, 255, 105, 0)", stop: "100%" },
        ],
        blur: "8px",
        opacity: 0.8,
      },
    ],
  };

  const activeGradients = variant === "custom" ? gradients : variants[variant] || variants.hero;

  const generateGradient = (colors) => {
    const colorStops = colors.map(({ color, stop }) => `${color} ${stop}`).join(", ");
    return `radial-gradient(ellipse at center, ${colorStops})`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default GlowGradientBackground;