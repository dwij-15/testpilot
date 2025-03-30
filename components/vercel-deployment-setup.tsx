"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Loader2, AlertCircle, ExternalLink, RefreshCw } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export default function VercelDeploymentSetup() {
  const [isDeploying, setIsDeploying] = useState(false)
  const [deploymentStatus, setDeploymentStatus] = useState<"idle" | "building" | "deployed" | "failed">("idle")
  const [deploymentUrl, setDeploymentUrl] = useState("")
  const [deploymentProgress, setDeploymentProgress] = useState(0)
  const [error, setError] = useState("")

  const handleDeploy = async () => {
    setIsDeploying(true)
    setDeploymentStatus("building")
    setError("")

    // Simulate deployment process
    try {
      // Simulate build progress
      for (let i = 0; i <= 100; i += 10) {
        setDeploymentProgress(i)
        await new Promise((resolve) => setTimeout(resolve, 500))
      }

      // Simulate successful deployment
      setDeploymentStatus("deployed")
      setDeploymentUrl("https://ai-test-automation.vercel.app")
    } catch (err) {
      setDeploymentStatus("failed")
      setError("Deployment failed. Please check your configuration and try again.")
    } finally {
      setIsDeploying(false)
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <svg className="h-6 w-6" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="black" />
          </svg>
          Vercel Deployment Setup
        </CardTitle>
        <CardDescription>Deploy your AI Test Automation project to Vercel</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Deployment Failed</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {deploymentStatus === "building" && (
          <div className="space-y-4">
            <Alert className="bg-blue-50 border-blue-200">
              <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />
              <AlertTitle className="text-blue-800">Deployment in Progress</AlertTitle>
              <AlertDescription className="text-blue-700">
                Building and deploying your application to Vercel...
              </AlertDescription>
            </Alert>
            <Progress value={deploymentProgress} className="h-2" />
            <p className="text-sm text-gray-500 text-center">{deploymentProgress}% complete</p>
          </div>
        )}

        {deploymentStatus === "deployed" && (
          <div className="space-y-4">
            <Alert className="bg-green-50 border-green-200">
              <Check className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">Deployment Successful</AlertTitle>
              <AlertDescription className="text-green-700">
                Your application has been successfully deployed to Vercel.
              </AlertDescription>
            </Alert>

            <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-medium">Deployment URL:</span>
                <a
                  href={deploymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center"
                >
                  {deploymentUrl}
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        )}

        {deploymentStatus === "idle" && (
          <div className="space-y-4">
            <p className="text-gray-600">
              Click the button below to deploy your AI Test Automation project to Vercel. This will:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Push all project files to the connected GitHub repository</li>
              <li>Set up automatic deployments from the main branch</li>
              <li>Configure necessary environment variables</li>
              <li>Generate a public URL for your application</li>
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {deploymentStatus === "idle" || deploymentStatus === "failed" ? (
          <Button onClick={handleDeploy} disabled={isDeploying} className="w-full">
            {isDeploying ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deploying...
              </>
            ) : (
              <>
                <svg className="mr-2 h-4 w-4" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor" />
                </svg>
                Deploy to Vercel
              </>
            )}
          </Button>
        ) : deploymentStatus === "deployed" ? (
          <div className="flex gap-4 w-full">
            <Button variant="outline" className="flex-1" onClick={handleDeploy}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Redeploy
            </Button>
            <Button className="flex-1" onClick={() => window.open(deploymentUrl, "_blank")}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Site
            </Button>
          </div>
        ) : (
          <Button disabled className="w-full">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Deploying...
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

