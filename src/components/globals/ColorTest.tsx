import React from 'react';
import Link from 'next/link';

function ColorTest() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-9 bg-secondary">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">My Site</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                About
              </a>
            </Link>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
      <nav className="flex items-center justify-between flex-wrap p-9 bg-primary">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">My Site</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                About
              </a>
            </Link>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
      <div>
        <span className="mt-10 text-center font-medium text-3xl text-green ml-10 mr-8 font-header">
          Gabriel Garese
        </span>
        <span className="mt-10 text-center font-medium text-3xl text-green2 ml-10 mr-8">
          Gabriel Garese
        </span>
        <span className="mt-10 text-center font-medium text-3xl text-caqui mr-8">
          Gabriel Garese
        </span>
        <span className="mt-10 text-center font-medium text-3xl text-green-soft mr-8">
          Gabriel Garese
        </span>
        <span className="mt-10 text-center font-medium text-3xl text-green-soft mr-8">
          Gabriel Garese
        </span>
        <span className="mt-10 text-center font-medium text-3xl text-green-soft mr-8">
          Gabriel Garese
        </span>
        <span className="mt-10 text-center font-medium text-3xl text-green-soft mr-8">
          Gabriel Garese
        </span>
      </div>
      <div>
        <small className="text-green-small px-4">Hola que tal tu como estas?</small>
        <small className="text-green-small px-4">Hola que tal tu como estas?</small>
        <small className="text-green-small px-4">Hola que tal tu como estas?</small>
        <small className="text-green-small px-4">Hola que tal tu como estas?</small>
        <small className="text-green-small px-4">Hola que tal tu como estas?</small>
        <small className="text-green-small px-4">Hola que tal tu como estas?</small>
        <small className="text-green-small px-4">Hola que tal tu como estas?</small>
        <small className="text-green-small px-4 font-body">Hola que tal tu como estas?</small>
        <small className="text-caqui px-4">Hola que tal tu como estas?</small>
      </div>
    </>
  );
}

export default ColorTest;
