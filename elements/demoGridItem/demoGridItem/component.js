import React from 'react'
import classNames from 'classnames'
import { getService } from 'vc-cake'

const vcvAPI = getService('api')

export default class DemoGridItem extends vcvAPI.elementComponent {
  render () {
    const { padding, background, animation, aspectRatio } = this.props.atts
    const postDescriptionClasses = classNames({
      'vce-post-description': true,
      'vce-post-description--full': !padding,
      'vce-post-description--animation': animation,
      'vce-post-description--has-background': padding && background
    })
    const backgroundStyle = {}
    backgroundStyle['--aspect-ratio'] = aspectRatio
    if (padding && background) {
      backgroundStyle.backgroundColor = background
    }

    return (
      <article className='vce-demo-grid-item'>
        <div className={postDescriptionClasses} style={backgroundStyle}>
          <a href='{{post_permalink}}' className='vce-post-description-link' aria-label='{{post_title}}' />
          <div className='featured-image' style={{ backgroundImage: 'url({{featured_image_url}})' }}>
            <span className='post-category'>{'{{post_category}}'}</span>
            <h3 className='post-title'>{'{{post_title}}'}</h3>
          </div>
          {/* {'{{custom_post_description_featured_image}}'}
          {'{{custom_post_description_content}}'} */}
        </div>
      </article>
    )
  }
}
