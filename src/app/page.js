import Topbar from "./components/header/Topbar";
import Header from "./components/header/Header";
import HeroBanner from "./components/hero-banner/HeroBanner";
import Benefits from "./components/benefits/Benefits";
import HowWeWork from "./components/how-we-work/HowWeWork";
import ExploreAvailable from "./components/explore/ExploreAvailable";
import ExploreBreeds from "./components/explore/ExploreBreeds";
import Blogs from "./components/blogs/Blogs";
import ExploreByLocation from "./components/explore-by-location/ExploreByLocation";
import Testimonials from "./components/testimonials/Testimonials";
import Faq from "./components/faq/Faq";
import AboutUs from "./components/about-us/AboutUs";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <HeroBanner />
        <Benefits />
        <HowWeWork />
        <ExploreAvailable />
        <ExploreBreeds />
        <Blogs />
        <ExploreByLocation />
        <Testimonials />
        <Faq />
        <AboutUs />
      </main>
      <Footer />  
    </>
  );
}
