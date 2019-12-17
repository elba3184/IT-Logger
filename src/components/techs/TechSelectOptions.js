import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map((theTech) => (
      <option
        key={theTech.id}
        value={`${theTech.firstName} ${theTech.lastName}`}
      >
        {theTech.firstName} {theTech.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  techs: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
