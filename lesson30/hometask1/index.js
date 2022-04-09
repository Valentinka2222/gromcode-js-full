export const addImageV2 = (url) => {
  const p = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement('img');
    imgElem.src = url;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);
    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolveCb({ width, height });
    };
    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () =>
      rejectCb(new Error('Image load failed')),
    );
  });

  return p;
};

// examples

addImageV2(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
)
  .then((data) => console.log(data)) // ==> { width: 200, height: 100 }
  .catch((error) => console.log(error)); // ==> 'Image load failed'
