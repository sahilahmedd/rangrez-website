// import Footer from "@/components/home/Footer";
// import Header from "@/components/home/Header";
import Herosection from "@/components/home/Herosection";
// import MobileSidebar from "@/components/Sidebar";

export default function Home() {


  return (
    // <div className="">
    // <MobileSidebar />
    //  <Header src="./images/logo.jpg" alt="logo" number="999999999" />
    //  <Herosection />
    // </div>

    <div className="relative w-full">
      {/* Show Mobile Sidebar on small screens only */}
      

      {/* Show Header on medium (md) and larger screens */}
      

      <Herosection />
      {/* <Footer number="9999999999" liItems={liItems}/> */}
    </div>
    );
}
