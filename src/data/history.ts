import { Ionicons } from "@expo/vector-icons";

export type StoryIconName = keyof typeof Ionicons.glyphMap;

export interface HistoryStory {
  id: string;
  title: string;
  era: string;
  summary: string;
  emoji: string;
  iconName?: StoryIconName;
  body: string[];
  quote?: string;
  sourceNote?: string;
}

export const historyStories: HistoryStory[] = [
  {
    id: "ile-ife",
    title: "Ilé-Ifẹ̀: The Sacred City",
    era: "c. 350 BCE – present",
    summary:
      "The ancient city at the heart of Yoruba civilization, sacred tradition, kingship, and one of Africa's greatest artistic traditions.",
    emoji: "🏺",
    iconName: "library-outline",
    quote:
      "For the Yoruba, Ifẹ̀ is not simply an old city. It is a place where history, memory, kingship, art, and sacred tradition meet.",
    sourceNote:
      "Archaeological evidence places occupation at Ifẹ̀ as early as about 350 BCE, while Yoruba oral traditions describe it as the sacred centre from which humanity and Yoruba kingship emerged.",
    body: [
      "Long before modern Nigeria existed, communities were already living in the forest and savanna zones of what is now southwestern Nigeria. Among the places that would become especially important was Ilé-Ifẹ̀, usually shortened to Ifẹ̀. Archaeological evidence indicates that people occupied the Ifẹ̀ area from at least around 350 BCE, although the city developed over many centuries.",
      
      "The historical importance of Ifẹ̀ cannot be understood through archaeology alone. Yoruba oral traditions place the city at the centre of creation itself. In these traditions, Olódùmarè is the supreme creator, while figures such as Odùduwà and Ọ̀bàtálá play important roles in the establishment of the world and human society. Different traditions tell the story differently, and these variations are part of Yoruba intellectual and religious history rather than a problem that needs to be reduced to one single version.",
      
      "One famous account describes a world covered by water. Odùduwà descends carrying earth, a bird, and other sacred objects, and the earth is spread across the waters. Other accounts give Ọ̀bàtálá a central role in shaping human beings from clay. These stories explain more than physical creation. They also explain why Ifẹ̀ became associated with legitimate kingship, sacred authority, ancestry, and the organization of human society.",
      
      "The archaeological record tells another part of the story. Between roughly the first millennium CE and the medieval period, Ifẹ̀ developed into a major urban centre. Roads, compounds, walls, shrines, courtyards, domestic spaces, and other evidence demonstrate a complex society rather than a small isolated settlement.",
      
      "Between approximately the twelfth and fifteenth centuries, Ifẹ̀ became famous for extraordinary sculpture. Artists produced remarkably naturalistic heads and figures in terracotta, stone, and copper-alloy materials. The technical skill of these works is one of the strongest pieces of evidence for the sophistication of medieval Yoruba urban culture.",
      
      "When European scholars encountered some of these sculptures in the early twentieth century, their assumptions about African history shaped their interpretation. Some struggled to accept that such naturalistic works had been produced by African artists. Archaeology and art history eventually established the African context of the works, helping overturn older racist assumptions about African civilization.",
      
      "Ifẹ̀ was also connected to wider networks. Its position in the forest zone gave it access to agricultural communities, rivers, trade routes, and regions farther north. The city therefore belonged to a wider world of movement, exchange, craft production, political relationships, and religious connections.",
      
      "The importance of Ifẹ̀ continued beyond its medieval artistic peak. Yoruba royal traditions in many regions preserve relationships with Ifẹ̀ and Odùduwà. Some kingdoms trace their royal ancestry to figures associated with the city. These traditions helped create a shared cultural framework across communities that were politically independent from one another.",
      
      "It is important, however, not to imagine the Yoruba as a single centralized empire that simply expanded outward from Ifẹ̀. Yoruba history developed through many kingdoms, towns, communities, families, trade networks, religious institutions, and political relationships. Ifẹ̀ became a powerful symbolic centre, but Yoruba society was always more diverse than one city.",
      
      "Today, Ifẹ̀ remains one of the most important historical and spiritual centres of Yoruba culture. Its archaeological remains, royal institutions, artistic traditions, and oral histories allow us to see how religion, politics, art, ancestry, and urban life became intertwined over many centuries."
    ],
  },

  {
    id: "yoruba-kingdoms",
    title: "The Kingdoms of Yorùbáland",
    era: "Medieval period – 1800s",
    summary:
      "Yoruba history was shaped by many powerful kingdoms rather than one single state.",
    emoji: "👑",
    iconName: "people-outline",
    quote:
      "Yorùbáland was a world of kingdoms: connected by language, ancestry, trade and religion, yet often politically independent.",
    sourceNote:
      "Historical and archaeological evidence describes numerous Yoruba-speaking kingdoms and urban centres, including Ifẹ̀, Ọ̀yọ́, Ìjẹ̀bú, Ọ̀wọ̀, Èkìtì, Ondo and others.",
    body: [
      "The word 'Yoruba' can sometimes create the impression that there was one ancient Yoruba kingdom ruling an enormous territory. The historical reality was considerably more complicated. Yorùbáland developed as a collection of kingdoms, towns, settlements, families and political communities that shared important cultural and linguistic traditions while maintaining their own rulers and institutions.",
      
      "Among these political centres were Ifẹ̀, Ọ̀yọ́, Ìjẹ̀bú, Ọ̀wọ̀, Ondo, Ìjẹ̀ṣà, Èkìtì and numerous other communities. Each developed its own history. Some were monarchies with powerful royal courts; others were organized around councils, chiefs, age groups, guilds, religious institutions and influential families.",
      
      "Kingship was important throughout many Yoruba societies, but a Yoruba king was rarely simply an unrestricted ruler. Political authority was distributed among palace officials, chiefs, religious authorities, lineage heads and other institutions. The exact balance differed from kingdom to kingdom.",
      
      "The royal palace was not only a political building. It could also be a religious and cultural centre. Royal ceremonies connected rulers to ancestors, deities, founding traditions and the wider community. Beaded crowns, staffs, textiles, drums, carved objects and other regalia communicated political and spiritual authority.",
      
      "Trade connected the kingdoms. Farmers produced food, hunters supplied forest products, craftsmen produced tools and artistic objects, while traders moved goods between different ecological zones. Rivers, roads and market towns allowed people and commodities to travel across considerable distances.",
      
      "Craft specialization became particularly important. Blacksmiths worked iron, woodcarvers produced masks and ritual objects, weavers created textiles, leatherworkers produced clothing and equipment, and brass and copper-alloy specialists created prestigious objects for courts and religious institutions.",
      
      "The relationship between neighbouring kingdoms was not always peaceful. Political alliances, marriages, trade agreements and diplomacy existed alongside warfare. Kingdoms competed over territory, trade routes, political influence and access to resources.",
      
      "This political diversity is one reason Yoruba history cannot be reduced to a simple story of one empire. The history of the region is better understood as a network of communities that interacted continuously while developing distinctive local identities.",
      
      "The connections between the kingdoms were nevertheless real. Shared language, oral traditions, religious concepts, artistic styles and claims of ancestry created a sense of cultural relationship. Many royal traditions connected their origins to the sacred history of Ifẹ̀.",
      
      "By the nineteenth century, warfare and political upheaval transformed the region dramatically. The collapse of old political structures, conflicts within Yorùbáland, the expansion of the Sokoto Caliphate into neighbouring regions and the increasing involvement of European powers created a new political era."
    ],
  },

  {
    id: "oyo-empire",
    title: "Ọ̀yọ́: The Empire of the Savanna",
    era: "c. 1600s – 1800s",
    summary:
      "A powerful Yoruba empire whose political institutions, cavalry and trade networks made it one of West Africa's major states.",
    emoji: "🐎",
    iconName: "earth-outline",
    quote:
      "Ọ̀yọ́ became powerful not simply because it had soldiers, but because it developed institutions capable of organizing a large and diverse political system.",
    sourceNote:
      "Old Ọ̀yọ́ developed into a major political power in the savanna region north of the forest belt. Its ruins demonstrate the scale of the former settlement and its defensive infrastructure.",
    body: [
      "Among the most powerful states associated with Yoruba history was the Ọ̀yọ́ Empire. Its political centre eventually became known as Old Ọ̀yọ́, located in the savanna north of the modern city of Ọ̀yọ́.",
      
      "Ọ̀yọ́'s environment helped shape its history. Unlike the dense forest farther south, the savanna made it more practical to maintain horses. Cavalry therefore became an important part of Ọ̀yọ́'s military strength.",
      
      "Horses were expensive and vulnerable to diseases in parts of West Africa, which made cavalry a specialized military resource. Ọ̀yọ́ was able to use mounted soldiers effectively in the northern regions where the environment was more favourable to them.",
      
      "Military power, however, was only part of the empire's strength. Ọ̀yọ́ developed a sophisticated political system around the Aláàfin, the emperor or king. The Aláàfin was surrounded by officials and powerful chiefs who played major roles in administering the state.",
      
      "One of the most important institutions was the Ọ̀yọ́ Mèsì, a council of senior chiefs. The relationship between the Aláàfin and the chiefs created a political balance that prevented royal authority from being entirely unrestricted.",
      
      "The Bashorun, one of the most powerful officials, played a central role in the political system. The state therefore depended upon negotiation between the palace and other political institutions rather than simply on the personal wishes of the king.",
      
      "Ọ̀yọ́ also benefited from trade. Its location allowed it to connect the northern savanna with the forest regions farther south. Goods, horses, textiles, food products and other commodities moved through networks linking different peoples and markets.",
      
      "The empire extended influence beyond the immediate Ọ̀yọ́ heartland. At different times its political and military influence reached into parts of present-day southwestern Nigeria and neighbouring areas of what are now Benin and Togo.",
      
      "The empire was not permanently stable. Political disagreements, succession struggles, military pressures and changing economic conditions gradually weakened the old system. During the nineteenth century, Ọ̀yọ́ experienced severe disruption.",
      
      "The abandonment of Old Ọ̀yọ́ around the late 1830s marked the end of an important phase of the city's history. Archaeological remains reveal an enormous settlement with walls, compounds, wells, reservoirs and other infrastructure.",
      
      "The fall of Old Ọ̀yọ́ did not mean the disappearance of Yoruba civilization. People moved, new political centres emerged, and other Yoruba states continued to develop. The history of Ọ̀yọ́ is therefore not simply a story of rise and fall, but one chapter in a much larger history of political transformation."
    ],
  },

  {
    id: "orisa-ifa",
    title: "Òrìṣà, Ifá & Yoruba Thought",
    era: "Ancient tradition – present",
    summary:
      "A living intellectual and spiritual tradition built around divinity, destiny, morality, ancestry and the relationship between humanity and the world.",
    emoji: "🪶",
    iconName: "sparkles-outline",
    quote:
      "Yoruba spirituality is not only about worship. It is also a way of thinking about character, destiny, responsibility, community and the natural world.",
    sourceNote:
      "UNESCO inscribed the Ifá divination system on the Representative List of the Intangible Cultural Heritage of Humanity in 2008.",
    body: [
      "Yoruba religious thought developed over centuries and contains many different traditions. There is no single text that captures every Yoruba religious belief. Instead, knowledge has been transmitted through oral literature, ritual, music, poetry, priestly training, family traditions and community practice.",
      
      "At the highest level is Olódùmarè, understood as the supreme source and creator. Below this level are numerous Òrìṣà, divine powers associated with different aspects of existence. Their roles vary across communities and traditions.",
      
      "Ògún is associated with iron, technology, work, hunting and warfare. Ṣàngó is associated with thunder, lightning and royal power. Ọ̀ṣun is strongly connected with rivers, fertility, beauty and social relationships. Yemoja is associated with motherhood and water in many traditions, although specific traditions vary by region.",
      
      "The Òrìṣà should not be understood simply as a list of equivalent 'gods' in the way modern categories might suggest. Yoruba religious thought contains complex ideas about divine power, nature, ancestors, destiny and the relationship between visible and invisible worlds.",
      
      "One of the most intellectually important systems is Ifá. Ifá is a divination and knowledge tradition associated with Ọ̀rúnmìlà. Its corpus contains thousands of verses, stories, proverbs and teachings transmitted through specialist training.",
      
      "A trained diviner, traditionally known as a babaláwo, interprets an Ifá consultation through established patterns known as odù. The process is not simply fortune-telling. The verses can contain moral instruction, historical memory, philosophical ideas, warnings and practical guidance.",
      
      "One of the recurring concepts in Yoruba thought is ìwà, often translated in contexts as character or moral being. Good character is not merely an internal feeling. It is demonstrated through conduct, relationships, responsibility and the way a person lives within society.",
      
      "Ancestor traditions also play an important role in many Yoruba communities. The dead may remain part of the moral and social memory of the living. Family histories, names, rituals and festivals preserve connections across generations.",
      
      "Religious practice changed as Yoruba communities encountered Islam and Christianity. Many Yoruba people today are Muslim or Christian, while others maintain traditional religious practices. Some people also combine elements of different traditions.",
      
      "The tradition also travelled beyond Africa. Through the Atlantic slave trade, Yoruba religious ideas, names, songs, ritual forms and sacred concepts reached the Caribbean and the Americas. They later became important components of traditions such as Candomblé in Brazil and Regla de Ocha in Cuba.",
      
      "UNESCO recognizes the Ifá divination system as intangible cultural heritage. Its survival demonstrates how a knowledge system can remain alive even while the societies around it undergo enormous political, technological and religious changes."
    ],
  },

  {
    id: "language",
    title: "Yorùbá: A Language That Carries Memory",
    era: "Language – present",
    summary:
      "How tone, proverbs, praise poetry, names, music and oral performance allow Yoruba language to carry history across generations.",
    emoji: "🎶",
    iconName: "musical-notes-outline",
    body: [
      "Yorùbá is much more than a method of everyday communication. For generations, language has carried history, philosophy, family memory, humour, political criticism, praise and religious knowledge.",
      
      "One of its most important features is tone. Standard Yoruba distinguishes three primary tone levels: high, mid and low. Tone is meaningful, which means that changing the pitch pattern of a word can change its meaning.",
      
      "This is why written Yoruba uses tone marks. The marks are not decoration. They help learners distinguish words and phrases that may otherwise look identical when written without tone.",
      
      "Yoruba also makes extensive use of proverbs. A proverb can compress a complicated social observation into a few words. Elders traditionally used proverbs to teach younger people, settle disagreements, explain behaviour and communicate wisdom without making every lesson explicit.",
      
      "Praise poetry is another important tradition. Oríkì can preserve the names, qualities, achievements and histories associated with individuals, families, towns, kings and other communities.",
      
      "Music and language are deeply connected. The dùndún talking drum can imitate aspects of Yoruba speech because the language's tonal structure gives speech a distinctive pitch pattern. Skilled drummers can use rhythmic and tonal patterns to communicate praise, greetings and other messages.",
      
      "Names also carry meaning. Yoruba names may refer to circumstances surrounding birth, family hopes, religious beliefs, gratitude, destiny or important events. A name can therefore preserve a piece of family history.",
      
      "Yoruba literature expanded dramatically in written form during the nineteenth and twentieth centuries. Missionaries, educators, intellectuals and Yoruba writers contributed to the development of standardized writing, dictionaries, translations and literary works.",
      
      "The language has continued to change. Urbanization, education, migration, radio, television, music and the internet have created new forms of Yoruba expression. Younger speakers move naturally between Yoruba, English, Nigerian Pidgin and other languages depending on context.",
      
      "Learning Yoruba therefore means learning more than vocabulary. It means learning how tone works, how respect is expressed, how proverbs are constructed, how names communicate meaning and how language reflects relationships between people."
    ],
  },

  {
    id: "diaspora-colonial",
    title: "War, Colonialism & the Diaspora",
    era: "1800s – present",
    summary:
      "The nineteenth century transformed Yorùbáland through warfare, migration, Christianity, Islam, colonial conquest and the forced movement of people across the Atlantic.",
    emoji: "🌍",
    iconName: "earth-outline",
    body: [
      "The nineteenth century was one of the most disruptive periods in Yoruba history. Older political structures were weakened by internal conflicts, wars between neighbouring states and wider changes taking place across West Africa.",
      
      "The collapse of Old Ọ̀yọ́ created large movements of people. Refugees established or strengthened new settlements, while existing cities became centres of military and political competition.",
      
      "One of the major conflicts of the century was the long series of Yoruba civil wars commonly grouped under the term Kiriji War. These conflicts involved different Yoruba political communities and lasted for many years before the intervention of external political forces helped bring them toward an end.",
      
      "At the same time, Islam was expanding through parts of the region. Christian missionaries also established schools, churches and printing operations, especially in southern Yoruba communities. These new institutions profoundly changed education and literacy.",
      
      "Christianity and Islam did not simply erase older Yoruba culture. Yoruba people interpreted the new religions through their own social worlds. Names, language, music, family structures, political institutions and cultural practices continued to evolve.",
      
      "European imperial expansion eventually transformed the political map. British forces and administrators progressively established control over Yoruba territories, and by the beginning of the twentieth century most of Yorùbáland had been incorporated into British colonial Nigeria.",
      
      "Colonial rule introduced new administrative boundaries that did not always correspond to older political or cultural boundaries. The modern map of Nigeria was therefore not a simple reflection of the political geography that existed before colonial conquest.",
      
      "The Atlantic slave trade had already carried large numbers of people from the region to the Americas. Among those transported were people from Yoruba-speaking communities as well as neighbouring societies. Their descendants preserved elements of language, music, naming practices, religious concepts and ritual traditions despite the violence of enslavement.",
      
      "In Brazil, Cuba and other parts of the Americas, Yoruba-derived religious traditions developed under new conditions. Names and concepts associated with Òrìṣà became part of living religious systems. In Cuba, for example, traditions commonly associated with Regla de Ocha preserved important Yoruba religious vocabulary and ritual structures.",
      
      "The twentieth century brought new forms of Yoruba cultural expression. Writers, politicians, musicians, academics and religious leaders used Yoruba language and cultural ideas in new ways. Urbanization connected cities such as Lagos and Ibadan to increasingly global networks.",
      
      "Modern Yoruba identity is therefore not a frozen inheritance from the past. It is a living identity shaped by ancient traditions, medieval kingdoms, Islamic and Christian influences, colonialism, migration, technology, popular music, literature and global communication.",
      
      "From Ifẹ̀ to Ọ̀yọ́, from village compounds to modern cities, and from West Africa to the Caribbean and South America, Yoruba history is ultimately a history of continuity through change."
    ],
  },
];