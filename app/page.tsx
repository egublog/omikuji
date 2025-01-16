"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { omikujiResults } from "./types/omikuji";
import { motion } from "framer-motion";

export default function Home() {
  const [result, setResult] = useState<typeof omikujiResults[0] | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const drawOmikuji = () => {
    setIsDrawing(true);
    // ランダムな結果を選択
    const randomIndex = Math.floor(Math.random() * omikujiResults.length);
    
    // アニメーション効果のため、少し遅延を入れる
    setTimeout(() => {
      setResult(omikujiResults[randomIndex]);
      setIsDrawing(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">おみくじ</h1>
      
      <Button
        onClick={drawOmikuji}
        disabled={isDrawing}
        className="mb-8 px-8 py-6 text-lg bg-red-500 hover:bg-red-600"
      >
        {isDrawing ? "おみくじを選んでいます..." : "おみくじを引く"}
      </Button>

      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-[300px]">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold text-center mb-4">{result.fortune}</h2>
              <p className="text-gray-600 text-center">{result.description}</p>
            </CardContent>
            <CardFooter className="justify-center text-sm text-gray-500">
              今日も良い一日になりますように
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </main>
  );
}
