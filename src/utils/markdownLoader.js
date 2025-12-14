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

// 샘플 포스트 데이터 (실제로는 _posts 폴더에서 동적으로 로드)
const posts = [
  {
    slug: 'vue-3-composition-api-guide',
    title: 'Vue 3 Composition API 완벽 가이드',
    date: '2024-12-14',
    tags: ['Vue.js', 'Composition API', 'JavaScript'],
    excerpt: 'Vue 3의 Composition API를 사용하여 더 나은 코드를 작성하는 방법을 알아봅니다.',
    content: md.render(`
# Vue 3 Composition API 완벽 가이드

Vue 3의 Composition API는 Vue 2의 Options API보다 더 유연하고 강력한 방식으로 컴포넌트를 작성할 수 있게 해줍니다.

## Composition API의 장점

- **더 나은 코드 재사용성**: 로직을 함수로 추출하여 재사용하기 쉽습니다.
- **더 나은 TypeScript 지원**: 타입 추론이 향상되었습니다.
- **더 나은 성능**: 트리 쉐이킹이 가능합니다.

## 기본 사용법

\`\`\`javascript
import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    const increment = () => {
      count.value++
    }

    onMounted(() => {
      console.log('컴포넌트가 마운트되었습니다')
    })

    return {
      count,
      doubleCount,
      increment
    }
  }
}
\`\`\`

이 가이드를 통해 Vue 3 Composition API의 모든 기능을 마스터할 수 있습니다.
    `)
  },
  {
    slug: 'modern-frontend-architecture',
    title: '현대적인 프론트엔드 아키텍처 설계',
    date: '2024-12-13',
    tags: ['아키텍처', '프론트엔드', 'Vue.js'],
    excerpt: '확장 가능하고 유지보수하기 쉬운 프론트엔드 아키텍처를 설계하는 방법을 소개합니다.',
    content: md.render(`
# 현대적인 프론트엔드 아키텍처 설계

현대적인 프론트엔드 애플리케이션을 설계할 때는 여러 가지 요소를 고려해야 합니다.

## 주요 고려사항

1. **컴포넌트 기반 아키텍처**
2. **상태 관리**
3. **라우팅**
4. **코드 분할**
5. **성능 최적화**

## Vue.js에서의 구현

Vue 3의 Composition API와 함께 Pinia를 사용하면 효과적인 상태 관리를 할 수 있습니다.

\`\`\`javascript
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})
\`\`\`

이러한 아키텍처 설계를 통해 유지보수하기 쉽고 확장 가능한 애플리케이션을 구축할 수 있습니다.
    `)
  }
]

export const getPosts = async () => {
  // 실제로는 _posts 폴더에서 마크다운 파일을 읽어와야 함
  // GitHub Pages에서는 정적 데이터로 처리
  return posts.map(post => ({
    ...post,
    excerpt: post.excerpt
  }))
}

export const getPost = async (slug) => {
  return posts.find(post => post.slug === slug) || null
}