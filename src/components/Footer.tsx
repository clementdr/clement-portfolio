const Footer = () => (
  <section className="p-20 pt-0 pb-10 max-sm:p-10">
    <hr />
    <footer className="flex flex-col items-center justify-center gap-1 pt-10 max-sm:text-center">
      <p>&copy; 2025 Clément De Roberti. Tous droits réservés.</p>
      <p>
        <a
          href="mailto:cderoberti@gmail.com"
          className="text-blue-600 cursor-pointer font-medium hover:text-indigo-600 transition-colors duration-200"
        >
          cderoberti@gmail.com
        </a>
      </p>
    </footer>
  </section>
);
export default Footer;
