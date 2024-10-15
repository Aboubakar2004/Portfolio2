import Comptence from "./Compétences";
import Copyright from "./Copyright";
import Footer from "./Footer";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Project from "./Project";

function Home() {
  return (
    <>
      <div className="max-w-screen-2xl p-4 m-auto">
        <Header />
        <LandingPage />
        <Comptence />
        <Project />
      </div>
      <div className="w-full">
        <Footer />
      </div>
      <div className="w-full">
        <Copyright />
      </div>
    </>
  );
}

export default Home;
