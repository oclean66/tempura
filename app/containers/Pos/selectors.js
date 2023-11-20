import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pos state domain
 */

const selectPosDomain = state => state.pos || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Pos
 */

const makeSelectPos = () =>
  createSelector(
    selectPosDomain,
    substate => substate,
  );

export default makeSelectPos;
export { selectPosDomain };
