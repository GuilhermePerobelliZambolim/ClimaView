import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import type { Cidade } from "./types";

function App() {
  const [cidadeSelecionada, setCidadeSelecionada] = useState<Cidade | null>(
    null,
  );

  function atualizarCidade(novaCidade: Cidade) {
    setCidadeSelecionada(novaCidade);
  }

  return (
    <>
      <Header onCidadeEncontrada={atualizarCidade} />
      <Card cidade={cidadeSelecionada} />
      <div className="w-full max-w-[650px] mx-auto mt-6 p-4 rounded-xl border border-[#b5e5ed] bg-[#d5f0f5] text-center shadow-sm">
        <h2 className="text-xl font-bold text-gray-800">
          Previsão Próximos 5 Dias
        </h2>
        <div className="grid grid-cols-5 gap-2 mt-3">
          <Aside
            icone="☀️"
            temp="31°C min / 37°C máx"
            clima="Chuvoso"
            data="Sexta-Feira, 05"
          />
          <Aside
            icone="🌧️"
            temp="31°C min / 37°C máx"
            clima="Chuvoso"
            data="Sabado, 06"
          />
          <Aside
            icone="🌥️"
            temp="31°C min / 37°C máx"
            clima="Chuvoso"
            data="Domingo, 07"
          />
          <Aside
            icone="❄️"
            temp="31°C min / 37°C máx"
            clima="Chuvoso"
            data="Segunda-Feira, 08"
          />
          <Aside
            icone="🌩️"
            temp="31°C min / 37°C máx"
            clima="Chuvoso"
            data="Terça-Feira, 09"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
