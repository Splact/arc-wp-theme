import { connect } from 'react-redux';
import Welcome from './welcome.jsx';

function mS2P({ settings }) {
  return {
    title: settings.name,
    description: settings.description,
  };
}

export default connect(mS2P)(Welcome);
