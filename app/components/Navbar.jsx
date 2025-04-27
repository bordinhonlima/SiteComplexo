'use client';

import Link from 'next/link';

export default function Navbar() {
  const menuItems = [
    { href: '/loja', label: 'Loja' },
    { href: '/precos', label: 'Ilegal' },
    { href: '/regras', label: 'Regras' },
    { href: '/contato', label: 'Contato' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center h-24">
          {/* Logo Centralizada */}
          <Link href="/" className="text-3xl font-bold text-white hover:text-gray-300 transition-colors mb-4">
            Complexo RJ
          </Link>

          {/* Menu Items Centralizados */}
          <div className="flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 