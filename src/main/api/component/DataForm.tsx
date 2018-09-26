import React, { ReactNode } from 'react'

import { defineComponent, isElement, isElementOfType, withChildren }
  from 'js-react-utils'

import { Spec } from 'js-spec'

type FieldsProps = {
  children?: ReactNode
}

const Fields = defineComponent<FieldsProps>({
  displayName: 'jrf:DataForm.Fields',
  
  properties: {
    children: {
      optional: true,

      validate:
        withChildren(Spec.lazy(() =>
          Spec.all(isElement)))
    }
  },

  render() {
    throw new Error('Components of type DataForm.Fields must be '
      + 'children of DataForm.Section components')
  }
})

type SectionProps = {
  title?: string,
  children?: ReactNode
}

const Section = defineComponent<SectionProps>({
  displayName: 'jrf:DataForm.Section',
  
  properties: {
    title: {
      type: String,
      optional: true
    },

    children: {
      optional: true,

      validate:
        withChildren(Spec.lazy(() =>
          Spec.all(isElementOfType(Fields))))
    }
  },

  render() {
    throw new Error('Components of type DataForm.Section must be '
      + 'children of DataForm.Sections components')
  }
})

type SectionsProps = {
  children?: ReactNode
}

const Sections = defineComponent<SectionProps>({
  displayName: 'jrf:DataForm.Sections',

  properties: {
    children: {
      optional: true,

      validate:
        withChildren(Spec.lazy(() =>
          Spec.all(isElementOfType(Section))))
    }
  },

  render() {
    throw new Error('Components of type DataForm.Sections must be '
      + 'children of DataForm components')
  }
})

type DataFormProps = {
  children?: ReactNode
}

const DataForm = defineComponent<DataFormProps>({
  displayName: 'jrf:DataForm',

  properties: {
    children: {
      optional: true,

      validate:
        withChildren(Spec.lazy(() =>
          Spec.all(isElementOfType(Sections))))
    }
  },

  main: class extends React.Component<DataFormProps> {
    constructor(props: DataFormProps) {
      super(props)
    }

    render() {
      return (
        <div className="jrf-data-form">
          {
            React.Children.map(this.props.children, sections => {
              return renderSections(sections)
            })
          }
        </div>
      )
    }
  }
})

export default Object.assign(DataForm, {
  Sections,
  Section,
  Fields
})

function renderSections(sections: any) {
  return (
    <div data-component="jrf:DataForm.Sections">
      {
        React.Children.map(sections.props.children, section => {
          return renderSection(section)
        })
      }
    </div>
  )
}

function renderSection(section: any) {
  const
    title = section.props.title || null,
    header = title ? <div>{title}</div> : null

  return (
    <div data-component="jrf:DataForm.Section">
      { title }
      <div>
        {
          React.Children.map(section.props.children, fields => {
            return renderFields(fields)
          })
        }
      </div>
    </div>
  )
}

function renderFields(fields: any) {
  return (
    <div data-component="jrf:DataForm.Section">
      {
        React.Children.map(fields.props.children, field => {
          return field
        })
      }
    </div>
  )
}
