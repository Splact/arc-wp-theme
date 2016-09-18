import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';


class Headband extends Component {
  render() {
    const { name, description } = this.props;

    return (
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        titleTemplate={`%s | ${name}`}
        defaultTitle={name}
        meta={[
          { name: 'description', content: { description } },
          { name: 'twitter:card', value: 'summary' },
          { property: 'og:type', content: 'website' },
        ]}
      />
    );
  }
}

Headband.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Headband;
