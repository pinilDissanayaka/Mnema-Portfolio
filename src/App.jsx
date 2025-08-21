import Outcome from "./sections/Outcome";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import OurServices from "./sections/Service";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

const App = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Navbar />
                <Hero />
                <OurServices />
                <Outcome />
                <Project />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default App;
