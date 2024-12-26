import "./App.css";
import {
  CustomerReview,
  Fotter,
  Hero,
  SpecialOffer,
  SpecialQuality,
  Subscription,
  PopularProuducts,
  NavBar,
  Service,
} from "./Sections/index";
function App() {
  return (
    <>
      <main className="relative">
        <NavBar />
        <section className="xl:paddin-l wide:padding-r padding:b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProuducts />
        </section>
        <section className="padding">
          <SpecialQuality />
        </section>
        <section className="px-10 py-10">
          <Service />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="padding bg-blue-50">
          <CustomerReview />
        </section>
        <section className="padding">
          <Subscription />
        </section>
        <section className="padding bg-black padding-x padding-t pb-8">
          <Fotter />
        </section>
      </main>
    </>
  );
}

export default App;
