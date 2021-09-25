import Logo from "../components/Logo";
import Header from "../components/Header";
import Books from "../components/Books";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Logo />
      <Header />
      <Navbar />
      <Books />
    </div>
  );
};

export default Home;
