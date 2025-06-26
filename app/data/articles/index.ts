import { article as Burma_After_Three_Years_of_Coup } from "./Burma_After_Three_Years_of_Coup"
import { article as assk_birthday } from "./assk_birthday"



export type Article = {
  title: string
  date: string
  author: string
  slug: string
  content: string
  image: string
}

const articles= [
      Burma_After_Three_Years_of_Coup,
      assk_birthday,
]
// Only include articles that actually exist
export const allArticles: Article[] = articles.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
) // Sort by date, newest first

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((article) => article.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return allArticles.map((article) => article.slug)
}

export function getLatestArticles(count = 3): Article[] {
  return allArticles.slice(0, count)
}
