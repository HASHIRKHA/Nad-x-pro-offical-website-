import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const followerCursorRef = useRef<HTMLDivElement>(null);
  
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse positions
  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (mainCursorRef.current) {
        // Dot follows instantly but with translate3d for hardware acceleration
        mainCursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('cursor-pointer') ||
        getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isInteractive);
    };

    // Animation Loop for buttery smooth follower (LERP)
    let rafId: number;
    const animate = () => {
      // Lerp (Linear Interpolation) for a trailing effect
      // 0.15 is a good balance between responsiveness and smoothness
      const lerpAmount = 0.15;
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * lerpAmount;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * lerpAmount;

      if (followerCursorRef.current) {
        followerCursorRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  return (
    <div className={`custom-cursor-container ${isVisible ? 'visible' : ''} ${isHovering ? 'cursor-active' : ''} ${isClicking ? 'cursor-clicking' : ''}`}>
      {/* Small dot with inner glow */}
      <div 
        ref={mainCursorRef} 
        className="custom-cursor" 
      />
      {/* Smoothly trailing circle with blend modes */}
      <div 
        ref={followerCursorRef} 
        className="custom-cursor-follower" 
      />
    </div>
  );
};

export default CustomCursor;