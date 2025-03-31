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

📄 Text-Based Uploads (Code, Documents, Scripts, Configuration Files, etc.)
White Box Testing:
Code Coverage Analysis: Ensure all logic branches, loops, and conditions are executed.

Control Flow Testing: Verify correct execution order of statements and loops.

Data Flow Testing: Track variable usage and prevent uninitialized data errors.

Unit Testing: Validate individual functions and methods with expected inputs/outputs.

Mutation Testing: Introduce small changes to the code and ensure tests detect them.

Static Code Analysis: Scan for syntax errors, vulnerabilities, and code smells.

Security Review: Identify hardcoded secrets, SQL injections, and authentication flaws.

Dependency Testing: Ensure correct versions of external libraries and APIs are used.

Exception Handling Checks: Test system behavior when encountering unexpected inputs.

Memory & Resource Usage: Detect memory leaks, inefficiencies, or unhandled allocations.

Black Box Testing:
Functional Validation: Ensure the software meets the intended requirements.

Boundary Value Analysis: Test limits of input fields, calculations, and constraints.

Equivalence Partitioning: Verify representative inputs for different test cases.

State Transition Testing: Analyze expected behaviors for different system states.

Error Handling & Recovery: Ensure the system recovers from failures gracefully.

Regression Testing: Verify that new changes do not break existing functionality.

Security Testing: Attempt SQL injections, XSS attacks, and API endpoint exploits.

Localization & Internationalization: Validate support for multiple languages/formats.

Usability Testing: Ensure user-friendliness, readability, and consistency.

Performance Testing: Measure response times and system scalability under load.'
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

