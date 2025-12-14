<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="logo">Vue Tech Blog</router-link>
      <ul class="nav-links">
        <li><router-link to="/">홈</router-link></li>
        <li><router-link to="/about">소개</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// Header 컴포넌트
</script>

<style scoped>
.header {
  background: white;
  border-bottom: 1px solid #e1e5e9;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
}

.nav-links a {
  color: #34495e;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #3498db;
}
</style>