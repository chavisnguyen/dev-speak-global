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

### Custom domain

Khi dùng **custom domain** (vd: `https://devenglish.com/`), site chạy ở root nên cần build với base `/`:

1. Vào **Settings → Pages** → nhập **Custom domain** → Save.
2. Cấu hình DNS tại nhà đăng ký domain (CNAME trỏ `www` tới `username.github.io`, hoặc A record theo [hướng dẫn GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. Trong repo: **Settings → Secrets and variables → Actions** → **Variables** → **New repository variable**:
   - Name: `VITE_BASE_PATH`
   - Value: `/`
4. Chạy lại workflow (push hoặc Run workflow) để deploy với base `/`.
