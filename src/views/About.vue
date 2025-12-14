<template>
  <div class="about">
    <h1>소개</h1>
    <div class="content">
      <p>안녕하세요! 시니어 프론트엔드 개발자 서정현입니다.</p>
      <p>10년 이상의 웹 개발 경험을 가지고 있으며, 특히 Vue.js와 최신 프론트엔드 기술에 전문성을 가지고 있습니다.</p>
      <h2>주요 기술 스택</h2>
      <ul>
        <li><strong>프론트엔드:</strong> Vue.js, React, JavaScript/TypeScript, HTML5, CSS3/SCSS</li>
        <li><strong>백엔드:</strong> Node.js, Express, Python</li>
        <li><strong>데이터베이스:</strong> MongoDB, PostgreSQL</li>
        <li><strong>DevOps:</strong> Docker, AWS, CI/CD</li>
      </ul>
      <h2>경험</h2>
      <p>다양한 규모의 프로젝트에서 프론트엔드 아키텍처 설계, 성능 최적화, 팀 리딩 등의 역할을 수행해왔습니다.</p>
      <p>이 블로그에서는 개발 경험, 기술 트렌드, 그리고 유용한 튜토리얼을 공유하고자 합니다.</p>
    </div>
  </div>
</template>

<script setup>
// About 페이지 컴포넌트
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

h1 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

.content {
  line-height: 1.8;
  color: #34495e;
}

.content h2 {
  color: #2c3e50;
  margin-top: 2rem;
}

.content ul {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
}

.content li {
  margin-bottom: 0.5rem;
}
</style>