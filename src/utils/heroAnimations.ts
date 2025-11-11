// src/styles/heroAnimations.ts
import { SxProps } from "@mui/material";

export const heroKeyframes = {
  gridMove: {
    "0%": { transform: "translate(0, 0)" },
    "100%": { transform: "translate(50px, 50px)" },
  },
  float: {
    "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
    "25%": { transform: "translateY(-20px) translateX(10px)" },
    "50%": { transform: "translateY(-40px) translateX(-10px)" },
    "75%": { transform: "translateY(-20px) translateX(-20px)" },
  },
  glow: {
    "0%, 100%": { boxShadow: "0 0 5px hsla(271, 91%, 65%, 0.5)" },
    "50%": { boxShadow: "0 0 20px hsla(271, 91%, 65%, 0.8)" },
  },
  rotate3d: {
    "0%": { transform: "rotate(0deg) scale(1)" },
    "50%": { transform: "rotate(180deg) scale(1.1)" },
    "100%": { transform: "rotate(360deg) scale(1)" },
  },
  rotate3dReverse: {
    "0%": { transform: "rotate(0deg) scale(1)" },
    "50%": { transform: "rotate(-180deg) scale(0.9)" },
    "100%": { transform: "rotate(-360deg) scale(1)" },
  },
  orbFloat: {
    "0%, 100%": { transform: "translate(0, 0) scale(1)" },
    "33%": { transform: "translate(30px, -30px) scale(1.1)" },
    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
  },
  orbPulse: {
    "0%, 100%": { opacity: 0.4 },
    "50%": { opacity: 0.8 },
  },
  fadeInUp: {
    "0%": { opacity: 0, transform: "translateY(30px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
  slideDown: {
    "0%": { opacity: 0, transform: "translateY(-50px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
  gradientShift: {
    "0%, 100%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
  },
  scaleIn: {
    "0%": { opacity: 0, transform: "scale(0.5) rotateX(90deg)" },
    "100%": { opacity: 1, transform: "scale(1) rotateX(0deg)" },
  },
};

// 🎈 Floating particles generator
export const generateParticles = (count: number = 30) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 2 + Math.random() * 4,
  }));

// 🎆 Common reusable shapes
export const rotatingSquare: SxProps = {
  position: "absolute",
  top: "15%",
  right: "10%",
  border: "2px solid hsla(271, 91%, 65%, 0.2)",
  borderRadius: "20px",
  animation: "rotate3d 20s linear infinite",
  "@keyframes rotate3d": heroKeyframes.rotate3d,
};

export const rotatingCircle: SxProps = {
  position: "absolute",
  bottom: "15%",
  left: "10%",
  border: "2px solid hsla(35, 100%, 49%, 0.2)",
  borderRadius: "50%",
  animation: "rotate3dReverse 15s linear infinite",
  "@keyframes rotate3dReverse": heroKeyframes.rotate3dReverse,
};
