<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 서정현. 모든 권리 보유.</p>
      <div class="social-links">
        <a href="https://github.com/seojeonghyeon" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/seojeonghyeon" target="_blank">LinkedIn</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer 컴포넌트
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #3498db;
}
</style>