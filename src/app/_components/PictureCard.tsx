import React from 'react';
import UserAvatar from '~/app/_components/UserAvatar';
import LikeIcon from '~/app/_components/LikeIcon';
import Image from 'next/image';

interface PictureCardProps {
  imageUrl: string;
  title: string;
  description: string;
  userName: string;
  userAvatarText: string;
  liked: boolean;
  alt: string;
  width: number;
  height: number;
  onLike?: () => void;
}

const PictureCard: React.FC<PictureCardProps> = ({
  imageUrl,
  title,
  description,
  userName,
  userAvatarText,
  liked,
  alt,
  width,
  height,
  onLike,
}) => {
  return (
    <div className="relative group">
      <div className="relative w-full h-64">
        <Image
          src={imageUrl}
          width={width}
          height={height}
          alt={alt}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4 transition-opacity duration-300 rounded-lg">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <UserAvatar text={userAvatarText} size="small" />
            <div className="text-light">By {userName}</div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-2">
          <div className="col-span-3">
            <div className="text-lg text-light">{title}</div>
            <div className="text-sm text-light">{description}</div>
          </div>
          <div className="col-span-1 flex items-center justify-end">
            <LikeIcon liked={liked} onClick={onLike} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureCard;
