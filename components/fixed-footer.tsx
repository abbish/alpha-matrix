import Link from "next/link"
import { Mail, Phone, Globe, MessageSquare } from "lucide-react"

interface FixedFooterProps {
  simplified?: boolean
}

export function FixedFooter({ simplified = false }: FixedFooterProps) {
  const currentYear = new Date().getFullYear()

  // 如果是简化版，不渲染任何内容
  if (simplified) {
    return null
  }

  // 完整版footer
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-800 fixed bottom-0 w-full z-10">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  公司简介
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  团队介绍
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  招贤纳士
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">产品服务</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  产品列表
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  价格方案
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  API文档
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">帮助中心</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  常见问题
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  技术支持
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-gray-600 hover:text-primary dark:text-gray-400">
                  意见反馈
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-400">400-123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-400">contact@alphamatrix.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-400">www.alphamatrix.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-400">在线客服</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Alpha Matrix 交易策略管理系统. 保留所有权利.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-xs text-gray-500 hover:text-primary dark:text-gray-400">
              服务条款
            </Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-primary dark:text-gray-400">
              隐私政策
            </Link>
            <Link href="/security" className="text-xs text-gray-500 hover:text-primary dark:text-gray-400">
              安全说明
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
