import React from 'react';
import Heading from '~/app/_components/Heading';
import InputField from '~/app/_components/InputField';
import Textarea from '~/app/_components/Textarea';
import Button from '~/app/_components/Button';

interface ModalFormProps {
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ onClose }) => {
  return (
    <>
      <Heading
        title="Add Picture"
        subtitle="Share your moment with the community"
      />

      <InputField
        label="Title"
        placeholder="Fancy Amazing Picture"
        helperText="Enter the picture title"
        width="50%"
      />

      <Textarea
        label="Description"
        placeholder="Picture of an amazing view, Blue Sky, Polar Mountains..."
        helperText="Describe your picture"
      />

      <div className="flex justify-end">
        <Button type='submit' variant="hover" onClick={onClose}>Save Picture</Button>
      </div>
    </>
  );
};

export default ModalForm;
