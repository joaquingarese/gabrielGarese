import React from 'react';
import Link from 'next/link';
import { MdMail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

function Footer() {
  const onClickWhatsApp = () => {
    const phoneNumber = '+59899680911';
    const message = encodeURIComponent(`Hola! ¿En qué lo podemos ayudar?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  };
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className=" 2xs:container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4 ml-1">
              <u>Empresa</u>
            </h3>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/nosotros" className="hover:text-gray-300">
                  Sobre Nosotros
                </a>
              </li>
              <li className="mb-2">
                <a href="/campos" className="hover:text-gray-300">
                  Campos
                </a>
              </li>
              <li className="mb-2">
                <a href="/propiedades" className="hover:text-gray-300">
                  Propiedades
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex md:w-1/4 mb-6 sm:pl-0 md:pl-2 justify-center items-center">
            <img
              src="/images/logoFainaBlanco.png"
              alt="My Site Logo"
              className="sm:max-h-20 lg:max-h-16 w-auto"
            />
          </div>
          <div className="w-1/2 md:w-1/4 mb-6 sm:pl-0 md:pl-0 flex flex-row justify-end">
            <div className="md:w-1/2">
              <h3 className="text-lg font-semibold mb-4 ml-1">
                <u> Contacto</u>
              </h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <MdMail size={15} className="text-white inline mr-1 mb-1 " />
                  <a href="/contacto" className="hover:text-gray-300">
                    Contáctenos
                  </a>
                </li>
                <li className="mb-2">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      onClickWhatsApp();
                    }}
                    className="inline"
                    role="button"
                  >
                    <BsWhatsapp size={15} className="text-white inline mr-1 mb-1 " />
                    <p className="hover:text-gray-300 inline">099680911</p>
                  </div>
                </li>
                <li className="mb-2">
                  <MdLocationOn size={15} className="text-white inline mr-1 mb-1 " />
                  <a href="#" className="hover:text-gray-300">
                    Máximo Tajes 7224
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm">
          <p className="text-center">
            <img
              src="/images/GGBlanco.png"
              alt="My Site Logo"
              className="max-h-10 md:hidden w-auto inline"
            />{' '}
            Todos los derechos reservados. &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
