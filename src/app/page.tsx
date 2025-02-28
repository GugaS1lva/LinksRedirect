// src/app/page.tsx
import { redirect } from 'next/navigation';
import getLatestVideoUrl from '../lib/youtube';

export default async function HomePage() {
  let videoUrl: string;
  try {
    videoUrl = await getLatestVideoUrl();
  } catch (error) {
    console.error("Erro ao obter a URL do vídeo:", error);
    // Em caso de erro, define o fallback para o canal
    videoUrl = "https://www.youtube.com/@gugas1lvadev";
  }
  
  // Essa chamada dispara o redirect e lança a exceção NEXT_REDIRECT, que é tratada internamente pelo Next.js.
  redirect(videoUrl);
  // Código após o redirect() nunca será executado.
}
