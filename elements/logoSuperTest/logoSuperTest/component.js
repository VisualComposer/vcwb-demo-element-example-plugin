import React from 'react'
import { getService } from 'vc-cake'
import classNames from 'classnames'

const vcvAPI = getService('api')

export default class LogoSuperTest extends vcvAPI.elementComponent {
  constructor (props) {
    super(props)
    this.state = {
      logo: window.vcvLogo || ''
    }
  }

  getLogo () {
    return (
      <div className='vcvhelper' data-vcvs-html={`[vcv_logo size=${this.props.atts.size}]`} dangerouslySetInnerHTML={{ __html: this.state.logo || '' }} />
    )
  }

  render () {
    const { id, atts, editor } = this.props
    const { size, alignment, customClass, metaCustomId } = atts
    let containerClasses = []
    let elementClasses = [ 'vce', 'vce-logo-widget' ]
    let containerStyle = {}
    let customProps = {}

    const Sizes = window.vcvImageSizes ? window.vcvImageSizes : {
        thumbnail: { width: 150 },
        medium: { width: 300 },
        large: { width: 1024 }
      }

    if (Sizes[ size ] && Sizes[ size ].width) {
      containerStyle.width = `${Sizes[ size ].width}px`
    } else {
      let sizeMatch = size.match(/\d+x\d+$/g)
      if (sizeMatch && sizeMatch.length === 1) {
        let sizes = sizeMatch[0].split('x')
        containerStyle.width = `${sizes[0]}px`
        containerStyle.height = `${sizes[1]}px`
      } else {
        containerStyle.width = ''
        containerStyle.height = ''
      }
    }

    if (alignment) {
      containerClasses.push(`vce-logo-widget--align-${alignment}`)
    }

    if (typeof customClass === 'string' && customClass) {
      containerClasses.push(customClass)
    }

    containerClasses = classNames(containerClasses)
    elementClasses = classNames(elementClasses)

    if (metaCustomId) {
      customProps.id = metaCustomId
    }

    const doAll = this.applyDO('all')

    return (
      <div {...editor} id={`el-${id}`} className={containerClasses}>
        <div className={elementClasses} style={containerStyle} {...doAll} {...customProps}>
          This is test logo: {this.getLogo()}
        </div>
      </div>
    )
  }
}
