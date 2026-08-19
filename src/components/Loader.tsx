import React from 'react';
export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      <div className="text-brand-red text-6xl font-anton animate-pulse tracking-tighter">COCA-COLA</div>
      <div className="mt-8 w-48 h-[2px] bg-white/10 overflow-hidden">
        <div className="h-full bg-brand-red animate-[loading_2s_ease-in-out_infinite]"></div>
      </div>
      <style>{`@keyframes loading { 0% { width: 0; transform: translateX(-100%); } 50% { width: 100%; transform: translateX(0); } 100% { width: 0; transform: translateX(100%); } }`}</style>
    </div>
  );
}