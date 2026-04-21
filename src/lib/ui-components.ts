export interface UiComponent {
  title: string;
  type: string;
  mediaUrl: string; // img or video URL
  codeUrl: string;
  liveUrl: string;
}

const uiComponents: UiComponent[] = [
  {
    title: " Kynex Shift   ",
    type: "Hero",
    mediaUrl: "/assets/images/kynex-hero.mp4",
    codeUrl: "https://github.com/ShardulVanage/kynex-aheft-hero",
    liveUrl: "https://kynex-sheft-vibecode.vercel.app/",
  },
  {
    title: "Specter Marketplace ",
    type: "Image Slider",
    mediaUrl: "/assets/images/slider-hero.mp4",
    codeUrl: "https://github.com/ShardulVanage/Marketplace-Slider-vibecode",
    liveUrl: "https://marketplace-slider-vibecode.vercel.app/",
  },
  {
    title: "Nuve Skincare",
    type: "Hero",
    mediaUrl: "/assets/images/nuve-hero.mp4",
    codeUrl: "https://github.com/ShardulVanage/Nuve-Hero-Vibecode",
    liveUrl: "https://nuve-hero-vibecode.vercel.app/",
  },
];

export const getUiComponents = (): UiComponent[] => uiComponents;