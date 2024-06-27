import AppLayout from "~/app/appLayout";
import Heading from "~/app/_components/Heading";
import Button from "~/app/_components/Button";
import PictureCard from "~/app/_components/PictureCard";
import { imageContents } from '~/app/data'

export default async function Home() {
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
          <Button variant="active">Add Picture</Button>
        </div>
      </div>

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
  );
}
