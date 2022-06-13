import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className="bg-[#2E0249]" >
      <Header    />
      <main >
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;