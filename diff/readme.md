手写react differ
1. jsx(react-jsx-plugin) ->vnode(createElement)->DOM(render)

2. Component (render的第三种方式， react-jsx vnode.tag function Counter)  -> 标签化组件 ->Counter(extends)->Component类 ->render(jsx)->ReactDOM.render()

3. 响应式编程setState() 为了到大DOM的更新， 将整个dom片段都替换掉了。
a. 新生成的整个组件DOM树，重新挂载 100行DOM HTML
b. 只将setState关联的那一小段DOM，在原来的DOM的基础上做一下修改，将修改反映到DOM上， 1行
100:1？？？？HTML树 DOM开销十一班计算开销的100-1000有重绘， replaceChild
重排
React DOM diff 算法
需要是减少DOM的操作
setState 对应的DOM 部分
setState 返回一个新的vnode -> 跟旧的DOM 对比，将新的内存（虚拟）DOM 旧的DOM 对比？？