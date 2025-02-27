import { styled } from '@linaria/react';



export const Contaier = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    gap:10px;

    @media screen and (max-width: 800px) {
		flex-direction:  column-reverse;
        justify-content: center;
        gap: 46px;
	}
`

export const Chips = styled.div`
    display: inline-block;

    *{
        margin: 6px 6px 6px 0px;
    }
    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 6px;
        *{
            margin: 0px;
        }
	}
`