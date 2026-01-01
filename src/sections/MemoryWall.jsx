import PolaroidCard from '../components/PolaroidCard';
import './MemoryWall.css';

const MemoryWall = ({ photos = [] }) => {
  if (photos.length === 0) {
    return (
      <section className="memory-wall">
        <h2 className="section-title">Memory Wall 💕</h2>
        <p className="placeholder-text">Add your photos here!</p>
      </section>
    );
  }

  return (
    <section className="memory-wall">
      <h2 className="section-title">Memory Wall 💕</h2>
      <div className="polaroid-grid">
        {photos.map((photo, index) => (
          <PolaroidCard
            key={index}
            image={photo.src || photo}
            alt={photo.alt || `Memory ${index + 1}`}
            message={photo.message || ''}
            rotation={photo.rotation}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default MemoryWall;

