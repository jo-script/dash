'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import data product
import {products} from '../app/products/productData.js'

// import icon
import { BiShowAlt } from "react-icons/bi";
import { MdEdit } from "react-icons/md";


function Products() {
  useEffect(() => { document.title = 'المنتجات' }, [])
  if(!products){
    return <div>Loading....</div>
  }
  
  return (
    <div className='w-full mt-8 flex content-center justify-start flex-wrap gap-5 max-[480px]:gap-3 max-[480px]:justify-center' style={{ direction: 'rtl' }}>
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id} className='w-[133px] h-[180px] overflow-hidden flex flex-col items-center justify-start bg-white rounded-xl shadow-[0_0_10px_0_#0000001f] border hover:scale-[1.05] transition-[all_.2s] '>
          <div >
            <Image src={product.img} alt={product.name} className='w-full h-[100px] hover:scale-[1.03] transition-[all_.2s]' />
            <div className='w-full items-start flex flex-col font-semibold text-[#142433] px-2'>
              <p className='mt-3 text-[16px]'>{product.nameArabic}</p>
              <div className='flex items-center justify-between w-full ] '>
                <p className='text-[#8797A8] text-[14px]'>{product.mainCategory}</p>
                <p className='text-[#2DA905] text-[14px]'>{product.kilograms} </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products;
