import { connect } from 'react-redux';
import Welcome from './welcome.jsx';

function mS2P({ settings }) {
  return {
    title: settings.name,
    description: settings.description,
    background: settings.welcomePageBackground,
    overlay: {
      color: settings.welcomePageOverlayColor,
      opacity: settings.welcomePageOverlayOpacity,
    },
  };
}

export default connect(mS2P)(Welcome);
