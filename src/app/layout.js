import "./globals.css";

export const metadata = {
  title: "Nureddin Farzaliyev - Frontend Developer",
  description: "This is the portfolio of the Frontend Developer - Nureddin Farzaliyev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
}
