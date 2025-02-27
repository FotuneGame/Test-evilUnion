import { useState } from 'react';
import Chip from "../Chip/Chip.jsx";
import {Contaier, Chips} from "./style.js";
import Pockemon from "../Pockemon/Pockemon.jsx";
import { loadPockemon } from '../../api/pockemons.js';



function Pockemons({list, pockemon}) {
  const [activePockemon, setActivePockemon] = useState(pockemon);

  const chosePockemon = async (url) => {
	try{
		const res = await loadPockemon(url);
		setActivePockemon(state => res);
	}catch(err){
		console.error(err);
	}
  }

  return (
    <Contaier>
      	<Chips>
			{Array.isArray(list) && list.map( (el,i) =>{ 
				return <Chip key={el.name+":"+i} name={el.name} url={el.url} callback={chosePockemon}/>
			})}
		</Chips>
    	<Pockemon pockemon={activePockemon}/>
    </Contaier>
  );
}

export default Pockemons;