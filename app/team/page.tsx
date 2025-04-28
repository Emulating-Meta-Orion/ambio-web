"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail, ArrowRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function TeamPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const teamMembers = [
    {
      name: "Utkarsh Rai",
      role: "Founder",
      description: "",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      description: "UX enthusiast turning spaces into experiences",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Michael Rodriguez",
      role: "AR/VR Developer",
      description: "Bringing virtual design to life through immersive technology",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Priya Patel",
      role: "Marketing Director",
      description: "Connecting designers with homeowners through strategic outreach",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
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
            <a href="/#about" className="text-sm font-medium hover:text-[#6d4432] transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f2a365] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#features" className="text-sm font-medium hover:text-[#6d4432] transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f2a365] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#testimonials" className="text-sm font-medium hover:text-[#6d4432] transition-colors relative group">
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f2a365] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link href="/team" className="text-sm font-medium text-[#6d4432] transition-colors relative group">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f2a365] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.nav>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/#waitlist">
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
                  href="/#about"
                  className="text-sm font-medium hover:text-[#6d4432] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/#features"
                  className="text-sm font-medium hover:text-[#6d4432] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="/#testimonials"
                  className="text-sm font-medium hover:text-[#6d4432] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
                <Link
                  href="/team"
                  className="text-sm font-medium text-[#6d4432] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
                <a
                  href="/#waitlist"
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

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Badge className="bg-[#ebddd7] text-[#6d4432] hover:bg-[#ebddd7]/80 mb-2">Our Team</Badge>
              <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d4432]">
                Meet the Visionaries Behind Ambio
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                Our team is passionate about revolutionizing the interior design industry.
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-5xl gap-8 py-8 sm:grid-cols-2 md:grid-cols-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-64 w-full overflow-hidden rounded-xl">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex gap-2">
                        <a
                          href="#"
                          className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a
                          href="#"
                          className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                        <a
                          href="#"
                          className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-[#6d4432]">{member.name}</h3>
                    <p className="text-sm font-medium text-[#f2a365]">{member.role}</p>
                    <p className="mt-2 text-sm text-gray-600">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 