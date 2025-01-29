"use client";
import React from "react";
import dynamic from "next/dynamic";

const IonIcon = dynamic(
  () => import("@ionic/react").then((mod) => mod.IonIcon),
  {
    ssr: false,
  },
);

import {
  calendarOutline,
  callOutline,
  locationOutline,
  mailOutline,
  bookOutline,
  eyeOutline,
  eyeOffOutline,
  phonePortraitOutline,
  barChartOutline,
  codeOutline,
  colorPaletteOutline,
  chevronDownOutline,
  chevronUpOutline,
  logoLinkedin,
  logoGithub,
} from "ionicons/icons";

export const Icons = {
  EmailIcon: (props: { className?: string }) => (
    <IonIcon icon={mailOutline} {...props} />
  ),
  PhoneIcon: (props: { className?: string }) => (
    <IonIcon icon={callOutline} {...props} />
  ),
  BirthdayIcon: (props: { className?: string }) => (
    <IonIcon icon={calendarOutline} {...props} />
  ),
  LocationIcon: (props: { className?: string }) => (
    <IonIcon icon={locationOutline} {...props} />
  ),
  Bookoutline: (props: { className?: string }) => (
    <IonIcon icon={bookOutline} {...props} />
  ),
  Eyeoutline: (props: { className?: string }) => (
    <IonIcon icon={eyeOutline} {...props} />
  ),
  EyeOffOutline: (props: { className?: string }) => (
    <IonIcon icon={eyeOffOutline} {...props} />
  ),
  PhonePortraitOutline: (props: { className?: string }) => (
    <IonIcon icon={phonePortraitOutline} {...props} />
  ),
  BarChartOutline: (props: { className?: string }) => (
    <IonIcon icon={barChartOutline} {...props} />
  ),
  Codeoutline: (props: { className?: string }) => (
    <IonIcon icon={codeOutline} {...props} />
  ),
  ColorPaletteOutline: (props: { className?: string }) => (
    <IonIcon icon={colorPaletteOutline} {...props} />
  ),
  ChevronDownOutline: (props: { className?: string }) => (
    <IonIcon icon={chevronDownOutline} {...props} />
  ),
  ChevronUpOutline: (props: { className?: string }) => (
    <IonIcon icon={chevronUpOutline} {...props} />
  ),
  LogoLinkedin: (props: { className?: string }) => (
    <IonIcon icon={logoLinkedin} {...props} />
  ),
  LogoGithub: (props: { className?: string }) => (
    <IonIcon icon={logoGithub} {...props} />
  ),
};
