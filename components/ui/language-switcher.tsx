"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={language === "en" ? "bg-pink-500 hover:bg-pink-600" : "hover:bg-pink-50"}
      >
        EN
      </Button>
      <Button
        variant={language === "fr" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("fr")}
        className={language === "fr" ? "bg-pink-500 hover:bg-pink-600" : "hover:bg-pink-50"}
      >
        FR
      </Button>
    </div>
  )
}
