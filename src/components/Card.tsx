import type { CardProps } from "../types";

const Card = ({ cidade }: CardProps) => {
  return (
    <div className="w-full max-w-[650px] mx-auto p-4 rounded-xl border border-[#9dd9e8] bg-[#d5f0f5] text-center shadow-lg">
      <h2 className="text-5xl font-bold text-[#183448]">{cidade && cidade.name}</h2>

      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="text-4xl">🌥️</span>
        <p className="text-3xl font-bold text-[#183448]">32°C</p>
      </div>

      <p className="text-lg text-[#426477] mt-3">Nublado</p>

      <div className="flex justify-around items-center mt-8 text-[13px] text-[#426477]">
        <p>Sensação térmica: 37°C</p>
        <p>Umidade: 55%</p>
        <p>Pressão: 1007</p>
        <p className="text-base font-bold text-[#183448]"> / Quinta-Feira, 04 - Outubro</p>
      </div>
    </div>
  );
}

export default Card;

