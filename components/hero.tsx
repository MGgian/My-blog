import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroProps {
  className?: string
  title?: string
  subtitle?: string
  primaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
}

export function Hero({
  className,
  title = "Amplify your voice with striking blog posts",
  subtitle = "Transform your ideas into compelling stories. Our intuitive platform empowers writers to create, publish, and grow their audience with ease.",
  primaryAction = { label: "Start Writing", href: "#" },
  secondaryAction = { label: "Explore Blogs", href: "#" },
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[100dvh] items-center justify-center overflow-hidden",
        "pt-[calc(3.75rem+0.75rem)] pb-10 sm:pt-[calc(4.5rem+1rem)] sm:pb-14 md:pb-16",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-[1.75rem] leading-[1.15] font-bold tracking-tight text-white text-balance sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 text-pretty sm:mt-6 sm:text-lg md:text-xl">
            {subtitle}
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            {primaryAction && (
              <Button
                size="lg"
                className="h-12 w-full bg-white px-6 text-base font-semibold text-black hover:bg-white/90 sm:h-auto sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
                asChild={!!primaryAction.href}
                onClick={primaryAction.onClick}
              >
                {primaryAction.href ? (
                  <a href={primaryAction.href}>{primaryAction.label}</a>
                ) : (
                  primaryAction.label
                )}
              </Button>
            )}

            {secondaryAction && (
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full border-white/50 px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white sm:h-auto sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
                asChild={!!secondaryAction.href}
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.href ? (
                  <a href={secondaryAction.href}>{secondaryAction.label}</a>
                ) : (
                  secondaryAction.label
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
