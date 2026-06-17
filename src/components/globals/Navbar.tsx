import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect, useRef } from 'react';

import { client } from '~/lib/sanity';

type NavLink = { href: string; label: string; requires?: 'houses' | 'cattle' };

const allLinks: NavLink[] = [
  { href: '/', label: 'INICIO' },
  { href: '/campos', label: 'CAMPOS' },
  { href: '/propiedades', label: 'PROPIEDADES', requires: 'houses' },
  { href: '/ganado', label: 'GANADO', requires: 'cattle' },
  { href: '/informacion', label: 'INFORMACION' },
  { href: '/nosotros', label: 'NOSOTROS' },
  { href: '/contacto', label: 'CONTACTO' }
];

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  // Hide PROPIEDADES / GANADO until we confirm there is something to show.
  const [counts, setCounts] = useState<{ houses: number; cattle: number } | null>(null);

  useEffect(() => {
    let active = true;
    client
      .fetch<{ houses: number; cattle: number }>(
        '{"houses": count(*[_type == "houses"]), "cattle": count(*[_type == "cattle"])}'
      )
      .then((res) => {
        if (active) setCounts(res);
      })
      .catch((error) => console.error('Error fetching navbar counts:', error));
    return () => {
      active = false;
    };
  }, []);

  const links = allLinks.filter((link) => {
    if (!link.requires) return true;
    return counts ? counts[link.requires] > 0 : false;
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (node.current?.contains(e.target as Node)) {
        // inside click
        return;
      }
      // outside click
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full left-0 fixed mx-auto bg-navbarBackground h-24 md:h-32 z-20 shadow-[0_1px_2px_rgba(43,35,26,0.06)]">
        <div className="2xs:container 3xs:p-4 p-0 flex items-center justify-between h-full">
          <Link href="/">
            <a className="w-[300px] md:w-[380px] xl:w-[450px] ml-[-15px] sm:ml-[-18px]">
              <Image
                src="/images/logoCentrado.png"
                alt="My Site Logo"
                layout="responsive"
                width={300}
                height={50}
              />
            </a>
          </Link>
          <div className="hidden xl:block font-navbar">
            <div className="flex items-center gap-7 2xl:gap-9">
              {links.map(({ href, label }) => (
                <Link href={href} key={href}>
                  <a
                    data-active={router.pathname === href}
                    className={`nav-link block py-2 text-[13px] tracking-[0.18em] transition-colors hover:text-tierra ${
                      router.pathname === href
                        ? 'text-tierra font-semibold'
                        : 'text-tertiary/80 font-medium'
                    }`}
                  >
                    {label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="xl:hidden ml-auto">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              className="flex items-center p-3 py-2 border rounded text-black border-gray-400"
            >
              {isOpen === false ? (
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              ) : (
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.95 4.95a1 1 0 011.414 0L10 8.586l3.536-3.536a1 1 0 111.414 1.414L11.414 10l3.536 3.536a1 1 0 11-1.414 1.414L10 11.414l-3.536 3.536a1 1 0 01-1.414-1.414L8.586 10 4.95 6.364a1 1 0 010-1.414z" />
                </svg>
              )}
            </button>
          </div>

          <div className="xl:hidden z-30">
            <div ref={node}>
              <div
                className={`absolute top-6 right-0 mt-6 md:mt-10 w-full p-3 bg-cream border border-lightBrown rounded-md shadow-lg font-navbar transition-all duration-500 ease-in-out transform text-tertiary ${
                  isOpen
                    ? 'translate-y-10 opacity-100 pointer-events-auto'
                    : 'translate-y-[-5%] opacity-0 pointer-events-none'
                }`}
              >
                {links.map(({ href, label }) => (
                  <Link href={href} key={href}>
                    <a
                      className={`block py-3 px-4 text-sm tracking-[0.14em] border-l-2 transition-colors hover:bg-primary-soft/50 ${
                        router.pathname === href
                          ? 'text-tierra font-semibold border-primary'
                          : 'border-transparent'
                      } `}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="fence-line pointer-events-none absolute bottom-0 left-0 w-full text-primary/30"
        />
        {isOpen && (
          <div className="fixed top-0 bottom-0 left-0 right-0 z-10" onClick={toggleNavbar} />
        )}
      </nav>
    </>
  );
};

export default Navbar;
