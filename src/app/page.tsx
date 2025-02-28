import { redirect } from 'next/navigation';
import getLatestVideoUrl from '../lib/youtube';

export default async function HomePage() {
  let videoUrl: string;
  try {
    videoUrl = await getLatestVideoUrl();
  } catch (error) {
    console.error("Erro ao obter a URL do vídeo:", error);
    videoUrl = "https://www.youtube.com/@gugas1lvadev";
  }
  
  redirect(videoUrl);
}
