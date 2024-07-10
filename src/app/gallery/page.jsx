import SlideshowPage from "@/components/slideshow/page";

import img1 from '@/assets/images/img_1.jpg';
import img2 from '@/assets/images/img_2.jpg';
import img3 from '@/assets/images/img_3.jpg';
import img4 from '@/assets/images/img_4.jpg';
import img5 from '@/assets/images/img_5.jpg';
import img6 from '@/assets/images/img_6.jpg';
import img7 from '@/assets/images/img_7.jpg';
import FormImage from "@/components/formImage/page";


const images = [img1, img2, img3, img4, img5, img6, img7];

export default function GalleryPage() {
  return (
    <div className='container'>
      <FormImage />
      <SlideshowPage images={images}/>
    </div>
  );
}
