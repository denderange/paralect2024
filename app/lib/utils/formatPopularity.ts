export const formatPopularity = (popularity: number | null) => {
  if(popularity){
    const prefixes = ['', 'K', 'M', 'G', 'T', 'P', 'E'];
    let prefixIndex = 0;

    while (popularity >= 1000) {
      popularity /= 1000;
      prefixIndex++;
    }

    const formattedNumber = popularity.toFixed(1) + (prefixes[prefixIndex] || '');
    return formattedNumber;

  }else return ''
}