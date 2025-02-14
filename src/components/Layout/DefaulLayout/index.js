import React from 'react'
import Header from '~/components/Layout/components/Header'
import Sidebar from './Sidebar'
import styles from './DefaultLaout.module.scss'
import classNames from 'classnames/bind'
const cx=classNames.bind(styles);
export default function DefaultLayout({children}) {
  return (
    <div className={cx('wrapper')}>
        <Header/>
        <div className={cx('container')}>
            <Sidebar/>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    </div>
  )
}
