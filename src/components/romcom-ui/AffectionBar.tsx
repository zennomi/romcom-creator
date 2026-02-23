import { type Colors, Column, Icon, Row, Text } from "@once-ui-system/core";

interface AffectionBarProps {
  label: string;
  value: number;
}

const clamp = (value: number) => Math.max(0, Math.min(100, value));

type ToneConfig = {
  name: string;
  icon: "faceFrown" | "faceSmile" | "heart";
  fill: Colors;
  badgeBorder: Colors;
  badgeBackground: Colors;
  badgeOnBackground: Colors;
};

function getTone(level: number): ToneConfig {
  if (level < 34) {
    return {
      name: "Căng thẳng",
      icon: "faceFrown",
      fill: "danger-medium",
      badgeBorder: "danger-alpha-medium",
      badgeBackground: "danger-alpha-weak",
      badgeOnBackground: "danger-strong",
    };
  }
  if (level < 67) {
    return {
      name: "Trung lập",
      icon: "faceSmile",
      fill: "info-medium",
      badgeBorder: "info-alpha-medium",
      badgeBackground: "info-alpha-weak",
      badgeOnBackground: "info-strong",
    };
  }
  return {
    name: "Rung động",
    icon: "heart",
    fill: "accent-medium",
    badgeBorder: "accent-alpha-medium",
    badgeBackground: "accent-alpha-weak",
    badgeOnBackground: "accent-strong",
  };
}

export function AffectionBar({ label, value }: AffectionBarProps) {
  const level = clamp(value);
  const tone = getTone(level);

  return (
    <Column fillWidth gap="8">
      <Row fillWidth vertical="center" gap="8">
        <Row gap={6} vertical="center">
          <Icon
            name={tone.icon}
            size="s"
            onBackground={
              tone.badgeOnBackground as "danger-strong" | "info-strong" | "accent-strong"
            }
          />
        </Row>
        <Row fillWidth horizontal="center" style={{ flex: 1, minWidth: 0 }}>
          <Text variant="label-strong-m">{label}</Text>
        </Row>
        <Text variant="label-default-m" onBackground="neutral-weak">
          {level}%
        </Text>
      </Row>
      <Column
        fillWidth
        border="neutral-alpha-medium"
        background="neutral-alpha-weak"
        radius="full"
        overflow="hidden"
        style={{ height: "0.6rem" }}
      >
        <Column
          radius="full"
          background={tone.fill}
          style={{
            width: `${level}%`,
            transition: "width 260ms ease",
            height: "100%",
          }}
        />
      </Column>

      <Row
        border={tone.badgeBorder}
        background={tone.badgeBackground}
        onBackground={tone.badgeOnBackground}
        radius="full"
        paddingX="8"
        paddingY="4"
        gap={6}
        vertical="center"
      >
        <Icon
          name={tone.icon}
          size="xs"
          onBackground={tone.badgeOnBackground as "danger-strong" | "info-strong" | "accent-strong"}
        />
        <Text variant="label-default-xs">{tone.name}</Text>
      </Row>
    </Column>
  );
}
