import { useEffect, useRef } from "react";

// const NUM_DOTS = 10;

// export default function CursorTrail() {
//   const dotRefs = useRef(
//     [...Array(NUM_DOTS).keys()].map(() => ({ x: 0, y: 0, ref: null }))
//   );

//   useEffect(() => {
//     const mouse = { x: 0, y: 0 };

//     const handleMouseMove = (e) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     const animate = () => {
//       let { x, y } = mouse;

//       dotRefs.current.forEach((dot, i) => {
//         const next = dotRefs.current[i + 1] || dot;
//         dot.x += (x - dot.x) * 0.2;
//         dot.y += (y - dot.y) * 0.2;

//         const el = dot.ref;
//         if (el) {
//           el.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
//           el.style.opacity = 1 - i / NUM_DOTS;
//         }
//       });
//       requestAnimationFrame(animate);
//     };
//     animate();
//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);
//   return (
//     <>
//       {dotRefs.current.map((dot, i) => (
//         <div
//           key={i}
//           ref={(el) => (dot.ref = el)}
//           className="fixed pointer-events-none z-50 w-4 h-4 bg-cyan-400 rounded-full blur-[1.5px] opacity-90 shadow-[0_0_15px_#22d3ee]"
//           style={{
//             transform: `translate(${dot.x}px, ${dot.y}px)`,
//             transition: "transform 0.1s ease-out",
//           }}
//         ></div>
//       ))}
//     </>
//   );
// }






export default function CursorTrail() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    let x = 0, y = 0;

    const move = (e) => {
      x = e.clientX
      y = e.clientY;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
    }
    const animate = () => {
      dot.style.transform = `translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    }
    document.addEventListener('mousemove', move);
    animate();
    return () => {
      document.removeEventListener('mousemove', move);
    };
  }
  , []);
  return (
    <div
      ref={dotRef}
      className="fixed pointer-events-none z-50 w-4 h-4 bg-cyan-400 rounded-full  blur-[1.5px] opacity-90 shadow-[0_0_15px_#22d3ee] transition: transform 0.2s ease;
      "
      style={{ transform: 'translate(-50%, -50%)' }}
    ></div>
  );

  }
