import React from 'react';

import Img61381Image from 'src/assets/images/PopupFrameB4_IMG_6138_1.png';

import Img61391Image from 'src/assets/images/PopupFrameB4_IMG_6139_1.png';

import {
  styled
} from '@mui/material/styles';

import X from 'src/components/X/X';

const PopupFrameB41 = styled("div")({
  backgroundColor: `rgba(161, 191, 192, 1)`,
  border: `5px solid rgba(0, 114, 121, 1)`,
  boxSizing: `border-box`,
  borderRadius: `50px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `861px`,
  height: `641px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  overflow: `hidden`,
});

const X = styled(X)({
  width: `48px`,
  height: `48px`,
  position: `absolute`,
  left: `794px`,
  top: `18px`,
});

const Img61381 = styled("img")({
  height: `256px`,
  width: `493px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `140px`,
  top: `66px`,
});

const Img61391 = styled("img")({
  height: `264px`,
  width: `493px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `140px`,
  top: `322px`,
});


function PopupFrameB4() {
  return (
    <PopupFrameB41>
      <X/>
      <Img61381 src={Img61381Image} loading='lazy' alt={"IMG_6138 1"}/>
      <Img61391 src={Img61391Image} loading='lazy' alt={"IMG_6139 1"}/>
    </PopupFrameB41>);

  }

export default PopupFrameB4;

  