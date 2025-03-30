import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileText, ImageIcon, LinkIcon, Send, BarChart2 } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">How to Use TestPilot</h1>
        <p className="text-xl text-muted-foreground mb-12">
          A step-by-step guide to generating and analyzing test cases with our AI-powered platform
        </p>

        <div className="space-y-16">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                Step 1
              </div>
              <h2 className="text-3xl font-bold mb-4">Choose Your Input Method</h2>
              <p className="text-lg text-muted-foreground mb-6">
                TestPilot supports multiple input methods to generate test cases. Select the one that best fits your
                needs:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    <strong>Text:</strong> Describe your application or paste requirements
                  </span>
                </li>
                <li className="flex items-start">
                  <ImageIcon className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    <strong>Image:</strong> Upload screenshots, mockups, or design files
                  </span>
                </li>
                <li className="flex items-start">
                  <LinkIcon className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>
                    <strong>URL:</strong> Enter a website URL for analysis
                  </span>
                </li>
              </ul>
              <Button asChild className="group">
                <Link href="/ai-system">
                  Try it now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <div className="bg-muted/50 aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="flex justify-center space-x-4 mb-6">
                      <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-10 w-10 text-primary" />
                      </div>
                      <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center">
                        <ImageIcon className="h-10 w-10 text-primary" />
                      </div>
                      <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center">
                        <LinkIcon className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">Input selection interface</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center md:order-last">
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <div className="bg-muted/50 aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                        <Send className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">AI processing visualization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div>
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                Step 2
              </div>
              <h2 className="text-3xl font-bold mb-4">AI Processing</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Once you've provided your input, our advanced AI system will:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-2">
                    1
                  </span>
                  <span>Analyze your input to understand the application structure</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-2">
                    2
                  </span>
                  <span>Identify key functionality and user interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-2">
                    3
                  </span>
                  <span>Generate comprehensive test cases based on best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-2">
                    4
                  </span>
                  <span>Organize test cases by category (functional, UI, performance, etc.)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                Step 3
              </div>
              <h2 className="text-3xl font-bold mb-4">Review and Export</h2>
              <p className="text-lg text-muted-foreground mb-6">
                After processing, you'll receive a comprehensive set of test cases that you can:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-2">
                    1
                  </span>
                  <span>Review directly in the TestPilot interface</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-2">
                    2
                  </span>
                  <span>Copy to clipboard for use in your testing tools</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-2">
                    3
                  </span>
                  <span>Download as a markdown file for documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-2">
                    4
                  </span>
                  <span>Save to your TestPilot account for future reference</span>
                </li>
              </ul>
            </div>
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <div className="bg-muted/50 aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-full h-32 rounded-lg bg-card border border-border mb-4 flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">Generated test cases preview</p>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline" size="sm" className="text-xs">
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center md:order-last">
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <div className="bg-muted/50 aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="flex justify-center mb-6">
                      <BarChart2 className="h-24 w-24 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Analytics dashboard preview</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div>
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4">
                Step 4
              </div>
              <h2 className="text-3xl font-bold mb-4">Track and Analyze</h2>
              <p className="text-lg text-muted-foreground mb-6">Use our analytics dashboard to:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-2">
                    1
                  </span>
                  <span>Track test case execution and results</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-2">
                    2
                  </span>
                  <span>Visualize test coverage across your application</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-2">
                    3
                  </span>
                  <span>Identify trends and potential issues</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-2">
                    4
                  </span>
                  <span>Generate reports for stakeholders</span>
                </li>
              </ul>
              <Button asChild className="group">
                <Link href="/analytics">
                  Explore Analytics
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Try TestPilot today and revolutionize your testing process with the power of AI.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
          >
            <Link href="/ai-system">
              Generate Your First Test Cases
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

