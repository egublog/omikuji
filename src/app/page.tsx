"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { drawOmikuji, type OmikujiResult } from "@/lib/omikuji";
import { OmikujiBox } from "@/components/OmikujiBox";

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
    <main className="min-h-screen flex flex-col items-center justify-center p-4 japanese-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/90 to-white/90" />
      <div className="text-center space-y-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-gray-800 mb-8 tracking-wider"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            fontFamily: "'Noto Serif JP', serif"
          }}
        >
          おみくじ
        </motion.h1>

        <OmikujiBox isDrawing={isDrawing} />
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={handleDraw}
            disabled={isDrawing}
            className="px-8 py-6 text-lg bg-red-600 hover:bg-red-700 shadow-lg"
          >
            <motion.span
              animate={isDrawing ? {
                opacity: [1, 0.5, 1],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }
              } : {}}
            >
              {isDrawing ? "おみくじを引いています..." : "おみくじを引く"}
            </motion.span>
          </Button>
        </motion.div>

        <AnimatePresence mode="wait">
          {result && !isDrawing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                bounce: 0.4
              }}
              className="mt-8"
            >
              <Card className="w-[300px] mx-auto backdrop-blur-sm bg-white/90 shadow-xl border-2 border-red-100 transform perspective-1000">
                <CardHeader>
                  <CardTitle className="text-3xl text-center" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    {result.fortune}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-lg">
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
