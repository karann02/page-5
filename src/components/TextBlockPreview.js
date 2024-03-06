import "./TextBlockPreview.css";

const TextBlockPreview = () => {
  return (
    <header className="text-block-preview">
      <div className="text-block-preview-child" />
      <div className="rectangle-logo">
        <img
          className="skinclublogo-logotype-white-1-icon2"
          loading="lazy"
          alt=""
          src="/skinclublogo-logotype-white-1@2x.png"
        />
      </div>
      <div className="clickable-button">
        <div className="confirm-payment-frame">
          <h3 className="sunday-20-august2">Sunday, 20 August</h3>
        </div>
        <div className="pm2">1:50 PM</div>
        <div className="vitamin-a-night-serum-frames">
          <div className="vitamin-a-night-serum-frames-child" />
          <img
            className="rate-qty-amount-frame2"
            loading="lazy"
            alt=""
            src="/vector3.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default TextBlockPreview;
