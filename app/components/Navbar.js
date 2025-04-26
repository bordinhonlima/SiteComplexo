'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                Complexo RJ
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="/precos" className="text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 hover:text-white">
                Preços
              </Link>
              <Link href="/servicos" className="text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 hover:text-white">
                Serviços
              </Link>
              <Link href="/sobre" className="text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 hover:text-white">
                Sobre
              </Link>
              <Link href="/contato" className="text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 hover:text-white">
                Contato
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Abrir menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/precos" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white">
              Preços
            </Link>
            <Link href="/servicos" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white">
              Serviços
            </Link>
            <Link href="/sobre" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white">
              Sobre
            </Link>
            <Link href="/contato" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white">
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 