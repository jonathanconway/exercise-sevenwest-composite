import React, { Component } from 'react';
import styled from 'styled-components';


import tileImg from './tile.jpg';
import logoImg from './logo.png';

const gridUnitSize = 1;

const Block = styled.div`
  border-top: solid ${gridUnitSize / 2}rem;
  border-bottom: solid ${gridUnitSize / 2}rem;
  border-left: solid ${gridUnitSize}rem;
  border-right: solid ${gridUnitSize}rem;
  border-color: #010101;
  display: inline-block;
  position: relative;
  font-family: "Open Sans", arial, tahoma, serif;
`;

const Image = styled.img`
  height: 16.5rem;
  display: block;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  // Darkened overlay
  &::before {
    content: ' ';
    background-color: #333333;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const captionChild = `
  display: inline-block;
  vertical-align: middle;
  z-index: 1;
  position: relative;
`;

const CaptionLogo = styled.img`
  height: 4rem;
  margin: 0 ${gridUnitSize / 2}rem;
  ${captionChild}
`;

const CaptionText = styled.h2`
  color: white;
  font-size: 1.9rem;
  line-height: 2rem;
  ${captionChild}
`;

export default class App extends Component {
  render() {
    return (
      <Block>
        <Image src={tileImg} />
        
        <Caption>
          <CaptionLogo src={logoImg} />
          <CaptionText>Home and Away</CaptionText>
        </Caption>
      </Block>
    );
  }
}