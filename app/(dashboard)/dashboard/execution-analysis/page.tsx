import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"

export default function ExecutionAnalysisPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">执行分析</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-9">
            <CalendarIcon className="mr-2 h-4 w-4" />
            选择时间段
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] h-9">
              <SelectValue placeholder="选择策略" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">所有策略</SelectItem>
              <SelectItem value="ma">均线交叉策略</SelectItem>
              <SelectItem value="vol">量价策略</SelectItem>
              <SelectItem value="mm">动量策略</SelectItem>
              <SelectItem value="rv">波动率策略</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="h-9">
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
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            导出分析
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">执行成功率</CardTitle>
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
              className="h-4 w-4 text-muted-foreground"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.7%</div>
            <p className="text-xs text-muted-foreground">
              较上月 <span className="text-green-500">+1.8%</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">平均滑点</CardTitle>
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
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M18.5 5.5 5.5 18.5"></path>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.03%</div>
            <p className="text-xs text-muted-foreground">
              较上月 <span className="text-green-500">-0.01%</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">交易延迟</CardTitle>
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
              className="h-4 w-4 text-muted-foreground"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">238ms</div>
            <p className="text-xs text-muted-foreground">
              较上月 <span className="text-green-500">-12ms</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">成交量比</CardTitle>
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
              className="h-4 w-4 text-muted-foreground"
            >
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <p className="text-xs text-muted-foreground">
              较上月 <span className="text-green-500">+0.7%</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="execution">
        <TabsList>
          <TabsTrigger value="execution">执行质量</TabsTrigger>
          <TabsTrigger value="timing">交易时机</TabsTrigger>
          <TabsTrigger value="cost">交易成本</TabsTrigger>
          <TabsTrigger value="details">详细分析</TabsTrigger>
        </TabsList>
        <TabsContent value="execution" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>执行质量分析</CardTitle>
              <CardDescription>策略信号与实际执行情况对比</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-24 text-muted-foreground">此处将显示执行质量分析图表</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="timing" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>交易时机分析</CardTitle>
              <CardDescription>交易时机对收益的影响分析</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-24 text-muted-foreground">此处将显示交易时机分析图表</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cost" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>交易成本分析</CardTitle>
              <CardDescription>交易成本对策略收益的影响</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-24 text-muted-foreground">此处将显示交易成本分析图表</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>详细分析</CardTitle>
              <CardDescription>各策略执行的详细分析数据</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-24 text-muted-foreground">此处将显示详细执行分析数据表格</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
