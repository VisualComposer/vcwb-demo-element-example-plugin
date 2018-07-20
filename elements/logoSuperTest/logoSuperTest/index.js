/* eslint-disable import/no-webpack-loader-syntax */
import vcCake from 'vc-cake'
import LogoSuperTest from './component'

const vcvAddElement = vcCake.getService('cook').add

vcvAddElement(
  require('./settings.json'),
  // Component callback
  (component) => {
    component.add(LogoSuperTest)
  },
  // css settings // css for element
  {
    'css': require('raw-loader!./styles.css'),
    'editorCss': require('raw-loader!./editor.css'),
    'mixins': {}
  },
  ''
)
