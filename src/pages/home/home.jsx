import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import Projects from "../../components/projects/projects";
import Contact from "../../components/contact/contact";

const Home = () => {
    return (
        <>
            <Banner />
            <h1>Welcome to the Test Page</h1>
            <p>
                This is a simple test page to demonstrate the Home component
                structure.
            </p>
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
