# English for Global Devs — Landing Page

Landing page cho khóa học tiếng Anh chuyên biệt dành cho Dev / BA / Designer.

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Chạy local

```sh
pnpm install
pnpm dev
```

Build:

```sh
pnpm build
```

## Deploy lên GitHub Pages

Repo có sẵn GitHub Action để deploy lên GitHub Pages khi push lên nhánh `main`.

1. Vào **Settings → Pages** của repo trên GitHub.
2. Ở **Source** chọn **GitHub Actions**.
3. Push code lên `main` (hoặc merge PR) → workflow sẽ build và deploy.

Trang sẽ có dạng: `https://<username>.github.io/<repository-name>/`

**Lưu ý:** Nếu dùng GitHub Pages cho project site (không phải user site), base URL đã được set qua biến môi trường `VITE_BASE_PATH` trong workflow để asset load đúng.
