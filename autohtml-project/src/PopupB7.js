import React from 'react';

import Img61291Image from 'src/assets/images/PopupFrameB7_IMG_6129_1.png';

import {
  styled
} from '@mui/material/styles';

import X from 'src/components/X/X';

const PopupFrameB71 = styled("div")({
  backgroundColor: `rgba(161, 191, 192, 1)`,
  border: `5px solid rgba(0, 114, 121, 1)`,
  boxSizing: `border-box`,
  borderRadius: `50px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `861px`,
  height: `668px`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `24px 19px`,
  overflow: `hidden`,
});

const Img61291 = styled("img")({
  height: `581px`,
  width: `656px`,
  objectFit: `cover`,
  margin: `0px`,
});

const X = styled(X)({
  width: `48px`,
  height: `48px`,
  margin: `0px 0px 0px 20px`,
});


function PopupFrameB7() {
  return (
    <PopupFrameB71>
      <Img61291 src={Img61291Image} loading='lazy' alt={"IMG_6129 1"}/>
      <X/>
    </PopupFrameB71>);

  }

export default PopupFrameB7;

  