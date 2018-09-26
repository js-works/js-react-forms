import FormCtrl from '../controller/FormCtrl'
import FormCtx from '../context/FormCtx'
import getNewId from '../../internal/helper/getNewId'
import Styles from '../../internal/type/Styles'
import React from 'react'
import { defineComponent } from 'js-react-utils'

type Props = {
  value?: string,
  labelText?: string,
  errorText?: string
}

type Injections = {
  formCtrl: FormCtrl
}

type P = Props & Injections

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  input: {

  }
}

export default defineComponent<Props, Injections>({
  displayName: 'jrf:TextField',

  properties: {
    value: {
      type: String,
      optional: true
    },

    labelText: {
      type: String,
      optional: true
    },

    errorText: {
      type: String,
      optional: true
    }
  },

  inject: {
    formCtrl: {
      kind: 'context',
      source: FormCtx
    }
  },

  main: class extends React.Component<P> {
    constructor(props: P) {
      super(props)
    }

    render() {
      const
        hasLabel = !!(this.props.labelText && this.props.labelText.length > 0),
        id = hasLabel ? getNewId() : null,

        label =
          hasLabel
            ? <label htmlFor={id} className="jrf-text-field__label">
                {this.props.labelText}
              </label>
            : null,

        input =
          <input id={id}
            className="jrf-text-field__input"
            style={styles.input}
           />

      return (
        <div className="jrf-text-field" style={styles.container}>
          { label && <div>{label}</div> }
          <div>{input}</div>
        </div>
      )
    }
  }
})
