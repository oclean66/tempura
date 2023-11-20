/**
 *
 * Pos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPos from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Pos() {
  useInjectReducer({ key: 'pos', reducer });
  useInjectSaga({ key: 'pos', saga });

  return (
    <div>
      <Helmet>
        <title>Pos</title>
        <meta name="description" content="Description of Pos" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Pos.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pos: makeSelectPos(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Pos);
