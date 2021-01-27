/* eslint-disable import/no-webpack-loader-syntax */
import vcCake from 'vc-cake'
import CssVariablesButton from './component'

const vcvAddElement = vcCake.getService('cook').add

vcvAddElement(
  require('./settings.json'),
  // Component callback
  function (component) {
    component.add(CssVariablesButton)
  },
  // css for editor and element
  // no PCSS mixins included
  // styles.css is compiled from LESS source files
  // to compile styles.css run:
  // lessc cssVariablesButton/public/src/init.less cssVariablesButton/styles.css
  {
    css: require('raw-loader!./styles.css'),
    editorCss: require('raw-loader!./editor.css')
  }
)
