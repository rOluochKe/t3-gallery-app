import React from 'react'
import Button from './Button'
import LikeIcon from './LikeIcon'
import InputField from './InputField'
import Textarea from './Textarea'
import UserAvatar from './UserAvatar'
import ConnectedUser from './ConnectedUser'
import PictureCard from './PictureCard'
import NavBar from './NavBar'
import Heading from './Heading'

function test() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">

        <Button variant="hover">test</Button>

        <LikeIcon liked={true} />

        <InputField
          label="Your Label"
          placeholder="Enter something..."
          helperText="This is helper text"
        />

        <Textarea
          label="Your Label"
          placeholder="Enter something..."
          helperText="This is helper text"
        />

        <UserAvatar text="J" size="small" />

        <ConnectedUser avatarText={"T"} fullName={"John Doe"} joinedInfo={"Joined on"} />

        <PictureCard
          imageUrl="/images/analyst.png"
          title="Sample Image"
          description="This is a sample description"
          userName="John Doe"
          userAvatarText="J"
          liked={false}
          alt="image name"
          width={266}
          height={260}
        />

        <NavBar />

        <Heading title="Welcome to the Gallery App" subtitle="Explore and share amazing pictures" />

      </div>
    </main>
  )
}

export default test