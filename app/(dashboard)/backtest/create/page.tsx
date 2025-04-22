import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function CreateBacktestPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">创建回测</h1>
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
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            保存为模板
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>回测配置</CardTitle>
              <CardDescription>设置您的回测参数</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="backtest-name">回测名称</Label>
                    <Input id="backtest-name" placeholder="输入回测名称" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="strategy">选择策略</Label>
                    <Select>
                      <SelectTrigger id="strategy">
                        <SelectValue placeholder="选择策略" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ma">均线交叉策略</SelectItem>
                        <SelectItem value="vol">量价关系策略</SelectItem>
                        <SelectItem value="momentum">动量突破策略</SelectItem>
                        <SelectItem value="fundamental">基本面选股策略</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>回测周期</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">开始日期</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-date">结束日期</Label>
                      <Input id="end-date" type="date" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>标的选择</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="market">市场</Label>
                      <Select>
                        <SelectTrigger id="market">
                          <SelectValue placeholder="选择市场" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="shanghai">上海</SelectItem>
                          <SelectItem value="shenzhen">深圳</SelectItem>
                          <SelectItem value="hongkong">香港</SelectItem>
                          <SelectItem value="us">美国</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="symbol">股票/指数</Label>
                      <Select>
                        <SelectTrigger id="symbol">
                          <SelectValue placeholder="选择股票/指数" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sh000001">上证指数</SelectItem>
                          <SelectItem value="sz399001">深证成指</SelectItem>
                          <SelectItem value="sh600000">浦发银行</SelectItem>
                          <SelectItem value="sh601318">中国平安</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>交易设置</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="initial-capital">初始资金</Label>
                      <Input id="initial-capital" type="number" defaultValue="1000000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="commission">手续费率(%)</Label>
                      <Input id="commission" type="number" defaultValue="0.1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>交易规则</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="slippage">滑点设置(%)</Label>
                      <Input id="slippage" type="number" defaultValue="0.1" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="max-position">最大持仓比例(%)</Label>
                      <Input id="max-position" type="number" defaultValue="50" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4 pt-6">
              <Button variant="outline">重置</Button>
              <Button>开始回测</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="col-span-1">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>高级设置</CardTitle>
                <CardDescription>配置更多回测参数</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>基准选择</Label>
                  <Select>
                    <SelectTrigger id="benchmark">
                      <SelectValue placeholder="选择基准" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sh000001">上证指数</SelectItem>
                      <SelectItem value="sz399001">深证成指</SelectItem>
                      <SelectItem value="sz399006">创业板指</SelectItem>
                      <SelectItem value="sh000016">上证50</SelectItem>
                      <SelectItem value="sh000300">沪深300</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="adjustments" />
                    <Label htmlFor="adjustments">前复权</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="continuous" />
                    <Label htmlFor="continuous">连续复权</Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>优化设置</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="parallel" />
                    <Label htmlFor="parallel">启用并行计算</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="cache" />
                    <Label htmlFor="cache">使用数据缓存</Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="frequency">回测频率</Label>
                  <Select>
                    <SelectTrigger id="frequency">
                      <SelectValue placeholder="选择回测频率" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1m">1分钟</SelectItem>
                      <SelectItem value="5m">5分钟</SelectItem>
                      <SelectItem value="15m">15分钟</SelectItem>
                      <SelectItem value="30m">30分钟</SelectItem>
                      <SelectItem value="1h">1小时</SelectItem>
                      <SelectItem value="1d">日线</SelectItem>
                      <SelectItem value="1w">周线</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>模板与导入</CardTitle>
                <CardDescription>从模板创建或导入配置</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="template">从模板创建</Label>
                  <Select>
                    <SelectTrigger id="template">
                      <SelectValue placeholder="选择模板" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="t1">均线策略回测模板</SelectItem>
                      <SelectItem value="t2">动量策略回测模板</SelectItem>
                      <SelectItem value="t3">趋势跟踪回测模板</SelectItem>
                      <SelectItem value="t4">波动率策略回测模板</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" className="w-full">
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
                  导入配置文件
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
