type YouTubeResponse = {
  items: {
    id: {
      videoId: string;
    }
  }[];
};

async function getLatestVideoUrl(): Promise<string> {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  if (!API_KEY || !CHANNEL_ID) {
    throw new Error('Deu ruim nas tuas variáveis. Confere se estão ativas ou expiradas.');
  }

  const apiUrl = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${CHANNEL_ID}&maxResults=1&type=video&key=${API_KEY}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Aqui deu ruim ao buscar os dados do YouTube: ${response.statusText}`);
  }

  const data: YouTubeResponse = await response.json();

  if (!data.items || data.items.length === 0) {
    throw new Error('Não achei os videos no canal.');
  }

  const videoId = data.items[0].id.videoId;

  const videoUrl = `https://youtu.be/${videoId}`;

  return videoUrl;
}

export default getLatestVideoUrl;
