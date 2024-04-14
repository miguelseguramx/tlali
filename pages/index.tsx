import Brands from "../components/Brands";
import Category from "../components/Category";
import Destinations from "../components/Destinations";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/landing";
import NextTrip from "../components/NextTrip";
import Subscription from "../components/Subscription";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* <Header /> */}
      <main>
       <Landing />
       <Category />
       <Destinations />
       <NextTrip />
       <Testimonials />
       <Subscription /> 
       <Footer />   
      </main>
    </div>
  );
}
