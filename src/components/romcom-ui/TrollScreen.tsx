import {
  Badge,
  Button,
  Column,
  Heading,
  Mask,
  MatrixFx,
  RevealFx,
  Row,
  Text,
} from "@once-ui-system/core";

interface TrollScreenProps {
  onExit: () => void;
}

const introParagraph =
  "Trước khi bàn sâu về cách tán tỉnh hay xây dựng sức hút, chúng ta cần thống nhất một góc nhìn nền tảng: tình cảm cũng vận hành như một trò chơi có quy luật, tâm lý và chiến lược riêng. Hiểu đúng về game không phải để giả tạo hay thao túng, mà để bạn giao tiếp tinh tế hơn, làm chủ cảm xúc tốt hơn và nâng cấp bản thân một cách có định hướng. Từ đây, hãy bắt đầu với phần sơ lược về trò chơi tình ái.";

const leftParagraphs = [
  "Chắc hẳn, bạn đã từng nghe qua về từ game, vậy game là gì và tại sao chúng ta phải học hỏi về game?",
  "Game dịch đơn giản là một trò chơi. Khi ta chơi điện tử thì gọi là game điện tử, khi ta bước vào lĩnh vực tài chính thì gọi là game tài chính, và bản chất khi chúng ta sinh ra, chúng ta phải chơi một cái game lớn nhất chính là game đời.",
  "Vì vậy, khi ta dùng từ game trong lĩnh vực tình cảm thì đơn giản ta đang đề cập đến chuyện tán tỉnh, hẹn hò.",
  "Tuy nhiên, game trong chuyện tình cảm nếu diễn giải sâu hơn thì nó chính là một trò chơi thiên về tâm lý giữa bạn và đối phương, dưới dạng một động từ chỉ cho việc dùng các chiến lược, chiến thuật, kĩ thuật để nhằm quyến rũ đối phương.",
  "Trong thuật ngữ hẹn hò thì GAME được định nghĩa là chuỗi hành động biến sự thu hút mà bạn có được từ người khác giới dành cho mình thành sự ham muốn cháy bỏng rồi họ đồng ý thực hiện theo những yêu cầu mà bạn đưa ra.",
  "Mục tiêu cuối cùng của GAME với tư cách người đàn ông là tình dục.",
  "Mục tiêu cuối cùng của GAME với phụ nữ là đạt được sự chu cấp từ nguồn lực của đàn ông (tiền bạc, thời gian, công sức, địa vị, sức ảnh hưởng, sự chăm sóc...).",
  "Vậy vì sao chúng ta phải học về GAME?",
  "Rất nhiều anh em có cái nhìn tiêu cực về việc học cách tán tỉnh, làm quen phụ nữ cũng vì chính định kiến xã hội đè nặng và kiềm chế chính tư tưởng của họ.",
  "Điều này cũng tương tự tâm lý của đại đa số mọi người như việc tìm hiểu kiến thức về quản lý & đầu tư tài chính hay chuyện sinh lý & đời sống tình dục vậy.",
  "Họ luôn cảm thấy ngại ngùng khi người xung quanh đánh giá về mình khi việc làm quen phụ nữ mà cũng phải đi tìm hiểu, bởi cảm nhận rằng chính mình đang yếu kém về việc đó cũng như nghĩ rằng tại sao không thể xem xét chuyện yêu đương đơn giản hơn.",
  "Như khi con người đối kháng nhau theo cách nguyên thủy nhất, chắc chắn gần như 100% kẻ to xác hơn là người chiến thắng.",
  "Nhưng khi bắt đầu xuất hiện các loại hình võ thuật trong việc đối kháng thì câu chuyện bắt đầu thay đổi - ta không thể nào dự đoán được kết quả cuối cùng.",
  "Võ thuật vốn dĩ không thay đổi gì về việc đối kháng cả mà ta chỉ đang tối ưu việc đó để gia tăng khả năng sinh tồn của bản thân lên mà thôi.",
  "Thay vì bung hết sức bay vào vật nhau tơi tả thì chúng ta sẽ tìm cách khai thác điểm yếu của đối phương, hạn chế đi những điểm yếu đồng thời tối ưu hóa những điểm mạnh của bản thân với hàng loạt chiến thuật và kĩ thuật từ tâm lý đến vật lý, cũng như cuối cùng nhận định cơ hội để ra đòn chí mạng và hạ đo ván đối phương.",
  "À nhưng khi ví dụ như thế thì không có nghĩa bạn có võ còn kẻ khác không thì bạn là người chắc chắn chiến thắng họ nhé.",
  "Nó chỉ tăng cho bạn khả năng nắm bắt cơ hội thắng một cách có chủ đích hơn thôi.",
  "Giống như trong các giải đấu tổ chức võ thuật MMA vậy.",
  "Cả hai bên phải gần hạng cân tương đương nhau thì lúc này chúng ta mới so kè kĩ hơn về các yếu tố chiến thuật và kĩ thuật. Chứ nếu bạn là một gã 1m6 nặng 60kg tuy có thành thạo võ thuật hơn một gã vai u thịt bắp cao 1m9 và nặng hơn 100kg dù không biết gì về võ cả thì hắn cũng đủ khả năng để lấy thịt đè người.",
  "Học về việc quyến rũ phụ nữ cũng như thế.",
  "Bản chất sự thu hút giữa cả hai cá thể với nhau vốn dĩ không có gì thay đổi. Chỉ là chúng ta tìm cách tối ưu khả năng tiếp cận những người phụ nữ phù hợp với chúng ta mà thôi.",
  "Vì vậy, hãy hiểu rằng việc học về tán tỉnh phụ nữ thực chất cũng chỉ là học về những kĩ năng mềm trong việc ứng xử, giao tiếp giữa người với người một cách có chiến lược hơn mà thôi.",
  "Nhưng cũng giống như bất kì trò chơi nào, trước khi đi vào chi tiết cụ thể, ta cần thống nhất với nhau một vài luật chơi.",
  "Đây là một số lưu ý quan trọng mà tôi gọi là tâm thế chơi game.",
  "Thứ bạn cần sở hữu xuyên suốt hành trình đọc, thực hành, nhận lời góp ý và rút kinh nghiệm rồi tiếp tục lặp lại quá trình này.",
  "Trên hành trình này, bạn phải giữ cho mình tâm thế là bạn đang chơi game để gặt hái trí tuệ, thay đổi tư duy và nâng cấp sự vững vàng của lập trường.",
  "Muốn hướng tới những điều trên thì bạn cần phải bắt tay vào việc thực hành liên tục với vô vàn biến số, các tình huống khác nhau từ nhiều đối tượng mà bạn tiếp cận làm quen.",
  "Có một mục tiêu, một kế hoạch cụ thể trong trò chơi là tốt nhưng quan trọng nhất vẫn là việc tận hưởng quá trình này.",
  "Cách chơi game hiệu quả nhất là khi ta tập trung vào trải nghiệm ngay lúc đang chơi chứ không phải là sự ảo vọng về đích đến khi trò chơi kết thúc.",
  "Phần thưởng ở đích đến nếu bạn quá kì vọng về nó thì nó sẽ trở nên vô nghĩa ngay cả khi bạn đạt được nó, vì điều đó chứng tỏ bạn chỉ ăn may nếu như bạn không thể phân tích được lí do vì sao bạn đạt được nó.",
  "Một lần nữa, đừng quan tâm thứ bạn sẽ đạt được ở phía cuối hành trình.",
  "Đích đến chỉ có tác dụng vẽ cho ta một lộ trình, việc cần để tâm là khám phá từng bước chân đi trên con đường đó.",
  "Suông sẻ là một quan điểm sai lầm trong tư duy mà nhiều người mắc phải khi kì vọng về việc thực hành một điều gì đấy.",
  "Sự không suông sẻ mới là điểm thú vị nhất của trò chơi bởi khi bạn thắng thì thứ bạn được chỉ là cảm giác mình giỏi, chứ bạn chẳng đạt được gì thật sự cả.",
  "Dĩ nhiên, cảm giác ấy vẫn cần thiết như một nguồn năng lượng tiếp thêm cho bạn thử sức mình thêm ở những cấp độ khó nhằn hơn của trò chơi.",
  "Chỉ khi bạn dám phạm sai lầm và mọi việc bất như ý thì khi đó, bạn mới thật sự đạt được thứ cốt lõi mà bạn cần phải có trong trò chơi: sự hiểu biết.",
  "Chúng ta rồi sẽ nhàm chán tất cả, ngoại trừ sự hiểu biết.",
  "Cũng vậy, để thực sự có thể tận hưởng game tình ái này thì điều bạn cần tập trung chính là việc bản thân mình cải thiện như thế nào trong xuyên suốt hành trình chứ không phải là tán đổ crush hay thành công lên giường được với phụ nữ hoặc có một mối quan hệ hẹn hò sau bao nhiêu năm chỉ làm tình với bàn tay phải.",
  "Bởi tôi biết là rất nhiều bạn tìm đến với ebook với mục đích giản đơn là có thể chinh phục người phụ nữ trong mộng mà bản thân đang cảm nắng.",
  "Tuy nhiên, rất đáng tiếc là tôi không thể đáp ứng được bạn điều đấy, ít nhất theo cách có chủ đích.",
  "Tôi chỉ có thể truyền tải cho bạn những kiến thức để bạn có một định hướng đúng và một chút động lực để bạn bắt tay vào hành động và trở thành người đàn ông hấp dẫn theo cách riêng của bạn, để đối tượng mà bạn đang thầm thương trộm nhớ cũng yêu thích con người mới của bạn và bạn sẽ không vì vụng về trong việc tán tỉnh mà làm hỏng nó.",
];

