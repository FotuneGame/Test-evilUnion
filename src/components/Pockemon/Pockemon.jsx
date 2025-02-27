import {Contaier, Name, Img, ImgSpace, InfoBlock, Info} from "./style";



function Pockemon({pockemon}) {
  if(!pockemon)
    return <Name>Покемона нет</Name>;


  return (
    <Contaier style={{ textAlign: 'center' }}>
      <Name>{pockemon.name}</Name>
      <ImgSpace>
        <Img src={pockemon.sprites?.front_default} alt={pockemon.name} />
      </ImgSpace>
      <InfoBlock>
        {pockemon.moves && <Info>Снялся в {pockemon.moves.length} сериях</Info>}
        <Info>Id: {pockemon.id}</Info>
        <Info>height: {pockemon.height}</Info>
        {pockemon.stats && pockemon.stats[1] && pockemon.stats[1].base_stat &&
          <Info>attack: {pockemon.stats[1].base_stat}</Info>
        }
      </InfoBlock>
    </Contaier>
  );
}

export default Pockemon;