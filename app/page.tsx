import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Image, LinkIcon, Code, BarChart2 } from "lucide-react"
import TestAutomationHero from "@/components/test-automation-hero"
import FeatureCard from "@/components/feature-card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Making test automation <br /> intelligent for everyone
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-10">
              We're committed to revolutionizing the testing process with AI. Our platform analyzes requirements and
              designs to generate, execute, and evaluate test cases automatically, ensuring quality at every step of
              your development pipeline.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
              >
                <Link href="/ai-system">
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="px-8 py-6 text-lg">
                <Link href="/demo">View demo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Hero Visualization */}
        <TestAutomationHero />

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Multi-Input Test Generation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<FileText className="h-10 w-10 text-primary" />}
                title="Figma & PDF Analysis"
                description="Extract test cases directly from your design files. Our AI analyzes layouts, components, and interactions to create comprehensive test scenarios."
              />
              <FeatureCard
                icon={<Image className="h-10 w-10 text-primary" />}
                title="Image Recognition"
                description="Upload screenshots or mockups and let our AI identify UI elements and generate relevant test cases to validate their functionality."
              />
              <FeatureCard
                icon={<LinkIcon className="h-10 w-10 text-primary" />}
                title="URL & Web Analysis"
                description="Point to existing websites or applications, and our AI will crawl the interface to create test cases that ensure feature parity and compatibility."
              />
              <FeatureCard
                icon={<Code className="h-10 w-10 text-primary" />}
                title="AI-Powered Execution"
                description="Generate and run test scripts automatically with our advanced AI engine, which adapts to your application's unique requirements."
              />
              <FeatureCard
                icon={<BarChart2 className="h-10 w-10 text-primary" />}
                title="Real-time Analytics"
                description="Track test performance with interactive dashboards that provide insights into test coverage, success rates, and potential issues."
              />
              <FeatureCard
                icon={<ArrowRight className="h-10 w-10 text-primary" />}
                title="CI/CD Integration"
                description="Seamlessly integrate with your existing CI/CD pipelines to ensure continuous testing throughout your development process."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">How TestPilot Works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 rounded-lg border border-border shadow-sm bg-card">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Input Your Design</h3>
                <p className="text-muted-foreground">
                  Upload Figma designs, PDFs, images, or provide URLs to your application.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border border-border shadow-sm bg-card">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your inputs to identify test scenarios and generate comprehensive test cases.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border border-border shadow-sm bg-card">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Automated Execution</h3>
                <p className="text-muted-foreground">
                  Tests are automatically executed, with results and insights delivered through interactive dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section id="analytics" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6">Real-time Test Analytics</h2>
                <p className="text-xl text-foreground/70 mb-8">
                  Track your test history, filter results, and visualize performance metrics with our interactive
                  dashboards. Identify trends and make data-driven decisions to improve your testing strategy.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                  <Link href="/analytics">
                    Explore Analytics
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="md:w-1/2 bg-card p-6 rounded-lg shadow-lg">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Analytics Dashboard Preview</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section id="technology" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-16">Powered by Advanced Technology</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="p-6 rounded-lg border border-border shadow-sm bg-card">
                <h3 className="text-xl font-semibold mb-2">React & Next.js</h3>
                <p className="text-muted-foreground">Modern frontend framework for optimal performance</p>
              </div>
              <div className="p-6 rounded-lg border border-border shadow-sm bg-card">
                <h3 className="text-xl font-semibold mb-2">OpenAI GPT-4o</h3>
                <p className="text-muted-foreground">Advanced AI model for test generation and validation</p>
              </div>
              <div className="p-6 rounded-lg border border-border shadow-sm bg-card">
                <h3 className="text-xl font-semibold mb-2">Vercel AI SDK</h3>
                <p className="text-muted-foreground">Edge functions for efficient AI processing</p>
              </div>
              <div className="p-6 rounded-lg border border-border shadow-sm bg-card">
                <h3 className="text-xl font-semibold mb-2">Recharts</h3>
                <p className="text-muted-foreground">Interactive data visualization for analytics</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to transform your testing process?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Join the AI-powered testing revolution and ensure quality at every step of your development pipeline.
            </p>
            <Button asChild className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg group">
              <Link href="/ai-system">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

