import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from 'next/font/google'
import Footer from "@/components/widgets/footer/Footer";
import Header from "@/components/widgets/header/Header";

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  weight: ['500', '600', '700', '900']
})

export const metadata: Metadata = {
  title: 'Estatein',
  description: 'description',
  keywords: 'keywords',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://w3.org' viewBox='0 0 100 100'></svg>",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html 
      lang="en"
      className={`${urbanist.variable} h-full antialiased`}
    >
      <body className="flex flex-col w-full min-h-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
