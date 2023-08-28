import { defineConfig } from 'umi';

export default defineConfig({
  title: '语义增强可编程知识图谱SPG',
  favicons: [
    'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*JiTDRaNWTQkAAAAAAAAAAAAADtmcAQ/original',
  ],
  routes: [
    { path: '/', component: './home/index' },
    { path: '/download', component: './download/index' },
  ],
  npmClient: 'pnpm',
  headScripts: [
    'https://www.googletagmanager.com/gtag/js?id=G-7XLKHE56WW',
    "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-7XLKHE56WW');",
  ],
  metas: [
    {
      name: 'keywords',
      content:
        'knowledge graph, 知识图谱, 可编程知识图谱, SPG, Semantic-Enhanced Programming Graph',
    },
    {
      name: 'description',
      content: '语义增强可编程知识图谱SPG',
    },
  ],
});
