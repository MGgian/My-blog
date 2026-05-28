"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-3 pt-3 sm:px-4 sm:pt-4">
      <header className="flex h-12 sm:h-14 w-full max-w-[960px] items-center justify-between gap-2 rounded-full border border-border/40 bg-white/95 backdrop-blur-sm px-3 sm:px-5 shadow-sm">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2"
          onClick={closeMenu}
        >
          <Image
            src="/images/Gian-icon.png"
            alt="Gian logo"
            width={20}
            height={20}
            className="shrink-0"
          />
          <span className="truncate text-sm font-semibold tracking-tight text-foreground sm:text-base">
            Gian
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact sales
          </Link>
          <Button
            size="sm"
            className="rounded-md bg-slate-900 hover:bg-slate-800 text-white px-4 text-sm font-medium gap-1"
            asChild
          >
            <Link href="/auth/login">
              Sign in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex md:hidden h-9 w-9 shrink-0 items-center justify-center rounded-md text-foreground hover:bg-muted transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </header>

      <div
        id="mobile-nav"
        className={cn(
          "md:hidden w-full max-w-[960px] overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          mobileMenuOpen
            ? "max-h-[min(24rem,calc(100dvh-5rem))] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <nav className="mt-2 rounded-2xl border border-border/40 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-sm">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                onClick={closeMenu}
              >
                Contact sales
              </Link>
            </li>
          </ul>
          <div className="mt-3 border-t border-border/60 pt-3">
            <Button
              className="w-full rounded-md bg-slate-900 hover:bg-slate-800 text-white gap-1"
              asChild
            >
              <Link href="/auth/login" onClick={closeMenu}>
                Sign in
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}
