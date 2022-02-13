import Body from './component/Body';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <form action="#home">
      <button id="toTop" title="Go to top">
        <i className="fas fa-angle-up"></i>
      </button>
    </form>
    <Header />
    <Body />
    <Footer />
    </>
  );
}

export default App;
