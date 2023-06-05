import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5a1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '193'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c8d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '1f4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '988'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b29'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '83d'),
    exact: true
  },
  {
    path: '/api',
    component: ComponentCreator('/api', '2a8'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '03f'),
    routes: [
      {
        path: '/docs/category/integrations',
        component: ComponentCreator('/docs/category/integrations', 'f95'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/category/use-cases',
        component: ComponentCreator('/docs/category/use-cases', 'c7b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/category/workflows',
        component: ComponentCreator('/docs/category/workflows', '2c4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/integrations/camunda',
        component: ComponentCreator('/docs/integrations/camunda', 'fb0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/integrations/outsystems',
        component: ComponentCreator('/docs/integrations/outsystems', '16d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/integrations/rest',
        component: ComponentCreator('/docs/integrations/rest', 'dad'),
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
        path: '/docs/use-cases/box',
        component: ComponentCreator('/docs/use-cases/box', '5c3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/use-cases/invoice',
        component: ComponentCreator('/docs/use-cases/invoice', '3f8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/use-cases/recipe',
        component: ComponentCreator('/docs/use-cases/recipe', '492'),
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
        path: '/docs/workflows/linker',
        component: ComponentCreator('/docs/workflows/linker', 'e78'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/workflows/observations',
        component: ComponentCreator('/docs/workflows/observations', 'f71'),
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
    component: ComponentCreator('/', '4df'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
