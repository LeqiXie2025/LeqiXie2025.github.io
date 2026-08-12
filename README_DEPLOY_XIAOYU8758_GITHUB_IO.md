# 部署到 `https://Xiaoyu8758.github.io/` 的说明

本项目已保持原始界面，仅确认并保留 GitHub Pages 静态部署所需配置。

## 目标效果

访问：

```text
https://Xiaoyu8758.github.io/
```

直接显示本项目首页。

## 必要条件

GitHub 上需要存在仓库：

```text
Xiaoyu8758/Xiaoyu8758.github.io
```

注意：这是 GitHub Pages 的“用户站点仓库”。只有放在这个仓库，根域名才会是 `https://Xiaoyu8758.github.io/`。

如果放在普通仓库，例如：

```text
Xiaoyu8758/ai-x-learning-twin-lab
```

访问地址会变成：

```text
https://Xiaoyu8758.github.io/ai-x-learning-twin-lab/
```

## 当前项目已经具备的配置

- `next.config.mjs`
  - `output: "export"`
  - GitHub Pages 模式下自动识别是否为 `*.github.io` 用户站点
  - 用户站点不添加 `basePath`
  - 普通项目站点自动添加 `basePath`
  - `images.unoptimized = true`

- `.github/workflows/deploy.yml`
  - 推送到 `main` 后自动构建
  - 使用 `pnpm@10`
  - 使用 `Node.js 22`
  - 构建 `out/`
  - 自动发布到 GitHub Pages

## 推荐部署步骤

1. 用 `Xiaoyu8758` 账号创建仓库：

```text
Xiaoyu8758.github.io
```

2. 将本项目完整源码放入该仓库根目录。

3. 推送到 `main` 分支。

4. 打开 GitHub 仓库：

```text
Settings -> Pages
```

5. Source 选择：

```text
GitHub Actions
```

6. 等待 Actions 执行完成后，访问：

```text
https://Xiaoyu8758.github.io/
```

## 本地验证命令

```bash
pnpm install --frozen-lockfile
pnpm build
```

构建成功后会生成：

```text
out/
```

`out/` 就是 GitHub Pages 发布的静态站点内容。

## 本次本地验证结果

已使用与 GitHub Actions 一致的 `pnpm@10` 完成本地验证：

```text
pnpm install --frozen-lockfile
pnpm build
```

构建通过，`out/` 已生成。

