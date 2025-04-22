interface FooterProps {
  simplified?: boolean
}

export function Footer({ simplified = false }: FooterProps) {
  const currentYear = new Date().getFullYear()

  // 所有情况下都只返回版权信息一行
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-800 h-10 shrink-0">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {currentYear} Alpha Matrix 交易策略管理系统. 保留所有权利.
        </p>
      </div>
    </footer>
  )
}
