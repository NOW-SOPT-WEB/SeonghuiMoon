interface VideoProps {
  src: string;
}

function VideoPlayer({ src }: VideoProps) {
  return (
    <video controls autoPlay loop muted width="500">
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default VideoPlayer;
