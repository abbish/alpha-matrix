import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"

export default function MarketDataPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">行情数据</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-9">
            <CalendarIcon className="mr-2 h-4 w-4" />
            选择日期
          </Button>
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
          <Button className="h-9">
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
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            导入数据
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="relative w-64">
            <Input type="text" placeholder="搜索股票代码或名称..." className="pl-10" />
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
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="市场" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">所有市场</SelectItem>
              <SelectItem value="shanghai">上海</SelectItem>
              <SelectItem value="shenzhen">深圳</SelectItem>
              <SelectItem value="hongkong">香港</SelectItem>
              <SelectItem value="us">美国</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="1d">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="时间周期" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">1分钟</SelectItem>
              <SelectItem value="5m">5分钟</SelectItem>
              <SelectItem value="15m">15分钟</SelectItem>
              <SelectItem value="30m">30分钟</SelectItem>
              <SelectItem value="1h">1小时</SelectItem>
              <SelectItem value="1d">日线</SelectItem>
              <SelectItem value="1w">周线</SelectItem>
              <SelectItem value="1mo">月线</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">市场概览</TabsTrigger>
          <TabsTrigger value="stocks">个股数据</TabsTrigger>
          <TabsTrigger value="indices">指数数据</TabsTrigger>
          <TabsTrigger value="sectors">行业板块</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>市场概览</CardTitle>
              <CardDescription>当前市场整体状况</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">上证指数</CardTitle>
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
                      className="h-4 w-4 text-green-500"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3,465.28</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-500">+38.62 (+1.13%)</span>
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">深证成指</CardTitle>
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
                      className="h-4 w-4 text-green-500"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">13,283.92</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-500">+157.16 (+1.20%)</span>
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">创业板指</CardTitle>
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
                      className="h-4 w-4 text-green-500"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,673.15</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-500">+35.92 (+1.36%)</span>
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">上证50</CardTitle>
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
                      className="h-4 w-4 text-red-500"
                    >
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                      <polyline points="16 17 22 17 22 11"></polyline>
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3,127.85</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-red-500">-15.23 (-0.48%)</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6">
                <p className="text-center py-24 text-muted-foreground">此处将显示市场概览图表</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stocks">
          <div className="p-8 text-center text-gray-500 mt-4">个股数据将显示在这里</div>
        </TabsContent>
        <TabsContent value="indices">
          <div className="p-8 text-center text-gray-500 mt-4">指数数据将显示在这里</div>
        </TabsContent>
        <TabsContent value="sectors">
          <div className="p-8 text-center text-gray-500 mt-4">行业板块数据将显示在这里</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
