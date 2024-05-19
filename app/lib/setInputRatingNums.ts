export const setInputRatingNums =()=>{
  return [...Array(11)].map((_, i) => i.toString()).slice(1,11)
}