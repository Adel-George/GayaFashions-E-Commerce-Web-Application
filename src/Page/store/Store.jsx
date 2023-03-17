import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { storeData } from "./StoreData";

export const context = createContext(0);

export default function Store(e) {
  const [storeList, setStoreList] = useState(storeData);
  const [filterList, setFilterList] = useState([]);
  const [filterData, setFilterData] = useState({
    category: "",
    size: "",
  });
  const [filterRangeList, setFilterRangeList] = useState({
    min: 0,
    max: 0,
  });
  const [filterSaleList, setFilterSaleList] = useState({
    new: false,
    sale: false,
  });
  const [favoriteData, setFavoriteData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  function updateColor(obj, index) {
    const dateNew = storeList.map((e) => {
      if (obj.id === e.id) {
        obj.colorList.map((ec, i) => {
          ec.defaultImg = false;
          if (i === index) {
            ec.defaultImg = true;
            obj.defaultImg[0] = ec.img;
            obj.hoverImg = ec.imgHover;
          }
          return ec;
        });
        e = obj;
      }
      return e;
    });
    setStoreList(dateNew);
  }

  function clearColor() {
    const dateNew = storeList.map((e) => {
      e.colorList.map((ec, i) => {
        ec.defaultImg = false;
        if (i === 0) {
          ec.defaultImg = true;
          e.defaultImg[0] = ec.img;
          e.hoverImg = ec.imgHover;
        }
        return ec;
      });
      return e;
    });
    setStoreList(dateNew);
    setFilterList([]);
    setFilterData({
      category: "",
      size: "",
    });
    window.scroll(0, 0);
  }

  function favoriteItem(obj) {
    const dateNew = storeList.map((e) => {
      if (obj.id === e.id) {
        obj.isFavorite = !obj.isFavorite;
        e = obj;
      }
      return e;
    });
    setStoreList(dateNew);
    favoriteList(dateNew);
  }
  function favoriteList(dateNew) {
    const data = dateNew.filter((e) => e.isFavorite);
    setFavoriteData(data);
  }

  function filterCategory(categoryData) {
    if (filterData.category.includes(categoryData)) {
      setFilterData({
        category: "",
        size: filterData.size,
      });
      filterAllData(
        "",
        filterData.size,
        filterRangeList.min,
        filterRangeList.max,
        filterSaleList
      );
    } else {
      setFilterData({
        category: categoryData,
        size: filterData.size,
      });

      filterAllData(
        categoryData,
        filterData.size,
        filterRangeList.min,
        filterRangeList.max,
        filterSaleList
      );
    }
  }

  function filterSize(sizeData) {
    if (filterData.size.includes(sizeData)) {
      setFilterData({
        category: filterData.category,
        size: "",
      });
      filterAllData(
        filterData.category,
        "",
        filterRangeList.min,
        filterRangeList.max,
        filterSaleList
      );
    } else {
      setFilterData({
        category: filterData.category,
        size: sizeData,
      });
      filterAllData(
        filterData.category,
        sizeData,
        filterRangeList.min,
        filterRangeList.max,
        filterSaleList
      );
    }
  }
  function filterRange(range, type) {
    if (type === "min") {
      setFilterRangeList({
        min: range,
        max: filterRangeList.max,
      });
      filterAllData(
        filterData.category,
        filterData.size,
        range,
        filterRangeList.max,
        filterSaleList
      );
    } else {
      setFilterRangeList({
        min: filterRangeList.min,
        max: range,
      });
      filterAllData(
        filterData.category,
        filterData.size,
        filterRangeList.min,
        range,
        filterSaleList
      );
    }
  }

  function filterSale(saleData) {
    let sale = { ...filterSaleList };
    if (saleData === "New") {
      sale.new = !sale.new;
    } else {
      sale.sale = !sale.sale;
    }
    setFilterSaleList(sale);
    filterAllData(
      filterData.category,
      filterData.size,
      filterRangeList.min,
      filterRangeList.max,
      sale
    );
  }

  function filterAllData(category, size, min, max, sale) {
    let filterCategoryData;
    let filterSizeData;
    let filterRangeData;
    let filterNewData;
    let filterSaleData;

    if (sale.new === true) {
      filterNewData = storeList.filter((e) => e.isNew);
    } else {
      filterNewData = [...storeList];
    }

    if (sale.sale === true) {
      filterSaleData = filterNewData.filter((e) => e.isSale);
    } else {
      filterSaleData = [...filterNewData];
    }

    if (category.length > 0) {
      filterCategoryData = filterSaleData.filter(
        (e) => e.category === category
      );
    } else {
      filterCategoryData = [...filterSaleData];
    }

    if (size.length > 0) {
      filterSizeData = filterCategoryData.filter(
        (e) => e.size.filter((index) => index === size).length > 0
      );
    } else {
      filterSizeData = [...filterCategoryData];
    }

    if (min > 0 && max > 0) {
      filterRangeData = filterSizeData.filter(
        (e) =>
          (e.isSale ? Number(e.salePrice) : Number(e.price)) >= min &&
          (e.isSale ? Number(e.salePrice) : Number(e.price)) <= max
      );
    } else {
      filterRangeData = [...filterSizeData];
    }
    setFilterList(filterRangeData);
  }

  function filterClear() {
    setFilterList([]);
    setFilterData({
      category: "",
      size: "",
    });
    setFilterSaleList({
      new: false,
      sale: false,
    });
  }

  function uniqueId() {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  }
  function cardItem(productItem, totalItem, sizeItem) {
    let cardList = [...cardData];
    let imgChange = productItem.colorList.filter((e) => e.defaultImg === true);
    imgChange =
      productItem.colorList.length > 0
        ? imgChange[0].img
        : productItem.defaultImg[0];
    const check = cardList.find(
      (e) =>
        e.product.id === productItem.id &&
        e.size === sizeItem &&
        e.img === imgChange
    );
    if (check) {
      cardList = cardList.map((e) => {
        if (
          e.product.id === productItem.id &&
          e.size === sizeItem &&
          e.img === imgChange
        ) {
          e.total = totalItem;
        }
        return e;
      });
    } else {
      const item = {
        id: uniqueId(),
        product: productItem,
        total: totalItem,
        size: sizeItem,
        img: imgChange,
      };
      cardList.push(item);
    }
    setCardData(cardList);
  }
  function deleteCardItem(id) {
    const cardList = cardData.filter((e) => e.id !== id);
    setCardData(cardList);
  }

  function plusTotalCardItem(id) {
    let cardItem = [...cardData];
    cardItem = cardItem.map((e) => {
      if (e.id === id && e.total < 5) {
        e.total++;
      }
      return e;
    });
    setCardData(cardItem);
  }
  function minusTotalCardItem(id) {
    let cardItem = [...cardData];
    cardItem = cardItem.map((e) => {
      if (e.id === id && e.total > 1) {
        e.total--;
      }
      return e;
    });
    setCardData(cardItem);
  }

  function searchList(val) {
    let data = [...searchData];
    data = storeList.filter((e) =>
      e.title.toLowerCase().includes(val.toLowerCase())
    );
    setSearchData(data);
    setSearchValue(val);
  }

  function searchClear() {
    setSearchValue("");
    setSearchData([]);
  }

  return (
    <context.Provider
      value={{
        storeList,
        setStoreList,
        updateColor,
        clearColor,
        favoriteItem,
        filterCategory,
        filterList,
        filterData,
        filterSaleList,
        filterSize,
        filterRange,
        filterSale,
        setFilterRangeList,
        filterClear,
        favoriteData,
        cardData,
        cardItem,
        storeData,
        deleteCardItem,
        plusTotalCardItem,
        minusTotalCardItem,
        searchValue,
        searchData,
        searchList,
        searchClear,
      }}
    >
      {e.children}
    </context.Provider>
  );
}
