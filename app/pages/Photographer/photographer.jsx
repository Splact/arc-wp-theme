import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';
import Page from '../../components/Page';

@translate()
class Photographer extends Component {
  render() {
    const { t } = this.props;

    return (
      <Page>
        <Helmet
          title={t('Photographer')}
          meta={[
            { name: 'description', content: t('Photo collection') },
            { property: 'og:title', content: t('Photographer') },
            { property: 'og:description', content: t('Photo collection') },
          ]}
        />
        photo collection
      </Page>
    );
  }
}

Photographer.propTypes = {
  t: PropTypes.func,
};

export default Photographer;
