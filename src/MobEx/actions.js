// Redux uses Actions to change the global state
// with the help of a Reducer. Actions never
// mutate the global state directly. MobX doesn't use Reducers.
// That’s why MobX Actions mutate the state directly.
// Both libraries call it Action,
// but they apply them in a different way to change the state.


//actions get imported into containers, along with the stores they will be mutating directly.

import nasaStore from './store.js'

export function getNasaDataAction() {
  const fetchedPromise = fetch('https://api.nasa.gov/planetary/apod?api_key=rowvLMkZM9WZWKIK2ApDXcQOqMTf9lYIULFn8nrr')
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonResponse) {
      nasaStore.title = jsonResponse.title;
      nasaStore.date = jsonResponse.date;
      nasaStore.explanation = jsonResponse.explanation;
      nasaStore.image = jsonResponse.hdurl;

      return nasaStore;
    });
};

export function showNasaDataAction() {
  nasaStore.showFlag = true;
  return nasaStore;
}

