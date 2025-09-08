"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Sparkles, ArrowLeft, X, FileText, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CommitteesPage() {
  const [showSourcesModal, setShowSourcesModal] = useState(false)
  const [showEBModal, setShowEBModal] = useState(false)

  const committees = [
    {
      name: "AIPPM",
      fullName: "All India Political Parties Meet",
      agenda: "Placards down for now; announcements in the next moderated caucus.",
      description:
        "Engage in high-level political discourse addressing India's democratic challenges, electoral reforms, and governance issues. Delegates will represent various political parties and work towards consensus on critical national matters.",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aippm-RFoGqARrFsSeumgCxLjb83K9wNUKXU.png",
    },
    {
      name: "UNCSW",
      fullName: "United Nations Commission on the Status of Women",
      agenda: "Placards down for now; announcements in the next moderated caucus.",
      description:
        "Address gender equality challenges in the modern world, focusing on women's economic empowerment, digital inclusion, and breaking barriers in technology and entrepreneurship sectors.",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uncsw-7yRl0ZQyrTDecHQUVzgAquh8G6HIeY.png",
    },
    {
      name: "UNODC",
      fullName: "United Nations Office on Drugs and Crime",
      agenda: "Placards down for now; announcements in the next moderated caucus",
      description:
        "Tackle the growing threats of organized crime, drug trafficking, and cybercrime. Develop comprehensive strategies for international cooperation in law enforcement and crime prevention.",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unodc-XIAzAv1f7C4Dni6HytWWjh4Wxn2UZu.png",
    },
    {
      name: "IP",
      fullName: "International Press",
      agenda: "Media Ethics and Press Freedom in the Digital Era",
      description:
        "Experience journalism from the frontlines of diplomacy. Cover committee proceedings, conduct interviews, and report on the conference while addressing challenges of media ethics and press freedom.",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ip-H8Zy0XHG9PHcU4CRGWNomSiA8XK8zf.png",
    },
    {
      name: "UNHRC",
      fullName: "United Nations Human Rights Council",
      agenda: "Placards down for now; announcements in the next moderated caucus.",
      description:
        "Address human rights violations in conflict areas and develop frameworks for protecting civilians, ensuring accountability, and supporting post-conflict reconstruction and reconciliation.",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unhrc-byLatfzVCMduZlfSvhZTUMCcBAVldB.png",
    },
    {
      name: "DISEC",
      fullName: "Disarmament and International Security Committee",
      agenda: "Placards down for now; announcements in the next moderated caucus.",
      description:
        "Focus on global disarmament efforts, nuclear non-proliferation, and emerging security challenges including space militarization and cyber warfare threats to international stability.",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disec-SZO3ahXNrA9DkZbUSp9j6OOOGFpPsH.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Sources Modal */}
      {showSourcesModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm border-border/30 animate-in fade-in-0 zoom-in-95 duration-300">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-accent">Committee Sources</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setShowSourcesModal(false)} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="text-center py-8">
              <FileText className="h-16 w-16 text-accent mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-accent mb-2">To be revealed</h3>
              <p className="text-muted-foreground">
                Committee sources and background guides will be shared closer to the conference date.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* EB Modal */}
      {showEBModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm border-border/30 animate-in fade-in-0 zoom-in-95 duration-300">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-accent">Executive Board</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setShowEBModal(false)} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="text-center py-8">
              <Users className="h-16 w-16 text-accent mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-accent mb-2">To be revealed</h3>
              <p className="text-muted-foreground">
                Executive Board members and committee chairs will be announced soon.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Navigation */}
      <nav className="border-b border-border/20 bg-background/80 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <a href="/" className="relative group" aria-label="Go to Home">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mun-5nOqcPQkC02w840MrhoBlvdSd1brWk.png"
                  alt="MLRIT MUN Logo"
                  className="h-12 w-12 animate-pulse group-hover:scale-105 transition-transform"
                />
                <Sparkles className="h-4 w-4 text-accent/60 absolute -top-1 -right-1 animate-bounce" />
              </a>
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
                href="/sponsor"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                Sponsor Us
              </Link>
              <Link href="/committees" className="text-accent font-medium">
                Committees
              </Link>
              <Link
                href="/core"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                The Core
              </Link>
            </div>
            <Button
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 py-2 font-semibold"
              onClick={() => window.open("https://forms.gle/jv1ffS59ZWnWPUzk8", "_blank")}
            >
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
            <Link href="/" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
                Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-accent to-foreground bg-clip-text text-transparent animate-pulse">
                Committees
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Select the committee that aligns with your interests and embark on a transformative diplomatic journey at
              MLRIT MUN 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-700 hover:scale-105 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-sm border-border/30 overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <CardHeader className="relative z-10 pb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={committee.logo || "/placeholder.svg"}
                        alt={`${committee.name} Logo`}
                        className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-playfair text-2xl text-accent group-hover:text-accent/90 transition-colors mb-1">
                        {committee.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-medium mb-3">{committee.fullName}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-4 border border-accent/20">
                    <h4 className="font-semibold text-accent mb-2">Committee Agenda:</h4>
                    <p className="text-muted-foreground leading-relaxed font-medium">{committee.agenda}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">
                    {committee.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-border/30">
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowSourcesModal(true)}
                        className="bg-background/50 backdrop-blur-sm border-accent/30 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 group-hover:scale-105"
                      >
                        Sources
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowEBModal(true)}
                        className="bg-background/50 backdrop-blur-sm border-accent/30 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 group-hover:scale-105"
                      >
                        EB
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-accent/30 rounded-full group-hover:bg-accent/60 transition-colors duration-300"
                          style={{ animationDelay: `${i * 100}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Benefits */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mb-6">
              Why Join Our Committees?
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Each committee offers unique learning opportunities and skill development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <Users className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl text-accent">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Learn from experienced chairs and advisors who provide mentorship throughout the conference
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <Globe className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl text-accent">Global Perspective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Gain insights into international relations and develop a nuanced understanding of global challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <FileText className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl text-accent">Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Enhance your public speaking, negotiation, and critical thinking skills through immersive diplomatic
                  simulation.
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
              Choose Your Committee
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Select the committee that aligns with your interests and embark on a transformative diplomatic journey at
            MLRIT MUN 2025.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground text-xl px-12 py-4 shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 font-bold"
              onClick={() => window.open("https://forms.gle/jv1ffS59ZWnWPUzk8", "_blank")}
            >
              Register for Committees
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
                  <span className="font-playfair font-bold text-2xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    MLRIT MUN 2025
                  </span>
                  <p className="text-xs text-muted-foreground font-medium">Diplomatic Excellence</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Six exceptional committees offering diverse diplomatic challenges and learning opportunities.
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
                <li className="font-medium">6303916919</li>
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
