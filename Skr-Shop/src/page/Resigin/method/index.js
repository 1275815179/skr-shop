// import React from 'react';
import { getRegister } from '../../../api';
export default function RegisterMethod() {
  let user = document.querySelector('#user').value;
  let paswd = document.querySelector('#paswd').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let code = document.querySelector('#code').value;
  let userSmall = document.querySelector('.userSmall');
  let paswdSmall = document.querySelector('.paswdSmall');
  let emailSmall = document.querySelector('.emailSmall');
  let phoneSmall = document.querySelector('.phoneSmall');
  let codeSmall = document.querySelector('.codeSmall');
  // 用户名校验
  function isUser(user) {
    return new Promise((resolve, reject) => {
      const reg = /^[a-zA-Z0-9_-]{4,16}$/;
      if (!user.match(reg)) {
        reject('用户名格式数字字母下划线4-16位');
        userSmall.style.display = 'block';
      } else {
        resolve('用户名格式正确');
        userSmall.style.display = 'none';
      }
    });
  }

  // 手机号校验
  function isPhoneNumber(phone) {
    return new Promise((resolve, reject) => {
      var a = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (!phone.match(a)) {
        reject('手机号格式错误');
        phoneSmall.style.display = 'block';
      } else {
        resolve('手机号格式正确');
        phoneSmall.style.display = 'none';
      }
    });
  }
  //   密码校验
  function isPassword(paswd) {
    return new Promise((resolve, reject) => {
      // 密码必须包含大小写字母,特殊字符和数字，且长度不低于8位
      var d = /^[a-zA-Z0-9_-]{4,16}$/;

      if (!paswd.match(d)) {
        reject('密码必须包含大小写字母,特殊字符和数字,且长度不低于8位');
        paswdSmall.style.display = 'block';
      } else {
        resolve('密码格式正确');
        paswdSmall.style.display = 'none';
      }
    });
  }
  //   邮箱校验
  function isEmail(email) {
    return new Promise((resolve, reject) => {
      var e = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

      if (!email.match(e)) {
        reject('邮箱格式错误');
        emailSmall.style.display = 'block';
        // display: block;
      } else {
        resolve('邮箱格式正确');
        emailSmall.style.display = 'none';
      }
    });
  }
  //   手机验证码校验
  function isCode(code) {
    return new Promise((resolve, reject) => {
      var c = /^666666$/;

      if (!code.match(c)) {
        reject('验证码格式错误');
        codeSmall.style.display = 'block';
      } else {
        resolve('验证码格式正确');
        codeSmall.style.display = 'none';
      }
    });
  }
  // 用户名，密码，手机号，邮箱格式同时校验，都正确时，发送注册请求，失败，返回失败信息
  Promise.all([isUser(user), isPassword(paswd), isEmail(email), isCode(code)]).then(
    (x) => {
      console.log(x, 'success');
      getRegister(user, paswd, email, code).then((res) => {
        // console.log(res);

        if (res.code == 200) {
          console.log(res);
          let registrationCompleted = document.querySelector('#registrationCompleted');
          registrationCompleted.style.backgroundColor = 'black';
          registrationCompleted.children[0].src='/images/register/completed1.png'
        }
      });
    },
    (y) => {
      console.log(y, 'error');
    },
  );

  
}
