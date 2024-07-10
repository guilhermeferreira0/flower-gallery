import "./globals.css";
import MainHeader from "@/components/header/mainHeader";

export const metadata = {
  title: "Flower Galley!",
  description: "Repository for example, with uploading images",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
