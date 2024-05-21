// const baseURL = 'https://api.example.com/search';
// const searchParams = new URLSearchParams({
//   'main-category': 'books',
//   'sub-category': 'fiction',
//   'sort-by': 'popularity'
// });

// // const encodedURL = `${baseURL}?${searchParams.toString()}`;
// // fetch(encodedURL)
// //   .then(response => response.json())
// //   .then(results => console.log(results))
// //   .catch(error => console.error('Ошибка:', error));


//   async function fetchData() {
//     const searchParams = new URLSearchParams({
//       'main-category': 'books',
//       'sub-category': 'fiction',
//       'sort-by': 'popularity'
//     });

//     const encodedURL = `${baseURL}?${searchParams.toString()}`;
//     const response = await fetch(`https://api.example.com/items?${encodedURL}`);
    
//     return response.json();
//   }
  
//   // fetchData().then(data => console.log(data));

//   // console.log('fetch done')

//   const asd = {
//     'main-category': 'books',
//     'sub-category': 'fiction',
//     'sort-by': 'popularity'
//   }

//   delete asd['sort-by']
//   asd['sorted-byby'] = 'popopo'

//   console.log(asd)

//   const processSearch = (item) => {
//     const filters = {}

//     if
//   }

//   console.log(processSearch('search_filter'))

let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

// Add a third parameter.
params.set("baz", 3);
params.set("asdas", '23525');
params.set("3525", 'fesefse');
params.set("baz", 888);
params.toString(); // "foo=1&bar=2&baz=3"

console.log(params.toString())