import { getIssueBody } from '../utils/issue.js'

export default function editorialReview(app) {
  app.on(['issues.opened', 'issues.edited'], async (context) => {
    const issue = context.payload.issue

    if (!issue.title?.toLowerCase().startsWith('blog:')) {
      return
    }

    const body = getIssueBody(issue)
    const words = body.trim().split(/\s+/).filter(Boolean).length

    const recommendations = []

    if (words < 700) {
      recommendations.push('- Expand the article to improve topical authority.')
    }

    if (!/##\s+/.test(body)) {
      recommendations.push('- Add H2 sections for readability and SEO.')
    }

    if (!/```/.test(body)) {
      recommendations.push('- Add code or configuration examples.')
    }

    if (!/\[[^\]]+\]\([^)]+\)/.test(body)) {
      recommendations.push('- Add authoritative references or internal links.')
    }

    const comment = `## AGenNext Editorial Review\n\n- Word count: ${words}\n- Headings: ${/##\s+/.test(body) ? 'Present' : 'Missing'}\n- Code examples: ${/```/.test(body) ? 'Present' : 'Missing'}\n- Links: ${/\[[^\]]+\]\([^)]+\)/.test(body) ? 'Present' : 'Missing'}\n\n### Recommendations\n\n${recommendations.length ? recommendations.join('\n') : '- Looks ready for editorial review.'}`

    await context.octokit.issues.createComment(
      context.issue({ body: comment })
    )
  })
}
