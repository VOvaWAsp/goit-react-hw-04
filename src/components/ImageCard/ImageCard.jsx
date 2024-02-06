// import { ImageModal } from '../ImageModal/ImageModal';
import css from './ImageCard.module.css';

export const ImageCard = ({ items, isOpen }) => {
  //   const [modalIsOpen, setIsOpen] = React.useState(false);

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  //   function closeModal() {
  //     setIsOpen(false);
  //   }
  return (
    <div>
      <img
        className={css.image}
        src={items.urls.small}
        alt={items.alt_description}
        onClick={() => isOpen(items.urls.regular)}
      />
      {/* <ImageModal src={items.urls.regular} /> */}
    </div>
  );
};
