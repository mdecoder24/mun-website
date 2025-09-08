"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Sparkles, BookOpen, Users, Target, Award, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/20 bg-background/80 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Link href="/" className="relative group" aria-label="Go to Home">
                <img src="/mun-logo.png" alt="MLRIT MUN Logo" className="h-12 w-12 object-contain animate-pulse group-hover:scale-105 transition-transform" />
                <Sparkles className="h-4 w-4 text-accent/60 absolute -top-1 -right-1 animate-bounce" />
              </Link>
              <div>
                <span className="font-playfair font-bold text-2xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  MLRIT MUN 2025
                </span>
                <p className="text-xs text-muted-foreground font-medium">Diplomatic Excellence</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                Home
              </Link>
              <Link href="/about" className="text-accent font-medium">
                About Us
              </Link>
              <Link
                href="/core"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                The Core
              </Link>
              <Link
                href="/committees"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                Committees
              </Link>
              <Link
                href="/sponsor"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                Sponsor Us
              </Link>
            </div>
            <Button className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 py-2 font-semibold" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfaAzAT9FqAVt8aGVJqQ9Ak2m7g7yP-OybQ45dMMLnk_BCHmA/viewform?usp=send_form", "_blank") }>
              Register Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-accent to-foreground bg-clip-text text-transparent animate-pulse">
                Club Literati
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              The organizer of MLRIT MUN 2025 - Where ideas thrive, debates flourish, and minds connect
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <BookOpen className="h-12 w-12 text-accent group-hover:rotate-12 transition-transform duration-500" />
                    <div>
                      <CardTitle className="font-playfair text-2xl text-accent">Our Story</CardTitle>
                      <CardDescription className="text-lg">Literary Excellence Since Day One</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Welcome to the world of Club Literati, the organizer of MLRIT MUN 2025! A space where ideas thrive,
                    debates flourish and minds connect - Club Literati is where it's at!
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Being MLRIT's very own haven for literary enthusiasts, our club has consistently been at the
                    forefront of organizing dynamic activities that have shaped our students into confident speakers and
                    critical thinkers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We, as a club, ensure that every event we host is not only packed with engaging and
                    thought-provoking content, but also infused with fun and creativity.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Target className="h-12 w-12 text-accent group-hover:rotate-12 transition-transform duration-500" />
                    <div>
                      <CardTitle className="font-playfair text-2xl text-accent">Our Mission</CardTitle>
                      <CardDescription className="text-lg">Communicate, Compete, Conquer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-xl p-6 border border-accent/30">
                    <h3 className="font-playfair text-2xl font-bold text-accent mb-4">
                      "Communicate, Compete, Conquer"
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Our club's guiding motto is deeply integrated into every event we organize.
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We believe in the power of words to shape perspectives, and the importance of dialogue in solving
                    today's most pressing issues, all while building leaders for a better tomorrow.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl p-4 shadow-2xl hover:shadow-accent/10 transition-all duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 via-background/50 to-accent/10 rounded-xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="/Lit.png"
                    alt="Club Literati members engaged in literary discussion"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mb-6">
              Our Values
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <Users className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl text-accent">Communicate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We foster open dialogue and meaningful conversations that bridge diverse perspectives and create
                  understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <Award className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl text-accent">Compete</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We embrace healthy competition that challenges minds, sharpens skills, and drives excellence in all
                  endeavors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <Target className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl text-accent">Conquer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We empower individuals to overcome challenges, achieve their goals, and become leaders of tomorrow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Join Our Legacy
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Be part of MLRIT MUN 2025 and experience the transformative power of diplomatic discourse and literary
            excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground text-xl px-12 py-4 shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 font-bold"
              onClick={() => window.open("https://forms.gle/jv1ffS59ZWnWPUzk8", "_blank")}
            >
              Register for MUN 2025
            </Button>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-4 bg-background/50 backdrop-blur-sm border-accent/30 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 hover:scale-105 font-semibold"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-card via-card/95 to-card/90 border-t border-border/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src="/mun-logo.png" alt="MLRIT MUN Logo" className="h-8 w-8" />
                <div>
                  <span className="font-playfair font-bold text-2xl bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
                    MLRIT MUN 2025
                  </span>
                  <p className="text-xs text-muted-foreground font-medium">Diplomatic Excellence</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Organized by Club Literati - Fostering diplomacy and international cooperation through Model United
                Nations.
              </p>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-lg mb-4 text-accent">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/core"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    The Core
                  </Link>
                </li>
                <li>
                  <Link
                    href="/committees"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    Committees
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-lg mb-4 text-accent">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="font-medium">mlritmun@mlrit.ac.in</li>
                <li className="font-medium">+91 6303916919</li>
                <li className="font-medium">MLRIT Campus</li>
                <li className="font-medium">Hyderabad, Telangana</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/30 mt-12 pt-8 text-center">
            <p className="text-muted-foreground font-medium">
              &copy; 2025 MLRIT Model United Nations Conference. Organized by Club Literati. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
