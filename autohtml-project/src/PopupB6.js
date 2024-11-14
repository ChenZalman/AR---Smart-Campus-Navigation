import React from 'react';

import Img61341Image from 'src/assets/images/PopupFrameB6_IMG_6134_1.png';

import {
  styled
} from '@mui/material/styles';

import X from 'src/components/X/X';

const PopupFrameB61 = styled("div")({
  backgroundColor: `rgba(161, 191, 192, 1)`,
  border: `5px solid rgba(0, 114, 121, 1)`,
  boxSizing: `border-box`,
  borderRadius: `50px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `861px`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `23px 19px`,
  overflow: `hidden`,
  height: `669px`,
});

const Img61341 = styled("img")({
  height: `623px`,
  width: `604px`,
  objectFit: `cover`,
  margin: `0px`,
});

const X = styled(X)({
  width: `48px`,
  height: `48px`,
  margin: `0px 0px 0px 51px`,
});


function PopupFrameB6() {
  return (
    <PopupFrameB61>
      <Img61341 src={Img61341Image} loading='lazy' alt={"IMG_6134 1"}/>
      <X/>
    </PopupFrameB61>);

  }

export default PopupFrameB6;

  