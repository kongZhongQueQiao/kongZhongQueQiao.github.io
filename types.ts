export interface Landmark {
  x: number;
  y: number;
  z: number;
}

export interface Results {
  multiHandLandmarks: Landmark[][];
  multiHandedness: any[];
  image: any;
}

export interface HandsInterface {
  setOptions: (options: any) => void;
  onResults: (callback: (results: Results) => void) => void;
  send: (input: { image: HTMLVideoElement }) => Promise<void>;
  close: () => void;
}

export interface CameraInterface {
  start: () => Promise<void>;
  stop: () => void;
}

declare global {
  interface Window {
    Hands: new (config: { locateFile: (file: string) => string }) => HandsInterface;
    Camera: new (
      videoElement: HTMLVideoElement,
      config: { onFrame: () => Promise<void>; width: number; height: number }
    ) => CameraInterface;
    CameraUtils?: any;
  }
}