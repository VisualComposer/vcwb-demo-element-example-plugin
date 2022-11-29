import React from 'react'
import lodash from 'lodash'
import { getService } from 'vc-cake'
import { setCssVariables } from 'vc-helpers'

const vcvAPI = getService('api')

export default class DemoGrid extends vcvAPI.elementComponent {
  constructor (props) {
    super(props)
    this.ref = React.createRef()
    this.state = {
      shortcode: '',
      shortcodeContent: this.spinnerHTML()
    }
    this.debounceRequest = lodash.debounce(this.requestToServer, 750)
  }

  componentDidMount () {
    this.requestToServer()
  }

  componentDidUpdate (prevProps) {
    const isEqual = lodash.isEqual
    if (!isEqual(this.props.atts, prevProps.atts)) {
      this.debounceRequest()
    }
  }

  componentwillUnmount () {
    if (this.serverRequest) {
      this.serverRequest.cancelled = true
    }
  }

  requestToServer () {
    if (!this.props.atts.gridItem || !this.props.atts.sourceItem) {
      return
    }
    const dataProcessService = getService('dataProcessor')
    const Cook = getService('cook')
    const GridItemComponent = Cook.get(this.props.atts.gridItem)
    const SourceItemComponent = Cook.get(this.props.atts.sourceItem)
    const gridItemOutput = GridItemComponent.render(null, false)
    const sourceItemOutput = SourceItemComponent.render(null, false)
    const ReactDOMServer = require('react-dom/server')
    const striptags = require('striptags')
    if (this.ref.current) {
      this.ref.current.innerHTML = this.spinnerHTML()
    }
    this.serverRequest = dataProcessService.appServerRequest({
      'vcv-action': 'elements:posts_grid:adminNonce',
      'vcv-nonce': window.vcvNonce,
      'vcv-content': ReactDOMServer.renderToStaticMarkup(gridItemOutput),
      'vcv-source-id': window.vcvSourceID,
      'vcv-atts': {
        source: encodeURIComponent(JSON.stringify({
          tag: this.props.atts.sourceItem.tag,
          value: striptags(ReactDOMServer.renderToStaticMarkup(sourceItemOutput))
        })),
        unique_id: this.props.id,
        excerpt: this.props.atts.atts_excerpt ? '1' : '0',
        excerpt_length: this.props.atts.atts_excerpt_length,
        pagination: this.props.atts.atts_pagination ? '1' : '0',
        pagination_color: this.props.atts.atts_pagination_color,
        pagination_per_page: this.props.atts.atts_pagination_per_page,
        filter: this.props.atts.filtersToggle,
        filter_atts: encodeURIComponent(JSON.stringify(this.props.atts.filterItem))
      }
    }).then((result) => {
      if (this.serverRequest && this.serverRequest.cancelled) {
        this.serverRequest = null
        return
      }
      const response = this.getResponse(result)
      if (response && response.status) {
        if (this.ref.current) {
          this.ref.current.setAttribute('data-vcvs-html', response.shortcode)
          this.ref.current.innerHTML = response.shortcodeContent || 'Failed to render the post grid'
        }
      } else {
        if (this.ref.current) {
          this.ref.current.setAttribute('data-vcvs-html', response.shortcode)
          this.ref.current.innerHTML = response.shortcodeContent || 'Failed to render the post grid'
        }
      }
    })
  }

  render () {
    const { id, atts, editor } = this.props
    const { customClass, metaCustomId, gap, columns, atts_pagination_color: paginationColor, atts_pagination_active_color: paginationActiveColor, atts_pagination_text_color: paginationTextColor, atts_pagination_active_text_color: paginationActiveTextColor } = atts
    const gapPx = `${gap}px`
    const paginationHoverColor = this.getColorShade(-0.1, paginationColor)
    const paginationActiveHoverColor = this.getColorShade(-0.1, paginationActiveColor)
    const cssVars = { gapPx, columns, paginationColor, paginationActiveColor, paginationTextColor, paginationActiveTextColor, paginationHoverColor, paginationActiveHoverColor }
    const styleObj = setCssVariables(cssVars)
    const wrapperClasses = 'vce vce-demo-grid-wrapper'
    const containerClasses = 'vce-demo-grid-container'

    const customProps = {}

    if (customClass) {
      containerClasses += ` ${customClass}`
    }
    if (metaCustomId) {
      customProps.id = metaCustomId
    }

    const doAll = this.applyDO('all')

    return (
      <div className={containerClasses} {...customProps} {...editor} style={styleObj}>
        <div className={wrapperClasses} id={'el-' + id} {...doAll}>
          <div className='vcvhelper' ref={this.ref} />
        </div>
      </div>
    )
  }
}
