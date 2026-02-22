import type {
  CharacterProfile,
  CreationFormState,
  StoryBeat,
  TemplateOption,
} from "./types";

export const creationSteps = [
  "Bối cảnh",
  "Hình mẫu nữ chính",
  "Xác nhận",
] as const;

export const templateOptions: TemplateOption[] = [
  {
    id: "hoc-duong-thanh-xuan",
    title: "Học đường thanh xuân",
    subtitle: "Mùa hè cuối cấp",
    summary:
      "Tình cảm dở khóc dở cười trong câu lạc bộ truyền thông của trường.",
    quickPrompt:
      "Bối cảnh là trường THPT Hoa Hạ năm cuối. Câu lạc bộ truyền thông phải cứu lễ hội trường trong 7 ngày.",
  },
  {
    id: "isekai-romcom",
    title: "Isekai Romcom",
    subtitle: "Triệu hồi nhầm lớp trưởng",
    summary:
      "Bạn bị kéo sang thế giới fantasy và phải quản lý quán trà phép thuật.",
    quickPrompt:
      "Một thành phố phép thuật nơi mọi lời tỏ tình đều biến thành khế ước ma pháp tạm thời.",
  },
  {
    id: "drama-cong-so",
    title: "Drama công sở",
    subtitle: "Startup mùa gọi vốn",
    summary:
      "Văn phòng chật chội, deadline dồn dập và những ánh nhìn đầy ẩn ý.",
    quickPrompt:
      "Startup truyền thông số chuẩn bị gọi vốn Series A, cả team phải làm việc xuyên đêm suốt 1 tuần.",
  },
];

export const initialCreationForm: CreationFormState = {
  worldDescription:
    "Thành phố biển Đà Linh đang vào mùa mưa sao băng, ai tỏ tình dưới mưa sao băng sẽ bị đồn khắp trường vào sáng hôm sau.",
  heroineName: "An Nhiên",
  heroineArchetype: "Lạnh lùng ngoài mặt nhưng cực kỳ tinh tế",
  firstMeeting:
    "Cả hai kẹt lại trong thư viện sau giờ học vì cơn mưa lớn, chỉ còn một chiếc ô.",
};

export const initialCharacters: CharacterProfile[] = [
  {
    id: "an-nhien",
    name: "An Nhiên",
    archetype: "Kuudere học bá",
    affection: 52,
    previewImage: "/images/characters/kuudere.jpeg",
    memories: [
      "Ghét bị gọi là 'đồ lạnh lùng' trước đám đông.",
      "Rất thích cacao nóng, nhưng luôn giả vờ gọi cà phê đen.",
      "Đã giữ tấm vé xem pháo hoa bị rách từ lần đi cùng bạn.",
    ],
  },
  {
    id: "minh-thu",
    name: "Minh Thư",
    archetype: "Bạn thân năng lượng cao",
    affection: 44,
    previewImage: "/images/characters/tomboy.jpeg",
    memories: [
      "Luôn nhớ ngày sinh nhật của cả lớp.",
      "Sợ thang máy, nên thường chọn đi bộ lên tầng 8.",
      "Tin rằng bạn sẽ là người kết thúc được bộ tiểu thuyết cô ấy viết dở.",
    ],
  },
  {
    id: "khanh-linh",
    name: "Khánh Linh",
    archetype: "Tsundere đội trưởng CLB",
    affection: 38,
    previewImage: "/images/characters/tsundere.jpeg",
    memories: [
      "Không thích ai đến trễ cuộc họp CLB.",
      "Từng bí mật sửa bài thuyết trình của bạn lúc nửa đêm.",
      "Hay giả vờ cáu, nhưng luôn là người chờ bạn về cuối cùng.",
    ],
  },
];

