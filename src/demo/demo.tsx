import React from 'react'
import ReactDOM from 'react-dom'
import { defineComponent } from 'js-react-utils'
import { Spec } from 'js-spec' // 3rd-party validation library
import { CompoundField, DataForm, TextField } from '../main/js-react-forms'

const Demo = defineComponent({
  displayName: 'Demo',

  render() {
    return (
      <DataForm>
        <DataForm.Sections>
          <DataForm.Section title="Address">
            <DataForm.Fields>
              <TextField labelText="First name"/>
              <TextField labelText="Last name"/>
              <CompoundField>
                <TextField labelText="Zip"/>
                <TextField labelText="City"/>
              </CompoundField>
            </DataForm.Fields>
          </DataForm.Section>

          <DataForm.Section title="Contact data">
            <DataForm.Fields>
              <TextField labelText="Phone"/>
              <TextField labelText="Mobile"/>
              <TextField labelText="E-Mail"/>
            </DataForm.Fields>
          </DataForm.Section>
        </DataForm.Sections>
      </DataForm>
    )
  }
})

ReactDOM.render(<Demo/>, document.getElementById('main-content'))
