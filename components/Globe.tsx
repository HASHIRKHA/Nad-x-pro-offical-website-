
import React, { useEffect, useRef, useState } from 'react';

const Globe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    
    // Increase density for a more premium look
    const dots: { x: number; y: number; z: number }[] = [];
    const dotCount = 1200;

    for (let i = 0; i < dotCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotCount);
      const theta = Math.sqrt(dotCount * Math.PI) * phi;
      dots.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi)
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      mouseRef.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Target rotation based on mouse and auto-spin
      targetRotationRef.current.y += 0.003; // Constant spin
      
      // Lerp rotation for buttery smoothness
      rotationRef.current.x += (mouseRef.current.y * 0.8 - rotationRef.current.x) * 0.05;
      rotationRef.current.y += (mouseRef.current.x * 0.8 + targetRotationRef.current.y - rotationRef.current.y) * 0.05;

      const radius = Math.min(width, height) * 0.42;
      const centerX = width / 2;
      const centerY = height / 2;

      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);
      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);

      // Sort dots by Z-index for correct transparency layering
      const projectedDots = dots.map(dot => {
        // Rotate Y
        let x = dot.x * cosY - dot.z * sinY;
        let z = dot.x * sinY + dot.z * cosY;
        let y = dot.y;

        // Rotate X
        let newY = y * cosX - z * sinX;
        let newZ = y * sinX + z * cosX;
        
        return { x, y: newY, z: newZ };
      }).sort((a, b) => a.z - b.z);

      projectedDots.forEach((dot) => {
        // Scale and Opacity based on Z depth
        // z ranges from -1 to 1
        const perspective = 1.5;
        const scale = (dot.z + perspective) / perspective;
        const size = Math.max(0.5, scale * 1.6);
        const opacity = Math.max(0.1, (dot.z + 1) / 2);

        ctx.beginPath();
        // Dynamic coloring - front dots are brighter cyan, back dots are darker
        if (dot.z > 0) {
          ctx.fillStyle = `rgba(0, 242, 255, ${opacity * 0.9})`;
          ctx.shadowBlur = size * 2;
          ctx.shadowColor = '#00f2ff';
        } else {
          ctx.fillStyle = `rgba(0, 242, 255, ${opacity * 0.3})`;
          ctx.shadowBlur = 0;
        }

        ctx.arc(centerX + dot.x * radius, centerY + dot.y * radius, size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-xl mx-auto overflow-visible group cursor-none">
      <canvas ref={canvasRef} className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-110" />
      
      {/* Cinematic Atmosphere Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-3/4 h-3/4 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse"></div>
        <div className="absolute w-1/2 h-1/2 rounded-full bg-blue-600/5 blur-[80px] delay-700"></div>
      </div>

      {/* Interactive Orbit Ring (Decorative) */}
      <div className="absolute inset-0 border border-cyan-400/10 rounded-full scale-[0.85] pointer-events-none group-hover:scale-100 group-hover:border-cyan-400/20 transition-all duration-1000"></div>
    </div>
  );
};

export default Globe;
