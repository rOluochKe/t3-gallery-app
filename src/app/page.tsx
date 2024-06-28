"use client";

import React, { useState } from 'react';
import AppLayout from "~/app/appLayout";
import Heading from "~/app/_components/Heading";
import Button from "~/app/_components/Button";
import PictureCard from "~/app/_components/PictureCard";
import Modal from '~/app/_components/Modal'
import ModalForm from '~/app/_components/ModalForm';
import { imageContents } from '~/app/data'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppLayout withNavbar={true}>
      <div className="flex items-center justify-between">
        <div>
          <Heading
            title="Gallery"
            subtitle="Community gallery"
          />
        </div>

        <div>
          <Button type='button' onClick={openModal} variant="active">Add Picture</Button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalForm onClose={closeModal} />
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
            alt={content.title}
          />
        ))}
      </div>
    </AppLayout>
  );
}
