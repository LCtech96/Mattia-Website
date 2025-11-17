import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mattia Orlando</h3>
            <p className="text-gray-400">
              Il tuo consulente dedicato per la pianificazione e protezione del patrimonio.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Link Utili</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/chi-sono" className="hover:text-white transition-colors">
                  Chi Sono
                </Link>
              </li>
              <li>
                <Link href="/servizi" className="hover:text-white transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <p className="text-gray-400 mb-2">
              <a href="mailto:info@mattiaorlando.com" className="hover:text-white transition-colors">
                info@mattiaorlando.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mattia Orlando. Tutti i diritti riservati.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

