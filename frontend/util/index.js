export const query = (q, success) => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const options = { method: 'GET',
                    headers,
                    mode: 'cors',
                    cache: 'default' };

  fetch(`https://data.sfgov.org/resource/wwmu-gmzc.json?$where=starts_with(lower(actor_1),%20%27${q}%27)`, options)
    .then(resp => resp.json())
    .then(json => success(json))
}