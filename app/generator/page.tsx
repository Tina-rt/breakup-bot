"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, RefreshCw, Copy, Home } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { excuses } from "@/lib/excuses"

export default function GeneratorPage() {
  const { t, language } = useLanguage()
  const [currentExcuse, setCurrentExcuse] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const generateExcuse = () => {
    setIsGenerating(true)
    setTimeout(() => {
      const languageExcuses = excuses[language]
      const randomExcuse = languageExcuses[Math.floor(Math.random() * languageExcuses.length)]
      setCurrentExcuse(randomExcuse)
      setIsGenerating(false)
    }, 800)
  }

  const copyToClipboard = async () => {
    if (currentExcuse) {
      await navigator.clipboard.writeText(currentExcuse)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold text-gray-800">BreakupBot</span>
          </Link>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href="/">
              <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 bg-transparent">
                <Home className="mr-2 h-4 w-4" />
                {t("nav.home")}
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Generator Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">{t("generator.title")}</h1>
          <p className="text-xl text-gray-600 mb-12">{t("generator.subtitle")}</p>

          <Card className="border-0 shadow-2xl max-w-2xl mx-auto">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">{t("generator.cardTitle")}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {currentExcuse ? (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 min-h-[120px] flex items-center justify-center">
                    <p className="text-lg text-gray-800 leading-relaxed italic">&quot;{currentExcuse}&quot;</p>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      className="border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      {copied ? t("generator.copied") : t("generator.copy")}
                    </Button>
                    <Button
                      onClick={generateExcuse}
                      disabled={isGenerating}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                    >
                      <RefreshCw className={`mr-2 h-4 w-4 ${isGenerating ? "animate-spin" : ""}`} />
                      {isGenerating ? t("generator.generating") : t("generator.newExcuse")}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-12 min-h-[120px] flex items-center justify-center">
                    <p className="text-gray-500 text-lg">{t("generator.placeholder")}</p>
                  </div>
                  <Button
                    onClick={generateExcuse}
                    disabled={isGenerating}
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 text-lg"
                  >
                    <RefreshCw className={`mr-2 h-5 w-5 ${isGenerating ? "animate-spin" : ""}`} />
                    {isGenerating ? t("generator.generating") : t("generator.generate")}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tips Section */}
          <div className="mt-16 max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("tips.title")}</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>{t("tips.confidence")}</li>
                  <li>{t("tips.absurd")}</li>
                  <li>{t("tips.practice")}</li>
                  <li>{t("tips.entertainment")}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
