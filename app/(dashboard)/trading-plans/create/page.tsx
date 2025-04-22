import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Bot } from "lucide-react"

export default function CreateTradingPlanPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">AI生成交易计划</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-9">
            手动创建
          </Button>
          <Button className="h-9">
            <Bot className="mr-2 h-4 w-4" />
            生成计划
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>AI计划生成参数</CardTitle>
              <CardDescription>设置AI生成交易计划的参数</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">计划名称</Label>
                  <Input id="name" placeholder="输入计划名称" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="strategy">关联策略</Label>
                  <Select>
                    <SelectTrigger id="strategy">
                      <SelectValue placeholder="选择策略" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ma">均线交叉策略</SelectItem>
                      <SelectItem value="momentum">动量突破策略</SelectItem>
                      <SelectItem value="fundamental">基本面选股策略</SelectItem>
                      <SelectItem value="vol">量价关系策略</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>执行时间</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">开始日期</Label>
                    <div className="relative">
                      <Input id="start-date" type="date" />
                      <CalendarIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">结束日期</Label>
                    <div className="relative">
                      <Input id="end-date" type="date" />
                      <CalendarIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="market-condition">市场条件</Label>
                <Select>
                  <SelectTrigger id="market-condition">
                    <SelectValue placeholder="选择市场条件" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bullish">看涨市场</SelectItem>
                    <SelectItem value="bearish">看跌市场</SelectItem>
                    <SelectItem value="volatile">震荡市场</SelectItem>
                    <SelectItem value="stable">稳定市场</SelectItem>
                    <SelectItem value="auto">自动判断</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="risk-level">风险偏好</Label>
                <Select>
                  <SelectTrigger id="risk-level">
                    <SelectValue placeholder="选择风险偏好" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">保守型</SelectItem>
                    <SelectItem value="moderate">稳健型</SelectItem>
                    <SelectItem value="aggressive">进取型</SelectItem>
                    <SelectItem value="speculative">投机型</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional-info">额外信息</Label>
                <Textarea
                  id="additional-info"
                  placeholder="添加任何额外的信息或要求，帮助AI生成更准确的交易计划"
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4 pt-6">
              <Button variant="outline">重置</Button>
              <Button>生成计划</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>AI助手</CardTitle>
              <CardDescription>交互式AI助手</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px] bg-gray-50 rounded-md overflow-y-auto p-4">
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <div className="bg-primary/10 p-3 rounded-lg rounded-bl-none max-w-[80%] self-start">
                    <p className="text-sm">您好，我是AI交易助手。我可以帮您生成交易计划，请问您有什么具体需求？</p>
                  </div>

                  <div className="bg-primary text-white p-3 rounded-lg rounded-br-none max-w-[80%] self-end">
                    <p className="text-sm">我想基于均线交叉策略生成一个为期5天的交易计划</p>
                  </div>

                  <div className="bg-primary/10 p-3 rounded-lg rounded-bl-none max-w-[80%] self-start">
                    <p className="text-sm">
                      好的，请您在左侧填写详细的参数，包括风险偏好、市场条件等信息。填写完成后点击"生成计划"按钮，我将为您生成符合要求的交易计划。
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input placeholder="输入您的问题..." />
                <Button size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transform rotate-90"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
