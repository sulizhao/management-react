import React, { Component } from 'react';
import { Redirect,Route,Switch } from 'react-router-dom';
import { Layout } from 'antd';
import memeoryUtils from '../../utils/memoryUtils';
import Header from '../../components/header';
import LeftNav from '../../components/left-nav';
import Home from '../home';
import NotFound from '../not-found';
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Order from '../order/order'

const { Footer, Sider, Content } = Layout;


/*
后台管理的路由组件
*/
export default class Admin extends Component {
    render() {
        const user = memeoryUtils.user
        if (!user._id) {
            return <Redirect to='/management/login' />
        }
        return (
            <Layout style={{ height: '100%' }}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{ margin: 20, backgroundColor: '#fff' }}>
                        <Switch>
                            <Redirect from='/management' exact to='/management/home' />
                            <Route path='/management/home' component={Home} />
                            <Route path='/management/category' component={Category} />
                            <Route path='/management/product' component={Product} />
                            <Route path='/management/user' component={User} />
                            <Route path='/management/role' component={Role} />
                            <Route path="/management/charts/bar" component={Bar} />
                            <Route path="/management/charts/pie" component={Pie} />
                            <Route path="/management/charts/line" component={Line} />
                            <Route path="/management/order" component={Order} />
                            <Route component={NotFound} /> 
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center', color: '#aaaaaa' }}>推荐使用谷歌浏览器，
    可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        )
    }
}