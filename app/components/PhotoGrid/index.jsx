import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetch } from '../../actions/photos';
import PhotoGrid from './photoGrid';

function mS2P({ photos }) {
  return {
    loadedPhotos: photos.list,
    fetchedPage: photos.fetchedPage,
    isLoading: photos.isLoading,
    error: photos.error,
  };
}
function mD2P(dispatch) {
  return bindActionCreators({
    fetchPhotos: fetch,
  }, dispatch);
}

export default connect(mS2P, mD2P)(PhotoGrid);
