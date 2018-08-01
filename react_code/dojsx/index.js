const React = {
  createElement
};

function createElement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children
  }
}

const ReactDOM = {
  render: (vnode, container) => {
    return render(vnode, container);
  }
};

function render(vnode, container) {
  console.log(vnode);
  if (typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode, container);
  }

  if (vnode.attrs) {
    // Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组
    Object.keys(vnode.attrs).forEach(key => {
      if (key === 'className') key = 'class';
      dom.setAttribute(key, vnode.attrs[key]);//设置 input 元素的 type 属性：
    });
  }
  const dom = document.createElement(vnode.tag);
  vnode.children.forEach(child => render(child, dom));
  return container.appendChild(dom);
}

const element = (
  <div>
    hello<span>world</span>
  </div>
);
// console.log(element);

ReactDOM.render(
  <h1>Hello, World!</h1>,
  document.getElementById('root')
);




// babel index.js -o a.js 把es6转化为es5，并且命名为a.js

