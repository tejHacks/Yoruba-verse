// Yoruba is a tonal language: the same letters mean different things
// depending on pitch. We tag every word with its tone sequence so
// learners build the ear for it from word one, not as an afterthought.
//
// Tone marks: á/ń = High, a/n = Mid (unmarked), à/ǹ = Low

export type Tone = "H" | "M" | "L";

export interface YorubaWord {
  id: string;
  word: string;
  tones: Tone[]; // one entry per syllable
  english: string;
  example?: string;
  exampleEnglish?: string;
}

export interface LessonCategory {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  words: YorubaWord[];
}

export const lessonCategories: LessonCategory[] = [
  // ─────────────────────────────────────────────
  // GREETINGS
  // ─────────────────────────────────────────────
  {
    id: "greetings",
    title: "Greetings",
    subtitle: "Ẹ n lẹ́ — the words that open every door",
    emoji: "🤝",
    words: [
      { id: "g1", word: "Ẹ n lẹ́", tones: ["M", "M", "H"], english: "Welcome / greetings" },
      { id: "g2", word: "Báwo ni", tones: ["H", "M", "M"], english: "How are you", example: "Báwo ni ìdílé?", exampleEnglish: "How is the family?" },
      { id: "g3", word: "Ó dàbọ̀", tones: ["M", "L", "L"], english: "Goodbye" },
      { id: "g4", word: "Ẹ ṣé", tones: ["M", "H"], english: "Thank you" },
      { id: "g5", word: "Kú àárọ̀", tones: ["H", "L", "L"], english: "Good morning" },
      { id: "g6", word: "Kú ọ̀sán", tones: ["H", "L", "M"], english: "Good afternoon" },
      { id: "g7", word: "Kú alẹ́", tones: ["H", "M", "H"], english: "Good evening / good night" },
      { id: "g8", word: "Káàbọ̀", tones: ["H", "L", "L"], english: "Welcome" },
      { id: "g9", word: "Pẹ̀lẹ́", tones: ["L", "H"], english: "Sorry / take care" },
      { id: "g10", word: "Àbọ̀", tones: ["L", "L"], english: "See you again" },
    ],
  },

  // ─────────────────────────────────────────────
  // FAMILY
  // ─────────────────────────────────────────────
  {
    id: "family",
    title: "Family",
    subtitle: "Ìdílé — the people who raise you",
    emoji: "👪",
    words: [
      { id: "f1", word: "Ìyá", tones: ["L", "H"], english: "Mother" },
      { id: "f2", word: "Bàbá", tones: ["L", "H"], english: "Father" },
      { id: "f3", word: "Ẹ̀gbọ́n", tones: ["L", "H"], english: "Older sibling" },
      { id: "f4", word: "Àbúrò", tones: ["L", "H", "M"], english: "Younger sibling" },
      { id: "f5", word: "Ọmọ", tones: ["M", "M"], english: "Child" },
      { id: "f6", word: "Arákùnrin", tones: ["M", "L", "M", "M"], english: "Brother / male sibling" },
      { id: "f7", word: "Arábìnrin", tones: ["M", "H", "L", "M"], english: "Sister / female sibling" },
      { id: "f8", word: "Ọkọ", tones: ["M", "M"], english: "Husband" },
      { id: "f9", word: "Aya", tones: ["M", "M"], english: "Wife" },
      { id: "f10", word: "Ìdílé", tones: ["L", "H", "H"], english: "Family" },
    ],
  },

  // ─────────────────────────────────────────────
  // EVERYDAY WORDS
  // ─────────────────────────────────────────────
  {
    id: "everyday",
    title: "Everyday Words",
    subtitle: "Ọ̀rọ̀ ojoojúmọ́ — small words, used constantly",
    emoji: "🗣️",
    words: [
      { id: "e1", word: "Bẹ́ẹ̀ni", tones: ["H", "L", "M"], english: "Yes" },
      { id: "e2", word: "Rárá", tones: ["H", "H"], english: "No" },
      { id: "e3", word: "Jọ̀ọ́", tones: ["L", "H"], english: "Please" },
      { id: "e4", word: "Ilé", tones: ["M", "H"], english: "House / home" },
      { id: "e5", word: "Oúnjẹ", tones: ["M", "H", "M"], english: "Food" },
      { id: "e6", word: "Omi", tones: ["M", "M"], english: "Water" },
      { id: "e7", word: "Ọ̀rẹ́", tones: ["L", "H"], english: "Friend" },
      { id: "e8", word: "Eni", tones: ["M", "M"], english: "Person" },
      { id: "e9", word: "Ohun", tones: ["M", "M"], english: "Thing / sound" },
      { id: "e10", word: "Orúkọ", tones: ["M", "H", "M"], english: "Name" },
    ],
  },

  // ─────────────────────────────────────────────
  // NUMBERS
  // ─────────────────────────────────────────────
  {
    id: "numbers",
    title: "Numbers",
    subtitle: "Àwọn nọ́mbà — count like an Ìjẹ̀bú trader",
    emoji: "🔢",
    words: [
      { id: "n1", word: "Ọ̀kan", tones: ["L", "M"], english: "One" },
      { id: "n2", word: "Èjì", tones: ["L", "H"], english: "Two" },
      { id: "n3", word: "Ẹ̀ta", tones: ["L", "M"], english: "Three" },
      { id: "n4", word: "Ẹ̀rin", tones: ["L", "M"], english: "Four" },
      { id: "n5", word: "Àrún", tones: ["L", "H"], english: "Five" },
      { id: "n6", word: "Ẹ̀fà", tones: ["L", "H"], english: "Six" },
      { id: "n7", word: "Èje", tones: ["L", "M"], english: "Seven" },
      { id: "n8", word: "Ẹ̀jọ", tones: ["L", "M"], english: "Eight" },
      { id: "n9", word: "Ẹ̀sán", tones: ["L", "H"], english: "Nine" },
      { id: "n10", word: "Ẹ̀wá", tones: ["L", "H"], english: "Ten" },
    ],
  },

  // ─────────────────────────────────────────────
  // BATHROOM & TOILET
  // ─────────────────────────────────────────────
  {
    id: "bathroom",
    title: "Bathroom & Toilet",
    subtitle: "Baluwe — everyday words for personal care",
    emoji: "🚿",
    words: [
      { id: "b1", word: "Bàtà", tones: ["L", "M"], english: "Shoe" },
      { id: "b2", word: "Bálùwẹ̀", tones: ["H", "L", "L"], english: "Bathroom" },
      { id: "b3", word: "Ìgbọnsẹ̀", tones: ["L", "H", "L"], english: "Toilet / restroom" },
      { id: "b4", word: "Ọṣẹ́", tones: ["M", "H"], english: "Soap" },
      { id: "b5", word: "Fọ́ọ̀ṣ́", tones: ["H", "L"], english: "Brush" },
      { id: "b6", word: "Àṣọ", tones: ["L", "M"], english: "Cloth / clothing" },
      { id: "b7", word: "Iná", tones: ["M", "H"], english: "Fire" },
      { id: "b8", word: "Tábìlì", tones: ["H", "L", "L"], english: "Table" },
      { id: "b9", word: "Aṣọ̀wẹ̀", tones: ["M", "L", "L"], english: "Bathing cloth" },
      { id: "b10", word: "Fọ́", tones: ["H"], english: "Wash / clean" },
    ],
  },

  // ─────────────────────────────────────────────
  // HOME
  // ─────────────────────────────────────────────
  {
    id: "home",
    title: "Around the Home",
    subtitle: "Ilé — things you see every day",
    emoji: "🏠",
    words: [
      { id: "h1", word: "Yàrá", tones: ["L", "H"], english: "Room" },
      { id: "h2", word: "Ilẹ̀", tones: ["M", "L"], english: "Floor / ground" },
      { id: "h3", word: "Ògiri", tones: ["M", "M", "M"], english: "Wall" },
      { id: "h4", word: "Ẹnu-ọ̀nà", tones: ["M", "L", "L", "L"], english: "Doorway / entrance" },
      { id: "h5", word: "Fèrèsé", tones: ["M", "H", "H"], english: "Window" },
      { id: "h6", word: "Àga", tones: ["L", "M"], english: "Chair" },
      { id: "h7", word: "Ibùsùn", tones: ["M", "L", "H"], english: "Bed" },
      { id: "h8", word: "Ìmọ́lẹ̀", tones: ["L", "H", "L"], english: "Light" },
      { id: "h9", word: "Àtùpà", tones: ["L", "L", "H"], english: "Lamp" },
      { id: "h10", word: "Àkọ́lé", tones: ["L", "H", "H"], english: "Title / heading" },
    ],
  },

  // ─────────────────────────────────────────────
  // KITCHEN
  // ─────────────────────────────────────────────
  {
    id: "kitchen",
    title: "Kitchen",
    subtitle: "Ilé ìdáná — cook, eat, repeat",
    emoji: "🍳",
    words: [
      { id: "k1", word: "Ilé ìdáná", tones: ["M", "H", "L", "H"], english: "Kitchen" },
      { id: "k2", word: "Ìkòkò", tones: ["L", "L", "M"], english: "Pot" },
      { id: "k3", word: "Àwo", tones: ["L", "M"], english: "Plate / dish" },
      { id: "k4", word: "Sìkà", tones: ["L", "H"], english: "Spoon" },
      { id: "k5", word: "Ọ̀bẹ", tones: ["L", "M"], english: "Soup / stew" },
      { id: "k6", word: "Iyọ̀", tones: ["M", "L"], english: "Salt" },
      { id: "k7", word: "Ata", tones: ["M", "M"], english: "Pepper" },
      { id: "k8", word: "Epo", tones: ["M", "M"], english: "Oil" },
      { id: "k9", word: "Ṣe", tones: ["M"], english: "Do / make / cook" },
      { id: "k10", word: "Dín", tones: ["H"], english: "Fry" },
    ],
  },

  // ─────────────────────────────────────────────
  // FOOD
  // ─────────────────────────────────────────────
  {
    id: "food",
    title: "Food & Eating",
    subtitle: "Oúnjẹ — because every good conversation eventually reaches food",
    emoji: "🍲",
    words: [
      { id: "fd1", word: "Ìrẹsì", tones: ["L", "L", "H"], english: "Rice" },
      { id: "fd2", word: "Ẹ̀wà", tones: ["L", "H"], english: "Beans" },
      { id: "fd3", word: "Àkàrà", tones: ["L", "H", "M"], english: "Bean cake" },
      { id: "fd4", word: "Amàlà", tones: ["M", "L", "L"], english: "Amala" },
      { id: "fd5", word: "Àgbàdo", tones: ["L", "M", "M"], english: "Corn / maize" },
      { id: "fd6", word: "Ẹ̀gẹ̀", tones: ["L", "L"], english: "Yam" },
      { id: "fd7", word: "Ọ̀gẹ̀dẹ̀", tones: ["L", "L", "L"], english: "Banana / plantain" },
      { id: "fd8", word: "Ẹja", tones: ["L", "M"], english: "Fish" },
      { id: "fd9", word: "Ẹran", tones: ["L", "M"], english: "Meat" },
      { id: "fd10", word: "Eso", tones: ["M", "M"], english: "Fruit" },
    ],
  },

  // ─────────────────────────────────────────────
  // MARKET
  // ─────────────────────────────────────────────
  {
    id: "market",
    title: "At the Market",
    subtitle: "Ọjà — shop, bargain and know your prices",
    emoji: "🛒",
    words: [
      { id: "m1", word: "Ọjà", tones: ["M", "L"], english: "Market" },
      { id: "m2", word: "Owó", tones: ["M", "H"], english: "Money" },
      { id: "m3", word: "Owó mélòó", tones: ["M", "M", "H"], english: "How much money / how much?" },
      { id: "m4", word: "Gbowó", tones: ["M", "H"], english: "Collect money" },
      { id: "m5", word: "Ra", tones: ["M"], english: "Buy" },
      { id: "m6", word: "Ta", tones: ["M"], english: "Sell" },
      { id: "m7", word: "Olùtajà", tones: ["M", "L", "H"], english: "Seller / trader" },
      { id: "m8", word: "Oníbàárà", tones: ["M", "H", "L", "H"], english: "Customer" },
      { id: "m9", word: "Owó púpọ̀", tones: ["M", "H", "L", "L"], english: "A lot of money" },
      { id: "m10", word: "Dín owó", tones: ["H", "M", "H"], english: "Reduce the price" },
    ],
  },

  // ─────────────────────────────────────────────
  // TRANSPORT & VEHICLES
  // ─────────────────────────────────────────────
  {
    id: "transport",
    title: "Transport & Vehicles",
    subtitle: "Ọkọ̀ — get around town",
    emoji: "🚗",
    words: [
      { id: "t1", word: "Ọkọ̀", tones: ["M", "L"], english: "Vehicle / transport" },
      { id: "t2", word: "Ọkọ̀ ayọ́kẹ́lẹ́", tones: ["M", "L", "M", "H", "H", "H"], english: "Car / automobile" },
      { id: "t3", word: "Ọ̀nà", tones: ["L", "M"], english: "Road / way" },
      { id: "t4", word: "Bọ́ọ̀sì", tones: ["H", "L", "L"], english: "Bus" },
      { id: "t5", word: "Ọ̀kọ̀ òfuurufú", tones: ["L", "L", "M", "L", "M"], english: "Airplane" },
      { id: "t6", word: "Kẹ̀kẹ́", tones: ["L", "H"], english: "Bicycle" },
      { id: "t7", word: "Kẹ̀kẹ́ alùrọ̀", tones: ["L", "H", "L", "L"], english: "Motorcycle" },
      { id: "t8", word: "Awakọ̀", tones: ["M", "L", "L"], english: "Driver" },
      { id: "t9", word: "Arìnrìnàjò", tones: ["M", "L", "L", "H", "M"], english: "Traveller" },
      { id: "t10", word: "Ibusọ̀", tones: ["M", "M", "L"], english: "Bus stop / station" },
    ],
  },

  // ─────────────────────────────────────────────
  // WORKPLACE
  // ─────────────────────────────────────────────
  {
    id: "workplace",
    title: "Workplace",
    subtitle: "Ibi iṣẹ́ — words for work, meetings and getting things done",
    emoji: "💼",
    words: [
      { id: "w1", word: "Ibi iṣẹ́", tones: ["M", "M", "M", "H"], english: "Workplace" },
      { id: "w2", word: "Iṣẹ́", tones: ["M", "H"], english: "Work / job" },
      { id: "w3", word: "Ọ̀gá", tones: ["L", "H"], english: "Boss / superior" },
      { id: "w4", word: "Alábàṣiṣẹ́", tones: ["M", "L", "M", "H"], english: "Colleague" },
      { id: "w5", word: "Pàdé", tones: ["L", "H"], english: "Meet / meeting" },
      { id: "w6", word: "Ọ́fíìsì", tones: ["H", "H", "L"], english: "Office" },
      { id: "w7", word: "Kọ̀ǹpútà", tones: ["L", "L", "H"], english: "Computer" },
      { id: "w8", word: "Fáìlì", tones: ["H", "L"], english: "File" },
      { id: "w9", word: "Ìpàdé", tones: ["L", "L", "H"], english: "Meeting" },
      { id: "w10", word: "Akókò", tones: ["M", "H", "M"], english: "Time" },
    ],
  },

  // ─────────────────────────────────────────────
  // SCHOOL & LEARNING
  // ─────────────────────────────────────────────
  {
    id: "school",
    title: "School & Learning",
    subtitle: "Ẹ̀kọ́ — learn something new",
    emoji: "📚",
    words: [
      { id: "s1", word: "Ẹ̀kọ́", tones: ["L", "H"], english: "Education / lesson" },
      { id: "s2", word: "Ilé-ẹ̀kọ́", tones: ["M", "L", "H"], english: "School" },
      { id: "s3", word: "Olùkọ́", tones: ["M", "L", "H"], english: "Teacher" },
      { id: "s4", word: "Akẹ́kọ̀ọ́", tones: ["M", "H", "L", "H"], english: "Student" },
      { id: "s5", word: "Ìwé", tones: ["L", "H"], english: "Book" },
      { id: "s6", word: "Kọ́", tones: ["H"], english: "Learn / teach" },
      { id: "s7", word: "Ka", tones: ["M"], english: "Read" },
      { id: "s8", word: "Kọ̀wé", tones: ["L", "H"], english: "Write" },
      { id: "s9", word: "Ìbéèrè", tones: ["L", "H", "L"], english: "Question" },
      { id: "s10", word: "Ìdáhùn", tones: ["L", "H", "L"], english: "Answer" },
    ],
  },

  // ─────────────────────────────────────────────
  // BODY
  // ─────────────────────────────────────────────
  {
    id: "body",
    title: "The Body",
    subtitle: "Ara — learn the words for your body",
    emoji: "🧍",
    words: [
      { id: "bd1", word: "Ara", tones: ["M", "M"], english: "Body" },
      { id: "bd2", word: "Orí", tones: ["M", "H"], english: "Head" },
      { id: "bd3", word: "Ojú", tones: ["M", "H"], english: "Eye / face" },
      { id: "bd4", word: "Etí", tones: ["M", "H"], english: "Ear" },
      { id: "bd5", word: "Imú", tones: ["M", "H"], english: "Nose" },
      { id: "bd6", word: "Ẹnu", tones: ["L", "M"], english: "Mouth" },
      { id: "bd7", word: "Ọ̀wọ́", tones: ["L", "H"], english: "Hand / arm" },
      { id: "bd8", word: "Ẹsẹ̀", tones: ["L", "L"], english: "Leg / foot" },
      { id: "bd9", word: "Inú", tones: ["M", "H"], english: "Stomach / inside" },
      { id: "bd10", word: "Ọkàn", tones: ["L", "M"], english: "Heart / mind" },
    ],
  },

  // ─────────────────────────────────────────────
  // EMOTIONS
  // ─────────────────────────────────────────────
  {
    id: "emotions",
    title: "Feelings & Emotions",
    subtitle: "Ìmọ̀lára — say how you really feel",
    emoji: "❤️",
    words: [
      { id: "em1", word: "Ayọ̀", tones: ["M", "L"], english: "Joy / happiness" },
      { id: "em2", word: "Ìbànújẹ́", tones: ["L", "L", "H"], english: "Sadness" },
      { id: "em3", word: "Ìbínú", tones: ["L", "L", "H"], english: "Anger" },
      { id: "em4", word: "Ìfẹ́", tones: ["L", "H"], english: "Love" },
      { id: "em5", word: "Ẹ̀rù", tones: ["L", "H"], english: "Fear" },
      { id: "em6", word: "Àlàáfíà", tones: ["L", "H", "L", "H"], english: "Peace / wellbeing" },
      { id: "em7", word: "Ìdùnnú", tones: ["L", "L", "H"], english: "Happiness" },
      { id: "em8", word: "Ìbànújẹ", tones: ["L", "L", "H"], english: "Sadness / sorrow" },
      { id: "em9", word: "Ìyàlẹ́nu", tones: ["L", "L", "H", "M"], english: "Surprise / amazement" },
      { id: "em10", word: "Ìrètí", tones: ["L", "L", "H"], english: "Hope" },
    ],
  },

  // ─────────────────────────────────────────────
  // ACTIONS
  // ─────────────────────────────────────────────
  {
    id: "actions",
    title: "Common Actions",
    subtitle: "Àwọn ìṣe — verbs you can actually use",
    emoji: "🏃",
    words: [
      { id: "a1", word: "Lọ", tones: ["L"], english: "Go" },
      { id: "a2", word: "Wá", tones: ["H"], english: "Come / seek" },
      { id: "a3", word: "Jẹ", tones: ["M"], english: "Eat" },
      { id: "a4", word: "Mu", tones: ["M"], english: "Drink" },
      { id: "a5", word: "Sùn", tones: ["L"], english: "Sleep" },
      { id: "a6", word: "Jí", tones: ["H"], english: "Wake up" },
      { id: "a7", word: "Jókòó", tones: ["L", "H"], english: "Sit" },
      { id: "a8", word: "Dúró", tones: ["H", "M"], english: "Stand / wait" },
      { id: "a9", word: "Sọ̀rọ̀", tones: ["L", "L"], english: "Speak / talk" },
      { id: "a10", word: "Gbọ́", tones: ["H"], english: "Hear / listen" },
    ],
  },

  // ─────────────────────────────────────────────
  // DIRECTIONS
  // ─────────────────────────────────────────────
  {
    id: "directions",
    title: "Directions",
    subtitle: "Ọ̀nà — find your way around",
    emoji: "🧭",
    words: [
      { id: "d1", word: "Ọ̀tún", tones: ["L", "M"], english: "Right" },
      { id: "d2", word: "Òsì", tones: ["M", "L"], english: "Left" },
      { id: "d3", word: "Iwájú", tones: ["M", "H"], english: "Front / ahead" },
      { id: "d4", word: "Ẹ̀yìn", tones: ["L", "H"], english: "Behind / back" },
      { id: "d5", word: "Lókè", tones: ["L", "H"], english: "Up / above" },
      { id: "d6", word: "Lábẹ́", tones: ["L", "H"], english: "Down / underneath" },
      { id: "d7", word: "Nítòsí", tones: ["L", "M", "H"], english: "Nearby" },
      { id: "d8", word: "Jìnnà", tones: ["L", "H"], english: "Far" },
      { id: "d9", word: "Níwájú", tones: ["L", "M", "H"], english: "In front of" },
      { id: "d10", word: "Nílé", tones: ["L", "H"], english: "At home" },
    ],
  },

  // ─────────────────────────────────────────────
  // TIME
  // ─────────────────────────────────────────────
  {
    id: "time",
    title: "Time & Days",
    subtitle: "Àkókò — talk about when things happen",
    emoji: "⏰",
    words: [
      { id: "tm1", word: "Òní", tones: ["M", "H"], english: "Today" },
      { id: "tm2", word: "Àná", tones: ["L", "M"], english: "Yesterday" },
      { id: "tm3", word: "Ọ̀la", tones: ["L", "M"], english: "Tomorrow" },
      { id: "tm4", word: "Báyìí", tones: ["H", "M", "H"], english: "Now" },
      { id: "tm5", word: "Lónìí", tones: ["L", "M", "H"], english: "Today" },
      { id: "tm6", word: "Ọ̀sẹ̀", tones: ["L", "L"], english: "Week" },
      { id: "tm7", word: "Oṣù", tones: ["M", "H"], english: "Month" },
      { id: "tm8", word: "Ọdún", tones: ["L", "H"], english: "Year" },
      { id: "tm9", word: "Àkókò", tones: ["L", "H", "M"], english: "Time" },
      { id: "tm10", word: "Lẹ́yìn", tones: ["H", "H"], english: "After / behind" },
    ],
  },

  // ─────────────────────────────────────────────
  // WEATHER & NATURE
  // ─────────────────────────────────────────────
  {
    id: "nature",
    title: "Weather & Nature",
    subtitle: "Ayé wa — the world around you",
    emoji: "🌦️",
    words: [
      { id: "nt1", word: "Òjò", tones: ["M", "L"], english: "Rain" },
      { id: "nt2", word: "Oòrùn", tones: ["M", "L"], english: "Sun" },
      { id: "nt3", word: "Afẹ́fẹ́", tones: ["M", "H", "H"], english: "Wind / air" },
      { id: "nt4", word: "Àwọ̀sánmà", tones: ["L", "H", "L", "M"], english: "Cloud" },
      { id: "nt5", word: "Omi", tones: ["M", "M"], english: "Water" },
      { id: "nt6", word: "Odò", tones: ["M", "L"], english: "River" },
      { id: "nt7", word: "Òkun", tones: ["M", "M"], english: "Sea / ocean" },
      { id: "nt8", word: "Igi", tones: ["M", "M"], english: "Tree / wood" },
      { id: "nt9", word: "Odòdó", tones: ["M", "L", "H"], english: "Flower" },
      { id: "nt10", word: "Ilẹ̀", tones: ["M", "L"], english: "Earth / ground" },
    ],
  },

  // ─────────────────────────────────────────────
  // COLORS
  // ─────────────────────────────────────────────
  {
    id: "colors",
    title: "Colors",
    subtitle: "Àwọ̀ — describe the world around you",
    emoji: "🎨",
    words: [
      { id: "c1", word: "Pupa", tones: ["M", "M"], english: "Red" },
      { id: "c2", word: "Dúdú", tones: ["H", "L"], english: "Black" },
      { id: "c3", word: "Funfun", tones: ["M", "M"], english: "White" },
      { id: "c4", word: "Àwọ̀ ewé", tones: ["L", "M", "M"], english: "Green color" },
      { id: "c5", word: "Búlúù", tones: ["H", "H"], english: "Blue" },
      { id: "c6", word: "Yẹ̀lò", tones: ["L", "H"], english: "Yellow" },
      { id: "c7", word: "Àwọ̀", tones: ["L", "H"], english: "Color" },
      { id: "c8", word: "Ewé", tones: ["M", "H"], english: "Leaf" },
      { id: "c9", word: "Wúrà", tones: ["H", "M"], english: "Gold" },
      { id: "c10", word: "Fadákà", tones: ["L", "H", "L"], english: "Silver" },
    ],
  },

  // ─────────────────────────────────────────────
  // SOCIAL PHRASES
  // ─────────────────────────────────────────────
  {
    id: "social",
    title: "Useful Social Phrases",
    subtitle: "Ọ̀rọ̀ ìbánisọ̀rọ̀ — phrases for real conversations",
    emoji: "💬",
    words: [
      { id: "p1", word: "Kí ni orúkọ rẹ?", tones: ["H", "M", "M", "M", "H"], english: "What is your name?" },
      { id: "p2", word: "Orúkọ mi ni", tones: ["M", "H", "M", "M", "M"], english: "My name is" },
      { id: "p3", word: "Mo dúpẹ́", tones: ["M", "H", "H"], english: "I am grateful / thank you" },
      { id: "p4", word: "Jọ̀wọ́", tones: ["L", "H"], english: "Please" },
      { id: "p5", word: "Má bínú", tones: ["H", "L", "H"], english: "Don't be angry / sorry" },
      { id: "p6", word: "Kò sí ìṣòro", tones: ["L", "L", "L", "L"], english: "No problem" },
      { id: "p7", word: "Mo yé mi", tones: ["M", "H", "M"], english: "I understand" },
      { id: "p8", word: "Mi ò mọ̀", tones: ["M", "L", "L"], english: "I don't know" },
      { id: "p9", word: "Ṣé àlàáfíà ni?", tones: ["H", "L", "H", "M"], english: "Are you well?" },
      { id: "p10", word: "A máa rí ẹ", tones: ["M", "M", "H", "L"], english: "See you again" },
    ],
  },

  // ─────────────────────────────────────────────
  // TECHNOLOGY
  // ─────────────────────────────────────────────
  {
    id: "technology",
    title: "Technology",
    subtitle: "Ẹ̀rọ àti ìmọ̀ ẹ̀rọ — Yoruba for the digital world",
    emoji: "💻",
    words: [
      { id: "tech1", word: "Ẹ̀rọ", tones: ["L", "M"], english: "Machine / device" },
      { id: "tech2", word: "Kọ̀ǹpútà", tones: ["L", "L", "H"], english: "Computer" },
      { id: "tech3", word: "Fóònù", tones: ["H", "L"], english: "Phone" },
      { id: "tech4", word: "Ayelujara", tones: ["M", "L", "M", "M"], english: "Internet" },
      { id: "tech5", word: "Àwòrán", tones: ["L", "M", "H"], english: "Picture / image" },
      { id: "tech6", word: "Fídíò", tones: ["H", "L"], english: "Video" },
      { id: "tech7", word: "Ohùn", tones: ["M", "L"], english: "Sound / voice" },
      { id: "tech8", word: "Ifiranṣẹ́", tones: ["M", "M", "H"], english: "Message" },
      { id: "tech9", word: "Àkọọ́lẹ̀", tones: ["L", "H", "L"], english: "Account / record" },
      { id: "tech10", word: "Kọ́ǹpútà alágbèéká", tones: ["H", "L", "H", "L", "H", "L"], english: "Laptop" },
    ],
  },

  // ─────────────────────────────────────────────
  // HEALTH & WELLBEING
  // ─────────────────────────────────────────────
  {
    id: "health",
    title: "Health & Wellbeing",
    subtitle: "Ìlera — words for taking care of yourself",
    emoji: "❤️‍🩹",
    words: [
      { id: "he1", word: "Ìlera", tones: ["L", "M", "M"], english: "Health" },
      { id: "he2", word: "Dókítà", tones: ["L", "H", "L"], english: "Doctor" },
      { id: "he3", word: "Ilé ìwòsàn", tones: ["M", "L", "L", "H"], english: "Hospital" },
      { id: "he4", word: "Àìsàn", tones: ["L", "L", "H"], english: "Illness / sickness" },
      { id: "he5", word: "Ìrora", tones: ["L", "M", "M"], english: "Pain" },
      { id: "he6", word: "Oògùn", tones: ["M", "L"], english: "Medicine" },
      { id: "he7", word: "Ara rẹ̀", tones: ["M", "M", "L"], english: "Your body / yourself" },
      { id: "he8", word: "Sinmi", tones: ["M", "M"], english: "Rest" },
      { id: "he9", word: "Ṣọ́ra", tones: ["H", "M"], english: "Be careful" },
      { id: "he10", word: "Ìlera pípẹ́", tones: ["L", "M", "H", "H"], english: "Long-lasting health" },
    ],
  },

  // ─────────────────────────────────────────────
  // HOUSEHOLD OBJECTS
  // ─────────────────────────────────────────────
  {
    id: "household",
    title: "Household Objects",
    subtitle: "Àwọn ohun inú ilé — things around your home",
    emoji: "🛋️",
    words: [
      { id: "hh1", word: "Àga", tones: ["L", "M"], english: "Chair" },
      { id: "hh2", word: "Tábìlì", tones: ["H", "L", "L"], english: "Table" },
      { id: "hh3", word: "Àpótí", tones: ["L", "H", "L"], english: "Box" },
      { id: "hh4", word: "Apò", tones: ["M", "L"], english: "Bag / pocket" },
      { id: "hh5", word: "Fìtílà", tones: ["L", "L", "M"], english: "Lantern" },
      { id: "hh6", word: "Fìlà", tones: ["L", "M"], english: "Cap / hat" },
      { id: "hh7", word: "Dìnnà", tones: ["L", "H"], english: "Close / shut" },
      { id: "hh8", word: "Ṣí", tones: ["H"], english: "Open" },
      { id: "hh9", word: "Bọtini", tones: ["M", "M", "M"], english: "Button / key" },
      { id: "hh10", word: "Kànnà", tones: ["L", "M"], english: "Mattress" },
    ],
  },

  // ─────────────────────────────────────────────
  // PEOPLE & ROLES
  // ─────────────────────────────────────────────
  {
    id: "people",
    title: "People & Roles",
    subtitle: "Àwọn ènìyàn — people you meet in everyday life",
    emoji: "👥",
    words: [
      { id: "pe1", word: "Ọkùnrin", tones: ["L", "L", "M"], english: "Man" },
      { id: "pe2", word: "Obìnrin", tones: ["M", "L", "M"], english: "Woman" },
      { id: "pe3", word: "Ọmọkùnrin", tones: ["M", "L", "L", "M"], english: "Boy" },
      { id: "pe4", word: "Ọmọbìnrin", tones: ["M", "L", "L", "M"], english: "Girl" },
      { id: "pe5", word: "Aládùúgbò", tones: ["M", "H", "L", "L"], english: "Neighbour" },
      { id: "pe6", word: "Ọ̀rẹ́", tones: ["L", "H"], english: "Friend" },
      { id: "pe7", word: "Alejo", tones: ["M", "M", "M"], english: "Visitor / stranger" },
      { id: "pe8", word: "Olùkọ́", tones: ["M", "L", "H"], english: "Teacher" },
      { id: "pe9", word: "Agbẹ̀jọ́rò", tones: ["M", "L", "H", "M"], english: "Lawyer" },
      { id: "pe10", word: "Ọlọ́pàá", tones: ["M", "H", "L"], english: "Police officer" },
    ],
  },

  // ─────────────────────────────────────────────
  // DAILY ROUTINE
  // ─────────────────────────────────────────────
  {
    id: "routine",
    title: "Daily Routine",
    subtitle: "Ìṣe ojoojúmọ́ — talk about what you do every day",
    emoji: "🌅",
    words: [
      { id: "r1", word: "Dìde", tones: ["L", "M"], english: "Get up / stand up" },
      { id: "r2", word: "Wẹ̀", tones: ["L"], english: "Bathe / wash" },
      { id: "r3", word: "Wọ̀ aṣọ", tones: ["L", "M", "M"], english: "Put on clothes" },
      { id: "r4", word: "Jẹun", tones: ["M", "M"], english: "Eat food" },
      { id: "r5", word: "Lọ sí iṣẹ́", tones: ["L", "L", "M", "H"], english: "Go to work" },
      { id: "r6", word: "Padà wá", tones: ["L", "L", "H"], english: "Come back" },
      { id: "r7", word: "Sinmi", tones: ["M", "M"], english: "Rest" },
      { id: "r8", word: "Sùn", tones: ["L"], english: "Sleep" },
      { id: "r9", word: "Jí ní kutukutu", tones: ["H", "L", "M", "M", "M"], english: "Wake up early" },
      { id: "r10", word: "Ṣeré", tones: ["M", "H"], english: "Play" },
    ],
  },

  // ─────────────────────────────────────────────
  // PLACES
  // ─────────────────────────────────────────────
  {
    id: "places",
    title: "Places Around Town",
    subtitle: "Àwọn ibi — places you need to know",
    emoji: "📍",
    words: [
      { id: "pl1", word: "Bánkì", tones: ["H", "L"], english: "Bank" },
      { id: "pl2", word: "Ṣọ́ọ̀ṣì", tones: ["H", "L"], english: "Church" },
      { id: "pl3", word: "Mọ́ṣáláṣí", tones: ["H", "L", "L", "H"], english: "Mosque" },
      { id: "pl4", word: "Ilé ìwòsàn", tones: ["M", "L", "L", "H"], english: "Hospital" },
      { id: "pl5", word: "Ọjà", tones: ["M", "L"], english: "Market" },
      { id: "pl6", word: "Pàkì", tones: ["L", "L"], english: "Park" },
      { id: "pl7", word: "Ilé ìfowópamọ́", tones: ["M", "L", "L", "H", "M", "H"], english: "Financial institution / bank" },
      { id: "pl8", word: "Àdúgbò", tones: ["L", "L", "L"], english: "Neighbourhood" },
      { id: "pl9", word: "Ìlú", tones: ["L", "H"], english: "Town / city" },
      { id: "pl10", word: "Abúlé", tones: ["M", "H", "H"], english: "Village" },
    ],
  },

  // ─────────────────────────────────────────────
  // USEFUL QUESTIONS
  // ─────────────────────────────────────────────
  {
    id: "questions",
    title: "Useful Questions",
    subtitle: "Àwọn ìbéèrè — ask and understand",
    emoji: "❓",
    words: [
      { id: "q1", word: "Kí ni?", tones: ["H", "M"], english: "What is it?" },
      { id: "q2", word: "Ta ni?", tones: ["M", "M"], english: "Who is it?" },
      { id: "q3", word: "Níbo?", tones: ["L", "M"], english: "Where?" },
      { id: "q4", word: "Nígbà wo?", tones: ["L", "L", "M"], english: "When?" },
      { id: "q5", word: "Báwo?", tones: ["H", "M"], english: "How?" },
      { id: "q6", word: "Kí ló dé?", tones: ["H", "M", "H"], english: "Why?" },
      { id: "q7", word: "Mélòó?", tones: ["M", "H"], english: "How many / how much?" },
      { id: "q8", word: "Ṣé o dáa?", tones: ["H", "M", "H"], english: "Are you okay?" },
      { id: "q9", word: "Nibo ni ilé náà wà?", tones: ["L", "M", "M", "M", "L", "M"], english: "Where is that house?" },
      { id: "q10", word: "Kí ni èyí?", tones: ["H", "M", "L", "H"], english: "What is this?" },
    ],
  },

  // ─────────────────────────────────────────────
  // COMMON EXPRESSIONS
  // ─────────────────────────────────────────────
  {
    id: "expressions",
    title: "Common Expressions",
    subtitle: "Àwọn ọ̀rọ̀ pàtàkì — phrases worth knowing",
    emoji: "✨",
    words: [
      { id: "x1", word: "Ó dáa", tones: ["M", "H"], english: "It is good / okay" },
      { id: "x2", word: "Ó yé mi", tones: ["M", "H", "M"], english: "I understand" },
      { id: "x3", word: "Mi ò mọ̀", tones: ["M", "L", "L"], english: "I don't know" },
      { id: "x4", word: "Mo mọ̀", tones: ["M", "L"], english: "I know" },
      { id: "x5", word: "Mo fẹ́", tones: ["M", "H"], english: "I want / I love" },
      { id: "x6", word: "Mi ò fẹ́", tones: ["M", "L", "H"], english: "I don't want" },
      { id: "x7", word: "Ẹ jọ̀ọ́", tones: ["M", "L", "H"], english: "Please" },
      { id: "x8", word: "Ẹ kú iṣẹ́", tones: ["M", "H", "H"], english: "Well done / greetings for your work" },
      { id: "x9", word: "Àṣeyọrí", tones: ["L", "M", "H", "H"], english: "Success" },
      { id: "x10", word: "Ọlọ́run á bù kún ọ", tones: ["M", "H", "L", "H", "L", "M"], english: "May God bless you" },
    ],
  },
];