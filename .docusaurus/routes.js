import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/api',
    component: ComponentCreator('/docs/api', 'b71'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', '566'),
    exact: true
  },
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', '894'),
    routes: [
      {
        path: '/docs/docs/category/workflows',
        component: ComponentCreator('/docs/docs/category/workflows', '03d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/docs/intro',
        component: ComponentCreator('/docs/docs/intro', '3b5'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/docs/workflows/executions',
        component: ComponentCreator('/docs/docs/workflows/executions', 'aeb'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/docs/workflows/pipeline',
        component: ComponentCreator('/docs/docs/workflows/pipeline', '5d5'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'efd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
