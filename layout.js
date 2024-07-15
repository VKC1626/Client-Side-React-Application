import PageWithColumns from "./columnspage";
import Navbar from "./Navbar";
import Footer from "./footer";

function Layout() {
  return (
    <div className="main_layout">
      <Navbar />
      <div
        style={{
          backgroundColor: "aqua",
          fontFamily: "times new roman",
          fontStyle: "italic",
        }}>
        <marquee behavior="scroll" direction="left">
          Everything you want to know about AI. We have it here!
        </marquee>
      </div>
      <br />
      <PageWithColumns />
      <Footer />
    </div>
  );
}

export default Layout;
