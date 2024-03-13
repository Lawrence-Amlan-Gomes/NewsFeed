
import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";
import NewsProvider from "./provider/NewsProvider";

export default function App() {
  return (
    <>
    <NewsProvider>
    <Header />
      <Page/>
      <Footer/>
    </NewsProvider>
      

    </>
  );
}
