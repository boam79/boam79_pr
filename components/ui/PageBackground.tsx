import Image from 'next/image';

interface PageBackgroundProps {
  imageSrc: string;
  overlayClassName?: string;
}

export default function PageBackground({
  imageSrc,
  overlayClassName = 'bg-white/70',
}: PageBackgroundProps) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority={false}
        aria-hidden
      />
      <div className={`absolute inset-0 backdrop-blur-sm ${overlayClassName}`} />
    </div>
  );
}
