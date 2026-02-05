import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import IndexTable from "@/components/sections/IndexTable";

export default function Page() {
      return (
            <section className="leading-tight">
                 <div className="h-10 mobile:bg-red-500 mid:bg-green-500 desktop:bg-blue-500" />
                  <Header />
                  <IndexTable />
                  <About />
                  <Footer/>
            </section>

      );
}