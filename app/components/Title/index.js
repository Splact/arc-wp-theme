import { connect } from 'react-redux';
import Title from './title';

function mS2P({ settings }) {
  return {
    title: settings.name,
    description: settings.description,
  };
}

export default connect(mS2P)(Title);
