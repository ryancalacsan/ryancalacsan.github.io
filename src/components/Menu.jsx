import { useState } from "react"

export default function Menu() {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  return (
    <nav role="navigation" className="menu">
      <div
        onClick={toggleMenu}
        className={`menu__toggle ${isOpen ? "menu__toggle--open" : ""}`}
      >
        <span className="menu__toggle-icon">Menu</span>
      </div>
      <ul className={`menu__list ${isOpen ? "menu__list--active" : ""}`}>
        <li className="menu__item">
          <a onClick={toggleMenu} href="#experience" className="menu__link">
            <span>Experience</span>
          </a>
        </li>
        <li className="menu__item">
          <a onClick={toggleMenu} href="#projects" className="menu__link">
            <span>Projects</span>
          </a>
        </li>
        <li className="menu__item">
          <a onClick={toggleMenu} href="#about-me" className="menu__link">
            <span>About</span>
          </a>
        </li>
        <li className="menu__item">
          <a onClick={toggleMenu} href="#contact" className="menu__link">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
