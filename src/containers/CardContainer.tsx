import Card from '../components/Card'
import generateNums from '../helpers/generateNums'

function CardContainer(props: any) {

    let numberArr: number[]

    numberArr = [generateNums(), generateNums(), generateNums(), generateNums(), generateNums(), generateNums()]
    
  return (
    <div className="cardContainer">
        <Card value={numberArr[0]} />
        <Card value={numberArr[1]} />
        <Card value={numberArr[2]} />
        <Card value={numberArr[3]} />
        <Card value={numberArr[4]} />
        <Card value={numberArr[5]} />
    </div>
  )
}

export default CardContainer