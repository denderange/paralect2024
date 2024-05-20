import { unstable_noStore as noStore } from "next/cache";
const defaultUrlQueryState = "movie?include_adult=false&include_video=false&language=en-US"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_ACCESS_KEY}`
  }
};

export const getGenres = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/genre/movie/list?language=en`, 
    options
  )

  const data = await res.json()

  return data
}

export const getMovies = async (pageNum: number) => {
  const res = await fetch(
    `${process.env.BASE_URL}/discover/${defaultUrlQueryState}&page=${pageNum}&sort_by=popularity.desc`,
    options
  )

  const data = await res.json()

  return data
}

export const getMoviDetails = async (id: number) => {
  const res = await fetch(
    `${process.env.BASE_URL}/movie/${id}?api_key=${process.env.API_KEY}&append_to_response=videos`
   )

  if(!res.ok){
    return 'error'
  }else{
    const data = await res.json()
    
    return data
  }  
}


// "Most Popular",     
// "Latest Popular",
// "Most Rated",
// "Least Rated",
// "Most Voted",       
// "Least Voted",      

//    sort by:
// popularity.desc
// vote_count.desc
// vote_average.desc
// original_title.desc
// revenue.desc
// primary_release_date.desc
// title.desc

//    ratings:
// vote_average.gte >
// vote_average.lte <

//    genres:
// with_genres
// string
// can be a comma (AND) or pipe (OR) separated query

//    release year:
// primary_release_year

// with_original_language

// Для поиска используй следующие параметры запроса:
// language = язык фильма (используй “en-US”)
// with_genres = поле id из каталога жанров
// primary_release_year = год релиза 
// vote_average.lte и vote_average.gte = рейтинг фильма
// sort_by = значение выбранной сортировки
// page = номер запрашиваемой страницы

// with_genres=35%2C80
// with_genres=35%2C80%2C99%2C35
// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=1998&sort_by=title.desc&vote_average.gte=5&vote_average.lte=8&with_genres=35%2C80'

export const getFilteredMovies = async (
  with_genres: string, 
  primary_release_year: number, 
  vote_averageLte: number,
  vote_averageGte: number,
  sort_by: string,
  page: number
) => {
  noStore();
  const res = await fetch(
    `${process.env.BASE_URL}/discover/${defaultUrlQueryState}&page=${page}&primary_release_year=${primary_release_year}&sort_by=${sort_by}&vote_average.gte=${vote_averageGte}&vote_average.lte=${vote_averageLte}&with_genres=35%2C80`,
    options
  )

  const data = await res.json()

  return data
}