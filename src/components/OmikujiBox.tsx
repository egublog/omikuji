import { motion } from "framer-motion";

export const OmikujiBox = ({ isDrawing }: { isDrawing: boolean }) => {
  return (
    <motion.div
      animate={isDrawing ? {
        rotate: [0, -5, 5, -5, 5, 0],
        y: [0, -5, 5, -5, 5, 0],
      } : {}}
      transition={{
        duration: 0.5,
        repeat: isDrawing ? 2 : 0,
      }}
      className="w-48 h-48 mx-auto mb-8"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* 箱の本体 */}
        <motion.rect
          x="40"
          y="60"
          width="120"
          height="100"
          fill="#8B4513"
          stroke="#000"
          strokeWidth="2"
        />
        {/* 箱の屋根 */}
        <motion.path
          d="M30 60 L100 30 L170 60"
          stroke="#8B4513"
          strokeWidth="2"
          fill="#A0522D"
        />
        {/* 前面の装飾 */}
        <motion.rect
          x="70"
          y="80"
          width="60"
          height="40"
          fill="#DAA520"
          stroke="#000"
          strokeWidth="1"
        />
        {/* おみくじの穴 */}
        <motion.circle
          cx="100"
          cy="140"
          r="10"
          fill="#000"
        />
      </svg>
    </motion.div>
  );
};
