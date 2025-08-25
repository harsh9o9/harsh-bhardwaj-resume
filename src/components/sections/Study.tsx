import UpwardAnimated from '@/components/ui/UpwardAnimated';
import ImageTransition from '@/components/ui/ImageTransition';
import ScrollSection from '@/components/layout/ScrollSection';
import StaggeredText from '@/components/ui/StaggeredText';

export default function Study() {
  return (
    <ScrollSection className="px-4 sm:px-8">
      <div className="flex justify-center">
        <UpwardAnimated className="">
          <StaggeredText
            text="I like to start my day with my morning routine and some study or learning"
            className="font-plex-mono mt-8 sm:mt-12 lg:mt-16 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[450px] text-lg sm:text-xl lg:text-2xl font-light text-white text-center"
            staggerDelay={0.05}
            initialDelay={0.2}
          />
        </UpwardAnimated>
      </div>

      <UpwardAnimated className="mt-8 sm:mt-12 lg:mt-16 flex justify-center">
        <ImageTransition
          outlineSrc="/images/shelf-outline-1024.avif"
          fillSrc="/images/shelf-fill-1024.avif"
          alt="shelf"
          className="w-full max-w-[300px] sm:max-w-[450px] lg:max-w-[677px]"
          width={1068}
          height={747}
        />
      </UpwardAnimated>

      <div className="mt-8 sm:mt-12 lg:mt-16 flex justify-center">
        <UpwardAnimated className="">
          <StaggeredText
            text="Then I have my breakfast which (unapologetically) is usually OatMeal or Muesli bowl - the only healthy recipe I've mastered."
            className="font-plex-mono w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[450px] text-lg sm:text-xl lg:text-2xl font-light text-white text-center"
            staggerDelay={0.05}
            initialDelay={0.2}
          />
        </UpwardAnimated>
      </div>

      <UpwardAnimated className="mt-8 sm:mt-10 lg:mt-14 flex justify-center">
        <ImageTransition
          outlineSrc="/images/oatmeal-3d-outline.png"
          fillSrc="/images/oatmeal-3d-colour.png"
          alt="oatmeal"
          className="w-full max-w-[300px] sm:max-w-[450px] lg:max-w-[677px] place-items-center"
          width={512}
          height={512}
        />
      </UpwardAnimated>
    </ScrollSection>
  );
}
