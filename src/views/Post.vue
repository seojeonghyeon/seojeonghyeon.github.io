<template>
  <div class="post" v-if="post">
    <article>
      <header>
        <h1>{{ post.title }}</h1>
        <div class="meta">
          <span class="date">{{ formatDate(post.date) }}</span>
          <div class="tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </header>
      <div class="content" v-html="post.content"></div>
    </article>
    <router-link to="/" class="back-link">← 홈으로 돌아가기</router-link>
  </div>
  <div v-else class="not-found">
    <h2>포스트를 찾을 수 없습니다.</h2>
    <router-link to="/">홈으로 돌아가기</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getPost } from '../utils/markdownLoader'

const route = useRoute()
const post = ref(null)

onMounted(async () => {
  post.value = await getPost(route.params.slug)
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

article {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

header {
  margin-bottom: 2rem;
  border-bottom: 1px solid #e1e5e9;
  padding-bottom: 1rem;
}

h1 {
  color: #2c3e50;
  margin-top: 0;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.date {
  color: #7f8c8d;
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: #3498db;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.content {
  line-height: 1.8;
  color: #34495e;
}

.content h2, .content h3 {
  color: #2c3e50;
  margin-top: 2rem;
}

.content pre {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}

.back-link {
  display: inline-block;
  margin-top: 2rem;
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
}
</style>