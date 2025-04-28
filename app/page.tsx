"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import Confetti from "react-confetti"
import {
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  PinIcon as Pinterest,
  Twitter,
  Youtube,
  MessageSquare,
  MessageCircleMore,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { Product3DViewer } from "@/components/Product3DViewer"

export default function Home() {
  
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatIsAmbioSection />
        <KeyFeaturesSection />
        <WhyJoinSection />
        <UserFlowSection />
        <SocialProofSection />
        <AchievementsSection />
        <WaitlistSection />
      </main>
      <Footer />

      {/* Floating Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          className="h-auto px-4 py-2 rounded-full shadow-xl bg-gradient-to-r from-[#6d4432] to-[#f2a365] hover:from-[#f2a365] hover:to-[#6d4432] text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2 border-2 border-white/20"
          onClick={() => {
            const element = document.getElementById('achievements_section');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }}
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white animate-ping"></div>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold">XR Creator Hackathon</span>
              <span className="text-xs font-bold text-white">Winner</span>
              <span className="text-xs font-medium text-white/90">E-commerce & Retail</span>
            </div>
          </div>
          <span className="sr-only">View our XR Creator Hackathon achievement in E-commerce & Retail category</span>
        </Button>
      </div>

      {/* Floating Achievement Badge */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          className="h-auto px-4 py-2 rounded-full shadow-xl bg-gradient-to-r from-[#6d4432] to-[#f2a365] hover:from-[#f2a365] hover:to-[#6d4432] text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2 border-2 border-white/20"
          onClick={() => {
            const element = document.getElementById('achievements_section');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }}
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold">XR Creator Hackathon</span>
              <span className="text-xs font-bold text-white">Winner</span>
              <span className="text-xs font-medium text-white/90">E-commerce & Retail</span>
            </div>
          </div>
          <span className="sr-only">View our XR Creator Hackathon achievement in E-commerce & Retail category</span>
        </Button>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            className="fixed bottom-24 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full shadow-md border-[#6d4432]/20"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300",
        scrolled ? "bg-background/80 shadow-sm border-b" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-36">
              <Image
                src="/Ambio-logo.png"
                alt="Ambio Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </motion.div>

        <motion.nav
          className="hidden md:flex gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#about" className="text-sm font-medium hover:text-[#6d4432] transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f2a365] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#features" className="text-sm font-medium hover:text-[#6d4432] transition-colors relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f2a365] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-[#6d4432] transition-colors relative group">
            Testimonials
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f2a365] transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* <Link href="/team" className="text-sm font-medium hover:text-[#6d4432] transition-colors relative group">
            Team
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f2a365] transition-all duration-300 group-hover:w-full"></span>
          </Link> */}
        </motion.nav>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#waitlist">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-[#6d4432] text-[#6d4432] hover:bg-[#6d4432] hover:text-white transition-colors"
            >
              Join waitlist
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </a>

          <Button
            variant="outline"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </motion.div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-sm font-medium hover:text-[#6d4432] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#features"
                className="text-sm font-medium hover:text-[#6d4432] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium hover:text-[#6d4432] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              {/* <Link
                href="/team"
                className="text-sm font-medium hover:text-[#6d4432] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link> */}
              <a
                href="#waitlist"
                className="text-sm font-medium hover:text-[#6d4432] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function HeroSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#ebddd7]/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-[#f2a365]/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-[#6d4432]/10 blur-3xl"></div>
      </div>

      {/* Dotted grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(#6d4432_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <motion.div className="container px-4 md:px-6" style={{ y, opacity }}>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-2">
              {/* Winner Badge */}
              <motion.div
                className="inline-block mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <a href="#achievements_section" onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('achievements_section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}>
                <div className="flex items-center gap-2 bg-[#f2a365]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#f2a365]/20 shadow-lg cursor-pointer hover:bg-[#f2a365]/30 transition-colors">
                  <div className="flex items-center gap-1">
                    <span className="text-[#f2a365] text-sm font-medium">🏆</span>
                    <span className="text-[#6d4432] text-sm font-medium">Winner</span>
                  </div>
                  <div className="h-4 w-px bg-[#6d4432]/20"></div>
                  <span className="text-[#6d4432] text-sm">XR Creator Hackathon 2025</span>
                  <div className="h-4 w-px bg-[#6d4432]/20"></div>
                  <span className="text-[#6d4432] text-sm">E-commerce & Retail</span>
                </div>
                </a>
              </motion.div>

              <motion.h1
                className="font-serif text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-[#6d4432]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Connecting <br />
                <span className="text-[#f2a365]" style={{ fontFamily: 'Brittany' }}>
                  Creativity
                </span>
                <span className="text-[#6d4432]" style={{ fontFamily: 'Brittany' }}>. Crafting Spaces.</span>
              </motion.h1>

              <motion.p
                className="max-w-[600px] text-gray-600 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                A new era of interior design and discovery — powered by AR, XR, and community.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <a href="#waitlist">
                <Button className="bg-[#6d4432] hover:bg-[#6d4432]/90 text-white group relative overflow-hidden">
                  <span className="relative z-10">Join the Waitlist</span>
                  <span className="absolute inset-0 bg-[#f2a365] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              {/* <Badge className="bg-[#f2a365]/20 text-[#6d4432] hover:bg-[#f2a365]/30 border-none self-start px-3 py-1 mt-2">
                <span className="animate-pulse mr-1.5 h-2 w-2 rounded-full bg-[#f2a365]"></span>
                <span className="text-xs">238 designers already joined</span>
              </Badge> */}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative h-[450px] w-[350px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
              <Product3DViewer />

              {/* Floating UI elements */}
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 backdrop-blur-sm shadow-lg">
                <p className="text-sm font-medium text-[#6d4432]">Visualize your space in AR before making changes</p>
                <div className="mt-2 flex gap-2">
                  <span className="inline-block h-3 w-3 rounded-full bg-[#6d4432]"></span>
                  <span className="inline-block h-3 w-3 rounded-full bg-[#ebddd7]"></span>
                  <span className="inline-block h-3 w-3 rounded-full bg-[#f2a365]"></span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-[#ebddd7] flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <span className="text-[#6d4432] font-bold text-sm">AR/XR</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-[#f2a365] flex items-center justify-center shadow-lg"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <span className="text-white font-bold text-sm">3D</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function WhatIsAmbioSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section id="about" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#ebddd7]/20 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#f2a365]/10 rounded-tr-full"></div>
      </div>

      <motion.div ref={ref} style={{ opacity, scale }} className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-2">
              <Badge className="bg-[#ebddd7] text-[#6d4432] hover:bg-[#ebddd7]/80 mb-2">About</Badge>
              <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d4432]">
                What is <span className="text-[#f2a365]">Ambio</span>?
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                Ambio is revolutionizing the interior design industry by connecting decorators, designers, and
                homeowners in one immersive ecosystem. Our platform bridges the gap between imagination and reality,
                making professional interior design accessible to everyone.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.div
                className="flex items-center gap-2 bg-[#ebddd7]/30 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="h-2 w-2 rounded-full bg-[#6d4432]"></span>
                <span className="text-sm font-medium">Discover</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 bg-[#ebddd7]/30 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="h-2 w-2 rounded-full bg-[#6d4432]"></span>
                <span className="text-sm font-medium">Visualize</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 bg-[#ebddd7]/30 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="h-2 w-2 rounded-full bg-[#6d4432]"></span>
                <span className="text-sm font-medium">Connect</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 bg-[#ebddd7]/30 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="h-2 w-2 rounded-full bg-[#6d4432]"></span>
                <span className="text-sm font-medium">Hire</span>
              </motion.div>
            </div>
          </motion.div>

            {/* video Section */}           
            <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div
                  className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-xl border border-gray-200 shadow-xl group"
                >
                  {/* YouTube iframe - initially hidden */}
                  <iframe
                    id="youtubePlayer"
                    className="absolute inset-0 h-full w-full object-cover rounded-xl hidden"
                    src="https://www.youtube.com/embed/w6JbvNdlb6A?controls=1"
                    title="Ambio platform demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
              
                  {/* Image placeholder */}
                  <div className="absolute inset-0" id="thumbnail">
                    <Image
                      src="/team2.jpg?height=800&width=1000"
                      width={500}
                      height={400}
                      alt="Ambio platform demo"
                      className="h-full w-full object-cover"
                    />
                  </div>
              
                  {/* Play Button Overlay */}
                  <div
                    className="absolute inset-0 bg-black/30 flex items-center justify-center"
                    id="playOverlay"
                  >
                    <motion.div
                      className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const iframe = document.getElementById('youtubePlayer');
                        const thumbnail = document.getElementById('thumbnail');
                        const playOverlay = document.getElementById('playOverlay');
                        if (iframe && thumbnail && playOverlay) {
                          thumbnail.style.display = 'none';    // Hide thumbnail
                          playOverlay.style.display = 'none';  // Hide Play button overlay
                          iframe.classList.remove('hidden');   // Show YouTube video
                        }
                      }}
                    >
                      <div className="h-14 w-14 rounded-full bg-[#6d4432] flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 3L19 12L5 21V3Z" fill="white" />
                        </svg>
                      </div>
                    </motion.div>

                    
                  </div>

                  {/* Floating UI Top */}
                  <motion.div
                    className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-sm font-bold text-[#6d4432]">What is Ambio?</h3>
                    <p className="text-xs text-gray-600">Listen from our team</p>
                  </motion.div>
                </div>
            </motion.div>          
        </div>
      </motion.div>
    </section>
  )
}

function KeyFeaturesSection() {
  const features = [
    {
      title: "AR/XR Visualization",
      description: "Experience your design in augmented reality before making any physical changes to your space.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 transition-all duration-300 group-hover:scale-110"
        >
          <path d="M21 7v6h-6" />
          <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
        </svg>
      ),
    },
    {
      title: "Designer Portfolios",
      description: "Browse through curated portfolios of verified interior designers and decorators.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 transition-all duration-300 group-hover:scale-110"
        >
          <path d="M3 3v18h18" />
          <path d="m7 17 4-4 4 4 6-6" />
        </svg>
      ),
    },
    {
      title: "Smart Matching Algorithm",
      description: "Our algorithm connects you with designers who match your style preferences and budget.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 transition-all duration-300 group-hover:scale-110"
        >
          <path d="M18 16.8a7.14 7.14 0 0 0 2.24-3.22 7.23 7.23 0 0 0 .42-2.48V9.75a7.5 7.5 0 0 0-15 0v1.35c0 .84.14 1.68.42 2.48" />
          <path d="M18.2 16.8a9 9 0 0 1-12.4 0" />
          <path d="M6 17h12a4 4 0 0 1 4 4H2a4 4 0 0 1 4-4z" />
        </svg>
      ),
    },
    {
      title: "Home Decor Community",
      description: "Join a community of design enthusiasts, share ideas, and get inspired by others.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 transition-all duration-300 group-hover:scale-110"
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      ),
    },
  ]

  return (
    <section id="features" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-[#ebddd7]/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-64 h-64 rounded-full bg-[#f2a365]/10 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-[#ebddd7] text-[#6d4432] hover:bg-[#ebddd7]/80 mb-2">Features</Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d4432]">
            Key Features
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Discover the tools that make Ambio the ultimate platform for interior design.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white/80 hover:border-[#6d4432]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ebddd7]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#ebddd7] text-[#6d4432] transition-all duration-300 group-hover:bg-[#6d4432] group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#6d4432] group-hover:text-[#6d4432]">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyJoinSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const benefits = [
    {
      title: "Early Access",
      description: "Be the first to experience Ambio's revolutionary platform and shape its future.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <path d="M12 2v4" />
          <path d="m6.8 6.8-2.8-2.8" />
          <path d="M6 12H2" />
          <path d="m6.8 17.2-2.8 2.8" />
          <path d="M12 22v-4" />
          <path d="m17.2 17.2 2.8 2.8" />
          <path d="M22 12h-4" />
          <path d="m17.2 6.8 2.8-2.8" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      title: "Featured Portfolio for Designers",
      description: "Designers can showcase their work to a growing community of design enthusiasts.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <path d="M18 8V4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
          <path d="M10 16v-6" />
          <path d="M14 16v-3" />
          <path d="M18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M18 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M18 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </svg>
      ),
    },
    {
      title: "Beta Rewards",
      description: "Enjoy special perks, discounts, and features available only to our early adopters.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "Design Contests",
      description: "Participate in exclusive design contests and win recognition in the design community.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
    },
    {
      title: "Invite-only Designer Directory",
      description: "Get listed in our exclusive directory of top interior designers and decorators.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [benefits.length])

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-[#ebddd7]/30">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-white text-[#6d4432] hover:bg-white/80 mb-2">Join Now</Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d4432]">
            Why Join Early?
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Be among the first to experience the future of interior design with Ambio.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === activeIndex ? "bg-[#6d4432] w-8" : "bg-[#6d4432]/30"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-xl bg-white shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 p-8 md:p-12 flex flex-col items-center justify-center text-center"
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#ebddd7] text-[#6d4432] mb-6">
                    {benefits[activeIndex].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#6d4432] mb-4">{benefits[activeIndex].title}</h3>
                  <p className="text-lg text-gray-600 max-w-2xl">{benefits[activeIndex].description}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                onClick={() => setActiveIndex((prev) => (prev - 1 + benefits.length) % benefits.length)}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </Button>
            </div>

            <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                onClick={() => setActiveIndex((prev) => (prev + 1) % benefits.length)}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function UserFlowSection() {
  const steps = [
    {
      title: "Browse & Discover",
      description: "Explore curated interior design inspirations and designer portfolios.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      ),
      image: "/explore.jpg",
      imageAlt: "Browse and discover interior design inspirations"
    },
    {
      title: "Visualize in AR",
      description: "See how furniture and decor will look in your space before purchasing.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
          <path d="M7 12h10" />
          <path d="M12 7v10" />
        </svg>
      ),
      image: "/ar-image.jpg",
      imageAlt: "AR visualization of furniture in space"
    },
    {
      title: "Connect with Professionals",
      description: "Chat with professionals who match your style and budget requirements.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
        </svg>
      ),
      image: "/connection.jpg",
      imageAlt: "Connect with professional designers"
    },
    {
      title: "Transform Your Space",
      description: "Work with designers to bring your vision to life with confidence.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      ),
      image: "/home-interior.jpg",
      imageAlt: "Transformed interior space"
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#ebddd7]/30">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-white text-[#6d4432] hover:bg-white/80 mb-2">How It Works</Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d4432]">
            Your Design Journey
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
            From inspiration to implementation, Ambio guides you through every step.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#6d4432]/20 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#6d4432] text-white relative z-10">
                    {step.icon}
                    <div className="absolute -inset-2 rounded-full border-2 border-[#6d4432]/20 animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#6d4432]">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>

                <div className="w-full md:w-1/2 h-64 relative">
                  <div className="h-full w-full overflow-hidden rounded-xl shadow-lg">
                    {step.image ? (
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className="object-cover rounded-xl"
                      />
                    ) : (
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        width={600}
                        height={400}
                        alt={step.title}
                        className="h-full w-full object-cover rounded-xl"
                      />
                    )}
                  </div>

                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <p className="text-sm font-medium text-[#6d4432]">
                      Step {index + 1}: {step.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialProofSection() {
  const designerTestimonials = [
    {
      name: "Anupriya Patel",
      role: "Interior Designer, Surat",
      image: "/placeholder.svg?height=100&width=100",
      quote: "Even in its early stage, Ambio feels revolutionary. Just imagining the ability to bring my designs into a client’s space through XR gets me genuinely excited. I can't wait to integrate this into my workflow once it's fully live.",
      rating: 5
    },
    {
      name: "Pratibha Mishra",
      role: "Interior Designer, Pratapgarh",
      image: "/placeholder.svg?height=100&width=100",
      quote: "Hearing the vision behind Ambio immediately clicked with me. As a visual artist, having a platform that makes interaction with 3D models seamless and real-world is exactly what we've been needing. I'm thrilled to see where it goes!.",
      rating: 5
    },
    {
      name: "Bharat",
      role: "Interior Designer, Surat",
      image: "/placeholder.svg?height=100&width=100",
      quote: "Even in beta discussions, Ambio’s concept promises to change client experiences forever. The idea of walking clients through unbuilt spaces using AR is powerful, it’s something I’ve been waiting for without even realizing it.",
      rating: 5
    }
  ];

  const homeownerTestimonials = [
    {
      name: "Arpit Singh",
      role: "Homeowner",
      image: "/arpit-singh.png?height=100&width=100",
      quote: "I got an early look at Ambio, and wow – it's a game-changer for anyone tackling interior design! Even though it's still in development, the app is incredibly user-friendly and intuitive. The AR feature is stunningly effective; being able to virtually place furniture and decor in my actual room.",
      rating: 5
    },
    {
      name: "Ram Rawat",
      role: "Homeowner",
      image: "/ram.jpg?height=100&width=100",
      quote: "With a remarkable blend of innovation, expertise, and client-centered design, AMBIO stands poised to become a dominant force in the interior design world. Their forward-thinking approach and dedication to excellence ensure a bright and prosperous future.",
      rating: 5
    },
    {
      name: "Apeksha Rai",
      role: "Homeowner",
      image: "/placeholder.svg?height=100&width=100",
      quote: "I struggles with limited design options, lack of trusted sources, and poor implementation. She usually seeks inspiration from Google and social media but often faces trust issues with designers. I prefers a wide variety of designs, short and detailed DIY content, budget-friendly tips, purchase links, and some interactive features.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-[#ebddd7] text-[#6d4432] hover:bg-[#ebddd7]/80 mb-2">Testimonials</Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d4432]">
            What Early Users Are Saying
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Hear from our beta testers and early adopters about their experience with Ambio.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="homeowners" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="homeowners">Homeowners</TabsTrigger>
              <TabsTrigger value="designers">Designers</TabsTrigger>
            </TabsList>

            <TabsContent value="designers" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {designerTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          width={100}
                          height={100}
                          alt={`${testimonial.name} testimonial`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#6d4432]">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                    <div className="flex text-[#f2a365]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="homeowners" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {homeownerTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          width={100}
                          height={100}
                          alt={`${testimonial.name} testimonial`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#6d4432]">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                    <div className="flex text-[#f2a365]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function AchievementsSection() {
  return (
    <section id="achievements_section" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#ebddd7]/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-[#f2a365]/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-[#6d4432]/10 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-[#ebddd7] text-[#6d4432] hover:bg-[#ebddd7]/80 mb-2">Achievements</Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d4432]">
            Our Latest Achievement
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Winners of the XR Creator Hackathon 2024 in E-commerce & Retail Category
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            className="relative overflow-hidden rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-8 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-2xl font-bold text-[#6d4432]">XR Creator Hackathon 2025</h3>
                <p className="text-gray-600">
                  Organized by the Government of India, this prestigious competition brings together innovators and creators in the field of Extended Reality (XR).
                </p>
                <Link href="/achievements">
                  <Button className="bg-[#6d4432] hover:bg-[#6d4432]/90 text-white group relative overflow-hidden">
                    <span className="relative z-10">View Details</span>
                    <span className="absolute inset-0 bg-[#f2a365] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></span>
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                className="relative h-64 overflow-hidden rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Image
                  src="/xr.png"
                  alt="XR Creator Hackathon"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm font-medium">E-commerce & Retail Category</p>
                    <p className="text-xs">Winners 2025</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16">
                  <Image
                    src="/trophy.png"
                    alt="Trophy"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WaitlistSection() {
  const [loading, setLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    message: "",
  })
  const [emailError, setEmailError] = useState("")
  const { toast } = useToast()

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address")
      return
    }
    
    setLoading(true); // Start loading animation
    
  
    // const response = await fetch('/api/waitlist.ts', {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted:", formData);
        setIsSubmitted(true)
        setShowConfetti(true)
        setEmailError("")
    
        toast({
          title: "Success!",
          description: "You've been added to our waitlist.",
        })

        setFormData({ name: "", email: "", userType: "", message: "" });
    
        setTimeout(() => {
          setShowConfetti(false)
        }, 5000)

      } else {
        console.error("Failed to submit form:", response.statusText);
        toast({
          title: "Error",
          description: "Failed to submit. Please try again!",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }finally {
      setLoading(false); // Always stop loading animation
    }   
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    if (name === "email") {
      if (!value) {
        setEmailError("")
      } else if (!validateEmail(value)) {
        setEmailError("Please enter a valid email address")
      } else {
        setEmailError("")
      }
    }
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, userType: value }))
  }

  return (
    <section id="waitlist" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#6d4432_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-10"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#ebddd7]/30 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-[#f2a365]/10 blur-3xl"></div>
      </div>

      {showConfetti && <Confetti recycle={false} numberOfPieces={200} colors={["#6d4432", "#ebddd7", "#f2a365"]} />}

      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-[#ebddd7] text-[#6d4432] hover:bg-[#ebddd7]/80 mb-2">Join Us</Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d4432]">
            Join the Waitlist
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Be the first to experience Ambio and transform your space.
          </p>
        </motion.div>

        <div className="mx-auto max-w-lg">
          <motion.div
            className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-8 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-[#6d4432]/20 focus:border-[#6d4432] focus:ring-[#6d4432]/20"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(
                    "border-[#6d4432]/20 focus:border-[#6d4432] focus:ring-[#6d4432]/20",
                    emailError && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  )}
                />
                {emailError && (
                  <p className="text-sm text-red-500">{emailError}</p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="userType"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I am a
                </label>
                <Select onValueChange={handleSelectChange} value={formData.userType}>
                  <SelectTrigger className="border-[#6d4432]/20 focus:border-[#6d4432] focus:ring-[#6d4432]/20">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="designer">Designer/Decorator</SelectItem>
                    <SelectItem value="homeowner">Homeowner</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what you're looking for in Ambio"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[100px] border-[#6d4432]/20 focus:border-[#6d4432] focus:ring-[#6d4432]/20"
                />
              </div>
              {/* <Button
                type="submit"
                className="w-full bg-[#6d4432] hover:bg-[#6d4432]/90 text-white group relative overflow-hidden"
              >
                <span className="relative z-10">Join the Waitlist</span>
                <span className="absolute inset-0 bg-[#f2a365] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></span>
              </Button> */}


              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#6d4432] hover:bg-[#6d4432]/90 text-white group relative overflow-hidden"
              >
                {loading ? "Submitting..." : (
                  <>
                    <span className="relative z-10">Join the Waitlist</span>
                    <span className="absolute inset-0 bg-[#f2a365] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></span>
                  </>
                )}
              </Button>


              <div className="flex justify-center items-center gap-2 mt-4">
                <Link 
                  href="https://chat.whatsapp.com/HRUZayVguCbE45mRDefGjp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-600 hover:text-[#6d4432] transition-colors flex items-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp text-xl text-[#6d4432]"></i>
                  <span>Join our WhatsApp Community</span>
                </Link>
              </div>

              <div className="pt-4 text-center">
                <p className="text-xs text-gray-500">
                  By joining, you agree to our{" "}
                  <Link href="/terms" className="text-[#6d4432] underline underline-offset-2 hover:text-[#f2a365]">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#6d4432] underline underline-offset-2 hover:text-[#f2a365]">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>

          {/* QR Code */}
          {/* <motion.div
            className="mt-8 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-sm text-gray-600 mb-4">Or scan this QR code to join the waitlist</p>
            <div className="p-2 bg-white rounded-lg shadow-md">
              <Image
                src="/placeholder.svg?height=150&width=150"
                width={150}
                height={150}
                alt="QR Code for waitlist"
                className="h-32 w-32"
              />
            </div>
          </motion.div> */}
        </div>
      </div>

      <Dialog open={isSubmitted} onOpenChange={setIsSubmitted}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-[#6d4432] font-serif text-2xl">Thanks! You're on the list ✨</DialogTitle>
            <DialogDescription>
              <div className="space-y-4">
                <p>We're excited to have you join the Ambio community. We'll be in touch soon with updates on our launch.</p>
                <div className="flex justify-center">
                  <Link href="https://chat.whatsapp.com/HRUZayVguCbE45mRDefGjp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#6d4432] hover:text-[#f2a365] transition-colors">
                    <i className="fa-brands fa-whatsapp text-xl"></i>
                    <span>Join our WhatsApp Community</span>
                  </Link>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <Button onClick={() => setIsSubmitted(false)} className="bg-[#6d4432] hover:bg-[#6d4432]/90 text-white">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full border-t bg-background py-8 md:py-12">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-36">
              <Image
                src="/Ambio-logo.png"
                alt="Ambio Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-center text-sm text-gray-500 md:text-left">Connecting Creativity. Crafting Spaces.</p>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end md:justify-end">
          <div className="flex items-center gap-4">
            {/* <Link href="#" className="text-gray-500 hover:text-[#6d4432] transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link> */}
            
            <Link href="https://chat.whatsapp.com/HRUZayVguCbE45mRDefGjp" className="text-gray-500 hover:text-[#6d4432] transition-colors" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp text-xl"></i>
              <span className="sr-only">WhatsApp</span>
            </Link>
            
            <Link href="https://www.instagram.com/theambio?igsh=MW8zdG5pa2NkaXpiYw%3D%3D" className="text-gray-500 hover:text-[#6d4432] transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://x.com/theambio" className="text-gray-500 hover:text-[#6d4432] transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            {/* <Link href="#" className="text-gray-500 hover:text-[#6d4432] transition-colors">
              <Pinterest className="h-5 w-5" />
              <span className="sr-only">Pinterest</span>
            </Link> */}
            <Link href="https://www.linkedin.com/showcase/theambio/posts/?feedView=all" className="text-gray-500 hover:text-[#6d4432] transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <Link href="https://www.youtube.com/@theambio" className="text-gray-500 hover:text-[#6d4432] transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">Youtube</span>
            </Link>
            
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-500">emodevelopers@gmail.com</span>
          </div>
          <p className="text-center text-xs text-gray-500">Built with ❤️ by Team Ambio</p>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-[#6d4432] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#6d4432] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#6d4432] transition-colors">
              Cookies
            </Link>
            <Link href="#" className="hover:text-[#6d4432] transition-colors">
              Accessibility
            </Link>
          </div> */}
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Ambio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
