import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://politica-privacidade.taxinnovation.com.br"),
  title: "Política de Privacidade | Tax Innovation",
  description:
    "Saiba como a Tax Innovation coleta, utiliza, armazena e protege seus dados pessoais em conformidade com a LGPD.",
  applicationName: "Tax Innovation",
  authors: [{ name: "Tax Innovation" }],
  keywords: [
    "Tax Innovation",
    "política de privacidade",
    "proteção de dados",
    "LGPD",
    "dados pessoais",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Política de Privacidade e Proteção de Dados Pessoais",
    description:
      "Conheça as práticas de privacidade e proteção de dados da Tax Innovation.",
    url: "/",
    siteName: "Tax Innovation",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.png" },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#07111f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
