import React from 'react'
import Product from '../../products/Product'



export default function HomeBestSelling() {


  return (
    <>
    <section id="BestSelling"className='container py-4 w-75 mx-auto text-center'>
      <h2 className="py-2">Best Selling </h2>
      <p className="w-50 mx-auto py-2 screen-p">Bushwick blue bottle photo booth copper mug marfa craft beer pour-over swag subway tile organic cloud bread.</p>
      <div  className="row">
      <Product colNumber={4} spliceNumber={3}/>
      </div>
    </section>
    </>
  )
}
