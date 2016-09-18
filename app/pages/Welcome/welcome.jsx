import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';
import Page from '../../components/Page';
import Title from '../../components/Title';

@translate()
class Welcome extends Component {
  render() {
    const { t, title, description, background, overlay } = this.props;

    return (
      <Page background={background} overlay={overlay} flex>
        <Helmet
          title={t('Welcome')}
          meta={[
            { name: 'description', content: description },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
          ]}
        />
        <Title />
      </Page>
    );
  }
}

Welcome.propTypes = {
  t: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  background: PropTypes.string,
  overlay: PropTypes.shape({
    color: PropTypes.string,
    opacity: PropTypes.string,
  }),
};

export default Welcome;
