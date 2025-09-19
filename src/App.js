import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home"
import Posts from "./components/Posts"
import Crypto from "./components/Crypto"
import Dog from "./components/Dog"
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/crypto">Crypto</Link>
        <Link to="/dog">Dog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </BrowserRouter>
  )
}