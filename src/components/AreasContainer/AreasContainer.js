import React from 'react';
import './AreasContainer.scss';




class AreasContainer extends React.Component {
  fetchAreaData = () => {
    fetch('http://localhost:3001/api/v1/areas')
     .then(res => res.json())
     .then(data => {
      const promises = data.areas.map(area => {
        return fetch(`http://localhost:3001${area.details}`)
              .then(res => console.log(res.json()))
      })
    })
  }

  componentDidMount() {
    this.fetchAreaData()
  }

  render() {
    return(
      <main className="areas-container">hhh</main>

      )
    }
  }

export default AreasContainer;
