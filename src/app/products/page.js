import React from 'react'


// images product
import img1 from './img/Rectangle214.jpg'
import img2 from './img/Rectangle216.jpg'
// import img3 from './img/Rectangle218.jpg'
// // import img4 from './img/Rectangle2020.jpg'
// import img5 from './img/Rectangle2022.jpg'
// import img6 from './img/Rectangle2024.jpg'

// import icons
import { BiShowAlt } from "react-icons/bi";



function Products() {

  const products = [
    {
      id:1,
      img:img1,
      name:'',
      amount:'',
      iconShow:<BiShowAlt />,
      iconEdit:''
    }
  ]

  

  return (
    <div className='w-full mt-8 flex flex-wrap gap-3 max-[]' style={{ direction: 'rtl' }}>
      {
        // Display all products by looping through the 'products' array
  products.map((product, index) => (
    <div key={index}>
      <img src={product.img} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.amount}</p>
      <div>
        {product.iconShow}
        {product.iconEdit}
      </div>
    </div>
  ))
      }
    </div>
  )
}

export default Products
