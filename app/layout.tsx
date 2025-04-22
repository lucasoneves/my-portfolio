// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Lucas Neves | Desenvolvedor Front-End Especialista em React.js, Next.js e JavaScript",
  description:
    "Portfólio de Lucas Neves, Desenvolvedor Front-End com experiência em React, Next.js, Vue, TypeScript e desenvolvimento de interfaces web modernas e responsivas.",
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
        </main>
        <Footer />
      </body>
    </html>
  );
}
