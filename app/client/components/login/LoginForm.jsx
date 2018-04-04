import React, {PureComponent} from 'react';
import { Button, Form, Input } from 'antd';
import { connect } from 'react-redux';
import { userLogin } from '../../models/actions/user';

const createForm = Form.create;
const FormItem = Form.Item;

function noop() {
  return false;
}

class LoginForm extends React.Component {
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      const { dispatch } = this.props;
      let token = document.querySelector("meta[name=csrf-token]").content
      dispatch(userLogin({
        _csrf:token,
        email: values.email,
        password: values.passwd
      }));
      location.href = '/'
    });
  }

  checkPass(rule, value, callback) {
    const { validateFields } = this.props.form;
    if (value) {
      validateFields(['rePasswd'], { force: true });
    }
    callback();
  }

  render() {
    let { user } = this.props;
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const emailProps = getFieldProps('email', {
      validate: [{
        rules: [
          { type: 'email',required: true, message: '请输入正确的邮箱地址' },
        ],
        trigger: ['onBlur']
      }],
    });
    const passwdProps = getFieldProps('passwd', {
      rules: [
        { required: true, whitespace: true, message: '请填写密码' },
        { validator: this.checkPass.bind(this) },
      ],
    });
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    return (
      <Form >
        <FormItem
          {...formItemLayout}
          label="用户邮箱"
          hasFeedback
        >
          <Input {...emailProps} placeholder="用户邮箱" />
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

        <FormItem wrapperCol={{ span: 12, offset: 7 }}>
          <Button type="primary" onClick={this.handleSubmit.bind(this)}>确定</Button>
        </FormItem>
      </Form>
    );
  }
};

LoginForm = createForm()(LoginForm);

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(LoginForm);