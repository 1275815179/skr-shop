/**
 * 用来导出一个store对象，整个应用只有一个store
 * 
 */

// 如何创建又给store对象并且导出呢
 
// createStore 作用：创建一个store实例对象
import { createStore } from 'redux';
// 导入自定义的 reducter
import countReducter from './countReducer'

let store =  createStore(countReducter)
// 导出store实例对象
export default store