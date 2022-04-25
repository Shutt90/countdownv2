import { useState, useEffect } from 'react';
import Card from '../components/Card'
import generateNums from '../helpers/generateNums'

function CardContainer(props: any) {

    const largeNums: number[] = [10, 25, 50, 100];
    const smallNums: number[] = [1,2,3,4,5,6,7,8,9] 

    const [value, setValue] = useState<number>(0)
    const [valueHeld, setValueHeld] = useState<number>(0);
    const [secondHeld, setSecondHeld] = useState<number>(0);

    const arr: number[] = [] 

    for(let i = 0; i < 6; i++) {
      if(i < 4) {
        arr.push(smallNums[generateNums(smallNums.length)]);
      } else if(i >= 4){
        arr.push(largeNums[generateNums(largeNums.length)]);
      }
    }

    let newArr = arr.filter((item, index) => arr.indexOf(item) === index)

    function reroll(arr: number[]) {
      while(arr.length < 6) {
        arr.push(generateNums(smallNums.length))
        arr = arr.filter((item, index) => arr.indexOf(item) === index)
      }
      return arr
    }

    reroll(newArr)

    return (
      <div className="cardContainer">
          {newArr.map((card, index) => {
            return <Card key={`card-${index}`} onClick={(e: any) => setValueHeld(arr[index])} value={arr[index]}/>
          })}

          <h1>{valueHeld}</h1>

      </div>
  )
}

export default CardContainer