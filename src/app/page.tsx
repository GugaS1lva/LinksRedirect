import { redirect } from 'next/navigation';
import getLatestVideoUrl from '../lib/youtube';
import Link from 'next/link';

function getEmbedUrl(videoUrl: string): string {
  if (videoUrl.includes("youtu.be/")) {
    return videoUrl.replace("https://youtu.be/", "https://www.youtube.com/embed/");
  } else if (videoUrl.includes("watch?v=")) {
    const videoId = videoUrl.split("watch?v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  } else {
    return videoUrl;
  }
}

export default async function HomePage() {
  let videoUrl: string | null = null;
  try {
    videoUrl = await getLatestVideoUrl();
    // redirect(videoUrl);
  } catch (error) {
    console.error("Deu ruim ao redirecionar o último vídeo:", error);
  }

  return (
    <main className="flex flex-col h-screen items-center justify-center bg-gray-100 space-y-8 p-4">
      <Link
        href={videoUrl || "https://www.youtube.com/@gugas1lvadeva"}
        className="px-8 py-4 bg-red-700 text-white rounded-lg text-xl hover:bg-red-700/90"
      >
        YouTube do Guga. ☕👌🏻
      </Link>
      {videoUrl && (
          <iframe
            className='w-[600px] h-[338px] bg-red-900'
            width={'100%'}
            height={'100%'}
            src={getEmbedUrl(videoUrl)}
            title="Título do Vídeo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      )}
    </main>
  );
}
