import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import MobileSidebar from "@/components/Sidebar";

export default function Home() {

  const liItems = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "About",
        path: "/about"
    },
    {
        label: "Gallery",
        path: "/gallery"
    },
    {
        label: "Contact Us",
        path: "/contact"
    }
]

  return (
    // <div className="">
    // <MobileSidebar />
    //  <Header src="./images/logo.jpg" alt="logo" number="999999999" />
    //  <Herosection />
    // </div>

    <div className="relative w-full">
      {/* Show Mobile Sidebar on small screens only */}
      <div className="block md:hidden">
        <MobileSidebar />
      </div>

      {/* Show Header on medium (md) and larger screens */}
      <div className="hidden md:block">
        <Header liItems={liItems} src="./images/logo.png" alt="logo" number="999999999" />
      </div>

      <Herosection />
      <Footer liItems={liItems}/>
    </div>
    );
}
