import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import IndexTable from "@/components/sections/IndexTable";

export default function Page() {
      return (
            <section className="leading-tight">
                  <Header />
                  <IndexTable />
                  <About />
                  <Footer/>
            </section>

      );
}