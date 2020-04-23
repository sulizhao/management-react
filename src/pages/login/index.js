import React, { Component } from 'react';
import './index.less';
import login from './images/favicon.ico';
import { Form, Input, Button, Icon, message } from 'antd';
import { reqLogin } from '../../api/index';
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import {Redirect} from 'react-router-dom'



class Login extends Component {


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props.form.getFieldsValue());
        const {
            form: { validateFields },
        } = this.props;
        validateFields(async (errors, values) => {
            // if(!errors) {
            console.log("开始登录");
            const { username, password } = values;
            const result = await reqLogin(username, password);
            if (result.status === 0) {
                // 提示登录成功
                message.success('登录成功', 2);
                // 保存用户登录信息
                const user = result.data;
                memoryUtils.user = user;
                storageUtils.saveUser(user)
                // 跳转到主页面
                this.props.history.replace('/management');
                
            } else {
                // 登录失败, 提示错误
                message.error(result.msg)
            }

            // }

        });

    }

    validateUserName = (rule, value, callback) => {
        try {
            if (!value) {
                callback("用户名不符合规则");
            } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
                callback("用户名不符合规则");
            }
        } catch (err) {
            callback(err);
        }
    }
    validatePWD = (rule, value, callback) => {
        try {
            if (!value) {
                callback("密码不符合规则");
            } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test(value)) {
                callback("用户名不符合规则");
            }
        } catch (err) {
            callback(err);
        }
    }

    render() {
        if (memoryUtils.user && memoryUtils.user._id) {
            return <Redirect to='/management'/>
            }
        const { getFieldDecorator } = this.props.form;

        return (<div className="login-container">
            <header className="login-header">
                <img src={login} alt="login" />
                <h1>后台管理系统</h1>
            </header>
            <section className="login-content">
                <h2>用户登录</h2>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ pattern: /^[a-zA-Z0-9]{4,}$/, required: true, message: 'Please input your username!' }],

                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/, required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>

                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录</Button>

                    </Form.Item>
                </Form>
            </section>

        </div>
        );
    }
}
const WrapLogin = Form.create()(Login)
export default WrapLogin