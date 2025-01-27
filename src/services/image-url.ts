// This function takes an image url and returns a cropped version of it.
// This reduces the size of the image and makes it faster to load.
import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;