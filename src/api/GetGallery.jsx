import React, { Component } from 'react';

export class GetGallery extends Component {
  state = {
    KEY: '19092084-bc4ccb70eacd908f2d855c18b',
    URL: 'https://pixabay.com/api/',
    pageNum: 1,
    perPage: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImgName = prevProps.imgName;
    const newImgName = this.props.imgName;
    const { KEY, URL, pageNum, perPage } = this.state;

    if (prevImgName !== newImgName) {
      this.setState({ pageNum: 1 });
      this.props.switchLoader(true);

      fetch(
        `${URL}?q=${newImgName}&page=${pageNum}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
      )
        .then(res => res.json())
        .then(imgCollection => this.props.onFetch(imgCollection.hits))
        .finally(() => {
          this.props.switchLoader(false);
        });
    }
  }

  render() {
    return <div></div>;
  }
}

export default GetGallery;
