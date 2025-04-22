import { Card, CardContent } from "@/components/ui/card"
import { Database, PlusCircle, CheckCircle, Clock, Eye } from "lucide-react"

interface StrategyStatsProps {
  title: string
  count: string
  icon: string
  color: string
  iconColor: string
}

export function StrategyStats({ title, count, icon, color, iconColor }: StrategyStatsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "database":
        return <Database className={`h-6 w-6 ${iconColor}`} />
      case "plus-circle":
        return <PlusCircle className={`h-6 w-6 ${iconColor}`} />
      case "check-circle":
        return <CheckCircle className={`h-6 w-6 ${iconColor}`} />
      case "clock":
        return <Clock className={`h-6 w-6 ${iconColor}`} />
      case "eye":
        return <Eye className={`h-6 w-6 ${iconColor}`} />
      default:
        return <Database className={`h-6 w-6 ${iconColor}`} />
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{count}</h3>
          </div>
          <div className={`p-2 rounded-full ${color}`}>{getIcon(icon)}</div>
        </div>
      </CardContent>
    </Card>
  )
}
