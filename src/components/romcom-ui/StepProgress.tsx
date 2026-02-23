import { Badge, Column, Icon, ProgressBar, RevealFx, Row, Text } from "@once-ui-system/core";

interface StepProgressProps {
  steps: readonly string[];
  currentStep: number;
}

const STEP_ICONS = ["globe", "user", "heart", "sparkles", "rocket", "chatBubble"] as const;

const STEP_STATUS_COPY = {
  active: "Đang làm",
  complete: "Hoàn tất",
  upcoming: "Sắp tới",
} as const;

type StepStatus = keyof typeof STEP_STATUS_COPY;

const getStepStatus = (index: number, safeIndex: number): StepStatus => {
  if (index === safeIndex) return "active";
  if (index < safeIndex) return "complete";
  return "upcoming";
};

export function StepProgress({ steps, currentStep }: StepProgressProps) {
  const maxIndex = Math.max(steps.length - 1, 0);
  const safeIndex = Math.max(0, Math.min(currentStep, maxIndex));
  const stepCount = Math.max(steps.length, 1);
  const progress = ((safeIndex + 1) / stepCount) * 100;

  const stepOccurrences = new Map<string, number>();
  const stepEntries = steps.map((step) => {
    const occurrence = (stepOccurrences.get(step) ?? 0) + 1;
    stepOccurrences.set(step, occurrence);
    return { step, key: `${step}-${occurrence}` };
  });

  return (
    <Column fillWidth gap="12">
      <Row
        fillWidth
        horizontal="between"
        vertical="center"
        gap="8"
        wrap
        s={{ direction: "column", horizontal: "start", vertical: "start" }}
      >
        <Row gap="8" vertical="center">
          <Icon name="sparkles" size="s" onBackground="brand-strong" />
          <Text variant="label-default-s" onBackground="neutral-weak">
            Tiến trình tạo truyện
          </Text>
        </Row>

        <Badge
          icon="thunder"
          border="accent-alpha-medium"
          background="accent-alpha-weak"
          onBackground="accent-strong"
          paddingX="12"
          paddingY="8"
        >
          <Text variant="label-strong-s">
            Bước {safeIndex + 1}/{stepCount}
          </Text>
        </Badge>
      </Row>

      <Row fillWidth gap="8" s={{ direction: "column" }}>
        {stepEntries.map(({ step, key }, index) => {
          const status = getStepStatus(index, safeIndex);
          const isActive = status === "active";
          const isComplete = status === "complete";

          const borderTone = isActive
            ? "brand-alpha-medium"
            : isComplete
              ? "accent-alpha-medium"
              : "neutral-alpha-medium";
          const surfaceTone = isActive
            ? "brand-alpha-weak"
            : isComplete
              ? "accent-alpha-weak"
              : "neutral-alpha-weak";
          const titleTone = isActive
            ? "brand-strong"
            : isComplete
              ? "accent-strong"
              : "neutral-weak";
          const iconTone = isActive
            ? "brand-strong"
            : isComplete
              ? "accent-strong"
              : "neutral-strong";
          const statusIcon = isActive ? "sparkles" : isComplete ? "rocket" : "cursorArrowRays";
          const stepIcon = STEP_ICONS[index % STEP_ICONS.length];

          return (
            <RevealFx key={key} delay={index * 0.04} speed="fast">
              <Column
                fillWidth
                overflow="hidden"
                border={borderTone}
                background={surfaceTone}
                radius="m"
                padding="12"
                gap="12"
                style={{
                  flex: 1,
                  opacity: isActive || isComplete ? 1 : 0.82,
                  transform: isActive ? "translateY(-0.15rem)" : "translateY(0)",
                  transition: "transform 260ms ease, opacity 220ms ease",
                }}
              >
                <Column
                  position="absolute"
                  radius="xl"
                  background={
                    isActive
                      ? "brand-alpha-medium"
                      : isComplete
                        ? "accent-alpha-medium"
                        : "neutral-alpha-medium"
                  }
                  style={{
                    top: "-1.25rem",
                    right: "-1.25rem",
                    width: "6rem",
                    height: "6rem",
                    filter: "blur(24px)",
                    opacity: isActive ? 0.65 : isComplete ? 0.45 : 0.2,
                    pointerEvents: "none",
                    transform: isActive ? "scale(1.12)" : "scale(1)",
                    transition: "all 280ms ease",
                  }}
                />

                <Column gap="12" style={{ position: "relative", zIndex: 1 }}>
                  <Row fillWidth horizontal="between" vertical="center" gap="8">
                    <Row gap="8" vertical="center">
                      <Column background="surface" border={borderTone} radius="s" padding="8">
                        <Icon name={stepIcon} size="s" onBackground={iconTone} />
                      </Column>
                      <Text
                        variant={isActive ? "label-strong-s" : "label-default-s"}
                        onBackground={titleTone}
                      >
                        Bước {index + 1}
                      </Text>
                    </Row>

                    <Badge
                      icon={statusIcon}
                      border={borderTone}
                      background={surfaceTone}
                      onBackground={titleTone}
                      paddingX="8"
                      paddingY="4"
                    >
                      <Text variant="label-default-xs">{STEP_STATUS_COPY[status]}</Text>
                    </Badge>
                  </Row>

                  <Text
                    variant="label-default-xs"
                    onBackground={isActive ? "neutral-strong" : "neutral-weak"}
                  >
                    {step}
                  </Text>
                </Column>
              </Column>
            </RevealFx>
          );
        })}
      </Row>

      <Row fillWidth horizontal="between" vertical="center" gap="8">
        <Text variant="label-default-xs" onBackground="neutral-weak">
          Hoàn thành
        </Text>
        <Badge
          icon="thunder"
          border="accent-alpha-medium"
          background="accent-alpha-weak"
          onBackground="accent-strong"
          paddingX="8"
          paddingY="4"
        >
          <Text variant="label-default-xs">{Math.round(progress)}%</Text>
        </Badge>
      </Row>

      <ProgressBar
        value={Math.round(progress)}
        min={0}
        max={100}
        barBackground={progress >= 100 ? "accent-medium" : "brand-medium"}
        fillWidth
        label={false}
      />
    </Column>
  );
}
