export function setAttribute(dom, name, value) {
  if(name === 'className') name = 'class';
  if(/on\w+/.test(name)) {
    name = name.toLowerCase();
    dom[name] = value || '';
  }else if(name === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value;
    }else if (value && typeof value === 'Object') {
      for(let name in value) {
        // fontSize 驼峰式命名
        dom.style[name] = typeof value[name]  === 'number' ?value[name] + 'px':value[name];
      }
    }
  }else {
    if (name in dom) {
      dom[name] = value || '';
    }
    if(value) {
      dom.setAttribute(name, value);
    }else {
      dom.removeAttribute(name, value);
    }
  }
}