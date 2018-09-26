import React, { ReactNode } from 'react'
import { defineComponent, isElement, withChildren } from 'js-react-utils'
import { Spec } from 'js-spec'

type Props = {
  children: ReactNode
}

export default defineComponent({
  displayName: 'jrf:CompoundField',

  properties: {
    children: {
      optional: true,
      validate: withChildren(Spec.all(isElement))
    }
  },

  render(props: Props) {
    return (
      <div className="jrf-compound-filed" style={{ display: 'flex' }}>
        {
          React.Children.map(props.children, child => {
            return child
          })
        }
      </div>
    )
  }
})
