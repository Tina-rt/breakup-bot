"use client"

import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Zap, Smile, ArrowRight, Star } from "lucide-react"

export default function LandingPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold text-gray-800">BreakupBot</span>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href="/generator">
              <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 bg-transparent">
                {t("nav.tryGenerator")}
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">{t("hero.title")}</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">{t("hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generator">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                {t("hero.generateNow")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg bg-transparent"
            >
              {t("hero.seeExamples")}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("features.title")}</h2>
          <p className="text-xl text-gray-600">{t("features.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("features.instant.title")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("features.instant.description")}</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smile className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("features.funny.title")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("features.funny.description")}</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-indigo-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("features.variety.title")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("features.variety.description")}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-xl mb-8 opacity-90">{t("cta.subtitle")}</p>
          <Link href="/generator">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              {t("cta.button")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>&copy; 2024 BreakupBot. {t("footer.text")}</p>
      </footer>
    </div>
  )
}
