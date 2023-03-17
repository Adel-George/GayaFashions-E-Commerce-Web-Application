import React from 'react'
import boutique from "../../img/Banner/boutique.jpg.webp"

export default function HomeVisitUs() {
  return (
    <>
   <section id="VisitUs"className='container py-4 w-75 mx-auto text-center'>
      <h2>Visit Us</h2>
      <p className="w-50 mx-auto py-2 screen-p">Stop by our stores to learn the stories behind our products, get a personal styling session, or shop the latest in person. See our store locations.      </p>
      <div>
        <img src={boutique} alt="boutique" className="w-100"/>
      </div>
    </section>
    <hr/>
    </>
  )
}
