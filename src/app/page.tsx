"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { drawOmikuji, type OmikujiResult } from "@/lib/omikuji";

export default function Home() {
  const [result, setResult] = useState<OmikujiResult | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleDraw = async () => {
    setIsDrawing(true);
    // アニメーション用の遅延
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setResult(drawOmikuji());
    setIsDrawing(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">おみくじ</h1>
        
        <Button
          onClick={handleDraw}
          disabled={isDrawing}
          className="px-8 py-6 text-lg"
        >
          {isDrawing ? "おみくじを引いています..." : "おみくじを引く"}
        </Button>

        <AnimatePresence mode="wait">
          {result && !isDrawing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <Card className="w-[300px] mx-auto">
                <CardHeader>
                  <CardTitle className="text-3xl text-center">
                    {result.fortune}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
