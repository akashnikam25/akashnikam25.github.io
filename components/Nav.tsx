export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        AN<span>.</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#awards">awards</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <a href="#contact" className="nav-cta">
        Say hello →
      </a>
    </nav>
  );
}
