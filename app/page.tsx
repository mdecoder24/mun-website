"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CalendarDays,
  MapPin,
  Users,
  Globe,
  Clock,
  Award,
  Star,
  Sparkles,
  Trophy,
  Play,
  Pause,
  Scroll,
  PenTool,
} from "lucide-react"
import { useState, useRef } from "react"

export default function MUNHomePage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause()
          setIsPlaying(false)
        } else {
          await videoRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.log("[v0] Video play/pause error handled:", error)
        // Reset state if there's an error
        setIsPlaying(videoRef.current ? !videoRef.current.paused : false)
      }
    }
  }

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
              <a
                href="#home"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                About Us
              </a>
              <a
                href="/core"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                The Core
              </a>
              <a
                href="/committees"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                Committees
              </a>
              <a
                href="/sponsor"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                Sponsor Us
              </a>
            </div>
            <Button className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 py-2 font-semibold">
              Register Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Badge className="mb-6 bg-gradient-to-r from-accent/20 to-accent/10 text-accent border-accent/30 px-6 py-2 text-lg font-semibold shadow-lg backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                October 24-26, 2025
              </Badge>
            </div>

            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
                MLRIT Model
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-accent to-foreground bg-clip-text text-transparent animate-pulse">
                United Nations 2025
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              Join delegates from around the world in fostering diplomacy, debate, and international cooperation.
              <span className="block mt-2 text-accent font-semibold">
                Experience the art of negotiation and global problem-solving.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground text-xl px-12 py-4 shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 font-bold"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Register as Delegate
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-4 bg-background/50 backdrop-blur-sm border-accent/30 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 hover:scale-105 font-semibold"
              >
                Learn More
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-accent mb-2">300+</div>
                <div className="text-muted-foreground font-medium">Global Delegates</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground font-medium">Institutions</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-accent mb-2">6</div>
                <div className="text-muted-foreground font-medium">Committees</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
        <div className="absolute top-10 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mb-6">
              Experience MLRIT MUN 2025
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Watch highlights from our previous conferences and see what awaits you at this year's diplomatic gathering
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl p-4 shadow-2xl hover:shadow-accent/10 transition-all duration-500">
              <div className="aspect-video bg-gradient-to-br from-accent/20 via-background/50 to-accent/10 rounded-xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  poster="/professional-mun-conference-delegates-in-formal-at.png"
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src="/placeholder.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={toggleVideo}
                    className="group/play bg-background/80 backdrop-blur-sm hover:bg-background/90 border border-border/30 hover:border-accent/50 rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-accent/20"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause className="h-12 w-12 text-accent group-hover/play:text-accent/80 transition-colors" />
                    ) : (
                      <Play className="h-12 w-12 text-accent group-hover/play:text-accent/80 transition-colors ml-1" />
                    )}
                  </button>
                </div>

                {/* Video overlay for better visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-accent mb-2">72 Hours</div>
              <div className="text-muted-foreground font-medium">Of Intensive Diplomacy</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-accent mb-2">Global Impact</div>
              <div className="text-muted-foreground font-medium">Real-World Solutions</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-accent mb-2">Networking</div>
              <div className="text-muted-foreground font-medium">Lifelong Connections</div>
            </div>
          </div>
        </div>
      </section>

      {/* Letters Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mb-6">
              Messages from Leadership
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Words of inspiration from our distinguished leadership team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Secretary General Letter */}
            <Card className="group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-700 hover:scale-105 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-sm border-border/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <Scroll className="h-12 w-12 text-accent group-hover:rotate-12 transition-transform duration-500" />
                    <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div>
                    <CardTitle className="font-playfair text-2xl text-accent group-hover:text-accent/90 transition-colors">
                      Secretary General
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-muted-foreground">
                      A Message of Welcome
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-500">
                    "Dear Distinguished Delegates,
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-500">
                    It is with immense pride and excitement that I welcome you to MLRIT Model United Nations 2025. This
                    conference represents more than just a simulation—it is a platform for tomorrow's leaders to engage
                    with today's most pressing global challenges.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-500">
                    Over the next three days, you will embody the spirit of diplomacy, negotiate complex resolutions,
                    and forge connections that will last a lifetime. Remember, every great change in history began with
                    passionate individuals willing to engage in meaningful dialogue.
                  </p>
                  <p className="text-accent font-semibold group-hover:text-accent/90 transition-colors duration-500">
                    Welcome to your diplomatic journey."
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground font-medium">- Secretary General, MLRIT MUN 2025</p>
                </div>
              </CardContent>
            </Card>

            {/* Director General Letter */}
            <Card className="group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-700 hover:scale-105 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-sm border-border/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <PenTool className="h-12 w-12 text-accent group-hover:rotate-12 transition-transform duration-500" />
                    <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div>
                    <CardTitle className="font-playfair text-2xl text-accent group-hover:text-accent/90 transition-colors">
                      Director General
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-muted-foreground">
                      Excellence in Diplomacy
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-500">
                    "Esteemed Participants,
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-500">
                    As Director General, I am honored to witness the convergence of brilliant minds from across
                    institutions at MLRIT MUN 2025. This conference embodies our commitment to fostering intellectual
                    discourse and diplomatic excellence.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-500">
                    Each committee has been carefully crafted to challenge your analytical skills, test your diplomatic
                    acumen, and inspire innovative solutions to global issues. Embrace the debates, learn from diverse
                    perspectives, and let your voices shape the future.
                  </p>
                  <p className="text-accent font-semibold group-hover:text-accent/90 transition-colors duration-500">
                    May your deliberations lead to meaningful resolutions."
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground font-medium">- Director General, MLRIT MUN 2025</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mb-6">
              Event Details
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Three days of intensive diplomatic simulation and international collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <CalendarDays className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl">When</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-accent mb-2">October 24-26, 2025</p>
                <p className="text-muted-foreground font-medium">Friday to Sunday</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <MapPin className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl">Where</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-accent mb-2">MLRIT Campus</p>
                <p className="text-muted-foreground font-medium">Marri Laxman Reddy Institute of Technology</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <Users className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="font-playfair text-2xl">Delegates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-accent mb-2">300+ Participants</p>
                <p className="text-muted-foreground font-medium">From 50+ institutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section id="schedule" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mb-6">
              Conference Schedule
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              A comprehensive three-day diplomatic experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl flex items-center gap-3 text-accent">
                  <Clock className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  Day 1 - Friday
                </CardTitle>
                <CardDescription className="text-lg">Opening & Committee Sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 hover:bg-accent/10 transition-colors">
                  <span className="text-muted-foreground font-medium">9:00 AM</span>
                  <span className="font-semibold">Registration & Welcome</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 hover:bg-accent/10 transition-colors">
                  <span className="text-muted-foreground font-medium">10:30 AM</span>
                  <span className="font-semibold">Opening Ceremony</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 hover:bg-accent/10 transition-colors">
                  <span className="text-muted-foreground font-medium">2:00 PM</span>
                  <span className="font-semibold">Committee Sessions Begin</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl flex items-center gap-3 text-accent">
                  <Clock className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  Day 2 - Saturday
                </CardTitle>
                <CardDescription className="text-lg">Intensive Debates & Negotiations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 hover:bg-accent/10 transition-colors">
                  <span className="text-muted-foreground font-medium">9:00 AM</span>
                  <span className="font-semibold">Committee Sessions</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 hover:bg-accent/10 transition-colors">
                  <span className="text-muted-foreground font-medium">2:00 PM</span>
                  <span className="font-semibold">Crisis Simulations</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 hover:bg-accent/10 transition-colors">
                  <span className="text-muted-foreground font-medium">7:00 PM</span>
                  <span className="font-semibold">Diplomatic Dinner</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl flex items-center gap-3 text-accent">
                  <Clock className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  Day 3 - Sunday
                </CardTitle>
                <CardDescription className="text-lg">Resolutions & Closing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 hover:bg-accent/10 transition-colors">
                  <span className="text-muted-foreground font-medium">9:00 AM</span>
                  <span className="font-semibold">Final Negotiations</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 hover:bg-accent/10 transition-colors">
                  <span className="text-muted-foreground font-medium">1:00 PM</span>
                  <span className="font-semibold">Resolution Presentations</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 hover:bg-accent/10 transition-colors">
                  <span className="text-muted-foreground font-medium">4:00 PM</span>
                  <span className="font-semibold">Awards & Closing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Committees */}
      <section id="committees" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mb-6">
              Committees
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Engage with pressing global issues across diverse committees
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-accent group-hover:text-accent/80 transition-colors">
                  UN Security Council
                </CardTitle>
                <CardDescription className="text-lg font-medium">Maintaining International Peace</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Address current global conflicts and peacekeeping operations with the world's most powerful diplomatic
                  body.
                </p>
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 font-semibold">
                  Advanced Level
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-accent group-hover:text-accent/80 transition-colors">
                  General Assembly
                </CardTitle>
                <CardDescription className="text-lg font-medium">Climate Change & Sustainability</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Develop comprehensive strategies for global environmental challenges and sustainable development.
                </p>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30 font-semibold">
                  Beginner Friendly
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-accent group-hover:text-accent/80 transition-colors">
                  Economic & Social Council
                </CardTitle>
                <CardDescription className="text-lg font-medium">Global Economic Recovery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Focus on post-pandemic economic recovery and reducing global inequality through policy solutions.
                </p>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30 font-semibold">
                  Intermediate
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-accent group-hover:text-accent/80 transition-colors">
                  Human Rights Council
                </CardTitle>
                <CardDescription className="text-lg font-medium">Digital Rights & Privacy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Examine the intersection of technology, human rights, and privacy in the digital age.
                </p>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30 font-semibold">
                  Intermediate
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-accent group-hover:text-accent/80 transition-colors">
                  WHO Assembly
                </CardTitle>
                <CardDescription className="text-lg font-medium">Global Health Preparedness</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Strengthen international health systems and pandemic preparedness for future global health crises.
                </p>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30 font-semibold">
                  Beginner Friendly
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-accent group-hover:text-accent/80 transition-colors">
                  Crisis Committee
                </CardTitle>
                <CardDescription className="text-lg font-medium">Real-Time Diplomatic Challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Navigate evolving international crises with dynamic scenarios and real-time decision making.
                </p>
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 font-semibold">
                  Advanced Level
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="registration" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative mb-8">
            <Award className="h-20 w-20 text-accent mx-auto animate-bounce" />
            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
          </div>

          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Ready to Make Your Mark?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of delegates in this transformative diplomatic experience. Develop your negotiation skills,
            expand your global perspective, and build lasting connections.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground text-xl px-12 py-4 shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 font-bold"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Register Now - $75
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-12 py-4 bg-background/50 backdrop-blur-sm border-accent/30 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Download Information Pack
            </Button>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground font-medium">
              <span className="text-accent font-bold">Early bird pricing</span> ends February 15th
            </p>
            <p className="text-muted-foreground mt-2">Group discounts available • Payment plans accepted</p>
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
                Fostering diplomacy and international cooperation through Model United Nations. Building tomorrow's
                global leaders through diplomatic simulation and cultural exchange.
              </p>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-lg mb-4 text-accent">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#schedule"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    Schedule
                  </a>
                </li>
                <li>
                  <a
                    href="#committees"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    Committees
                  </a>
                </li>
                <li>
                  <a
                    href="#registration"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    Registration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-lg mb-4 text-accent">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="font-medium">info@mun2025.org</li>
                <li className="font-medium">+1 (555) 123-4567</li>
                <li className="font-medium">123 Conference Ave</li>
                <li className="font-medium">City, State 12345</li>
              </ul>

              <div className="mt-6">
                <h5 className="font-semibold mb-3 text-foreground">Follow Us</h5>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    Instagram
                  </a>
                </div>
              </div>
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
