function Footer() {
  return (
    <footer className="w-full mt-12 py-6 px-4 text-center border-t border-[#ffffff20]">
      <h2 className="text-xl font-bold text-white">ClimaView 🌤️</h2>

      <p className="text-sm text-[#c5dce9] mt-2">
        Desenvolvido por Guilherme Perobelli Zambolim.
      </p>

      <p className="text-xs text-[#9bb8cc] mt-4">
        © 2026 ClimaView. Todos os direitos reservados.
      </p>

      <p className="text-xs text-[#9bb8cc] mt-3">
        Dados meteorológicos fornecidos por{" "}
        <a
          href="https://open-meteo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors"
        >
          Open-Meteo
        </a>
        .
      </p>

      <p className="text-xs text-[#9bb8cc] mt-2">
        Dados de localização fornecidos por{" "}
        <a
          href="https://www.geonames.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors"
        >
          GeoNames
        </a>{" "}
        via Open-Meteo.
      </p>
    </footer>
  );
}

export default Footer;
