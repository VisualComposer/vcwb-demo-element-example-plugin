import React from 'react'
import classNames from 'classnames'
import { getService } from 'vc-cake'

const vcvAPI = getService('api')

export default class DemoGridItem extends vcvAPI.elementComponent {
  render () {
    const { padding, background, animation } = this.props.atts
    const postDescriptionClasses = classNames({
      'vce-post-description': true,
      'vce-post-description--full': !padding,
      'vce-post-description--animation': animation,
      'vce-post-description--has-background': padding && background
    })
    const backgroundStyle = {}
    if (padding && background) {
      backgroundStyle.backgroundColor = background
    }

    return (
      <article className='vce-demo-grid-item'>
        <div className={postDescriptionClasses} style={backgroundStyle}>
          <a href='{{post_permalink}}' className='vce-post-description-link' aria-label='{{post_title}}' />
          {'{{custom_post_description_featured_image}}'}
          {'{{custom_post_description_content}}'}
        </div>
      </article>
    )
  }
}
