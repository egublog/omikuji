export type OmikujiResult = {
  fortune: string;
  description: string;
};

export const omikujiResults: OmikujiResult[] = [
  {
    fortune: "大吉",
    description: "素晴らしい一日になるでしょう。全ての物事が上手くいきます。"
  },
  {
    fortune: "中吉",
    description: "良い一日になるでしょう。前向きな気持ちで過ごすことで更に良い結果が得られます。"
  },
  {
    fortune: "小吉",
    description: "穏やかな一日になるでしょう。慎重に行動することで良い結果につながります。"
  },
  {
    fortune: "末吉",
    description: "平凡な一日になるでしょう。特別な出来事は少ないかもしれませんが、着実に前進できます。"
  },
  {
    fortune: "凶",
    description: "少し注意が必要な一日です。落ち着いて行動することで困難を乗り越えられます。"
  }
];
