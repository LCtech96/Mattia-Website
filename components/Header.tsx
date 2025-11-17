import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            MATTIA ORLANDO
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/chi-sono" className="text-gray-700 hover:text-primary-600 transition-colors">
              Chi Sono
            </Link>
            <Link href="/servizi" className="text-gray-700 hover:text-primary-600 transition-colors">
              Servizi
            </Link>
            <Link href="/contatti" className="btn-primary">
              Contatti
            </Link>
          </div>
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

