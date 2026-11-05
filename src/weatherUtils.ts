export type CondicaoClimatica = {
    clima: string;
    emoji: string;
};

export function obterCondicaoClimatica(codigo: number): CondicaoClimatica {
  switch (codigo) {
    case 0:
      return {
        clima: "Céu limpo",
        emoji: "☀️",
      };

    case 1:
      return {
        clima: "Predominantemente limpo",
        emoji: "🌤️",
      };

    case 2:
      return {
        clima: "Parcialmente nublado",
        emoji: "⛅",
      };

    case 3:
      return {
        clima: "Céu encoberto",
        emoji: "☁️",
      };

    case 45:
      return {
        clima: "Nevoeiro",
        emoji: "🌫️",
      };

    case 48:
      return {
        clima: "Nevoeiro com geada",
        emoji: "🌫️",
      };

    case 51:
      return {
        clima: "Chuvisco leve",
        emoji: "🌦️",
      };

    case 53:
      return {
        clima: "Chuvisco moderado",
        emoji: "🌦️",
      };

    case 55:
      return {
        clima: "Chuvisco intenso",
        emoji: "🌧️",
      };

    case 56:
      return {
        clima: "Chuvisco congelante leve",
        emoji: "🌧️",
      };

    case 57:
      return {
        clima: "Chuvisco congelante intenso",
        emoji: "🌧️",
      };

    case 61:
      return {
        clima: "Chuva fraca",
        emoji: "🌧️",
      };

    case 63:
      return {
        clima: "Chuva moderada",
        emoji: "🌧️",
      };

    case 65:
      return {
        clima: "Chuva forte",
        emoji: "🌧️",
      };

    case 66:
      return {
        clima: "Chuva congelante leve",
        emoji: "🌧️",
      };

    case 67:
      return {
        clima: "Chuva congelante forte",
        emoji: "🌧️",
      };

    case 71:
      return {
        clima: "Neve fraca",
        emoji: "🌨️",
      };

    case 73:
      return {
        clima: "Neve moderada",
        emoji: "🌨️",
      };

    case 75:
      return {
        clima: "Neve forte",
        emoji: "❄️",
      };

    case 77:
      return {
        clima: "Grãos de neve",
        emoji: "❄️",
      };

    case 80:
      return {
        clima: "Pancadas de chuva fracas",
        emoji: "🌦️",
      };

    case 81:
      return {
        clima: "Pancadas de chuva moderadas",
        emoji: "🌧️",
      };

    case 82:
      return {
        clima: "Pancadas de chuva violentas",
        emoji: "⛈️",
      };

    case 85:
      return {
        clima: "Pancadas de neve fracas",
        emoji: "🌨️",
      };

    case 86:
      return {
        clima: "Pancadas de neve fortes",
        emoji: "❄️",
      };

    case 95:
      return {
        clima: "Tempestade com trovoadas",
        emoji: "⛈️",
      };

    case 96:
      return {
        clima: "Tempestade com granizo leve",
        emoji: "⛈️",
      };

    case 99:
      return {
        clima: "Tempestade com granizo forte",
        emoji: "⛈️",
      };

    default:
      return {
        clima: "Condição desconhecida",
        emoji: "❓",
      };
  }
}