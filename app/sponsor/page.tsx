"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Sparkles, Building, Users, Download, ArrowLeft, Star, Target, Award } from "lucide-react"
import Link from "next/link"

export default function SponsorPage() {
  const previousSponsors = [
    { name: "TechCorp Solutions", logo: "/abstract-tech-logo.png", tier: "Platinum" },
    { name: "Global Innovations", logo: "/innovation-company-logo.png", tier: "Gold" },
    { name: "Future Enterprises", logo: "/enterprise-company-logo.png", tier: "Gold" },
    { name: "Digital Dynamics", logo: "/digital-company-logo.png", tier: "Silver" },
    { name: "Smart Systems", logo: "/systems-company-logo.png", tier: "Silver" },
    { name: "NextGen Technologies", logo: "/generic-tech-logo.png", tier: "Silver" },
    { name: "Innovation Hub", logo: "/hub-company-logo.png", tier: "Bronze" },
    { name: "Creative Solutions", logo: "/creative-company-logo.png", tier: "Bronze" },
  ]

  const sponsorshipTiers = [
    {
      name: "Platinum Sponsor",
      amount: "$10,000+",
      benefits: [
        "Prime logo placement on all materials",
        "Opening ceremony speaking opportunity",
        "Dedicated booth space",
        "Social media recognition",
        "Networking dinner invitation",
      ],
      color: "bg-gradient-to-r from-gray-300 to-gray-100",
    },
    {
      name: "Gold Sponsor",
      amount: "$5,000+",
      benefits: [
        "Logo on conference materials",
        "Booth space in main hall",
        "Social media mentions",
        "Networking event access",
      ],
      color: "bg-gradient-to-r from-yellow-400 to-yellow-200",
    },
    {
      name: "Silver Sponsor",
      amount: "$2,500+",
      benefits: ["Logo on website and programs", "Social media recognition", "Conference materials inclusion"],
      color: "bg-gradient-to-r from-gray-400 to-gray-200",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/20 bg-background/80 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Globe className="h-10 w-10 text-accent animate-pulse" />
                <Sparkles className="h-4 w-4 text-accent/60 absolute -top-1 -right-1 animate-bounce" />
              </div>
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
              <Link href="/sponsor" className="text-accent font-medium">
                Sponsor Us
              </Link>
            </div>
            <Button className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 py-2 font-semibold">
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
                <Building className="h-20 w-20 text-accent animate-bounce" />
                <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>

            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
                Partner With
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-accent to-foreground bg-clip-text text-transparent animate-pulse">
                MLRIT MUN 2025
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              Join us in shaping the next generation of global leaders through strategic partnership and meaningful
              collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Previous Year Sponsors */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mb-6">
              Previous Year Sponsors
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed mb-8">
              Proud partners who supported MLRIT MUN 2024
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-3 font-semibold"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Sponsorship Brochure
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {previousSponsors.map((sponsor, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30 text-center"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader className="pb-4">
                  <div className="aspect-[3/2] bg-gradient-to-br from-accent/10 via-background/50 to-accent/5 rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <CardTitle className="font-playfair text-lg text-accent group-hover:text-accent/90 transition-colors">
                    {sponsor.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant="secondary"
                    className={`
                      ${sponsor.tier === "Platinum" ? "bg-gray-500/20 text-gray-300 border-gray-500/30" : ""}
                      ${sponsor.tier === "Gold" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" : ""}
                      ${sponsor.tier === "Silver" ? "bg-gray-400/20 text-gray-300 border-gray-400/30" : ""}
                      ${sponsor.tier === "Bronze" ? "bg-amber-600/20 text-amber-400 border-amber-600/30" : ""}
                      font-semibold
                    `}
                  >
                    {sponsor.tier} Sponsor
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mb-6">
              Sponsorship Opportunities
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Choose the partnership level that aligns with your organization's goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-700 hover:scale-105 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-sm border-border/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <CardHeader className="relative z-10 pb-6">
                  <div className="text-center mb-4">
                    <div
                      className={`inline-block px-6 py-2 rounded-full ${tier.color} text-gray-800 font-bold text-lg mb-4`}
                    >
                      {tier.name}
                    </div>
                    <CardTitle className="font-playfair text-3xl text-accent group-hover:text-accent/90 transition-colors">
                      {tier.amount}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground group-hover:text-foreground/90 transition-colors">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full mt-6 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground transition-all duration-300 hover:scale-105">
                    Choose {tier.name.split(" ")[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mb-6">
              Why Sponsor MLRIT MUN?
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              The benefits of partnering with us extend far beyond traditional sponsorship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <Users className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl text-accent">Talent Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with 300+ bright minds from 50+ institutions, identifying future leaders and potential
                  recruits.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <Target className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl text-accent">Brand Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Gain extensive exposure across digital platforms, conference materials, and networking events.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <Award className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl text-accent">Social Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Support educational excellence and contribute to developing tomorrow's diplomatic leaders.
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
              Ready to Partner?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our prestigious list of sponsors and help shape the future of diplomatic education at MLRIT MUN 2025.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground text-xl px-12 py-4 shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 font-bold"
            >
              <Download className="w-5 h-5 mr-2" />
              Get Sponsorship Package
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-12 py-4 bg-background/50 backdrop-blur-sm border-accent/30 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-card via-card/95 to-card/90 border-t border-border/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="h-8 w-8 text-accent" />
                <div>
                  <span className="font-playfair font-bold text-2xl bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
                    MLRIT MUN 2025
                  </span>
                  <p className="text-xs text-muted-foreground font-medium">Diplomatic Excellence</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Partner with us to support the next generation of global leaders and diplomatic innovators.
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
                <li className="font-medium">sponsors@mlritmun2025.org</li>
                <li className="font-medium">+91 (555) 123-4567</li>
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
