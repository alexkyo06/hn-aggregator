# Hacker News 聚合器 - Vercel 部署版

为 Alex kyo 主人定制的 Hacker News 内容聚合系统，部署在 Vercel 上。

## 🚀 功能特点

- ✅ **自动聚合** - 从 Hacker News API 获取热门内容
- ✅ **智能筛选** - 基于关键词和互动量筛选优质内容
- ✅ **分类整理** - 按话题自动分类（AI、科技、编程等）
- ✅ **网页展示** - 美观的响应式网页界面
- ✅ **API 接口** - 提供 JSON 和 Telegram 格式输出
- ✅ **定时任务** - Vercel Cron 自动更新
- ✅ **缓存优化** - 30分钟缓存减少 API 调用

## 🌐 在线演示

部署后访问：
- **主页面**: `https://your-project.vercel.app`
- **API 接口**: `https://your-project.vercel.app/api/latest`
- **Telegram 格式**: `https://your-project.vercel.app/api/telegram`

## 📦 部署到 Vercel

### 方法1：一键部署（推荐）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/hn-aggregator-vercel)

### 方法2：手动部署

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录 Vercel
vercel login

# 3. 进入项目目录
cd /root/clawd/hn-vercel

# 4. 部署到 Vercel
vercel --prod
```

### 方法3：Git 部署

```bash
# 1. 创建 Git 仓库
git init
git add .
git commit -m "Initial commit"

# 2. 连接到 GitHub
git remote add origin https://github.com/your-username/hn-aggregator-vercel.git
git push -u origin main

# 3. 在 Vercel 控制台导入 GitHub 仓库
```

## ⚙️ 环境变量（可选）

在 Vercel 项目设置中添加环境变量：

```env
# 定时任务安全令牌（可选）
CRON_TOKEN=your-secret-token-here

# 其他配置
NODE_ENV=production
```

## 📡 API 接口

### 获取最新数据
```
GET /api/latest
```
返回 JSON 格式的聚合结果，包含30分钟缓存。

### 手动触发聚合
```
GET /api/aggregate
```
强制刷新数据，更新缓存。

### 获取 Telegram 格式
```
GET /api/telegram
```
返回格式化后的 Telegram 消息。

### 获取统计信息
```
GET /api/stats
```
返回服务状态和缓存信息。

### 定时任务端点
```
GET /api/cron?token=your-secret-token
```
Vercel Cron 调用的端点，需要验证令牌。

## ⏰ 定时任务配置

Vercel Cron 已配置为每天运行两次：
- **UTC 02:00** (北京时间 10:00)
- **UTC 08:00** (北京时间 16:00)

如需修改，编辑 `vercel.json` 中的 `crons` 部分。

## 🎨 前端功能

### 主页面功能
1. **实时数据展示** - 显示最新聚合结果
2. **统计面板** - 关键指标一目了然
3. **分类浏览** - 按话题查看内容
4. **故事详情** - 显示分数、评论、作者等信息
5. **原文链接** - 直接跳转到原始内容

### 控制按钮
- **刷新数据** - 手动触发数据更新
- **查看Telegram格式** - 预览发送到Telegram的消息

## 🔧 本地开发

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 访问 http://localhost:3000
```

## 📁 项目结构

```
hn-vercel/
├── api/
│   ├── index.js          # 主API路由
│   ├── aggregate.js      # 聚合器核心逻辑
│   └── cron.js           # 定时任务端点
├── public/
│   └── index.html        # 前端页面
├── package.json          # 项目配置
├── vercel.json           # Vercel配置
└── README.md             # 说明文档
```

## 🛠️ 技术栈

- **后端**: Node.js + Express
- **前端**: HTML5 + CSS3 + JavaScript
- **API**: Hacker News Firebase API
- **部署**: Vercel Serverless Functions
- **定时任务**: Vercel Cron
- **缓存**: 内存缓存（30分钟）

## 🔒 安全考虑

1. **API 速率限制** - 合理控制请求频率
2. **缓存机制** - 减少对 Hacker News API 的调用
3. **Cron 验证** - 定时任务需要令牌验证
4. **错误处理** - 完善的错误处理和日志

## 📈 性能优化

- **响应式设计** - 适配各种设备屏幕
- **缓存策略** - 30分钟数据缓存
- **懒加载** - 按需加载内容
- **代码分割** - 优化加载速度

## 🔄 更新日志

### v1.0.0 (2026-02-10)
- 初始版本发布
- 完整的聚合功能
- Vercel 部署支持
- 网页界面和 API
- 定时任务配置

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 📄 许可证

MIT License - 详见 LICENSE 文件。

---

**为 Alex kyo 主人定制** 🦞

部署后，您可以通过网页查看最新内容，也可以通过 API 获取数据自动发送到 Telegram。