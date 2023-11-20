/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Header, Segment } from 'semantic-ui-react';
import messages from './messages';

export default function NotFound() {
  return (
    <Segment>
      <Header>
        <FormattedMessage {...messages.header} />
      </Header>
    </Segment>
  );
}
