import {
  Image,
  Video,
  WandSparkles,
  DraftingCompass,
  Folder,
  Headset,
  MicVocal,
  PersonStanding,
  LucideProps,
  PencilLine,
} from "lucide-react";

interface FeatureItem {
  id: string;
  icon: React.ComponentType<LucideProps>;
  desc: string;
  new: string;
  className: string;
}

export const HeroImageBackground = [
  {
    name: "WAN 2.2 Image Generation",
    shortName: "WAN 2.2",
    desc: "Create dynamically updated images with instant AI generation as you type. This interactive process enables users to see the image evolve",
    imgsrc: "/images/image-gen.jpg",
  },
  {
    name: "FLUX.1 Krea",
    shortName: "Open Source",
    desc: "Upscale and enhance images and videos up to 22K resolution. Improve and upscale images using AI up to 8x the original size, enhancing clarity and detail with just a few clicks.",
    imgsrc: "/images/image-enhance.jpg",
  },
  {
    name: "Video Generationn",
    shortName: "Video",
    desc: "Generate high-quality videos using AI with text prompts and keyframes for precise control over visuals. Create engaging videos from images or text prompts, customize duration, animations, and keyframes.",
    imgsrc: "/images/video-gen.jpg",
  },
  {
    name: "Motion Transfer",
    shortName: "Motion",
    desc: "Transfer motion to images and animate characters, bringing static images to life with dynamic movement and animation effects.",
    imgsrc: "/images/motion-transfer.jpg",
  },
  {
    name: "3D Object Generation",
    shortName: "3D Object",
    desc: "Generate 3D objects from text or images in seconds, creating three-dimensional models quickly and efficiently from simple inputs",
    imgsrc: "/images/3d-object.jpg",
  },
  {
    name: "Video Lip Sync",
    shortName: "Video Sync",
    desc: "Lip sync any video to any audio, allowing you to match mouth movements perfectly to different audio tracks for seamless video editing",
    imgsrc: "/images/video-lip-sync.jpg",
  },
  {
    name: "AI Image Editing",
    shortName: "AI Image",
    desc: "Add objects, change style, or expand photos and generations. Advanced editing capabilities that let you modify existing images with AI-powered tools",
    imgsrc: "/images/ai-image-editing.jpg",
  },
  {
    name: "Logo & Pattern Creation",
    shortName: "Logo Creation",
    desc: "Create logos and AI patterns with specialized mini apps for specific design needs. The platform includes handy tools for logos, patterns, and more specialized design requirements.",
    imgsrc: "/images/logo-creation.jpg",
  },
];

export const featureData: FeatureItem[] = [
  {
    id: "Image",
    icon: Image,
    desc: "Generate images with custom styles in flux and ideogram",
    new: "New",
    className: "bg-gradient-to-b from-gray-300 to-gray-200",
  },
  {
    id: "Video",
    icon: Video,
    desc: "Generate videos with Haliub, Pica, Runway, Luma and more.",
    new: "",
    className: "bg-yellow-300",
  },
  {
    id: "Realtime",
    icon: PencilLine,
    desc: "Realtime AI rendering on a canvas. Instant feedback loops.",
    new: "New",
    className: "bg-gradient-to-b from-blue-700 to-gray-600",
  },
  {
    id: "Enhancer",
    icon: WandSparkles,
    desc: "Upscale and enhance images and videos up to 22K.",
    new: "New",
    className: "bg-gradient-to-b from-black to-gray-800",
  },
  {
    id: "Edit",
    icon: DraftingCompass,
    desc: "Add objects,change style or expand photos and generations",
    new: "New",
    className: "bg-gradient-to-b from-purple-600 to-gray-400",
  },
  {
    id: "Video Lipsync",
    icon: MicVocal,
    desc: "Lip sync any video to any audio.",
    new: "New",
    className: "bg-gradient-to-b from-green-900 via-green-500 to-green-200",
  },
  {
    id: "Motion Transfer",
    icon: PersonStanding,
    desc: "Transfer motion to images and animate characters",
    new: "New",
    className: "bg-black",
  },
  {
    id: "Train",
    icon: Image,
    desc: "Teach krea to replicate your style, products or characters.",
    new: "",
    className: "",
  },
];
