export const query = (q, success) => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const options = { method: 'GET',
                    headers,
                    mode: 'cors',
                    cache: 'default' };

  let url = `https://data.sfgov.org/resource/wwmu-gmzc.json?`
  url += `$where=starts_with(lower(title),%20%27${q}%27)&`
  url += `$limit=10`

  let url2 = `https://data.sfgov.org/resource/wwmu-gmzc.json?$where=starts_with(lower(actor_1),%20%27${q}%27)&$limit=50`

  fetch(url, options)
    .then(resp => resp.json())
    .then(json => success(json))
}


// {
  // "actor_1":"Siddarth",
  // "actor_2":"Nithya Menon",
  // "actor_3":"Priya Anand",
  // "director":"Jayendra",
  // "locations":"Epic Roasthouse (399 Embarcadero)",
  // "production_company":"SPI Cinemas",
  // "release_year":"2011",
  // "title":"180",
  // "writer":"Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba ",
  // "fun_facts":"During San Francisco's Gold Rush era, the Park was part of an area designated as the \"Great Sand Waste\". ",
// }
