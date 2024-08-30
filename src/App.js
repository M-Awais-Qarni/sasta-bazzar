import { CommonProvider } from './contexts/common/commonContext';
import { CartProvider } from './contexts/cart/cartContext';
import Header from './components/common/Header';
import RouterRoutes from './routes/RouterRoutes';
import Footer from './components/common/Footer';
import BackTop from './components/common/BackTop';
import Whatsapp from './components/common/Whatsapp';
// import Whatsapp from './components/common/Whatsapp';
import { FiltersProvider } from './contexts/filters/filtersContext';
import { useEffect } from 'react';


const App = () => {
  useEffect(() => {
    // Check if the website has loaded for the first time by checking localStorage
    // const isFirstTime = localStorage.getItem('Username') === null;

    // if (!isFirstTime) {
    //   // Perform actions you want to do when the website loads for the first time
    //   // For example, set a localStorage element to empty
    //   localStorage.setItem('Username', ''); // Replace 'yourKey' with your desired key

    //   // Set a flag in localStorage to indicate that the website has loaded for the first time
    //   localStorage.setItem('isFirstTime', 'false');
    // }
  }, []);
  return (
  
    <>
    
      <CommonProvider>
        <FiltersProvider>
          <CartProvider>
            <Header />
            <RouterRoutes />
            <Whatsapp />
            <Footer />
            <BackTop />
          </CartProvider>
        </FiltersProvider>
      </CommonProvider>
    </>
  );
};

export default App;
