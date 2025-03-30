"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, Save, Loader2, Check, AlertCircle, Key } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type EnvVar = {
  id: string
  key: string
  value: string
  isSecret: boolean
}

export default function EnvironmentVariablesSetup() {
  const [envVars, setEnvVars] = useState<EnvVar[]>([
    { id: "1", key: "OPENAI_API_KEY", value: "", isSecret: true },
    { id: "2", key: "NEXT_PUBLIC_APP_URL", value: "", isSecret: false },
  ])
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [error, setError] = useState("")

  const addEnvVar = () => {
    const newId = Date.now().toString()
    setEnvVars([...envVars, { id: newId, key: "", value: "", isSecret: false }])
  }

  const removeEnvVar = (id: string) => {
    setEnvVars(envVars.filter((env) => env.id !== id))
  }

  const updateEnvVar = (id: string, field: keyof EnvVar, value: string | boolean) => {
    setEnvVars(envVars.map((env) => (env.id === id ? { ...env, [field]: value } : env)))
  }

  const handleSave = async () => {
    setIsSaving(true)
    setError("")

    // Validate environment variables
    const emptyKeys = envVars.some((env) => !env.key.trim())
    if (emptyKeys) {
      setError("All environment variable keys must be filled.")
      setIsSaving(false)
      return
    }

    // Simulate API call to save environment variables
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSaved(true)

      // Reset saved state after 3 seconds
      setTimeout(() => {
        setIsSaved(false)
      }, 3000)
    } catch (err) {
      setError("Failed to save environment variables. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="h-6 w-6" />
          Environment Variables
        </CardTitle>
        <CardDescription>Configure environment variables for your AI Test Automation project</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {isSaved && (
          <Alert className="bg-green-50 border-green-200">
            <Check className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Saved Successfully</AlertTitle>
            <AlertDescription className="text-green-700">Your environment variables have been saved.</AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          {envVars.map((env) => (
            <div key={env.id} className="flex gap-4 items-start">
              <div className="flex-1 space-y-2">
                <Label htmlFor={`key-${env.id}`}>Key</Label>
                <Input
                  id={`key-${env.id}`}
                  value={env.key}
                  onChange={(e) => updateEnvVar(env.id, "key", e.target.value)}
                  placeholder="e.g., OPENAI_API_KEY"
                />
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor={`value-${env.id}`}>Value</Label>
                <Input
                  id={`value-${env.id}`}
                  type={env.isSecret ? "password" : "text"}
                  value={env.value}
                  onChange={(e) => updateEnvVar(env.id, "value", e.target.value)}
                  placeholder={env.isSecret ? "••••••••" : "value"}
                />
              </div>
              <div className="pt-8 flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`secret-${env.id}`}
                  checked={env.isSecret}
                  onChange={(e) => updateEnvVar(env.id, "isSecret", e.target.checked)}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Label htmlFor={`secret-${env.id}`} className="text-sm">
                  Secret
                </Label>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="mt-8 text-gray-500 hover:text-red-500"
                onClick={() => removeEnvVar(env.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <Button variant="outline" onClick={addEnvVar} className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add Environment Variable
        </Button>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave} disabled={isSaving} className="w-full">
          {isSaving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Environment Variables
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

