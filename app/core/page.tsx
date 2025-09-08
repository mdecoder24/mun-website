"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Sparkles, Users, Star, ArrowLeft, Crown, Award, Target } from "lucide-react"
import Link from "next/link"

export default function CorePage() {
  const secretariatMembers = [
    { name: "Khaja Moizudiin", role: "Secretary General", image: "/Khaja.JPG" },
    { name: "Mahitha Reddy", role: "Deputy Secretary General", image: "/Mahitha.jpg" },
  { name: "Mohammed Abdul Rahaman", role: "Joint Director General", image: "/Rahaman.jpg" },
  { name: "Sai Haneesh", role: "Joint Director General", image: "/Haneesh.jpg" },
  { name: "Siddharth Naidu", role: "Charge D'Affairs", image: "/Sid.jpg" },
  { name: "Praneeth Pothnak", role: "USG Finance", image: "/P.jpg" },
  { name: "Amisha Patra", role: "USG Administration", image: "/Amisha.jpg" },
  { name: "Charishma Kandregula", role: "USG Logistics", image: "/Charishma.jpeg" },
  { name: "Shreya Dasari", role: "OC Head", image: "/Shreya.jpg" },
  { name: "Adit Kailash", role: "OC Head", image: "/Adit.jpg" },
  ]

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
              <Link
                href="/about"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                About Us
              </Link>
              <Link href="/core" className="text-accent font-medium">
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
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Crown className="h-20 w-20 text-accent animate-bounce" />
                <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>

            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
                Secretariat of
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-accent to-foreground bg-clip-text text-transparent animate-pulse">
                MLRIT MUN 2025
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              Meet the dedicated leadership team driving excellence in diplomatic simulation and international
              cooperation
            </p>
          </div>
        </div>
      </section>

      {/* Secretariat Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secretariatMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-700 hover:scale-105 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-sm border-border/30 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Star className="h-6 w-6 text-accent animate-pulse" />
                </div>

                <CardHeader className="relative z-10 pb-4">
                  <div className="bg-gradient-to-br from-accent/20 via-background/50 to-accent/10 rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role}`}
                      className="w-auto h-auto max-w-full max-h-full group-hover:scale-110 transition-transform duration-700"
                      style={{ display: 'block' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
                  </div>
                  <CardTitle className="font-playfair text-xl text-accent group-hover:text-accent/90 transition-colors text-center">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-center font-medium text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {member.role}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 text-center">
                  <div className="flex justify-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-accent/30 rounded-full group-hover:bg-accent/60 transition-colors duration-300"
                        style={{ animationDelay: `${i * 100}ms` }}
                      ></div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                    MLRIT MUN 2025 Secretariat Member
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mb-6">
              Leadership Excellence
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">The values that drive our secretariat team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <Users className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl text-accent">Collaborative Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our secretariat works as a unified team, bringing diverse expertise together to create an exceptional
                  MUN experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <Award className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl text-accent">Excellence Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Every member of our core team is committed to delivering the highest standards of diplomatic
                  simulation and event management.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <Target className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl text-accent">Vision Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  With clear goals and strategic thinking, our leadership ensures every aspect of MUN 2025 contributes
                  to meaningful learning.
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
              Experience Excellence
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join MLRIT MUN 2025 and work alongside our dedicated secretariat team for an unforgettable diplomatic
            experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground text-xl px-12 py-4 shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 font-bold"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfaAzAT9FqAVt8aGVJqQ9Ak2m7g7yP-OybQ45dMMLnk_BCHmA/viewform?usp=send_form", "_blank") }
            >
              Register as Delegate
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
                <img src="/mun-logo.png" alt="MLRIT MUN Logo" className="h-10 w-10 object-contain" />
                <div>
                  <span className="font-playfair font-bold text-2xl bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
                    MLRIT MUN 2025
                  </span>
                  <p className="text-xs text-muted-foreground font-medium">Diplomatic Excellence</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Led by our exceptional secretariat team - Building tomorrow's global leaders through diplomatic
                excellence.
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
              &copy; 2025 MLRIT Model United Nations Conference. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
