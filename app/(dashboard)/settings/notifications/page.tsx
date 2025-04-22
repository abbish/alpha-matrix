import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">通知中心</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-9">
            标记全部已读
          </Button>
        </div>
      </div>

      <Tabs defaultValue="settings">
        <TabsList>
          <TabsTrigger value="settings">通知设置</TabsTrigger>
          <TabsTrigger value="messages">消息列表</TabsTrigger>
          <TabsTrigger value="alerts">预警设置</TabsTrigger>
        </TabsList>

        <TabsContent value="settings" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>通知设置</CardTitle>
              <CardDescription>配置系统通知和提醒方式</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">系统通知</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="system-updates" className="font-medium">
                        系统更新
                      </Label>
                      <p className="text-sm text-muted-foreground">接收系统更新和维护通知</p>
                    </div>
                    <Switch id="system-updates" defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="security-alerts" className="font-medium">
                        安全预警
                      </Label>
                      <p className="text-sm text-muted-foreground">接收账户安全相关通知</p>
                    </div>
                    <Switch id="security-alerts" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">交易通知</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="trade-signals" className="font-medium">
                        交易信号
                      </Label>
                      <p className="text-sm text-muted-foreground">策略触发的买入/卖出信号</p>
                    </div>
                    <Switch id="trade-signals" defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="execution-alerts" className="font-medium">
                        执行通知
                      </Label>
                      <p className="text-sm text-muted-foreground">交易计划执行相关通知</p>
                    </div>
                    <Switch id="execution-alerts" defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="position-alerts" className="font-medium">
                        仓位预警
                      </Label>
                      <p className="text-sm text-muted-foreground">仓位变动和超额风险预警</p>
                    </div>
                    <Switch id="position-alerts" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">通知方式</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications" className="font-medium">
                        邮件通知
                      </Label>
                      <p className="text-sm text-muted-foreground">通过邮件接收通知</p>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="sms-notifications" className="font-medium">
                        短信通知
                      </Label>
                      <p className="text-sm text-muted-foreground">通过短信接收通知</p>
                    </div>
                    <Switch id="sms-notifications" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications" className="font-medium">
                        推送通知
                      </Label>
                      <p className="text-sm text-muted-foreground">通过移动应用推送接收通知</p>
                    </div>
                    <Switch id="push-notifications" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <div className="p-8 text-center text-gray-500 mt-4">消息列表将显示在这里</div>
        </TabsContent>

        <TabsContent value="alerts">
          <div className="p-8 text-center text-gray-500 mt-4">预警设置将显示在这里</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
