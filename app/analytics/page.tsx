"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { Calendar, Filter, Download, RefreshCw } from "lucide-react"

// Sample data for charts
const testStatusData = [
  { name: "Passed", value: 68, color: "#10b981" },
  { name: "Failed", value: 12, color: "#ef4444" },
  { name: "Skipped", value: 8, color: "#f59e0b" },
  { name: "Blocked", value: 12, color: "#6b7280" },
]

const testTypeData = [
  { name: "Functional", passed: 42, failed: 8 },
  { name: "UI", passed: 35, failed: 5 },
  { name: "Performance", passed: 28, failed: 7 },
  { name: "Security", passed: 18, failed: 4 },
  { name: "Accessibility", passed: 15, failed: 6 },
]

const testHistoryData = [
  { date: "Jan", passed: 30, failed: 10, total: 40 },
  { date: "Feb", passed: 35, failed: 8, total: 43 },
  { date: "Mar", passed: 40, failed: 5, total: 45 },
  { date: "Apr", passed: 45, failed: 7, total: 52 },
  { date: "May", passed: 50, failed: 10, total: 60 },
  { date: "Jun", passed: 55, failed: 8, total: 63 },
  { date: "Jul", passed: 60, failed: 5, total: 65 },
]

const testReports = [
  { id: 1, name: "Login Page Tests", date: "2023-07-15", status: "Completed", passed: 18, failed: 2, total: 20 },
  { id: 2, name: "User Profile Tests", date: "2023-07-12", status: "Completed", passed: 15, failed: 0, total: 15 },
  { id: 3, name: "Payment Flow Tests", date: "2023-07-10", status: "Completed", passed: 22, failed: 3, total: 25 },
  { id: 4, name: "Dashboard Tests", date: "2023-07-05", status: "Completed", passed: 30, failed: 5, total: 35 },
  { id: 5, name: "Settings Page Tests", date: "2023-07-01", status: "Completed", passed: 12, failed: 3, total: 15 },
]

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [timeRange, setTimeRange] = useState("30d")

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-xl text-muted-foreground">Track and analyze your test results</p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <Calendar className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-0 space-y-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Tests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">100</div>
                  <p className="text-xs text-muted-foreground mt-1">+15% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Pass Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-500">85%</div>
                  <p className="text-xs text-muted-foreground mt-1">+5% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2.5s</div>
                  <p className="text-xs text-muted-foreground mt-1">-0.3s from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Failed Tests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-500">12</div>
                  <p className="text-xs text-muted-foreground mt-1">-3 from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Test Status Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={testStatusData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {testStatusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Test Results by Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={testTypeData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="passed" stackId="a" fill="#10b981" name="Passed" />
                        <Bar dataKey="failed" stackId="a" fill="#ef4444" name="Failed" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Test Results Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={testHistoryData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="total" stroke="#8884d8" name="Total Tests" />
                      <Line type="monotone" dataKey="passed" stroke="#10b981" name="Passed Tests" />
                      <Line type="monotone" dataKey="failed" stroke="#ef4444" name="Failed Tests" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Test Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Report Name</th>
                        <th className="text-left py-3 px-4 font-medium">Date</th>
                        <th className="text-left py-3 px-4 font-medium">Status</th>
                        <th className="text-left py-3 px-4 font-medium">Pass Rate</th>
                        <th className="text-left py-3 px-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testReports.map((report) => (
                        <tr key={report.id} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">{report.name}</td>
                          <td className="py-3 px-4">{report.date}</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400">
                              {report.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mr-2">
                                <div
                                  className="bg-primary h-2.5 rounded-full"
                                  style={{ width: `${(report.passed / report.total) * 100}%` }}
                                ></div>
                              </div>
                              <span>{Math.round((report.passed / report.total) * 100)}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                            <Button variant="ghost" size="sm">
                              Download
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Test History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={testHistoryData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="total" stroke="#8884d8" name="Total Tests" strokeWidth={2} />
                      <Line type="monotone" dataKey="passed" stroke="#10b981" name="Passed Tests" strokeWidth={2} />
                      <Line type="monotone" dataKey="failed" stroke="#ef4444" name="Failed Tests" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <SiteFooter />
    </div>
  )
}

