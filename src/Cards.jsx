import React from "react";
import Heading from "./Heading";
import Images from "./Images";
import Title from "./Title";


const Cards = (props) => {
    return(
      <div className="cards">
        <div className="card">
            <Images imgsrc={props.imgsrc} />
            <div className="card__info">
                <Title title={props.title} />
                <Heading sname={props.sname} />
                <a href="" target="_blank">
                    <button> Watch Now </button>
                </a>
            </div>
        </div>
      </div>
    )
}

export default Cards;