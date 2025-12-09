/**
 * セクションコンポーネント
 *
 * ページ内の各セクションを統一したレイアウトで表示するためのコンポーネント。
 * 背景色、タイトル、サブタイトルをプロパティとして受け取り、内容をスロットとして表示します。
 *
 * @param {string} bgColor - 背景色のTailwindクラス名（例: 'bg-white', 'bg-white-smoke'）
 * @param {string} title - セクションのタイトル
 * @param {string} titleColor - タイトルの色のTailwindクラス名（例: 'text-salmon', 'text-contessa'）
 * @param {string} subtitle - セクションのサブタイトル（省略可）
 */
interface Props {
  id?: string;
  bgColor: string;
  title: string;
  titleColor: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({ id, bgColor, title, titleColor, subtitle, children }: Props) {
  return (
    <section id={id} className={`${bgColor} py-14 md:py-20`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`font-quicksand text-3xl lg:text-4xl font-bold ${titleColor} text-center`}>
          {title}
        </h2>
        {subtitle && (
          <div className="mt-2 text-center font-bold">
            <p className="text-gray-600">{subtitle}</p>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
