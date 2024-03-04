const ImageSlider = ({ slider }) => {
  return (
    <div ref={slider} className="slider">
      <img src="/images/col1.webp" alt="" className="panel" />
      <img src="/images/col2.webp" alt="" className="panel" />
      <img src="/images/col3.webp" alt="" className="panel" />
      <img src="/images/col4.webp" alt="" className="panel" />

    </div>
  );
};

export default ImageSlider;
