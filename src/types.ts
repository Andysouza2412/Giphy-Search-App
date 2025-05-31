export interface GifData {
    id: string;
    title: string;
    images: {
      fixed_height: { url: string };
      original: { url: string };
    };
    url: string;
  }