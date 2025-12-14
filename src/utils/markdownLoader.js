import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (__) {}
    }
    return ''
  }
})

// Vite 환경에서 빌드 시점에 `_posts` 폴더의 마크다운 파일을 가져옵니다.
// 브라우저에서는 파일 시스템에 직접 접근할 수 없으므로 `import.meta.glob`을 사용합니다.

const parseFrontmatter = (raw) => {
  const fmRegex = /^---\s*([\s\S]*?)\s*---/m
  const match = raw.match(fmRegex)
  let fm = {}
  let content = raw
  if (match) {
    const fmText = match[1]
    content = raw.slice(match[0].length)
    fmText.split('\n').forEach((line) => {
      const idx = line.indexOf(':')
      if (idx === -1) return
      const key = line.slice(0, idx).trim()
      let value = line.slice(idx + 1).trim()
      if (!value) return
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      if (key === 'tags') {
        try {
          value = JSON.parse(value)
        } catch (e) {
          value = value.replace(/^\[|\]$/g, '').split(',').map(s => s.replace(/['\"]/g, '').trim()).filter(Boolean)
        }
      }
      fm[key] = value
    })
  }
  return { frontmatter: fm, content: content.trim() }
}

const loadAllPosts = async () => {
  const modules = import.meta.glob('/_posts/*.md', { query: '?raw', import: 'default' })
  const entries = await Promise.all(Object.entries(modules).map(async ([path, resolver]) => {
    const raw = await resolver()
    const { frontmatter, content } = parseFrontmatter(raw)
    const filename = path.split('/').pop()
    const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '')
    return {
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || null,
      tags: frontmatter.tags || [],
      excerpt: frontmatter.excerpt || '',
      content: md.render(content)
    }
  }))
  // 날짜 기준 내림차순
  entries.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
  return entries
}

export const getPosts = async () => {
  try {
    const posts = await loadAllPosts()
    return posts.map(p => ({ ...p, excerpt: p.excerpt }))
  } catch (e) {
    console.error('Failed to load posts:', e)
    return []
  }
}

export const getPost = async (slug) => {
  try {
    const posts = await loadAllPosts()
    return posts.find(p => p.slug === slug) || null
  } catch (e) {
    console.error('Failed to load post:', e)
    return null
  }
}