import Footer from '@/components/original/footer'
import Header from '@/components/original/header'
import { ThemeProvider } from '@/context/theme-provider'
import { site } from '@/data/site-data'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.description
}

type Layout = {
  children: React.ReactNode
  modal: React.ReactNode
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
