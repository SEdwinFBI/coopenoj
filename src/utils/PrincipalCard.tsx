import { ReactNode } from "react";
import { SavingsTwoTone, VolunteerActivismTwoTone } from "@mui/icons-material";
import Ahorra from "../components/icons/Ahorra";
import { colors } from "./colors";

export interface principalCardProps  {
  title: string;
  description?: string;
  strongDescription?: string;
  navigate: string;
  icon: ReactNode;
  colorCard: string;
  fontColor: string;
};

export const principalCard: principalCardProps[] = [
  {
    title: "Asociate",
    description: "Asociate y descubre los ",
    strongDescription: "Beneficios",
    navigate: "services",
    icon: <VolunteerActivismTwoTone style={{ fontSize: 100 }} />,
    colorCard: colors.secondary,
    fontColor: "white",
  },
  {
    title: "Ahorra",
    description: "Ahorra hoy, disfruta ",
    strongDescription: "Mañana",
    navigate: "services",
    icon: <Ahorra />,
    colorCard: colors.primary,
    fontColor: "white",
  },
  {
    title: "Servicios",
    description:
      "Tu alidado para pagar tus servicios y cobrar tus remesas de manera facil y ",
    strongDescription: "Segura",
    navigate: "services",
    icon: <SavingsTwoTone style={{ fontSize: 100 }} />,
    colorCard: colors.secondary2,
    fontColor: "black",
  },
  
];
