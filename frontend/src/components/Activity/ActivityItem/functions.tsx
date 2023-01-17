import { Smiley, SmileyMeh, SmileySad } from "phosphor-react";

export const changeCardWithPriority = (priority: string) => {
  switch (priority) {
    case "low":
      return {
        label: "Baixa",
        icon: <Smiley className="me-1 text-success" size={20} />,
        color: "success",
      };
    case "normal":
      return {
        label: "Normal",
        icon: <SmileyMeh className="me-1 text-dark" size={20} />,
        color: "dark",
      };
    case "high":
      return {
        label: "Alto",
        icon: <SmileySad className="me-1 text-warning" size={20} />,
        color: "warning",
      };
    default:
      return {
        label: "Não definido",
      };
  }
};
