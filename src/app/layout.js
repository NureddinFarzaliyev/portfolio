import "./globals.css";

export const metadata = {
  title: "Nureddin Farzaliyev - Fullstack Web Developer",
  description:
    "Portfolio of Nuraddin Farzaliyev, a fullstack web developer specializing in React, Next.js, Node.js and Java. Explore my projects, skills, and experience in web development.",
  keywords: [
    "Nureddin Farzaliyev",
    "Nuraddin Farzaliyev",
    "Fullstack Web Developer",
    "Web Developer",
    "Web Development",
    "Frontend",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "PostgreSQL",
    "MongoDB",
    "Portfolio",
    "Azerbaijan",
  ],
  openGraph: {
    title: "Nureddin Farzaliyev - Fullstack Web Developer",
    description:
      "Portfolio of Nuraddin Farzaliyev, a fullstack web developer specializing in React, Next.js, Node.js and Java. Explore my projects, skills, and experience in web development.",
    url: "https://farzaliyev.netlify.app",
    siteName: "Nureddin Farzaliyev Portfolio",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D16AQGAeCztVs_yMA/profile-displaybackgroundimage-shrink_350_1400/B4DZyyDgAAIgAc-/0/1772513788474?e=1790812800&v=beta&t=3EmIoPgRLM5An4HPSOxwuTtvb-j0xNCFK4Sdt8mTbo0",
        width: 1400,
        height: 350,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "OxXQXMisb4NCq89OQoeKT0PeWlLijBTMxEbWgnS1eAk",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
