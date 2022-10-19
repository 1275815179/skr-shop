/**
 * 这里编写 count组件的reducter
 * 
 * reducer 就是一个函数
 */

let initState = 0; // 初始状态,对于不同状态的初始状态是不同的
export default function countReducer(preventState=initState,action){
    let { type,data } = action;
    // 根据不同的type完成具体的state更新逻辑
    if(type==='add') {
        // 返回最新的状态
        return data
    }else {
        // 作用：返回初始化状态。
        return preventState 
    }
}

/**
 * 如何获取state?
 * reducer函数的返回值就是state
 * 
 * reducer函数在什么时候触发？
 * 1：store.getState();
 * 2: store.dispatch();
 * ....
 * 
 * reducer函数执行有什么作用？
 * 1：在上一个状态的基础上更改state
 * 2: 输出最新state 
 */