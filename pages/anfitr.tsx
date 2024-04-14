import Footer from "../components/Footer";
import Category from "../components/Category";
import Destinations from "../components/Destinations";
import Header from "../components/Header";
import NextTrip from "../components/NextTrip";
import Subscription from "../components/Subscription";
import Testimonials from "../components/Testimonials";

export default function anfitrion() {
    return (
      <div className="relative overflow-x-hidden">
        <Header />
        <main>
        <Category />
         {/* <Category />
         <Destinations />
         <NextTrip />
         <Testimonials /> */}
         <Footer />   
        </main>
      </div>
    );
  }