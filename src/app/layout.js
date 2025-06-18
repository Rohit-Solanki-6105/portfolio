import { Geist, Geist_Mono } from "next/font/google";
import { AppThemeProvider } from "./components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rohit Solanki",
  description: "Developer Portfolio",
  keywords: [
    "Rohit Solanki",
    "Developer Portfolio",
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "JavaScript Developer",
    "Portfolio",
    "Personal Website",
    "Tech Enthusiast",
    "Open Source Contributor",
    "UI/UX Designer",
    "Web Designer",
    "Software Development",
    "Programming",
    "Coding",
    "Tech Portfolio",
    "Developer Resume",
    "Developer CV",
    "Developer Profile",
    "Developer Blog",
    "Developer Projects",
    "Developer Showcase",
    "Developer Skills",
    "Developer Experience",
    "Developer Community",
    "Developer Network",
    "Developer Resources",
    "Developer Tools",
    "Developer Insights",
  ],
  authors: [
    {
      name: "Rohit Solanki",
      url: "https://rohit-solanki-portfolio.vercel.app",
    },
  ],
  openGraph: {
    title: "Rohit Solanki",
    description: "Developer Portfolio",
    url: "https://rohit-solanki-portfolio.vercel.app",
    siteName: "Rohit Solanki",
    // images: [
    //   {
    //     url: "https://rohit-solanki.vercel.app/og-image.png",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
