import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const greenRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const carWidth = 150;
      const maxMove = sectionRef.current.offsetWidth - carWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pin: true,
        }
      });

     
      tl.to(carRef.current, {
        x: maxMove,
        ease: "none",
        duration: 1,
        onUpdate: function () {
          const currentX = gsap.getProperty(carRef.current, "x");
          greenRef.current.style.width = `${currentX + 80}px`;
        }
      }, 0);

   
      tl.from(".metric-card", {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        ease: "power2.out",
        duration: 0.2
      }, 0.2);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f0f14] via-[#1a1a22] to-[#111118]"
    >
      
      <div className="absolute bottom-40 w-full h-48 bg-black/80 backdrop-blur-sm z-10" />

     
      <div
        ref={greenRef}
        className="absolute bottom-40 left-0 h-48 bg-gradient-to-r from-green-400 to-green-600 z-20 overflow-hidden flex items-center shadow-[0_0_80px_rgba(34,197,94,0.4)]"
        style={{ width: "0px" }}
      >
        <h1 className="text-7xl font-extrabold tracking-[0.4em] text-black pl-20 whitespace-nowrap drop-shadow-xl">
          WELCOME ITZFIZZ
        </h1>
      </div>

      <img
        ref={carRef}
        src="https://static.vecteezy.com/system/resources/thumbnails/047/428/462/small_2x/top-view-of-red-sedan-car-with-transparent-background-png.png"
        alt="car"
        className="absolute bottom-32 left-0 w-100 z-30 will-change-transform"
      />

    
      <div className="absolute top-28 w-full flex justify-center gap-8 z-40 flex-wrap px-6">

  <div className="metric-card bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-6 rounded-2xl w-64 text-center shadow-xl transition-transform hover:scale-105">
    <h2 className="text-4xl font-bold text-green-400">0.8s</h2>
    <p className="text-gray-300 mt-2">Average Response Time</p>
  </div>

  <div className="metric-card bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-6 rounded-2xl w-64 text-center shadow-xl transition-transform hover:scale-105">
    <h2 className="text-4xl font-bold text-sky-400">99.98%</h2>
    <p className="text-gray-300 mt-2">Platform Uptime</p>
  </div>

  <div className="metric-card bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-6 rounded-2xl w-64 text-center shadow-xl transition-transform hover:scale-105">
    <h2 className="text-4xl font-bold text-orange-400">3X</h2>
    <p className="text-gray-300 mt-2">Faster Processing</p>
  </div>

  <div className="metric-card bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-6 rounded-2xl w-64 text-center shadow-xl transition-transform hover:scale-105">
    <h2 className="text-4xl font-bold text-pink-400">45%</h2>
    <p className="text-gray-300 mt-2">Operational Cost Reduced</p>
  </div>

</div>

    </section>
  );
}