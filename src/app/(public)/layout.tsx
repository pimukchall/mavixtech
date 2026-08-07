import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <IntroOverlay />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
