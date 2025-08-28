function Footer({ author, year, links, additionalText }) {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {year} {author}. All rights reserved.
      </p>
      {links && <nav className="footer__nav">{}</nav>}
      {additionalText && <p className="footer__text">{additionalText}</p>}
    </footer>
  );
}

export default Footer;
