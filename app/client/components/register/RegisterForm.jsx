import React, {PureComponent} from 'react';
import { Button, Form, Input } from 'antd';
import { connect } from 'react-redux';
import { userSignup } from '../../models/actions/user';

const createForm = Form.create;
const FormItem = Form.Item;

function noop() {
  return false;
}

class RegisterForm extends PureComponent {
  constructor() {
    super();
  }

  redirectToHome() {
    let { user } = this.props;
    if(user.login) {
      this.props.redirectTo('/')
    }
  }

  componentWillMount() {
    this.redirectToHome();
  }
  componentWillUpdate() {
    this.redirectToHome();
  }

  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      const { dispatch } = this.props;
      let token = document.querySelector("meta[name=csrf-token]").content
      dispatch(userSignup({
        _csrf:token,
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.passwd
      }));
      // location.href = '/'
    });
  }

  userExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (value === 'JasonWood') {
          callback([new Error('抱歉，该用户名已被占用。')]);
        } else {
          callback();
        }
      }, 800);
    }
  }

  checkPass(rule, value, callback) {
    const { validateFields } = this.props.form;
    if (value) {
      validateFields(['rePasswd'], { force: true });
    }
    callback();
  }

  checkPass2(rule, value, callback) {
    const { getFieldValue } = this.props.form;
    if (value && value !== getFieldValue('passwd')) {
      callback('两次输入密码不一致！');
    } else {
      callback();
    }
  }

  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const nameProps = getFieldProps('name', {
      rules: [
        { required: true, min: 5, message: '昵称至少为 5 个字符' },
        { validator: this.userExists },
      ],
    });
    const usernameProps = getFieldProps('username', {
      rules: [
        { required: true, min: 5, message: '用户名至少为 5 个字符' },
        { validator: this.userExists },
      ],
    });
    const emailProps = getFieldProps('email', {
      validate: [{
        rules: [
          { required: true },
        ],
        trigger: 'onBlur',
      }, {
        rules: [
          { type: 'email', message: '请输入正确的邮箱地址' },
        ],
        trigger: ['onBlur'],
      }],
    });
    const passwdProps = getFieldProps('passwd', {
      rules: [
        { required: true, whitespace: true, message: '请填写密码' },
        { validator: this.checkPass.bind(this) },
      ],
    });
    const rePasswdProps = getFieldProps('rePasswd', {
      rules: [{
        required: true,
        whitespace: true,
        message: '请再次输入密码',
      }, {
        validator: this.checkPass2.bind(this),
      }],
    });
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    return (
      <Form >
        <FormItem
          {...formItemLayout}
          label="昵称"
          hasFeedback
          help={isFieldValidating('name') ? '校验中...' : (getFieldError('name') || []).join(', ')}
        >
          <Input {...nameProps} placeholder="昵称" />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="用户名"
          hasFeedback
          help={isFieldValidating('username') ? '校验中...' : (getFieldError('username') || []).join(', ')}
        >
          <Input {...usernameProps} placeholder="用户名" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="邮箱"
          hasFeedback
        >
          <Input {...emailProps} type="email" placeholder="邮箱" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="密码"
          hasFeedback
        >
          <Input {...passwdProps} type="password" autoComplete="off"
            onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
            placeholder="密码"
          />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
        >
          <Input {...rePasswdProps} type="password" autoComplete="off" placeholder="两次输入密码保持一致"
            onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
          />
        </FormItem>
        <FormItem wrapperCol={{ span: 12, offset: 7 }}>
          <Button type="primary" onClick={this.handleSubmit.bind(this)}>确定</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.handleReset.bind(this)}>重置</Button>
        </FormItem>
      </Form>
    );
  }
};

RegisterForm = createForm()(RegisterForm);

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(RegisterForm);