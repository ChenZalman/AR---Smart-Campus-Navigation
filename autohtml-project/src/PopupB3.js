import React from 'react';

import Img61411Image from 'src/assets/images/PopupFrameB3_IMG_6141_1.png';

import {
  styled
} from '@mui/material/styles';

import X from 'src/components/X/X';

const PopupFrameB31 = styled("div")({
  backgroundColor: `rgba(161, 191, 192, 1)`,
  border: `5px solid rgba(0, 114, 121, 1)`,
  boxSizing: `border-box`,
  borderRadius: `50px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `861px`,
  height: `518px`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `18px 19px`,
  overflow: `hidden`,
});

const Img61411 = styled("img")({
  height: `453px`,
  width: `550px`,
  objectFit: `cover`,
  margin: `0px`,
});

const X = styled(X)({
  width: `48px`,
  height: `48px`,
  margin: `0px 0px 0px 101px`,
});


function PopupFrameB3() {
  return (
    <PopupFrameB31>
      <Img61411 src={Img61411Image} loading='lazy' alt={"IMG_6141 1"}/>
      <X/>
    </PopupFrameB31>);

  }

export default PopupFrameB3;

  