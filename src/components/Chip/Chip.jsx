import { useState } from 'react';
import { Button } from './style';



function Chip({name, url, callback}) {
  const [isLoad,setIsLoad] = useState(true);

  const load = async () =>{
    setIsLoad(false);
    try{
      await callback(url);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }finally{
      setIsLoad(true);
    }
  }


  return (
    <Button onClick={()=>load()} disabled={!isLoad}>
      {name}
    </Button>
  );
}

export default Chip;