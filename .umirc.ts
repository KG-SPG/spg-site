import { defineConfig } from 'umi';

export default defineConfig({
  title: '语义增强可编程知识图谱SPG',
  favicons: [
    'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*JiTDRaNWTQkAAAAAAAAAAAAADtmcAQ/original',
  ],
  routes: [
    { path: '/', component: 'index' },
    { path: '/introduction', component: 'introduction' },
  ],
  npmClient: 'pnpm',
  headScripts: [
    'https://www.googletagmanager.com/gtag/js?id=G-7XLKHE56WW',
    "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-7XLKHE56WW');",
  ],
});