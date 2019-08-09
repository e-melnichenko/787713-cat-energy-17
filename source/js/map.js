let width = document.body.clientWidth;
let locationCenter = (width >= 1300) ? [59.938819, 30.319378] : [59.938840, 30.323026];
let imageSize = (width >= 768) ? [124, 106] : [62, 53];
let imageOffset = (width >= 768) ? [-40, -80] : [-20, -42];


ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: locationCenter,
      zoom: 17,
      behaviors: ['default', 'scrollZoom'],
      controls: ['zoomControl']
    }, {
      searchControlProvider: 'yandex#search'
    });

  var myPlacemark = new ymaps.Placemark([59.938840, 30.323026],
    {balloonContentBody: "<div class='ballon-point'><div class='ballon-img'><img src='/wp-content/themes/mytheme/img/logo.png'/></div><div class='ballon-content'>Cat Energy</div></div>"},
    {
    iconLayout: 'default#image',
    iconImageHref: './img/map-pin.png',
    iconImageSize: imageSize,
    iconImageOffset: imageOffset,
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
});
