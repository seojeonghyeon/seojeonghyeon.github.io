# Vue Tech Blog

시니어 프론트엔드 개발자의 Vue.js 기술 블로그입니다.

## 특징

- **Vue 3 + Composition API**: 최신 Vue.js 기술 사용
- **화이트톤 디자인**: 깔끔하고 모던한 UI
- **동적 로딩 애니메이션**: 페이지 전환 시 animated-icon.gif로 프록시 효과
- **마크다운 블로그**: `_posts` 폴더에 마크다운 파일로 포스트 작성
- **반응형 디자인**: 모바일 친화적

## 기술 스택

- **프론트엔드**: Vue 3, Vue Router, SCSS
- **빌드 도구**: Vite
- **마크다운 처리**: Markdown-it, Highlight.js
- **배포**: GitHub Pages

## 시작하기

1. **개발 서버 실행**:
   ```bash
   npm install
   npm run dev
   ```

2. **빌드**:
   ```bash
   npm run build
   ```

3. **GitHub Pages 배포**:
   - **자동 배포 (권장)**: main 브랜치에 푸시하면 GitHub Actions가 자동으로 빌드 및 배포
   - **수동 배포**: `npm run deploy` 명령어로 자동 배포 (gh-pages 브랜치에 푸시)

## GitHub Pages 설정

1. GitHub 리포지토리에서 **Settings** > **Pages**로 이동
2. **Source**: "Deploy from a branch" 선택
3. **Branch**: `gh-pages` / `/(root)` 선택
4. 저장

### 수동 배포 방법 (선택사항)

GitHub Actions를 사용하지 않는 경우:

```bash
# 의존성 설치
npm install

# 빌드
npm run build

# gh-pages 설치 (최초 1회)
npm install -g gh-pages

# 배포
npm run deploy
```

## animated-icon.gif 설정

페이지 로딩 애니메이션에 사용할 GIF 파일을 `public/animated-icon.gif`에 추가하세요.

- 크기: 100x100px 정도 권장
- 투명 배경 사용
- `public/animated-icon.gif.placeholder` 파일을 실제 GIF로 교체

## 포스트 작성

`_posts` 폴더에 다음과 같은 형식으로 마크다운 파일을 추가하세요:

```markdown
---
title: "포스트 제목"
date: 2024-12-14
tags: ["태그1", "태그2"]
excerpt: "포스트 요약"
---

# 포스트 내용

마크다운 형식으로 작성...
```

## animated-icon.gif

페이지 로딩 애니메이션에 사용할 GIF 파일을 `public/animated-icon.gif`에 추가하세요.
