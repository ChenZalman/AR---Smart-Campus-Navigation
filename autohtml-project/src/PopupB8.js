import React from 'react';

import Img61261Image from 'src/assets/images/PopupFrameB8_IMG_6126_1.png';

import {
  styled
} from '@mui/material/styles';

import X from 'src/components/X/X';

const PopupFrameB81 = styled("div")({
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
  padding: `18px 19px`,
  overflow: `hidden`,
  height: `577px`,
});

const Img61261 = styled("img")({
  height: `541px`,
  width: `580px`,
  objectFit: `cover`,
  margin: `0px`,
});

const X = styled(X)({
  width: `48px`,
  height: `48px`,
  margin: `0px 0px 0px 77px`,
});


function PopupFrameB8() {
  return (
    <PopupFrameB81>
      <Img61261 src={Img61261Image} loading='lazy' alt={"IMG_6126 1"}/>
      <X/>
    </PopupFrameB81>);

  }

export default PopupFrameB8;

  