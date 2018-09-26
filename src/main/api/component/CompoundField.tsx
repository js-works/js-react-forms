import React, { ReactNode } from 'react'
import { defineComponent, withChildren } from 'js-react-utils'

type Props = {
  children: ReactNode
}

export default defineComponent({
  displayName: 'jrf:CompoundField',

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
