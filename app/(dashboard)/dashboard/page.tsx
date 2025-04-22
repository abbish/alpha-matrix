// 这个文件负责将访问 "/dashboard" 的用户重定向到 "/dashboard/overview"
import { redirect } from "next/navigation"

export default function LegacyDashboardPage() {
  redirect("/dashboard/overview")
}
