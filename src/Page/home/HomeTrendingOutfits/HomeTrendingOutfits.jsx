import React from 'react'
import Product from '../../products/Product';
import "./HomeTrendingOutfits.css";

export default function HomeTrendingOutfits() {


  return (
    <>
    <section id="TrendingOutfits"className='container py-4 w-75 mx-auto text-center'>
        <h2 className="py-2">Trending Outfits        </h2>
        <p className="w-50 mx-auto py-2 screen-p">Intelligentsia migas next level 90s woke ramps. Glossier vape celiac tumeric keffiyeh.        </p>
        <div  className="row">
          <Product colNumber={3} spliceNumber={4}/>
        </div>
    </section>
    <hr/>
    </>
  )
}
