/**
 *
 * Asynchronously loads the component for Pos
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
