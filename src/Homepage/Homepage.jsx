import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Hero from "./Hero/Hero";
import Specials from "./Specials/Specials";

export default function Homepage() {
  return (
    <>
        <Header />
        <main>
            <Hero />
            <Specials />
        </main>
        <Footer />
    </>
  )
}

