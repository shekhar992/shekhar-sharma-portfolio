export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="mb-2">
          Built with <span className="text-red-500">❤️</span> using vibecoding
        </p>
        <p className="text-sm">
          © {currentYear} Shekhar Sharma. All rights reserved.
        </p>
        <p className="text-xs mt-4 text-gray-500">
          React + Vite + Tailwind + Claude AI
        </p>
      </div>
    </footer>
  );
}