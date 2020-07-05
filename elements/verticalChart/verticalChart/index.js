/* eslint-disable import/no-webpack-loader-syntax */
import vcCake from 'vc-cake'
import VerticalChart from './component'

const vcvAddElement = vcCake.getService('cook').add

vcvAddElement(
  require('./settings.json'),
  // Component callback
  (component) => {
    component.add(VerticalChart)
  },
  // css settings // css for element
  {
    css: require('raw-loader!./styles.css'),
    editorCss: require('raw-loader!./editor.css'),
    mixins: {
      barThickness: {
        mixin: require('raw-loader!./cssMixins/barThickness.pcss')
      },
      barValue: {
        mixin: require('raw-loader!./cssMixins/barValue.pcss')
      },
      barBackgroundColor: {
        mixin: require('raw-loader!./cssMixins/barBackgroundColor.pcss')
      }
    }
  }
)
