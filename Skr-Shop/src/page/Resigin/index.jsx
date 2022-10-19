import React from 'react';
import RegisterMethod from './method';
import './index.scss';
import MyNavLink from '../Footer/footer'

export default function Register() {
  return (
    <div className='signup'>
      <div className='titleWarp'>
        <h2 className='sub_title'>注册</h2>
      </div>
      <div>
        <ul className='joinStep'>
          <li>
            <img src='/images/register/zhuce.png' alt='' />
            <p>1 信息输入</p>
          </li>
          {/* <li>&gt;</li> */}
          <li id='registrationCompleted'>
            <img src='/images/register/completed2.png' alt='' />
            <p>2 注册完成</p>
          </li>
        </ul>
      </div>

      <div className='infoTable'>
        <p className='must'>
          <span className='red'>*</span>
          必填项
        </p>
        <table>
          <tbody>
            <tr>
              <td colSpan={3}>
                <div>
                  <span>如果您注册成为会员，您将获得10％的折扣券,可以立即使用。</span>
                  <span>（每个完成自我认证的帐户只能使用一次）</span>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                用户名<span className='red'>*</span>
              </th>
              <td>
                <input placeholder='请输入您的用户名' type='text' name='' id='user' />
              </td>
              <td>
                <small className='userSmall'>用户名格式数字字母下划线4-16位</small>
              </td>
            </tr>
            <tr>
              <th>
                密码<span className='red'>*</span>
              </th>
              <td>
                <input placeholder='请输入您的密码' type='text' name='' id='paswd' />
              </td>
              <td>
                <small className='paswdSmall'>密码必须包含大小写字母,特殊字符和数字,且长度不低于8位</small>
              </td>
            </tr>
            <tr>
              <th>
                邮箱<span className='red'>*</span>
              </th>
              <td>
                <input placeholder='请输入您的邮箱' type='text' name='' id='email' />
              </td>
              <td>
                <small className='emailSmall'>邮箱格式错误</small>
              </td>
            </tr>
            <tr>
              <th>
                手机号<span className='red'>*</span>
              </th>
              <td>
                <input placeholder='请输入您的手机号' type='text' name='' id='phone' />
              </td>
              <td>
                <button>获取验证码</button>
                <small className='phoneSmall'>手机号格式错误</small>
              </td>
            </tr>
            <tr>
              <th>
                验证码<span className='red'>*</span>
              </th>
              <td>
                <input placeholder='请输入您的验证码' type='text' name='' id='code' />
              </td>
              <td>
                <small className='codeSmall'>验证码格式错误,暂定666666</small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='joinBtn'>
        <button>取消</button>
        <button
          onClick={() => {
            RegisterMethod();
          }}
        >
          确认
        </button>
        
      </div>
      <MyNavLink/>
    </div>
  );
}
