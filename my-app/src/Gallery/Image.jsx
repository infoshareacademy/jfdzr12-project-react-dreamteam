import { useOutletContext, useParams } from 'react-router-dom';
// import styles from '.Gallery/Gallery.module.css';

export const Image = () => {
    const { id } = useParams();
    console.log(id)

    const gallery = useOutletContext();
    console.log(gallery)

    const selectedImage = gallery.find(img => id == img.id);
    console.log(selectedImage)

    console.log(selectedImage.src)

    if (!selectedImage) {
        return <div>Loading...</div>;
    }

    return (
            <div><img src={selectedImage.src} /></div>
    );
};


//     const {id} = useParams();

// return (

//     return <div>
// zdjęcie

//     </div>

// )