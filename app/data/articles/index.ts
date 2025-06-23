import { article as communityWorkshop } from "./Burma_After_Three_Years_of_Coup"
import { article as humanRightsStatement } from "./human-rights-statement"
import { article as internetFreedomReport } from "./internet-freedom-report"
import { article as youthLeadershipProgram } from "./youth-leadership-program"

export type Article = {
  title: string
  date: string
  author: string
  slug: string
  content: string
  image: string
}

export const allArticles: Article[] = [
  communityWorkshop,
  humanRightsStatement,
  internetFreedomReport,
  youthLeadershipProgram,
]

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((article) => article.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return allArticles.map((article) => article.slug)
}
