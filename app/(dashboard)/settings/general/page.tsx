import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export default function GeneralSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">系统设置</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-9">
            恢复默认设置
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">通用设置</TabsTrigger>
          <TabsTrigger value="account">账户设置</TabsTrigger>
          <TabsTrigger value="appearance">界面设置</TabsTrigger>
          <TabsTrigger value="security">安全设置</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>基本设置</CardTitle>
              <CardDescription>系统基本配置项</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">系统语言</Label>
                <Select defaultValue="zh_CN">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="选择语言" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="zh_CN">简体中文</SelectItem>
                    <SelectItem value="zh_TW">繁体中文</SelectItem>
                    <SelectItem value="en_US">English (US)</SelectItem>
                    <SelectItem value="ja_JP">日本語</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">时区设置</Label>
                <Select defaultValue="Asia/Shanghai">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="选择时区" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Asia/Shanghai">中国标准时间 (GMT+8)</SelectItem>
                    <SelectItem value="Asia/Hong_Kong">香港时间 (GMT+8)</SelectItem>
                    <SelectItem value="America/New_York">美国东部时间 (GMT-5/4)</SelectItem>
                    <SelectItem value="Europe/London">伦敦时间 (GMT+0/1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date-format">日期格式</Label>
                <Select defaultValue="yyyy-MM-dd">
                  <SelectTrigger id="date-format">
                    <SelectValue placeholder="选择日期格式" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yyyy-MM-dd">YYYY-MM-DD</SelectItem>
                    <SelectItem value="dd/MM/yyyy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="MM/dd/yyyy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="yyyy年MM月dd日">YYYY年MM月DD日</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="autosave">自动保存</Label>
                  <Switch id="autosave" defaultChecked />
                </div>
                <p className="text-xs text-muted-foreground">启用后，系统将每5分钟自动保存您的工作</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">桌面通知</Label>
                  <Switch id="notifications" defaultChecked />
                </div>
                <p className="text-xs text-muted-foreground">启用后，系统将在桌面显示重要通知提醒</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="sound">提示音</Label>
                  <Switch id="sound" />
                </div>
                <p className="text-xs text-muted-foreground">启用后，系统将在关键操作时播放提示音</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>保存设置</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>交易设置</CardTitle>
              <CardDescription>默认交易参数配置</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default-commission">默认手续费率(%)</Label>
                <Input id="default-commission" type="number" defaultValue="0.1" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="default-slippage">默认滑点(%)</Label>
                <Input id="default-slippage" type="number" defaultValue="0.1" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="default-capital">默认初始资金</Label>
                <Input id="default-capital" type="number" defaultValue="1000000" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="risk-control">风险控制</Label>
                  <Switch id="risk-control" defaultChecked />
                </div>
                <p className="text-xs text-muted-foreground">启用后，系统将在策略运行时自动应用风险控制规则</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>保存设置</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="account">
          <div className="p-8 text-center text-gray-500 mt-4">账户设置将显示在这里</div>
        </TabsContent>
        <TabsContent value="appearance">
          <div className="p-8 text-center text-gray-500 mt-4">界面设置将显示在这里</div>
        </TabsContent>
        <TabsContent value="security">
          <div className="p-8 text-center text-gray-500 mt-4">安全设置将显示在这里</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
