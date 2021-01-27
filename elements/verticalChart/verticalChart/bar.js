import React from 'react'
import classNames from 'classnames'

export default class Bar extends React.Component {
  render () {
    const { colorType, getMixin, itemIndex } = this.props
    const { title, value } = this.props.atts
    let containerClasses = ['vce-bar-container']
    const titleProps = {}
    titleProps.style = {}
    const valueProps = {}
    valueProps.style = {}
    const customProps = {}

    let mixin = getMixin('barValue', itemIndex)
    if (mixin) {
      containerClasses.push(`vce-bar--value-${mixin.selector}`)
    }

    mixin = getMixin('barColor', itemIndex)
    if (mixin) {
      const colorClass = `vce-bar--${colorType}-${mixin.selector}`
      containerClasses.push(colorClass)
    }

    mixin = getMixin('barBackgroundColor', itemIndex)
    if (mixin) {
      containerClasses.push(`vce-bar--background-color-${mixin.selector}`)
    }

    containerClasses = classNames(containerClasses)

    customProps['data-vce-count-up-end-value'] = value || 0
    customProps['data-vce-count-up-start-value'] = 0
    customProps['data-vce-count-up-grouping'] = false
    customProps['data-vce-count-up-duration'] = 1
    customProps['data-vce-count-up-easing'] = false

    return (
      <div className={containerClasses} {...customProps}>
        <span className='vce-bar-value' {...valueProps}>
          <span className='vce-bar-value-result'>0</span>%
        </span>
        <div className='vce-bar-wrapper'>
          <progress className='vce-bar' value={value} max='100'>{value} %</progress>
        </div>
        <div className='vce-bar-text'>
          <h4 className='vce-bar-title' {...titleProps}>{title}</h4>
        </div>
      </div>
    )
  }
}
