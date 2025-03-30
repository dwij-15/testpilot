import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GitHubRepositorySetup from "@/components/github-repository-setup"
import VercelDeploymentSetup from "@/components/vercel-deployment-setup"
import EnvironmentVariablesSetup from "@/components/environment-variables-setup"

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Project Setup</h1>
          <p className="text-gray-600 mb-8">
            Connect your AI Test Automation project to GitHub and deploy it on Vercel
          </p>

          <Tabs defaultValue="github" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="github">GitHub Repository</TabsTrigger>
              <TabsTrigger value="env">Environment Variables</TabsTrigger>
              <TabsTrigger value="deploy">Vercel Deployment</TabsTrigger>
            </TabsList>
            <TabsContent value="github">
              <GitHubRepositorySetup />
            </TabsContent>
            <TabsContent value="env">
              <EnvironmentVariablesSetup />
            </TabsContent>
            <TabsContent value="deploy">
              <VercelDeploymentSetup />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

