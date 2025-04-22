import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StrategyCard } from "@/components/strategy-card"
import { Pagination } from "@/components/pagination"
import { StrategyStats } from "@/components/strategy-stats"

export default function DashboardPage() {
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
            导出报告
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
            添加新策略
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StrategyStats
          title="总策略数"
          count="12,432"
          icon="database"
          color="bg-indigo-100"
          iconColor="text-indigo-600"
        />
        <StrategyStats title="新策略" count="12,432" icon="plus-circle" color="bg-red-100" iconColor="text-red-600" />
        <StrategyStats
          title="已完成策略"
          count="12,432"
          icon="check-circle"
          color="bg-green-100"
          iconColor="text-green-600"
        />
        <StrategyStats title="进行中策略" count="12,432" icon="clock" color="bg-blue-100" iconColor="text-blue-600" />
        <StrategyStats title="审核中策略" count="12,432" icon="eye" color="bg-yellow-100" iconColor="text-yellow-600" />
      </div>

      <Tabs defaultValue="todo">
        <TabsList>
          <TabsTrigger value="todo">
            待处理 <span className="ml-1 text-xs bg-gray-200 px-2 py-0.5 rounded-full">546</span>
          </TabsTrigger>
          <TabsTrigger value="in-progress">进行中</TabsTrigger>
          <TabsTrigger value="completed">已完成</TabsTrigger>
        </TabsList>
        <div className="mt-4 flex justify-between items-center">
          <div className="relative w-full max-w-sm">
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
            <Button className="absolute right-0 top-0 h-full rounded-l-none">搜索</Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
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
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              筛选
            </Button>
          </div>
        </div>
        <TabsContent value="todo" className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <StrategyCard
            title="均线交叉策略"
            category="技术分析"
            description="一个基于均线交叉信号的交易策略，使用短期和长期移动平均线来确定买入和卖出点。"
            progress={{ completed: 16, total: 22 }}
            team={["/vibrant-city-market.png", "/diverse-group-brainstorming.png"]}
            date="01 Dec 2024"
          />
          <StrategyCard
            title="量价关系策略"
            category="测试中"
            description="一个基于成交量和价格关系的交易策略，监控价格变动和成交量变化，寻找交易机会。"
            progress={{ completed: 4, total: 12 }}
            team={["/vibrant-city-market.png", "/diverse-group-brainstorming.png", "/diverse-group-brainstorming.png"]}
            date="12 Aug 2024"
          />
          <StrategyCard
            title="客户细分分析"
            category="数据分析"
            description="一个基于客户交易行为的数据分析项目，通过细分客户群体来优化交易策略。"
            progress={{ completed: 9, total: 24 }}
            team={["/vibrant-city-market.png", "/diverse-group-brainstorming.png"]}
            date="24 Nov 2024"
          />
          <StrategyCard
            title="资源规划系统"
            category="企业资源"
            description="一个用于管理交易资源和资金分配的应用程序，优化资金使用效率。"
            progress={{ completed: 16, total: 18 }}
            team={["/vibrant-city-market.png", "/diverse-group-brainstorming.png"]}
            date="15 Sept 2024"
          />
          <StrategyCard
            title="预测分析模型"
            category="预测分析"
            description="一个预测性模型，用于预测未来市场走势，基于历史数据和机器学习算法。"
            progress={{ completed: 12, total: 45 }}
            team={["/vibrant-city-market.png", "/diverse-group-brainstorming.png"]}
            date="11 Nov 2024"
          />
          <StrategyCard
            title="交易界面重设计"
            category="UI设计"
            description="改进交易界面的用户体验，优化交易流程和信息展示。"
            progress={{ completed: 15, total: 16 }}
            team={[
              "/vibrant-city-market.png",
              "/diverse-group-brainstorming.png",
              "/diverse-group-brainstorming.png",
              "/diverse-group-celebrating.png",
            ]}
            date="21 Jun 2024"
          />
          <StrategyCard
            title="云端数据存储系统"
            category="云计算"
            description="一个提供安全云存储的系统，用于存储交易数据和策略文件。"
            progress={{ completed: 5, total: 10 }}
            team={["/vibrant-city-market.png", "/diverse-group-brainstorming.png"]}
            date="13 Feb 2024"
          />
          <StrategyCard
            title="交易机器人开发"
            category="自动化交易"
            description="一个自动执行交易策略的机器人，根据预设条件进行买卖操作。"
            progress={{ completed: 11, total: 43 }}
            team={["/vibrant-city-market.png", "/diverse-group-brainstorming.png"]}
            date="11 Aug 2024"
          />
        </TabsContent>
        <TabsContent value="in-progress">
          <div className="p-8 text-center text-gray-500">进行中的策略将显示在这里</div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="p-8 text-center text-gray-500">已完成的策略将显示在这里</div>
        </TabsContent>
      </Tabs>

      <Pagination />
    </div>
  )
}
