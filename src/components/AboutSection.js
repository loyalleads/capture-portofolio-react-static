import React from "react";
import home1 from "../img/home1.png";
// styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About_div>
      <Description_div>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videograph ideas have profesionals
          with amazing skills
        </p>
        <button> Contact us</button>
      </Description_div>
      <Image><img src={home1} alt="guy with a camera" /></Image>
    </About_div>
  );
};

// Styled components

const About_div = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description_div = styled.div`
flex: 1;
padding-right:5rem;
  h2{
    font-weight:lighter;
  }
`;
const Image = styled.div`
flex: 1;
overflow: hidden;
img{
  width:100%;
  height:80vh;
  object-fit:cover;
}
`;

const Hide = styled.div`
overflow:hidden;
`;
export default AboutSection;
