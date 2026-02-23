"use client";

import { useEffect, useMemo, useState } from "react";
import { Column } from "@once-ui-system/core";
import {
  CreationScreen,
  creationSteps,
  initialCharacters,
  initialCreationForm,
  initialHaoCam,
  initialHeartbeat,
  LandingScreen,
  type Screen,
  type StoryBeat,
  type StoryChoice,
  StoryScreen,
  storyBeats,
  templateOptions,
  TrollScreen,
} from "@/components/romcom-ui";

const clampAffection = (value: number) => Math.max(0, Math.min(100, value));

const TROLL_SCREEN_ENABLED =
  process.env.NEXT_PUBLIC_TROLL_SCREEN_ENABLED === "true";

const getCurrentBeat = (index: number): StoryBeat => {
  const safeIndex = Math.max(0, Math.min(index, storyBeats.length - 1));
  return storyBeats[safeIndex];
};

export default function Home() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [creationStep, setCreationStep] = useState(0);
  const [creationForm, setCreationForm] = useState(initialCreationForm);

  const [heartbeat, setHeartbeat] = useState(initialHeartbeat);
  const [haoCam, setHaoCam] = useState(initialHaoCam);

  const [characters, setCharacters] = useState(initialCharacters);

  const [storyIndex, setStoryIndex] = useState(0);
  const [customAction, setCustomAction] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAffectionPanelOpen, setIsAffectionPanelOpen] = useState(false);

  const beat = useMemo(() => getCurrentBeat(storyIndex), [storyIndex]);

  const chapterAnimationKey = `${beat.id}-${storyIndex}`;

  useEffect(() => {
    if (screen !== "story" || !TROLL_SCREEN_ENABLED) {
      return;
    }

    const timer = window.setTimeout(() => {
      setScreen("troll");
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [screen]);

  const resetStoryState = () => {
    setHeartbeat(initialHeartbeat);
    setHaoCam(initialHaoCam);
    setCharacters(initialCharacters);
    setStoryIndex(0);
    setCustomAction("");
    setIsProcessing(false);
    setIsAffectionPanelOpen(false);
  };

  const goToCreation = () => {
    setCreationStep(0);
    setScreen("creation");
  };

  const applyChoice = (choice: StoryChoice) => {
    if (isProcessing || heartbeat <= 0) {
      return;
    }

    setHeartbeat((prev) => Math.max(0, prev - choice.heartbeatCost));
    setIsProcessing(true);

    window.setTimeout(() => {
      setCharacters((prev) =>
        prev.map((character) => {
          const delta = choice.affectionDelta[character.id] ?? 0;
          return {
            ...character,
            affection: clampAffection(character.affection + delta),
          };
        }),
      );

      setHaoCam((prev) => Math.max(0, prev + choice.haoCamDelta));

      setStoryIndex((prev) => {
        const next = prev + 1;
        return next >= storyBeats.length ? 0 : next;
      });

      setCustomAction("");
      setIsProcessing(false);
    }, 1050);
  };

  const handlePresetChoice = (choiceId: string) => {
    const choice = beat.choices.find((item) => item.id === choiceId);
    if (!choice) {
      return;
    }

    applyChoice(choice);
  };

  const handleSubmitCustomAction = () => {
    if (customAction.trim().length === 0 || isProcessing || heartbeat <= 0) {
      return;
    }

    const customChoice: StoryChoice = {
      id: `custom-${beat.id}`,
      label: customAction,
      heartbeatCost: 1,
      haoCamDelta: 4,
      affectionDelta: {
        "an-nhien": 2,
        "minh-thu": 2,
        "khanh-linh": 2,
      },
    };

    applyChoice(customChoice);
  };

  const handleSelectTemplate = (templateId: string) => {
    const picked = templateOptions.find((template) => template.id === templateId);
    if (!picked) {
      goToCreation();
      return;
    }

    setCreationForm((prev) => ({
      ...prev,
      worldDescription: picked.quickPrompt,
    }));
    goToCreation();
  };

  return (
    <Column
      fillWidth
      center
      style={{
        minHeight: "100dvh",
        paddingLeft: "clamp(1rem, 4vw, 2.5rem)",
        paddingRight: "clamp(1rem, 4vw, 2.5rem)",
        paddingTop: "clamp(1.25rem, 4vw, 2rem)",
        paddingBottom: "clamp(1.25rem, 4vw, 2rem)",
      }}
    >
      <Column
        fillWidth
        maxWidth="xl"
        border="neutral-alpha-medium"
        background="surface"
        radius="xl"
        shadow="l"
        style={{
          padding: "clamp(1.25rem, 4vw, 2rem)",
          gap: "clamp(1.25rem, 4vw, 2rem)",
          borderRadius: "clamp(1rem, 3.2vw, 1.5rem)",
        }}
      >
        {screen === "landing" && (
          <LandingScreen
            haoCam={haoCam}
            templates={templateOptions}
            onQuickStart={goToCreation}
            onSelectTemplate={handleSelectTemplate}
          />
        )}

        {screen === "creation" && (
          <CreationScreen
            steps={creationSteps}
            currentStep={creationStep}
            form={creationForm}
            onChangeForm={(field, value) =>
              setCreationForm((prev) => ({
                ...prev,
                [field]: value,
              }))
            }
            onBack={() => {
              if (creationStep > 0) {
                setCreationStep((prev) => prev - 1);
                return;
              }

              setScreen("landing");
            }}
            onNextStep={() =>
              setCreationStep((prev) => Math.min(prev + 1, creationSteps.length - 1))
            }
            onSubmit={() => {
              resetStoryState();
              setScreen("story");
            }}
          />
        )}

        {screen === "story" && (
          <StoryScreen
            beat={beat}
            characters={characters}
            heartbeat={heartbeat}
            haoCam={haoCam}
            customAction={customAction}
            isProcessing={isProcessing}
            chapterAnimationKey={chapterAnimationKey}
            isAffectionPanelOpen={isAffectionPanelOpen}
            onToggleAffectionPanel={() => setIsAffectionPanelOpen((prev) => !prev)}
            onSelectChoice={handlePresetChoice}
            onCustomActionChange={setCustomAction}
            onSubmitCustomAction={handleSubmitCustomAction}
          />
        )}

        {screen === "troll" && (
          <TrollScreen
            onExit={() => {
              resetStoryState();
              setScreen("landing");
            }}
          />
        )}
      </Column>
      {/* Corner glow - brand accent top-right */}
      <Column
        position="absolute"
        style={{
          top: 0,
          right: 0,
          width: "clamp(28%, 35vw, 40%)",
          height: "clamp(32%, 42vw, 50%)",
          background:
            "radial-gradient(ellipse at top right, var(--once-brand-alpha-weak, rgba(99 102 241 / 0.15)) 0%, transparent 70%)",
          pointerEvents: "none",
          opacity: "clamp(0.5, 2vw, 0.9)",
        }}
      />
      {/* Corner glow - accent bottom-left */}
      <Column
        position="absolute"
        style={{
          bottom: 0,
          left: 0,
          width: "clamp(24%, 31vw, 35%)",
          height: "clamp(30%, 39vw, 45%)",
          background:
            "radial-gradient(ellipse at bottom left, var(--once-accent-alpha-weak, rgba(236 72 153 / 0.12)) 0%, transparent 70%)",
          pointerEvents: "none",
          opacity: "clamp(0.45, 2vw, 0.85)",
        }}
      />
    </Column>
  );
}
