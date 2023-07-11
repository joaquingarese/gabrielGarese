import Footer from '~/components/globals/Footer';
import Navbar from '~/components/globals/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow mt-30 md:mt-32">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
