require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


let imageDatas = require('../data/imageDatas.jsion');

// 将图片名信息转化成图片URL路径信息
imageDatas = function genImageDataUrl(imageDataArr) {
  for (let i = 0; i < imageDataArr.length; i++) {
    let singleImageData = imageDataArr[i];
    singleImageData.imageUrl = require('../images/' + singleImageData.fileName);
    imageDataArr[i] = singleImageData;
  }
  return imageDataArr;
}(imageDatas);

//imageDatas = genImageDataUrl(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <section className="img-sec">
        </section>
        <nav className="controller-nav"></nav>
        <span>hello</span>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