export function TrollScreen({ onExit }: TrollScreenProps) {
  return (
    <Column
      fillWidth
      position="relative"
      overflow="hidden"
      border="warning-alpha-medium"
      background="surface"
      radius="l"
      padding="24"
      gap="24"
      shadow="l"
      style={{
        minHeight: "clamp(18rem, 72vw, 28rem)",
        padding: "clamp(1rem, 3.6vw, 1.5rem)",
        gap: "clamp(1rem, 3.2vw, 1.5rem)",
      }}
    >
      <Column
        position="absolute"
        fill
        style={{
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at top left, var(--once-brand-alpha-weak) 0%, transparent 65%), radial-gradient(ellipse at bottom right, var(--once-accent-alpha-weak) 0%, transparent 68%)",
          filter: "blur(0.25rem)",
        }}
      />

      <Column
        position="absolute"
        style={{
          top: "-12%",
          right: "-8%",
          width: "70%",
          height: "78%",
          pointerEvents: "none",
          opacity: 0.8,
        }}
      >
        <Mask radius={44} x={65} y={20}>
          <MatrixFx
            size={1.3}
            spacing={4.8}
            fps={24}
            colors={["brand-solid-strong", "accent-solid-strong"]}
            flicker
          />
        </Mask>
      </Column>

      <Column
        position="absolute"
        style={{
          bottom: "-20%",
          left: "-10%",
          width: "62%",
          height: "72%",
          pointerEvents: "none",
          opacity: 0.7,
        }}
      >
        <Mask radius={50} x={28} y={75}>
          <MatrixFx size={1.1} spacing={6} fps={20} colors={["accent-solid-strong"]} flicker />
        </Mask>
      </Column>

      <RevealFx delay={0} speed="fast">
        <Row
          fillWidth
          gap="16"
          position="relative"
          style={{ zIndex: 2 }}
          s={{ direction: "column" }}
        >
          <Column flex={4} fillWidth gap="16">
            <Column
              fillWidth
              border="neutral-alpha-medium"
              background="neutral-alpha-weak"
              radius="m"
              padding="20"
              gap="12"
              shadow="s"
              style={{
                padding: "clamp(1rem, 3.4vw, 1.25rem)",
                gap: "clamp(0.625rem, 2.8vw, 0.75rem)",
              }}
            >
              <Heading variant="heading-strong-l">Chạm cỏ đi bạn ơi...</Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">
                Thủ dâm với cái cốt truyện và các waifu do bạn sóc lọ ra không giúp bạn chiến thắng
                được trò chơi tình ái ngoài đời thực đâu...
              </Text>

              <Heading variant="heading-strong-m">Trò Chơi Tình Ái Thực Sự</Heading>

              {leftParagraphs.map((paragraph) => (
                <Text key={paragraph} variant="body-default-m" onBackground="neutral-medium">
                  {paragraph}
                </Text>
              ))}
            </Column>

            <Row
              fillWidth
              horizontal="between"
              gap="12"
              s={{ direction: "column", horizontal: "start", vertical: "stretch" }}
            >
              <Column fillWidth>
                <Button variant="primary" size="m" prefixIcon="arrowLeft" onClick={onExit} fillWidth>
                  Về màn chính
                </Button>
              </Column>

              <Badge
                icon="dangerCircle"
                border="danger-alpha-medium"
                background="danger-alpha-weak"
                onBackground="danger-strong"
                paddingX="12"
                paddingY="8"
              >
                <Text variant="label-strong-s">The Playbook Channel</Text>
              </Badge>
            </Row>
          </Column>
        </Row>
      </RevealFx>
    </Column>
  );
}
