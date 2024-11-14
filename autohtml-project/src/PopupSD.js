import React from 'react';

import Img61311Image from 'src/assets/images/PopupFrameSD_IMG_6131_1.png';

import {
  styled
} from '@mui/material/styles';

import X from 'src/components/X/X';

const PopupFrameSd1 = styled("div")({
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
  height: `551px`,
});

const Img61311 = styled("img")({
  height: `515px`,
  width: `672px`,
  objectFit: `cover`,
  margin: `0px`,
});

const X = styled(X)({
  width: `48px`,
  height: `48px`,
  margin: `0px 0px 0px 26px`,
});


function PopupFrameSd() {
  return (
    <PopupFrameSd1>
      <Img61311 src={Img61311Image} loading='lazy' alt={"IMG_6131 1"}/>
      <X/>
    </PopupFrameSd1>);

  }

export default PopupFrameSd;

  