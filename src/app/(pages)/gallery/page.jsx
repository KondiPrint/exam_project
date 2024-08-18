import Carousel from '@/components/Gallery/Carousel';
import VariantSizeGallery from '@/components/Gallery/VariantSizeGallery';

export default function Gallery() {
  return (
    <>
      <section className='p-4 space-y-5'>
        <div className='divider divider-primary'>
          <h1 className='text-xl'>Here is a gallery display</h1>
        </div>

        <Carousel />
        <VariantSizeGallery />
      </section>
    </>
  );
}
