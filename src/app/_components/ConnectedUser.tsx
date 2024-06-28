import React from 'react';
import UserAvatar from '~/app/_components/UserAvatar';

interface ConnectedUserProps {
  avatarText: string;
  fullName: string;
  joinedInfo: string;
}

const ConnectedUser: React.FC<ConnectedUserProps> = ({ avatarText, fullName, joinedInfo }) => {
  return (
    <div className="flex items-center space-x-2">
      <UserAvatar text={avatarText} size="small" />
      <div>
        <div className="text-light">{fullName}</div>
        <div className="text-accent text-sm">{joinedInfo}</div>
      </div>
    </div>
  );
};

export default ConnectedUser;
