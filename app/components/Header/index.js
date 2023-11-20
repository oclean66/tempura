import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import messages from './messages';

function Header() {
  return (
    <div>
      <Menu>
        <Menu.Item to="/" as={Link}>
          <FormattedMessage {...messages.home} />
        </Menu.Item>
        <Menu.Item to="/features" as={Link}>
          <FormattedMessage {...messages.features} />
        </Menu.Item>
        <Menu.Item to="/pos" as={Link}>
          <FormattedMessage {...messages.sales} />
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
