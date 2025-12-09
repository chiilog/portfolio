/**
 * 技術スタックを表示するコンポーネント
 *
 * @description
 * 得意な技術（ピンク背景）と、それに次ぐ技術（ピンクボーダー）を表示します。
 * levelプロパティで技術の習熟度を指定できます。
 *
 * @example
 * <TechnologyStack level={1}>
 *   WordPress
 * </TechnologyStack>
 */

interface Props {
  /**
   * 技術の習熟度（1: 得意、2: それに次ぐ）
   */
  level: 1 | 2;
  children: React.ReactNode;
}

const getSkillClass = (level: number) => {
  return level === 1
    ? "px-3 py-1 bg-salmon text-white rounded-full text-sm"
    : "px-3 py-1 bg-white border border-salmon text-salmon rounded-full text-sm";
};

export default function TechnologyStack({ level, children }: Props) {
  return (
    <span className={getSkillClass(level)}>
      {children}
    </span>
  );
}
