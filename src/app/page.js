import Header from "./components/header/Header";
import HeroBanner from "./components/hero-banner/HeroBanner";
import Topbar from "./components/header/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <HeroBanner />
      </main>    
    </>
  );
}
