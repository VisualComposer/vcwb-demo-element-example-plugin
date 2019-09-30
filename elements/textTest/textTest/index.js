import { getService } from 'vc-cake'
import TextTestElement from './component'

const vcvAddElement = getService('cook').add

vcvAddElement(
  require('./settings.json'),
  // Component callback
  function (component) {
    component.add(TextTestElement)
  },
  // css settings // css for element
  {
    css: false,
    editorCss: require('raw-loader!./editor.css')
  }
)
