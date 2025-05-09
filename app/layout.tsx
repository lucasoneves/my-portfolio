// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

import { projectConfig } from "@/utils/project-config";

export const metadata = {
  title: `${projectConfig.name} | Desenvolvedor Front-End Especialista em React.js, Next.js e JavaScript`,
  description: `Portfólio de ${projectConfig.name}, Desenvolvedor Front-End com experiência em React, Next.js, Vue, TypeScript e desenvolvimento de interfaces web modernas e responsivas`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-gray-900">
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-12 min-h-screen">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
