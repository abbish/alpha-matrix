import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon } from "lucide-react"

interface StrategyCardProps {
  title: string
  category: string
  description: string
  progress: {
    completed: number
    total: number
  }
  team: string[]
  date: string
}

export function StrategyCard({ title, category, description, progress, team, date }: StrategyCardProps) {
  const getCategoryClass = (category: string) => {
    switch (category.toLowerCase()) {
      case "技术分析":
        return "card-status card-status-web"
      case "测试中":
        return "card-status card-status-testing"
      case "数据分析":
        return "card-status card-status-data"
      case "企业资源":
        return "card-status card-status-mobile"
      case "预测分析":
        return "card-status card-status-machine"
      case "ui设计":
        return "card-status card-status-crypto"
      case "云计算":
        return "card-status card-status-cloud"
      case "自动化交易":
        return "card-status card-status-game"
      default:
        return "card-status card-status-web"
    }
  }

  const progressPercentage = (progress.completed / progress.total) * 100

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <span className={getCategoryClass(category)}>{category}</span>
            <h3 className="text-lg font-semibold mt-2">{title}</h3>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">进度</span>
            <span className="font-medium">
              {progress.completed}/{progress.total}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <div className="flex -space-x-2">
          {team.map((avatar, index) => (
            <Avatar key={index} className="border-2 border-background h-8 w-8">
              <AvatarImage src={avatar || "/placeholder.svg"} alt={`Team member ${index + 1}`} />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <CalendarIcon className="mr-1 h-4 w-4" />
          {date}
        </div>
      </CardFooter>
    </Card>
  )
}
