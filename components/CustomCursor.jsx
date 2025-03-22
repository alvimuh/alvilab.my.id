import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", onMouseMove);

    gsap.ticker.add(() => {
      if (!cursor || !follower) return;

      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      gsap.set(cursor, {
        x: cursorX - 10,
        y: cursorY - 10,
      });

      gsap.set(follower, {
        x: followerX - 20,
        y: followerY - 20,
      });
    });

    // Hover effect for interactive elements
    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        scale: 2,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
      });
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, input, .interactive"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 bg-black dark:bg-white rounded-full pointer-events-none mix-blend-difference z-[9999]"
        style={{ willChange: "transform" }}
      />
      <div
        ref={followerRef}
        className="fixed w-10 h-10 bg-black/10 dark:bg-white/10 rounded-full pointer-events-none z-[9998]"
        style={{ willChange: "transform" }}
      />
    </>
  );
};

export default CustomCursor;
