/* eslint-disable import/no-webpack-loader-syntax */
import vcCake from 'vc-cake'
import DemoGridItem from './component'

const vcvAddElement = vcCake.getService('cook').add

vcvAddElement(
  require('./settings.json'),
  // Component callback
  (component) => {
    component.add(DemoGridItem)
  },
  // css settings // css for element
  {
    css: require('raw-loader!./styles.css'),
    editorCss: false
  }
)
