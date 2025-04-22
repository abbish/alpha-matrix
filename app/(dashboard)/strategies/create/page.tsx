import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CreateStrategyPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">创建策略</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-9">
            保存为草稿
          </Button>
          <Button className="h-9">创建策略</Button>
        </div>
      </div>

      <Tabs defaultValue="basic">
        <TabsList>
          <TabsTrigger value="basic">基本信息</TabsTrigger>
          <TabsTrigger value="parameters">策略参数</TabsTrigger>
          <TabsTrigger value="signals">交易信号</TabsTrigger>
          <TabsTrigger value="positions">仓位控制</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>策略基本信息</CardTitle>
              <CardDescription>设置策略的基本信息和描述</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">策略名称</Label>
                  <Input id="name" placeholder="输入策略名称" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">策略类型</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="选择策略类型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">技术分析策略</SelectItem>
                      <SelectItem value="fundamental">基本面策略</SelectItem>
                      <SelectItem value="quantitative">量化策略</SelectItem>
                      <SelectItem value="mixed">混合策略</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">策略描述</Label>
                <Textarea id="description" placeholder="请输入策略描述" rows={4} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="timeframe">适用时间周期</Label>
                  <Select>
                    <SelectTrigger id="timeframe">
                      <SelectValue placeholder="选择时间周期" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">短期 (日内)</SelectItem>
                      <SelectItem value="medium">中期 (数日至数周)</SelectItem>
                      <SelectItem value="long">长期 (数月以上)</SelectItem>
                      <SelectItem value="mixed">混合时间周期</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="risk">风险等级</Label>
                  <Select>
                    <SelectTrigger id="risk">
                      <SelectValue placeholder="选择风险等级" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">低风险</SelectItem>
                      <SelectItem value="medium">中等风险</SelectItem>
                      <SelectItem value="high">高风险</SelectItem>
                      <SelectItem value="aggressive">进取型</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="market">适用市场</Label>
                  <Select>
                    <SelectTrigger id="market">
                      <SelectValue placeholder="选择适用市场" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a-shares">A股</SelectItem>
                      <SelectItem value="hk">港股</SelectItem>
                      <SelectItem value="us">美股</SelectItem>
                      <SelectItem value="global">全球</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">策略状态</Label>
                  <Select defaultValue="active">
                    <SelectTrigger id="status">
                      <SelectValue placeholder="选择策略状态" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">活跃</SelectItem>
                      <SelectItem value="testing">测试中</SelectItem>
                      <SelectItem value="inactive">非活跃</SelectItem>
                      <SelectItem value="archived">已归档</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="parameters">
          <div className="p-8 text-center text-gray-500 mt-4">策略参数配置将显示在这里</div>
        </TabsContent>

        <TabsContent value="signals">
          <div className="p-8 text-center text-gray-500 mt-4">交易信号设置将显示在这里</div>
        </TabsContent>

        <TabsContent value="positions">
          <div className="p-8 text-center text-gray-500 mt-4">仓位控制设置将显示在这里</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
