import UpwardAnimated from '@/components/ui/UpwardAnimated';
import ImageTransition from '@/components/ui/ImageTransition';
import ScrollSection from '@/components/layout/ScrollSection';
import StaggeredText from '@/components/ui/StaggeredText';

export default function Study() {
  return (
    <ScrollSection>
      <div className="flex justify-center">
        <UpwardAnimated>
          <StaggeredText
            text="I like to start my day with my morning routine and some study or learning"
            className="font-plex-mono mt-16 w-[380px] text-2xl font-light text-white"
            staggerDelay={0.05}
            initialDelay={0.2}
          />
        </UpwardAnimated>
      </div>

      <UpwardAnimated className="mt-16 flex justify-center">
        <ImageTransition
          outlineSrc="/images/shelf-outline-1024.avif"
          fillSrc="/images/shelf-fill-1024.avif"
          alt="shelf"
          className="w-[677px]"
          width={1068}
          height={747}
        />
      </UpwardAnimated>

      <div className="mt-16 flex justify-center">
        <UpwardAnimated>
          <StaggeredText
            text="Then I have my breakfast which (unapologetically) is usually OatMeal or Muesli bowl - the only healthy recipe I've mastered."
            className="font-plex-mono w-[380px] text-2xl font-light text-white"
            staggerDelay={0.05}
            initialDelay={0.2}
          />
        </UpwardAnimated>
      </div>

      <UpwardAnimated className="mt-14 flex justify-center">
        <ImageTransition
          outlineSrc="/images/oatmeal-3d-outline.png"
          fillSrc="/images/oatmeal-3d-colour.png"
          alt="oatmeal"
          className="w-[677px] place-items-center"
          width={512}
          height={512}
        />
      </UpwardAnimated>
    </ScrollSection>
  );
}
