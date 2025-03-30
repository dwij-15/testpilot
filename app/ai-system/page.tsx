"use client"

import type React from "react"

import { useState, useRef } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, ImageIcon, LinkIcon, Upload, Send, Loader2, Download, Copy, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AISystemPage() {
  const [activeTab, setActiveTab] = useState("text")
  const [inputText, setInputText] = useState("")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [urlInput, setUrlInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [isCopied, setIsCopied] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleProcess = async () => {
    setIsProcessing(true)
    setResult(null)

    // Simulate API call to OpenAI
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000))

      let sampleResult = ""

      if (activeTab === "text") {
        sampleResult = `# Test Plan for ${inputText.substring(0, 30)}...

## Functional Test Cases:
1. Verify user login functionality
2. Test form validation for all required fields
3. Validate error messages for invalid inputs
4. Check navigation between all major screens
5. Verify data persistence across sessions

## UI Test Cases:
1. Validate responsive design on mobile, tablet, and desktop
2. Check color contrast for accessibility compliance
3. Verify all buttons and interactive elements have proper hover states
4. Test keyboard navigation for all interactive elements
5. Validate form field focus states and tab order

## Performance Test Cases:
1. Measure page load time under various network conditions
2. Test application behavior under high user load
3. Validate API response times for critical operations
4. Check memory usage during extended application use
5. Test application startup time on various devices`
      } else if (activeTab === "image") {
        sampleResult = `# UI Test Plan Generated from Screenshot

## Visual Elements:
1. Verify header layout and logo placement
2. Validate navigation menu structure and spacing
3. Check button styling consistency across the interface
4. Test form field alignment and grouping
5. Verify footer content and link placement

## Functional Tests:
1. Validate all navigation links lead to correct destinations
2. Test form submission with valid and invalid data
3. Verify responsive behavior at breakpoints: 320px, 768px, 1024px, 1440px
4. Check hover and active states for all interactive elements
5. Validate error message display for form validation

## Accessibility Tests:
1. Verify color contrast meets WCAG AA standards
2. Test keyboard navigation through all interactive elements
3. Validate heading hierarchy for screen readers
4. Ensure all images have appropriate alt text
5. Test focus indicators for visibility and clarity

## Performance Tests:
1. Measure time to interactive for main UI components
2. Validate smooth scrolling and animations
3. Check load time for images and media content
4. Test UI responsiveness during background operations
5. Verify state transitions and loading indicators`
      } else if (activeTab === "url") {
        sampleResult = `# Test Plan for URL: ${urlInput}

## Functional Test Cases:
1. Verify all links on the homepage are working correctly
2. Test user authentication flow (login/logout/registration)
3. Validate search functionality with various queries
4. Check form submissions and data handling
5. Test pagination and sorting functionality

## Cross-browser Testing:
1. Verify consistent appearance in Chrome, Firefox, Safari, and Edge
2. Test responsive behavior across different viewport sizes
3. Validate touch interactions on mobile devices
4. Check font rendering across different browsers
5. Test performance metrics across browser environments

## Security Testing:
1. Validate input sanitization for all form fields
2. Test for common vulnerabilities (XSS, CSRF)
3. Check secure cookie handling and session management
4. Verify proper implementation of HTTPS
5. Test error handling to ensure no sensitive information is exposed`
      }

      setResult(sampleResult)

      toast({
        title: "Processing complete",
        description: "Your test cases have been generated successfully.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Processing failed",
        description: "There was an error generating your test cases. Please try again.",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const handleCopyResult = () => {
    if (result) {
      navigator.clipboard.writeText(result)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)

      toast({
        title: "Copied to clipboard",
        description: "Test cases have been copied to your clipboard.",
      })
    }
  }

  const handleDownloadResult = () => {
    if (result) {
      const blob = new Blob([result], { type: "text/markdown" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "testpilot-test-cases.md"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      toast({
        title: "Download started",
        description: "Your test cases are being downloaded as a markdown file.",
      })
    }
  }

  const handleReset = () => {
    setInputText("")
    setImageFile(null)
    setImagePreview(null)
    setUrlInput("")
    setResult(null)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">TestPilot AI System</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Generate comprehensive test cases using our AI-powered system
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="text" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Text</span>
                    </TabsTrigger>
                    <TabsTrigger value="image" className="flex items-center gap-2">
                      <ImageIcon className="h-4 w-4" />
                      <span>Image</span>
                    </TabsTrigger>
                    <TabsTrigger value="url" className="flex items-center gap-2">
                      <LinkIcon className="h-4 w-4" />
                      <span>URL</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="text" className="mt-0">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="text-input">Enter requirements or description</Label>
                        <Textarea
                          id="text-input"
                          placeholder="Describe your application or paste requirements here..."
                          className="min-h-[200px] mt-2"
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="image" className="mt-0">
                    <div
                      className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                      />

                      {imagePreview ? (
                        <div className="space-y-4">
                          <img
                            src={imagePreview || "/placeholder.svg"}
                            alt="Preview"
                            className="max-h-[300px] mx-auto rounded-md"
                          />
                          <p className="text-sm text-muted-foreground">Click or drag to replace the image</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                          <p className="text-lg font-medium">Click to upload or drag and drop</p>
                          <p className="text-sm text-muted-foreground">
                            Upload a screenshot, mockup, or design file (PNG, JPG, GIF)
                          </p>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="url" className="mt-0">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="url-input">Enter website URL</Label>
                        <Input
                          id="url-input"
                          placeholder="https://example.com"
                          className="mt-2"
                          value={urlInput}
                          onChange={(e) => setUrlInput(e.target.value)}
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleReset}>
                Reset
              </Button>
              <Button
                onClick={handleProcess}
                disabled={
                  isProcessing ||
                  (activeTab === "text" && !inputText) ||
                  (activeTab === "image" && !imageFile) ||
                  (activeTab === "url" && !urlInput)
                }
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Generate Test Cases
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Generated Test Cases</h3>
                  {result && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" onClick={handleCopyResult} className="h-8 w-8">
                        {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <Button variant="outline" size="icon" onClick={handleDownloadResult} className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>

                <div className="flex-grow bg-muted/30 rounded-md p-4 overflow-auto">
                  {isProcessing ? (
                    <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
                      <Loader2 className="h-8 w-8 animate-spin mb-4" />
                      <p>Generating test cases...</p>
                    </div>
                  ) : result ? (
                    <pre className="whitespace-pre-wrap text-sm font-mono">{result}</pre>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
                      <p>Test cases will appear here</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

