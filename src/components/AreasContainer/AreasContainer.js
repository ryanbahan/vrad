import React from 'react';
import AreaCard from '../AreaCard/AreaCard';
import Nav from '../Nav/Nav';
import './AreasContainer.scss';
import { fetchAreaData } from '../../utils';

class AreasContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      areas: []
    }
  }

  componentDidMount = () => {
    fetchAreaData().then(areas => this.setState({areas: areas}));
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
    <Nav userInfo={this.props.userInfo}/>
    <h1>Choose Your Destination</h1>
      <section className="areas-container">
        {this.areaCardDisplay()}
      </section>
    </main>
    }
  }

export default AreasContainer;
