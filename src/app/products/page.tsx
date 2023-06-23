"use client"

import useTest from '@/components/apps/components/hooks/useTest'
import React from 'react'

const Products = () => {
  const {store}= useTest();
  return store.entities.map((item)=>{
      return item.title
    })

}

export default Products
