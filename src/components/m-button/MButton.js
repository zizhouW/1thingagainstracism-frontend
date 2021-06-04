import React from 'react';
import { Button } from '@material-ui/core';
import './MButton.scss';

function MButton({ children, onClick, variant, color, startIcon, endIcon }) {
  return (
    <Button
      className="m-button"
      onClick={onClick}
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
}

export default MButton;
