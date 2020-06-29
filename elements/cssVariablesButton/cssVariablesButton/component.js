// Basic Button element copy
// This element is re-created without PCSS mixins
// Dynamic styles are handled with CSS Properties (Variables)
// CSS variables are defined in the styles.css file (source file is public/src/styles.less)

// NOTE: CSS Properties (Variables) are not supported by older browsers
// Please see more at: https://caniuse.com/#search=CSS%20Variables%20(Custom%20Properties)

import React from 'react'
import vcCake from 'vc-cake'

const vcvAPI = vcCake.getService('api')

export default class CssVariablesButton extends vcvAPI.elementComponent {
  // Blend and convert colors
  // https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
  /* eslint-disable */
  pSBC (p,c0,c1,l) {
    let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
    if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
    if(!this.pSBCr)this.pSBCr=(d)=>{
      let n=d.length,x={};
      if(n>9){
          [r,g,b,a]=d=d.split(","),n=d.length;
          if(n<3||n>4)return null;
          x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
      }else{
          if(n==8||n==6||n<4)return null;
          if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
          d=i(d.slice(1),16);
          if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
          else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
      }return x};
    h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!="c"?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
    if(!f||!t)return null;
    if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
    else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
    a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
    if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
    else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
  }
  /* eslint-enable */

  render () {
    const { id, atts, editor } = this.props
    const { background, color, hoverColor, hoverBackground, buttonUrl, buttonText, shape, alignment, customClass, toggleCustomHover, metaCustomId, size, toggleStretchButton } = atts

    let containerClasses = 'vce-css-var-btn-container'
    let wrapperClasses = 'vce-css-var-btn-wrapper vce'
    let classes = 'vce-css-var-btn'
    let customProps = {}
    let CustomTag = 'button'
    // Object that will hold CSS variables for current button element
    const stylesVariables = {}

    if (buttonUrl && buttonUrl.url) {
      CustomTag = 'a'
      const { url, title, targetBlank, relNofollow } = buttonUrl
      customProps = {
        href: url,
        title: title,
        target: targetBlank ? '_blank' : undefined,
        rel: relNofollow ? 'nofollow' : undefined
      }
    }

    if (typeof customClass === 'string' && customClass) {
      containerClasses += ' ' + customClass
    }

    // Set property values to an object (CSS variables)
    if (shape) {
      stylesVariables['--border-radius'] = shape
    }

    if (color) {
      stylesVariables['--color'] = color
      // By default make color darken by 10%
      stylesVariables['--hover-color'] = this.pSBC(-0.1, color)
    }

    if (background) {
      stylesVariables['--background-color'] = background
      // By default make background color darken by 10%
      stylesVariables['--hover-background-color'] = this.pSBC(-0.1, background)
    }

    if (toggleCustomHover && hoverColor) {
      stylesVariables['--hover-color'] = hoverColor
    }

    if (toggleCustomHover && hoverBackground) {
      stylesVariables['--hover-background-color'] = hoverBackground
    }

    if (alignment) {
      stylesVariables['--text-align'] = alignment
    }

    if (size) {
      classes += ` vce-css-var-btn--size-${size}`
    }

    if (toggleStretchButton) {
      wrapperClasses += ' vce-css-var-btn-wrapper--stretched'
    }

    if (metaCustomId) {
      customProps.id = metaCustomId
    }

    const doMargin = this.applyDO('margin')
    const doRest = this.applyDO('padding border background animation')

    // Use style attribute to set the scope of the CSS variables to an element
    return (
      <div className={containerClasses} {...editor} style={stylesVariables}>
        <span className={wrapperClasses} id={'el-' + id} {...doMargin}>
          <CustomTag className={classes} {...customProps} {...doRest}>
            {buttonText}
          </CustomTag>
        </span>
      </div>
    )
  }
}
