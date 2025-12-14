<template>
  <div class="loading-overlay">
    <div class="loading-content">
      <img src="/animated-icon.gif" alt="Loading" class="loading-gif" />
      <p>로딩 중...</p>
    </div>
  </div>
</template>

<script setup>
// Loading Spinner 컴포넌트
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
}

.loading-gif {
  width: 100px;
  height: 100px;
}

.loading-content p {
  margin-top: 1rem;
  color: #7f8c8d;
  font-size: 1.1rem;
}
</style>