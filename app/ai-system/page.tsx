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
        sampleResult = `# UI Test Plan Generated from Screenshot1. Functional Test Cases
Verify user login functionality with valid and invalid credentials.

Test form validation for all required fields.

Validate error messages for invalid inputs.

Check navigation between all major screens.

Verify data persistence across sessions.

Ensure search functionality returns correct results.

Test CRUD operations (Create, Read, Update, Delete) for user data.

Validate logout functionality and session expiration handling.

Test user roles and permissions.

Check that email verification and password reset processes work correctly.

2. UI/UX Test Cases
Validate responsive design on mobile, tablet, and desktop.

Check color contrast for accessibility compliance (WCAG standards).

Verify all buttons and interactive elements have proper hover states.

Test keyboard navigation for accessibility compliance.

Validate form field focus states and tab order.

Check typography consistency (font sizes, colors, spacing).

Ensure correct alignment of elements across different screen sizes.

Verify animations and transitions work smoothly.

Test dark mode or theme switching functionality (if available).

Ensure error/success messages are readable and well-positioned.

3. Performance Test Cases
Measure page load time under various network conditions.

Test application behavior under high user load.

Validate API response times for critical operations.

Check memory usage during extended application use.

Test application startup time on various devices.

Simulate stress testing by increasing concurrent users.

Evaluate database query execution times.

Measure time taken for complex computations.

Test for performance degradation over time (long-duration tests).

Check response time of third-party integrations (if any).

4. Security Test Cases
Validate input sanitization for all form fields.

Test for common vulnerabilities like SQL injection, XSS, CSRF.

Check secure cookie handling and session management.

Verify proper implementation of HTTPS and data encryption.

Test error handling to ensure no sensitive information is exposed.

Validate user password strength enforcement.

Test for improper access to restricted pages.

Ensure secure API key storage in environment variables.

Test brute force attack protection on login screens.

Check for proper log-out and session timeout implementation.

5. API Test Cases
Validate API response codes (200, 400, 401, 403, 500).

Check API response times under different loads.

Test input validation for API requests.

Verify authentication and authorization mechanisms.

Validate API error messages for incorrect requests.

Check API behavior when required fields are missing.

Test API response consistency across versions.

Simulate multiple concurrent API calls.

Ensure proper CORS policy implementation.

Verify API rate limiting and throttling behavior.

6. Cross-browser Testing
Verify consistent appearance in Chrome, Firefox, Safari, and Edge.

Test responsive behavior across different viewport sizes.

Validate touch interactions on mobile devices.

Check font rendering across different browsers.

Test performance metrics across browser environments.

Ensure forms and modals behave consistently across browsers.

Check local storage, cookies, and session behavior.

Validate JavaScript compatibility on different browser engines.

Test video and media content playback across browsers.

Ensure CSS and animations work smoothly everywhere.

7. Test Cases for URL-based Analysis
Verify homepage links and redirections.

Test URL encoding/decoding behavior.

Validate the website's HTTPS redirection.

Check for broken links using automated tools.

Ensure URL parameters do not expose sensitive data.

Test canonical URLs for proper SEO indexing.

Validate the website’s sitemap.xml and robots.txt.

Verify Open Graph and meta tags for social media previews.

Ensure error pages (404, 500) are properly handled.

Check URL-based language switching (if applicable).

8. CI/CD Testing
Verify automated test execution in CI/CD pipelines.

Ensure proper rollback mechanisms in case of failed deployments.

Test environment variables and secrets management.

Validate automated code linting and formatting checks.

Verify build time performance for faster deployments.

Check for proper deployment logs and error tracking.

Test integration of external APIs in CI/CD pipelines.

Ensure feature flags work correctly in different environments.

Validate blue-green or canary deployment mechanisms.

Monitor real-time alerts for deployment failures.

9. File Upload Test Cases (Images, PDFs, etc.)
Verify allowed file formats for uploads.

Test maximum and minimum file size limits.

Check error handling for invalid file types.

Ensure secure storage of uploaded files.

Validate file preview functionality before upload.

Test file compression for optimal storage use.

Verify correct file retrieval after upload.

Ensure multi-file uploads work correctly.

Test file upload behavior on slow networks.

Check access control for uploaded files (e.g., private vs. public).

10. AI Model Testing (If applicable)
Validate accuracy of AI-generated responses.

Test AI model behavior with edge cases and adversarial inputs.

Verify response consistency across multiple runs.

Ensure the AI model handles bias mitigation properly.

Test model retraining and deployment processes.

Check AI system response times for real-time applications.

Verify AI-generated test cases align with expected business logic.

Validate AI model’s integration with front-end systems.

Test fallback mechanisms when AI model fails.

Ensure compliance with AI ethics and data privacy policies.
1. Functional Test Cases
Verify user login functionality with valid and invalid credentials.

Test form validation for all required fields.

Validate error messages for invalid inputs.

Check navigation between all major screens.

Verify data persistence across sessions.

Ensure search functionality returns correct results.

Test CRUD operations (Create, Read, Update, Delete) for user data.

Validate logout functionality and session expiration handling.

Test user roles and permissions.

Check that email verification and password reset processes work correctly.

2. UI/UX Test Cases
Validate responsive design on mobile, tablet, and desktop.

Check color contrast for accessibility compliance (WCAG standards).

Verify all buttons and interactive elements have proper hover states.

Test keyboard navigation for accessibility compliance.

Validate form field focus states and tab order.

Check typography consistency (font sizes, colors, spacing).

Ensure correct alignment of elements across different screen sizes.

Verify animations and transitions work smoothly.

Test dark mode or theme switching functionality (if available).

Ensure error/success messages are readable and well-positioned.

3. Performance Test Cases
Measure page load time under various network conditions.

Test application behavior under high user load.

Validate API response times for critical operations.

Check memory usage during extended application use.

Test application startup time on various devices.

Simulate stress testing by increasing concurrent users.

Evaluate database query execution times.

Measure time taken for complex computations.

Test for performance degradation over time (long-duration tests).

Check response time of third-party integrations (if any).

4. Security Test Cases
Validate input sanitization for all form fields.

Test for common vulnerabilities like SQL injection, XSS, CSRF.

Check secure cookie handling and session management.

Verify proper implementation of HTTPS and data encryption.

Test error handling to ensure no sensitive information is exposed.

Validate user password strength enforcement.

Test for improper access to restricted pages.

Ensure secure API key storage in environment variables.

Test brute force attack protection on login screens.

Check for proper log-out and session timeout implementation.

5. API Test Cases
Validate API response codes (200, 400, 401, 403, 500).

Check API response times under different loads.

Test input validation for API requests.

Verify authentication and authorization mechanisms.

Validate API error messages for incorrect requests.

Check API behavior when required fields are missing.

Test API response consistency across versions.

Simulate multiple concurrent API calls.

Ensure proper CORS policy implementation.

Verify API rate limiting and throttling behavior.

6. Cross-browser Testing
Verify consistent appearance in Chrome, Firefox, Safari, and Edge.

Test responsive behavior across different viewport sizes.

Validate touch interactions on mobile devices.

Check font rendering across different browsers.

Test performance metrics across browser environments.

Ensure forms and modals behave consistently across browsers.

Check local storage, cookies, and session behavior.

Validate JavaScript compatibility on different browser engines.

Test video and media content playback across browsers.

Ensure CSS and animations work smoothly everywhere.

7. Test Cases for URL-based Analysis
Verify homepage links and redirections.

Test URL encoding/decoding behavior.

Validate the website's HTTPS redirection.

Check for broken links using automated tools.

Ensure URL parameters do not expose sensitive data.

Test canonical URLs for proper SEO indexing.

Validate the website’s sitemap.xml and robots.txt.

Verify Open Graph and meta tags for social media previews.

Ensure error pages (404, 500) are properly handled.

Check URL-based language switching (if applicable).

8. CI/CD Testing
Verify automated test execution in CI/CD pipelines.

Ensure proper rollback mechanisms in case of failed deployments.

Test environment variables and secrets management.

Validate automated code linting and formatting checks.

Verify build time performance for faster deployments.

Check for proper deployment logs and error tracking.

Test integration of external APIs in CI/CD pipelines.

Ensure feature flags work correctly in different environments.

Validate blue-green or canary deployment mechanisms.

Monitor real-time alerts for deployment failures.

9. File Upload Test Cases (Images, PDFs, etc.)
Verify allowed file formats for uploads.

Test maximum and minimum file size limits.

Check error handling for invalid file types.

Ensure secure storage of uploaded files.

Validate file preview functionality before upload.

Test file compression for optimal storage use.

Verify correct file retrieval after upload.

Ensure multi-file uploads work correctly.

Test file upload behavior on slow networks.

Check access control for uploaded files (e.g., private vs. public).

10. AI Model Testing (If applicable)
Validate accuracy of AI-generated responses.

Test AI model behavior with edge cases and adversarial inputs.

Verify response consistency across multiple runs.

Ensure the AI model handles bias mitigation properly.

Test model retraining and deployment processes.

Check AI system response times for real-time applications.

Verify AI-generated test cases align with expected business logic.

Validate AI model’s integration with front-end systems.

Test fallback mechanisms when AI model fails.

Ensure compliance with AI ethics and data privacy policies.
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

