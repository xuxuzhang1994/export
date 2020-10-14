import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="zjy1994.com"
    links={[
      {
        key: 'copyright',
        // title: 'copyright',
        href: 'https://zjy1994.com',
        blankTarget: true,
      },
    ]}
  />
);
