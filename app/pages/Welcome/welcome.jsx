import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

@translate()
class Welcome extends Component {
  render() {
    const { t, title, description } = this.props;

    return (
      <div>
        <Helmet
          title={t('Welcome')}
          meta={[
            { name: 'description', content: description },

            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
          ]}
        />
        <h1>{ title }</h1>
        <p>{ description }</p>
      </div>
    );
  }
}

Welcome.propTypes = {
  t: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Welcome;
