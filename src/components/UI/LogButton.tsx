import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  &:focus-visible {
    outline: none;
  }
`;

const Icon = styled.img`
  height: 40px;
  width: 40px;
`;

type LogButtonProps = {
  handleClick: () => void;
  imgPath: string;
  imgAlt?: string;
};

export const LogButton = ({ handleClick, imgPath, imgAlt }: LogButtonProps) => {
  return (
    <Button onClick={handleClick} type="button">
      <Icon src={imgPath} alt={imgAlt} />
    </Button>
  );
};

LogButton.defaultProps = {
  imgAlt: '',
};
