import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import "../styles/carousel.css";
import { carouselImagesType } from "../utils/imagesUtils";
import { IconButton, Box } from "@mui/material";
import { colors } from "../utils/colors";

interface CarouselProps{
  carouselImages: carouselImagesType[]
}

const Carousel: React.FC<CarouselProps> = ({carouselImages}) => {
  return (
    <Box
      id="carousel-component"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <Box className="carousel-inner ">
        {carouselImages.map((image,index) =>
          image.active ? (
            <Box key={index} className="carousel-item  active" data-bs-interval="3000">
              <img
                className="d-block w-100 image-media-query"
                src={image.imgSource}
                alt={image.title}
              />
              <Box className="carousel-caption d-block ">
                {image.button ? (
                  <button className="btn btn-primary">{image.button}</button>
                ) : (
                  null
                )}
                {image.title ? <h5><strong>{image.title}</strong></h5> : null}
                {image.description ? <p><strong>{image.description}</strong></p> : null}
              </Box>
            </Box>
          ) : (
            <Box key={index} className="carousel-item " data-bs-interval="3000">
              <img
                className="d-block w-100 image-media-query"
                src={image.imgSource}
                alt={image.title}
              />
              <Box className="carousel-caption d-block ">
                {image.button ? (
                  <button className="btn btn-primary">{image.button}</button>
                ) : (
                  null
                )}
                {image.title ? <h5><strong>{image.title}</strong></h5> : null}
                {image.description ? <p><strong>{image.description}</strong></p> : null}
              </Box>
            </Box>
          )
        )}
      </Box>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-component"
        data-bs-slide="prev"
      >
        <IconButton
          sx={{ background: colors.primary, borderRadius: "5px", heigth: "300px",
            '&:hover': {
              bgcolor: colors.secondary,
            } }}
        >
          <ArrowBackIosNew sx={{ color: "white" }} />
        </IconButton>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel-component"
        data-bs-slide="next"
      >
        <IconButton
          sx={{ background: colors.primary, borderRadius: "5px", heigth: "300px",
            '&:hover': {
              bgcolor: colors.secondary,
            } }}
        >
          <ArrowForwardIos sx={{ color: "white" }} />
        </IconButton>
        <span className="visually-hidden">Next</span>
      </button>
    </Box>
  );
};

export default Carousel;
