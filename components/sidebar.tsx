"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  LayoutDashboard,
  Settings,
  Bell,
  HelpCircle,
  BarChart,
  PieChart,
  TrendingUp,
  Database,
  FileText,
  Briefcase,
  Activity,
  GitBranch,
  History,
  Layers,
  Zap,
  Sliders,
  Share2,
  Target,
  Calendar,
  CheckSquare,
  Percent,
  DollarSign,
  LineChart,
  Clock,
  Clipboard,
  Bot,
  AlertCircle,
} from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="h-full overflow-y-auto py-2">
      <nav className="grid items-start px-4 text-sm font-medium gap-1">
        {/* 仪表盘部分 - 包含原绩效分析的菜单项 */}
        <div className="px-3 py-3 text-sm font-semibold text-gray-500 dark:text-gray-400">仪表盘</div>
        <Link href="/dashboard/overview" className={`sidebar-item ${isActive("/dashboard/overview") ? "active" : ""}`}>
          <LayoutDashboard className="sidebar-item-icon" />
          交易概览
        </Link>
        <Link
          href="/dashboard/daily-report"
          className={`sidebar-item ${isActive("/dashboard/daily-report") ? "active" : ""}`}
        >
          <Clock className="sidebar-item-icon" />
          每日报告
        </Link>
        <Link
          href="/dashboard/strategy-performance"
          className={`sidebar-item ${isActive("/dashboard/strategy-performance") ? "active" : ""}`}
        >
          <LineChart className="sidebar-item-icon" />
          策略收益
        </Link>
        <Link
          href="/dashboard/execution-analysis"
          className={`sidebar-item ${isActive("/dashboard/execution-analysis") ? "active" : ""}`}
        >
          <DollarSign className="sidebar-item-icon" />
          执行分析
        </Link>

        {/* 策略管理 */}
        <div className="px-3 py-3 text-sm font-semibold text-gray-500 dark:text-gray-400">策略管理</div>
        <Link href="/strategies/list" className={`sidebar-item ${isActive("/strategies/list") ? "active" : ""}`}>
          <Briefcase className="sidebar-item-icon" />
          策略列表
        </Link>
        <Link href="/strategies/create" className={`sidebar-item ${isActive("/strategies/create") ? "active" : ""}`}>
          <GitBranch className="sidebar-item-icon" />
          创建策略
        </Link>
        <Link
          href="/strategies/templates"
          className={`sidebar-item ${isActive("/strategies/templates") ? "active" : ""}`}
        >
          <Layers className="sidebar-item-icon" />
          策略模板
        </Link>
        <Link
          href="/strategies/indicators"
          className={`sidebar-item ${isActive("/strategies/indicators") ? "active" : ""}`}
        >
          <Activity className="sidebar-item-icon" />
          技术指标
        </Link>
        <Link href="/strategies/signals" className={`sidebar-item ${isActive("/strategies/signals") ? "active" : ""}`}>
          <Zap className="sidebar-item-icon" />
          交易信号
        </Link>
        <Link
          href="/strategies/optimization"
          className={`sidebar-item ${isActive("/strategies/optimization") ? "active" : ""}`}
        >
          <Sliders className="sidebar-item-icon" />
          策略优化
        </Link>
        <Link
          href="/strategies/position"
          className={`sidebar-item ${isActive("/strategies/position") ? "active" : ""}`}
        >
          <Percent className="sidebar-item-icon" />
          仓位管理
        </Link>

        {/* 交易计划 */}
        <div className="px-3 py-3 text-sm font-semibold text-gray-500 dark:text-gray-400">交易计划</div>
        <Link href="/trading-plans/list" className={`sidebar-item ${isActive("/trading-plans/list") ? "active" : ""}`}>
          <Clipboard className="sidebar-item-icon" />
          计划列表
        </Link>
        <Link
          href="/trading-plans/create"
          className={`sidebar-item ${isActive("/trading-plans/create") ? "active" : ""}`}
        >
          <Bot className="sidebar-item-icon" />
          AI生成计划
        </Link>
        <Link
          href="/trading-plans/calendar"
          className={`sidebar-item ${isActive("/trading-plans/calendar") ? "active" : ""}`}
        >
          <Calendar className="sidebar-item-icon" />
          计划日历
        </Link>
        <Link
          href="/trading-plans/tracking"
          className={`sidebar-item ${isActive("/trading-plans/tracking") ? "active" : ""}`}
        >
          <CheckSquare className="sidebar-item-icon" />
          执行跟踪
        </Link>
        <Link
          href="/trading-plans/alerts"
          className={`sidebar-item ${isActive("/trading-plans/alerts") ? "active" : ""}`}
        >
          <AlertCircle className="sidebar-item-icon" />
          计划预警
        </Link>

        {/* 数据管理 */}
        <div className="px-3 py-3 text-sm font-semibold text-gray-500 dark:text-gray-400">数据管理</div>
        <Link href="/data/market" className={`sidebar-item ${isActive("/data/market") ? "active" : ""}`}>
          <TrendingUp className="sidebar-item-icon" />
          行情数据
        </Link>
        <Link href="/data/stocks" className={`sidebar-item ${isActive("/data/stocks") ? "active" : ""}`}>
          <BarChart className="sidebar-item-icon" />
          股票数据
        </Link>
        <Link href="/data/fundamental" className={`sidebar-item ${isActive("/data/fundamental") ? "active" : ""}`}>
          <FileText className="sidebar-item-icon" />
          基本面数据
        </Link>
        <Link href="/data/analysis" className={`sidebar-item ${isActive("/data/analysis") ? "active" : ""}`}>
          <PieChart className="sidebar-item-icon" />
          数据分析
        </Link>
        <Link href="/data/import" className={`sidebar-item ${isActive("/data/import") ? "active" : ""}`}>
          <Database className="sidebar-item-icon" />
          数据导入
        </Link>

        {/* 回测管理 */}
        <div className="px-3 py-3 text-sm font-semibold text-gray-500 dark:text-gray-400">回测管理</div>
        <Link href="/backtest/create" className={`sidebar-item ${isActive("/backtest/create") ? "active" : ""}`}>
          <Target className="sidebar-item-icon" />
          创建回测
        </Link>
        <Link href="/backtest/history" className={`sidebar-item ${isActive("/backtest/history") ? "active" : ""}`}>
          <History className="sidebar-item-icon" />
          回测历史
        </Link>
        <Link href="/backtest/reports" className={`sidebar-item ${isActive("/backtest/reports") ? "active" : ""}`}>
          <BarChart3 className="sidebar-item-icon" />
          回测报告
        </Link>
        <Link
          href="/backtest/comparison"
          className={`sidebar-item ${isActive("/backtest/comparison") ? "active" : ""}`}
        >
          <Share2 className="sidebar-item-icon" />
          策略对比
        </Link>
        <Link
          href="/backtest/parameters"
          className={`sidebar-item ${isActive("/backtest/parameters") ? "active" : ""}`}
        >
          <Sliders className="sidebar-item-icon" />
          参数优化
        </Link>

        {/* 系统设置 */}
        <div className="px-3 py-3 text-sm font-semibold text-gray-500 dark:text-gray-400">系统设置</div>
        <Link href="/settings/general" className={`sidebar-item ${isActive("/settings/general") ? "active" : ""}`}>
          <Settings className="sidebar-item-icon" />
          系统设置
        </Link>
        <Link
          href="/settings/notifications"
          className={`sidebar-item ${isActive("/settings/notifications") ? "active" : ""}`}
        >
          <Bell className="sidebar-item-icon" />
          通知中心
        </Link>
        <Link href="/settings/help" className={`sidebar-item ${isActive("/settings/help") ? "active" : ""}`}>
          <HelpCircle className="sidebar-item-icon" />
          帮助文档
        </Link>
      </nav>
    </div>
  )
}
