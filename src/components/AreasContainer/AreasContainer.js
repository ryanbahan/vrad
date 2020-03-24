import React from 'react';
import AreaCard from '../AreaCard/AreaCard';
import Nav from '../Nav/Nav';
import './AreasContainer.scss';

class AreasContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      areas: []
    }
  }

  fetchAreaData = () => {
    fetch('http://localhost:3001/api/v1/areas')
     .then(res => res.json())
     .then(data => {
      const promises = data.areas.map(area => {
        return fetch(`http://localhost:3001${area.details}`)
              .then(res => res.json())
              .then(info => {
                return {shortname: area.area, ...info};
              })
      })
      Promise.all(promises).then(areas => this.setState({areas}));
    })
  }

  componentDidMount = () => {
    this.fetchAreaData();
  }

  areaCardDisplay = () => {
    return this.state.areas.map(area => {
      return <AreaCard
        id={area.id}
        key={area.id}
        name={area.name}
        shortname={area.shortname}
        about={area.about}
      />
    })
  }

  render() {
    return <main>
    <Nav user={this.props.user} />
    <h1>Choose Your Destination</h1>
      <section className="areas-container">
        {this.areaCardDisplay()}
      </section>
    </main>
    }
  }

export default AreasContainer;
