import React from 'react'
import "./Filter.css";
import  { useState, useEffect } from 'react';
import minus from "../../img/Icon/free-minus-icon-3108-thumb.png";
import { useContext } from 'react';
import { context } from '../store/Store';

export default function Filter(props) {
  const [labelList, setLabelList] = useState();
  const {checkData,setCheckData,checkFilterAllData,range,minRange,maxRange} = props;
  const{filterCategory,filterSize,filterRange,setFilterRangeList,filterSale,filterSaleList,filterClear}= useContext(context);
  const categoryList= document.querySelectorAll(".category");
  const sizeList=document.querySelectorAll(".size");

  function rangeValue(e){
    if(labelList[0].getAttribute("name")===e.target.id){
      labelList[0].innerHTML="Min Price: $"+e.target.value;
      filterRange(e.target.value,"min");
      checkRangeValue(e,"min");
    }
    else{
      labelList[1].innerHTML="Max Price: $"+e.target.value;
      filterRange(e.target.value,"max");
      checkRangeValue(e,"max");
    }
  }
function filterUi(element,list,filterFunction){
  list.forEach((e)=>{
    if(e===element.target&&!e.classList.contains("btn-secondary")){
      e.classList.add("btn-secondary");
      e.classList.replace("text-dark","text-light");
    }
    else{
      e.classList.remove("btn-secondary","text-light");
      e.classList.replace("text-light","text-dark");
    }
  });
  filterFunction(element.target.innerHTML);
  checkFilterUi(element,list);
}

function checkFilterUi(element,list){
  let {category,size,range}={...checkData};

  const data=element.target.innerHTML;
  if(list===categoryList){
    category.categoryName=(category.categoryName===data)?"":data;
    category.categoryCheck=(category.categoryName===data);
  }
  else{
    size.sizeName=(size.sizeName===data)?"":data;
    size.sizeCheck=(size.sizeName===data);
  }
  setCheckData({
    category,
    size,
    range
  });
}
function checkRangeValue(e,rangeValue){
  let {category,size,range}={...checkData};
  const data=e.target.value;
  if(rangeValue==="min"){
    range.rangeMin=data;
    range.rangeCheckMin=(Number(minRange)!==Number(data));
  }
  else{
    range.rangeMax=data;
    range.rangeCheckMax=(Number(maxRange)!==Number(data));
  }
  setCheckData({
    category,
    size,
    range
  });
}



function clearFilterData(){
  const formList= document.querySelectorAll(".form-range");
  categoryList.forEach((e)=>{
      e.classList.remove("btn-secondary","text-light");
      e.classList.replace("text-light","text-dark");
  });
  sizeList.forEach((e)=>{
    e.classList.remove("btn-secondary","text-light");
    e.classList.replace("text-light","text-dark");
});
formList[0].value=minRange;
formList[1].value=maxRange;
labelList[0].innerHTML=`Min Price: $${minRange}`;
labelList[1].innerHTML=`Max Price: $${maxRange}`;
filterClear();
setFilterRangeList({
  min: minRange,
  max: maxRange,
});

setCheckData({
  category:{
    categoryName:"",
    categoryCheck:false
  },
  size:{
    sizeName:"",
    sizeCheck:false
  },
  range:{
    rangeMin:minRange,
    rangeMax:maxRange,
    rangeCheckMin:false,
    rangeCheckMax:false
  },});
}

  useEffect(() => {
    const labelList= document.querySelectorAll("label");
    setLabelList(labelList);
    setFilterRangeList({
      min:minRange,
      max:maxRange,
    });
  }, [maxRange, minRange, range, setFilterRangeList]);


  return (
    <>
<style dangerouslySetInnerHTML={{
  __html: [
     '.accordion-button:not(.collapsed)::after {',
     `  background-image: url(${minus});`,
     '}'
    ].join('\n')
  }}>
</style>
    <div className="col-lg-3 col-1 navbar-expand-lg ">
            <div className="w-50 mx-auto text-center">
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false">
                <i className="fa-solid fa-filter fa-lg"></i>
               </button>
              </div>
              <div className="offcanvas offcanvas-start" data-bs-scroll="true"  id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body text-start ">
                <div className="accordion w-100" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item border-0">
                    <div className={checkFilterAllData?'w-25 ms-auto i-show':'w-25 ms-auto i-show d-none'} id='clearData' onClick={clearFilterData}>
                    <span className="text-danger">Clear Data</span>
                    </div>
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                      <button className="accordion-button bg-white text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        FILTER BY CATEGORY
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                      <div  className="accordion-body" >
                        <div >
                          <button type="button" className="btn text-dark w-75 text-start category mb-1" onClick={(e)=>filterUi(e,categoryList,filterCategory)}>Men</button>
                        </div>
                        <div>
                          <button type="button" className="btn text-dark w-75 text-start category" onClick={(e)=>filterUi(e,categoryList,filterCategory)}>Women</button>
                        </div>
                      </div>
                    </div>
                    <hr/>
                  </div>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThere">
                      <button className="accordion-button bg-white text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThere" aria-expanded="true" aria-controls="panelsStayOpen-collapseThere">
                        FILTER BY Sale
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThere" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThere">
                      <div  className="accordion-body" >
                        <div >
                          <button type="button" className={filterSaleList.new?"btn text-light w-75 text-start btn-secondary mb-1":"btn text-dark w-75 text-start mb-1"} onClick={(e)=>filterSale(e.target.innerHTML)}>New</button>
                        </div>
                        <div>
                          <button type="button" className={filterSaleList.sale?"btn text-light w-75 text-start btn-secondary":"btn text-dark w-75 text-start"} onClick={(e)=>filterSale(e.target.innerHTML)}>Sale</button>
                        </div>
                      </div>
                    </div>
                    <hr/>
                  </div>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                      <button className="accordion-button bg-white text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        FILTER BY SIZE
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                      <div className="accordion-body d-flex">
                        <button type="button" className="btn text-dark border me-2 size"onClick={(e)=>filterUi(e,sizeList,filterSize)}>XS</button>
                        <button type="button" className="btn text-dark border me-2 size"onClick={(e)=>filterUi(e,sizeList,filterSize)}>S</button>
                        <button type="button" className="btn text-dark border me-2 size"onClick={(e)=>filterUi(e,sizeList,filterSize)}>M</button>
                        <button type="button" className="btn text-dark border me-2 size"onClick={(e)=>filterUi(e,sizeList,filterSize)}>L</button>
                      </div>
                    </div>
                    <hr/>
                  </div>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                      <button className="accordion-button bg-white text-dark shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        FILTER BY PRICE
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show " aria-labelledby="panelsStayOpen-headingThree">
                      <div className="accordion-body">
                        <div className="position-relative">
                          <input type="range" className="form-range" id="customRange1"min={minRange} max={maxRange} defaultValue={minRange} onChange={rangeValue}/>
                          <input type="range" className="form-range position-absolute top-0 start-0 " id="customRange2" min={minRange} max={maxRange} defaultValue={maxRange} onChange={rangeValue}/>
                        </div>
                        <div className="d-flex justify-content-between">
                          <label htmlFor="customRange1" className="form-label" name='customRange1'>Min Price: ${minRange}</label>
                          <label htmlFor="customRange2" className="form-label" name='customRange2'>Max Price: ${maxRange}</label>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
    </>
  )
}
