"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}



const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

const translations : Record<string, Record<string, string>> = {
  en: {
    // Navigation
    "nav.tryGenerator": "Try Generator",
    "nav.home": "Home",

    // Landing Page
    "hero.title": "Need a Creative Breakup Excuse?",
    "hero.subtitle":
      "Generate hilariously absurd and creative breakup excuses that are so ridiculous, they might just work! Perfect for awkward situations or just for laughs.",
    "hero.generateNow": "Generate Excuse Now",
    "hero.seeExamples": "See Examples",

    // Features
    "features.title": "Why Choose BreakupBot?",
    "features.subtitle": "The most creative excuse generator on the internet",
    "features.instant.title": "Instant Generation",
    "features.instant.description":
      "Get creative breakup excuses in seconds. No more awkward silences or boring explanations.",
    "features.funny.title": "Hilariously Absurd",
    "features.funny.description":
      "Our AI generates the most ridiculous and funny excuses that will leave everyone laughing.",
    "features.variety.title": "Endless Variety",
    "features.variety.description": "Thousands of unique combinations ensure you'll never get the same excuse twice.",

    // CTA
    "cta.title": "Ready to Break Up Creatively?",
    "cta.subtitle": "Join thousands of users who've discovered the art of the perfect excuse",
    "cta.button": "Start Generating Excuses",

    // Footer
    "footer.text": "Made with ❤️ for awkward situations.",

    // Generator Page
    "generator.title": "Excuse Generator",
    "generator.subtitle": "Click the button below to generate your perfectly ridiculous breakup excuse!",
    "generator.cardTitle": "Your Breakup Excuse",
    "generator.placeholder": "Click the button below to generate your first excuse!",
    "generator.copy": "Copy Excuse",
    "generator.copied": "Copied!",
    "generator.newExcuse": "New Excuse",
    "generator.generating": "Generating...",
    "generator.generate": "Generate Excuse",

    // Pro Tips
    "tips.title": "💡 Pro Tips",
    "tips.confidence": "• Deliver with complete confidence for maximum effect",
    "tips.absurd": "• The more absurd, the more memorable",
    "tips.practice": "• Practice your poker face beforehand",
    "tips.entertainment": "• Remember: these are for entertainment purposes only!",
  },
  fr: {
    // Navigation
    "nav.tryGenerator": "Essayer le Générateur",
    "nav.home": "Accueil",

    // Landing Page
    "hero.title": "Besoin d'une Excuse de Rupture Créative?",
    "hero.subtitle":
      "Générez des excuses de rupture hilarantes et créatives si ridicules qu'elles pourraient marcher! Parfait pour les situations gênantes ou juste pour rire.",
    "hero.generateNow": "Générer une Excuse Maintenant",
    "hero.seeExamples": "Voir les Exemples",

    // Features
    "features.title": "Pourquoi Choisir BreakupBot?",
    "features.subtitle": "Le générateur d'excuses le plus créatif d'internet",
    "features.instant.title": "Génération Instantanée",
    "features.instant.description":
      "Obtenez des excuses créatives en quelques secondes. Fini les silences gênants ou les explications ennuyeuses.",
    "features.funny.title": "Hilarant et Absurde",
    "features.funny.description":
      "Notre IA génère les excuses les plus ridicules et drôles qui feront rire tout le monde.",
    "features.variety.title": "Variété Infinie",
    "features.variety.description":
      "Des milliers de combinaisons uniques garantissent que vous n'aurez jamais deux fois la même excuse.",

    // CTA
    "cta.title": "Prêt à Rompre Créativement?",
    "cta.subtitle": "Rejoignez des milliers d'utilisateurs qui ont découvert l'art de l'excuse parfaite",
    "cta.button": "Commencer à Générer des Excuses",

    // Footer
    "footer.text": "Fait avec ❤️ pour les situations gênantes.",

    // Generator Page
    "generator.title": "Générateur d'Excuses",
    "generator.subtitle":
      "Cliquez sur le bouton ci-dessous pour générer votre excuse de rupture parfaitement ridicule!",
    "generator.cardTitle": "Votre Excuse de Rupture",
    "generator.placeholder": "Cliquez sur le bouton ci-dessous pour générer votre première excuse!",
    "generator.copy": "Copier l'Excuse",
    "generator.copied": "Copié!",
    "generator.newExcuse": "Nouvelle Excuse",
    "generator.generating": "Génération...",
    "generator.generate": "Générer une Excuse",

    // Pro Tips
    "tips.title": "💡 Conseils de Pro",
    "tips.confidence": "• Livrez avec une confiance totale pour un effet maximum",
    "tips.absurd": "• Plus c'est absurde, plus c'est mémorable",
    "tips.practice": "• Entraînez votre poker face à l'avance",
    "tips.entertainment": "• Rappel: c'est uniquement à des fins de divertissement!",
  },
}