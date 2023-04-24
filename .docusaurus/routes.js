import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/api',
    component: ComponentCreator('/api', 'bd5'),
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
