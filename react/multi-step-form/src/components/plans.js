import iconAdvanced from "/src/assets/icon-advanced.svg";
import iconArcade from "/src/assets/icon-arcade.svg";
import iconPro from "/src/assets/icon-pro.svg";

export const plans = [
  {
    id: "arcade",
    name: "Arcade",
    icon: iconArcade,
    monthlyPrice: 10,
    yearlyPrice: 90,
    numberOfFreeMonths: 2,
  },
  {
    id: "advanced",
    name: "Advanced",
    icon: iconAdvanced,
    monthlyPrice: 12,
    yearlyPrice: 120,
    numberOfFreeMonths: 2,
  },
  {
    id: "pro",
    name: "Pro",
    icon: iconPro,
    monthlyPrice: 14,
    yearlyPrice: 150,
    numberOfFreeMonths: 2,
  },
];