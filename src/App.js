// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
// import Home from './Components/Redux1/Home';
import Product from './Components/Redux1/Redux2/Product';
import ProductDetails from './Components/Redux1/Redux2/ProductDetails';
function App() {
  return (
    <div className="App">
      <nav className='bg-dark text-white mt-3'>
          <h2>Redux-Concept</h2>
      </nav>
      {/* <Home /> */}
      <div className="container">
        <div className="row">
          <div className="col">
            < Product />
          </div>
        </div>
        <div className="row text-start">
          <div className="col">
            <h2 className='my-5 text-success'>Product Details</h2>
          <ProductDetails/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
