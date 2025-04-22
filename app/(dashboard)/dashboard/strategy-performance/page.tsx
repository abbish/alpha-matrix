import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function StrategyPerformancePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">策略收益</h1>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px] h-9">
              <SelectValue placeholder="选择时间段" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">过去7天</SelectItem>
              <SelectItem value="30days">过去30天</SelectItem>
              <SelectItem value="90days">过去90天</SelectItem>
              <SelectItem value="1year">过去1年</SelectItem>
              <SelectItem value="all">全部时间</SelectItem>
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
            导出数据
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">总收益率</CardTitle>
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
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+24.5%</div>
            <p className="text-xs text-muted-foreground">
              较上月 <span className="text-green-500">+2.1%</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">年化收益</CardTitle>
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
              <path d="M12 2v20M2 12h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.7%</div>
            <p className="text-xs text-muted-foreground">
              较基准指数 <span className="text-green-500">+8.3%</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">夏普比率</CardTitle>
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
              <path d="M2 20h.01" />
              <path d="M7 20v-4" />
              <path d="M12 20v-8" />
              <path d="M17 20v-12" />
              <path d="M22 20v-16" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.65</div>
            <p className="text-xs text-muted-foreground">
              较上月 <span className="text-green-500">+0.12</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">最大回撤</CardTitle>
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
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-8.3%</div>
            <p className="text-xs text-muted-foreground">
              较上月 <span className="text-red-500">+1.2%</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overall">
        <TabsList>
          <TabsTrigger value="overall">整体收益</TabsTrigger>
          <TabsTrigger value="category">策略分类</TabsTrigger>
          <TabsTrigger value="comparison">策略对比</TabsTrigger>
          <TabsTrigger value="details">详细数据</TabsTrigger>
        </TabsList>
        <TabsContent value="overall" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>整体收益曲线</CardTitle>
              <CardDescription>所有策略的综合收益表现</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-24 text-muted-foreground">此处将显示整体收益曲线图表</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="category" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>策略分类收益对比</CardTitle>
              <CardDescription>不同类型策略的收益对比</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-24 text-muted-foreground">此处将显示策略分类收益对比图表</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="comparison" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>策略对比分析</CardTitle>
              <CardDescription>各策略之间的收益对比</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-24 text-muted-foreground">此处将显示策略对比分析图表</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>详细数据</CardTitle>
              <CardDescription>各策略的详细收益数据</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-24 text-muted-foreground">此处将显示详细策略收益数据表格</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
