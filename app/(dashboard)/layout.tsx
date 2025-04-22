import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { FixedFooter } from "@/components/fixed-footer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Left Sidebar - Fixed */}
        <aside className="w-52 border-r bg-gray-100/40 dark:bg-gray-800/40 shrink-0 h-[calc(100vh-4rem)] sticky top-16">
          <Sidebar />
        </aside>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">{children}</main>
        </div>
      </div>

      {/* Footer */}
      <FixedFooter simplified />
    </div>
  )
}
