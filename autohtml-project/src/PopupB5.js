import React from 'react';

import Img61361Image from 'src/assets/images/PopupFrameB5_IMG_6136_1.png';

import {
  styled
} from '@mui/material/styles';

import X from 'src/components/X/X';

const PopupFrameB51 = styled("div")({
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
  height: `529px`,
});

const Img61361 = styled("img")({
  height: `493px`,
  width: `506px`,
  objectFit: `cover`,
  margin: `0px`,
});

const X = styled(X)({
  width: `48px`,
  height: `48px`,
  margin: `0px 0px 0px 139px`,
});


function PopupFrameB5() {
  return (
    <PopupFrameB51>
      <Img61361 src={Img61361Image} loading='lazy' alt={"IMG_6136 1"}/>
      <X/>
    </PopupFrameB51>);

  }

export default PopupFrameB5;

  