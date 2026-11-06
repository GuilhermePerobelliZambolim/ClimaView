import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import { obterCondicaoClimatica } from "./weatherUtils";
import type { CondicaoClimatica } from "./weatherUtils";
import type { Cidade, DadosMeteorologicos } from "./types";

function App() {
  const [cidadeSelecionada, setCidadeSelecionada] = useState<Cidade | null>(
    null,
  ); //Cidade pesquisada

  const [condicao, setCondicao] = useState<CondicaoClimatica | null>(null); //descrição e o emoji do clima

  const [dadosMeteorologicos, setDadosMeteorologicos] =
    useState<DadosMeteorologicos | null>(null); //dados recebidos da API, ex: current.temperature_2m..

  const proximosDias = dadosMeteorologicos?.daily.time.slice(1, 6);

  async function atualizarCidade(novaCidade: Cidade) {
    //o usuário pesquisa uma cidade e o Header chama a função que recebeu por props
    setCidadeSelecionada(novaCidade); //guardamos a cidade

    try {
      const parametros = new URLSearchParams({
        //parâmetros que serão enviados à Open-Meteo
        latitude: String(novaCidade.latitude),
        longitude: String(novaCidade.longitude),
        timezone: "auto",
        forecast_days: "6",
        current:
          "temperature_2m,apparent_temperature,relative_humidity_2m,pressure_msl,weather_code",
        daily: "temperature_2m_min,temperature_2m_max,weather_code",
      });

      const enderecoBase = "https://api.open-meteo.com/v1/forecast"; //fazemos a requisição
      const url = `${enderecoBase}?${parametros.toString()}`;
      const response = await fetch(url);
      if (!response.ok) {
        //verificamos se deu tudo certo
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const dados = await response.json(); //transformamos a resposta em dados JavaScript
      setDadosMeteorologicos(dados); // Guardamos os dados meteorológicos
      console.log(dados);
      const novaCondicao = obterCondicaoClimatica(dados.current.weather_code); //A API retorna um código, ex: 2
      setCondicao(novaCondicao); //obterCondicaoClimatica interpreta esse número e devolve, ex: parcialmente dublado e o emoji do clima!
    } catch (erro) {
      console.log("Erro ao buscar informações meteorológicas:", erro);
    }
  }

  return (
    <>
      <Header onCidadeEncontrada={atualizarCidade} />
      <Card
        cidade={cidadeSelecionada}
        dados={dadosMeteorologicos}
        condicao={condicao}
      />
      <div className="w-full max-w-[650px] mx-auto mt-6 p-4 rounded-xl border border-[#b5e5ed] bg-[#d5f0f5] text-center shadow-sm">
        <h2 className="text-xl font-bold text-gray-800">
          Previsão Próximos 5 Dias
        </h2>
        <div className="grid grid-cols-5 gap-2 mt-3">
          {dadosMeteorologicos &&
            proximosDias?.map((data, index) => (
              <Aside
                key={data}
                data={data}
                temperatura_min={
                  dadosMeteorologicos?.daily.temperature_2m_min[index + 1]
                }
                temperatura_max={
                  dadosMeteorologicos?.daily.temperature_2m_max[index + 1]
                }
                cod_climatico={
                  dadosMeteorologicos?.daily.weather_code[index + 1]
                }
              />
            ))}
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
