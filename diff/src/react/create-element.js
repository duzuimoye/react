function createElement(tag, attrs, ...children){
  attrs = attrs || {};
  // console.log(tag, attrs, ...children);
  return {
    tag,
    attrs,
    children,
    key: attrs.key || null
    //标注唯一性
  }
}
export default createElement;