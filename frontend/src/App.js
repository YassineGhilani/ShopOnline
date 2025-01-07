import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductListpage from './pages/ProductListPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/products" element={<ProductListpage />} />
      <Route path="/add-product" element={<AddProductPage />} />
      <Route path="/edit-product/:id" element={<EditProductPage />} />
    </Routes>
    <Footer />
  </Router>
)

export default App;
