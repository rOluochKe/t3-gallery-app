import React from 'react';

interface UserAvatarProps {
  text: string;
  size?: 'small' | 'default';
}

const UserAvatar: React.FC<UserAvatarProps> = ({ text, size = 'default' }) => {
  const sizeClasses = size === 'small' ? 'h-8 w-8 text-sm' : 'h-12 w-12 text-lg';

  return (
    <div className={`bg-secondary text-light rounded-full flex items-center justify-center ${sizeClasses}`}>
      {text}
    </div>
  );
};

export default UserAvatar;
