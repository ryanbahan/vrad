import React from 'react';
import './AreasContainer.scss';

class AreasContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      areas: []
    }
  }


  fetchAreaData = () => {
    // console.log("qwq")
    fetch('http://localhost:3001/api/v1/areas')
     .then(res => res.json())
     .then(data => {
      const promises = data.areas.map(area => {
        return fetch(`http://localhost:3001${area.details}`)
              .then(res => res.json())
              this.setState({areas: Promise.all(promises)})
              console.log(Promise.all(promises))
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
