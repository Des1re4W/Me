import Header from "./components/header";
import About from "./pages/about";
import Educ from "./pages/educ";
import Experience from "./pages/exp";
import Land from "./pages/land";
import Contact from "./pages/contact";
export default function App() {
  return (
    <div>
      <Header />
      <Land />
      <About />
      <Experience />
      <Educ />
      <Contact />
    </div>
  );
}