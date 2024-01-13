

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
      children
    }
  }
}

const textEl = createTextNode('app')
const App = createElement('div', { id: 'app' }, textEl)



const dom = document.createElement(App.type)
dom.id = App.props.id
document.querySelector('#root').append(dom)


const textNode = document.createTextNode("")
textNode.nodeValue = textEl.props.nodeValue
dom.append(textNode)
