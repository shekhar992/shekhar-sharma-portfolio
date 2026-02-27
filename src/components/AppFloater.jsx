import { Smartphone } from 'lucide-react';

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
      {/* Main floater button - Apple style */}
      <div className="flex items-center gap-3 px-6 py-4 bg-white text-black rounded-full shadow-2xl hover:scale-105 transition-smooth">
        <Smartphone size={22} />
        <span className="hidden sm:block font-semibold whitespace-nowrap">
          Try my app
        </span>
      </div>
    </button>
  );
}
