import {
  Background,
  Badge,
  Button,
  Column,
  Icon,
  IconButton,
  Input,
  RevealFx,
  Row,
  Spinner,
  Text,
  TiltFx,
} from "@once-ui-system/core";
import { CharacterDetailSlider } from "./CharacterDetailSlider";
import { HeartbeatCounter } from "./HeartbeatCounter";
import { TypewriterText } from "./TypewriterText";
import type { CharacterProfile, StoryBeat } from "./types";

interface StoryScreenProps {
  beat: StoryBeat;
  characters: CharacterProfile[];
  heartbeat: number;
  haoCam: number;
  customAction: string;
  isProcessing: boolean;
  isStoryTrolled: boolean;
  chapterAnimationKey: string;
  isAffectionPanelOpen: boolean;
  onToggleAffectionPanel: () => void;
  onSelectChoice: (choiceId: string) => void;
  onCustomActionChange: (value: string) => void;
  onSubmitCustomAction: () => void;
}

export function StoryScreen({
  beat,
  characters,
  heartbeat,
  haoCam,
  customAction,
  isProcessing,
  isStoryTrolled,
  chapterAnimationKey,
  isAffectionPanelOpen,
  onToggleAffectionPanel,
  onSelectChoice,
  onCustomActionChange,
  onSubmitCustomAction,
}: StoryScreenProps) {
  return (
    <Column fillWidth gap="20">
      <Row fillWidth horizontal="between" vertical="center" gap="12" wrap>
        <Row gap="8" vertical="center">
          <Badge
            icon="sparkles"
            border="brand-alpha-medium"
            background="brand-alpha-weak"
            onBackground="brand-strong"
            paddingX="12"
            paddingY="8"
            gap="8"
          >
            <Text variant="label-strong-m">Chương {beat.chapter}</Text>
            <Text variant="label-default-s" onBackground="neutral-weak">
              {beat.title}
            </Text>
          </Badge>
        </Row>

        <Row gap="8" vertical="center">
          <HeartbeatCounter value={heartbeat} />
          <Badge
            icon="thunder"
            border="accent-alpha-medium"
            background="accent-alpha-weak"
            onBackground="accent-strong"
            paddingX="12"
            paddingY="8"
          >
            <Text variant="label-strong-m">Năng lượng: {haoCam}</Text>
          </Badge>
          <IconButton
            icon="user"
            tooltip="Mở quan hệ nhân vật"
            variant="secondary"
            onClick={onToggleAffectionPanel}
          />
        </Row>
      </Row>

      <Row fillWidth gap="16" s={{ direction: "column" }}>
        <Column
          flex={8}
          fillWidth
          position="relative"
          overflow="hidden"
          border="neutral-alpha-medium"
          background="surface"
          radius="l"
          padding="20"
          gap="20"
          style={{
            opacity: isProcessing ? 0.75 : 1,
            transition: "opacity 260ms ease",
            minHeight: "20rem",
          }}
        >
          <Background
            fill
            style={{ pointerEvents: "none", position: "absolute", top: 0, left: 0 }}
            gradient={{
              display: true,
              opacity: 40,
              x: 100,
              y: 0,
              width: 80,
              height: 80,
              colorStart: "accent-background-strong",
              colorEnd: "static-transparent",
            }}
          />

          {isStoryTrolled ? (
            <RevealFx delay={0} speed="fast" style={{ marginTop: "auto" }}>
              <Column
                fillWidth
                border="warning-alpha-medium"
                background="warning-alpha-weak"
                radius="m"
                padding="20"
                gap="12"
                shadow="s"
              >
                <Row gap="8" vertical="center">
                  <Icon name="sparkles" size="s" onBackground="warning-strong" />
                  <Text variant="heading-strong-s">Tạm dừng viết romcom đi bro.</Text>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Đi ra ngoài, chạm cỏ, hít thở không khí thật và thử tìm người yêu ngoài đời trước
                  đã.
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Thay vì ngồi đây tối ưu prompt để nhân vật ảo rung động hộ mình, bạn có thể bắt
                  đầu từ những việc đơn giản hơn nhiều: ngủ đúng giờ để mặt đỡ như zombie, tập thể
                  dục nhẹ để tự tin hơn, chọn quần áo gọn gàng, học cách lắng nghe khi nói chuyện,
                  hỏi han người ta bằng sự tò mò thật lòng chứ không phải checklist, và dám rủ một
                  buổi cà phê ngắn thay vì chờ "đúng thời điểm". Tình cảm ngoài đời không có thanh
                  năng lượng hay lựa chọn preset, nhưng bù lại mỗi cuộc trò chuyện thật đều cho bạn
                  điểm kinh nghiệm mà không game nào thay được. Nên đóng tab này lại, nhắn một tin
                  tử tế cho người bạn thích, rồi đi sống một chương truyện thật của chính mình.
                </Text>
              </Column>
            </RevealFx>
          ) : (
            <>
              <RevealFx delay={0} speed="fast">
                <Column
                  fillWidth
                  border="brand-alpha-medium"
                  background="brand-alpha-weak"
                  radius="m"
                  padding="16"
                  gap="12"
                  transition="micro-medium"
                  shadow="s"
                  style={{
                    transform: isProcessing ? "translateY(0.25rem)" : "translateY(0)",
                    transition: "transform 220ms ease",
                  }}
                >
                  <Row gap="8" vertical="center">
                    <Icon name="chatBubble" size="s" onBackground="brand-strong" />
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      Người dẫn truyện
                    </Text>
                  </Row>
                  {isProcessing ? (
                    <Row gap="8" vertical="center">
                      <Spinner size="s" ariaLabel="Đang xử lý lựa chọn" />
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        AI đang cập nhật diễn biến...
                      </Text>
                    </Row>
                  ) : (
                    <TypewriterText text={beat.narrator} animationKey={chapterAnimationKey} />
                  )}
                </Column>
              </RevealFx>

              <RevealFx delay={0.06} speed="fast" style={{ marginTop: "auto" }}>
                <TiltFx intensity={2}>
                  <Column
                    fillWidth
                    border="neutral-alpha-medium"
                    background="neutral-alpha-weak"
                    radius="m"
                    padding="16"
                    gap="12"
                    transition="micro-medium"
                    shadow="s"
                  >
                    <Row gap="8" vertical="center">
                      <Icon name="cursorArrowRays" size="s" onBackground="neutral-strong" />
                      <Text variant="label-default-s" onBackground="neutral-weak">
                        Lựa chọn nhanh
                      </Text>
                    </Row>
                    <Row fillWidth gap="8" s={{ direction: "column" }}>
                      {beat.choices.map((choice) => (
                        <Button
                          key={choice.id}
                          variant="secondary"
                          size="m"
                          fillWidth
                          prefixIcon="sparkles"
                          disabled={isProcessing || heartbeat <= 0}
                          onClick={() => onSelectChoice(choice.id)}
                        >
                          {choice.label}
                        </Button>
                      ))}
                    </Row>
                  </Column>
                </TiltFx>
              </RevealFx>

              <RevealFx delay={0.12} speed="fast">
                <Column
                  fillWidth
                  border="accent-alpha-medium"
                  background="accent-alpha-weak"
                  radius="m"
                  padding="16"
                  gap="12"
                  transition="micro-medium"
                  shadow="s"
                >
                  <Row gap="8" vertical="center">
                    <Icon name="rocket" size="s" onBackground="accent-strong" />
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      Tự nhập hành động
                    </Text>
                  </Row>
                  <Row fillWidth gap="8" s={{ direction: "column" }}>
                    <Input
                      id="custom-action"
                      placeholder="Ví dụ: Rủ An Nhiên đi ngắm mưa sao băng"
                      value={customAction}
                      onChange={(event) => onCustomActionChange(event.target.value)}
                      disabled={isProcessing || heartbeat <= 0}
                      style={{ flex: 1 }}
                    />
                    <Button
                      variant="primary"
                      size="m"
                      prefixIcon="rocket"
                      disabled={isProcessing || heartbeat <= 0 || customAction.trim().length === 0}
                      onClick={onSubmitCustomAction}
                    >
                      Gửi
                    </Button>
                  </Row>
                </Column>
              </RevealFx>
            </>
          )}
        </Column>

        <Column
          flex={4}
          fillWidth
          gap="16"
          position="sticky"
          top="16"
          s={{ hide: !isAffectionPanelOpen }}
          border="neutral-alpha-medium"
          background="surface"
          radius="l"
          padding="16"
          transition="micro-medium"
          style={{ maxHeight: "calc(100dvh - 8rem)", overflowY: "auto" }}
        >
          <RevealFx delay={0.05} speed="fast" trigger={isAffectionPanelOpen}>
            <Column fillWidth gap="16">
              <Text variant="heading-strong-s">Quan hệ nhân vật</Text>

              <CharacterDetailSlider characters={characters} />
            </Column>
          </RevealFx>
        </Column>
      </Row>
    </Column>
  );
}
