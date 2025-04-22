import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pagination } from "@/components/pagination"

export default function StrategiesListPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">策略列表</h1>
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
            导出策略
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
            创建策略
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="relative w-64">
            <Input type="text" placeholder="搜索策略..." className="pl-10" />
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
              <SelectValue placeholder="策略类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">所有类型</SelectItem>
              <SelectItem value="technical">技术分析</SelectItem>
              <SelectItem value="fundamental">基本面</SelectItem>
              <SelectItem value="quantitative">量化</SelectItem>
              <SelectItem value="ml">机器学习</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="状态" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">所有状态</SelectItem>
              <SelectItem value="active">活跃</SelectItem>
              <SelectItem value="inactive">非活跃</SelectItem>
              <SelectItem value="testing">测试中</SelectItem>
              <SelectItem value="archived">已归档</SelectItem>
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
          <TabsTrigger value="all">所有策略</TabsTrigger>
          <TabsTrigger value="active">活跃</TabsTrigger>
          <TabsTrigger value="inactive">非活跃</TabsTrigger>
          <TabsTrigger value="favorites">收藏</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>策略列表</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>策略名称</TableHead>
                    <TableHead>类型</TableHead>
                    <TableHead>创建日期</TableHead>
                    <TableHead>状态</TableHead>
                    <TableHead>收益率</TableHead>
                    <TableHead>夏普比率</TableHead>
                    <TableHead>最大回撤</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">均线交叉策略</TableCell>
                    <TableCell>技术分析</TableCell>
                    <TableCell>2024-05-12</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        活跃
                      </span>
                    </TableCell>
                    <TableCell className="text-green-600">+18.5%</TableCell>
                    <TableCell>1.45</TableCell>
                    <TableCell>-8.2%</TableCell>
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
                    <TableCell className="font-medium">量价关系策略</TableCell>
                    <TableCell>技术分析</TableCell>
                    <TableCell>2024-04-23</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                        测试中
                      </span>
                    </TableCell>
                    <TableCell className="text-green-600">+12.3%</TableCell>
                    <TableCell>1.21</TableCell>
                    <TableCell>-10.5%</TableCell>
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
                    <TableCell className="font-medium">动量突破策略</TableCell>
                    <TableCell>量化</TableCell>
                    <TableCell>2024-03-15</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        活跃
                      </span>
                    </TableCell>
                    <TableCell className="text-green-600">+22.7%</TableCell>
                    <TableCell>1.62</TableCell>
                    <TableCell>-7.3%</TableCell>
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
                    <TableCell className="font-medium">机器学习预测</TableCell>
                    <TableCell>机器学习</TableCell>
                    <TableCell>2024-02-28</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                        非活跃
                      </span>
                    </TableCell>
                    <TableCell className="text-red-600">-2.8%</TableCell>
                    <TableCell>0.76</TableCell>
                    <TableCell>-15.2%</TableCell>
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
                    <TableCell className="font-medium">基本面选股策略</TableCell>
                    <TableCell>基本面</TableCell>
                    <TableCell>2024-01-15</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        活跃
                      </span>
                    </TableCell>
                    <TableCell className="text-green-600">+15.8%</TableCell>
                    <TableCell>1.38</TableCell>
                    <TableCell>-9.1%</TableCell>
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
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <div className="mt-4">
            <Pagination />
          </div>
        </TabsContent>
        <TabsContent value="active">
          <div className="p-8 text-center text-gray-500 mt-4">活跃策略将显示在这里</div>
        </TabsContent>
        <TabsContent value="inactive">
          <div className="p-8 text-center text-gray-500 mt-4">非活跃策略将显示在这里</div>
        </TabsContent>
        <TabsContent value="favorites">
          <div className="p-8 text-center text-gray-500 mt-4">收藏的策略将显示在这里</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
