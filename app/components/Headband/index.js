import { connect } from 'react-redux';
import Headband from './headband';

function mS2P({ settings }) {
  return settings;
}

export default connect(mS2P)(Headband);
