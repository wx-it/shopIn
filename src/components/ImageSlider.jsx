const ImageSlider = ({ slider }) => {
  return (
    <div ref={slider} className="slider">
      <img src="/images/col1.jpg" alt="" className="panel" />
      <img src="/images/col2.jpg" alt="" className="panel" />
      <img src="/images/col3.jpg" alt="" className="panel" />
      <img src="/images/col4.jpg" alt="" className="panel" />

    </div>
  );
};

export default ImageSlider;
