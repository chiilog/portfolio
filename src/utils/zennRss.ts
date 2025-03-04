/**
 * ZennのRSSフィードからブログ記事を取得するユーティリティ
 *
 * @description
 * ZennのRSSフィードからブログ記事を取得し、必要な情報を整形して返します。
 * 取得した記事は日付の新しい順にソートされます。
 */

import Parser from 'rss-parser';

/**
 * ブログ記事の型定義
 */
export type ZennArticle = {
  /** 記事のタイトル */
  title: string;
  /** 記事のリンク */
  link: string;
  /** 記事の公開日（ISO形式の文字列） */
  pubDate: string;
  /** 記事の概要 */
  content: string;
  /** 記事のカテゴリ（タグ） */
  categories?: string[];
};

/**
 * ZennのRSSフィードからブログ記事を取得する
 *
 * @param username - Zennのユーザー名
 * @param limit - 取得する記事の最大数（デフォルト: 5）
 * @returns 取得したブログ記事の配列
 */
export async function getZennArticles(username: string, limit: number = 5): Promise<ZennArticle[]> {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(`https://zenn.dev/${username}/feed`);

    // 記事を日付の新しい順にソート
    const articles = feed.items
      .map(item => ({
        title: item.title || '無題',
        link: item.link || '',
        pubDate: item.pubDate || '',
        content: item.contentSnippet || item.content || '',
        categories: item.categories || [],
      }))
      .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
      .slice(0, limit);

    return articles;
  } catch (error) {
    console.error('ZennのRSSフィードの取得に失敗しました:', error);
    return [];
  }
}

/**
 * 日付をフォーマットする
 *
 * @param dateString - ISO形式の日付文字列
 * @returns フォーマットされた日付（例: 2023年10月15日）
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}
