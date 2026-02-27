import { Smartphone, Sparkles } from 'lucide-react';

export default function AppFloater() {
  const scrollToProduct = () => {
    const productSection = document.getElementById('product');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      onClick={scrollToProduct}
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Check out my app"
    >
      {/* Pulsing rings */}
      <div className="absolute inset-0 animate-ping">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-30"></div>
      </div>
      <div className="absolute inset-0 animate-pulse">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20"></div>
      </div>

      {/* Main floater button */}
      <div className="relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:200%_100%] rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-cyan-500/70 transition-all hover:scale-110 animate-shimmer">
        {/* Icon with rotation animation */}
        <div className="relative">
          <Smartphone className="text-white" size={24} />
          <Sparkles 
            className="absolute -top-1 -right-1 text-yellow-300 animate-pulse" 
            size={14} 
          />
        </div>
        
        {/* Text */}
        <span className="hidden sm:block text-white font-bold whitespace-nowrap">
          Check My App! 🚀
        </span>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity"></div>
    </button>
  );
}
