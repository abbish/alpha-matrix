"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Calendar,
  CreditCard,
  ImageIcon,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400">仪表盘</div>
            <Link href="/dashboard" className={`sidebar-item ${isActive("/dashboard") ? "active" : ""}`}>
              <LayoutDashboard className="sidebar-item-icon" />
              仪表盘
            </Link>
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400">交易应用</div>
            <Link href="/apps" className={`sidebar-item ${isActive("/apps") ? "active" : ""}`}>
              <BarChart3 className="sidebar-item-icon" />
              应用
            </Link>
            <Link href="/calendar" className={`sidebar-item ${isActive("/calendar") ? "active" : ""}`}>
              <Calendar className="sidebar-item-icon" />
              日历
            </Link>
            <Link href="/gallery" className={`sidebar-item ${isActive("/gallery") ? "active" : ""}`}>
              <ImageIcon className="sidebar-item-icon" />
              图库
            </Link>
            <Link href="/alerts" className={`sidebar-item ${isActive("/alerts") ? "active" : ""}`}>
              <CreditCard className="sidebar-item-icon" />
              交易提醒
            </Link>
            <Link href="/ecommerce" className={`sidebar-item ${isActive("/ecommerce") ? "active" : ""}`}>
              <ShoppingCart className="sidebar-item-icon" />
              电子商务
            </Link>
            <Link href="/strategies" className={`sidebar-item ${isActive("/strategies") ? "active" : ""}`}>
              <Users className="sidebar-item-icon" />
              策略
            </Link>
            <Link href="/settings" className={`sidebar-item ${isActive("/settings") ? "active" : ""}`}>
              <Settings className="sidebar-item-icon" />
              设置
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
