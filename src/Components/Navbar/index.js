import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      <ul className="nav navbar">
        <li className="list-1">
          <a href="#">Home</a>
        </li>
        <li className="list-2">
          <a href="#">Trending</a>
        </li>
        <li className="list-3">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}