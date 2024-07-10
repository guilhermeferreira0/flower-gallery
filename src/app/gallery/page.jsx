import SlideshowPage from "@/components/slideshow/page";
import FormImage from "@/components/formImage/page";
import { getImages } from "@/lib/db";
import { uploadAction } from "@/actions/uploadAction";

export default async function GalleryPage() {
  const images = await getImages();

  return (
    <div className='container'>
      <FormImage action={uploadAction}/>
      <SlideshowPage images={images}/>
    </div>
  );
}
