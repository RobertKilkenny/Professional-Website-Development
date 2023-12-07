import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ContactMe from "./components/ContactMe";
import ProjectList from "./components/ProjectList";
import NotFound from "./utils/NotFound";
import ProjectPage from "./utils/ProjectPage";
import { ThemeProvider } from "./utils/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/components/Home";
import About from "@/components/About";
import Navbar from "@/components/NavBar";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="site-holder">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Navbar />
          <div className="page-holder">
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/contact-me" Component={ContactMe} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/project/:id" Component={ProjectPage} />
              <Route path="*" Component={NotFound} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
      <Toaster />
    </div>
  );
};

export default App;
