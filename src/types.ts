import type { CondicaoClimatica } from "./weatherUtils";

export type Cidade = {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  admin1?: string;
};

export type CardProps = {
  cidade: Cidade | null;
  dados: DadosMeteorologicos | null;
  condicao: CondicaoClimatica | null;
};

export type DadosMeteorologicos = {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
    pressure_msl: number;
  };
  daily: {
    time: string[];
    temperature_2m_min: number[];
    temperature_2m_max: number[];
    weather_code: number[];
  };
};

export type AsideProps = {
  daily: DadosMeteorologicos["daily"];
};

export type PrevisaoDia = {
  data: string;
  temperatura_min: number;
  temperatura_max: number;
  cod_climatico: number;
};
