import { useState } from "react";
import type { Cidade } from "../types";

type HeaderProps = {
  onCidadeEncontrada: (novaCidade: Cidade) => void;
};

const Header = ({ onCidadeEncontrada }: HeaderProps) => {
  const [cidade, setCidade] = useState("");
  const [cidadesEncontradas, setCidadesEncontradas] = useState<Cidade[]>([]);
  const [modalAberto, setModalAberto] = useState(false);

  async function buscarCidade() {
    if (!cidade.trim()) {
      alert("Digite uma cidade!");
      return;
    }

    try {
      const parametros = new URLSearchParams({
        name: cidade.trim(),
        count: "5",
        language: "pt",
      });

      const enderecoBase = `https://geocoding-api.open-meteo.com/v1/search`;
      const url = `${enderecoBase}?${parametros.toString()}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const dados = await response.json();

      if (dados.results.length === 0) {
        console.log("Nenhuma cidade encontrada!");
        return;
      }
      setCidadesEncontradas(dados.results);
      setModalAberto(true);
    } catch (erro) {
      console.log("Erro ao buscar cidade:", erro);
    }
  }

  return (
    <div className="max-w-[1000px] p-[20px] m-auto text-center">
      <h1 className="text-[3rem] font-bold m-[21px] text-white">
        ClimaView 🌤️
      </h1>

      <div className="flex justify-center mt-[30px]">
        <input
          className="w-[300px] text-sm bg-[#e6f5fa] text-[#183448] placeholder-[#668494] p-2 rounded-l-[50px] outline-none focus:ring-2 focus:ring-[#76c8eb]"
          type="text"
          placeholder="Busque por uma cidade..."
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              buscarCidade();
            }
          }}
        />

        <button
          className="w-[65px] bg-[#f09b1b] hover:bg-[#000000] hover:text-[#f09b1b] transition-colors p-2 rounded-r-[50px] cursor-pointer text-white"
          onClick={buscarCidade}
        >
          Buscar
        </button>
      </div>

      {modalAberto && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-[90%] max-w-[400px]">
            <h2 className="text-xl font-bold mb-4 text-[#183448]">
              Escolha uma cidade
            </h2>

            {cidadesEncontradas.map((cidade, index) => (
              <button
                key={`${cidade.name}-${index}`}
                className="block w-full p-3 mb-2 bg-[#e6f5fa] rounded-lg hover:bg-[#76c8eb] text-[#183448]"
                onClick={() => {
                  onCidadeEncontrada(cidade);
                  setModalAberto(false);
                }}
              >
                Cidade: {cidade.name} - País: {cidade.country} - Região ou Estado: {cidade.admin1}
              </button>
            ))}

            <button
              className="mt-3 bg-[#f09b1b] hover:bg-[#000000] hover:text-[#f09b1b] text-white p-2 rounded-lg w-full"
              onClick={() => setModalAberto(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
