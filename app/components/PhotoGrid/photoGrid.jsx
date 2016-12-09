import React, { PureComponent, PropTypes } from 'react';
import style from './style.css';

class PhotoGrid extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };

    this.nextPage = 1;
  }

  /** React Lifecycle **/
  componentWillMount() {
    this.props.fetchPhotos({
      page: this.nextPage,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLoading && !nextProps.isLoading) {
      if (nextProps.error) {
        console.log('[Photographer] fetch error', nextProps.error);
      } else if (nextProps.loadedPhotos.length > 0) {
        this.nextPage = nextProps.fetchedPage + 1;
        this.setState({
          photos: [...this.state.photos, ...nextProps.loadedPhotos],
        });
      } else {
        // no more photos to load
        this.nextPage = null;
      }
    }
  }

  /** Render **/
  render() {
    const { photos } = this.state;

    return (
      <div className={style.base}>
        {
          photos.map(p =>
            <div className={style.photo}>
              <span>{p.title.rendered}</span><sub>{p.id}</sub>
            </div>
          )
        }
      </div>
    );
  }
}

PhotoGrid.propTypes = {
  fetchPhotos: PropTypes.func,
  loadedPhotos: PropTypes.arrayOf(PropTypes.shape({
  })),
  fetchedPage: PropTypes.number,
  isLoading: PropTypes.bool,
};

export default PhotoGrid;
