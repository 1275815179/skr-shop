import { useState } from "react";
import { getLogin } from "../../../api/index";
import { message } from "antd";
export function LoginMethod() {
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
        console.log(res);
        console.log(res.token);

        if (res.code == 200) {
          success();
          clean();
          localStorage.setItem("customer_id", res.customer_id);
          localStorage.setItem("username", user);
          localStorage.setItem("token", res.token);
        }
        console.log(
          localStorage.getItem("username"),
          localStorage.getItem("token")
        );
        console.log(localStorage.getItem("customer_id"));
      });
    },
    (y) => {
      warning();
      console.log(y, "error");
    }
  );
}
