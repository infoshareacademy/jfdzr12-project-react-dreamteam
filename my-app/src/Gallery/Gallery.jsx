const gallery = [
  'img/bride-8182890_1280.jpg',
  'img/cat.jpg',
  'img/children-817365_1280.jpg',
  'img/examplephoto.jpg'
]

export const Gallery = () => {
  return (
    gallery.map((image) => { return <img src={image} key={image} /> })
  )
}