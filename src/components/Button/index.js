import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.modul.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
export default function Button({
  to,
  rounded = false,
  disabled = false,
  text = false,
  primary = false,
  outline = false,
  large = false,
  small = false,
  href,
  children,
  leftIcon,
  rightIcon,
  className,
  onClick,
  ...pasProps
}) {
  let Comp = "button";
  const clases = cx("wrapper", {
    [className]:className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
  });
  const props = { onClick, ...pasProps };
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <Comp className={clases} {...props}>
       {leftIcon&& <span className={cx('icon')}>{leftIcon}</span>} 
      <span className={cx('title')}>{children}</span>
      {rightIcon&& <span className={cx('icon')}>{rightIcon}</span>} 
    </Comp>
  );
}
