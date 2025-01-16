export type OmikujiResult = {
  fortune: string;
  description: string;
};

export const omikujiResults: OmikujiResult[] = [
  {
    fortune: "大吉",
    description: "素晴らしい一日になるでしょう。新しいことに挑戦するのに最適な時期です。",
  },
  {
    fortune: "中吉",
    description: "良い出来事が待っています。前向きな気持ちを持ち続けましょう。",
  },
  {
    fortune: "小吉",
    description: "穏やかな一日になりそうです。日常の小さな幸せを大切にしましょう。",
  },
  {
    fortune: "末吉",
    description: "特に大きな変化はありませんが、慎重に行動することで良い結果が得られます。",
  },
  {
    fortune: "凶",
    description: "少し注意が必要かもしれません。落ち着いて行動することで困難を乗り越えられます。",
  },
  {
    fortune: "大凶",
    description: "一時的な困難に見えても、これを乗り越えることで大きな成長につながるでしょう。",
  },
];

export const drawOmikuji = (): OmikujiResult => {
  const randomIndex = Math.floor(Math.random() * omikujiResults.length);
  return omikujiResults[randomIndex];
};
