/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import ReactDOMClient from 'react-dom/client'

import rootComponent from './App';
import singleSpaReact from 'single-spa-react';

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent,
  errorBoundary(err: any, info: any, props: any) {
    console.error(err);
  },
});