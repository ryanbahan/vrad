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
