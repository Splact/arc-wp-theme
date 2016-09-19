import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './app';
import { boot } from '../../actions/app';

function mS2P({ app, settings }) {
  return {
    isReady: app.isReady,
    theme: `${settings.theme}-theme`,
  };
}

function mD2P(dispatch) {
  return bindActionCreators({
    boot,
  }, dispatch);
}

export default connect(mS2P, mD2P)(App);
