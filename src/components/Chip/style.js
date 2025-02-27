import { styled } from '@linaria/react';



export const Button = styled.button`
  gap: 10px;
  border-radius: 44px;
  padding: 20px;
  background-color:#1986EC;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  border: none;
  transition: 0.2s all linear; 
  color: white;

  &:hover{
    background-color:rgb(20, 98, 170);
  }

  &:active{
    background-color:rgb(18, 74, 126);
    transform: scale(0.95);
  }

  &:disabled{
    background-color:rgb(8, 33, 56);
    transform: scale(0.95);
  }
`
