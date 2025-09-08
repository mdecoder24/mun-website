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
  X,
  Phone,
  Mail,
} from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function MUNHomePage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [activeScheduleDay, setActiveScheduleDay] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [delegateCount, setDelegateCount] = useState(0)
  const [institutionCount, setInstitutionCount] = useState(0)
  const [committeeCount, setCommitteeCount] = useState(0)

  useEffect(() => {
    const targetDate = new Date("2025-10-24T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000 // 2 seconds
      const steps = 60
      const delegateTarget = 300
      const institutionTarget = 50
      const committeeTarget = 6

      let currentStep = 0

      const counter = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setDelegateCount(Math.floor(delegateTarget * progress))
        setInstitutionCount(Math.floor(institutionTarget * progress))
        setCommitteeCount(Math.floor(committeeTarget * progress))

        if (currentStep >= steps) {
          setDelegateCount(delegateTarget)
          setInstitutionCount(institutionTarget)
          setCommitteeCount(committeeTarget)
          clearInterval(counter)
        }
      }, duration / steps)
    }

    // Start animation after a short delay
    const timeout = setTimeout(animateCounters, 1000)
    return () => clearTimeout(timeout)
  }, [])

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
        setIsPlaying(videoRef.current ? !videoRef.current.paused : false)
      }
    }
  }

  const scheduleData = [
    {
      day: "Day 1",
      date: "October 24, 2025",
      content: `8:30 am - 10:00 am: REGISTRATION PROCESS AND HELPDESK
Participants register and receive assistance.

9:30 am - 10:30 am: BREAKFAST
A meal to start the day.

10:40 am - 11:40 am: OPENING CEREMONY
Official kickoff of the event.

12:00 pm - 2:00 pm: SESSION 1
Here your journey begins!!

2:00 pm - 2:50 pm: LUNCH
Too much work for your fragile bodies, have the RAJ BHOG now!!

3:00 pm - 5:00 pm: SESSION 2

5:00 pm - 6:00 pm: SNACKS & HIGH TEA
Have thode snacks!!

6:30 pm: BUSES DEPARTURE
Dont wanna say goodbye? Your Loss Non Accom Peeps!!

7:00 pm - 8:30 pm: CAMPFIRE
Mauj Masti!!

9:00 pm - 10:00 pm: DINNER
Manchiga tinandi andaru!

10:00 pm: DISPERSE
Chalo Goodnight!!`,
    },
    {
      day: "Day 2",
      date: "October 25, 2025",
      content: `9:00 am - 10:00 am: BREAKFAST
Khao piyo mauj karo mitro!!

10:30 am - 1:20 pm: SESSION 3

1:30 pm - 2:20 pm: LUNCH
More Delicacies!!

2:30 pm - 4:00 pm: SESSION 4

4:00 pm - 4:20 pm: SNACKS & HIGH TEA
Light ga tinandi!!

4:30 pm - 6:00 pm: SESSION 5

6:30 pm - 8:00 pm: SOCIAL NIGHT
Have fun at the __________!!! shhh

8:30 pm: BUSES DEPARTURE
Dont wanna say goodbye? Your Loss Non Accom Peeps (again)!!

9:00 pm - 10:00 pm: DINNER
Thak gaye honge, jal lijiye!

10:00 pm: DISPERSE
Disperse!`,
    },
    {
      day: "Day 3",
      date: "October 26, 2025",
      content: `9:00 am - 9:40 am: BREAKFAST
The Last one with us?

9:50 am - 10:30 am: SESSION 6

10:40 am - 10:55 am: HIGH TEA
Snacks!!

11:00 am - 11:40 am: SESSION 7

11:50 am - 12:40 pm: LUNCH
Lunch time people!!

1:00 pm - 2:00 pm: CLOSING CEREMONY
And that is a wrap!!`,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm border-border/30">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-accent">Contact Our Team</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setShowContactModal(false)} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">Praneeth</p>
                  <p className="text-muted-foreground">9390174268</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">mun@mlrit.ac.in</p>
                </div>
              </div>
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
                <span className="font-playfair font-bold text-2xl text-accent bg-gradient-to-r from-accent to-primary bg-clip-text">
                  MLRIT MUN 2025
                </span>
                <p className="text-xs text-muted-foreground font-medium">Diplomatic Excellence</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
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
                href="/sponsor"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                Sponsor Us
              </a>
              <a
                href="/committees"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                Committees
              </a>
              <a
                href="/core"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                The Core
              </a>
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

            <div className="mb-12">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-accent mb-6">Conference Countdown</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-4 hover:bg-card/70 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-accent">{timeLeft.days}</div>
                  <div className="text-sm text-muted-foreground font-medium">Days</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-4 hover:bg-card/70 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-accent">{timeLeft.hours}</div>
                  <div className="text-sm text-muted-foreground font-medium">Hours</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-4 hover:bg-card/70 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-accent">{timeLeft.minutes}</div>
                  <div className="text-sm text-muted-foreground font-medium">Minutes</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-4 hover:bg-card/70 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-accent">{timeLeft.seconds}</div>
                  <div className="text-sm text-muted-foreground font-medium">Seconds</div>
                </div>
              </div>
            </div>

            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-foreground bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text">
                MLRIT Model
              </span>
              <br />
              <span className="text-accent bg-gradient-to-r from-accent via-accent to-foreground bg-clip-text animate-pulse">
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
                onClick={() => window.open("https://forms.gle/jv1ffS59ZWnWPUzk8", "_blank")}
              >
                <Trophy className="w-5 h-5 mr-2" />
                Register as Delegate
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-4 bg-background/50 backdrop-blur-sm border-accent/30 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 hover:scale-105 font-semibold"
                onClick={() => document.getElementById("committees")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-accent mb-2">{delegateCount}+</div>
                <div className="text-muted-foreground font-medium">Global Delegates</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-accent mb-2">{institutionCount}+</div>
                <div className="text-muted-foreground font-medium">Institutions</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-accent mb-2">{committeeCount}</div>
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
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground bg-gradient-to-r from-foreground to-accent bg-clip-text mb-6">
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
                  <source src="/mun.mp4" type="video/mp4" />
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
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground bg-gradient-to-r from-foreground to-accent bg-clip-text mb-6">
              Messages from Leadership
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Words of inspiration from our distinguished leadership team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Secretary General Letter */}
            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-700 hover:scale-105 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-sm border-border/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <Scroll className="h-12 w-12 text-accent group-hover:rotate-12 transition-transform duration-500" />
                    <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div>
                    <CardTitle className="font-playfair text-2xl text-accent group-hover:text-accent/80 transition-colors">
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
                    "Dear Delegate,
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-500">
                    Take a deep breath. Because I know exactly where you are right now. The nervous energy, the constant
                    doubts, the fear of "what if I mess up?" I've been there. In fact, I've lived there.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-500">
                    When I stepped into my first Model UN, I was just a kid in 8th grade, walking into a room full of
                    strangers who spoke like seasoned diplomats, debated like lawyers, and commanded confidence I didn't
                    even know existed.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-500">
                    "You break the whole goddamn thing down." Conference by conference, speech by speech, I grew. And
                    when I won my first award, I realized something Harvey Specter once said: "I don't get lucky. I make
                    my own luck."
                  </p>
                  <p className="text-accent font-semibold group-hover:text-accent/90 transition-colors duration-500">
                    Don't just show up. Make yourself impossible to ignore. I'll see you on the other side of the gavel.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground font-medium">
                    - Khaja Moizuddin, Secretary General, MLRIT MUN 2025
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Deputy Secretary General Letter */}
            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-700 hover:scale-105 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-sm border-border/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <PenTool className="h-12 w-12 text-accent group-hover:rotate-12 transition-transform duration-500" />
                    <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div>
                    <CardTitle className="font-playfair text-2xl text-accent group-hover:text-accent/80 transition-colors">
                      Deputy Secretary General
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
                    "Leadership isn't always about standing at the front -- sometimes it begins behind the scenes,
                    understanding what it takes to build something that matters.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-500">
                    Last year, as part of the Organising Committee for the sixth edition of MLRIT MUN, I have seen how
                    every detail, every plan, every challenge and every moment shapes the experience delegates carry
                    with them long after the closing ceremony.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-500">
                    This year, stepping into the role of Deputy Secretary General, I carry forward that same commitment
                    — not just to structure or execution, but to purpose. MUN, at its best, is a platform that sharpens
                    minds and amplifies voices.
                  </p>
                  <p className="text-accent font-semibold group-hover:text-accent/90 transition-colors duration-500">
                    Let this be the edition where ideas turn into impact, and voices become solutions.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground font-medium">
                    - R. Mahitha Reddy, Deputy Secretary General, MLRIT MUN 2025
                  </p>
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
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground bg-gradient-to-r from-foreground to-accent bg-clip-text mb-6">
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
      <section id="schedule" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-accent/10 via-transparent to-accent/5 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground bg-gradient-to-r from-foreground to-accent bg-clip-text mb-6">
              Conference Schedule
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              A comprehensive three-day diplomatic experience
            </p>
          </div>

          <div className="mb-12">
            <div className="flex justify-center items-center gap-8 md:gap-16 mb-8">
              <div className="text-center group cursor-pointer" onClick={() => setActiveScheduleDay(0)}>
                <div
                  className={`relative p-6 rounded-2xl transition-all duration-500 ${activeScheduleDay === 0 ? "bg-accent/20 border-2 border-accent scale-105" : "bg-card/50 border border-border/30 hover:bg-card/70"} backdrop-blur-sm`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold text-accent mb-2">DAY 1</h3>
                    <div className="w-12 h-1 bg-accent mx-auto mb-2"></div>
                    <p className="text-lg font-semibold text-foreground">24 OCT</p>
                  </div>
                </div>
              </div>

              <div className="text-center group cursor-pointer" onClick={() => setActiveScheduleDay(1)}>
                <div
                  className={`relative p-6 rounded-2xl transition-all duration-500 ${activeScheduleDay === 1 ? "bg-accent/20 border-2 border-accent scale-105" : "bg-card/50 border border-border/30 hover:bg-card/70"} backdrop-blur-sm`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold text-accent mb-2">DAY 2</h3>
                    <div className="w-12 h-1 bg-accent mx-auto mb-2"></div>
                    <p className="text-lg font-semibold text-foreground">25 OCT</p>
                  </div>
                </div>
              </div>

              <div className="text-center group cursor-pointer" onClick={() => setActiveScheduleDay(2)}>
                <div
                  className={`relative p-6 rounded-2xl transition-all duration-500 ${activeScheduleDay === 2 ? "bg-accent/20 border-2 border-accent scale-105" : "bg-card/50 border border-border/30 hover:bg-card/70"} backdrop-blur-sm`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold text-accent mb-2">DAY 3</h3>
                    <div className="w-12 h-1 bg-accent mx-auto mb-2"></div>
                    <p className="text-lg font-semibold text-foreground">26 OCT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {activeScheduleDay !== null && (
            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-700 bg-card/90 backdrop-blur-sm border-border/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="font-playfair text-3xl flex items-center gap-3 text-accent">
                  <Clock className="h-8 w-8 group-hover:rotate-12 transition-transform duration-300" />
                  {scheduleData[activeScheduleDay].day} - {scheduleData[activeScheduleDay].date}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {scheduleData[activeScheduleDay].content.split("\n\n").map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-4 rounded-lg bg-background/50 hover:bg-accent/10 transition-all duration-300 hover:scale-[1.02] border border-border/20"
                    >
                      <span className="text-sm font-medium whitespace-pre-line text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeScheduleDay === null && (
            <div className="text-center">
              <Card className="max-w-md mx-auto bg-card/50 backdrop-blur-sm border-border/30 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-8">
                  <Clock className="h-16 w-16 text-accent mx-auto mb-4 animate-pulse" />
                  <p className="text-muted-foreground text-lg font-medium">
                    Click on any day above to view the detailed schedule
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Committees */}
      <section id="committees" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground bg-gradient-to-r from-foreground to-accent bg-clip-text mb-6">
              Committees
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Engage with pressing global issues across diverse committees
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aippm-RFoGqARrFsSeumgCxLjb83K9wNUKXU.png"
                    alt="AIPPM Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <CardTitle className="font-playfair text-xl text-accent group-hover:text-accent/80 transition-colors">
                  AIPPM
                </CardTitle>
                <CardDescription className="text-lg font-medium">All India Political Parties Meet</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Engage in India's democratic discourse by representing various political parties and addressing
                  national issues through collaborative dialogue and policy-making.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uncsw-7yRl0ZQyrTDecHQUVzgAquh8G6HIeY.png"
                    alt="UNCSW Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <CardTitle className="font-playfair text-xl text-accent group-hover:text-accent/80 transition-colors">
                  UNCSW
                </CardTitle>
                <CardDescription className="text-lg font-medium">
                  United Nations Commission on the Status of Women
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Champion gender equality and women's empowerment through policy development and international
                  cooperation on women's rights issues.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unodc-XIAzAv1f7C4Dni6HytWWjh4Wxn2UZu.png"
                    alt="UNODC Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <CardTitle className="font-playfair text-xl text-accent group-hover:text-accent/80 transition-colors">
                  UNODC
                </CardTitle>
                <CardDescription className="text-lg font-medium">
                  United Nations Office on Drugs and Crime
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Combat transnational organized crime, drug trafficking, and corruption while promoting justice and
                  rule of law globally.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ip-H8Zy0XHG9PHcU4CRGWNomSiA8XK8zf.png"
                    alt="IP Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <CardTitle className="font-playfair text-xl text-accent group-hover:text-accent/80 transition-colors">
                  IP
                </CardTitle>
                <CardDescription className="text-lg font-medium">International Press</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Report on global events, conduct interviews, and shape public opinion through responsible journalism
                  and media coverage of international affairs.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unhrc-byLatfzVCMduZlfSvhZTUMCcBAVldB.png"
                    alt="UNHRC Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <CardTitle className="font-playfair text-xl text-accent group-hover:text-accent/80 transition-colors">
                  UNHRC
                </CardTitle>
                <CardDescription className="text-lg font-medium">United Nations Human Rights Council</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Protect and promote human rights worldwide by addressing violations and developing international human
                  rights standards and policies.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/30">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disec-SZO3ahXNrA9DkZbUSp9j6OOOGFpPsH.png"
                    alt="DISEC Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <CardTitle className="font-playfair text-xl text-accent group-hover:text-accent/80 transition-colors">
                  DISEC
                </CardTitle>
                <CardDescription className="text-lg font-medium">
                  Disarmament and International Security Committee
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Address global security challenges, nuclear disarmament, and peacekeeping operations to maintain
                  international stability and security.
                </p>
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
            <span className="text-foreground bg-gradient-to-r from-foreground to-accent bg-clip-text">
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
              onClick={() => window.open("https://forms.gle/jv1ffS59ZWnWPUzk8", "_blank")}
            >
              <Trophy className="w-5 h-5 mr-2" />
              Register Now
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
            <p className="text-muted-foreground font-medium">• Payment plans accepted</p>
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
                  <span className="font-playfair font-bold text-2xl text-accent bg-gradient-to-r from-accent to-foreground bg-clip-text">
                    MLRIT MUN 2025
                  </span>
                  <p className="text-xs text-muted-foreground font-medium">Diplomatic Excellence</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
                Fostering diplomacy and international cooperation through Model United Nations. Building tomorrow's
                global leaders through diplomatic simulation and cultural exchange.
              </p>

              <div className="mt-6">
                <h4 className="font-playfair font-bold text-lg mb-4 text-accent">Location</h4>
                <div className="rounded-lg overflow-hidden border border-border/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.1744261147364!2d78.43861427414626!3d17.594450196809095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b8eae5cd739%3A0x2aa927e931d97eee!2sMLR%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1743153982796!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  ></iframe>
                </div>
              </div>
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
                <li className="font-medium">mlritmun@mlrit.ac.in</li>
                <li className="font-medium">+91 6303916919</li>
                <li className="font-medium">+91 8367587388</li>
                <li className="font-medium">MLR Institute of Technology</li>
                <li className="font-medium">Dundigal, Hyderabad</li>
              </ul>

              <div className="mt-6">
                <h5 className="font-semibold mb-3 text-foreground">Follow Us</h5>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/mlrit_mun/"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/mlrit_mun/"
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
