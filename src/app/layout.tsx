import "@/app/globals.css";
import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "おみくじアプリ",
  description: "Next.js と shadcn/ui で作られたモダンなおみくじアプリです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <style>
          {`
            .japanese-pattern {
              background-color: #f5f5f5;
              background-image: 
                radial-gradient(circle at 100% 150%, #f5f5f5 24%, #e0e0e0 24%, #e0e0e0 28%, #f5f5f5 28%, #f5f5f5 36%, #e0e0e0 36%, #e0e0e0 40%, transparent 40%, transparent),
                radial-gradient(circle at 0    150%, #f5f5f5 24%, #e0e0e0 24%, #e0e0e0 28%, #f5f5f5 28%, #f5f5f5 36%, #e0e0e0 36%, #e0e0e0 40%, transparent 40%, transparent),
                radial-gradient(circle at 50%  100%, #e0e0e0 10%, #f5f5f5 10%, #f5f5f5 23%, #e0e0e0 23%, #e0e0e0 30%, #f5f5f5 30%, #f5f5f5 43%, #e0e0e0 43%, #e0e0e0 50%, #f5f5f5 50%, #f5f5f5 63%, #e0e0e0 63%, #e0e0e0 71%, transparent 71%, transparent),
                radial-gradient(circle at 100% 50%, #e0e0e0 5%, #f5f5f5 5%, #f5f5f5 15%, #e0e0e0 15%, #e0e0e0 20%, #f5f5f5 20%, #f5f5f5 29%, #e0e0e0 29%, #e0e0e0 34%, #f5f5f5 34%, #f5f5f5 44%, #e0e0e0 44%, #e0e0e0 49%, transparent 49%, transparent),
                radial-gradient(circle at 0    50%, #e0e0e0 5%, #f5f5f5 5%, #f5f5f5 15%, #e0e0e0 15%, #e0e0e0 20%, #f5f5f5 20%, #f5f5f5 29%, #e0e0e0 29%, #e0e0e0 34%, #f5f5f5 34%, #f5f5f5 44%, #e0e0e0 44%, #e0e0e0 49%, transparent 49%, transparent);
              background-size: 100px 50px;
            }
          `}
        </style>
      </head>
      <body className={notoSerifJp.className}>{children}</body>
    </html>
  );
}
