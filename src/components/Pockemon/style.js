import { styled } from '@linaria/react';

export const Contaier = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 484px;
  min-height: 500px;
  gap: 44px;
  padding: 44px;
  background:black;

  @media screen and (max-width: 800px) {
			  min-width: 284px;
        min-height: 300px;
	}
`

export const Name = styled.p`
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  color:#A0A0A0;
  text-align:initial;
  margin: 0px;
  text-transform: capitalize;
`

export const Img = styled.img`
  max-height: 100%;
  width: 396px;
  @media screen and (max-width: 800px) {
			  width: 284px;
	}
`

export const ImgSpace = styled.div`
  width: 100%;
  height:250px;
  overflow:hidden;
`

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const Info = styled.p`
  color:#A0A0A0;
  font-weight: 500;
  font-size: 17px;
  line-height: 25.5px;
  text-align:initial;
  margin:0px;
`