export const storyBeats: StoryBeat[] = [
  {
    id: "chapter-1",
    chapter: 1,
    title: "Cơn mưa đầu mùa",
    narrator:
      "Chuông tan học vừa dứt. Hành lang vắng dần, chỉ còn tiếng mưa đập lên mái tôn thư viện. An Nhiên đứng cạnh cửa sổ, tay siết chặt quai cặp, như đang chờ một điều gì đó mà không muốn ai nhận ra.",
    choices: [
      {
        id: "confess-1",
        label: "Tỏ tình",
        affectionDelta: {
          "an-nhien": 9,
          "minh-thu": 1,
          "khanh-linh": -2,
        },
        haoCamDelta: 8,
        heartbeatCost: 1,
      },
      {
        id: "silent-1",
        label: "Im lặng",
        affectionDelta: {
          "an-nhien": 2,
          "minh-thu": 0,
          "khanh-linh": 1,
        },
        haoCamDelta: 2,
        heartbeatCost: 1,
      },
      {
        id: "fight-1",
        label: "Gây sự",
        affectionDelta: {
          "an-nhien": -6,
          "minh-thu": 2,
          "khanh-linh": 6,
        },
        haoCamDelta: 1,
        heartbeatCost: 1,
      },
    ],
  },
  {
    id: "chapter-2",
    chapter: 2,
    title: "Tin nhắn lúc 23:59",
    narrator:
      "Điện thoại rung nhẹ khi đồng hồ vừa chạm 23:59. Một tin nhắn ẩn danh: 'Ngày mai lên sân thượng trước giờ chào cờ. Đừng đến muộn.' Bên dưới là sticker thỏ hồng mà chỉ Minh Thư hay dùng.",
    choices: [
      {
        id: "confess-2",
        label: "Tỏ tình",
        affectionDelta: {
          "an-nhien": 5,
          "minh-thu": 8,
          "khanh-linh": -1,
        },
        haoCamDelta: 7,
        heartbeatCost: 1,
      },
      {
        id: "silent-2",
        label: "Im lặng",
        affectionDelta: {
          "an-nhien": 1,
          "minh-thu": 3,
          "khanh-linh": 1,
        },
        haoCamDelta: 3,
        heartbeatCost: 1,
      },
      {
        id: "fight-2",
        label: "Gây sự",
        affectionDelta: {
          "an-nhien": -3,
          "minh-thu": -4,
          "khanh-linh": 7,
        },
        haoCamDelta: 0,
        heartbeatCost: 1,
      },
    ],
  },
  {
    id: "chapter-3",
    chapter: 3,
    title: "Deadline và pháo hoa",
    narrator:
      "Trên màn hình là bảng kế hoạch lễ hội đỏ rực vì quá hạn. Khánh Linh chống tay lên bàn, nhìn bạn thật lâu rồi đẩy qua một cốc trà gừng: 'Cậu mà gục thì ai gánh phần tớ?'. Ngoài cửa kính, pháo hoa thử ánh sáng lóe lên từng nhịp.",
    choices: [
      {
        id: "confess-3",
        label: "Tỏ tình",
        affectionDelta: {
          "an-nhien": 2,
          "minh-thu": 2,
          "khanh-linh": 9,
        },
        haoCamDelta: 9,
        heartbeatCost: 1,
      },
      {
        id: "silent-3",
        label: "Im lặng",
        affectionDelta: {
          "an-nhien": 1,
          "minh-thu": 1,
          "khanh-linh": 2,
        },
        haoCamDelta: 2,
        heartbeatCost: 1,
      },
      {
        id: "fight-3",
        label: "Gây sự",
        affectionDelta: {
          "an-nhien": -1,
          "minh-thu": 0,
          "khanh-linh": -7,
        },
        haoCamDelta: -1,
        heartbeatCost: 1,
      },
    ],
  },
  {
    id: "chapter-4",
    chapter: 4,
    title: "Lời thì thầm sau sân khấu",
    narrator:
      "Đêm diễn bắt đầu. Ánh đèn hậu trường hắt lên gương mặt cả ba người, mỗi người một biểu cảm. Bạn nghe rõ nhịp tim mình hơn cả tiếng nhạc mở màn. Chỉ cần một lựa chọn nữa, mối quan hệ sẽ đổi hướng.",
    choices: [
      {
        id: "confess-4",
        label: "Tỏ tình",
        affectionDelta: {
          "an-nhien": 6,
          "minh-thu": 6,
          "khanh-linh": 6,
        },
        haoCamDelta: 10,
        heartbeatCost: 1,
      },
      {
        id: "silent-4",
        label: "Im lặng",
        affectionDelta: {
          "an-nhien": 0,
          "minh-thu": 0,
          "khanh-linh": 0,
        },
        haoCamDelta: 1,
        heartbeatCost: 1,
      },
      {
        id: "fight-4",
        label: "Gây sự",
        affectionDelta: {
          "an-nhien": -5,
          "minh-thu": -5,
          "khanh-linh": -5,
        },
        haoCamDelta: -3,
        heartbeatCost: 1,
      },
    ],
  },
];

export const initialHaoCam = 120;
export const initialHeartbeat = 10;
