const ImageSlider = ({ slider }) => {
  return (
    <div ref={slider} className="slider">
      <img loading="lazy" src="/images/col1.webp" alt="" className="panel desktop" />
      <img loading="lazy" src="/images/col2.webp" alt="" className="panel desktop" />
      <img loading="lazy" src="/images/col3.webp" alt="" className="panel desktop" />
      <img loading="lazy" src="/images/col4.webp" alt="" className="panel desktop" />
      <img loading="lazy" src="/images/mobile/col1.webp" alt="" className="panel mobile" />
      <img loading="lazy" src="/images/mobile/col2.webp" alt="" className="panel mobile" />
      <img loading="lazy" src="/images/mobile/col3.webp" alt="" className="panel mobile" />
      <img loading="lazy" src="/images/mobile/col4.webp" alt="" className="panel mobile" />
    </div>
  );
};

export default ImageSlider;
