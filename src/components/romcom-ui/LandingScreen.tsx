import {
  Badge,
  Button,
  Card,
  Column,
  GlitchFx,
  Grid,
  Heading,
  Icon,
  Media,
  RevealFx,
  Row,
  Text,
  TiltFx,
} from "@once-ui-system/core";
import type { TemplateOption } from "./types";
import titleImage from "../../assets/title.png";

const TEMPLATE_ICONS: Record<string, "academicCap" | "sparkles" | "building" | "moon"> = {
  "hoc-duong-thanh-xuan": "academicCap",
  "isekai-romcom": "sparkles",
  "drama-cong-so": "building",
  "dark-romcom": "moon",
};

interface LandingScreenProps {
  haoCam: number;
  templates: TemplateOption[];
  onQuickStart: () => void;
  onSelectTemplate: (templateId: string) => void;
}

export function LandingScreen({
  haoCam,
  templates,
  onQuickStart,
  onSelectTemplate,
}: LandingScreenProps) {
  return (
    <Column fillWidth gap="32">
      <Row fillWidth horizontal="between" vertical="center" gap="12" wrap>
        <Badge
          icon="sparkles"
          border="brand-alpha-medium"
          background="brand-alpha-weak"
          onBackground="brand-strong"
          paddingX="12"
          paddingY="8"
        >
          <Text variant="label-default-s">Gemini 3.0 Pro</Text>
        </Badge>

        <Badge
          icon="thunder"
          border="accent-alpha-medium"
          background="accent-alpha-weak"
          onBackground="accent-strong"
          paddingX="12"
          paddingY="8"
        >
          <Text variant="label-strong-s">Năng lượng: {haoCam}</Text>
        </Badge>
      </Row>

      <GlitchFx fillWidth speed="medium">
        <Column gap="12" fillWidth horizontal="center" marginTop={-5}>
          <Row fillWidth center>
            <Media
              src={titleImage.src}
              alt="Chuyện tình thanh xuân bi hài của tôi quả nhiên là AI làm"
              maxWidth={30}
            />
          </Row>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Chọn mẫu hoặc bắt đầu nhanh để trải nghiệm luồng visual novel tương tác.
          </Text>
        </Column>
      </GlitchFx>

      <Row
        fillWidth
        border="neutral-alpha-medium"
        background="neutral-alpha-weak"
        radius="l"
        padding="20"
        gap="20"
        vertical="center"
        horizontal="between"
        s={{ direction: "column" }}
        transition="micro-medium"
        shadow="s"
      >
        <Row gap="16" vertical="center">
          <Column background="brand-alpha-weak" border="brand-alpha-medium" radius="m" padding="12">
            <Icon name="rocket" size="l" onBackground="brand-strong" />
          </Column>
          <Column gap="4">
            <Text variant="heading-strong-s">Bắt đầu nhanh</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Vào ngay màn tạo truyện với dữ liệu mẫu để thử nhịp chơi.
            </Text>
          </Column>
        </Row>

        <Button variant="primary" size="m" prefixIcon="rocket" onClick={onQuickStart}>
          Bắt đầu nhanh
        </Button>
      </Row>

      <Column gap="16">
        <Column gap="8">
          <Heading variant="heading-strong-m">Chọn mẫu kịch bản</Heading>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Chọn một mẫu để điền sẵn bối cảnh mở đầu.
          </Text>
        </Column>

        <Grid columns={1} m={{ columns: 2 }} l={{ columns: 2 }} gap="16" fillWidth>
          {templates.map((template, index) => {
            const cardBg =
              index % 3 === 0
                ? "neutral-alpha-weak"
                : index % 3 === 1
                  ? "brand-alpha-weak"
                  : "accent-alpha-weak";
            const cardBorder =
              index % 3 === 0
                ? "neutral-alpha-medium"
                : index % 3 === 1
                  ? "brand-alpha-medium"
                  : "accent-alpha-medium";
            const iconName = TEMPLATE_ICONS[template.id] ?? "sparkles";

            return (
              <RevealFx key={template.id} delay={index * 0.08} speed="fast">
                <TiltFx intensity={4}>
                  <Card
                    border={cardBorder}
                    background={cardBg}
                    radius="l"
                    padding="16"
                    gap="16"
                    fillHeight
                    onClick={() => onSelectTemplate(template.id)}
                    transition="micro-medium"
                    shadow="s"
                  >
                    <Column gap="12" fillWidth flex="1" style={{ minHeight: 0 }}>
                      <Row gap="12" vertical="center">
                        <Column background="surface" border={cardBorder} radius="m" padding="12">
                          <Icon name={iconName} size="m" onBackground="neutral-strong" />
                        </Column>
                        <Column gap="4">
                          <Text variant="label-strong-m">{template.title}</Text>
                          <Text variant="label-default-s" onBackground="neutral-weak">
                            {template.subtitle}
                          </Text>
                        </Column>
                      </Row>

                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {template.summary}
                      </Text>
                    </Column>
                  </Card>
                </TiltFx>
              </RevealFx>
            );
          })}
        </Grid>
      </Column>
    </Column>
  );
}
