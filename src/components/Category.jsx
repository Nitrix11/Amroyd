import React from 'react';
import './scss/Category.css';
import cate1 from"../assets/cate1.jpg"
import cate2 from"../assets/cate2.jpg"
import cate5 from"../assets/cate5.jpeg"
import cate4 from"../assets/cate4.jpeg"
import cate3 from"../assets/cate3.jpeg"

const TopCategories = () => {
  const categories = [
    { title: 'BEAUTY CHEF', img: cate4 },
    { title: 'SPORT WEAR', img: cate2 },
    { title: 'WORKWEAR', img: cate3 },
    { title: 'COOPORATE WEAR', img: cate1 },
    { title: 'SERVICE UNIFORMS ', img: cate5 },
  ];

  return (
    <section className="top-categories">
      <h1>Top Categories</h1>
      <div className="categories-container">
        <div className="column">
          <div className="category">
            <img src={categories[0].img} alt={categories[0].title} />
            <div className="overlay">{categories[0].title}</div>
          </div>
          <div className="category">
            <img src={categories[1].img} alt={categories[1].title} />
            <div className="overlay">{categories[1].title}</div>
          </div>
        </div>
        <div className="big-category h-[490px]">
          <img src={categories[2].img} alt={categories[2].title} />
          <div className="overlay">{categories[2].title}</div>
        </div>
        <div className="column">
          <div className="category">
            <img src={categories[3].img} alt={categories[3].title} />
            <div className="overlay">{categories[3].title}</div>
          </div>
          <div className="category">
            <img src={categories[4].img} alt={categories[4].title} />
            <div className="overlay">{categories[4].title}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TopCategories;