import styles from './Buttons.module.scss'
import Link from 'next/link'

const STYLES = ['btn__primary', 'btn__outline', 'btn__test'];

const SIZES = ['btn__medium', 'btn__large'];

// const TAGS = ['a', 'Link']

export const Button = ({
  children,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  /* function checkLinkType(){
    if(linkType == 'a'){
        return TAGS[0];
    }else{
        return TAGS[1];
    }
  } */
  // console.log(checkLinkType());

  /* function Click(){
    location.href=`${linkurl}`
  }   */
  // const tag = checkLinkType();
  return (
    
      <button
        className={`${styles.btn} ${styles[checkButtonStyle]} ${styles[checkButtonSize]}`}
      >
        {children}
      </button>
  );
};