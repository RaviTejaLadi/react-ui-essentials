import React from 'react'
import PropTypes from 'prop-types'
import styles from './RucBadge.module.css'

const RucBadge = ({ size, variant, children }) => {
  const getBadgeStyles = () => {
    let sizeClass = ''
    switch (size) {
      case 'sm':
        sizeClass = `${styles.cbadge_sm}`
        break
      case 'md':
        sizeClass = `${styles.cbadge_md}`
        break
      case 'lg':
        sizeClass = `${styles.cbadge_lg}`
        break
      case 'xl':
        sizeClass = `${styles.cbadge_xl}`
        break
      case 'xxl':
        sizeClass = `${styles.cbadge_xxl}`
        break
      case 'xxxl':
        sizeClass = `${styles.cbadge_xxxl}`
        break
      default:
        break
    }

    let variantClass = ''
    switch (variant) {
      case 'primary':
        variantClass = `${styles.cbadge_primary}`
        break
      case 'secondary':
        variantClass = `${styles.cbadge_secondary}`
        break
      case 'success':
        variantClass = `${styles.cbadge_success}`
        break
      case 'danger':
        variantClass = `${styles.cbadge_danger}`
        break
      case 'warning':
        variantClass = `${styles.cbadge_warning}`
        break
      case 'info':
        variantClass = `${styles.cbadge_info}`
        break
      case 'light':
        variantClass = `${styles.cbadge_light}`
        break
      case 'dark':
        variantClass = `${styles.cbadge_dark}`
        break
      default:
        break
    }

    return `badge ${sizeClass} ${variantClass}`
  }

  return <span className={getBadgeStyles()}>{children}</span>
}
RucBadge.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ]),
  children: PropTypes.node.isRequired
}

export default RucBadge
