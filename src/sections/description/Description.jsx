import "./description.css";

const Description = () => {
  return (
    <div className="description">
      <div>
        <h2>ELEVATING COMFORT WITH EVERY CURVE</h2>
        <img className="mobile" src="/images/model.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>

      <img className="desktop" src="/images/model.jpg" alt="" />
    </div>
  );
};

export default Description;
