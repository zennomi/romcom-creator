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
    title: "Thanh xuân vườn trường",
    subtitle: "Thủ khoa chuyên Văn trường tôi thích ăn thịt chó",
    summary:
      "Nhà tôi ba đời kinh doanh thịt chó, một hôm nọ tôi thấy một cô gái trông quen quen vào quán nhà tôi...",
    quickPrompt:
      "Tại quán thịt chó nằm trên dãy phố ẩm thực nọ cách trường THPT Chuyên Quang Trung 5km...",
  },
  {
    id: "isekai-romcom",
    title: "Isekai Romcom",
    subtitle: "Chinh phục nữ ma vương ở thế giới khác",
    summary:
      "Bạn bị 1 con Sanh XM tông trúng và được đưa sang thế giới khác...",
    quickPrompt:
      "Một thành phố phép thuật nơi mọi lời tỏ tình đều biến thành khế ước ma pháp tạm thời.",
  },
  {
    id: "drama-cong-so",
    title: "Chuyện tình công sở",
    subtitle: "Em sale Nam Định thi thoảng lại nhảy dép của tôi",
    summary:
      "Tốt nghiệp xuất sắc ngành IT nhưng lại thất nghiệp, bạn được giới thiệu vào làm tại một khu công nghiệp ngoại thành...",
    quickPrompt:
      "Tại một khu công nghiệp cách xa thành phố, có một công ty sản xuất chất phụ gia cho các nhà máy sản xuất thức ăn gia súc...",
  },
  {
    id: "dark-romcom",
    title: "Dark RomCom",
    subtitle: "Crush của tôi là single mom",
    summary: "Hành trình cứu rỗi cuộc đời của một người phụ nữ hoàn lương",
    quickPrompt: "Tại một căn hộ chung cư mini 8 tầng be bé nọ...",
  },
];

export const initialCreationForm: CreationFormState = {
  worldDescription:
    "Thành phố biển Đà Linh đang vào mùa mưa sao băng, ai tỏ tình dưới mưa sao băng sẽ bị đồn khắp trường vào sáng hôm sau.",
  heroineName: "Thiên Kim",
  heroineArchetype: "Lạnh lùng ngoài mặt nhưng rất dễ xấu hổ",
  firstMeeting:
    "Gặp nhau khi bạn đang phục vụ khách tại quán thịt chó của gia đình bạn, cô ấy bước vào và order 1 mẹt đầy đủ luộc, chả, canh măng, dồi...",
};

