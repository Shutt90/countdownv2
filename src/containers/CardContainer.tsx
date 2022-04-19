import Card from '../components/Card'
import generateNums from '../helpers/generateNums'

function CardContainer(props: any) {

    const largeNums: number[] = [10, 25, 50, 100];
    const smallNums: number[] = [1,2,3,4,5,6,7,8,9] 

  return (
    <div className="cardContainer">
        <Card value={smallNums[generateNums(smallNums.length)]} />
        <Card value={smallNums[generateNums(smallNums.length)]} />
        <Card value={smallNums[generateNums(smallNums.length)]} />
        <Card value={smallNums[generateNums(smallNums.length)]} />
        <Card value={largeNums[generateNums(largeNums.length)]} />
        <Card value={largeNums[generateNums(largeNums.length)]} />
    </div>
  )
}

export default CardContainer