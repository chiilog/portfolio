/**
 * 製品カードコンポーネント
 *
 * @description
 * 製品情報を表示するためのカードコンポーネント
 *
 * @param {string} title - 製品のタイトル
 * @param {string} description - 製品の説明文
 * @param {string} link - 製品の詳細ページへのリンク
 */
interface Props {
  title: string;
  description: string;
  link: string;
}

export default function ProductCard({ title, description, link }: Props) {
  return (
    <article className="bg-white hover:bg-slate-50 transition-colors duration-300 rounded-lg shadow">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p
          className="mt-2 text-gray-600"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <span className="mt-4 inline-block text-salmon hover:text-contessa">詳細を見る</span>
      </a>
    </article>
  );
}
