export default function selectionFilter({ series, films } = []) {
  return {
    series: [
      { title: 'Documentaries', data: series?.filter((item) => item.genre === 'documentaries').slice(0,5) },
      { title: 'Comedies', data: series?.filter((item) => item.genre === 'comedies').slice(0,5) },
      { title: 'Children', data: series?.filter((item) => item.genre === 'children').slice(0,5) },
      { title: 'Crime', data: series?.filter((item) => item.genre === 'crime').slice(0,5) },
      { title: 'Feel Good', data: series?.filter((item) => item.genre === 'feel-good').slice(0,5) },
    ],
    films: [
      { title: 'Drama', data: films?.filter((item) => item.genre === 'drama').slice(0,5) },
      { title: 'Thriller', data: films?.filter((item) => item.genre === 'thriller').slice(0,5) },
      { title: 'Children', data: films?.filter((item) => item.genre === 'children').slice(0,5) },
      { title: 'Suspense', data: films?.filter((item) => item.genre === 'suspense').slice(0,5) },
      { title: 'Romance', data: films?.filter((item) => item.genre === 'romance').slice(0,5) },
    ],
  };
}
