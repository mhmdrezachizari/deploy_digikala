import Card from '@/components/Card'
import CardShopingBuy from '@/components/CardShopingBuy'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './ShoppingBuy.module.css'
import Sabad from '@/components/Sabad'

const ShoppingBuy = () => {
  const date = useSelector(state => state.shoppingcard)
  const totalAmount = date.totalAmount
  const totalCount = date.totalCount
  console.log(totalAmount)
  return (
    <>
      <div className={styles.outainerDiv}>
        <div className={styles.rightDiv}>
          {
            date.items.map(item => {
              return <Card product={item} />
            })
          }
        </div>
        <div className={styles.leftDiv}>
          <Sabad date={{totalAmount,totalCount}}/>
        </div>
      </div>
    </>

  )
}
export default ShoppingBuy