export const initialCharacters: CharacterProfile[] = [
  {
    id: "an-nhien",
    name: "Thiên Kim",
    archetype: "Kuudere đùi to",
    affection: 52,
    previewImage: "/images/characters/kuudere.jpeg",
    memories: [
      "Rất thích ăn thịt chó, đặc biệt bún chan rượu mận.",
      "Tự ti vì cặp đùi to.",
      "Bạn đã hứa sẽ giữ bí mật cho cô ấy",
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
    title: "Thịt chó phải có lá mơ/Quán nhà tôi có nàng thơ order",
    narrator:
      "Chiều mưa đầu mùa, quán thịt chó của nhà bạn nằm lọt giữa con phố ẩm thực như một chiếc hộp lửa sáng vàng: hơi nước bốc lên từ nồi canh măng, tiếng dao thớt lóc cóc phía bếp sau, mùi riềng sả quện cùng rượu mận khiến ai đi ngang cũng chậm chân. Bạn vừa bê mâm ra bàn số 7 thì cánh cửa kéo mở ra, chuông gió leng keng, Thiên Kim bước vào trong chiếc áo khoác còn đọng nước mưa. Cô ấy kéo nhẹ khẩu trang xuống, để lộ gương mặt vừa lạnh vừa ngại, nhìn menu chưa đến hai giây rồi nói như đã thuộc lòng: 'Cho tớ một mẹt đầy đủ, thêm dồi nướng, canh măng ít ớt, và... nhiều lá mơ'. Cách cô ấy nhấn ở chữ cuối như một bí mật riêng làm bạn đứng khựng mất một nhịp. Minh Thư ở quầy thu ngân huých vai bạn cười mím, Khánh Linh thì giả vờ lau bàn nhưng mắt liếc về phía hai người. Bạn nhận ra chuyện tối nay sẽ không còn là một ca phục vụ bình thường nữa, vì chỉ với một câu order, cô gái ấy đã khiến cả quán đông đúc bỗng thu lại vừa đủ trong tầm mắt của bạn.",
    choices: [
      {
        id: "confess-1",
        label: "Đích thân nhận order cho nàng",
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
        label: "Đưa menu rồi lùi lại",
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
        label: "Trêu nàng gọi món khó",
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
    title: "Rượu mận nửa ly, tín hiệu đầy tim",
    narrator:
      "Tan ca tối, bạn đang cúi người gom bát đĩa ở bàn góc thì thấy một mảnh giấy gấp tư kẹp dưới đĩa lá mơ còn ướt nước chấm. Mở ra, dòng chữ hiện lên ngay dưới ánh đèn vàng: 'Ngày mai đừng để ai nhận order của tớ'. Nét bút tròn, nghiêng nhẹ về bên phải, rõ ràng là của Minh Thư, cô bạn lúc nào cũng nói nhanh hơn nghĩ và hay để lại mấy lời nhắn ngốc nghếch làm bạn bật cười. Nhưng khi bạn vừa ngẩng lên, người đứng ở cửa lại là Khánh Linh: tóc còn buộc cao, áo khoác đồng phục CLB vắt hờ trên tay, vẻ mặt nghiêm như thể đang tới họp chứ không phải tới quán ăn. Cô ấy không vào ngay, chỉ hất cằm về phía mảnh giấy rồi nói nhỏ: 'Nhặt được thì giữ cho kỹ, đừng để cô ấy quê'. Phía sau lưng Khánh Linh, màn mưa bụi giăng như tấm rèm mỏng, phản chiếu biển hiệu quán thành những vệt đỏ xanh chập chờn trên nền đường. Bạn chưa kịp trả lời thì điện thoại rung thêm một cái: sticker con thỏ hồng của Minh Thư gửi tới, kèm đúng một chữ 'Nhớ'. Giữa mùi rượu mận còn thoảng trên tay áo và tiếng nồi nước luộc sôi lục bục từ bếp, bạn bỗng hiểu rằng cuộc chơi tình cảm này không còn đi theo nhịp an toàn nữa: một người thì chủ động để lại tín hiệu, một người thì lạnh mặt nhưng vẫn lặng lẽ chuyển tín hiệu ấy tới tận tay bạn.",
    choices: [
      {
        id: "confess-2",
        label: "Nhắn hẹn giữ bàn riêng",
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
        label: "Xếp giấy vào túi áo",
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
        label: "Giả vờ không hiểu tín hiệu",
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
    title: "Bếp than đỏ lửa, lòng ai đỏ mặt",
    narrator:
      "Thứ bảy, từ mười một giờ trưa quán đã kín bàn, đến mức bạn phải ghi order lên cả mặt sau của tờ lịch treo tường vì sổ tay ướt nước canh măng không viết nổi nữa. Bếp than đỏ rực, quạt thông gió chạy hết công suất, tiếng khách gọi món chồng lên tiếng chạm chén loảng xoảng thành một bản nhạc hỗn độn quen thuộc của những ngày đắt hàng. Khánh Linh đến từ sớm, chưa kịp ngồi đã tự buộc tạp dề, phụ bê mẹt từ bàn ngoài vào trong như người nhà, vừa đi vừa nhắc bạn cẩn thận chỗ sàn trơn vì mỡ bắn. Minh Thư thì chiếm ngay bàn góc sát cửa kính, gọi đúng món ruột rồi vừa ăn vừa hí hoáy viết gì đó trong cuốn sổ bìa tím, thỉnh thoảng ngẩng lên cười trêu bạn mỗi lần bạn lóng ngóng quên bát chấm. Thiên Kim không nói nhiều, chỉ lặng lẽ ngồi bàn gần quầy, nhưng cứ thấy bạn đụng tay vào vỉ nướng quá lâu là cô ấy lại đẩy về phía bạn một cốc nước đá hoặc gói khăn giấy mới, như thể đã quen quan sát bạn từ rất lâu. Cùng một không gian chật chội, ba cô gái, ba kiểu quan tâm hoàn toàn khác nhau: người thẳng như lửa, người ồn ào như pháo giấy, người im lặng mà bền như hơi ấm từ bếp than. Bạn nhận ra điều khó nhất không phải phục vụ hết đợt khách đang tràn vào, mà là giữ cho tim mình đừng nghiêng quá rõ về một phía.",
    choices: [
      {
        id: "confess-3",
        label: "Cảm ơn nàng trước cả quán",
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
        label: "Chỉ tập trung đứng bếp",
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
        label: "Cáu gắt vì quá tải",
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
    title: "Mẹt chốt đơn cuối cùng",
    narrator:
      "Đêm muộn, khi chiếc đồng hồ treo tường vừa nhích qua mười một rưỡi, quán nhà bạn cuối cùng cũng trả lại sự yên tĩnh hiếm hoi sau một ngày đỏ bếp. Mưa phùn rơi mỏng trước hiên, quệt lên tấm biển hiệu thành một lớp nước bạc lấp lánh dưới đèn đường. Bạn đang định tắt bớt đèn thì nhận ra bàn giữa quán vẫn còn một mẹt chưa ai đụng tới: thịt luộc còn nóng, dồi nướng vừa đủ cháy cạnh, bát mắm tôm đánh bông bên trên rắc lát ớt đỏ, và một nắm lá mơ xanh được xếp ngay ngắn như cố tình dành cho khoảnh khắc đặc biệt. Bên dưới đĩa là mảnh giấy viết tay: 'Suất này dành cho người cậu chọn. Đừng trốn nữa'. Khi bạn ngẩng lên, cả ba cô gái đều đã đứng đó từ lúc nào. Minh Thư tựa lưng vào quầy, cố giữ nụ cười trêu chọc thường ngày nhưng bàn tay nắm mép áo đã siết chặt. Khánh Linh đứng gần cửa, vẻ mặt bình tĩnh như mọi khi, chỉ có ánh mắt không rời khỏi bạn dù một giây. Thiên Kim ngồi xuống ghế đối diện mẹt đồ, đầu ngón tay khẽ chạm vào mép bát rồi rụt lại, như đang đợi một tín hiệu cho phép. Không ai thúc ép, không ai lên tiếng trước, chỉ có tiếng mưa chạm mái tôn và nhịp tim bạn đập rõ hơn cả tiếng quạt trần quay đều. Bạn hiểu rằng sau đêm nay, quán vẫn mở cửa như cũ, bếp vẫn đỏ lửa như cũ, nhưng mối quan hệ giữa bốn người sẽ không thể quay lại điểm xuất phát. Một lựa chọn, một câu nói, một ánh nhìn đủ lâu là đủ để định nghĩa lại tất cả.",
    choices: [
      {
        id: "confess-4",
        label: "Chọn một người và nói thật lòng",
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
        label: "Xin thêm thời gian",
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
        label: "Đánh trống lảng rồi bỏ đi",
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
