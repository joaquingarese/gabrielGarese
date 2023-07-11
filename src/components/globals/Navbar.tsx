import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const links = [
    { href: '/', label: 'INICIO' },
    { href: '/campos', label: 'CAMPOS' },
    { href: '/propiedades', label: 'PROPIEDADES' },
    { href: '/ganado', label: 'GANADO' },
    { href: '/informacion', label: 'INFORMACION' },
    { href: '/nosotros', label: 'NOSOTROS' },
    { href: '/contacto', label: 'CONTACTO' }
  ];

  return (
    <>
      <nav className="w-full left-0 fixed mx-auto z-20 bg-navbarBackground h-24 md:h-32">
        <div className="2xs:container 3xs:p-4 p-0 flex items-center justify-between h-full">
          <Link href="/">
            <a className="w-[200px] md:w-[320px] ml-[-15px] sm:ml-[-18px]">
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
            <div className="flex">
              {links.map(({ href, label }) => (
                <Link href={href} key={href}>
                  <a
                    className={`block mt-4 ms-2 mr-2 hover:border-b-4 hover:border-secondary py-4  text-bold ${
                      router.pathname === href
                        ? 'text-secondary font-bold border-b-4 border-secondary'
                        : ''
                    }`}
                  >
                    {label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="xl:hidden z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center p-3 py-2 border rounded text-black border-gray-400 "
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

            <div
              className={`absolute top-6 right-0 mt-6 md:mt-10 w-full p-2 bg-gray-100 rounded transition-all duration-500 ease-in-out transform text-caqui ${
                isOpen
                  ? 'translate-y-10 opacity-100 pointer-events-auto'
                  : 'translate-y-[-5%] opacity-0 pointer-events-none'
              }`}
            >
              {links.map(({ href, label }) => (
                <Link href={href} key={href}>
                  <a
                    className={`block py-2 px-4 ${
                      router.pathname === href ? 'text-secondary font-bold' : ''
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
      </nav>
    </>
  );
};

export default Navbar;
