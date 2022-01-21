import styled, { css } from "styled-components";
import chevron from "assets/svg/chevron.svg";
import exclaim from "assets/svg/exclaim.svg";

export const ImageContainer = styled.div<{ src: string }>`
  width: 300px;
  height: 300px;
  border-radius: 10%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src || ""});
`;

export const Container = styled.div`
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const Header = styled.p<{ background?: string }>`
  font-style: "Gotham"
  letter-spacing: 0.08em;
  width: 100%;
  height: 10%
  align-items: center;
  text-align: center;
  padding: 5px;
  text-transform: uppercase;
  margin:0px;
  color: #000;
  background:   ${({ background }) => (background ? background : `#FF8B00`)}

`;

export const Para = styled.p<{ background?: string }>`
  
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.08em;
  width: 100%;
  height: 10%
  align-items: center;
  text-align: left;
  margin:0px;
  padding: 10px 20px;
  color: #fff;
  background:   ${({ background }) => (background ? background : ``)}

`;

export const ChevronIcon = styled.div`
  width: 16px;
  height: 16px;
  display: inline-block;
  margin: 0 10px;
  background: url(${chevron});
`;

export const ExclaimIcon = styled.div`
  width: 27px;
  height: 27px;
  display: inline-block;
  margin: 0 10px;
  background: url(${exclaim});
`;

export const WarnText = styled.p<{ background?: string }>`
  
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0.02em;
  width: 100%;
  height: 10%
  
  text-align: left;
  margin:0px;
  padding: 10px 20px;
  color: #fff;
  background:   ${({ background }) => (background ? background : ``)}

`;
