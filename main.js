

// v2 react -> vdom -> js object

// 创建 虚拟dom 对象

// type props children


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
  const dom = el.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(el.type)
  Object.keys(el.props).forEach(key => {
    if (key !== "children") {
      dom[key] = el.props[key]
    }
  })

  const children = el.props.children;
  children.forEach(child => {
    render(child, dom)
  })

  container.append(dom)
}

const textEl = createTextNode('app')
const App = createElement('div', { id: 'app' }, 'hi,', 'mini-react')


const ReactDOM = {
  createRoot(container) {
    return {
      render(App) {
        render(App, container)
      }
    }
  }
}


ReactDOM.createRoot(document.querySelector('#root')).render(App)