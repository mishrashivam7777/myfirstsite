import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Asection = () => {
  return (
    <Wrapper>
    <div className="container">
      <div className="grid grid-two-column">
        <div className="hero-section-data">
          <p className="intro-data"> </p>
          <h1> About us</h1>
          <p>
          Raj Multi Brands outlet, established in 1993 is a perfect place for your footwear & clothing options. It deals with multiple brands and provides the best price in the market. 
Raj Multi Brands outlet provides all the latest collections in various brands and is having a high rate of customer's satisfaction.

<br></br>
It is an authorized dealer of Adidas, Reebok, Calcetto, Woodland, Numero Uno, Speed, Pepejeans, T-base, Citrus, Levis, Vintage Blue, H&M London, Onverse, Aqualite, Bata, Lee-Cooper, Oxemberg, Lexa, Wildcraft, US Polo, FCUK, Jockey and many more.
<br/>
We are well known for our customer's satisfaction. We provide 6 months guarantee for the sole and 3 months free pasting in our footwears exclusively for our customers.
<br/>
Everyone's wanting to buy.
<br/>
<bold> What are you waiting for?</bold>
          </p>
          
        </div>
        {/* our homepage image  */}
        <div className="hero-section-image">
          <figure>
            <img
              src="imager/a6.jpg"
              alt="hero-section-photo"
              className="img-style"
            />
          </figure>
        </div>
      </div>
    </div>
  </Wrapper>    
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;


export default Asection