import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Halaman Home</h2>;
}
function Kontak() {
  return <h2>Halaman Kontak</h2>;
}
function AboutUs() {
  return <h2>Halaman About Us</h2>;
}
function Login() {
  return <h2>Halaman Login</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/kontak">Kontak</Link> | 
        <Link to="/aboutus">About Us</Link> | 
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;