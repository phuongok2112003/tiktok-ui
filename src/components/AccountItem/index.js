import React from "react";
import classNames from "classnames/bind";
import styles from "./AccountItem.modul.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
export default function AcccountsItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_300x300.webp?x-expires=1651489200&x-signature=Xp8iH14MDegegBpFEg%2Fg5rv6Mrw%3D"
        alt="Hoaa"
      />{" "}
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen van a</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx("username")}>ngueynvana</span>
      </div>
    </div>
  );
}
