import React from 'react';
import { useState,useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import './index.scss';
// import { LoginMethod } from './method';
import MyNavLink from '../Footer/footer'
import { Space ,Button,message} from 'antd';
import { getLogin } from "../../api/index";
export default function Login() {
  let [state, setState] = useState(false);
// 判断是否记住账号，是，储存账号信息于本地，否，删除密码；memorize：记住
  function memorize() {
    setState(!state);
    let userNameValue = document.querySelector('#user').value;
    // let passWorldValue = document.querySelector('#pasw').value;
    if (!state) {
      localStorage.setItem('username', userNameValue);
      // localStorage.setItem('passworld', passWorldValue);
    } else {
      // localStorage.removeItem('username');
      // localStorage.removeItem('passworld');
    }
  }
// 当本地有账号用户名时，聚焦补充用户名
  let userFocus = () => {
    let username = localStorage.getItem('username');
    let userNameValue = document.querySelector('#user');
    if (username) {
      userNameValue.value = username;
    }
  };

// 当本地有账号密码时，聚焦补充密码
  let paswFocus = () => {
    let passWorld = localStorage.getItem('passworld');
    let passWorldValue = document.querySelector('#pasw');
    if (passWorld) {
      passWorldValue.value = passWorld;
    }
  };

  let navigate = useNavigate()
  // 登录判断
  function LoginMethod() {
    let user = document.querySelector("#user").value;
    let pasw = document.querySelector("#pasw").value;
    let tips = document.querySelector(".tips");
    // console.log(tips);
  
    // user
    function isUser(user) {
      return new Promise((resolve, reject) => {
        const reg = /^[a-zA-Z0-9_-]{4,16}$/;
        if (!user.match(reg)) {
          reject("用户名格式数字字母下划线4-16位");
          tips.innerHTML = "用户名格式数字字母下划线4-16位";
        } else {
          resolve("用户名格式正确");
        }
      });
    }
    // 全局提示
    const success = () => {
      message.success("登陆成功");
      window.location.reload()
    };
    const warning = () => {
      message.warning("密码或用户名错误");
    };
    function clean() {
      tips.innerHTML = "";
    }
  
    // 判断密码格式
    function isPassword(pasw) {
      return new Promise((resolve, reject) => {
        // 密码必须包含大小写字母,特殊字符和数字，且长度不低于8位
        var d =/^[a-zA-Z0-9_-]{4,16}$/;
  
        if (!pasw.match(d)) {
          reject("密码必须包含大小写字母,特殊字符和数字,且长度不低于8位");
          tips.innerHTML =
            "密码必须包含大小写字母,特殊字符和数字,且长度不低于8位";
        } else {
          resolve("密码格式正确");
        }
      });
    }
  
    Promise.all([isUser(user), isPassword(pasw)]).then(
      (x) => {
        console.log(x, "success");
        getLogin(user, pasw).then((res) => {
          // console.log(res);
          // console.log(res.token);
  
          if (res.code == 200) {
            success();
            clean();
            localStorage.setItem("customer_id", res.customer_id);
            localStorage.setItem("username", user);
            localStorage.setItem("token", res.token);
            
          }
          // console.log(
          //   localStorage.getItem("username"),
          //   localStorage.getItem("token")
          // );
          // console.log(localStorage.getItem("customer_id"));
        });
      },
      (y) => {
        warning();
        // console.log(y, "error");
      }
    );
  }
  
  return (
    <div className='bigLogin'>
      <div className='skr-bigLogin'>
      <header>
        <h2>登录</h2>
      </header>
      <form action='#'>
        <div className='inpBig'>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <label htmlFor='user'>用户名</label>
                </td>
                <td>
                  <input id='user' placeholder='请输入用户名' type='text' onFocus={()=>{userFocus()}}/>
                </td>
                <td rowSpan='2'>
                  <Space>
                    <Button 
                    className='dl'
                    onClick={() => {
                      LoginMethod();
                    }}
                  >
                    登录
                  </Button>
                  </Space>
                  
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='pasw'>密码</label>
                </td>
                <td>
                  <input id='pasw' placeholder='请输入密码' type='text' onFocus={()=>{paswFocus()}} />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <span>
                    <img
                      onClick={() => {
                        memorize();
                      }}
                      src='/images/login/goubai.png'
                      alt=''
                      className={!state ? 'isDisplay' : ''}
                    />
                    <img
                      onClick={() => {
                        memorize();
                      }}
                      src='/images/login/gouhei.png'
                      alt=''
                      className={state ? 'isDisplay' : ''}
                    />
                    <button
                      onClick={() => {
                        memorize();
                      }}
                      className='btn'
                    >
                      记住账号
                    </button>
                  </span>
                </td>
                <td>
                  <ul>
                    <li>找回用户名</li>
                    <li>|</li>
                    <li>忘记密码</li>
                  </ul>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>
                  <span className='tips red'></span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className='warning'></div>
        <div className='three'>
          <h3>第三方登录</h3>
          <ul>
            <li>
              &#x3000; <img src='/images/login/QQ.png' alt='' /> &#x3000;QQ
            </li>
            <li>|</li>
            <li>
              <img src='/images/login/Weixin.png' alt='' />
              &#x3000; 微信
            </li>
          </ul>
        </div>
        <ul className='foot'>
          <li>
            <p>
              <span>还不是SKR-SHOP成员？</span>
              <br />
              <span>如果您注册成为会员，您将获得10％的折扣券。</span>
            </p>
            <Link to={'/resigin'}>
              <button className='skr-btn'>注册</button>
            </Link>
            
          </li>
          <li>
            <p>
              <span >需要非会员订单/交货查询吗？</span><button className='skr-btn'>非会员订单查询</button>
            </p>
            
          </li>
        </ul>
      </form>
      </div>
      
      <MyNavLink/>
    </div>
  );
}
