import "./ImageGallery.css";
import images from "../../images";

const ImageGallery = () => {
  return (
    <div id="projects" className="projects-container">
      <h3 className="title-projects">PROJECTS</h3>
      <div className="gallery-container">
        {images.map((image) => {
          return (
            <div key={image.id} className="gallery-card">
              <a href={image.videoURL} target="_blank">
                <img src={image.url} alt={image.title} />
                <div className="text-container">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
