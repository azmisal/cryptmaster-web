import { Box } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import Logo from "@/assets/logo.png";

const RandomFloatingLogo = ({
  top,
  left,
  size = 200,
  speed = 1,
}: {
  top?: string;
  left?: string;
  size?: number;
  speed?: number;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const velocityRef = useRef({
    x: (Math.random() - 0.5) * speed * 2,
    y: (Math.random() - 0.5) * speed * 2,
  });
  const rotationRef = useRef(Math.random() * 360);

  useEffect(() => {
    let frameId: number;
    const elementSize = size;

    const move = () => {
      setPosition((prev) => {
        let { x, y } = prev;
        let { x: velX, y: velY } = velocityRef.current;

        x += velX;
        y += velY;

        const maxX = window.innerWidth - elementSize;
        const maxY = window.innerHeight - elementSize;

        // Bounce from edges
        if (x <= 0 || x >= maxX) velX *= -1;
        if (y <= 0 || y >= maxY) velY *= -1;

        // Add slight random drift for organic movement
        velX += (Math.random() - 0.5) * 0.05;
        velY += (Math.random() - 0.5) * 0.05;

        // Limit max speed
        velX = Math.max(-speed * 2, Math.min(speed * 2, velX));
        velY = Math.max(-speed * 2, Math.min(speed * 2, velY));

        velocityRef.current = { x: velX, y: velY };
        rotationRef.current = (rotationRef.current + velX * 3) % 360;

        return {
          x: Math.max(0, Math.min(x, maxX)),
          y: Math.max(0, Math.min(y, maxY)),
        };
      });

      frameId = requestAnimationFrame(move);
    };

    frameId = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frameId);
  }, [size, speed]);

  return (
    <Box
      component="img"
      src={Logo}
      alt="Logo"
      sx={{
        position: "absolute",
        top: top || "0%",
        left: left || "0%",
        width: { xs: `${size * 0.6}px`, md: `${size}px` },
        height: { xs: `${size * 0.6}px`, md: `${size}px` },
        opacity: 0.25,
        zIndex: 5,
        filter: "drop-shadow(0 0 10px rgba(255,255,255,0.4))",
        transform: `translate(${position.x}px, ${position.y}px) rotate(${rotationRef.current}deg)`,
        transition: "transform 0.1s linear",
        pointerEvents: "none",
      }}
    />
  );
};

export default function FloatingLogos() {
  return (
    <>
      <RandomFloatingLogo top="70%" left="10%" size={180} speed={1.2} />
      <RandomFloatingLogo top="10%" left="70%" size={250} speed={1.5} />
    </>
  );
}
