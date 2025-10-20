import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/libs/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import Script from "next/script"; 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amit Patil | Software Engineer",
  description: "Portfolio of Amit Patil, a software engineer passionate about building scalable systems, AI-powered solutions, and modern web applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tt7tb2kz37");
            `,
          }}
        />
      </head>

      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GridPattern
                  width={30}
                  height={30}
                  x={-1}
                  y={-1}
                  strokeDasharray="4 2"
                  className={cn(
                    "fixed inset-0 fill-gray-300/20 stroke-gray-400/20",
                    "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
                  )}
          />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children} 
        </ThemeProvider>
      </body>
    </html>
  );
}
