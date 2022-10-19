import { Link } from '@remix-run/react'
import type { MediaImage, ImageStyle } from '~/@types/entities';

interface CoverImageProps {
  title: string;
  path: string;
  image: MediaImage;
  width: number;
  height: number;
  styleName: string;
}

export default function CoverImage({ title, path, image, width, height, styleName }: CoverImageProps) {
  const imageStyle = image.mediaImage.styles.find((style) => style.style === styleName) as ImageStyle;
  const Image = (
      <img
        src={imageStyle.url}
        alt={`Teaser for ${title}`}
        width={width}
        height={height}
        style={{
          backgroundSize: 'cover',
          backgroundColor: '#eee',
          width: '100%',
          height: 'auto',
        }}
      />
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {path ? (
        <Link prefetch='intent' to={path} aria-label={title}>
          {Image}
        </Link>
      ) : (
        Image
      )}
    </div>
  );
}
