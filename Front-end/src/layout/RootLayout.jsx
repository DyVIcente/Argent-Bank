import { Outlet } from "react-router-dom";
import { Nav, Footer } from "../components/index";


const RootLayout = () => 
(
  <div>
    <header>
        <Nav/>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
);

export { RootLayout };