import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
          >
            TestPilot
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-foreground/70 hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/demo" className="text-foreground/70 hover:text-primary transition-colors">
            How it works
          </Link>
          <Link href="/analytics" className="text-foreground/70 hover:text-primary transition-colors">
            Analytics
          </Link>
          <Link href="/technology" className="text-foreground/70 hover:text-primary transition-colors">
            Technology
          </Link>
          <Link href="/docs" className="text-foreground/70 hover:text-primary transition-colors">
            Documentation
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/ai-system">Explore TestPilot</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

