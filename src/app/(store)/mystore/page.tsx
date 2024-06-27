"use client";

import React, { useState } from 'react';
import Button from '~/app/_components/Button'
import Heading from '~/app/_components/Heading'
import PictureCard from '~/app/_components/PictureCard'
import AppLayout from '~/app/appLayout'
import Modal from '~/app/_components/Modal'
import InputField from '~/app/_components/InputField';
import Textarea from '~/app/_components/Textarea';
import { imageContents } from '~/app/data'

export default function MyStore() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppLayout withNavbar={true}>
      <div className="flex items-center justify-between">
        <div>
          <Heading
            title="My Store"
            subtitle="My recent uploads"
          />
        </div>

        <div>
          <Button onClick={openModal} variant="active">Add Picture</Button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Heading
          title="Add Picture"
          subtitle="Share your moment with the community"
        />

        <InputField
          label="Title"
          placeholder="Fancy Amazing Picture"
          helperText="Enter the picture title"
        />

        <Textarea
          label="Description"
          placeholder="Picture of an amazing view, Blue Sky, Polar Mountains..."
          helperText="Describe your picture"
        />

        <div className="flex justify-end">
          <Button variant="active">Save Picture</Button>
        </div>
      </Modal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {imageContents.map((content) => (
          <PictureCard
            key={content.id}
            imageUrl={content.imageUrl}
            title={content.title}
            description={content.description}
            userName={content.userName}
            userAvatarText={content.userAvatarText}
            liked={content.liked}
            alt={content.alt}
            width={content.width}
            height={content.height}
          />
        ))}
      </div>
    </AppLayout>
  )
}
