import React from 'react';

import Img61421Image from 'src/assets/images/PopupFrameB2_IMG_6142_1.png';

import {
  styled
} from '@mui/material/styles';

import X from 'src/components/X/X';

const PopupFrameB21 = styled("div")({
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
  height: `496px`,
});

const Img61421 = styled("img")({
  height: `460px`,
  width: `400px`,
  objectFit: `cover`,
  margin: `0px`,
});

const X = styled(X)({
  width: `48px`,
  height: `48px`,
  margin: `0px 0px 0px 243px`,
});


function PopupFrameB2() {
  return (
    <PopupFrameB21>
      <Img61421 src={Img61421Image} loading='lazy' alt={"IMG_6142 1"}/>
      <X/>
    </PopupFrameB21>);

  }

export default PopupFrameB2;

  