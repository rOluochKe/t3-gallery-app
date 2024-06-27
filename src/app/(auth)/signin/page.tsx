import React from 'react';
import Button from '~/app/_components/Button';
import Heading from '~/app/_components/Heading';

export default function Signin() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Heading title='Sign In' />
      <Button variant="active">Connect with Google</Button>
    </div>
  );
}
