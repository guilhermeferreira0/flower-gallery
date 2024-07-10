import "./globals.css";

export const metadata = {
  title: "Flower Galley!",
  description: "Repository for example, with uploading images",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
