import PropTypes from 'prop-types'
import React from 'react'
import styles from './RucButton.module.css'

const RucButton = ({
  variant,
  size,
  onClick,
  disabled,
  children,
  type
}) => {
  const buttonClasses = `${styles.ruc_btn} ${
    variant ? `${styles[`ruc_btn_${variant}`]}` : ''
  }  ${size ? `${styles[`ruc_btn_${size}`]}` : ''}`

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

RucButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string
}

export default RucButton
