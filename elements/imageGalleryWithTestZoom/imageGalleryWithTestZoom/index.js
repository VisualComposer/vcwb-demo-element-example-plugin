/* eslint-disable import/no-webpack-loader-syntax */
import { getService } from 'vc-cake'
import ImageGalleryWithTestZoom from './component'

const vcvAddElement = getService('cook').add

vcvAddElement(
  require('./settings.json'),
  // Component callback
  (component) => {
    component.add(ImageGalleryWithTestZoom)
  },
  // css settings // css for element
  {
    css: require('raw-loader!./styles.css'),
    editorCss: require('raw-loader!./editor.css'),
    mixins: {
      imageGalleryColumns: {
        mixin: require('raw-loader!./cssMixins/imageGalleryColumns.pcss')
      },
      imageGalleryGap: {
        mixin: require('raw-loader!./cssMixins/imageGalleryGap.pcss')
      }
    }
  }
)
