import FormCtrl from '../controller/FormCtrl'
import { defineContext } from 'js-react-utils'
import { Spec } from 'js-spec'

export default defineContext<FormCtrl | null>({
  displayName: 'jrf:FormCtx',
  type: FormCtrl,
  nullable: true,
  defaultValue: null
}) 
