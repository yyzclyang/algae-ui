const getScrollBarWidth = () => {
  const div = document.createElement('div');

  div.style.position = 'absolute';
  // 把 div 放置到屏幕可见范围之外
  div.style.top = div.style.left = '-9999px';
  div.style.width = div.style.height = '100px';
  div.style.overflow = 'scroll';

  document.body.appendChild(div);

  const width = div.offsetWidth - div.clientWidth;

  document.body.removeChild(div);

  return width;
};

export default getScrollBarWidth;
