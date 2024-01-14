function createTextNode(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  }
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => {
        return typeof child === 'string' ? createTextNode(child) : child
      })
    }
  }
}


function render(el, container) {
  nextWorkOfUnit = {
    dom: container,
    props: {
      children: [el]
    }
  }
}

function createDom(type) {
  return type === "TEXT_ELEMENT"
    ? document.createTextNode("")
    : document.createElement(type);
}

function updateDomAttribute(dom, props) {
  Object.keys(props).forEach((key) => {
    if (key !== "children") {
      dom[key] = props[key];
    }
  });
}


function initWork(work) {
  let prevChild = null;
  work.props.children.forEach((child, idx) => {
    const newWork = {
      type: child.type,
      props: child.props,
      child: null,
      parent: work,
      sibling: null,
      dom: null
    }

    console.log('newWork', newWork)

    if (idx === 0) {
      work.child = newWork;
    } else {
      prevChild.sibling = newWork
    }
    prevChild = newWork
  })
}



function performWorkOfUnit(work) {
  // 1. 创建 dom
  if (!work.dom) {


    const dom = (work.dom = createDom(work.type));

    console.log('dom: ', dom)

    // 2. 处理 props
    updateDomAttribute(dom, work.props)

    console.log('work: ', work)
    work.parent.dom.append(dom)

  }



  // 3. 转换链表 设置指针
  initWork(work)


  // 4. 返回下一个要执行的任务
  if (work.child) {
    return work.child
  }

  if (work.sibling) {
    return work.sibling
  }

  return work.parent?.sibling
}


let nextWorkOfUnit = null;
function workLoop(deadline) {
  let shouldYield = false;
  if (!shouldYield && nextWorkOfUnit) {
    // run task
    // dom render
    console.log('nextWorkOfUnit', nextWorkOfUnit)
    nextWorkOfUnit = performWorkOfUnit(nextWorkOfUnit)
    shouldYield = deadline.timeRemaining() < 1;
  }
  window.requestIdleCallback(workLoop)
}

const React = {
  render,
  createElement,
}

workLoop()

export default React