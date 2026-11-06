import type { PrevisaoDia } from "../types";
import { obterCondicaoClimatica } from "../weatherUtils";

const Aside = ({
  data,
  temperatura_max,
  temperatura_min,
  cod_climatico,
}: PrevisaoDia) => {
  const condicaoClima = obterCondicaoClimatica(cod_climatico);

  const [ano, mes, dia] = data.split("-").map(Number);

  const dataFormatada = new Date(ano, mes - 1, dia).toLocaleDateString(
    "pt-BR",
    {
      weekday: "long",
      day: "2-digit",
    },
  );

  return (
    <div className="flex justify-center gap-2 mt-6">
      <div className="flex-1 min-w-0 h-full rounded-xl bg-[#edf9fc] border border-[#c6e8f0] p-3 shadow-sm flex flex-col items-center">
        <p className="text-[10.5px] font-medium text-[#426477] min-h-[32px] flex items-center justify-center text-center">
          {dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1)}
        </p>

        <p className="text-2xl mt-2 h-8 flex items-center justify-center">
          {condicaoClima.emoji}
        </p>

        <p className="text-xs text-[#426477] mt-2 h-10 flex items-center justify-center text-center">
          {condicaoClima.clima}
        </p>

        <p className="text-xs font-bold text-[#183448] mt-1 min-h-[36px] flex items-center justify-center text-center">
          {temperatura_min != null && temperatura_max != null
            ? `${temperatura_min}°C min / ${temperatura_max}°C máx`
            : "Carregando..."}
        </p>
      </div>
    </div>
  );
};

export default Aside;
