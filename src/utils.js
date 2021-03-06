// API FETCH CALLS

export function fetchAreaData() {
  return fetch('http://localhost:3001/api/v1/areas')
   .then(res => res.json())
   .then(data => {
     const promises = data.areas.map(area => {
        return fetch(`http://localhost:3001${area.details}`)
              .then(res => res.json())
              .then(info => {
                return {shortname: area.area, ...info};
              })
            })
    return Promise.all(promises);
  })
};

export function fetchListingData(areaID) {
    return fetch('http://localhost:3001/api/v1/areas/' + areaID)
     .then(res => res.json())
     .then(data => {
        const promises = data.listings.map(listing => {
          return fetch('http://localhost:3001'+ listing)
                .then(res => res.json())
                .then(info => {
                  return {name: info.name,
                    listingID: info.listing_id
                    };
                })
              })
    return Promise.all(promises);
  })
};

export function fetchListingPageData(id) {
    return fetch("http://localhost:3001/api/v1/listings/" + id)
    .then(res => res.json())
  }

export function fetchFavoriteListingData() {
    const favorites = JSON.parse(window.localStorage.getItem("listingFavorites"));
    if (favorites) {
    const promises = favorites.map(listingID => {
      return fetch('http://localhost:3001/api/v1/listings/' + listingID)
      .then(res => res.json())
      .then(data => {
        return {listingID: listingID,
          areaID: data.area_id,
          name: data.name}
      })
    })
    return Promise.all(promises);
    } else {
      return Promise.resolve([])
    }
  }

export function fetchSavedFavorites() {
     if (window.localStorage.getItem("listingFavorites")) {
       return JSON.parse(window.localStorage.getItem("listingFavorites"));
     } else {
       return [];
     }
  }

export function updateSavedFavorites(savedFavorites) {
    if (savedFavorites) {
      const favorites = JSON.stringify(savedFavorites);
      window.localStorage.setItem("listingFavorites", favorites);
    }
  }

export function checkFavorites(id) {
    const favorites = JSON.parse(window.localStorage.getItem("listingFavorites"));
    if (favorites && favorites.find(item => parseInt(item) === parseInt(id))) {
      return true;
    } else {
      return false;
    }
  }
