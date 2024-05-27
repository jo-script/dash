'use client'
import Link from 'next/link'
import React from 'react'

import style from './style.module.css'
import upgrade from '../../components/checkUpgrade.js'



function NoUpgrade() {
  return (
    <div className={style.appCard} style={{ direction: 'rtl' }}>
      <h1 className={style.title}>خطة الإشتراك</h1>
      <div className={style.card}>

        <div className={style.plan}>
          <div>
            <p className=''>شهري</p>
            <h1 className=''>5,000</h1>
          </div>
          <div>
            <p className=''>إسبوعي</p>
            <h1 className=''>2,000</h1>
          </div>
        </div>
        <div className={style.features}>
          <p>اضافة اسعار</p>
          <p>اضافة منتجات</p>
          <p>تعديل منتجات</p>
          <p> اضافةبنرات</p>
        </div>

        <Link href='/subscription-payment'><button className={style.but}>إشتراك</button></Link>

      </div>
    </div>
  )
}

export default NoUpgrade
