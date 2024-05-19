export const setInputReleaseYear = () => {
  const yearNow = new Date().getFullYear()
  const theOldestFilmInTheHistory = 1888

  const releaseYears = [];

  for (let i = theOldestFilmInTheHistory; i <= yearNow; i++) {
    releaseYears.push(i.toString());
  }
  
  return releaseYears
}

// It is believed to be the oldest surviving film (1888):
// https://en.wikipedia.org/wiki/Roundhay_Garden_Scene