// v1 
// const dom = document.createElement('div')
// dom.id = 'app'
// document.querySelector('#root').append(dom)


// const textNode = document.createTextNode("")
// textNode.nodeValue = 'app'
// dom.append(textNode)


// v2 react -> vdom -> js object

// 创建 虚拟dom 对象

// type props children

const textEl = {
  type: 'div',
  props: {
    id: 'app',
    children: {
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: 'app',
        children: []
      }
    }
  }
}

const el = {
  type: 'div',
  props: {
    id: 'app',
    children: [textEl]
  }
}


const dom = document.createElement(el.type)
dom.id = el.props.id
document.querySelector('#root').append(dom)


const textNode = document.createTextNode("")
textNode.nodeValue = textEl.props.nodeValue
dom.append(textNode)
