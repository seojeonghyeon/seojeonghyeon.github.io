<template>
  <div class="home">
    <section class="hero">
      <h1>시니어 프론트엔드 개발자의 기술 블로그</h1>
      <p>Vue.js와 최신 웹 기술을 활용한 개발 경험과 인사이트를 공유합니다.</p>
    </section>

    <section class="posts">
      <h2>최근 포스트</h2>
      <div class="post-list">
        <article
          v-for="post in posts"
          :key="post.slug"
          class="post-card"
          @click="goToPost(post.slug)"
        >
          <h3>{{ post.title }}</h3>
          <p class="date">{{ formatDate(post.date) }}</p>
          <p class="excerpt">{{ post.excerpt }}</p>
          <div class="tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getPosts } from '../utils/markdownLoader'

const router = useRouter()
const posts = ref([])

onMounted(async () => {
  posts.value = await getPosts()
})

const goToPost = (slug) => {
  router.push(`/post/${slug}`)
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.posts {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.post-list {
  display: grid;
  gap: 2rem;
}

.post-card {
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.post-card h3 {
  margin-top: 0;
  color: #2c3e50;
}

.date {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.excerpt {
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: #3498db;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
}
</style>