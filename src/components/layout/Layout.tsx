import React from 'react';
import Navbar from '~/components/globals/Navbar';
import Footer from '~/components/globals/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow mt-[28%] sm:mt-[22%] md:mt-[16%] lg:mt-[14%] xl:mt-[11%] 2xl:mt-[9%]">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
