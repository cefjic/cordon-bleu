import React, { useState } from "react";
import { CordonWrapper, SvgWrapper } from "./App.styles";
import CordonImage from "./cordon-bleu.svg";
import { ReactSVG } from "react-svg";

const Cordon = ({ addOne, removeOne, rotation, index, ...rest }) => {
  const [isRotating, setRotation] = useState(false);

  const toggleRotation = () => {
    setRotation(!isRotating);
  };

  const onClick = () => {
    if (isRotating) {
      removeOne();
    } else {
      addOne();
    }
    toggleRotation();
  };

  return (
    <CordonWrapper {...rest} onClick={onClick} isRotating={isRotating}>
      <SvgWrapper isRotating={isRotating} rotation={rotation}>
        <ReactSVG src={CordonImage} />
      </SvgWrapper>
    </CordonWrapper>
  );
};

export default Cordon;
