import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpDocPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">帮助文档</h1>
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Input type="text" placeholder="搜索帮助..." className="pl-10" />
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
          <Button variant="outline" className="h-9">
            联系客服
          </Button>
        </div>
      </div>

      <Tabs defaultValue="quick-start">
        <TabsList>
          <TabsTrigger value="quick-start">快速入门</TabsTrigger>
          <TabsTrigger value="guides">使用指南</TabsTrigger>
          <TabsTrigger value="faq">常见问题</TabsTrigger>
          <TabsTrigger value="videos">视频教程</TabsTrigger>
        </TabsList>

        <TabsContent value="quick-start" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>快速入门指南</CardTitle>
              <CardDescription>帮助您快速上手交易策略管理系统</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">系统概述</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">了解系统的核心功能和使用流程</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">创建第一个策略</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">学习如何创建和配置交易策略</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">回测策略</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">了解如何回测和验证策略的有效性</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">创建交易计划</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">将策略转化为可执行的交易计划</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">入门步骤</h3>
                <ol className="space-y-2 list-decimal ml-5">
                  <li className="text-sm">注册并登录系统</li>
                  <li className="text-sm">浏览策略模板库，了解不同类型的策略</li>
                  <li className="text-sm">创建您的第一个策略，设置参数和交易规则</li>
                  <li className="text-sm">对策略进行回测，检验其在历史数据上的表现</li>
                  <li className="text-sm">基于回测结果优化策略参数</li>
                  <li className="text-sm">创建交易计划，设置执行条件和时间</li>
                  <li className="text-sm">监控交易计划的执行情况和结果分析</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides">
          <div className="p-8 text-center text-gray-500 mt-4">使用指南将显示在这里</div>
        </TabsContent>

        <TabsContent value="faq" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>常见问题</CardTitle>
              <CardDescription>用户常见问题解答</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>如何创建新的交易策略？</AccordionTrigger>
                  <AccordionContent>
                    要创建新的交易策略，请导航至"策略管理"菜单，点击"创建策略"选项。在策略创建页面，您需要填写策略基本信息、设置交易参数、定义信号规则和仓位控制方式。完成配置后，点击"创建策略"按钮即可。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>如何使用回测功能？</AccordionTrigger>
                  <AccordionContent>
                    系统提供强大的回测功能。进入"回测管理"菜单，点击"创建回测"。选择需要回测的策略，设置回测时间范围、标的资产和交易条件。设置完成后点击"开始回测"，系统将生成详细的回测报告，包括收益分析、风险指标和交易明细。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>如何利用AI功能生成交易计划？</AccordionTrigger>
                  <AccordionContent>
                    系统集成了AI交易计划生成功能。进入"交易计划"菜单，点击"AI生成计划"。选择基础策略，设置市场条件、风险偏好和计划周期，添加特定需求后点击"生成计划"。AI将分析历史数据和市场状况，生成符合您需求的详细交易计划。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>如何查看策略的历史表现？</AccordionTrigger>
                  <AccordionContent>
                    您可以在"仪表盘"菜单下的"策略收益"页面查看所有策略的历史表现。系统提供了丰富的图表和分析工具，包括收益曲线、风险指标、最大回撤等关键指标。您还可以选择不同的时间周期进行分析，并将多个策略进行对比。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>系统支持哪些数据源？</AccordionTrigger>
                  <AccordionContent>
                    系统支持多种数据源，包括A股、港股、美股等市场的历史和实时行情数据。您可以在"数据管理"菜单下浏览和导入数据。对于高级用户，系统还支持自定义数据源接口，可以接入第三方数据服务。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="videos">
          <div className="p-8 text-center text-gray-500 mt-4">视频教程将显示在这里</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
