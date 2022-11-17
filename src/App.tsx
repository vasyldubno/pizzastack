import { CardGrid } from "./components/card-grid/CardGrid";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import pizza from "./pizza.json";

export const App = () => {
  return (
    <>
      <Header />
      <CardGrid items={pizza} />
      <Footer />
    </>
  );
};
