import React from "react";
import bannerBag from "../img/Banner/black_dress.jpg";
import minus from "../img/Icon/free-minus-icon-3108-thumb.png";
import plus from "../img/Icon/plus-icon-21722.png";


export default function Faq() {
  return (
    <>
    <style dangerouslySetInnerHTML={{
  __html: [
     ".accordion-button {",
      "position: relative;",
    "}",
    ".accordion-button::after{",
      `background-image: url(${plus});`,
      "position: absolute;",
      "top: 50%;",
      "left: 0px;",
      "transform: translateY(-50%);",
    "}",
    ".accordion-button:not(.collapsed)::after {",
      `background-image: url(${minus});`,
      "top: 50%;",
      "left: 0px;",
      "transform: translateY(-50%);",
    "}",
    ].join('\n')
  }}>
</style>
      <section
        id="faq"
        style={{ backgroundImage: `url(${bannerBag})` }}
        className="d-flex align-items-center mt-lg-0 mt-5 "
      >
        <div className="px-5 text-light ms-5">
          <h3 className="fw-semibold fs-1">FAQ's</h3>
          <p className="fs-4">Most frequently asked questions</p>
        </div>
      </section>
      <section className="py-5 container">
    <div className="row">
      <div className="col-lg-2 offset-lg-2">
        <h3 className="fw-bold">Shopping Basics</h3>
      </div>
      <div className="col-lg-6 px-lg-5">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button bg-white text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <span className="px-2 fs-5">  What Shipping Methods Are Available?   </span>

               </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className="px-3 text-muted">Male evening subdue heaven Is, seas great creepeth under second evening from give theyre upon third give void bring fowl image years all. Cant life a. Dominion god which dont upon.                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed bg-white text-dark shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <span className="px-2 fs-5">  What are your shipping and return policies?  </span>
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className="px-3 text-muted ">Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready. </p>
                <p className="px-3 text-muted">To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed bg-white text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> 
                <span className="px-2 fs-5">   Do You Ship Internationally? </span>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className="px-3 text-muted">Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready.
                </p>
                <p className="px-3 text-muted">To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
      </section>
      <section className="py-5 container">
    <div className="row">
      <div className="col-lg-2 offset-lg-2">
        <h3 className="fw-bold">Payments</h3>
      </div>
      <div className="col-lg-6 px-lg-5">
        <div className="accordion" id="accordionEx">
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header" id="headingOneTwo">
              <button className="accordion-button bg-white text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneTwo" aria-expanded="true" aria-controls="collapseOne">
                <span className="px-2 fs-5">  What Payment Methods Are Accepted?   </span>

               </button>
            </h2>
            <div id="collapseOneTwo" className="accordion-collapse collapse show" aria-labelledby="headingOneTwo" data-bs-parent="#accordionEx">
              <div className="accordion-body">
                <p className="px-3 text-muted">Male evening subdue heaven Is, seas great creepeth under second evening from give theyre upon third give void bring fowl image years all. Cant life a. Dominion god which dont upon.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header" id="headingTwoTwo">
              <button className="accordion-button collapsed bg-white text-dark shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <span className="px-2 fs-5">  Do you accept international credit cards? </span>
                </button>
            </h2>
            <div id="collapseTwoTwo" className="accordion-collapse collapse" aria-labelledby="headingTwoTwo" data-bs-parent="#accordionEx">
              <div className="accordion-body">
                <p className="px-3 text-muted ">Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready.
                </p>
                <p className="px-3 text-muted">To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header" id="headingThreeTwo">
              <button className="accordion-button collapsed bg-white text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeTwo" aria-expanded="false" aria-controls="collapseThree"> 
                <span className="px-2 fs-5">   Do you charge sales tax on any item? </span>
            </button>
            </h2>
            <div id="collapseThreeTwo" className="accordion-collapse collapse" aria-labelledby="headingThreeTwo" data-bs-parent="#accordionEx">
              <div className="accordion-body">
                <p className="px-3 text-muted">Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready.
                </p>
                <p className="px-3 text-muted">To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
      </section>
      <section className="py-5 container">
        <div className="row">
          <div className="col-lg-2 offset-lg-2">
            <h3 className="fw-bold">Shipping & Returns</h3>
          </div>
          <div className="col-lg-6 px-lg-5">
            <div className="accordion" id="accordionExa">
              <div className="accordion-item border-0 border-bottom">
                <h2 className="accordion-header" id="headingOneThree">
                  <button className="accordion-button bg-white text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneThree" aria-expanded="true" aria-controls="collapseOne">
                    <span className="px-2 fs-5">  I want to return my purchase! What do I do?   </span>

                  </button>
                </h2>
                <div id="collapseOneThree" className="accordion-collapse collapse show" aria-labelledby="headingOneThree" data-bs-parent="#accordionExa">
                  <div className="accordion-body">
                    <p className="px-3 text-muted">Male evening subdue heaven Is, seas great creepeth under second evening from give theyre upon third give void bring fowl image years all. Cant life a. Dominion god which dont upon.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 border-bottom">
                <h2 className="accordion-header" id="headingTwoThree">
                  <button className="accordion-button collapsed bg-white text-dark shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoThree" aria-expanded="false" aria-controls="collapseTwo">
                      <span className="px-2 fs-5">  How long does it take for me to get a refund?  </span>
                    </button>
                </h2>
                <div id="collapseTwoThree" className="accordion-collapse collapse" aria-labelledby="headingTwoThree" data-bs-parent="#accordionExa">
                  <div className="accordion-body">
                    <p className="px-3 text-muted ">Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready.
                    </p>
                    <p className="px-3 text-muted">To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 border-bottom">
                <h2 className="accordion-header" id="headingThreeThree">
                  <button className="accordion-button collapsed bg-white text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeThree" aria-expanded="false" aria-controls="collapseThree">
                    <span className="px-2 fs-5">   How Can I Cancel Or Change My Order? </span>
                </button>
                </h2>
                <div id="collapseThreeThree" className="accordion-collapse collapse" aria-labelledby="headingThreeThree" data-bs-parent="#accordionExa">
                  <div className="accordion-body">
                    <p className="px-3 text-muted">Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready.
                    </p>
                    <p className="px-3 text-muted">To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 border-bottom">
                <h2 className="accordion-header" id="headingFourThree">
                  <button className="accordion-button collapsed bg-white text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourThree" aria-expanded="false" aria-controls="collapseFour">
                    <span className="px-2 fs-5">   How can I get assistance if I need it? </span>
                </button>
                </h2>
                <div id="collapseFourThree" className="accordion-collapse collapse" aria-labelledby="headingFourThree" data-bs-parent="#accordionExa">
                  <div className="accordion-body">
                    <p className="px-3 text-muted">Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready.
                    </p>
                    <p className="px-3 text-muted"> To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    <hr/>
    </>
  );
}
