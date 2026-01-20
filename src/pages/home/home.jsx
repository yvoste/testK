import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import Projects from "../../components/projects/projects";
import Contact from "../../components/contact/contact";

const Home = () => {
  return (
    <>
      <Banner />
      <h1>Welcome to the Home Page</h1>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
