import { it, expect, describe } from 'vitest'
import React from '../core/React.js'

describe('createElement', () => {
  it('should return vdom for element', () => {
    const el = React.createElement('div', null, 'hi')

    // expect(el).toMatchInlineSnapshot(`
    //   {
    //     type: 'div',
    //     props: {
    //       children: [
    //         {
    //           type: 'TEXT_ELEMENT',
    //           props: {
    //             nodeValue: 'hi',
    //             children: []
    //           }
    //         }
    //       ]
    //     }
    //   }
    // `)

    expect(el).toEqual({
      type: 'div',
      props: {
        children: [
          {
            type: 'TEXT_ELEMENT',
            props: {
              nodeValue: 'hi',
              children: []
            }
          }
        ]
      }
    })
  })
})