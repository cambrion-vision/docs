import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'fa7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'dfd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'f27'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '2ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '2cd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '153'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3fa'),
    exact: true
  },
  {
    path: '/api/',
    component: ComponentCreator('/api/', 'eca'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'eb3'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '1e9'),
    routes: [
      {
        path: '/docs/category/workflows',
        component: ComponentCreator('/docs/category/workflows', '2c4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '5ba'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/workflows/executions',
        component: ComponentCreator('/docs/workflows/executions', '81b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/workflows/pipeline',
        component: ComponentCreator('/docs/workflows/pipeline', 'e9a'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a36'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
