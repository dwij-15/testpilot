import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RepositoryLinkPage() {
  // In a real application, these would be fetched from your backend or state management
  const repositoryUrl = "https://github.com/yourusername/ai-test-automation"
  const deploymentUrl = "https://ai-test-automation.vercel.app"

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Setup Complete</h1>
          <p className="text-gray-600 mb-8">
            Your AI Test Automation project has been successfully connected to GitHub and deployed on Vercel
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-6 w-6 text-green-600" />
                Repository and Deployment Links
              </CardTitle>
              <CardDescription>Your project is now live and ready to use</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium">GitHub Repository:</span>
                  <a
                    href={repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    {repositoryUrl}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>

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
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/">Return to Dashboard</Link>
              </Button>
              <Button asChild>
                <a href={deploymentUrl} target="_blank" rel="noopener noreferrer">
                  Visit Deployed Site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Next Steps</h3>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
              <li>Update your README.md with specific project details</li>
              <li>Set up CI/CD workflows for automated testing</li>
              <li>Configure custom domains in the Vercel dashboard</li>
              <li>Invite team members to collaborate on the repository</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

