"use client";

const Hero = () => (
  <div className="h-screen flex justify-center items-center text-[#313131] text-8xl relative">
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-60 h-60 border-2 border-[#313131] animate-spin-slow"></div>
    </div>
    <h1 className="z-[1] text-7xl font-normal">Clément De Roberti</h1>
    <style jsx>{`
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      .animate-spin-slow {
        animation: spin 30s linear infinite;
      }
    `}</style>
  </div>
);

export default Hero;
