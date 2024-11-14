import React from 'react';

import Img61451Image from 'src/assets/images/PopupFrameB1_IMG_6145_1.png';

import {
  styled
} from '@mui/material/styles';

import X from 'src/components/X/X';

const PopupFrameB11 = styled("div")({
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
  height: `527px`,
});

const Img61451 = styled("img")({
  height: `491px`,
  width: `409px`,
  objectFit: `cover`,
  margin: `0px`,
});

const X = styled(X)({
  width: `48px`,
  height: `48px`,
  margin: `0px 0px 0px 233px`,
});


function PopupFrameB1() {
  return (
    <PopupFrameB11>
      <Img61451 src={Img61451Image} loading='lazy' alt={"IMG_6145 1"}/>
      <X/>
    </PopupFrameB11>);

  }

export default PopupFrameB1;

  