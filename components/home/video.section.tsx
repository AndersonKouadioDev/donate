import HeroVideoDialog from "@/components/ui/hero-video-dialog";
export function VideoSection() {
  return (
    <div className="relative container max-w-screen-lg py-10 mx-auto">
      <HeroVideoDialog
        className="block"
        animationStyle="from-center"
        videoSrc={"/videos/video_4.mp4"}
        thumbnailSrc="/images/community/img_2.jpeg"
        thumbnailAlt="Video"
      />
    </div>
  );
}
