export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Designed and built by Ryan Calacsan
      </p>
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Ryan Calacsan
      </p>
    </footer>
  )
}
