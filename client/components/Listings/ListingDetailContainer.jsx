import React, { Component } from 'react';
import ListingDetail from './ListingDetail.jsx';
import { connect } from 'react-redux';

class ListingViewContainer extends Component {

  componentWillMount() {
  }

// rendering a single listing, and passing it a
// single listing
  render() {
    return (
      <p>
        This is loading a
      </p>
    );
  }
}
      // <ListingDetail listing={this.props.listings[this.props.params.id]} />

// mapping state to props, grabbing the listings
const mapStateToProps = function mapStateToProps(state) {
  return {
    listings: state.listings,
  };
};

ListingViewContainer.propTypes = {
  listings: React.PropTypes.object,
  params: React.PropTypes.object,
};

// May need to add a dispatch, if we want to have
// a contact owner action
export default connect(mapStateToProps)(ListingViewContainer);
