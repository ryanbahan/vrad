import React from 'react';
import AreaCard from '../AreaCard/AreaCard';
import Nav from '../Nav/Nav';
import './AreasContainer.scss';
import { fetchAreaData } from '../../utils';
import PropTypes from 'prop-types';

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
    <Nav userInfo={this.props.userInfo} />
    <h1 className="page-label">Where to, {this.props.userInfo.name || "friend"}?</h1>
      <section className="areas-container">
        {this.areaCardDisplay()}
      </section>
    </main>
    }
}

AreasContainer.propTypes = {
  userInfo: PropTypes.object
}

export default AreasContainer;
