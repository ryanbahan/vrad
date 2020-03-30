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
