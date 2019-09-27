import React from 'react'
import { getService } from 'vc-cake'
import classNames from 'classnames'

const vcvAPI = getService('api')

export default class ImageGalleryWithTestZoom extends vcvAPI.elementComponent {
  imageSources = []
  imageOrder = {}

  constructor (props) {
    super(props)
    this.createCustomSizeImage = this.createCustomSizeImage.bind(this)
  }

  componentDidMount () {
    this.imageSources = []
    this.imageOrder = {}
    this.prepareImage(this.props.atts.image)
  }

  componentWillReceiveProps (nextProps) {
    this.imageSources = []
    this.imageOrder = {}
    this.prepareImage(nextProps.atts.image)
  }

  prepareImage (image) {
    if (image.length && typeof image[0] === 'object') {
      let newImages = []
      image.forEach((item, index) => {
        let newItem = item
        newItem.full = newItem.id ? newItem.full : this.getImageUrl(newItem.full)
        newItem.id = newItem.id ? newItem.id : Math.random()
        newImages.push(item)
      })
      image = newImages
      this.setImageOrder(image)
      this.resizeImage(image)
    }
    let imgArr = []
    image.forEach((img) => {
      if (image && image.id) {
        imgArr.push({imgSrc: this.getImageUrl(img)})
      } else {
        imgArr.push({imgSrc: this.getImageUrl(img)})
      }
    })
    this.setImgSrcState(imgArr)
  }

  setImageOrder (imageArray) {
    imageArray.forEach((image, index) => {
      this.imageOrder[index] = image.id
    })
  }

  checkImageSize (image, callback, imgCount) {
    let img = new window.Image()
    img.onload = () => {
      let size = {
        width: img.width,
        height: img.height
      }
      callback(image, size, imgCount)
    }
    img.src = image.full
  }

  resizeImage (imageArray) {
    imageArray.forEach((image) => {
      this.checkImageSize(image, this.createCustomSizeImage, imageArray.length)
    })
  }

  createCustomSizeImage (image, size, imgCount) {
    image.orientation = this.checkOrientation(size)
    let checkImg = this.imageSources.filter((obj) => {
      return obj.id === image.id
    })
    if (!checkImg.length) {
      this.imageSources.push(image)
    }

    if (this.imageSources.length === imgCount) {
      this.orderImages()
    }
  }

  orderImages () {
    let imagesInOrder = []
    this.imageSources.forEach((img, index) => {
      let imgObj = this.imageSources.filter((obj) => {
        return obj.id === this.imageOrder[index]
      })
      if (imgObj[0]) {
        imagesInOrder.push({
          imgSrc: this.getImageUrl(imgObj[0], 'large'),
          orientation: imgObj[0].orientation,
          originalSrc: this.getImageUrl(imgObj[0]),
          alt: imgObj[0].alt,
          title: imgObj[0].title
        })
      }
    })

    this.setImgSrcState(imagesInOrder)
  }

  checkOrientation (size) {
    return size.width >= size.height ? 'landscape' : 'portrait'
  }

  setImgSrcState (imgSrc) {
    this.setState({imgSrc})
  }

  render () {
    const {id, atts, editor} = this.props
    const {image, shape, clickableOptions, showCaption, zoomEffect, customClass, metaCustomId} = atts
    let containerClasses = [ 'vce-image-gallery-with-zoom' ]
    let wrapperClasses = [ 'vce', 'vce-image-gallery-with-zoom-wrapper' ]
    let containerProps = {}
    let CustomTag = 'div'
    let imgSrc = this.state && this.state.imgSrc

    if (typeof customClass === 'string' && customClass) {
      containerClasses.push(customClass)
    }

    let mixinData = this.getMixinData('imageGalleryGap')
    if (mixinData) {
      containerClasses.push(`vce-image-gallery-with-zoom--gap-${mixinData.selector}`)
    }

    mixinData = this.getMixinData('imageGalleryColumns')
    if (mixinData) {
      containerClasses.push(`vce-image-gallery-with-zoom--columns-${mixinData.selector}`)
    }

    if (shape === 'rounded') {
      containerClasses.push('vce-image-gallery-with-zoom--border-rounded')
    }

    if (shape === 'round') {
      containerClasses.push('vce-image-gallery-with-zoom--border-round')
    }

    if (zoomEffect) {
      containerClasses.push(`vce-image-gallery-with-zoom--effect-${zoomEffect}`)
    }

    if (metaCustomId) {
      containerProps.id = metaCustomId
    }

    let galleryItems = []

    imgSrc && imgSrc.forEach((src, index) => {
      let customProps = {}
      let classes = [ 'vce-image-gallery-with-zoom-item-inner' ]
      let imgClasses = [ 'vce-image-gallery-with-zoom-img' ]
      let customImageProps = {
        'alt': src && src.alt ? src.alt : '',
        'title': src && src.title ? src.title : ''
      }
      let itemProps = {}

      if (src.orientation === 'portrait') {
        imgClasses.push('vce-image-gallery-with-zoom-img--orientation-portrait')
      }

      if (clickableOptions === 'url' && image[index].link && image[index].link.url) {
        CustomTag = 'a'
        let {url, title, targetBlank, relNofollow} = image[index].link
        customProps = {
          'href': url,
          'title': title,
          'target': targetBlank ? '_blank' : undefined,
          'rel': relNofollow ? 'nofollow' : undefined
        }
      } else if (clickableOptions === 'imageNewTab') {
        CustomTag = 'a'
        customProps = {
          'href': src.originalSrc || src.imgSrc,
          'target': '_blank'
        }
      } else if (clickableOptions === 'lightbox') {
        CustomTag = 'a'
        customProps = {
          'href': src.originalSrc || src.imgSrc,
          'data-lightbox': `lightbox-${id}`
        }
      } else if (clickableOptions === 'photoswipe') {
        CustomTag = 'a'
        customProps = {
          'href': src.originalSrc || src.imgSrc,
          'data-photoswipe-image': id,
          'data-photoswipe-index': index
        }
        if (showCaption) {
          customProps['data-photoswipe-caption'] = image[index].caption
        }
        containerProps['data-photoswipe-gallery'] = id
        itemProps['data-photoswipe-item'] = `photoswipe-${id}`
      }

      if (image[index].filter && image[index].filter !== 'normal') {
        classes.push(`vce-image-filter--${image[index].filter}`)
        imgClasses.push(`vce-image-filter--${image[index].filter}`)
      }

      classes = classNames(classes)
      imgClasses = classNames(imgClasses)

      galleryItems.push(
        <div className='vce-image-gallery-with-zoom-item' key={`vce-image-gallery-with-zoom-item-${index}-${id}`} {...itemProps}>
          <div className='vce-image-gallery-with-zoom-item-inner-wrapper'>
            <CustomTag {...customProps} className={classes}>
              <img className={imgClasses} src={src.imgSrc} {...customImageProps} />
            </CustomTag>
          </div>
        </div>
      )
    })

    const doAll = this.applyDO('all')
    containerClasses = classNames(containerClasses)
    wrapperClasses = classNames(wrapperClasses)

    return (
      <div className={containerClasses} {...editor} {...containerProps}>
        <div className={wrapperClasses} id={'el-' + id} {...doAll}>
          <div className='vce-image-gallery-with-zoom-list'>
            {galleryItems}
          </div>
        </div>
      </div>
    )
  }
}
