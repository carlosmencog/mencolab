/// <reference types="astro/client" />

interface Window {
  lottie?: {
    loadAnimation(options: {
      container: HTMLElement;
      renderer: string;
      loop: boolean;
      autoplay: boolean;
      path?: string;
    }): unknown;
  };
}
