export default function generateNums(limit?: number) {
    const checkArg = limit ? limit : 100
    return Math.floor(Math.random() * checkArg)
}
