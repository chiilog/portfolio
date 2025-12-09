/**
 * Zennの記事一覧を表示するコンポーネント
 *
 * @description
 * ZennのRSSフィードから取得した記事を一覧表示します。
 * 各記事にはタイトル、概要、公開日が表示され、クリックすると記事ページに遷移します。
 * Server Componentとして動的に記事を取得します。
 */

import { getZennArticles, formatDate } from '../lib/zennRss';

interface Props {
  /** Zennのユーザー名 */
  username: string;
  /** 表示する記事の最大数 */
  limit?: number;
}

export default async function ZennArticles({ username, limit = 5 }: Props) {
  // ZennのRSSフィードから記事を取得
  const articles = await getZennArticles(username, limit);

  return (
    <div className="space-y-0">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <article key={index} className="border-b border-gray-200">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-6 px-4 transition-colors duration-500 bg-white hover:bg-white-smoke"
            >
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">
                {article.content.substring(0, 100)}...
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">{formatDate(article.pubDate)}</span>
                <span className="text-salmon group-hover:text-contessa font-medium transition-colors duration-300">続きを読む</span>
              </div>
            </a>
          </article>
        ))
      ) : (
        <div className="py-6 px-4 text-center">
          <p className="text-gray-600">記事が見つかりませんでした。</p>
        </div>
      )}
    </div>
  );
}
