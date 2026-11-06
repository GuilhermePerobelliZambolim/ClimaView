import type { CardProps } from "../types";

const Card = ({ cidade, dados, condicao }: CardProps) => {
  const agora = new Date();

  const data = agora.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "short",
  });

  const hora = agora.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="w-full max-w-[650px] mx-auto p-4 rounded-xl border border-[#9dd9e8] bg-[#d5f0f5] text-center shadow-lg">
      <h2 className="text-5xl font-bold text-[#183448]">
        {cidade && cidade.name}
      </h2>

      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="text-4xl">{condicao?.emoji}</span>
        <p className="text-3xl font-bold text-[#183448]">
          {dados?.current?.temperature_2m != null
            ? `${dados.current.temperature_2m}°C`
            : "Aguardando dados meteorológicos..."}
        </p>
      </div>

      <p className="text-lg text-[#426477] mt-3">
        {condicao?.clima ?? "Aguardando informações..."}
      </p>

      <div className="flex justify-around items-center mt-8 gap-0.5 text-[13px] text-[#426477]">
        <p>
          Sensação térmica:{" "}
          {dados?.current?.apparent_temperature != null
            ? `${dados.current.apparent_temperature}°C`
            : "..."}
        </p>
        <p>
          | Umidade:{" "}
          {dados?.current?.relative_humidity_2m != null
            ? `${dados.current.relative_humidity_2m}%`
            : "..."}
        </p>
        <p>
          | Pressão:{" "}
          {dados?.current?.pressure_msl != null
            ? `${dados.current.pressure_msl} hPa`
            : "..."}
        </p>
        <p className="text-base font-bold text-[#183448]">
          {" "}
          / {data} - {hora}
        </p>
      </div>
    </div>
  );
};

export default Card;
