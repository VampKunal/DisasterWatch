import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata: Metadata = {
  title: "DisasterWatch",
  description: "A comprehensive disaster response web application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className="bg-orange-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              DisasterWatch
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/forecast-ai" className="hover:underline">
                    ForecastAI
                  </Link>
                </li>
                <li>
                  <Link href="/community-alert" className="hover:underline">
                    CommunityAlert
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-green-600 text-white p-4 text-center">
          <p>&copy; 2023 DisasterWatch. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

