export const lang = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today?",
  },
  hindi: {
    search: "खोजें",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  spanish: {
    search: "Buscar",
    gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
  },
} as const;

export type LangKey = keyof typeof lang;
