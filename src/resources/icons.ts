import type { IconType } from "react-icons";

import {
  HiOutlineAcademicCap,
  HiOutlineArrowLeft,
  HiOutlineBookOpen,
  HiOutlineBuildingOffice2,
  HiOutlineChatBubbleLeftRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineCursorArrowRays,
  HiOutlineFaceFrown,
  HiOutlineFaceSmile,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineBolt,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
  HiOutlineUser,
  HiOutlineMoon,
} from "react-icons/hi2";

export const iconLibrary: Record<string, IconType> = {
  heart: HiOutlineHeart,
  rocket: HiOutlineRocketLaunch,
  user: HiOutlineUser,
  academicCap: HiOutlineAcademicCap,
  building: HiOutlineBuildingOffice2,
  sparkles: HiOutlineSparkles,
  thunder: HiOutlineBolt,
  globe: HiOutlineGlobeAlt,
  arrowLeft: HiOutlineArrowLeft,
  chatBubble: HiOutlineChatBubbleLeftRight,
  cursorArrowRays: HiOutlineCursorArrowRays,
  bookOpen: HiOutlineBookOpen,
  chevronLeft: HiOutlineChevronLeft,
  chevronRight: HiOutlineChevronRight,
  faceFrown: HiOutlineFaceFrown,
  faceSmile: HiOutlineFaceSmile,
  moon: HiOutlineMoon,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
