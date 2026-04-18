import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const IntroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-8 md:py-12" />
  );
};

export default IntroSection;
