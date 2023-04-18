import React from 'react';
import ReactDOM from 'react-dom';
// routing
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router';
// antd
import { ConfigProvider, theme } from 'antd';
import './theme.css';

ReactDOM.render(
  <ConfigProvider theme={theme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
);
