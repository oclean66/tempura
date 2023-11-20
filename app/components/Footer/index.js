import React from 'react';
import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';
import { Segment } from 'semantic-ui-react';
import messages from './messages';

function Footer() {
  return (
    <Segment >
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
    </Segment>
  );
}

export default Footer;
