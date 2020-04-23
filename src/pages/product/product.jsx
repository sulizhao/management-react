import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ProductHome from './home'
import ProductAddUpdate from './add-update'
import ProductDetail from './detail'

import './product.less'

/*
商品路由
 */
export default class Product extends Component {
  render() {
    return (
      <Switch>
        <Route path='/management/product' component={ProductHome} exact/> {/*路径完全匹配*/}
        <Route path='/management/product/addupdate' component={ProductAddUpdate}/>
        <Route path='/management/product/detail' component={ProductDetail}/>
        <Redirect to='/management/product'/>
      </Switch>
    )
  }
}