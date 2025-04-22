import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pagination } from "@/components/pagination"
import { Badge } from "@/components/ui/badge"

export default function TradingPlansListPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">交易计划列表</h1>
        <div className="flex items-center gap-2">
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
            导出计划
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            创建计划
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="relative w-64">
            <Input type="text" placeholder="搜索交易计划..." className="pl-10" />
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
              <SelectValue placeholder="计划状态" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">所有状态</SelectItem>
              <SelectItem value="pending">待执行</SelectItem>
              <SelectItem value="in_progress">执行中</SelectItem>
              <SelectItem value="completed">已完成</SelectItem>
              <SelectItem value="cancelled">已取消</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="生成方式" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">所有方式</SelectItem>
              <SelectItem value="ai">AI生成</SelectItem>
              <SelectItem value="manual">手动创建</SelectItem>
              <SelectItem value="imported">导入</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
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
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            <span className="sr-only">筛选</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">所有计划</TabsTrigger>
          <TabsTrigger value="today">今日计划</TabsTrigger>
          <TabsTrigger value="upcoming">未来计划</TabsTrigger>
          <TabsTrigger value="archived">历史计划</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>交易计划列表</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>计划名称</TableHead>
                    <TableHead>关联策略</TableHead>
                    <TableHead>创建日期</TableHead>
                    <TableHead>执行日期</TableHead>
                    <TableHead>状态</TableHead>
                    <TableHead>预期收益</TableHead>
                    <TableHead>完成度</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">午盘突破计划</TableCell>
                    <TableCell>动量突破策略</TableCell>
                    <TableCell>2024-08-12</TableCell>
                    <TableCell>2024-08-15</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                        待执行
                      </Badge>
                    </TableCell>
                    <TableCell className="text-green-600">+2.5%</TableCell>
                    <TableCell>0%</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          查看
                        </Button>
                        <Button variant="outline" size="sm">
                          编辑
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">指数轮动计划</TableCell>
                    <TableCell>行业轮动策略</TableCell>
                    <TableCell>2024-08-10</TableCell>
                    <TableCell>2024-08-14</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        执行中
                      </Badge>
                    </TableCell>
                    <TableCell className="text-green-600">+1.8%</TableCell>
                    <TableCell>65%</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          查看
                        </Button>
                        <Button variant="outline" size="sm">
                          编辑
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">季报反应计划</TableCell>
                    <TableCell>基本面选股策略</TableCell>
                    <TableCell>2024-08-05</TableCell>
                    <TableCell>2024-08-08</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        已完成
                      </Badge>
                    </TableCell>
                    <TableCell className="text-green-600">+3.2%</TableCell>
                    <TableCell>100%</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          查看
                        </Button>
                        <Button variant="outline" size="sm">
                          分析
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">技术调整计划</TableCell>
                    <TableCell>均线交叉策略</TableCell>
                    <TableCell>2024-08-02</TableCell>
                    <TableCell>2024-08-04</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
                        已取消
                      </Badge>
                    </TableCell>
                    <TableCell className="text-green-600">+1.5%</TableCell>
                    <TableCell>0%</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          查看
                        </Button>
                        <Button variant="outline" size="sm">
                          恢复
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">波动率套利计划</TableCell>
                    <TableCell>期权策略</TableCell>
                    <TableCell>2024-07-28</TableCell>
                    <TableCell>2024-08-01</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        已完成
                      </Badge>
                    </TableCell>
                    <TableCell className="text-green-600">+2.1%</TableCell>
                    <TableCell>100%</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          查看
                        </Button>
                        <Button variant="outline" size="sm">
                          分析
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <div className="mt-4">
            <Pagination />
          </div>
        </TabsContent>
        <TabsContent value="today">
          <div className="p-8 text-center text-gray-500 mt-4">今日交易计划将显示在这里</div>
        </TabsContent>
        <TabsContent value="upcoming">
          <div className="p-8 text-center text-gray-500 mt-4">未来交易计划将显示在这里</div>
        </TabsContent>
        <TabsContent value="archived">
          <div className="p-8 text-center text-gray-500 mt-4">历史交易计划将显示在这里</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
