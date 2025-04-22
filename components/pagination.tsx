import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Pagination() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-500">显示第 1-10 条，共 100 条</div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" disabled>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">上一页</span>
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0 font-medium">
          1
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          2
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          3
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">下一页</span>
        </Button>
      </div>
    </div>
  )
}
