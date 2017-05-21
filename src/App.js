import React, { Component } from 'react';

import styled from 'styled-components';

import tileImg from './tile.jpg';
// import logoImg from './logo.png';

import Block, { Image, Caption, CaptionLogo, CaptionText } from './Block';

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