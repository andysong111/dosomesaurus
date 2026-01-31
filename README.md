# B2B 도매 자사몰 모노레포

## 구성
- apps/web: Next.js(App Router, TypeScript, Tailwind)
- apps/admin-cli: Node 기반 CLI
- functions: Firebase Cloud Functions(TypeScript)
- packages/shared: zod schema, types

## 로컬 개발

### 1) 의존성 설치
```bash
npm install
```

### 2) 환경변수 설정
```bash
cp .env.example .env.local
```
- 실제 Firebase 프로젝트 값으로 채워주세요.
- Functions 로컬 실행 시 `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`가 필요합니다.

### 3) Firebase Emulator 실행
```bash
export FIREBASE_PROJECT_ID=your-project-id
npm run dev:emulators
```

### 4) Next.js 개발 서버
```bash
npm run dev:web
```

### 5) Functions 로컬 개발
```bash
npm run dev:functions
```

### 6) Admin CLI 개발
```bash
npm run dev:admin-cli
```

## 폴더별 주요 파일
- `apps/web/src/lib/firebase/client.ts`: Web SDK 초기화
- `functions/src/index.ts`: Functions + Admin SDK 초기화
- `packages/shared/src`: 공용 타입/스키마
