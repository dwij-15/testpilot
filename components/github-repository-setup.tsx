"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, GitBranch, Check, Loader2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function GitHubRepositorySetup() {
  const [repoType, setRepoType] = useState<"new" | "existing">("new")
  const [repoName, setRepoName] = useState("ai-test-automation")
  const [repoUrl, setRepoUrl] = useState("")
  const [isPrivate, setIsPrivate] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [error, setError] = useState("")

  const handleConnect = async () => {
    setIsLoading(true)
    setError("")

    // Simulate API call to GitHub
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate successful connection
      setIsConnected(true)

      // In a real implementation, this would be the actual repository URL
      if (repoType === "new") {
        setRepoUrl(`https://github.com/yourusername/${repoName}`)
      }
    } catch (err) {
      setError("Failed to connect to GitHub. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Github className="h-6 w-6" />
          GitHub Repository Setup
        </CardTitle>
        <CardDescription>Connect your AI Test Automation project to a GitHub repository</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {isConnected ? (
          <Alert className="bg-green-50 border-green-200">
            <Check className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Connected Successfully</AlertTitle>
            <AlertDescription className="text-green-700">Your project is now connected to {repoUrl}</AlertDescription>
          </Alert>
        ) : (
          <>
            <div className="space-y-4">
              <RadioGroup
                defaultValue={repoType}
                onValueChange={(value) => setRepoType(value as "new" | "existing")}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="new" id="new-repo" />
                  <Label htmlFor="new-repo">Create a new repository</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="existing" id="existing-repo" />
                  <Label htmlFor="existing-repo">Use an existing repository</Label>
                </div>
              </RadioGroup>
            </div>

            {repoType === "new" ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="repo-name">Repository Name</Label>
                  <Input
                    id="repo-name"
                    value={repoName}
                    onChange={(e) => setRepoName(e.target.value)}
                    placeholder="e.g., ai-test-automation"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="private-repo"
                    checked={isPrivate}
                    onChange={(e) => setIsPrivate(e.target.checked)}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label htmlFor="private-repo">Private repository</Label>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="repo-url">Repository URL</Label>
                <Input
                  id="repo-url"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  placeholder="https://github.com/yourusername/repository"
                />
              </div>
            )}
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {!isConnected ? (
          <Button
            onClick={handleConnect}
            disabled={isLoading || (repoType === "existing" && !repoUrl)}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <Github className="mr-2 h-4 w-4" />
                {repoType === "new" ? "Create and Connect Repository" : "Connect Repository"}
              </>
            )}
          </Button>
        ) : (
          <div className="flex gap-4 w-full">
            <Button variant="outline" className="flex-1">
              <GitBranch className="mr-2 h-4 w-4" />
              View Repository
            </Button>
            <Button className="flex-1">Continue to Deployment</Button>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

