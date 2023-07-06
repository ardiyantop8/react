import React from 'react'
import './App.css'
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const App = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout className="min-h-screen ">
        <Header className="fixed w-full z-10">
          <div className="max-w-7xl mx-auto">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Menu 1</Menu.Item>
              <Menu.Item key="2">Menu 2</Menu.Item>
              <Menu.Item key="3">Menu 3</Menu.Item>
            </Menu>
          </div>
        </Header>

        <Content className="site-layout px-10 py-6 mt-16 " >
          <div style={{ background: colorBgContainer }} className="p-6 min-h-[500px] rounded-t-3xl rounded-b-3xl">
            <p className="font-bold font-sans">Content</p>
          </div>
        </Content>

        <Footer className="fixed w-full bottom-0">
          <div className="text-center font-bold font-sans">
            Ardiyanto Putra @2023
          </div>
        </Footer>
      </Layout>
    </>
  );
}

export default App;
