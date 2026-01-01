import './FinalSection.css';

const FinalSection = ({ lastImage }) => {
  return (
    <section className="final-section">
      <div className="final-content">
        {lastImage && (
          <div className="final-image-container bunny-final-frame">
            <div className="bunny-final-bunny bunny-final-1">🐰</div>
            <div className="bunny-final-bunny bunny-final-2">🐇</div>
            <div className="bunny-final-bunny bunny-final-3">💖</div>
            <div className="bunny-final-bunny bunny-final-4">🌸</div>
            <img src={lastImage} alt="Special moment" className="final-image" />
          </div>
        )}
        <div className="final-message">
          <p className="final-text">
            Built by <span className="signature">Aharnish</span> with love
            <span className="heart"> 💗</span>
          </p>
          <div className="final-hearts">
            <span className="final-heart">💖</span>
            <span className="final-heart">💕</span>
            <span className="final-heart">💖</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;

