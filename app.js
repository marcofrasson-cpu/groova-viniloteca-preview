const STORAGE_KEY = "viniloteca.collection.v1";
const COLLECTION_BACKUP_KEY = "viniloteca.collection.backups.v1";
const COLLECTION_MIRROR_KEY = "viniloteca.collection.mirror.v1";
const COLLECTION_ARCHIVE_KEY = "viniloteca.collection.archive.v1";
const NEWS_STORAGE_KEY = "viniloteca.news.v1";
const PROFILE_STORAGE_KEY = "viniloteca.profile.v1";
const SOCIAL_FEED_STORAGE_KEY = "viniloteca.socialFeed.v1";
const FOLLOWING_STORAGE_KEY = "viniloteca.following.v1";
const SOCIAL_STATE_STORAGE_KEY = "groova.socialState.v1";
const COVER_CACHE_STORAGE_KEY = "viniloteca.coverCache.v1";
const WISHLIST_STORAGE_KEY = "groova.wishlist.v1";
const RECOMMENDATION_FEEDBACK_STORAGE_KEY = "groova.recommendationFeedback.v1";
const SOCIAL_CURRENT_USER_ID = "current-user";
const SOCIAL_STATE_VERSION = 1;
const APP_STORAGE_KEYS = [
  STORAGE_KEY,
  NEWS_STORAGE_KEY,
  PROFILE_STORAGE_KEY,
  SOCIAL_FEED_STORAGE_KEY,
  FOLLOWING_STORAGE_KEY,
  SOCIAL_STATE_STORAGE_KEY,
  COVER_CACHE_STORAGE_KEY
];

const defaultProfile = {
  name: "Novo colecionador",
  handle: "meu_acervo",
  focus: "coleção em construção",
  ritual: "escuta sem pressa",
  bio: "Perfil recém-criado para catalogar discos, registrar audições e descobrir o próximo LP com mais critério."
};

const recommendationPool = [
  {
    title: "Blue Train",
    artist: "John Coltrane",
    year: 1958,
    genre: "Jazz",
    style: "hard bop",
    country: "EUA",
    styles: ["hard bop", "modal jazz", "Blue Note"],
    moods: ["orgânico", "intenso"],
    scenes: ["Blue Note", "Jazz 50s"],
    bridgeFrom: ["Hip-Hop", "Soul", "Jazz"],
    goodForCollectionsWith: ["Miles Davis", "Herbie Hancock", "A Tribe Called Quest", "Kendrick Lamar"],
    gapForCollectionsMissing: ["Jazz", "Hard bop"],
    avoidIfOverrepresented: ["Jazz clássico"],
    pressing: "Blue Note Classic Vinyl",
    reason: "Bom próximo passo se você gosta da clareza modal de Miles, mas quer mais ataque de sax e bateria.",
    tags: ["jazz", "blue note", "essencial"],
    coverSeed: 24
  },
  {
    title: "Expresso 2222",
    artist: "Gilberto Gil",
    year: 1972,
    genre: "MPB",
    style: "tropicália",
    country: "Brasil",
    styles: ["tropicalismo", "MPB 70s", "samba"],
    moods: ["solar", "orgânico", "brasileiro"],
    scenes: ["MPB 70s", "Tropicalismo"],
    bridgeFrom: ["MPB", "Samba", "Soul", "Rock"],
    goodForCollectionsWith: ["Jorge Ben", "Clube da Esquina", "Caetano Veloso"],
    gapForCollectionsMissing: ["Tropicalismo", "MPB brasileira"],
    avoidIfOverrepresented: ["MPB 70s"],
    pressing: "Reedição nacional",
    reason: "Conversa bem com Clube da Esquina e Jorge Ben por misturar canção brasileira, violão e invenção rítmica.",
    tags: ["brasil", "tropicália"],
    coverSeed: 58
  },
  {
    title: "Remain in Light",
    artist: "Talking Heads",
    year: 1980,
    genre: "Rock",
    style: "new wave funk",
    country: "EUA",
    styles: ["new wave", "art rock", "funk"],
    moods: ["dançante", "experimental", "nervoso"],
    scenes: ["New Wave", "Art Rock", "Pós-punk"],
    bridgeFrom: ["Rock", "Funk", "Eletrônica"],
    goodForCollectionsWith: ["Talking Heads", "Radiohead", "Fela Kuti", "David Bowie"],
    gapForCollectionsMissing: ["Pós-punk", "Art Rock", "Funk"],
    avoidIfOverrepresented: ["Rock clássico"],
    pressing: "Reedição 180g",
    reason: "Liga a coleção de rock clássico a grooves mais experimentais e abre caminho para afrobeat e pós-punk.",
    tags: ["groove", "produção"],
    coverSeed: 83
  },
  {
    title: "Mezzanine",
    artist: "Massive Attack",
    year: 1998,
    genre: "Eletrônica",
    style: "trip-hop",
    country: "Reino Unido",
    styles: ["trip-hop", "downtempo", "eletrônica"],
    moods: ["noturno", "grave", "cinematográfico"],
    scenes: ["Trip-hop", "Bristol", "Eletrônica 90s"],
    bridgeFrom: ["Hip-Hop", "Eletrônica", "Soul"],
    goodForCollectionsWith: ["Portishead", "Dummy", "Aphex Twin", "Burial"],
    gapForCollectionsMissing: ["Trip-hop", "Eletrônica"],
    avoidIfOverrepresented: ["Trip-hop"],
    pressing: "Duplo LP",
    reason: "Se Dummy funciona na sua estante, este é um complemento natural para testar graves, atmosfera e pressão.",
    tags: ["grave", "noturno"],
    coverSeed: 96
  },
  {
    title: "What's Going On",
    artist: "Marvin Gaye",
    year: 1971,
    genre: "Soul",
    style: "soul orquestral",
    country: "EUA",
    styles: ["soul", "soul orquestral", "Motown"],
    moods: ["orgânico", "caloroso", "político"],
    scenes: ["Soul 70s", "Motown"],
    bridgeFrom: ["Hip-Hop", "Funk", "MPB", "Jazz"],
    goodForCollectionsWith: ["Stevie Wonder", "D'Angelo", "Tim Maia", "Kendrick Lamar"],
    gapForCollectionsMissing: ["Soul", "Funk"],
    avoidIfOverrepresented: ["Soul 70s"],
    pressing: "Motown reissue",
    reason: "Uma lacuna forte se a coleção ainda tem pouco soul; produção quente e letras centrais.",
    tags: ["soul", "clássico"],
    coverSeed: 37
  },
  {
    title: "Construção",
    artist: "Chico Buarque",
    year: 1971,
    genre: "MPB",
    style: "canção brasileira",
    country: "Brasil",
    styles: ["MPB 70s", "canção brasileira", "arranjo orquestral"],
    moods: ["dramático", "literário", "brasileiro"],
    scenes: ["MPB 70s", "Canção brasileira"],
    bridgeFrom: ["MPB", "Tropicalismo", "Samba"],
    goodForCollectionsWith: ["Chico Buarque", "Milton Nascimento", "Caetano Veloso"],
    gapForCollectionsMissing: ["MPB brasileira", "Canção brasileira"],
    avoidIfOverrepresented: ["MPB 70s"],
    pressing: "Nacional",
    reason: "Para aprofundar MPB dos anos 70 com arranjos densos e composição mais narrativa.",
    tags: ["brasil", "letra"],
    coverSeed: 12
  },
  {
    title: "Songs in the Key of Life",
    artist: "Stevie Wonder",
    year: 1976,
    genre: "Soul",
    style: "soul funk",
    country: "EUA",
    styles: ["soul", "funk", "soul 70s"],
    moods: ["caloroso", "dançante", "expansivo"],
    scenes: ["Soul 70s", "Motown"],
    bridgeFrom: ["Soul", "Funk", "MPB", "Hip-Hop"],
    goodForCollectionsWith: ["Marvin Gaye", "D'Angelo", "Tim Maia"],
    gapForCollectionsMissing: ["Soul", "Funk"],
    avoidIfOverrepresented: ["Soul 70s"],
    pressing: "Duplo LP",
    reason: "Traz soul, funk e pop em escala grande, ótimo contraponto para uma estante centrada em rock e MPB.",
    tags: ["soul", "funk"],
    coverSeed: 41
  },
  {
    title: "In Rainbows",
    artist: "Radiohead",
    year: 2007,
    genre: "Rock",
    style: "art rock",
    country: "Reino Unido",
    styles: ["art rock", "alternative rock", "eletrônica discreta"],
    moods: ["noturno", "melódico", "moderno"],
    scenes: ["Rock 2000s", "Art Rock"],
    bridgeFrom: ["Rock", "Eletrônica", "Pós-punk"],
    goodForCollectionsWith: ["Radiohead", "Talking Heads", "Aphex Twin"],
    gapForCollectionsMissing: ["Art Rock", "Rock moderno"],
    avoidIfOverrepresented: ["Rock alternativo"],
    pressing: "XL Recordings",
    reason: "Boa ponte entre rock de guitarras, eletrônica discreta e gravação moderna.",
    tags: ["produção", "moderno"],
    coverSeed: 68
  },
  {
    title: "Head Hunters",
    artist: "Herbie Hancock",
    year: 1973,
    genre: "Jazz",
    style: "jazz funk",
    country: "EUA",
    styles: ["jazz funk", "fusion", "funk"],
    moods: ["dançante", "elétrico", "groove"],
    scenes: ["Jazz-funk", "Fusion", "Jazz 70s"],
    bridgeFrom: ["Jazz", "Funk", "Soul", "Hip-Hop"],
    goodForCollectionsWith: ["Miles Davis", "Stevie Wonder", "A Tribe Called Quest"],
    gapForCollectionsMissing: ["Jazz", "Funk", "Fusion"],
    avoidIfOverrepresented: ["Jazz-funk"],
    pressing: "Reedição",
    reason: "Expande jazz para uma área mais elétrica, dançante e cheia de timbres de teclado.",
    tags: ["jazz", "funk"],
    coverSeed: 77
  },
  {
    title: "good kid, m.A.A.d city",
    artist: "Kendrick Lamar",
    year: 2012,
    genre: "Hip-Hop",
    style: "west coast hip-hop",
    country: "EUA",
    styles: ["west coast hip-hop", "rap narrativo", "Hip-Hop 2010s"],
    moods: ["cinematográfico", "narrativo", "moderno"],
    scenes: ["Hip-Hop 2010s", "West Coast Rap"],
    bridgeFrom: ["Hip-Hop", "Soul", "Jazz"],
    goodForCollectionsWith: ["Kendrick Lamar", "Drake", "Nas", "Eminem"],
    gapForCollectionsMissing: ["Hip-Hop narrativo"],
    avoidIfOverrepresented: ["Hip-Hop 2010s", "Kendrick Lamar"],
    pressing: "Duplo LP",
    reason: "Recomendação forte quando a coleção aponta para rap narrativo, produção moderna e discos conceituais.",
    tags: ["hip-hop", "rap", "conceitual", "produção", "moderno"],
    coverSeed: 31
  },
  {
    title: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    year: 2015,
    genre: "Hip-Hop",
    style: "jazz rap",
    country: "EUA",
    styles: ["jazz rap", "funk", "neo soul", "rap político"],
    moods: ["orgânico", "denso", "conceitual"],
    scenes: ["Hip-Hop 2010s", "Jazz Rap", "Neo Soul"],
    bridgeFrom: ["Hip-Hop", "Jazz", "Soul", "Funk"],
    goodForCollectionsWith: ["Kendrick Lamar", "D'Angelo", "Herbie Hancock", "A Tribe Called Quest"],
    gapForCollectionsMissing: ["Jazz", "Soul", "Funk"],
    avoidIfOverrepresented: ["Kendrick Lamar", "Hip-Hop 2010s"],
    pressing: "Duplo LP",
    reason: "Conecta Hip-Hop com jazz, funk e soul; bom passo quando o radar quer rap com arranjos densos.",
    tags: ["hip-hop", "jazz", "funk", "soul", "conceitual"],
    coverSeed: 32
  },
  {
    title: "Madvillainy",
    artist: "Madvillain",
    year: 2004,
    genre: "Hip-Hop",
    style: "abstract hip-hop",
    country: "EUA",
    styles: ["abstract hip-hop", "sample", "underground hip-hop"],
    moods: ["fragmentado", "lo-fi", "inventivo"],
    scenes: ["Underground Hip-Hop", "Stones Throw"],
    bridgeFrom: ["Hip-Hop", "Jazz", "Soul"],
    goodForCollectionsWith: ["MF DOOM", "J Dilla", "A Tribe Called Quest", "JPEGMAFIA"],
    gapForCollectionsMissing: ["Underground Hip-Hop", "Sample"],
    avoidIfOverrepresented: ["abstract hip-hop"],
    pressing: "Stones Throw",
    reason: "Para quem quer sample, textura de vinil e rap de colagem com alta recompensa em audições repetidas.",
    tags: ["hip-hop", "sample", "underground", "produção"],
    coverSeed: 33
  },
  {
    title: "Illmatic",
    artist: "Nas",
    year: 1994,
    genre: "Hip-Hop",
    style: "east coast hip-hop",
    country: "EUA",
    styles: ["east coast hip-hop", "boom bap", "rap clássico"],
    moods: ["urbano", "direto", "clássico"],
    scenes: ["East Coast Rap", "Hip-Hop 90s"],
    bridgeFrom: ["Hip-Hop", "Jazz"],
    goodForCollectionsWith: ["Nas", "Eminem", "Kendrick Lamar", "A Tribe Called Quest"],
    gapForCollectionsMissing: ["Hip-Hop 90s", "Boom bap"],
    avoidIfOverrepresented: ["Hip-Hop 90s"],
    pressing: "Reedição",
    reason: "Clássico essencial para estruturar uma seção de Hip-Hop físico sem depender só de lançamentos recentes.",
    tags: ["hip-hop", "rap", "clássico", "1990s"],
    coverSeed: 34
  },
  {
    title: "The Low End Theory",
    artist: "A Tribe Called Quest",
    year: 1991,
    genre: "Hip-Hop",
    style: "jazz rap",
    country: "EUA",
    styles: ["jazz rap", "boom bap", "groove"],
    moods: ["relaxado", "orgânico", "baixo presente"],
    scenes: ["Jazz Rap", "Native Tongues", "Hip-Hop 90s"],
    bridgeFrom: ["Hip-Hop", "Jazz", "Soul"],
    goodForCollectionsWith: ["A Tribe Called Quest", "Kendrick Lamar", "Herbie Hancock", "Nas"],
    gapForCollectionsMissing: ["Jazz Rap", "Hip-Hop 90s"],
    avoidIfOverrepresented: ["Jazz Rap"],
    pressing: "Reedição",
    reason: "Boa ponte entre baixo, jazz e rap quando sua coleção começa a puxar para groove e audição relaxada.",
    tags: ["hip-hop", "jazz", "groove", "baixo"],
    coverSeed: 35
  },
  {
    title: "Swimming",
    artist: "Mac Miller",
    year: 2018,
    genre: "Hip-Hop",
    style: "alternative hip-hop",
    country: "EUA",
    styles: ["alternative hip-hop", "neo soul", "rap introspectivo"],
    moods: ["introspectivo", "melódico", "caloroso"],
    scenes: ["Hip-Hop 2010s", "Alternative Hip-Hop"],
    bridgeFrom: ["Hip-Hop", "Soul", "R&B"],
    goodForCollectionsWith: ["Mac Miller", "Frank Ocean", "Tyler, The Creator"],
    gapForCollectionsMissing: ["Alternative Hip-Hop", "Neo Soul"],
    avoidIfOverrepresented: ["Mac Miller", "Hip-Hop 2010s"],
    pressing: "Warner",
    reason: "Se você está cadastrando Mac Miller ou rap introspectivo, este é um eixo natural para expandir a coleção.",
    tags: ["hip-hop", "mac miller", "introspectivo", "moderno"],
    coverSeed: 36
  },
  {
    title: "Circles",
    artist: "Mac Miller",
    year: 2020,
    genre: "Hip-Hop",
    style: "alternative hip-hop",
    pressing: "Warner",
    reason: "Complementa Swimming com uma escuta mais melódica e recente, útil para coleções puxando para os anos 2020.",
    tags: ["hip-hop", "mac miller", "2020s", "melódico"],
    coverSeed: 38
  },
  {
    title: "IGOR",
    artist: "Tyler, The Creator",
    year: 2019,
    genre: "Hip-Hop",
    style: "neo soul rap",
    pressing: "Columbia",
    reason: "Boa recomendação quando Hip-Hop, soul e produção autoral aparecem juntos no perfil.",
    tags: ["hip-hop", "soul", "produção", "moderno"],
    coverSeed: 39
  },
  {
    title: "Sometimes I Might Be Introvert",
    artist: "Little Simz",
    year: 2021,
    genre: "Hip-Hop",
    style: "uk hip-hop",
    pressing: "Age 101",
    reason: "Excelente próxima compra para uma coleção recente que busca rap com ambição orquestral e narrativa.",
    tags: ["hip-hop", "2020s", "orquestral", "rap"],
    coverSeed: 42
  },
  {
    title: "LP!",
    artist: "JPEGMAFIA",
    year: 2021,
    genre: "Hip-Hop",
    style: "experimental hip-hop",
    pressing: "EQT",
    reason: "Indicado quando a coleção aceita produção mais abrasiva, experimental e contemporânea.",
    tags: ["hip-hop", "experimental", "2020s", "produção"],
    coverSeed: 43
  },
  {
    title: "Ctrl",
    artist: "SZA",
    year: 2017,
    genre: "Soul",
    style: "alternative R&B",
    pressing: "RCA",
    reason: "Abre uma trilha de R&B moderno ao lado de Hip-Hop recente e discos de vocal mais íntimo.",
    tags: ["r&b", "soul", "moderno", "vocal"],
    coverSeed: 45
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    year: 2016,
    genre: "Soul",
    style: "alternative R&B",
    pressing: "Reedição",
    reason: "Para coleções que começam por rap moderno, é uma ponte forte para R&B, pop experimental e audição noturna.",
    tags: ["r&b", "soul", "noturno", "moderno"],
    coverSeed: 46
  },
  {
    title: "Selected Ambient Works 85-92",
    artist: "Aphex Twin",
    year: 1992,
    genre: "Eletrônica",
    style: "ambient techno",
    pressing: "Reedição",
    reason: "Uma base segura para abrir a coleção em eletrônica de audição profunda e timbres analógicos.",
    tags: ["eletrônica", "ambient", "noturno", "1990s"],
    coverSeed: 47
  },
  {
    title: "Black Messiah",
    artist: "D'Angelo and The Vanguard",
    year: 2014,
    genre: "Soul",
    style: "neo soul",
    pressing: "Duplo LP",
    reason: "Excelente se o radar cruza Hip-Hop, groove orgânico, soul e gravação quente.",
    tags: ["soul", "funk", "groove", "produção"],
    coverSeed: 48
  },
  {
    title: "Racional Vol. 1",
    artist: "Tim Maia",
    year: 1975,
    genre: "MPB",
    style: "soul brasileiro",
    pressing: "Reedição",
    reason: "Ponte brasileira entre MPB, soul e groove, especialmente útil se sua coleção começa a misturar rap e música brasileira.",
    tags: ["brasil", "soul", "groove", "mpb"],
    coverSeed: 49
  }
];

const recommendationCoverUrls = {
  [albumIdentityKey({ artist: "John Coltrane", title: "Blue Train" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/6e/1a/13/6e1a134d-8f6f-d90f-b855-ea69436a2e8b/17UM1IM45370.rgb.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Gilberto Gil", title: "Expresso 2222" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d4/c2/a9/d4c2a9cf-76d7-2da6-f537-8f7d9bfa4683/00191018263201_Cover.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Talking Heads", title: "Remain in Light" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music/87/5f/5b/mzi.zzquknhm.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Massive Attack", title: "Mezzanine" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0a/98/55/0a98555b-8d9d-3b46-660a-b91261557d17/00724384559953.rgb.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Portishead", title: "Dummy" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c1/71/93/c1719342-df7d-e9c5-c87c-53dae5afb289/00042282855329.rgb.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Marvin Gaye", title: "What's Going On" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/76/36/2d/76362d74-cb7a-8ef9-104e-cde1d858e9a9/20UMGIM95279.rgb.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Milton Nascimento & Lô Borges", title: "Clube da Esquina" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/16/fe/be/16febeb7-b081-c66c-a26b-1f7cd097bd45/19UMGIM66061.rgb.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Chico Buarque", title: "Construção" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c5/de/62/c5de62c4-50a9-bc0a-1cb3-3836e7e0eb0e/06UMGIM31536.rgb.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Stevie Wonder", title: "Songs in the Key of Life" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/eb/1f/12/eb1f12ec-474c-63aa-43af-09282f423b9d/00602537004737.rgb.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Radiohead", title: "In Rainbows" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dd/50/c7/dd50c790-99ac-d3d0-5ab8-e3891fb8fd52/634904032463.png/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Herbie Hancock", title: "Head Hunters" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/4f/e5/f5/4fe5f511-462e-e87b-0711-d4e42809fb17/dj.goshfswo.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Kendrick Lamar", title: "good kid, m.A.A.d city" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9a/50/a1/9a50a1d8-01c2-2504-8d99-3f2fc7e5c2ff/12UMGIM52988.rgb.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Kendrick Lamar", title: "To Pimp a Butterfly" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b5/a6/91/b5a69171-5232-3d5b-9c15-8963802f83dd/15UMGIM15814.rgb.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Madvillain", title: "Madvillainy" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/18/b4/9a/18b49ad5-6407-7169-27f4-d1c8bcb5504b/s05.nqwebndj.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Nas", title: "Illmatic" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b9/eb/cc/b9ebccbc-5ba4-2cdb-5332-b065739abd9a/886444567619.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "A Tribe Called Quest", title: "The Low End Theory" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/c6/04/ea/c604ea4c-5337-14ec-6b47-cfc962e1c7be/762186920922_Cover.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Mac Miller", title: "Swimming" })]:
    "https://coverartarchive.org/release-group/8bddc517-1322-40a9-b33b-c65248b52b54/front-500",
  [albumIdentityKey({ artist: "Mac Miller", title: "Circles" })]:
    "https://coverartarchive.org/release-group/1a19e11b-106c-45fc-8452-387216ed18f7/front-500",
  [albumIdentityKey({ artist: "Tyler, The Creator", title: "IGOR" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a8/df/7d/a8df7d1e-0a11-6228-61af-3230783a9485/886447419601.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Little Simz", title: "Sometimes I Might Be Introvert" })]:
    "https://coverartarchive.org/release-group/e95de3f4-84db-4d24-8d06-fd970576a6ef/front-500",
  [albumIdentityKey({ artist: "JPEGMAFIA", title: "LP!" })]:
    "https://coverartarchive.org/release-group/c89e9cff-c0c9-4e34-95e7-185056956caf/front-500",
  [albumIdentityKey({ artist: "SZA", title: "Ctrl" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a2/bc/ad/a2bcad46-b389-4be1-8bac-5a0959b0b8e4/886446548449.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Frank Ocean", title: "Blonde" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8d/76/23/8d76234b-5101-fa9b-58b3-5e17645d5b05/00602527744209.rgb.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "Aphex Twin", title: "Selected Ambient Works 85-92" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5f/b3/e0/5fb3e08d-c2cd-3da4-6ad7-c5dc61803683/cover.jpg/1000x1000bb.jpg",
  [albumIdentityKey({ artist: "D'Angelo and The Vanguard", title: "Black Messiah" })]:
    "https://coverartarchive.org/release-group/b3d96626-4d46-4012-b6cb-e8d8b192a4f1/front-500",
  [albumIdentityKey({ artist: "Tim Maia", title: "Racional Vol. 1" })]:
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/87/54/0b/87540b30-b102-4f62-e1fa-312bb574e106/8429006371495.jpg/1000x1000bb.jpg"
};

const fallbackNews = [
  {
    source: "Bandcamp Daily",
    category: "Lançamentos",
    title: "The Best Hip-Hop on Bandcamp, April 2026",
    date: "2026-04-28",
    summary: "Seleção mensal de LPs de rap que ajuda a encontrar artistas fora do circuito óbvio.",
    url: "https://daily.bandcamp.com/",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    keywords: ["hip-hop", "lançamento", "bandcamp"]
  },
  {
    source: "Bandcamp Daily",
    category: "Vinil e reedições",
    title: "Ayman Fanous, “Brooklyn Stories 1-5”",
    date: "2026-04-28",
    summary: "Álbum do dia com perfil de descoberta para quem usa a coleção como mapa de exploração.",
    url: "https://daily.bandcamp.com/",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    keywords: ["album of the day", "descoberta"]
  },
  {
    source: "Pitchfork",
    category: "Críticas",
    title: "Michael Review: Bad",
    date: "2026-04-28",
    summary: "Crítica recente destacada pela Pitchfork, útil para acompanhar reavaliações e contexto histórico.",
    url: "https://pitchfork.com/info/rss/",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    keywords: ["review", "pop"]
  },
  {
    source: "Stereogum",
    category: "Lançamentos",
    title: "Album Of The Week: Lip Critic Theft World",
    date: "2026-04-28",
    summary: "Destaque editorial para lançamento novo, bom ponto de partida para wishlist.",
    url: "https://www.stereogum.com/",
    imageUrl: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=1200&q=80",
    keywords: ["album of the week", "new music"]
  },
  {
    source: "The Vinyl Factory",
    category: "Vinil e reedições",
    title: "Yussef Dayes and Alfa Mist’s ‘Love Is The Message’ returns to vinyl",
    date: "2026-04-22",
    summary: "Notícia focada em prensagem e retorno ao formato físico, diretamente relevante para colecionadores.",
    url: "https://www.thevinylfactory.com/news",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    keywords: ["vinyl", "pressing", "jazz"]
  },
  {
    source: "NME",
    category: "Notícias",
    title: "Music news radar",
    date: "2026-04-28",
    summary: "Radar amplo para acompanhar anúncios, turnês e novos singles antes de virarem edição física.",
    url: "https://www.nme.com/news/music",
    imageUrl: "https://images.unsplash.com/photo-1453090927415-5f45085b65c0?auto=format&fit=crop&w=1200&q=80",
    keywords: ["news", "music"]
  }
];

const editorialNewsImages = [
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1453090927415-5f45085b65c0?auto=format&fit=crop&w=1200&q=80"
];

const categoryNewsImages = {
  "Vinil e reedições": editorialNewsImages[0],
  Lançamentos: editorialNewsImages[1],
  Críticas: editorialNewsImages[2],
  Notícias: editorialNewsImages[4]
};

const newsSources = [
  {
    name: "Pitchfork",
    feed: "https://pitchfork.com/feed/feed-news/rss",
    category: "Notícias"
  },
  {
    name: "Pitchfork Reviews",
    feed: "https://pitchfork.com/feed/feed-album-reviews/rss",
    category: "Críticas"
  },
  {
    name: "Bandcamp Daily",
    feed: "https://daily.bandcamp.com/feed",
    category: "Lançamentos"
  },
  {
    name: "Stereogum",
    feed: "https://www.stereogum.com/feed/",
    category: "Lançamentos"
  },
  {
    name: "NME",
    feed: "https://www.nme.com/news/music/feed",
    category: "Notícias"
  },
  {
    name: "The Vinyl Factory",
    feed: "https://www.thevinylfactory.com/feed",
    category: "Vinil e reedições"
  }
];

const demoSocialFeed = [
  {
    id: "feed-helena-blue-train",
    user: "Helena",
    handle: "helenajazz",
    album: "Blue Train",
    artist: "John Coltrane",
    pressing: "Blue Note Classic Vinyl",
    rating: 4.5,
    note: "Sopro muito presente e bateria firme. Boa reedição para quem quer ouvir sem medo de gastar alto.",
    createdAt: "2026-04-28T18:20:00.000Z",
    likes: 18,
    comments: 4,
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/6e/1a/13/6e1a134d-8f6f-d90f-b855-ea69436a2e8b/17UM1IM45370.rgb.jpg/1000x1000bb.jpg",
    seed: 24
  },
  {
    id: "feed-rafa-dummy",
    user: "Rafa",
    handle: "gravebaixo",
    album: "Dummy",
    artist: "Portishead",
    pressing: "Reedição",
    rating: 5,
    note: "Disco perfeito para testar grave controlado. A faixa Wandering Star fica enorme sem embolar.",
    createdAt: "2026-04-27T22:10:00.000Z",
    likes: 31,
    comments: 8,
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c1/71/93/c1719342-df7d-e9c5-c87c-53dae5afb289/00042282855329.rgb.jpg/1000x1000bb.jpg",
    seed: 91
  },
  {
    id: "feed-lia-clube",
    user: "Lia",
    handle: "garimpominas",
    album: "Clube da Esquina",
    artist: "Milton Nascimento & Lô Borges",
    pressing: "Nacional",
    rating: 5,
    note: "Cópia com chiado leve, mas a ambiência dos vocais compensa. Esse disco cresce a cada audição.",
    createdAt: "2026-04-26T17:45:00.000Z",
    likes: 42,
    comments: 11,
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/16/fe/be/16febeb7-b081-c66c-a26b-1f7cd097bd45/19UMGIM66061.rgb.jpg/1000x1000bb.jpg",
    seed: 44
  }
];

const demoCollectors = [
  {
    id: "collector-helena",
    name: "Helena",
    handle: "helenajazz",
    focus: "jazz modal, hard bop e Blue Note",
    genres: ["Jazz", "Soul"],
    tags: ["audiophile", "blue note", "noite"],
    records: 284,
    seed: 24
  },
  {
    id: "collector-lia",
    name: "Lia",
    handle: "garimpominas",
    focus: "MPB setentista e prensagens brasileiras",
    genres: ["MPB", "Rock"],
    tags: ["brasil", "harmonia", "groove"],
    records: 193,
    seed: 44
  },
  {
    id: "collector-rafa",
    name: "Rafa",
    handle: "gravebaixo",
    focus: "trip-hop, dub, eletrônica e graves profundos",
    genres: ["Eletrônica", "Hip-Hop", "Soul"],
    tags: ["grave", "noturno", "produção"],
    records: 151,
    seed: 91
  },
  {
    id: "collector-nina",
    name: "Nina",
    handle: "seloindependente",
    focus: "lançamentos independentes e reedições recentes",
    genres: ["Rock", "Experimental", "Pop"],
    tags: ["moderno", "produção", "reedição"],
    records: 97,
    seed: 68
  }
];

const pressingDiscussions = [
  {
    id: "pressing-kind-of-blue",
    album: "Kind of Blue",
    artist: "Miles Davis",
    pressing: "Reedição 180g",
    verdict: "boa para audição diária",
    signal: "palco aberto",
    caution: "comparar com cópias Columbia antigas antes de pagar caro",
    comments: 23,
    score: 88
  },
  {
    id: "pressing-clube",
    album: "Clube da Esquina",
    artist: "Milton Nascimento & Lô Borges",
    pressing: "Nacional",
    verdict: "capa e estado pesam muito no valor",
    signal: "timbre orgânico",
    caution: "ruído de superfície aparece bastante em cópias gastas",
    comments: 31,
    score: 91
  },
  {
    id: "pressing-dummy",
    album: "Dummy",
    artist: "Portishead",
    pressing: "Reedição",
    verdict: "ótima porta de entrada",
    signal: "grave consistente",
    caution: "regular antiskate ajuda a evitar sibilância nos vocais",
    comments: 17,
    score: 84
  }
];

const socialFilters = [
  { id: "all", label: "Todos", hint: "Eventos musicais" },
  { id: "reviews", label: "Reviews", hint: "Avaliações" },
  { id: "defended", label: "Defendidos", hint: "Discos defendidos" },
  { id: "compatible", label: "Compatíveis", hint: "Afinidade de estante" },
  { id: "saved", label: "Salvos no radar", hint: "Radar social" },
  { id: "common", label: "Discos em comum", hint: "Na sua coleção" }
];

const recoveredCollectionSnapshot = [
  {
    id: "restored-scorpion-drake",
    title: "Scorpion",
    artist: "Drake",
    year: 2018,
    genre: "Hip-Hop",
    style: "Hip-Hop/Rap",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Amazon",
    price: 333.27,
    purchaseUrl: "",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/6d/8f/bb6d8f67-6d04-10b5-dd62-eb5809ac54fc/00602567879152.rgb.jpg/600x600bb.jpg",
    tags: ["hip-hop", "rap"],
    comment: "",
    dateAdded: "2026-04-28T20:58:16-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 11
  },
  {
    id: "restored-bush-snoop-dogg",
    title: "BUSH",
    artist: "Snoop Dogg",
    year: 2015,
    genre: "Hip-Hop",
    style: "funk rap",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Amazon",
    price: 276.1,
    purchaseUrl: "",
    coverUrl:
      "https://ia800805.us.archive.org/35/items/mbid-b3b2f213-c831-4436-bd0e-66be61948233/mbid-b3b2f213-c831-4436-bd0e-66be61948233-10321330640_thumb500.jpg",
    tags: ["hip-hop", "funk"],
    comment: "",
    dateAdded: "2026-04-28T20:58:15-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 12
  },
  {
    id: "restored-man-on-the-moon-kid-cudi",
    title: "Man On the Moon: The End of Day",
    artist: "Kid Cudi",
    year: 2009,
    genre: "Hip-Hop",
    style: "Hip-Hop/Rap",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Amazon",
    price: 350.8,
    purchaseUrl: "",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/c5/bb/ae/c5bbae2c-68ce-4efe-e0fa-2ee8769e46f3/09UMGIM33418.rgb.jpg/600x600bb.jpg",
    tags: ["hip-hop", "rap"],
    comment: "",
    dateAdded: "2026-04-28T20:58:14-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 13
  },
  {
    id: "restored-dark-side-pink-floyd",
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: 1973,
    genre: "Rock",
    style: "classic rock",
    pressing: "",
    condition: "Near Mint",
    rating: 4,
    purchasePlace: "Sonic discos",
    price: 500,
    purchaseUrl: "",
    coverUrl:
      "https://dn710607.ca.archive.org/0/items/mbid-956fbc58-362d-43b8-b880-3779e0508559/mbid-956fbc58-362d-43b8-b880-3779e0508559-34025419985_thumb500.jpg",
    tags: ["rock", "clássico"],
    comment: "",
    dateAdded: "2026-04-28T20:58:13-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 14
  },
  {
    id: "restored-damn-kendrick-lamar",
    title: "DAMN.",
    artist: "Kendrick Lamar",
    year: 2017,
    genre: "Hip-Hop",
    style: "Hip-Hop/Rap",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Sonic discos",
    price: 500,
    purchaseUrl: "",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ab/16/ef/ab16efe9-e7f1-66ec-021c-5592a23f0f9e/17UMGIM88793.rgb.jpg/600x600bb.jpg",
    tags: ["hip-hop", "rap"],
    comment: "",
    dateAdded: "2026-04-28T20:58:12-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 15
  },
  {
    id: "restored-good-kid-kendrick-lamar",
    title: "good kid, m.A.A.d city",
    artist: "Kendrick Lamar",
    year: 2012,
    genre: "Hip-Hop",
    style: "west coast hip-hop",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Sonic discos",
    price: 500,
    purchaseUrl: "",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/36/86/ec/3686ec99-dec4-0a01-8b74-2d8a9a0263a7/12UMGIM52988.rgb.jpg/600x600bb.jpg",
    tags: ["hip-hop", "rap"],
    comment: "",
    dateAdded: "2026-04-28T20:58:11-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 16
  },
  {
    id: "restored-good-am-mac-miller",
    title: "GO:OD AM",
    artist: "Mac Miller",
    year: 2015,
    genre: "Hip-Hop",
    style: "Hip-Hop/Rap",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Sonic",
    price: 502.42,
    purchaseUrl: "",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/92/fb/29/92fb2980-906d-3761-651d-cabcc49723b0/093624923763.jpg/600x600bb.jpg",
    tags: ["hip-hop", "rap"],
    comment: "",
    dateAdded: "2026-04-28T20:58:10-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 17
  },
  {
    id: "restored-circles-mac-miller",
    title: "Circles",
    artist: "Mac Miller",
    year: 2020,
    genre: "Hip-Hop",
    style: "alternative hip-hop",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Amazon",
    price: 633.83,
    purchaseUrl: "",
    coverUrl:
      "https://ia902809.us.archive.org/22/items/mbid-d60d0d06-7200-4e4d-aefd-5deb9e5674a2/mbid-d60d0d06-7200-4e4d-aefd-5deb9e5674a2-25201679979_thumb500.jpg",
    tags: ["hip-hop", "rap"],
    comment: "",
    dateAdded: "2026-04-28T20:58:09-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 18
  },
  {
    id: "restored-eminem-show-eminem",
    title: "The Eminem Show",
    artist: "Eminem",
    year: 2002,
    genre: "Hip-Hop",
    style: "Hip-Hop/Rap",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Amazon",
    price: 281.7,
    purchaseUrl: "",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/dd/5c/e6/dd5ce621-f7d2-f767-7a08-e7a7eaa7870b/00602537526994.rgb.jpg/600x600bb.jpg",
    tags: ["hip-hop", "rap"],
    comment: "",
    dateAdded: "2026-04-28T20:58:08-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 19
  },
  {
    id: "restored-swimming-mac-miller",
    title: "Swimming",
    artist: "Mac Miller",
    year: 2018,
    genre: "Hip-Hop",
    style: "Hip-Hop/Rap",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Amazon",
    price: 454.25,
    purchaseUrl: "",
    coverUrl:
      "https://dn721808.ca.archive.org/0/items/mbid-8cc2c972-ec76-4acf-b11c-be588e772214/mbid-8cc2c972-ec76-4acf-b11c-be588e772214-36355367501_thumb500.jpg",
    tags: ["hip-hop", "rap"],
    comment: "",
    dateAdded: "2026-04-28T20:58:07-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 20
  },
  {
    id: "restored-beauty-behind-the-madness-weeknd",
    title: "Beauty Behind The Madness",
    artist: "The Weeknd",
    year: 2015,
    genre: "Hip-Hop",
    style: "R&B/Soul",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Amazon",
    price: 401.75,
    purchaseUrl: "",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/30/05/1e/30051e57-a63a-3acc-4b30-42568293f5f7/15UMGIM36514.rgb.jpg/600x600bb.jpg",
    tags: ["r&b", "soul"],
    comment: "",
    dateAdded: "2026-04-28T20:58:06-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 21
  },
  {
    id: "restored-swag-justin-bieber",
    title: "SWAG",
    artist: "Justin Bieber",
    year: 2025,
    genre: "Pop",
    style: "Pop",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Amazon",
    price: 447.46,
    purchaseUrl: "",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/74/ef/6b/74ef6b72-301a-5fe1-27fe-d6de1954f452/25UMGIM94519.rgb.jpg/600x600bb.jpg",
    tags: ["pop"],
    comment: "",
    dateAdded: "2026-04-28T20:58:05-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 22
  },
  {
    id: "restored-hollywoods-bleeding-post-malone",
    title: "Hollywood's Bleeding",
    artist: "Post Malone",
    year: 2019,
    genre: "Hip-Hop",
    style: "Hip-Hop/Rap",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Amazon",
    price: 332.09,
    purchaseUrl: "",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/6c/13/27/6c13279a-399b-2631-3cb2-6233a91d7a53/19UMGIM78325.rgb.jpg/600x600bb.jpg",
    tags: ["hip-hop", "rap"],
    comment: "",
    dateAdded: "2026-04-28T20:58:04-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 23
  },
  {
    id: "restored-beerbongs-bentleys-post-malone",
    title: "beerbongs & bentleys",
    artist: "Post Malone",
    year: 2018,
    genre: "Hip-Hop",
    style: "Hip-Hop/Rap",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Amazon",
    price: 346.33,
    purchaseUrl: "",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/55/9f/fb/559ffb75-3c00-abd6-7b1f-8b6b1518b173/18UMGIM22101.rgb.jpg/600x600bb.jpg",
    tags: ["hip-hop", "rap"],
    comment: "",
    dateAdded: "2026-04-28T20:58:03-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 24
  },
  {
    id: "restored-high-off-life-future",
    title: "High Off Life",
    artist: "Future",
    year: 2020,
    genre: "Hip-Hop",
    style: "Hip-Hop/Rap",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "",
    price: 202.76,
    purchaseUrl: "",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/64/ce/3f/64ce3f2a-b523-8f83-46fc-ef70b6ea48ff/886448469704.jpg/600x600bb.jpg",
    tags: ["hip-hop", "rap"],
    comment: "",
    dateAdded: "2026-04-28T20:58:02-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 25
  },
  {
    id: "restored-divine-feminine-mac-miller",
    title: "The Divine Feminine",
    artist: "Mac Miller",
    year: 2016,
    genre: "Hip-Hop",
    style: "Hip-Hop",
    pressing: "",
    condition: "Near Mint",
    rating: 5,
    purchasePlace: "Amazon",
    price: 370.9,
    purchaseUrl: "",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/1e/5c/ad/1e5cadeb-6f0c-86a0-9e85-6487a848d866/093624917168.jpg/600x600bb.jpg",
    tags: ["hip-hop", "rap"],
    comment: "",
    dateAdded: "2026-04-28T20:58:01-03:00",
    listenCount: 0,
    lastPlayed: null,
    coverSeed: 26
  }
];

const legacyProfileSnapshot = loadProfile();
const initialSocialState = loadSocialState();

const state = {
  collection: loadCollection(),
  news: loadNews(),
  socialState: initialSocialState,
  profile: socialProfileToLegacyProfile(initialSocialState.currentUserProfile, legacyProfileSnapshot),
  socialFeed: getLegacyFeedFromSocialState(initialSocialState),
  following: getFollowingIdsFromSocialState(initialSocialState),
  coverCache: loadCoverCache(),
  wishlist: loadWishlist(),
  recommendationFeedback: loadRecommendationFeedback(),
  coverCandidates: [],
  releaseSuggestions: [],
  recommendationNotice: "",
  activeCollectorComparison: "",
  collectorComparisonNotice: "",
  activeAlbumLoveId: "",
  albumLoveNotice: "",
  activeView: "collection",
  activeNewsCategory: "Todos",
  activeSocialFilter: "all"
};

const pendingRecommendationCoverKeys = new Set();
const missingRecommendationCoverKeys = new Set();
const preloadedImageUrls = new Set();
const releaseLookupCache = new Map();
let releaseLookupTimer = null;
let releaseLookupRequestId = 0;
let amazonImportTimer = null;
let amazonImportRequestId = 0;

const elements = {
  globalSearch: document.querySelector("#globalSearch"),
  statsGrid: document.querySelector("#statsGrid"),
  collectionGrid: document.querySelector("#collectionGrid"),
  collectionEmpty: document.querySelector("#collectionEmpty"),
  collectionEmptyTitle: document.querySelector("#collectionEmptyTitle"),
  collectionEmptyText: document.querySelector("#collectionEmptyText"),
  genreFilter: document.querySelector("#genreFilter"),
  sortSelect: document.querySelector("#sortSelect"),
  addAlbumButton: document.querySelector("#addAlbumButton"),
  emptyAddAlbumButton: document.querySelector("#emptyAddAlbumButton"),
  exportButton: document.querySelector("#exportButton"),
  albumDialog: document.querySelector("#albumDialog"),
  albumForm: document.querySelector("#albumForm"),
  dialogTitle: document.querySelector("#dialogTitle"),
  deleteAlbumButton: document.querySelector("#deleteAlbumButton"),
  closeDialogButton: document.querySelector("#closeDialogButton"),
  cancelAlbumButton: document.querySelector("#cancelAlbumButton"),
  importAmazonButton: document.querySelector("#importAmazonButton"),
  amazonImportStatus: document.querySelector("#amazonImportStatus"),
  lookupCoverButton: document.querySelector("#lookupCoverButton"),
  albumCoverFile: document.querySelector("#albumCoverFile"),
  releaseSuggestions: document.querySelector("#releaseSuggestions"),
  coverPreview: document.querySelector("#coverPreview"),
  coverCandidates: document.querySelector("#coverCandidates"),
  coverStatus: document.querySelector("#coverStatus"),
  ratingOutput: document.querySelector("#ratingOutput"),
  tasteProfile: document.querySelector("#tasteProfile"),
  recommendationGrid: document.querySelector("#recommendationGrid"),
  recommendationStatus: document.querySelector("#recommendationStatus"),
  newsGrid: document.querySelector("#newsGrid"),
  newsFilters: document.querySelector("#newsFilters"),
  refreshNewsButton: document.querySelector("#refreshNewsButton"),
  newsStatus: document.querySelector("#newsStatus"),
  editProfileButton: document.querySelector("#editProfileButton"),
  profilePanel: document.querySelector("#profilePanel"),
  profileDialog: document.querySelector("#profileDialog"),
  profileForm: document.querySelector("#profileForm"),
  closeProfileDialogButton: document.querySelector("#closeProfileDialogButton"),
  cancelProfileButton: document.querySelector("#cancelProfileButton"),
  collectorComparisonDialog: document.querySelector("#collectorComparisonDialog"),
  collectorComparisonContent: document.querySelector("#collectorComparisonContent"),
  albumLoveDialog: document.querySelector("#albumLoveDialog"),
  albumLoveContent: document.querySelector("#albumLoveContent"),
  resetAppButton: document.querySelector("#resetAppButton"),
  spinEventType: document.querySelector("#spinEventType"),
  spinAlbumSelect: document.querySelector("#spinAlbumSelect"),
  spinNoteInput: document.querySelector("#spinNoteInput"),
  publishSpinButton: document.querySelector("#publishSpinButton"),
  socialFilters: document.querySelector("#socialFilters"),
  socialFeed: document.querySelector("#socialFeed"),
  collectorMatches: document.querySelector("#collectorMatches"),
  pressingDiscussions: document.querySelector("#pressingDiscussions"),
  genreChart: document.querySelector("#genreChart"),
  decadeChart: document.querySelector("#decadeChart"),
  revisitList: document.querySelector("#revisitList"),
  sidebarHighlight: document.querySelector("#sidebarHighlight"),
  sidebarHighlightMeta: document.querySelector("#sidebarHighlightMeta")
};

function loadCollection() {
  const primary = parseStoredCollection(localStorage.getItem(STORAGE_KEY));
  if (primary.length && !isLegacyDemoCollection(primary)) {
    persistCollectionMirror(primary, "carregamento principal");
    return primary;
  }

  const recovered = getBestCollectionRecovery();
  if (recovered.length) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recovered));
    persistCollectionMirror(recovered, "restauração automática");
    return recovered;
  }

  return [];
}

function loadNews() {
  const stored = localStorage.getItem(NEWS_STORAGE_KEY);
  if (!stored) return fallbackNews;

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length ? parsed : fallbackNews;
  } catch {
    return fallbackNews;
  }
}

function loadProfile() {
  const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
  if (!stored) return defaultProfile;

  try {
    return { ...defaultProfile, ...JSON.parse(stored) };
  } catch {
    return defaultProfile;
  }
}

function loadSocialFeed() {
  const stored = localStorage.getItem(SOCIAL_FEED_STORAGE_KEY);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function loadFollowing() {
  const stored = localStorage.getItem(FOLLOWING_STORAGE_KEY);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function loadSocialState() {
  const legacyProfile = loadProfile();
  const legacyFeed = loadSocialFeed();
  const legacyFollowing = loadFollowing();
  const stored = localStorage.getItem(SOCIAL_STATE_STORAGE_KEY);
  let parsed = null;

  try {
    parsed = stored ? JSON.parse(stored) : null;
  } catch {
    parsed = null;
  }

  return normalizeSocialState(parsed, { legacyProfile, legacyFeed, legacyFollowing });
}

function saveSocialState(nextSocialState) {
  const normalized = normalizeSocialState(nextSocialState);
  localStorage.setItem(SOCIAL_STATE_STORAGE_KEY, JSON.stringify(normalized));
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(socialProfileToLegacyProfile(normalized.currentUserProfile, loadProfile())));
  localStorage.setItem(SOCIAL_FEED_STORAGE_KEY, JSON.stringify(getLegacyFeedFromSocialState(normalized)));
  localStorage.setItem(FOLLOWING_STORAGE_KEY, JSON.stringify(getFollowingIdsFromSocialState(normalized)));
  return normalized;
}

function normalizeSocialState(value = {}, legacy = {}) {
  const now = new Date().toISOString();
  const legacyProfile = legacy.legacyProfile || defaultProfile;
  const currentUserProfile = normalizeCurrentUserProfile(value?.currentUserProfile || legacyProfileToCurrentUserProfile(legacyProfile, now), now);
  const seedCollectors = buildSeedSocialCollectors();
  const collectors = mergeById([
    ...seedCollectors,
    ...(Array.isArray(value?.socialCollectors) ? value.socialCollectors : [])
  ]).map(normalizeSocialCollector);
  const collectorIds = new Set(collectors.map((collector) => collector.id));
  const seedPosts = buildSeedSocialPosts(collectors);
  const legacyPosts = migrateLegacySocialPosts(legacy.legacyFeed || [], currentUserProfile);
  const posts = mergeById([
    ...seedPosts,
    ...legacyPosts,
    ...(Array.isArray(value?.socialPosts) ? value.socialPosts : [])
  ]).map((post) => normalizeSocialPost(post, currentUserProfile, collectorIds));
  const follows = normalizeFollows(
    [
      ...migrateLegacyFollows(legacy.legacyFollowing || []),
      ...(Array.isArray(value?.follows) ? value.follows : [])
    ],
    collectorIds
  );

  return {
    version: SOCIAL_STATE_VERSION,
    currentUserProfile,
    socialCollectors: collectors,
    socialPosts: posts,
    follows,
    socialSettings: normalizeSocialSettings(value?.socialSettings),
    updatedAt: value?.updatedAt || now
  };
}

function normalizeCurrentUserProfile(profile = {}, now = new Date().toISOString()) {
  const handle = sanitizeHandle(profile.handle || defaultProfile.handle);
  return {
    id: profile.id || SOCIAL_CURRENT_USER_ID,
    name: String(profile.name || defaultProfile.name).trim(),
    handle,
    bio: String(profile.bio || defaultProfile.bio).trim(),
    city: String(profile.city || "").trim(),
    avatarSeed: Number(profile.avatarSeed || stableSeed(handle || profile.name || SOCIAL_CURRENT_USER_ID)),
    favoriteGenres: normalizeList(profile.favoriteGenres || profile.focus || []),
    privacy: {
      profileVisibility: profile.privacy?.profileVisibility || "public",
      collectionVisibility: profile.privacy?.collectionVisibility || "private"
    },
    createdAt: profile.createdAt || now,
    updatedAt: profile.updatedAt || now
  };
}

function legacyProfileToCurrentUserProfile(profile = defaultProfile, now = new Date().toISOString()) {
  const focusGenres = String(profile.focus || "")
    .split(/[,+/]/)
    .map((item) => item.trim())
    .filter(Boolean);
  return {
    id: SOCIAL_CURRENT_USER_ID,
    name: profile.name || defaultProfile.name,
    handle: profile.handle || defaultProfile.handle,
    bio: profile.bio || defaultProfile.bio,
    city: "",
    avatarSeed: stableSeed(profile.handle || profile.name || SOCIAL_CURRENT_USER_ID),
    favoriteGenres: focusGenres,
    privacy: {
      profileVisibility: "public",
      collectionVisibility: "private"
    },
    createdAt: now,
    updatedAt: now
  };
}

function socialProfileToLegacyProfile(profile = {}, fallback = defaultProfile) {
  return {
    name: profile.name || fallback.name || defaultProfile.name,
    handle: sanitizeHandle(profile.handle || fallback.handle || defaultProfile.handle),
    focus: (profile.favoriteGenres || []).join(", ") || fallback.focus || defaultProfile.focus,
    ritual: fallback.ritual || defaultProfile.ritual,
    bio: profile.bio || fallback.bio || defaultProfile.bio
  };
}

function normalizeSocialCollector(collector = {}) {
  const handle = sanitizeHandle(collector.handle || collector.id || "colecionador");
  return {
    id: collector.id || `collector-${handle}`,
    name: String(collector.name || "Colecionador").trim(),
    handle,
    bio: String(collector.bio || collector.focus || "").trim(),
    city: String(collector.city || "").trim(),
    avatarSeed: Number(collector.avatarSeed || collector.seed || stableSeed(handle)),
    collection: (collector.collection || []).map(normalizeSocialAlbumSnapshot).filter((album) => album.title && album.artist),
    wishlist: (collector.wishlist || []).map(normalizeSocialAlbumSnapshot).filter((album) => album.title && album.artist),
    favoriteGenres: normalizeList(collector.favoriteGenres || collector.genres || []),
    recentActivity: Array.isArray(collector.recentActivity) ? collector.recentActivity.slice(0, 6) : []
  };
}

function normalizeSocialAlbumSnapshot(album = {}) {
  const normalized = normalizeAlbum(album);
  return {
    id: album.id || normalized.identityKey,
    title: normalized.title,
    artist: normalized.artist,
    year: normalized.year || "",
    genre: normalized.genre || "",
    style: normalized.style || "",
    tags: normalized.tags || [],
    coverUrl: normalized.coverUrl || album.coverUrl || "",
    coverSeed: Number(album.coverSeed || album.seed || 1)
  };
}

function normalizeSocialPost(post = {}, currentUserProfile = null, collectorIds = new Set()) {
  const userId = post.userId || inferSocialUserId(post, currentUserProfile, collectorIds);
  const albumSnapshot = normalizeSocialAlbumSnapshot(post.albumSnapshot || post);
  return {
    id: post.id || makeId(),
    type: normalizeSocialPostType(post.type),
    userId,
    albumId: post.albumId || albumSnapshot.id || "",
    albumSnapshot,
    note: String(post.note || "").trim(),
    rating: Number(post.rating || 0),
    tags: normalizeList(post.tags || albumSnapshot.tags || []),
    createdAt: post.createdAt || new Date().toISOString(),
    reactions: normalizeSocialReactions(post.reactions, post.likes),
    comments: normalizeSocialComments(post.comments, post.commentCount),
    baseCommentCount: Number(post.baseCommentCount || 0),
    legacyOwnPost: Boolean(post.ownPost || userId === SOCIAL_CURRENT_USER_ID)
  };
}

function normalizeSocialPostType(type) {
  return [
    "listening",
    "review",
    "defended_album",
    "added_to_collection",
    "saved_to_radar",
    "revisited",
    "comparison",
    "recommendation"
  ].includes(type)
    ? type
    : "listening";
}

function normalizeSocialReactions(reactions = {}, legacyLikes = 0) {
  const allowed = ["like", "tambem_sinto_isso", "me_convenceu", "quero_ouvir", "salvar_no_radar"];
  return allowed.reduce((acc, type) => {
    const values = Array.isArray(reactions?.[type]) ? reactions[type] : [];
    acc[type] = [...new Set(values.map(String).filter(Boolean))];
    if (type === "like" && !acc[type].length && Number(legacyLikes || 0) > 0) {
      acc[type] = Array.from({ length: Math.min(80, Number(legacyLikes)) }, (_, index) => `seed-like-${index + 1}`);
    }
    return acc;
  }, {});
}

function normalizeSocialComments(comments = [], legacyCount = 0) {
  if (Array.isArray(comments)) return comments.filter((comment) => comment && typeof comment === "object");
  return Array.from({ length: Math.min(40, Number(legacyCount || 0)) }, (_, index) => ({
    id: `seed-comment-${index + 1}`,
    userId: "seed",
    body: "",
    createdAt: ""
  }));
}

function normalizeFollows(follows = [], collectorIds = new Set()) {
  const seen = new Set();
  return follows
    .map((follow) => ({
      followerId: follow.followerId || SOCIAL_CURRENT_USER_ID,
      followingId: follow.followingId || follow.collectorId || follow.id || "",
      createdAt: follow.createdAt || new Date().toISOString()
    }))
    .filter((follow) => follow.followingId && collectorIds.has(follow.followingId))
    .filter((follow) => {
      const key = `${follow.followerId}::${follow.followingId}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function normalizeSocialSettings(settings = {}) {
  const investmentVisibility = ["never", "private", "public"].includes(settings.investmentVisibility)
    ? settings.investmentVisibility
    : settings.showInvestmentValue
      ? "private"
      : "never";
  return {
    showCollectionPublicly: Boolean(settings.showCollectionPublicly),
    showWishlistPublicly: Boolean(settings.showWishlistPublicly),
    investmentVisibility,
    showInvestmentValue: investmentVisibility === "public",
    allowShelfComparison: settings.allowShelfComparison ?? settings.allowComparison ?? true,
    allowTasteMatching: settings.allowTasteMatching !== false
  };
}

function buildSeedSocialCollectors() {
  return [
    {
      id: "collector-helena",
      name: "Helena",
      handle: "helenajazz",
      bio: "Jazz modal, hard bop e Blue Note para ouvir com calma.",
      city: "São Paulo",
      avatarSeed: 24,
      favoriteGenres: ["Jazz", "Soul"],
      collection: [
        socialAlbum("Blue Train", "John Coltrane", 1958, "Jazz", "hard bop", 24),
        socialAlbum("Kind of Blue", "Miles Davis", 1959, "Jazz", "modal jazz", 23),
        socialAlbum("Head Hunters", "Herbie Hancock", 1973, "Jazz", "jazz funk", 77)
      ],
      wishlist: [socialAlbum("Mingus Ah Um", "Charles Mingus", 1959, "Jazz", "post-bop", 27)],
      recentActivity: ["review", "discussion"]
    },
    {
      id: "collector-lia",
      name: "Lia",
      handle: "garimpominas",
      bio: "MPB setentista, Clube da Esquina e prensagens brasileiras.",
      city: "Belo Horizonte",
      avatarSeed: 44,
      favoriteGenres: ["MPB", "Rock"],
      collection: [
        socialAlbum("Clube da Esquina", "Milton Nascimento & Lô Borges", 1972, "MPB", "Clube da Esquina", 44),
        socialAlbum("Expresso 2222", "Gilberto Gil", 1972, "MPB", "tropicália", 58),
        socialAlbum("Construção", "Chico Buarque", 1971, "MPB", "canção brasileira", 12)
      ],
      wishlist: [socialAlbum("Acabou Chorare", "Novos Baianos", 1972, "MPB", "samba rock", 45)],
      recentActivity: ["review", "added_to_collection"]
    },
    {
      id: "collector-rafa",
      name: "Rafa",
      handle: "gravebaixo",
      bio: "Trip-hop, dub, eletrônica e discos com grave profundo.",
      city: "Curitiba",
      avatarSeed: 91,
      favoriteGenres: ["Eletrônica", "Hip-Hop", "Soul"],
      collection: [
        socialAlbum("Dummy", "Portishead", 1994, "Eletrônica", "trip-hop", 91),
        socialAlbum("Mezzanine", "Massive Attack", 1998, "Eletrônica", "trip-hop", 96),
        socialAlbum("Black Messiah", "D'Angelo and The Vanguard", 2014, "Soul", "neo soul", 48)
      ],
      wishlist: [socialAlbum("Selected Ambient Works 85-92", "Aphex Twin", 1992, "Eletrônica", "ambient techno", 47)],
      recentActivity: ["review", "saved_to_radar"]
    },
    {
      id: "collector-nina",
      name: "Nina",
      handle: "seloindependente",
      bio: "Lançamentos independentes, reedições recentes e pop torto.",
      city: "Recife",
      avatarSeed: 68,
      favoriteGenres: ["Rock", "Experimental", "Pop"],
      collection: [
        socialAlbum("In Rainbows", "Radiohead", 2007, "Rock", "art rock", 68),
        socialAlbum("Remain in Light", "Talking Heads", 1980, "Rock", "new wave funk", 83),
        socialAlbum("IGOR", "Tyler, The Creator", 2019, "Hip-Hop", "neo soul rap", 39)
      ],
      wishlist: [socialAlbum("LP!", "JPEGMAFIA", 2021, "Hip-Hop", "experimental hip-hop", 43)],
      recentActivity: ["recommendation", "review"]
    }
  ];
}

function socialAlbum(title, artist, year, genre, style, coverSeed) {
  const coverUrl = recommendationCoverUrls[albumIdentityKey({ title, artist })] || "";
  return { id: albumIdentityKey({ title, artist }), title, artist, year, genre, style, tags: [genre, style].filter(Boolean), coverUrl, coverSeed };
}

function buildSeedSocialPosts(collectors = []) {
  const collectorByHandle = new Map(collectors.map((collector) => [collector.handle, collector]));
  return demoSocialFeed.map((post) => {
    const collector = collectorByHandle.get(post.handle);
    return {
      id: post.id,
      type: post.id.includes("dummy") ? "defended_album" : post.id.includes("clube") ? "revisited" : "review",
      userId: collector?.id || `collector-${post.handle}`,
      albumId: albumIdentityKey({ title: post.album, artist: post.artist }),
      albumSnapshot: {
        title: post.album,
        artist: post.artist,
        genre: post.pressing,
        style: post.pressing,
        coverUrl: post.coverUrl,
        coverSeed: post.seed
      },
      note: post.note,
      rating: post.rating,
      tags: [post.pressing].filter(Boolean),
      createdAt: post.createdAt,
      reactions: normalizeSocialReactions({}, post.likes),
      comments: normalizeSocialComments([], post.comments),
      baseCommentCount: post.comments,
      legacyOwnPost: false
    };
  });
}

function migrateLegacySocialPosts(posts = [], currentUserProfile = null) {
  return posts.map((post) => ({
    id: post.id,
    type: post.type || "listening",
    userId: post.ownPost === false ? inferSocialUserId(post, currentUserProfile) : SOCIAL_CURRENT_USER_ID,
    albumId: albumIdentityKey({ title: post.album || post.title, artist: post.artist }),
    albumSnapshot: {
      id: albumIdentityKey({ title: post.album || post.title, artist: post.artist }),
      title: post.album || post.title || "",
      artist: post.artist || "",
      genre: post.genre || post.pressing || "",
      style: post.style || post.pressing || "",
      tags: post.tags || [],
      coverUrl: post.coverUrl || "",
      coverSeed: post.seed || post.coverSeed || 1
    },
    note: post.note || "",
    rating: Number(post.rating || 0),
    tags: post.tags || [],
    createdAt: post.createdAt,
    reactions: normalizeSocialReactions({}, post.likes),
    comments: normalizeSocialComments([], post.comments),
    baseCommentCount: Number(post.comments || 0),
    legacyOwnPost: post.ownPost !== false
  }));
}

function migrateLegacyFollows(following = []) {
  return following.map((collectorId) => ({
    followerId: SOCIAL_CURRENT_USER_ID,
    followingId: collectorId,
    createdAt: new Date().toISOString()
  }));
}

function inferSocialUserId(post = {}, currentUserProfile = null, collectorIds = new Set()) {
  if (post.userId) return post.userId;
  const ownHandle = currentUserProfile?.handle || defaultProfile.handle;
  if (post.ownPost || post.handle === ownHandle) return SOCIAL_CURRENT_USER_ID;
  const collectorId = post.handle ? `collector-${sanitizeHandle(post.handle)}` : "";
  return collectorIds.has(collectorId) ? collectorId : collectorId || SOCIAL_CURRENT_USER_ID;
}

function mergeById(items = []) {
  const byId = new Map();
  items.forEach((item) => {
    if (!item?.id) return;
    byId.set(item.id, { ...(byId.get(item.id) || {}), ...item });
  });
  return [...byId.values()];
}

function stableSeed(value) {
  return String(value || "groova")
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

const CollectionRepository = {
  storageKey: STORAGE_KEY,
  getAll() {
    return loadCollection();
  },
  saveAll(collection, reason = "salvamento pelo repositório local") {
    const normalized = normalizeStoredCollection(collection);
    localStorage.setItem(this.storageKey, JSON.stringify(normalized));
    persistCollectionMirror(normalized, reason);
    return normalized;
  },
  getBackups() {
    return loadCollectionBackups();
  }
};

const RecommendationRepository = {
  wishlistKey: WISHLIST_STORAGE_KEY,
  feedbackKey: RECOMMENDATION_FEEDBACK_STORAGE_KEY,
  getWishlist() {
    return loadWishlist();
  },
  saveWishlist(wishlist = []) {
    localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
    return wishlist;
  },
  getFeedback() {
    return loadRecommendationFeedback();
  },
  saveFeedback(feedback = []) {
    localStorage.setItem(this.feedbackKey, JSON.stringify(feedback));
    return feedback;
  }
};

const SocialRepository = {
  storageKey: SOCIAL_STATE_STORAGE_KEY,
  readState() {
    return loadSocialState();
  },
  saveState(nextSocialState) {
    return saveSocialState(nextSocialState);
  },
  getState() {
    return state.socialState || this.readState();
  },
  commitState(nextSocialState) {
    const saved = this.saveState(nextSocialState);
    state.socialState = saved;
    state.profile = socialProfileToLegacyProfile(saved.currentUserProfile, state.profile);
    state.socialFeed = getLegacyFeedFromSocialState(saved);
    state.following = getFollowingIdsFromSocialState(saved);
    return saved;
  },
  getProfile() {
    return this.getState().currentUserProfile;
  },
  saveProfile(profilePatch = {}) {
    const socialState = this.getState();
    const currentUserProfile = normalizeCurrentUserProfile({
      ...socialState.currentUserProfile,
      ...profilePatch,
      updatedAt: new Date().toISOString()
    });
    return this.commitState({
      ...socialState,
      currentUserProfile,
      updatedAt: new Date().toISOString()
    }).currentUserProfile;
  },
  getSettings() {
    return normalizeSocialSettings(this.getState().socialSettings);
  },
  saveSettings(settingsPatch = {}) {
    const socialState = this.getState();
    const socialSettings = normalizeSocialSettings({
      ...socialState.socialSettings,
      ...settingsPatch
    });
    return this.commitState({
      ...socialState,
      socialSettings,
      updatedAt: new Date().toISOString()
    }).socialSettings;
  },
  getCollectors() {
    return this.getState().socialCollectors;
  },
  getPosts() {
    return this.getState().socialPosts.toSorted((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },
  createPost(postInput = {}) {
    const socialState = this.getState();
    const normalized = normalizeSocialPost(
      {
        id: postInput.id || makeId(),
        type: postInput.type || "listening",
        userId: postInput.userId || SOCIAL_CURRENT_USER_ID,
        albumId: postInput.albumId,
        albumSnapshot: postInput.albumSnapshot,
        note: postInput.note,
        rating: postInput.rating,
        tags: postInput.tags,
        createdAt: postInput.createdAt || new Date().toISOString(),
        reactions: postInput.reactions || {},
        comments: postInput.comments || [],
        legacyOwnPost: true
      },
      socialState.currentUserProfile,
      new Set(socialState.socialCollectors.map((collector) => collector.id))
    );
    this.commitState({
      ...socialState,
      socialPosts: [normalized, ...socialState.socialPosts.filter((post) => post.id !== normalized.id)].slice(0, 160),
      updatedAt: new Date().toISOString()
    });
    return normalized;
  },
  toggleReaction(postId, reactionType = "like") {
    const allowed = ["like", "tambem_sinto_isso", "me_convenceu", "quero_ouvir", "salvar_no_radar"];
    if (!allowed.includes(reactionType)) return null;

    const socialState = this.getState();
    let changedPost = null;
    const socialPosts = socialState.socialPosts.map((post) => {
      if (post.id !== postId) return post;
      const current = new Set(post.reactions?.[reactionType] || []);
      if (current.has(SOCIAL_CURRENT_USER_ID)) current.delete(SOCIAL_CURRENT_USER_ID);
      else current.add(SOCIAL_CURRENT_USER_ID);
      changedPost = {
        ...post,
        reactions: {
          ...post.reactions,
          [reactionType]: [...current]
        }
      };
      return changedPost;
    });
    if (!changedPost) return null;

    this.commitState({
      ...socialState,
      socialPosts,
      updatedAt: new Date().toISOString()
    });
    return changedPost;
  },
  followCollector(collectorId) {
    const socialState = this.getState();
    const follows = socialState.follows || [];
    const existing = follows.some((follow) => follow.followerId === SOCIAL_CURRENT_USER_ID && follow.followingId === collectorId);
    const nextFollows = existing
      ? follows.filter((follow) => !(follow.followerId === SOCIAL_CURRENT_USER_ID && follow.followingId === collectorId))
      : [
          ...follows,
          {
            followerId: SOCIAL_CURRENT_USER_ID,
            followingId: collectorId,
            createdAt: new Date().toISOString()
          }
        ];
    this.commitState({
      ...socialState,
      follows: nextFollows,
      updatedAt: new Date().toISOString()
    });
    return !existing;
  },
  getMatches(myCollection = state.collection, myWishlist = state.wishlist) {
    if (this.getSettings().allowTasteMatching === false) return [];
    return this.getCollectors()
      .map((collector) => ({
        collector,
        match: compareCollections(myCollection, collector.collection || [], myWishlist, collector.wishlist || [])
      }))
      .toSorted((a, b) => b.match.compatibilityPercent - a.match.compatibilityPercent);
  }
};

function getCurrentUserProfile() {
  return SocialRepository.getProfile();
}

function updateCurrentUserProfile(profilePatch = {}) {
  return SocialRepository.saveProfile(profilePatch);
}

function getSocialCollectors() {
  return SocialRepository.getCollectors();
}

function getSocialPosts() {
  return SocialRepository.getPosts();
}

function createSocialPost(postInput = {}) {
  return SocialRepository.createPost(postInput);
}

function toggleSocialReaction(postId, reactionType = "like") {
  return SocialRepository.toggleReaction(postId, reactionType);
}

function toggleFollowCollector(collectorId) {
  return SocialRepository.followCollector(collectorId);
}

function getFollowingIdsFromSocialState(socialState) {
  return (socialState.follows || [])
    .filter((follow) => follow.followerId === SOCIAL_CURRENT_USER_ID)
    .map((follow) => follow.followingId);
}

function getLegacyFeedFromSocialState(socialState) {
  return (socialState.socialPosts || [])
    .filter((post) => post.userId === SOCIAL_CURRENT_USER_ID || post.legacyOwnPost)
    .map((post) => socialPostToTimelinePost(post, socialState))
    .filter((post) => post.ownPost);
}

function socialPostToTimelinePost(post, socialState = state.socialState) {
  const user = post.userId === SOCIAL_CURRENT_USER_ID
    ? socialState.currentUserProfile
    : socialState.socialCollectors.find((collector) => collector.id === post.userId);
  const album = post.albumSnapshot || {};
  return {
    id: post.id,
    type: post.type,
    userId: post.userId,
    user: user?.name || "Colecionador",
    handle: user?.handle || "groova",
    album: album.title || "",
    artist: album.artist || "",
    year: album.year || "",
    genre: album.genre || "",
    style: album.style || "",
    tags: normalizeList(post.tags || album.tags || []),
    pressing: album.style || album.genre || "LP",
    rating: Number(post.rating || 0),
    note: post.note || "",
    createdAt: post.createdAt,
    reactions: post.reactions || normalizeSocialReactions(),
    albumSnapshot: album,
    likes: getSocialReactionCount(post, "like") + getSocialReactionCount(post, "tambem_sinto_isso"),
    comments: getSocialCommentCount(post),
    seed: album.coverSeed || user?.avatarSeed || 1,
    coverUrl: album.coverUrl || "",
    ownPost: post.userId === SOCIAL_CURRENT_USER_ID
  };
}

function getSocialReactionCount(post, reactionType) {
  return Array.isArray(post.reactions?.[reactionType]) ? post.reactions[reactionType].length : 0;
}

function getSocialCommentCount(post) {
  return Number(post.baseCommentCount || 0) + (Array.isArray(post.comments) ? post.comments.length : 0);
}

function loadCoverCache() {
  const stored = localStorage.getItem(COVER_CACHE_STORAGE_KEY);
  if (!stored) return {};

  try {
    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function loadWishlist() {
  const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed.filter((album) => album?.title && album?.artist) : [];
  } catch {
    return [];
  }
}

function loadRecommendationFeedback() {
  const stored = localStorage.getItem(RECOMMENDATION_FEEDBACK_STORAGE_KEY);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed)
      ? parsed.filter((item) => item?.albumKey && item?.action && item?.title && item?.artist)
      : [];
  } catch {
    return [];
  }
}

function saveCollection() {
  if (!state.collection.length) {
    const recovered = getBestCollectionRecovery();
    if (recovered.length) {
      state.collection = recovered;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recovered));
      persistCollectionMirror(recovered, "bloqueio de coleção vazia");
    }
    return;
  }

  persistCollectionMirror(state.collection, "salvamento");
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.collection));
}

function commitCollection(nextCollection, notice = "Recomendações recalculadas.") {
  if (!nextCollection.length && state.collection.length) {
    state.recommendationNotice = "Alteração bloqueada para proteger sua coleção.";
    renderAll();
    return;
  }

  saveCollectionBackup("antes de alterar a coleção");
  state.collection = nextCollection;
  state.recommendationNotice = notice;
  saveCollection();
  renderAll();
}

function parseStoredCollection(rawValue) {
  if (!rawValue) return [];

  try {
    const parsed = JSON.parse(rawValue);
    return normalizeStoredCollection(parsed);
  } catch {
    return [];
  }
}

function normalizeStoredCollection(value) {
  if (!Array.isArray(value)) return [];
  return value.filter((album) => album && typeof album === "object" && album.title && album.artist);
}

function isLegacyDemoCollection(collection) {
  const legacyTitles = new Set([
    "kind of blue",
    "clube da esquina",
    "rumours",
    "dummy",
    "a tabua de esmeralda"
  ]);
  const matches = normalizeStoredCollection(collection).filter((album) =>
    legacyTitles.has(normalizeTitleForIdentity(album.title))
  );

  return collection.length <= 5 && matches.length >= 3;
}

function getBestCollectionRecovery() {
  const candidates = [
    parseStoredCollection(localStorage.getItem(COLLECTION_MIRROR_KEY)),
    ...loadCollectionBackups(),
    recoveredCollectionSnapshot
  ].map(normalizeStoredCollection);

  return candidates.toSorted((left, right) => right.length - left.length)[0] || [];
}

function loadCollectionBackups() {
  try {
    const stored = localStorage.getItem(COLLECTION_BACKUP_KEY);
    const backups = stored ? JSON.parse(stored) : [];
    if (!Array.isArray(backups)) return [];

    return backups
      .map((backup) => {
        if (Array.isArray(backup?.collection)) return backup.collection;
        if (backup?.snapshot) return parseStoredCollection(backup.snapshot);
        return [];
      })
      .filter((collection) => collection.length);
  } catch {
    return [];
  }
}

function persistCollectionMirror(collection, reason) {
  const snapshot = normalizeStoredCollection(collection);
  if (!snapshot.length) return;

  try {
    localStorage.setItem(COLLECTION_MIRROR_KEY, JSON.stringify(snapshot));
    const storedArchive = localStorage.getItem(COLLECTION_ARCHIVE_KEY);
    const archive = storedArchive ? JSON.parse(storedArchive) : [];
    const latest = Array.isArray(archive) ? archive[0] : null;
    const serialized = JSON.stringify(snapshot);
    if (latest?.snapshot === serialized) return;

    localStorage.setItem(
      COLLECTION_ARCHIVE_KEY,
      JSON.stringify(
        [
          {
            createdAt: new Date().toISOString(),
            reason,
            count: snapshot.length,
            snapshot: serialized,
            collection: snapshot
          },
          ...(Array.isArray(archive) ? archive : [])
        ].slice(0, 20)
      )
    );
  } catch {
    // O app segue usando a coleção em memória se o navegador negar espaço.
  }
}

function saveCollectionBackup(reason) {
  if (!state.collection.length) return;

  try {
    const stored = localStorage.getItem(COLLECTION_BACKUP_KEY);
    const backups = stored ? JSON.parse(stored) : [];
    const latest = Array.isArray(backups) ? backups[0] : null;
    const currentSnapshot = JSON.stringify(state.collection);
    if (latest?.snapshot === currentSnapshot) return;

    const nextBackups = [
      {
        createdAt: new Date().toISOString(),
        reason,
        count: state.collection.length,
        snapshot: currentSnapshot,
        collection: state.collection
      },
      ...(Array.isArray(backups) ? backups : [])
    ].slice(0, 8);

    localStorage.setItem(COLLECTION_BACKUP_KEY, JSON.stringify(nextBackups));
  } catch {
    // O cadastro continua funcionando mesmo se o navegador negar espaço para backup.
  }
}

function saveNews() {
  localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(state.news));
}

function saveProfile() {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(state.profile));
  if (state.socialState) {
    const currentProfile = state.socialState.currentUserProfile || {};
    SocialRepository.saveProfile({
      name: state.profile.name,
      handle: state.profile.handle,
      bio: state.profile.bio,
      city: currentProfile.city || "",
      favoriteGenres: state.profile.focus
        .split(/[,+/]/)
        .map((item) => item.trim())
        .filter(Boolean)
    });
  }
}

function saveSocialFeed() {
  localStorage.setItem(SOCIAL_FEED_STORAGE_KEY, JSON.stringify(state.socialFeed));
}

function saveFollowing() {
  localStorage.setItem(FOLLOWING_STORAGE_KEY, JSON.stringify(state.following));
  if (state.socialState) {
    const collectorIds = new Set(state.socialState.socialCollectors.map((collector) => collector.id));
    state.socialState.follows = normalizeFollows(migrateLegacyFollows(state.following), collectorIds);
    state.socialState = saveSocialState(state.socialState);
  }
}

function saveCoverCache() {
  localStorage.setItem(COVER_CACHE_STORAGE_KEY, JSON.stringify(state.coverCache));
}

function saveWishlist() {
  RecommendationRepository.saveWishlist(state.wishlist);
}

function saveRecommendationFeedback() {
  RecommendationRepository.saveFeedback(state.recommendationFeedback);
}

function init() {
  bindEvents();
  renderAll();
  applyInitialViewFromHash();
  createIcons();
}

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  elements.globalSearch.addEventListener("input", renderCollection);
  elements.genreFilter.addEventListener("change", renderCollection);
  elements.sortSelect.addEventListener("change", renderCollection);
  elements.addAlbumButton.addEventListener("click", () => openAlbumDialog());
  elements.emptyAddAlbumButton.addEventListener("click", () => openAlbumDialog());
  elements.exportButton.addEventListener("click", exportCollection);
  elements.refreshNewsButton.addEventListener("click", refreshNews);
  elements.editProfileButton.addEventListener("click", openProfileDialog);
  elements.closeProfileDialogButton.addEventListener("click", closeProfileDialog);
  elements.cancelProfileButton.addEventListener("click", closeProfileDialog);
  elements.profileForm.addEventListener("submit", saveProfileFromForm);
  elements.resetAppButton.addEventListener("click", resetAppData);
  elements.publishSpinButton.addEventListener("click", publishSpin);
  elements.spinEventType.addEventListener("change", updateSpinComposerCopy);
  elements.collectorComparisonDialog.addEventListener("click", (event) => {
    if (event.target === elements.collectorComparisonDialog) closeCollectorComparisonModal();
  });
  elements.albumLoveDialog.addEventListener("click", (event) => {
    if (event.target === elements.albumLoveDialog) closeAlbumLoveModal();
  });
  elements.closeDialogButton.addEventListener("click", closeAlbumDialog);
  elements.cancelAlbumButton.addEventListener("click", closeAlbumDialog);
  elements.deleteAlbumButton.addEventListener("click", deleteCurrentAlbum);
  elements.importAmazonButton.addEventListener("click", () => importAmazonLinkForForm());
  document.querySelector("#albumPurchaseUrl").addEventListener("input", scheduleAmazonImport);
  elements.lookupCoverButton.addEventListener("click", lookupCoverForForm);
  elements.albumCoverFile.addEventListener("change", handleCoverFile);
  document.querySelector("#albumTitle").addEventListener("input", scheduleReleaseLookup);
  document.querySelector("#albumArtist").addEventListener("input", scheduleReleaseLookup);
  document.querySelector("#albumCoverUrl").addEventListener("input", (event) => {
    updateCoverPreview(event.target.value.trim());
  });
  elements.albumForm.addEventListener("submit", saveAlbumFromForm);
  document.querySelector("#albumRating").addEventListener("input", (event) => {
    elements.ratingOutput.textContent = Number(event.target.value).toFixed(1);
  });
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) {
      state.collection = loadCollection();
      state.recommendationNotice = "Coleção sincronizada em outra aba.";
      renderAll();
    }
    if (event.key === COVER_CACHE_STORAGE_KEY) {
      state.coverCache = loadCoverCache();
      renderRecommendations();
    }
  });
  window.addEventListener("hashchange", applyInitialViewFromHash);
}

function renderAll() {
  renderStats();
  renderGenreOptions();
  renderCollection();
  renderRecommendations();
  renderCommunity();
  renderNewsFilters();
  renderNews();
  renderInsights();
  renderSidebarHighlight();
  createIcons();
}

function switchView(view) {
  if (!["collection", "recommendations", "community", "news", "insights"].includes(view)) return;
  state.activeView = view;
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.viewPanel === view);
  });
  if (view === "recommendations") {
    renderRecommendations();
  }
  history.replaceState(null, "", `#${view}`);
  createIcons();
}

function applyInitialViewFromHash() {
  const viewFromHash = window.location.hash.replace("#", "");
  if (viewFromHash) switchView(viewFromHash);
}

function renderStats() {
  const total = state.collection.length;
  const averageRating = total
    ? state.collection.reduce((sum, album) => sum + Number(album.rating || 0), 0) / total
    : 0;
  const genres = new Set(state.collection.map((album) => album.genre));
  const totalInvested = state.collection.reduce((sum, album) => sum + normalizePrice(album.price), 0);

  const cards = [
    { label: "discos cadastrados", value: total },
    { label: "nota média", value: averageRating.toFixed(1) },
    { label: "gêneros", value: genres.size },
    { label: "valor catalogado", value: formatCurrency(totalInvested) }
  ];

  elements.statsGrid.innerHTML = cards
    .map(
      (card) => `
        <article class="stat-card">
          <strong>${card.value}</strong>
          <span>${card.label}</span>
        </article>
      `
    )
    .join("");
}

function renderGenreOptions() {
  const current = elements.genreFilter.value;
  const genres = [...new Set(state.collection.map((album) => album.genre))].sort();
  elements.genreFilter.innerHTML = `
    <option value="all">Todos os gêneros</option>
    ${genres.map((genre) => `<option value="${escapeHtml(genre)}">${escapeHtml(genre)}</option>`).join("")}
  `;
  elements.genreFilter.value = genres.includes(current) ? current : "all";
}

function getFilteredCollection() {
  const term = normalize(elements.globalSearch.value);
  const genre = elements.genreFilter.value;

  let albums = state.collection.filter((album) => {
    const haystack = normalize(
      [
        album.title,
        album.artist,
        album.genre,
        album.style,
        album.comment,
        album.purchasePlace,
        album.price,
        album.tags?.join(" ")
      ].join(" ")
    );
    const matchesTerm = !term || haystack.includes(term);
    const matchesGenre = genre === "all" || album.genre === genre;
    return matchesTerm && matchesGenre;
  });

  const sort = elements.sortSelect.value;
  albums = albums.toSorted((a, b) => {
    if (sort === "rating") return Number(b.rating) - Number(a.rating);
    if (sort === "artist") return a.artist.localeCompare(b.artist, "pt-BR");
    if (sort === "year") return Number(a.year) - Number(b.year);
    return new Date(b.dateAdded) - new Date(a.dateAdded);
  });

  return albums;
}

function renderCollection() {
  const albums = getFilteredCollection();
  preloadImages(albums.map((album) => album.coverUrl).filter(Boolean).slice(0, 12));
  elements.collectionGrid.innerHTML = albums.map(renderAlbumCard).join("");
  elements.collectionEmpty.classList.toggle("hidden", albums.length > 0);
  if (!albums.length) {
    const hasRecords = state.collection.length > 0;
    elements.collectionEmptyTitle.textContent = hasRecords ? "Nenhum disco encontrado" : "Sua estante começa vazia";
    elements.collectionEmptyText.textContent = hasRecords
      ? "Ajuste busca ou filtros para voltar a ver a coleção."
      : "Cadastre seus primeiros discos para ativar recomendações, mapa e feed de audições.";
    elements.emptyAddAlbumButton.classList.toggle("hidden", hasRecords);
  }

  elements.collectionGrid.querySelectorAll("[data-edit-album]").forEach((button) => {
    button.addEventListener("click", () => {
      const album = state.collection.find((item) => item.id === button.dataset.editAlbum);
      openAlbumDialog(album);
    });
  });

  elements.collectionGrid.querySelectorAll("[data-play-album]").forEach((button) => {
    button.addEventListener("click", () => markPlayed(button.dataset.playAlbum));
  });

  elements.collectionGrid.querySelectorAll("[data-share-album]").forEach((button) => {
    button.addEventListener("click", () => prepareSpinPost(button.dataset.shareAlbum));
  });

  elements.collectionGrid.querySelectorAll("[data-album-love]").forEach((button) => {
    button.addEventListener("click", () => openAlbumLoveModal(button.dataset.albumLove));
  });

  renderCoverCanvases();
  createIcons();
}

function renderAlbumCard(album) {
  const purchaseSummary = getPurchaseSummary(album);
  const styleSummary = album.style || "";
  const coverMarkup = album.coverUrl
    ? `
      <canvas width="420" height="420" data-cover-seed="${Number(album.coverSeed || 1)}"></canvas>
      <img src="${escapeAttribute(album.coverUrl)}" alt="Capa de ${escapeAttribute(album.title)}" loading="eager" decoding="async" data-cover-image />
    `
    : `<canvas width="420" height="420" data-cover-seed="${Number(album.coverSeed || 1)}"></canvas>`;

  return `
    <article class="album-card">
      <div class="album-cover">
        ${coverMarkup}
      </div>
      <div class="album-body">
        <div class="album-title-row">
          <div>
            <h3>${escapeHtml(album.title)}</h3>
          </div>
          <span class="rating">${ratingStars(album.rating)}</span>
        </div>
        <div class="album-meta">${escapeHtml(album.artist)} · ${escapeHtml(album.year)}</div>
        <div class="album-card-tags">
          <span>${escapeHtml(album.genre)}</span>
          ${album.condition ? `<span>${escapeHtml(album.condition)}</span>` : ""}
        </div>
        <p class="album-comment">${escapeHtml(album.comment || "Primeira escuta ainda não registrada.")}</p>
        ${styleSummary ? `<div class="album-meta">${escapeHtml(styleSummary)}</div>` : ""}
        ${
          purchaseSummary
            ? `<div class="album-meta purchase-meta">${escapeHtml(purchaseSummary)}</div>`
            : ""
        }
        <div class="card-actions">
          <button class="mini-button" data-play-album="${album.id}">
            <i data-lucide="rotate-cw"></i>
            Registrar escuta
          </button>
          <details class="card-menu">
            <summary aria-label="Mais ações para ${escapeAttribute(album.title)}">
              <i data-lucide="more-horizontal"></i>
            </summary>
            <div class="card-menu-list">
              <button type="button" data-edit-album="${album.id}">
                <i data-lucide="pencil"></i>
                Editar
              </button>
              <button type="button" data-share-album="${album.id}">
                <i data-lucide="radio"></i>
                Compartilhar
              </button>
              <button type="button" data-album-love="${album.id}">
                <i data-lucide="users-round"></i>
                Quem também ama
              </button>
            </div>
          </details>
        </div>
      </div>
    </article>
  `;
}

function openAlbumDialog(album = null) {
  elements.albumForm.reset();
  document.querySelector("#albumId").value = album?.id || "";
  elements.dialogTitle.textContent = album ? "Editar disco" : "Adicionar disco";
  elements.deleteAlbumButton.classList.add("hidden");

  const fields = {
    albumTitle: album?.title || "",
    albumArtist: album?.artist || "",
    albumYear: album?.year || new Date().getFullYear(),
    albumGenre: album?.genre || "",
    albumStyle: album?.style || "",
    albumPressing: album?.pressing || "",
    albumCondition: album?.condition || "Near Mint",
    albumRating: album?.rating || 4,
    albumPurchasePlace: album?.purchasePlace || "",
    albumPrice: album?.price ?? "",
    albumPurchaseUrl: album?.purchaseUrl || "",
    albumCoverUrl: album?.coverUrl || "",
    albumTags: album?.tags?.join(", ") || "",
    albumComment: album?.comment || ""
  };

  Object.entries(fields).forEach(([id, value]) => {
    document.querySelector(`#${id}`).value = value;
  });
  elements.ratingOutput.textContent = Number(fields.albumRating).toFixed(1);
  updateCoverPreview(fields.albumCoverUrl);
  renderReleaseSuggestions([]);
  renderCoverCandidates([]);
  elements.coverStatus.textContent =
    "A busca online aplica a capa mais provável. Se errar, você pode abrir até 3 alternativas ou enviar uma imagem.";
  elements.albumDialog.showModal();
  createIcons();
}

function closeAlbumDialog() {
  clearTimeout(releaseLookupTimer);
  clearTimeout(amazonImportTimer);
  renderReleaseSuggestions([]);
  elements.amazonImportStatus.textContent = "";
  elements.albumDialog.close();
}

function scheduleReleaseLookup() {
  clearTimeout(releaseLookupTimer);
  releaseLookupRequestId += 1;

  const title = document.querySelector("#albumTitle").value.trim();
  const artist = document.querySelector("#albumArtist").value.trim();
  const querySize = normalize(`${title} ${artist}`).replace(/\s+/g, "").length;

  if (querySize < 3) {
    renderReleaseSuggestions([]);
    return;
  }

  const requestId = releaseLookupRequestId;
  const localSuggestions = getLocalReleaseSuggestions(title, artist);
  renderReleaseSuggestions(localSuggestions, { loading: true });

  releaseLookupTimer = setTimeout(async () => {
    const remoteSuggestions = await getRemoteReleaseSuggestions(title, artist);
    if (requestId !== releaseLookupRequestId) return;

    renderReleaseSuggestions([...localSuggestions, ...remoteSuggestions]);
  }, 380);
}

function getLocalReleaseSuggestions(title, artist) {
  const collectionSuggestions = state.collection.map((album) => ({
    ...album,
    source: "Sua coleção",
    coverUrl: album.coverUrl || "",
    inCollection: true
  }));
  const radarSuggestions = recommendationPool.map((album) => ({
    ...album,
    source: "Radar",
    coverUrl: getRecommendationCoverUrl(album),
    inCollection: collectionHasAlbum(album)
  }));

  return rankReleaseSuggestions([...collectionSuggestions, ...radarSuggestions], title, artist)
    .filter((suggestion) => suggestion.score >= 28)
    .slice(0, 4);
}

async function getRemoteReleaseSuggestions(title, artist) {
  const cacheKey = `${normalize(title)}::${normalize(artist)}`;
  if (releaseLookupCache.has(cacheKey)) return releaseLookupCache.get(cacheKey);

  const [apple, musicBrainz] = await Promise.allSettled([
    fetchAppleReleaseSuggestions(title, artist),
    fetchMusicBrainzReleaseSuggestions(title, artist)
  ]);

  const suggestions = rankReleaseSuggestions(
    [
      ...(apple.status === "fulfilled" ? apple.value : []),
      ...(musicBrainz.status === "fulfilled" ? musicBrainz.value : [])
    ],
    title,
    artist
  )
    .filter((suggestion) => suggestion.score >= 36)
    .slice(0, 5);

  releaseLookupCache.set(cacheKey, suggestions);
  return suggestions;
}

async function fetchAppleReleaseSuggestions(title, artist) {
  const term = `${artist} ${title}`.trim();
  if (normalize(term).replace(/\s+/g, "").length < 3) return [];

  const data = await fetchJsonWithTimeout(
    `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=music&entity=album&limit=10`,
    4500
  );
  const results = Array.isArray(data?.results) ? data.results : [];

  return results
    .filter((item) => item.collectionName && item.artistName)
    .map((item) => ({
      source: "Apple",
      title: item.collectionName || "",
      artist: item.artistName || "",
      year: String(item.releaseDate || "").slice(0, 4),
      genre: inferGenreFromRelease({
        title: item.collectionName,
        artist: item.artistName,
        genre: item.primaryGenreName,
        style: item.primaryGenreName
      }),
      style: item.primaryGenreName || "",
      type: item.collectionType || "Album",
      coverUrl: item.artworkUrl100 ? upscaleArtworkUrl(item.artworkUrl100) : "",
      rawScore: 70,
      inCollection: collectionHasAlbum({ title: item.collectionName, artist: item.artistName })
    }));
}

async function fetchMusicBrainzReleaseSuggestions(title, artist) {
  const query = buildReleaseLookupQuery(title, artist);
  if (!query) return [];

  const data = await fetchJsonWithTimeout(
    `https://musicbrainz.org/ws/2/release-group/?query=${encodeURIComponent(query)}&fmt=json&limit=10`,
    4500
  );
  const groups = Array.isArray(data?.["release-groups"]) ? data["release-groups"] : [];

  return groups
    .map((group) => {
      const artistName = (group["artist-credit"] || []).map((credit) => credit.name).join(" ").trim();
      return {
        source: "MusicBrainz",
        title: group.title || "",
        artist: artistName,
        year: String(group["first-release-date"] || "").slice(0, 4),
        genre: inferGenreFromRelease({ title: group.title, artist: artistName }),
        style: "",
        type: group["primary-type"] || "",
        coverUrl: group.id ? `https://coverartarchive.org/release-group/${group.id}/front-500` : "",
        rawScore: Number(group.score || 0),
        inCollection: collectionHasAlbum({ title: group.title, artist: artistName })
      };
    })
    .filter((item) => item.title && item.artist);
}

function buildReleaseLookupQuery(title, artist) {
  const cleanedTitle = cleanReleaseTitle(title);
  if (cleanedTitle && artist) return `releasegroup:"${cleanedTitle}" AND artist:"${artist}"`;
  if (cleanedTitle) return `releasegroup:"${cleanedTitle}"`;
  if (artist) return `artist:"${artist}"`;
  return "";
}

function rankReleaseSuggestions(suggestions, title, artist) {
  return dedupeReleaseSuggestions(
    suggestions.map((suggestion) => ({
      ...suggestion,
      score: scoreReleaseSuggestion(suggestion, title, artist)
    }))
  ).toSorted((a, b) => b.score - a.score);
}

function dedupeReleaseSuggestions(suggestions) {
  const bestByKey = new Map();

  suggestions.forEach((suggestion) => {
    if (!suggestion.title || !suggestion.artist) return;
    const key = albumIdentityKey(suggestion);
    const existing = bestByKey.get(key);
    if (!existing || suggestion.score > existing.score || sourcePriority(suggestion.source) > sourcePriority(existing.source)) {
      bestByKey.set(key, suggestion);
    }
  });

  return [...bestByKey.values()];
}

function sourcePriority(source) {
  return {
    "Sua coleção": 5,
    Radar: 4,
    Apple: 3,
    MusicBrainz: 2
  }[source] || 1;
}

function scoreReleaseSuggestion(suggestion, title, artist) {
  const wantedTitle = normalizeTitleForIdentity(title);
  const wantedArtist = normalizeArtistForIdentity(artist);
  const suggestionTitle = normalizeTitleForIdentity(suggestion.title);
  const suggestionArtist = normalizeArtistForIdentity(suggestion.artist);

  let score = 0;
  if (suggestion.source === "Sua coleção") score += 14;
  if (suggestion.source === "Radar") score += 9;
  if (suggestion.source === "Apple") score += 8;
  if (suggestion.source === "MusicBrainz") score += 6;
  if (suggestion.rawScore) score += Math.min(12, Math.round(Number(suggestion.rawScore) / 10));

  if (wantedTitle) {
    if (suggestionTitle === wantedTitle) score += 42;
    else if (suggestionTitle.startsWith(wantedTitle)) score += 32;
    else if (suggestionTitle.includes(wantedTitle) || wantedTitle.includes(suggestionTitle)) score += 24;
    else score += tokenOverlapScore(wantedTitle, suggestionTitle, 20);
  }

  if (wantedArtist) {
    if (suggestionArtist === wantedArtist) score += 36;
    else if (suggestionArtist.startsWith(wantedArtist)) score += 28;
    else if (suggestionArtist.includes(wantedArtist) || wantedArtist.includes(suggestionArtist)) score += 21;
    else score += tokenOverlapScore(wantedArtist, suggestionArtist, 18);
  }

  if (!wantedTitle && !wantedArtist) score = 0;
  if (normalize(suggestion.type).includes("single")) score -= 10;

  return Math.max(0, Math.min(100, score));
}

function renderReleaseSuggestions(suggestions, options = {}) {
  const visibleSuggestions = dedupeReleaseSuggestions(suggestions).slice(0, 4);
  state.releaseSuggestions = visibleSuggestions;
  const shouldShow = visibleSuggestions.length > 0 || options.loading;
  elements.releaseSuggestions.classList.toggle("hidden", !shouldShow);

  if (!shouldShow) {
    elements.releaseSuggestions.innerHTML = "";
    return;
  }

  elements.releaseSuggestions.innerHTML = `
    <div class="release-lookup-header">
      <div>
        <strong>Padronizar cadastro</strong>
        <span>Escolha uma sugestão para preencher título e artista.</span>
      </div>
      ${options.loading ? `<span class="release-lookup-loading"><i data-lucide="loader-2"></i> buscando</span>` : ""}
    </div>
    <div class="release-suggestion-list">
      ${visibleSuggestions.map(renderReleaseSuggestionButton).join("")}
    </div>
  `;

  elements.releaseSuggestions.querySelectorAll("[data-release-suggestion]").forEach((button) => {
    button.addEventListener("click", () => applyReleaseSuggestion(Number(button.dataset.releaseSuggestion)));
  });
  createIcons();
}

function renderReleaseSuggestionButton(suggestion, index) {
  return `
    <button class="release-suggestion" type="button" data-release-suggestion="${index}">
      <span class="release-suggestion-cover">
        ${
          suggestion.coverUrl
            ? `<img src="${escapeAttribute(suggestion.coverUrl)}" alt="Capa de ${escapeAttribute(suggestion.title)}" loading="lazy" />`
            : `<i data-lucide="disc-3"></i>`
        }
      </span>
      <span class="release-suggestion-copy">
        <strong>${escapeHtml(suggestion.title)}</strong>
        <span>${escapeHtml(suggestion.artist)}${suggestion.year ? ` · ${escapeHtml(suggestion.year)}` : ""}</span>
      </span>
      <span class="release-suggestion-badge">${suggestion.inCollection ? "já cadastrado" : escapeHtml(suggestion.source)}</span>
    </button>
  `;
}

function applyReleaseSuggestion(index) {
  const suggestion = state.releaseSuggestions[index];
  if (!suggestion) return;

  applyReleaseToForm(suggestion);
  renderReleaseSuggestions([]);
  elements.coverStatus.textContent = suggestion.coverUrl
    ? "Cadastro padronizado e capa provável aplicada."
    : "Cadastro padronizado. Você ainda pode buscar a capa oficial.";
}

function applyReleaseToForm(suggestion) {
  const suggestedGenre = inferGenreFromRelease(suggestion);

  document.querySelector("#albumTitle").value = suggestion.title || "";
  document.querySelector("#albumArtist").value = suggestion.artist || "";
  if (suggestion.year) document.querySelector("#albumYear").value = suggestion.year;
  if (suggestedGenre) document.querySelector("#albumGenre").value = suggestedGenre;
  if (suggestion.style && !document.querySelector("#albumStyle").value.trim()) {
    document.querySelector("#albumStyle").value = suggestion.style;
  }
  if (suggestion.coverUrl) {
    document.querySelector("#albumCoverUrl").value = suggestion.coverUrl;
    updateCoverPreview(suggestion.coverUrl);
  }
}

function scheduleAmazonImport() {
  clearTimeout(amazonImportTimer);
  amazonImportRequestId += 1;
  const rawUrl = document.querySelector("#albumPurchaseUrl").value.trim();
  elements.amazonImportStatus.textContent = "";

  if (!rawUrl || !looksLikeAmazonUrl(rawUrl)) return;

  const requestId = amazonImportRequestId;
  amazonImportTimer = setTimeout(() => {
    if (requestId === amazonImportRequestId) {
      importAmazonLinkForForm({ automatic: true });
    }
  }, 700);
}

async function importAmazonLinkForForm(options = {}) {
  const rawUrl = document.querySelector("#albumPurchaseUrl").value.trim();
  if (!rawUrl) {
    elements.amazonImportStatus.textContent = "Cole o link da Amazon para preencher o disco.";
    return;
  }

  const productLink = parseAmazonProductUrl(rawUrl);
  if (!productLink.isAmazon) {
    elements.amazonImportStatus.textContent = "Esse link não parece ser da Amazon.";
    return;
  }

  if (productLink.isShortened) {
    elements.amazonImportStatus.textContent =
      "Link salvo. Links curtos da Amazon não trazem dados suficientes para preencher automaticamente.";
    document.querySelector("#albumPurchasePlace").value = "Amazon";
    return;
  }

  const purchaseUrlInput = document.querySelector("#albumPurchaseUrl");
  purchaseUrlInput.value = productLink.canonicalUrl || rawUrl;
  document.querySelector("#albumPurchasePlace").value = "Amazon";

  const inferredRelease = inferReleaseFromAmazonProduct(productLink);
  if (!inferredRelease.title && !inferredRelease.artist) {
    elements.amazonImportStatus.textContent =
      "Link salvo. Não consegui identificar o disco nesse endereço.";
    return;
  }

  elements.importAmazonButton.disabled = true;
  elements.amazonImportStatus.textContent = "Buscando o disco nos catálogos de música...";

  try {
    const suggestions = await getAmazonReleaseSuggestions(inferredRelease);
    const bestSuggestion = suggestions[0];

    if (!bestSuggestion || bestSuggestion.score < 40) {
      fillAmazonGuess(inferredRelease);
      renderReleaseSuggestions(suggestions);
      elements.amazonImportStatus.textContent =
        "Link salvo. Revise a sugestão antes de salvar o disco.";
      return;
    }

    applyReleaseToForm(bestSuggestion);
    await applyBestCoverIfMissing(bestSuggestion);
    renderReleaseSuggestions(suggestions.slice(1, 4));
    elements.amazonImportStatus.textContent = `Preenchido pela Amazon: ${bestSuggestion.title} - ${bestSuggestion.artist}.`;
  } catch {
    fillAmazonGuess(inferredRelease);
    elements.amazonImportStatus.textContent =
      options.automatic ? "" : "Link salvo. Não consegui consultar os catálogos agora.";
  } finally {
    elements.importAmazonButton.disabled = false;
  }
}

function looksLikeAmazonUrl(value) {
  try {
    const url = normalizeUrlInput(value);
    const host = url.hostname.replace(/^www\./, "").toLowerCase();
    return host === "amzn.to" || host.includes("amazon.");
  } catch {
    return false;
  }
}

function parseAmazonProductUrl(value) {
  try {
    const url = normalizeUrlInput(value);
    const host = url.hostname.replace(/^www\./, "").toLowerCase();
    const isAmazon = host === "amzn.to" || host.includes("amazon.");
    const asin =
      url.pathname.match(/\/(?:dp|gp\/product|product)\/([A-Z0-9]{10})(?:[/?]|$)/i)?.[1] ||
      url.searchParams.get("asin") ||
      url.searchParams.get("ASIN") ||
      "";

    return {
      isAmazon,
      isShortened: host === "amzn.to",
      asin: asin.toUpperCase(),
      slugText: extractAmazonSlugText(url),
      canonicalUrl: isAmazon && asin ? `${url.origin}/dp/${asin.toUpperCase()}` : stripUrlTracking(url)
    };
  } catch {
    return { isAmazon: false, isShortened: false, asin: "", slugText: "", canonicalUrl: "" };
  }
}

function normalizeUrlInput(value) {
  const raw = String(value || "").trim();
  return new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
}

function stripUrlTracking(url) {
  const cleanUrl = new URL(url.href);
  cleanUrl.search = "";
  cleanUrl.hash = "";
  return cleanUrl.href;
}

function extractAmazonSlugText(url) {
  const parts = url.pathname.split("/").filter(Boolean);
  const productIndex = parts.findIndex((part, index) => part === "dp" || (part === "product" && parts[index - 1] === "gp"));
  const routeParts = new Set(["dp", "gp", "product", "s", "exec", "obidos"]);
  const slug =
    productIndex > 0
      ? parts[productIndex - 1]
      : parts.find((part) => !routeParts.has(part.toLowerCase()) && !/^[A-Z0-9]{10}$/i.test(part)) || "";

  return decodeURIComponent(slug)
    .replace(/[-_+]+/g, " ")
    .replace(/\b(vinyl|vinil|lp|lps|2lp|3lp|disco|record|records|album|cd|importado|import|lacrado)\b/gi, " ")
    .replace(/\b(deluxe|expanded|limited|edition|edicao|edição|explicit|version|versao|versão|remaster|remastered)\b/gi, " ")
    .replace(/\b(black|colored|colour|color|180g|gram|grams|gatefold|amazon|exclusive)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function inferReleaseFromAmazonProduct(productLink) {
  const text = normalizeIdentityText(productLink.slugText);
  if (!text) return { title: "", artist: "" };

  const catalog = getReleaseReferenceCatalog();
  const best = catalog
    .map((release) => {
      const title = normalizeTitleForIdentity(release.title);
      const artist = normalizeArtistForIdentity(release.artist);
      const titleScore = text.includes(title) ? 54 : tokenOverlapScore(title, text, 38);
      const artistScore = text.includes(artist) ? 34 : tokenOverlapScore(artist, text, 22);
      return { ...release, score: titleScore + artistScore };
    })
    .toSorted((a, b) => b.score - a.score)[0];

  if (best?.score >= 52) {
    return { title: best.title, artist: best.artist };
  }

  const artist = findKnownArtistInText(text, catalog);
  const title = cleanAmazonTitleGuess(text, artist);
  return { title, artist };
}

function getReleaseReferenceCatalog() {
  const staticHints = [
    { artist: "Eminem", title: "The Eminem Show" },
    { artist: "Eminem", title: "The Marshall Mathers LP" },
    { artist: "Eminem", title: "The Slim Shady LP" },
    { artist: "Eminem", title: "Encore" },
    { artist: "Kanye West", title: "The College Dropout" },
    { artist: "Dr. Dre", title: "The Chronic" },
    { artist: "Jay-Z", title: "The Blueprint" },
    { artist: "Outkast", title: "Stankonia" }
  ];

  return dedupeReleaseSuggestions([...state.collection, ...recommendationPool, ...staticHints]).filter(
    (release) => release.title && release.artist
  );
}

function findKnownArtistInText(text, catalog) {
  return catalog
    .map((release) => release.artist)
    .filter(Boolean)
    .toSorted((a, b) => b.length - a.length)
    .find((artist) => text.includes(normalizeArtistForIdentity(artist))) || "";
}

function cleanAmazonTitleGuess(text, artist) {
  let title = text;
  if (artist) {
    title = title.replace(new RegExp(`\\b${escapeRegExp(normalizeArtistForIdentity(artist))}\\b`, "g"), " ");
  }
  title = title
    .replace(/\b(vinyl|vinil|lp|record|records|album|deluxe|edition|limited|explicit|remaster|importado)\b/g, " ")
    .replace(/\b\d+\s*(g|gram|grams)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return title
    .split(" ")
    .map((word) => (word.length <= 2 ? word : word[0].toUpperCase() + word.slice(1)))
    .join(" ");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getAmazonReleaseSuggestions(inferredRelease) {
  const localSuggestions = getLocalReleaseSuggestions(inferredRelease.title, inferredRelease.artist);
  const remoteSuggestions = await getRemoteReleaseSuggestions(inferredRelease.title, inferredRelease.artist);
  return rankReleaseSuggestions([...localSuggestions, ...remoteSuggestions], inferredRelease.title, inferredRelease.artist)
    .filter((suggestion) => suggestion.score >= 32)
    .slice(0, 4);
}

function fillAmazonGuess(inferredRelease) {
  if (inferredRelease.title && !document.querySelector("#albumTitle").value.trim()) {
    document.querySelector("#albumTitle").value = inferredRelease.title;
  }
  if (inferredRelease.artist && !document.querySelector("#albumArtist").value.trim()) {
    document.querySelector("#albumArtist").value = inferredRelease.artist;
  }
}

async function applyBestCoverIfMissing(release) {
  if (document.querySelector("#albumCoverUrl").value.trim()) return;
  const candidates = await fetchCoverCandidates(release.title, release.artist);
  const best = candidates[0];
  if (!best?.coverUrl) return;

  document.querySelector("#albumCoverUrl").value = best.coverUrl;
  updateCoverPreview(best.coverUrl);
}

function normalizeGenreOption(value) {
  const text = normalize(value);
  if (!text.trim()) return "";
  const options = [...document.querySelector("#albumGenre").options].map((option) => option.value);
  const direct = options.find((option) => normalize(option) === text);
  if (direct) return direct;
  if (["rap", "hip hop", "hip-hop"].some((term) => text.includes(term))) return "Hip-Hop";
  if (["r&b", "soul", "funk"].some((term) => text.includes(term))) return "Soul";
  if (["mpb", "bossa", "samba", "tropicalia", "tropicália"].some((term) => text.includes(normalize(term)))) return "MPB";
  if (["electronic", "eletronica", "eletrônica", "ambient", "techno", "trip hop"].some((term) => text.includes(normalize(term)))) {
    return "Eletrônica";
  }
  if (["jazz", "bebop", "hard bop"].some((term) => text.includes(term))) return "Jazz";
  if (["classical", "classica", "clássica"].some((term) => text.includes(normalize(term)))) return "Clássica";
  if (["pop"].some((term) => text.includes(term))) return "Pop";
  if (["experimental", "avant"].some((term) => text.includes(term))) return "Experimental";
  if (["rock", "punk", "metal", "indie", "alternative"].some((term) => text.includes(term))) return "Rock";
  return "";
}

function inferGenreFromRelease(release) {
  const directGenre = normalizeGenreOption(release?.genre || release?.style || "");
  if (directGenre) return directGenre;

  const artist = normalizeArtistForIdentity(release?.artist || "");
  const title = normalizeTitleForIdentity(release?.title || "");
  const searchable = `${artist} ${title}`;
  const artistRules = [
    {
      genre: "Hip-Hop",
      terms: [
        "eminem",
        "drake",
        "kendrick lamar",
        "mac miller",
        "kid cudi",
        "snoop dogg",
        "future",
        "post malone",
        "the weeknd",
        "nas",
        "madvillain",
        "mf doom",
        "a tribe called quest",
        "jpegmafia",
        "tyler creator",
        "little simz",
        "dr dre",
        "jay z",
        "kanye west"
      ]
    },
    { genre: "Jazz", terms: ["john coltrane", "miles davis", "herbie hancock", "charles mingus", "thelonious monk"] },
    { genre: "MPB", terms: ["gilberto gil", "chico buarque", "caetano veloso", "jorge ben", "tim maia"] },
    { genre: "Soul", terms: ["marvin gaye", "d angelo", "stevie wonder", "sade", "sza", "frank ocean"] },
    { genre: "Eletrônica", terms: ["aphex twin", "massive attack", "burial", "daft punk"] },
    { genre: "Rock", terms: ["radiohead", "talking heads", "the beatles", "pink floyd", "nirvana"] }
  ];

  return artistRules.find((rule) => rule.terms.some((term) => searchable.includes(normalizeArtistForIdentity(term))))?.genre || "";
}

async function lookupCoverForForm() {
  const title = document.querySelector("#albumTitle").value.trim();
  const artist = document.querySelector("#albumArtist").value.trim();

  if (!title || !artist) {
    elements.coverStatus.textContent = "Preencha título e artista antes de buscar a capa online.";
    return;
  }

  elements.lookupCoverButton.disabled = true;
  renderCoverCandidates([]);
  elements.coverStatus.textContent = "Buscando capas em catálogos públicos...";

  try {
    const candidates = await fetchCoverCandidates(title, artist);
    if (!candidates.length) {
      elements.coverStatus.textContent =
        "Não encontrei uma capa confiável. Você pode colar uma URL, corrigir título/artista ou enviar uma imagem.";
      return;
    }

    const bestCandidates = candidates.slice(0, 3);
    renderCoverCandidates(bestCandidates, { hidden: true });
    applyCoverCandidate(0, { silent: true });
    renderAutomaticCoverStatus(bestCandidates[0], bestCandidates.length);
  } catch {
    elements.coverStatus.textContent = "Não foi possível buscar a capa agora. Tente enviar uma imagem ou colar uma URL.";
  } finally {
    elements.lookupCoverButton.disabled = false;
  }
}

async function handleCoverFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    elements.coverStatus.textContent = "Escolha um arquivo de imagem para usar como capa.";
    return;
  }

  elements.coverStatus.textContent = "Preparando imagem local...";

  try {
    const dataUrl = await resizeImageFile(file, 900);
    document.querySelector("#albumCoverUrl").value = dataUrl;
    updateCoverPreview(dataUrl);
    elements.coverStatus.textContent = "Imagem local pronta. Ela será salva reduzida no navegador.";
  } catch {
    elements.coverStatus.textContent = "Não consegui processar essa imagem. Tente outra foto da capa.";
  } finally {
    event.target.value = "";
  }
}

function updateCoverPreview(src) {
  if (!src) {
    elements.coverPreview.innerHTML = `
      <i data-lucide="image"></i>
      <span>A capa real aparecerá no card do disco.</span>
    `;
    createIcons();
    return;
  }

  elements.coverPreview.innerHTML = `<img src="${escapeAttribute(src)}" alt="Prévia da capa" />`;
  const image = elements.coverPreview.querySelector("img");
  image.addEventListener("error", () => {
    elements.coverPreview.innerHTML = `
      <i data-lucide="image-off"></i>
      <span>Não foi possível carregar essa imagem.</span>
    `;
    createIcons();
  });
}

function renderCoverCandidates(candidates, options = {}) {
  const visibleCandidates = candidates.slice(0, 3);
  state.coverCandidates = visibleCandidates;
  elements.coverCandidates.classList.toggle("hidden", options.hidden || visibleCandidates.length === 0);
  elements.coverCandidates.innerHTML = visibleCandidates
    .map(
      (candidate, index) => `
        <button class="cover-candidate" type="button" data-cover-candidate="${index}">
          <img src="${escapeAttribute(candidate.coverUrl)}" alt="Capa candidata de ${escapeAttribute(candidate.title)}" loading="lazy" />
          <strong>${escapeHtml(candidate.title)}</strong>
          <span>${escapeHtml(candidate.artist)}${candidate.year ? ` · ${escapeHtml(candidate.year)}` : ""}</span>
          <span>${escapeHtml(candidate.source)} · confiança ${candidate.score}</span>
        </button>
      `
    )
    .join("");

  elements.coverCandidates.querySelectorAll("[data-cover-candidate]").forEach((button) => {
    button.addEventListener("click", () => applyCoverCandidate(Number(button.dataset.coverCandidate)));
  });
}

function renderAutomaticCoverStatus(candidate, alternativesCount) {
  if (!candidate) return;

  elements.coverStatus.innerHTML = `
    <span>Capa mais provável aplicada automaticamente (${escapeHtml(candidate.source)}, confiança ${candidate.score}).</span>
    ${
      alternativesCount > 1
        ? `<button type="button" class="cover-options-button" id="showCoverOptionsButton">Esta não é a capa? Ver ${alternativesCount} opções</button>`
        : ""
    }
  `;

  const showOptionsButton = document.querySelector("#showCoverOptionsButton");
  if (!showOptionsButton) return;

  showOptionsButton.addEventListener("click", () => {
    elements.coverCandidates.classList.remove("hidden");
    elements.coverStatus.textContent = `Escolha uma das ${alternativesCount} capas mais prováveis ou envie uma imagem própria.`;
  });
}

function applyCoverCandidate(index, options = {}) {
  const candidate = state.coverCandidates[index];
  if (!candidate) return;

  document.querySelector("#albumCoverUrl").value = candidate.coverUrl;
  updateCoverPreview(candidate.coverUrl);
  elements.coverCandidates.querySelectorAll(".cover-candidate").forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.coverCandidate) === index);
  });
  if (!options.silent) {
    elements.coverStatus.textContent = `Capa selecionada: ${candidate.title} - ${candidate.artist} (${candidate.source}).`;
  }
}

async function fetchCoverCandidates(title, artist) {
  const trustedCandidates = getTrustedCoverCandidates(title, artist);
  if (trustedCandidates.length) {
    return trustedCandidates;
  }

  const [musicBrainz, apple] = await Promise.allSettled([
    fetchMusicBrainzCoverCandidates(title, artist),
    fetchAppleCoverCandidates(title, artist)
  ]);

  const rawCandidates = [
    ...(musicBrainz.status === "fulfilled" ? musicBrainz.value : []),
    ...(apple.status === "fulfilled" ? apple.value : [])
  ];
  const uniqueCandidates = dedupeCoverCandidates(rawCandidates)
    .map((candidate) => enrichCoverCandidate(candidate, title, artist))
    .filter((candidate) => candidate.reliable)
    .toSorted((a, b) => b.score - a.score)
    .slice(0, 10);

  return filterLoadableCoverCandidates(uniqueCandidates).then((candidates) => candidates.slice(0, 8));
}

function getTrustedCoverCandidates(title, artist) {
  const album = { title, artist };
  const identityKey = albumIdentityKey(album);
  const candidates = [];

  const collectionMatch = state.collection.find(
    (item) => albumIdentityKey(item) === identityKey && item.coverUrl
  );
  if (collectionMatch) {
    candidates.push({
      source: "Coleção",
      title: collectionMatch.title || title,
      artist: collectionMatch.artist || artist,
      year: String(collectionMatch.year || ""),
      type: collectionMatch.format || "LP",
      coverUrl: collectionMatch.coverUrl,
      rawScore: 98,
      trustedMatch: true,
      trustedPriority: 4
    });
  }

  const knownCoverUrl = recommendationCoverUrls[identityKey];
  if (knownCoverUrl) {
    const knownAlbum = recommendationPool.find((item) => albumIdentityKey(item) === identityKey);
    candidates.push({
      source: "Groova",
      title: knownAlbum?.title || title,
      artist: knownAlbum?.artist || artist,
      year: knownAlbum?.year ? String(knownAlbum.year) : "",
      type: "Album",
      coverUrl: knownCoverUrl,
      rawScore: 100,
      trustedMatch: true,
      trustedPriority: 3
    });
  }

  const cachedCoverUrl = state.coverCache[coverCacheKey(album)] || state.coverCache[legacyCoverCacheKey(album)];
  if (cachedCoverUrl) {
    candidates.push({
      source: "Cache",
      title,
      artist,
      year: "",
      type: "Album",
      coverUrl: cachedCoverUrl,
      rawScore: 88,
      trustedMatch: true,
      trustedPriority: 1
    });
  }

  return dedupeCoverCandidates(candidates)
    .map((candidate) => enrichCoverCandidate(candidate, title, artist))
    .toSorted((a, b) => (b.trustedPriority || 0) - (a.trustedPriority || 0) || b.score - a.score)
    .slice(0, 3);
}

async function fetchMusicBrainzCoverCandidates(title, artist) {
  const candidates = [];

  for (const searchTerm of buildMusicBrainzQueries(title, artist)) {
    let data = null;
    try {
      data = await fetchJsonWithTimeout(
        `https://musicbrainz.org/ws/2/release-group/?query=${encodeURIComponent(searchTerm)}&fmt=json&limit=10`,
        5000
      );
    } catch {
      continue;
    }
    const groups = Array.isArray(data?.["release-groups"]) ? data["release-groups"] : [];
    groups.forEach((group) => {
      const artistName = (group["artist-credit"] || []).map((credit) => credit.name).join(" ").trim();
      candidates.push({
        source: "MusicBrainz",
        title: group.title || "",
        artist: artistName,
        year: String(group["first-release-date"] || "").slice(0, 4),
        type: group["primary-type"] || "",
        coverUrl: `https://coverartarchive.org/release-group/${group.id}/front-500`,
        rawScore: Number(group.score || 0)
      });
    });
    if (candidates.length >= 8) break;
  }

  return candidates;
}

async function fetchAppleCoverCandidates(title, artist) {
  const candidates = [];

  for (const searchTerm of buildCoverSearchTerms(title, artist)) {
    let data = null;
    try {
      data = await fetchJsonWithTimeout(
        `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&media=music&entity=album&limit=20&country=US`,
        5000
      );
    } catch {
      continue;
    }
    const results = Array.isArray(data?.results) ? data.results : [];
    results.forEach((item) => {
      if (!item.artworkUrl100) return;
      candidates.push({
        source: "Apple",
        title: item.collectionName || "",
        artist: item.artistName || "",
        year: String(item.releaseDate || "").slice(0, 4),
        type: item.collectionType || "Album",
        coverUrl: upscaleArtworkUrl(item.artworkUrl100),
        rawScore: 58
      });
    });
    if (candidates.length >= 12) break;
  }

  return candidates;
}

function buildCoverSearchTerms(title, artist) {
  const cleanTitle = title
    .replace(/\([^)]*\)|\[[^\]]*]/g, " ")
    .replace(/\b(remaster|remastered|deluxe|expanded|edition|versao|versão|reissue|reedição)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  const titleWords = cleanTitle.split(/\s+/).filter(Boolean);
  const shortenedTitle = titleWords.length > 3 ? titleWords.slice(0, 3).join(" ") : cleanTitle;
  const cleanArtist = String(artist || "").replace(/\s+/g, " ").trim();

  const terms = cleanArtist
    ? [`${cleanArtist} ${cleanTitle}`, `${cleanArtist} ${title}`, `${cleanTitle} ${cleanArtist}`, `${cleanArtist} ${shortenedTitle}`]
    : [cleanTitle, title, shortenedTitle];

  return [...new Set(terms)].filter((term) => term.trim().length > 1);
}

function buildMusicBrainzQueries(title, artist) {
  const cleanedTitle = cleanReleaseTitle(title);
  return [
    `releasegroup:"${cleanedTitle}" AND artist:"${artist}"`,
    `release:"${cleanedTitle}" AND artist:"${artist}"`,
    `${artist} ${cleanedTitle}`,
    `${artist} ${title}`
  ].filter((query, index, queries) => query.trim().length > 1 && queries.indexOf(query) === index);
}

function cleanReleaseTitle(title) {
  return String(title || "")
    .replace(/\([^)]*\)|\[[^\]]*]/g, " ")
    .replace(/\b(remaster|remastered|deluxe|expanded|edition|versao|versão|reissue|reedição)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function enrichCoverCandidate(candidate, title, artist) {
  const wantedTitle = normalizeTitleForIdentity(title);
  const wantedArtist = normalizeArtistForIdentity(artist);
  const candidateTitle = normalizeTitleForIdentity(candidate.title);
  const candidateArtist = normalizeArtistForIdentity(candidate.artist);
  const titleScore = coverTitleMatchScore(wantedTitle, candidateTitle);
  const artistScore = coverArtistMatchScore(wantedArtist, candidateArtist);
  const titleTokenCount = wantedTitle.split(/\s+/).filter(Boolean).length;
  const titleThreshold = titleTokenCount <= 2 ? 30 : 24;
  const artistThreshold = wantedArtist ? 18 : 0;

  let score = 0;
  if (candidate.trustedMatch) score += 22;
  if (candidate.source === "MusicBrainz") score += 12;
  if (candidate.source === "Apple") score += 6;
  if (candidate.rawScore) score += Math.min(10, Math.round(Number(candidate.rawScore) / 10));
  score += titleScore + artistScore;

  const type = normalize(candidate.type);
  if (["album", "lp", "ep", "compilation", "soundtrack"].some((value) => type.includes(value))) score += 6;
  if (type.includes("single")) score -= 14;

  const reliable =
    Boolean(candidate.trustedMatch) ||
    Boolean(candidate.coverUrl && candidateTitle && candidateArtist && titleScore >= titleThreshold && artistScore >= artistThreshold);

  return {
    ...candidate,
    score: Math.max(0, Math.min(100, score)),
    titleScore,
    artistScore,
    reliable
  };
}

function coverTitleMatchScore(wantedTitle, candidateTitle) {
  if (!wantedTitle || !candidateTitle) return 0;
  if (candidateTitle === wantedTitle) return 42;

  if (candidateTitle.includes(wantedTitle) || wantedTitle.includes(candidateTitle)) {
    const similarity = albumTitleSimilarity(wantedTitle, candidateTitle);
    if (similarity >= 0.75) return 34;
    if (similarity >= 0.5 && wantedTitle.split(/\s+/).length > 1) return 24;
    return 16;
  }

  return tokenOverlapScore(wantedTitle, candidateTitle, 28);
}

function coverArtistMatchScore(wantedArtist, candidateArtist) {
  if (!wantedArtist) return 0;
  if (!candidateArtist) return 0;
  if (candidateArtist === wantedArtist) return 35;
  if (candidateArtist.includes(wantedArtist) || wantedArtist.includes(candidateArtist)) return 28;

  const similarity = albumTitleSimilarity(wantedArtist, candidateArtist);
  if (similarity >= 0.67) return 24;
  if (similarity >= 0.5) return 18;

  return tokenOverlapScore(wantedArtist, candidateArtist, 16);
}

function tokenOverlapScore(left, right, maxScore) {
  const leftTokens = new Set(String(left).split(/\s+/).filter((token) => token.length > 2));
  const rightTokens = new Set(String(right).split(/\s+/).filter((token) => token.length > 2));
  if (!leftTokens.size || !rightTokens.size) return 0;

  const hits = [...leftTokens].filter((token) => rightTokens.has(token)).length;
  return Math.round((hits / leftTokens.size) * maxScore);
}

function dedupeCoverCandidates(candidates) {
  const seen = new Set();
  return candidates.filter((candidate) => {
    const key = normalize(`${candidate.source} ${candidate.title} ${candidate.artist} ${candidate.coverUrl}`);
    if (!candidate.coverUrl || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function filterLoadableCoverCandidates(candidates) {
  const checks = await Promise.all(
    candidates.map(async (candidate) => ((await imageCanLoad(candidate.coverUrl)) ? candidate : null))
  );
  return checks.filter(Boolean);
}

function imageCanLoad(src) {
  return new Promise((resolve) => {
    const image = new Image();
    const timeout = setTimeout(() => {
      image.onload = null;
      image.onerror = null;
      resolve(false);
    }, 3500);
    image.onload = () => {
      clearTimeout(timeout);
      resolve(true);
    };
    image.onerror = () => {
      clearTimeout(timeout);
      resolve(false);
    };
    image.src = src;
  });
}

async function fetchJsonWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) return null;
    return response.json();
  } finally {
    clearTimeout(timeout);
  }
}

function upscaleArtworkUrl(url) {
  return String(url).replace(/\/\d+x\d+bb\./, "/600x600bb.");
}

function resizeImageFile(file, maxSize) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const image = new Image();
      image.onerror = reject;
      image.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.84));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function saveAlbumFromForm(event) {
  event.preventDefault();
  const id = document.querySelector("#albumId").value;
  const existing = state.collection.find((album) => album.id === id);

  const album = {
    id: existing?.id || makeId(),
    title: document.querySelector("#albumTitle").value.trim(),
    artist: document.querySelector("#albumArtist").value.trim(),
    year: Number(document.querySelector("#albumYear").value),
    genre: document.querySelector("#albumGenre").value,
    style: document.querySelector("#albumStyle").value.trim(),
    pressing: document.querySelector("#albumPressing").value.trim(),
    condition: document.querySelector("#albumCondition").value,
    rating: Number(document.querySelector("#albumRating").value),
    purchasePlace: document.querySelector("#albumPurchasePlace").value.trim(),
    price: parsePriceInput(document.querySelector("#albumPrice").value),
    purchaseUrl: sanitizePurchaseUrl(document.querySelector("#albumPurchaseUrl").value.trim()),
    coverUrl: document.querySelector("#albumCoverUrl").value.trim(),
    tags: document
      .querySelector("#albumTags")
      .value.split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    comment: document.querySelector("#albumComment").value.trim(),
    dateAdded: existing?.dateAdded || new Date().toISOString(),
    listenCount: existing?.listenCount || 0,
    lastPlayed: existing?.lastPlayed || null,
    coverSeed: existing?.coverSeed || Math.floor(Math.random() * 100) + 1
  };

  if (existing) {
    commitCollection(
      state.collection.map((item) => (item.id === existing.id ? album : item)),
      `Radar recalculado após editar ${album.title}.`
    );
  } else {
    commitCollection([album, ...state.collection], `Radar recalculado com ${album.title}.`);
    createSocialPost({
      type: "added_to_collection",
      albumId: album.id || albumIdentityKey(album),
      albumSnapshot: normalizeSocialAlbumSnapshot(album),
      note: getComposerDefaultNote("added_to_collection", album),
      rating: Number(album.rating || 0),
      tags: album.tags || []
    });
  }

  closeAlbumDialog();
}

function deleteCurrentAlbum() {
  saveCollectionBackup("tentativa de exclusão bloqueada");
  elements.coverStatus.textContent = "Exclusão bloqueada para proteger sua coleção. O disco foi mantido.";
}

function markPlayed(id) {
  const playedAlbum = state.collection.find((album) => album.id === id);
  const nextCollection = state.collection.map((album) =>
    album.id === id
      ? {
          ...album,
          listenCount: Number(album.listenCount || 0) + 1,
          lastPlayed: new Date().toISOString()
        }
      : album
  );
  if (playedAlbum) {
    const eventType = Number(playedAlbum.listenCount || 0) > 0 ? "revisited" : "listening";
    addSpinToFeed(playedAlbum, getComposerDefaultNote(eventType, playedAlbum), eventType);
  }
  commitCollection(nextCollection, playedAlbum ? `Radar atualizado com nova audição de ${playedAlbum.title}.` : "Radar atualizado.");
}

function prepareSpinPost(id) {
  switchView("community");
  elements.spinAlbumSelect.value = id;
  elements.spinNoteInput.value = "";
  elements.spinNoteInput.focus();
}

function publishSpin() {
  const album = state.collection.find((item) => item.id === elements.spinAlbumSelect.value);
  if (!album) return;

  const eventType = elements.spinEventType.value || "listening";
  const note = elements.spinNoteInput.value.trim() || getComposerDefaultNote(eventType, album);
  addSpinToFeed(album, note, eventType);
  elements.spinNoteInput.value = "";
  renderCommunity();
  createIcons();
}

function addSpinToFeed(album, note, type = "listening") {
  createSocialPost({
    type,
    albumId: album.id || albumIdentityKey(album),
    albumSnapshot: normalizeSocialAlbumSnapshot(album),
    note,
    rating: Number(album.rating || 0),
    tags: album.tags || []
  });
}

function openProfileDialog() {
  const currentProfile = getCurrentUserProfile();
  const settings = SocialRepository.getSettings();
  document.querySelector("#profileName").value = currentProfile.name || state.profile.name;
  document.querySelector("#profileHandle").value = currentProfile.handle || state.profile.handle;
  document.querySelector("#profileCity").value = currentProfile.city || "";
  document.querySelector("#profileFocus").value = state.profile.focus;
  document.querySelector("#profileRitual").value = state.profile.ritual;
  document.querySelector("#profileBio").value = currentProfile.bio || state.profile.bio;
  document.querySelector("#profileShowCollection").checked = Boolean(settings.showCollectionPublicly);
  document.querySelector("#profileShowWishlist").checked = Boolean(settings.showWishlistPublicly);
  document.querySelector("#profileAllowComparison").checked = settings.allowShelfComparison !== false;
  document.querySelector("#profileAllowTasteMatching").checked = settings.allowTasteMatching !== false;
  document.querySelector("#profileInvestmentVisibility").value = settings.investmentVisibility || "never";
  elements.profileDialog.showModal();
  createIcons();
}

function closeProfileDialog() {
  elements.profileDialog.close();
}

function saveProfileFromForm(event) {
  event.preventDefault();
  const favoriteGenres = document.querySelector("#profileFocus").value
    .split(/[,+/]/)
    .map((item) => item.trim())
    .filter(Boolean);
  state.profile = {
    name: document.querySelector("#profileName").value.trim() || defaultProfile.name,
    handle: sanitizeHandle(document.querySelector("#profileHandle").value),
    focus: document.querySelector("#profileFocus").value.trim(),
    ritual: document.querySelector("#profileRitual").value.trim(),
    bio: document.querySelector("#profileBio").value.trim()
  };
  updateCurrentUserProfile({
    name: state.profile.name,
    handle: state.profile.handle,
    city: document.querySelector("#profileCity").value.trim(),
    bio: state.profile.bio,
    favoriteGenres
  });
  SocialRepository.saveSettings({
    showCollectionPublicly: document.querySelector("#profileShowCollection").checked,
    showWishlistPublicly: document.querySelector("#profileShowWishlist").checked,
    allowShelfComparison: document.querySelector("#profileAllowComparison").checked,
    allowTasteMatching: document.querySelector("#profileAllowTasteMatching").checked,
    investmentVisibility: document.querySelector("#profileInvestmentVisibility").value
  });
  saveProfile();
  closeProfileDialog();
  renderCommunity();
  createIcons();
}

function resetAppData() {
  const confirmed = window.confirm(
    "Isso reinicia perfil, posts, pessoas seguidas, notícias e cache de capas. Sua coleção será preservada. Deseja continuar?"
  );
  if (!confirmed) return;

  saveCollectionBackup("antes de reiniciar dados sociais e preferências");
  APP_STORAGE_KEYS.filter((key) => key !== STORAGE_KEY).forEach((key) => localStorage.removeItem(key));
  state.news = fallbackNews;
  state.socialState = normalizeSocialState({
    currentUserProfile: legacyProfileToCurrentUserProfile(defaultProfile),
    socialCollectors: buildSeedSocialCollectors(),
    socialPosts: buildSeedSocialPosts(buildSeedSocialCollectors()),
    follows: [],
    socialSettings: normalizeSocialSettings()
  });
  state.socialState = saveSocialState(state.socialState);
  state.profile = socialProfileToLegacyProfile(state.socialState.currentUserProfile);
  state.socialFeed = getLegacyFeedFromSocialState(state.socialState);
  state.following = [];
  state.coverCache = {};
  state.activeNewsCategory = "Todos";
  state.activeSocialFilter = "all";

  closeProfileDialog();
  state.recommendationNotice = "Perfil reiniciado sem apagar a coleção.";
  renderAll();
  switchView("collection");
}

function renderCommunity() {
  renderSpinAlbumOptions();
  updateSpinComposerCopy();
  renderProfilePanel();
  renderSocialFilters();
  renderSocialFeed();
  renderCollectorMatches();
  renderPressingDiscussions();
}

function renderSpinAlbumOptions() {
  const current = elements.spinAlbumSelect.value;
  elements.spinAlbumSelect.innerHTML = state.collection.length
    ? state.collection
        .map(
          (album) => `
            <option value="${escapeAttribute(album.id)}">${escapeHtml(album.title)} - ${escapeHtml(album.artist)}</option>
          `
        )
        .join("")
    : `<option value="">Cadastre um disco primeiro</option>`;
  if (state.collection.some((album) => album.id === current)) {
    elements.spinAlbumSelect.value = current;
  }
  elements.publishSpinButton.disabled = state.collection.length === 0;
}

function getSocialEventConfig(type = "listening") {
  const configs = {
    listening: {
      label: "ouviu",
      composerEyebrow: "Registrar audição",
      composerTitle: "Adicionar ao diário",
      composerHelp: "Publique uma nota curta sobre um disco da sua coleção.",
      placeholder: "Comentário curto sobre a audição",
      icon: "radio"
    },
    review: {
      label: "avaliou",
      composerEyebrow: "Review",
      composerTitle: "Registrar uma avaliação",
      composerHelp: "Conte em poucas palavras o que esse disco entregou na escuta.",
      placeholder: "O que ficou dessa audição?",
      icon: "star"
    },
    defended_album: {
      label: "defendeu este disco",
      composerEyebrow: "Disco defendido",
      composerTitle: "Defender um disco",
      composerHelp: "Use uma frase com convicção: por que esse LP merece mais respeito?",
      placeholder: "Por que esse disco precisa ser defendido?",
      icon: "megaphone"
    },
    added_to_collection: {
      label: "adicionou à coleção",
      composerEyebrow: "Coleção",
      composerTitle: "Entrada na estante",
      composerHelp: "Registro automático quando um disco entra na sua coleção.",
      placeholder: "Comentário sobre a chegada do disco",
      icon: "library"
    },
    saved_to_radar: {
      label: "salvou no radar",
      composerEyebrow: "Radar",
      composerTitle: "Quero garimpar",
      composerHelp: "Registro automático quando um disco entra na sua lista de garimpo.",
      placeholder: "Por que entrou no radar?",
      icon: "bookmark-plus"
    },
    revisited: {
      label: "revisitou",
      composerEyebrow: "Revisita",
      composerTitle: "Registrar revisita",
      composerHelp: "Marque quando um disco volta para a rotação e muda de lugar na sua memória.",
      placeholder: "O que mudou nessa nova escuta?",
      icon: "rotate-cw"
    },
    comparison: {
      label: "comparou estantes",
      composerEyebrow: "Comparação",
      composerTitle: "Comparar estantes",
      composerHelp: "Evento de afinidade entre colecionadores.",
      placeholder: "O que a comparação revelou?",
      icon: "git-compare"
    },
    recommendation: {
      label: "recomendou para alguém",
      composerEyebrow: "Recomendação",
      composerTitle: "Indicar um disco",
      composerHelp: "Evento de recomendação musical entre colecionadores.",
      placeholder: "Por que essa indicação faz sentido?",
      icon: "send"
    }
  };

  return configs[type] || configs.listening;
}

function getComposerDefaultNote(type, album = {}) {
  const title = album.title || "esse disco";
  const artist = album.artist ? ` de ${album.artist}` : "";
  const comment = album.comment?.trim();
  if (comment && ["listening", "review", "revisited"].includes(type)) return comment;

  const notes = {
    listening: `${title}${artist} entrou na rotação de hoje.`,
    review: `Registro de escuta para ${title}${artist}.`,
    defended_album: `${title}${artist} merece defesa: é o tipo de disco que cresce quando a gente escuta com atenção.`,
    revisited: `Revisitei ${title}${artist} e ele continua encontrando espaço na estante.`,
    added_to_collection: `${title}${artist} entrou na coleção.`,
    saved_to_radar: `${title}${artist} foi salvo no radar de garimpo.`,
    comparison: `Comparação de estantes puxou ${title}${artist} para a conversa.`,
    recommendation: `${title}${artist} entrou como recomendação para outro colecionador.`
  };

  return notes[type] || notes.listening;
}

function updateSpinComposerCopy() {
  const config = getSocialEventConfig(elements.spinEventType.value || "listening");
  const composer = document.querySelector("#communityView .social-composer");
  if (!composer) return;
  const eyebrow = composer.querySelector(".composer-heading .eyebrow");
  const title = composer.querySelector(".composer-heading h2");
  const help = composer.querySelector(".composer-heading > span");
  const icon = composer.querySelector(".composer-avatar i");

  if (eyebrow) eyebrow.textContent = config.composerEyebrow;
  if (title) title.textContent = config.composerTitle;
  if (help) help.textContent = config.composerHelp;
  if (elements.spinNoteInput) elements.spinNoteInput.placeholder = config.placeholder;
  if (icon) icon.setAttribute("data-lucide", config.icon);
}

function getPublicProfileView(profileInput = getCurrentUserProfile(), collection = state.collection, wishlist = state.wishlist, settingsInput = SocialRepository.getSettings()) {
  const profile = normalizeCurrentUserProfile(profileInput);
  const settings = normalizeSocialSettings(settingsInput);
  const safeCollection = Array.isArray(collection) ? collection : [];
  const safeWishlist = Array.isArray(wishlist) ? wishlist : [];
  const tasteProfile = buildTasteProfile(safeCollection);
  const ownPosts = getSocialPosts().filter((post) => post.userId === profile.id);
  const matches = settings.allowTasteMatching === false ? [] : SocialRepository.getMatches(safeCollection, safeWishlist);
  const badges = calculateUserBadges(safeCollection, ownPosts, getCurrentUserReactionEvents(), matches.map((item) => item.match));
  const favoriteAlbums = safeCollection
    .map(normalizeAlbum)
    .filter((album) => album.title && album.artist)
    .toSorted((a, b) => Number(b.rating || 0) - Number(a.rating || 0) || String(b.lastPlayedAt || "").localeCompare(String(a.lastPlayedAt || "")))
    .slice(0, 3)
    .map(toProfileAlbumPreview);
  const latestPosts = ownPosts.slice(0, 3).map((post) => ({
    type: getSocialEventConfig(post.type).label,
    title: post.albumSnapshot?.title || "Disco",
    meta: [post.albumSnapshot?.artist, relativeTime(post.createdAt)].filter(Boolean).join(" · ")
  }));
  const investmentTotal = safeCollection.reduce((sum, album) => sum + Number(normalizePrice(album.price) || 0), 0);
  const investment =
    settings.investmentVisibility === "never"
      ? null
      : {
          visibility: settings.investmentVisibility,
          value: investmentTotal,
          label: formatCurrency(investmentTotal),
          isPublic: settings.investmentVisibility === "public"
        };

  return {
    profile,
    settings,
    tasteProfile,
    strongGenres: weightedEntries(tasteProfile.genreWeights).slice(0, 4).map(([label]) => label),
    strongStyles: tasteProfile.topStyles.slice(0, 4).map((item) => item.label),
    favoriteAlbums,
    latestPosts,
    badges,
    compatibilityDemo: matches[0] || null,
    wishlistPublic: settings.showWishlistPublicly ? safeWishlist.slice(0, 3).map(toProfileAlbumPreview) : [],
    collectionPublic: settings.showCollectionPublicly ? favoriteAlbums : [],
    investment
  };
}

function toProfileAlbumPreview(album = {}) {
  const normalized = normalizeAlbum(album);
  return {
    title: normalized.title || album.title || "Disco",
    meta: [normalized.artist || album.artist, normalized.year || album.year].filter(Boolean).join(" · "),
    note: normalized.rating ? `${normalized.rating.toFixed(1)} estrelas` : normalized.genre || album.genre || ""
  };
}

function renderProfileMiniSection(title, rows = []) {
  if (!rows.length) return "";
  return `
    <section class="profile-public-section">
      <h3>${escapeHtml(title)}</h3>
      <div class="profile-public-list">
        ${rows
          .map(
            (row) => `
              <div class="profile-public-row">
                <strong>${escapeHtml(row.title)}</strong>
                <span>${escapeHtml(row.meta || row.note || "")}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderProfilePanel() {
  const publicView = getPublicProfileView();
  const profile = publicView.tasteProfile;
  const topTags = Object.entries(profile.preferredTags)
    .toSorted((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([tag]) => tag);
  const totalListens = state.collection.reduce((sum, album) => sum + Number(album.listenCount || 0), 0);
  const compatibility = publicView.compatibilityDemo;

  elements.profilePanel.innerHTML = `
    <div class="letter-profile-head">
      <div class="profile-avatar"><i data-lucide="disc-3"></i></div>
      <div>
        <span class="eyebrow">Seu perfil</span>
        <h2>${escapeHtml(publicView.profile.name)}</h2>
        <div class="profile-handle">@${escapeHtml(publicView.profile.handle)}</div>
      </div>
    </div>
    ${publicView.profile.city ? `<div class="profile-location"><i data-lucide="map-pin"></i>${escapeHtml(publicView.profile.city)}</div>` : ""}
    <p class="profile-bio">${escapeHtml(publicView.profile.bio)}</p>
    <div class="profile-tags">
      <span class="profile-tag">${escapeHtml(state.profile.focus || "coleção em construção")}</span>
      <span class="profile-tag">${escapeHtml(state.profile.ritual || "escuta sem pressa")}</span>
    </div>
    <div class="profile-stats">
      <div class="profile-stat">
        <strong>${state.collection.length}</strong>
        <span>discos</span>
      </div>
      <div class="profile-stat">
        <strong>${totalListens}</strong>
        <span>audições</span>
      </div>
      <div class="profile-stat">
        <strong>${state.following.length}</strong>
        <span>seguindo</span>
      </div>
    </div>
    <div class="profile-tags">
      ${(topTags.length ? topTags : [profile.topGenre || "vinil"])
        .map((tag) => `<span class="profile-tag">#${escapeHtml(tag)}</span>`)
        .join("")}
    </div>
    ${publicView.investment ? `<div class="profile-privacy-note">Valor catalogado: ${escapeHtml(publicView.investment.label)} · ${publicView.investment.isPublic ? "público" : "somente você"}</div>` : ""}
    ${renderProfileMiniSection("Gêneros fortes", publicView.strongGenres.map((genre) => ({ title: genre, meta: "sinal da coleção" })))}
    ${renderProfileMiniSection("Discos favoritos", publicView.favoriteAlbums)}
    ${renderProfileMiniSection("Últimos registros", publicView.latestPosts)}
    ${
      compatibility
        ? `<section class="profile-public-section">
            <h3>Compatibilidade demo</h3>
            <div class="profile-public-row">
              <strong>${escapeHtml(compatibility.collector.name)} · ${compatibility.match.compatibilityPercent}%</strong>
              <span>${escapeHtml(compatibility.match.matchType)}</span>
            </div>
          </section>`
        : ""
    }
    ${renderProfileMiniSection("Wishlist pública", publicView.wishlistPublic)}
    ${renderProfileBadgeSection(publicView.badges)}
  `;
}

function calculateUserBadges(collection = [], posts = [], reactions = [], matches = []) {
  const albums = (collection || []).map(normalizeAlbum).filter((album) => album.title && album.artist);
  const socialPosts = (posts || []).filter(Boolean);
  const reactionEvents = normalizeBadgeReactionEvents(reactions);
  const matchItems = normalizeBadgeMatches(matches);
  const genreCounts = albums.reduce((acc, album) => {
    const genre = normalizeGenreLabel(album.genre || "");
    if (genre) acc[genre] = (acc[genre] || 0) + 1;
    return acc;
  }, {});
  const signalTerms = new Set(albums.flatMap((album) => [...getSocialAlbumSignalTerms(album)]));
  const comments = albums.map((album) => album.comment || "").join(" ");
  const commentTerms = new Set(extractCommentSignals(comments).map((item) => item.normalized));
  const postTypes = socialPosts.reduce((acc, post) => {
    const type = normalizeSocialPostType(post.type);
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});
  const highRated = albums.filter((album) => Number(album.rating || 0) >= 4.5);
  const decade70s = albums.filter((album) => album.decade === "1970s");
  const soulCount = countBadgeSignals(albums, ["Soul", "soul", "neo soul", "soul brasileiro"]);
  const mpbCount = countBadgeSignals(albums, ["MPB", "tropicália", "Clube da Esquina", "samba", "bossa nova"]);
  const hasHipHopSignal = hasBadgeSignal(albums, ["Hip-Hop", "hip hop", "rap"]);
  const hasJazzSignal = hasBadgeSignal(albums, ["Jazz", "jazz", "jazz rap", "hard bop", "modal jazz"]);
  const jazzRapSignals = Number(hasHipHopSignal) + Number(hasJazzSignal) + Number(signalTerms.has("jazz rap"));
  const nightSignals =
    countTextSignals([comments, ...socialPosts.map((post) => post.note || "")], ["noite", "noturno", "madrugada", "fone"]) +
    socialPosts.filter((post) => new Date(post.createdAt || "").getHours() >= 21 || new Date(post.createdAt || "").getHours() <= 4).length;
  const pressingSignals = albums.filter((album) => {
    const text = normalize([album.pressing, album.style, album.condition, ...(album.tags || [])].join(" "));
    return /180g|press|prensagem|reedi|remaster|blue note|vinyl|vinil|limited|audiophile/.test(text);
  }).length;
  const maxListenCount = Math.max(0, ...albums.map((album) => Number(album.listenCount || 0)));
  const gapSignals = new Set(
    matchItems.flatMap((match) => [
      ...(match.complementarySignals || []),
      ...(match.albumsTheyHaveThatIFit || []).flatMap((album) => album.fitSignals || [])
    ])
  );
  const twinMatch = matchItems.some((match) => match.matchType === "Gêmeo de estante" || Number(match.compatibilityPercent || 0) >= 72);
  const defendedClassicCount = socialPosts.filter((post) => post.type === "defended_album").length;
  const savedRadarReactions = reactionEvents.filter((item) => item.type === "salvar_no_radar" || item.reactionType === "salvar_no_radar").length;

  return [
    buildBadge("soul-digger", "Garimpeiro de Soul", "Sua estante puxa grooves, voz e linhagem soul.", soulCount, 3, getBadgeReason(`${soulCount} sinal(is) de Soul, Funk ou Neo Soul na estante.`)),
    buildBadge("jazz-rap-bridge", "Ponte Jazz-Rap", "Você conecta rap, improviso e linguagem jazzística.", jazzRapSignals, 2, getBadgeReason("Aparecem sinais cruzados de Hip-Hop, Jazz ou jazz rap.")),
    buildBadge("seventies-shelf", "Estante 70s", "Há uma gravidade forte nos discos dos anos 1970.", decade70s.length, 3, getBadgeReason(`${decade70s.length} disco(s) dos anos 1970 catalogados.`)),
    buildBadge("mpb-curator", "Curador de MPB", "Sua coleção lê a música brasileira como mapa, não só gênero.", mpbCount, 3, getBadgeReason(`${mpbCount} sinal(is) de MPB, samba, bossa ou tropicália.`)),
    buildBadge("underrated-defender", "Defensor de clássico subestimado", "Você não só escuta: você sustenta uma tese sobre o disco.", defendedClassicCount, 1, getBadgeReason(`${defendedClassicCount} defesa(s) publicada(s) na comunidade.`)),
    buildBadge("night-listener", "Ouvinte noturno", "Seu ritual de escuta tem cara de noite, silêncio e atenção.", nightSignals, 3, getBadgeReason(`${nightSignals} sinal(is) noturnos em comentários ou posts.`)),
    buildBadge("bedside-record", "Disco de cabeceira", "Existe um disco voltando para a rotação mais de uma vez.", maxListenCount, 3, getBadgeReason(`Maior contagem de revisitas: ${maxListenCount}.`)),
    buildBadge("pressing-nerd", "Prensagem nerd", "Você presta atenção no objeto físico, edição e detalhe de prensagem.", pressingSignals, 2, getBadgeReason(`${pressingSignals} detalhe(s) de prensagem, edição ou reedição detectados.`)),
    buildBadge("gap-explorer", "Explorador de lacunas", "Sua estante já aponta para próximos territórios.", gapSignals.size + savedRadarReactions, 3, getBadgeReason(`${gapSignals.size} lacuna(s) ou ponte(s) sociais detectadas.`)),
    buildBadge("shelf-twin", "Gêmeo de estante encontrado", "O Groova encontrou alguém com afinidade alta de coleção.", twinMatch ? 1 : 0, 1, getBadgeReason(twinMatch ? "Há pelo menos uma compatibilidade muito forte." : "Compare mais estantes para encontrar esse sinal."))
  ].toSorted((a, b) => Number(b.achieved) - Number(a.achieved) || b.progress.percent - a.progress.percent);
}

function buildBadge(id, label, description, value, target, reason) {
  const current = Math.max(0, Math.min(Number(value || 0), target));
  return {
    id,
    label,
    description,
    reason,
    progress: {
      current,
      target,
      percent: Math.round((current / target) * 100)
    },
    achieved: current >= target
  };
}

function getBadgeReason(reason) {
  return reason || "Sinal calculado a partir da coleção e atividade social local.";
}

function countBadgeSignals(albums = [], signals = []) {
  const targets = new Set(signals.map(normalizeSignalTerm));
  return albums.filter((album) => {
    const terms = new Set([album.genre, album.style, ...(album.tags || []), ...getAlbumStyleTerms(album).map((term) => term.label)].map(normalizeSignalTerm));
    return [...terms].some((term) => targets.has(term));
  }).length;
}

function hasBadgeSignal(albums = [], signals = []) {
  return countBadgeSignals(albums, signals) > 0;
}

function countTextSignals(texts = [], signals = []) {
  const haystack = normalize(texts.join(" "));
  return signals.reduce((count, signal) => count + (haystack.includes(normalize(signal)) ? 1 : 0), 0);
}

function normalizeBadgeReactionEvents(reactions = []) {
  if (Array.isArray(reactions)) return reactions.filter(Boolean);
  if (!reactions || typeof reactions !== "object") return [];
  return Object.entries(reactions).flatMap(([type, values]) =>
    Array.isArray(values) ? values.map((userId) => ({ type, reactionType: type, userId })) : []
  );
}

function normalizeBadgeMatches(matches = []) {
  return (matches || []).map((item) => item.match || item).filter(Boolean);
}

function getCurrentUserReactionEvents(posts = getSocialPosts()) {
  return posts.flatMap((post) =>
    Object.entries(post.reactions || {}).flatMap(([reactionType, userIds]) =>
      Array.isArray(userIds) && userIds.includes(SOCIAL_CURRENT_USER_ID)
        ? [{ postId: post.id, reactionType, type: reactionType, albumSnapshot: post.albumSnapshot }]
        : []
    )
  );
}

function renderProfileBadgeSection(badges = []) {
  const visibleBadges = getVisibleBadges(badges, 6);
  if (!visibleBadges.length) return "";
  return `
    <section class="profile-badge-section">
      <div class="section-mini-heading">
        <span class="eyebrow">Identidade da estante</span>
        <h3>Badges musicais</h3>
      </div>
      <div class="badge-grid">
        ${visibleBadges.map(renderMusicBadge).join("")}
      </div>
    </section>
  `;
}

function getVisibleBadges(badges = [], limit = 6) {
  const achieved = badges.filter((badge) => badge.achieved);
  const inProgress = badges.filter((badge) => !badge.achieved && badge.progress?.percent > 0);
  return [...achieved, ...inProgress].slice(0, limit);
}

function renderMusicBadge(badge) {
  return `
    <div class="music-badge ${badge.achieved ? "achieved" : "in-progress"}" title="${escapeAttribute(badge.reason)}">
      <span>${escapeHtml(badge.label)}</span>
      <em>${escapeHtml(badge.achieved ? badge.description : `${badge.progress.current}/${badge.progress.target}`)}</em>
      <i style="width: ${badge.progress.percent}%"></i>
    </div>
  `;
}

function renderSocialFilters() {
  if (!socialFilters.some((filter) => filter.id === state.activeSocialFilter)) {
    state.activeSocialFilter = "all";
  }
  elements.socialFilters.innerHTML = socialFilters
    .map(
      (filter) => `
        <button class="timeline-filter ${state.activeSocialFilter === filter.id ? "active" : ""}" type="button" data-social-filter="${escapeAttribute(filter.id)}">
          <strong>${escapeHtml(filter.label)}</strong>
          <span>${escapeHtml(filter.hint)}</span>
        </button>
      `
    )
    .join("");

  elements.socialFilters.querySelectorAll("[data-social-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeSocialFilter = button.dataset.socialFilter;
      renderSocialFilters();
      renderSocialFeed();
      createIcons();
    });
  });
}

function renderSocialFeed() {
  const allPosts = getSocialPosts().map((post) => socialPostToTimelinePost(post));
  const ownPosts = allPosts.filter((post) => post.ownPost);
  const posts = getFilteredSocialPosts(allPosts, ownPosts);
  preloadImages(posts.map(getSocialPostCoverUrl).filter(Boolean).slice(0, 12));

  elements.socialFeed.innerHTML = posts.length
    ? posts.map(renderTimelinePost).join("")
    : renderEmptyTimelineState();

  renderCoverCanvases();
  resetSocialFeedScroll();

  elements.socialFeed.querySelectorAll("[data-social-reaction]").forEach((button) => {
    button.addEventListener("click", () => {
      handleSocialReaction(button.dataset.postId, button.dataset.socialReaction);
    });
  });

  elements.socialFeed.querySelectorAll("[data-delete-post]").forEach((button) => {
    button.addEventListener("click", () => deletePost(button.dataset.deletePost));
  });
}

function getFilteredSocialPosts(allPosts, ownPosts) {
  const active = socialFilters.some((filter) => filter.id === state.activeSocialFilter) ? state.activeSocialFilter : "all";
  if (active === "reviews") return allPosts.filter((post) => post.type === "review");
  if (active === "defended") return allPosts.filter((post) => post.type === "defended_album");
  if (active === "compatible") return allPosts.filter((post) => post.ownPost || isPostCompatibleWithCollection(post));
  if (active === "saved") return uniqueTimelinePosts([
    ...allPosts.filter(isPostSavedByUser),
    ...state.wishlist.map(wishlistAlbumToTimelinePost)
  ]);
  if (active === "common") return allPosts.filter(isPostCommonOrCloseToCollection);
  return allPosts;
}

function uniqueTimelinePosts(posts = []) {
  const seen = new Set();
  return posts.filter((post) => {
    const key = post.id || albumIdentityKey(post);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function wishlistAlbumToTimelinePost(album = {}) {
  const normalized = normalizeAlbum(album);
  return {
    id: `wishlist-${normalized.identityKey}`,
    type: "saved_to_radar",
    userId: SOCIAL_CURRENT_USER_ID,
    user: state.profile.name || defaultProfile.name,
    handle: state.profile.handle || defaultProfile.handle,
    album: normalized.title,
    artist: normalized.artist,
    year: normalized.year || "",
    genre: normalized.genre || "",
    style: normalized.style || "",
    tags: normalized.tags || [],
    pressing: normalized.style || normalized.genre || "Radar",
    rating: Number(normalized.rating || 0),
    note: normalized.reason || "Salvo no radar para garimpar depois.",
    createdAt: album.savedAt || new Date().toISOString(),
    reactions: normalizeSocialReactions(),
    albumSnapshot: normalized,
    likes: 0,
    comments: 0,
    seed: normalized.coverSeed || 1,
    coverUrl: normalized.coverUrl || "",
    ownPost: true
  };
}

function renderTimelinePost(post) {
  const coverUrl = getSocialPostCoverUrl(post);
  const rating = ratingStars(post.rating);
  const eventConfig = getSocialEventConfig(post.type);
  const eventLabel = post.ownPost ? `Você ${eventConfig.label}` : `${post.user} ${eventConfig.label}`;
  const meta = [post.artist, post.year, post.genre || post.style].filter(Boolean).join(" · ");
  const chips = uniqueList([post.genre, post.style, ...(post.tags || [])].filter(Boolean)).slice(0, 4);

  return `
    <article class="timeline-post review-post">
      <div class="review-post-cover">
        ${renderPostCover({ ...post, coverUrl })}
      </div>
      <div class="timeline-post-body review-post-body">
        <div class="timeline-post-header">
          <div>
            <div class="review-author-line">
              <span class="feed-avatar">${escapeHtml(initials(post.user))}</span>
              <div>
                <div class="review-event-line">
                  <span class="social-event-type" data-event-type="${escapeAttribute(post.type)}">
                    <i data-lucide="${escapeAttribute(eventConfig.icon)}"></i>
                    ${escapeHtml(eventLabel)}
                  </span>
                  <span class="profile-handle">@${escapeHtml(post.handle)}</span>
                </div>
                <div class="feed-meta">${escapeHtml(relativeTime(post.createdAt))}</div>
              </div>
            </div>
          </div>
          ${rating ? `<span class="timeline-rating review-rating">${rating}</span>` : ""}
        </div>
        <div class="review-album-title">
          <h2>${escapeHtml(post.album)}</h2>
          <span>${escapeHtml(meta)}</span>
        </div>
        ${post.note ? `<p class="feed-note review-text">${escapeHtml(post.note)}</p>` : ""}
        ${
          chips.length
            ? `<div class="review-post-chips">${chips.map((chip) => `<span>${escapeHtml(chip)}</span>`).join("")}</div>`
            : ""
        }
        <div class="review-meta-row">
          <span><i data-lucide="disc-3"></i> ${escapeHtml(post.genre || post.pressing)}</span>
          ${rating ? `<span><i data-lucide="star"></i> ${rating}</span>` : ""}
          <span><i data-lucide="clock-3"></i> ${escapeHtml(relativeTime(post.createdAt))}</span>
        </div>
        <div class="feed-actions review-actions">
          ${renderTimelineReactionButton(post, "tambem_sinto_isso", "Também sinto isso", "heart")}
          ${renderTimelineReactionButton(post, "me_convenceu", "Me convenceu", "badge-check")}
          ${renderTimelineReactionButton(post, "quero_ouvir", "Quero ouvir", "headphones")}
          ${renderTimelineReactionButton(post, "salvar_no_radar", "Salvar no radar", "bookmark-plus")}
          <button class="timeline-action comment-ghost" type="button">
            <i data-lucide="message-circle"></i>
            Comentar ${post.comments ? `<span>${post.comments}</span>` : ""}
          </button>
          ${
            post.ownPost
              ? `<button class="timeline-action danger-inline" data-delete-post="${escapeAttribute(post.id)}">
                  <i data-lucide="trash-2"></i>
                  Remover
                </button>`
              : ""
          }
        </div>
      </div>
    </article>
  `;
}

function renderTimelineReactionButton(post, reactionType, label, icon) {
  const count = getTimelineReactionCount(post, reactionType);
  const active = userReactedToTimelinePost(post, reactionType);
  return `
    <button class="timeline-action ${active ? "active" : ""}" type="button" data-post-id="${escapeAttribute(post.id)}" data-social-reaction="${escapeAttribute(reactionType)}">
      <i data-lucide="${escapeAttribute(icon)}"></i>
      ${escapeHtml(label)}
      ${count ? `<span>${count}</span>` : ""}
    </button>
  `;
}

function getTimelineReactionCount(post, reactionType) {
  return Array.isArray(post.reactions?.[reactionType]) ? post.reactions[reactionType].length : 0;
}

function userReactedToTimelinePost(post, reactionType) {
  return Array.isArray(post.reactions?.[reactionType]) && post.reactions[reactionType].includes(SOCIAL_CURRENT_USER_ID);
}

function isPostCompatibleWithCollection(post) {
  if (collectionHasAlbum(post)) return true;
  const collector = getSocialCollectorForPost(post);
  if (!collector) {
    const profile = getTasteProfile();
    const signals = uniqueList([post.genre, post.style, ...(post.tags || [])].filter(Boolean)).map(normalizeSignalTerm);
    return signals.some((signal) =>
      [profile.topGenre, ...(profile.topStyles || []).map((style) => style.label)].map(normalizeSignalTerm).includes(signal)
    );
  }

  const match = compareCollections(state.collection, collector.collection || [], state.wishlist || [], collector.wishlist || []);
  const postKey = albumIdentityKey(post);
  return (
    match.compatibilityPercent >= 55 ||
    isRelevantSocialMatchType(match.matchType) ||
    match.albumsTheyHaveThatIFit.some((album) => albumIdentityKey(album) === postKey) ||
    match.commonGenres.some((genre) => normalizeGenreLabel(genre) === normalizeGenreLabel(post.genre))
  );
}

function getSocialCollectorForPost(post = {}) {
  return getSocialCollectors().find((item) => item.id === post.userId || item.handle === post.handle);
}

function isRelevantSocialMatchType(matchType = "") {
  return ["Gêmeo de estante", "Complemento de estante", "Guia de gênero", "Vizinho de disco"].includes(matchType);
}

function isPostSavedByUser(post) {
  return Boolean(
    wishlistHasAlbum(post) ||
      userReactedToTimelinePost(post, "salvar_no_radar") ||
      (post.ownPost && post.type === "saved_to_radar")
  );
}

function isPostCommonOrCloseToCollection(post) {
  return collectionHasAlbum(post) || isPostCloseToCollection(post);
}

function isPostCloseToCollection(post) {
  const postAlbum = normalizeAlbum(post);
  if (!postAlbum.title && !postAlbum.artist && !postAlbum.genre) return false;
  const postTerms = getSocialAlbumSignalTerms(postAlbum);
  return state.collection.some((album) => {
    const owned = normalizeAlbum(album);
    if (owned.normalizedArtist && owned.normalizedArtist === postAlbum.normalizedArtist) return true;
    if (owned.genre && postAlbum.genre && normalizeGenreLabel(owned.genre) === normalizeGenreLabel(postAlbum.genre)) return true;
    const ownedTerms = getSocialAlbumSignalTerms(owned);
    const sharedTerms = [...postTerms].filter((term) => ownedTerms.has(term));
    if (sharedTerms.length >= 2) return true;
    return [...postTerms].some((term) =>
      [...ownedTerms].some((ownedTerm) => getAdjacentTerms(ownedTerm).some((adjacent) => normalizeSignalTerm(adjacent) === term))
    );
  });
}

function handleSocialReaction(postId, reactionType) {
  const updatedPost = toggleSocialReaction(postId, reactionType);
  if (!updatedPost) return;

  if (reactionType === "salvar_no_radar" && updatedPost.reactions?.salvar_no_radar?.includes(SOCIAL_CURRENT_USER_ID)) {
    addAlbumToWishlist(updatedPost.albumSnapshot, { source: "social-feed", createSocialPost: false });
    renderRecommendations();
  }

  renderSocialFeed();
  createIcons();
}

function likePost(id) {
  handleSocialReaction(id, "tambem_sinto_isso");
}

function deletePost(id) {
  state.socialState.socialPosts = state.socialState.socialPosts.filter(
    (post) => !(post.id === id && post.userId === SOCIAL_CURRENT_USER_ID)
  );
  state.socialState = saveSocialState(state.socialState);
  state.socialFeed = getLegacyFeedFromSocialState(state.socialState);
  renderSocialFeed();
  createIcons();
}

function getSocialPostCoverUrl(post) {
  if (post.coverUrl) return post.coverUrl;

  const collectionMatch = state.collection.find(
    (album) => albumIdentityKey(album) === albumIdentityKey({ title: post.album, artist: post.artist })
  );
  if (collectionMatch?.coverUrl) return collectionMatch.coverUrl;

  return (
    recommendationCoverUrls[albumIdentityKey({ title: post.album, artist: post.artist })] ||
    state.coverCache[coverCacheKey({ title: post.album, artist: post.artist })] ||
    state.coverCache[legacyCoverCacheKey({ title: post.album, artist: post.artist })] ||
    ""
  );
}

function renderTimelinePostCompact(post) {
  const coverUrl = getSocialPostCoverUrl(post);
  return `
    <article class="timeline-post compact-post">
      <div class="timeline-album-cover">
        ${renderPostCover({ ...post, coverUrl })}
      </div>
      <div>
        <div class="feed-album-line">${escapeHtml(post.album)}</div>
        <div class="feed-meta">${escapeHtml(post.artist)} · ${ratingStars(post.rating) || "sem nota"}</div>
      </div>
    </article>
  `;
}

function renderLegacyTimelinePost(post) {
  return `
    <article class="feed-card timeline-post">
      <div class="feed-avatar">${escapeHtml(initials(post.user))}</div>
      <div class="timeline-post-body">
        <div class="timeline-post-header">
          <div>
            <h3>${escapeHtml(post.user)} <span class="profile-handle">@${escapeHtml(post.handle)}</span></h3>
            <div class="feed-meta">${escapeHtml(relativeTime(post.createdAt))} · ouviu um disco</div>
          </div>
          <span class="feed-meta">${escapeHtml(post.pressing)}</span>
        </div>
      </div>
    </article>
  `;
}

function renderEmptyTimelineState() {
  const emptyMessages = {
    reviews: "Nenhum review apareceu ainda. Registre uma avaliação para começar essa trilha.",
    defended: "Nenhum disco defendido ainda. Escolha um LP que mereça uma defesa apaixonada.",
    compatible: "Siga colecionadores ou salve discos no radar para preencher esta aba.",
    saved: "Siga colecionadores ou salve discos no radar para preencher esta aba.",
    common: "Cadastre discos com artista, gênero ou estilo próximo dos posts para preencher esta aba."
  };
  const message = emptyMessages[state.activeSocialFilter] || "Publique uma audição da sua coleção para começar seu histórico social.";

  return `
    <article class="feed-card timeline-post timeline-empty">
      <div class="feed-avatar"><i data-lucide="radio"></i></div>
      <div class="timeline-post-body">
        <div class="timeline-post-header">
          <h3>Nada por aqui ainda</h3>
          <span class="feed-meta">timeline limpa</span>
        </div>
        <p class="feed-note">${escapeHtml(message)}</p>
      </div>
    </article>
  `;
}

function renderPostCover(post) {
  if (!post.coverUrl) {
    return `<div class="cover-missing">Capa indisponível</div>`;
  }

  return `
    <img src="${escapeAttribute(post.coverUrl)}" alt="Capa de ${escapeAttribute(post.album)}" loading="eager" decoding="async" fetchpriority="high" data-cover-image />
  `;
}

function resetSocialFeedScroll() {
  requestAnimationFrame(() => {
    elements.socialFeed.scrollLeft = 0;
  });
}

function renderCollectorMatches() {
  const lowConfidence = state.collection.length < 3;
  const matches = getSocialCollectors()
    .map((collector) => {
      const match = compareCollections(state.collection, collector.collection || [], state.wishlist || [], collector.wishlist || []);
      return {
        ...collector,
        match,
        compatibility: match.compatibilityPercent
      };
    })
    .toSorted((a, b) => b.compatibility - a.compatibility || a.name.localeCompare(b.name, "pt-BR"))
    .slice(0, 4);

  elements.collectorMatches.innerHTML = `
    ${
      lowConfidence
        ? `<div class="collector-low-confidence">Cadastre mais alguns discos para encontrar parentes de estante.</div>`
        : ""
    }
    ${matches
    .map((collector) => {
      const isFollowing = state.following.includes(collector.id);
      const chips = buildCollectorMatchChips(collector.match, collector);
      const meta = [`@${collector.handle}`, collector.city, `${collector.collection.length} discos`].filter(Boolean).join(" · ");
      const collectorPosts = getSocialPosts().filter((post) => post.userId === collector.id);
      const badges = calculateUserBadges(collector.collection || [], collectorPosts, [], [collector.match]);
      return `
        <article class="collector-card collector-affinity-card">
          <div class="collector-head">
            <div class="collector-avatar">${escapeHtml(initials(collector.name))}</div>
            <div>
              <h3>${escapeHtml(collector.name)}</h3>
              <div class="collector-meta">${escapeHtml(meta)}</div>
            </div>
          </div>
          <div class="collector-match-type">${escapeHtml(collector.match.matchType)}</div>
          <div class="compatibility">
            <div class="compatibility-row">
              <span>Afinidade ${collector.compatibility}% · ${escapeHtml(getCollectorConfidenceLabel(collector.match.confidence))}</span>
              <strong>${collector.compatibility}%</strong>
            </div>
            <div class="match-meter"><span style="width: ${collector.compatibility}%"></span></div>
          </div>
          <div class="collector-tags collector-signal-tags">
            ${chips.map((chip) => `<span class="profile-tag">${escapeHtml(chip)}</span>`).join("")}
          </div>
          ${renderCollectorBadges(badges)}
          <p class="collector-explanation">${escapeHtml(getCollectorMatchExplanation(collector.match))}</p>
          <div class="collector-actions">
            <button class="mini-button" data-compare-collector="${escapeAttribute(collector.id)}">
              <i data-lucide="git-compare"></i>
              Comparar estantes
            </button>
            <button class="mini-button ${isFollowing ? "is-following" : ""}" data-follow-collector="${escapeAttribute(collector.id)}">
              <i data-lucide="${isFollowing ? "check" : "user-plus"}"></i>
              ${isFollowing ? "Seguindo" : "Seguir"}
            </button>
          </div>
        </article>
      `;
    })
    .join("")}
  `;

  elements.collectorMatches.querySelectorAll("[data-compare-collector]").forEach((button) => {
    button.addEventListener("click", () => openCollectorComparisonModal(button.dataset.compareCollector));
  });

  elements.collectorMatches.querySelectorAll("[data-follow-collector]").forEach((button) => {
    button.addEventListener("click", () => toggleFollow(button.dataset.followCollector));
  });
}

function renderCollectorBadges(badges = []) {
  const visibleBadges = getVisibleBadges(badges, 3);
  if (!visibleBadges.length) return "";
  return `
    <div class="collector-badges">
      ${visibleBadges.map((badge) => `<span title="${escapeAttribute(badge.reason)}">${escapeHtml(badge.label)}</span>`).join("")}
    </div>
  `;
}

function buildCollectorMatchChips(match, collector) {
  const chips = [];
  const primaryGenre = match.commonGenres[0] || collector.favoriteGenres?.[0] || "";
  const primaryStyle = match.commonStyles[0] || collector.collection?.[0]?.style || "";

  if (primaryGenre && primaryStyle) chips.push(`${primaryGenre} + ${primaryStyle}`);
  else if (primaryGenre) chips.push(primaryGenre);

  if (match.commonAlbums.length) chips.push(`${match.commonAlbums.length} ${match.commonAlbums.length === 1 ? "disco em comum" : "discos em comum"}`);
  if (match.commonStyles[1]) chips.push(match.commonStyles[1]);

  const gapSignal = match.complementarySignals.find((signal) => signal.includes("eles cobrem sua lacuna em"));
  if (gapSignal) chips.push(gapSignal.replace("eles cobrem sua lacuna em", "preenche sua lacuna em"));

  if (!gapSignal && match.albumsTheyHaveThatIFit[0]?.fitSignals?.[0]) {
    chips.push(match.albumsTheyHaveThatIFit[0].fitSignals[0]);
  }

  if (chips.length < 2) {
    collector.favoriteGenres?.forEach((genre) => chips.push(genre));
  }

  return uniqueList(chips).slice(0, 4);
}

function getCollectorMatchExplanation(match) {
  return match.explanation;
}

function renderCollectorComparisonDetails(collector, isComparing = true) {
  if (!isComparing) return "";
  const match = collector.match;
  const theyHave = match.albumsTheyHaveThatIFit.slice(0, 3);
  const youHave = match.albumsIHaveThatTheyFit.slice(0, 3);
  const common = match.commonAlbums.slice(0, 3);
  const groups = [
    renderCollectorComparisonGroup("Na estante deles para você", theyHave),
    renderCollectorComparisonGroup("Na sua estante para eles", youHave),
    renderCollectorComparisonGroup("Pontos em comum", common)
  ].filter(Boolean);

  return `
    <div class="collector-comparison-detail">
      ${
        groups.length
          ? groups.join("")
          : `<p>Com mais discos cadastrados, esta comparação passa a mostrar pontos de troca entre as duas estantes.</p>`
      }
    </div>
  `;
}

function renderCollectorComparisonGroup(label, albums = []) {
  const items = albums.filter(Boolean).slice(0, 3);
  if (!items.length) return "";
  return `
    <div class="collector-comparison-group">
      <span>${escapeHtml(label)}</span>
      <div>
        ${items.map((album) => `<em>${escapeHtml(album.title)} · ${escapeHtml(album.artist)}</em>`).join("")}
      </div>
    </div>
  `;
}

function openCollectorComparisonModal(collectorId) {
  const collector = getSocialCollectors().find((item) => item.id === collectorId);
  if (!collector) return;
  state.activeCollectorComparison = collectorId;
  state.collectorComparisonNotice = "";
  renderCollectorComparisonModal(collector);
  elements.collectorComparisonDialog.showModal();
  createIcons();
}

function closeCollectorComparisonModal() {
  state.activeCollectorComparison = "";
  state.collectorComparisonNotice = "";
  elements.collectorComparisonDialog.close();
}

function openAlbumLoveModal(albumId) {
  const album = state.collection.find((item) => item.id === albumId);
  if (!album) return;
  state.activeAlbumLoveId = albumId;
  state.albumLoveNotice = "";
  renderAlbumLoveModal(album);
  elements.albumLoveDialog.showModal();
  createIcons();
}

function closeAlbumLoveModal() {
  state.activeAlbumLoveId = "";
  state.albumLoveNotice = "";
  elements.albumLoveDialog.close();
}

function renderAlbumLoveModal(album) {
  const experience = buildAlbumLoveExperience(album);
  const coverUrl = album.coverUrl || getRecommendationCoverUrl(album);

  elements.albumLoveContent.innerHTML = `
    <div class="dialog-header album-love-header">
      <div class="album-love-title-block">
        <div class="album-love-cover">
          ${renderPostCover({ album: album.title, coverUrl })}
        </div>
        <div>
          <span class="eyebrow">Comunidade demo/local</span>
          <h2>Quem também ama este disco?</h2>
          <p>Você não é o único nessa obsessão.</p>
        </div>
      </div>
      <button class="icon-button" type="button" data-close-album-love title="Fechar">
        <i data-lucide="x"></i>
      </button>
    </div>

    <section class="album-love-album-card">
      <div>
        <h3>${escapeHtml(album.title)}</h3>
        <p>${escapeHtml([album.artist, album.year].filter(Boolean).join(" · "))}</p>
      </div>
      <strong>${ratingStars(album.rating) || "sem nota"}</strong>
    </section>

    ${
      state.albumLoveNotice
        ? `<div class="comparison-notice">${escapeHtml(state.albumLoveNotice)}</div>`
        : ""
    }

    <section class="album-love-stats" aria-label="Sensação da comunidade local">
      ${renderAlbumLoveStat(experience.stats.haveAlbum, "pessoas têm este disco")}
      ${renderAlbumLoveStat(experience.stats.maxRating, "deram nota máxima")}
      ${renderAlbumLoveStat(experience.stats.similarCollections, "coleções parecidas incluem este disco")}
    </section>

    <section class="album-love-section">
      <div class="section-mini-heading">
        <span class="eyebrow">Pessoas que também amam</span>
        <h3>Parentes de obsessão</h3>
      </div>
      ${
        experience.matches.length
          ? `<div class="album-love-people">${experience.matches.map(renderAlbumLovePerson).join("")}</div>`
          : `<p class="comparison-empty">Ainda não há sinal forte nos perfis demo para este disco. Com mais coleções locais, essa leitura fica melhor.</p>`
      }
    </section>

    <section class="album-love-section">
      <div class="section-mini-heading">
        <span class="eyebrow">Recomendações sociais</span>
        <h3>Quem ama este disco também salvou...</h3>
      </div>
      ${
        experience.socialRecommendations.length
          ? `<div class="album-love-recommendations">${experience.socialRecommendations.map(renderAlbumLoveRecommendation).join("")}</div>`
          : `<p class="comparison-empty">Nenhum radar demo próximo encontrou um próximo disco claro ainda.</p>`
      }
    </section>
  `;

  bindAlbumLoveModalActions();
}

function bindAlbumLoveModalActions() {
  elements.albumLoveContent.querySelectorAll("[data-close-album-love]").forEach((button) => {
    button.addEventListener("click", closeAlbumLoveModal);
  });

  elements.albumLoveContent.querySelectorAll("[data-love-view-collector]").forEach((button) => {
    button.addEventListener("click", () => previewCollectorShelfFromAlbumLove(button.dataset.loveViewCollector));
  });

  elements.albumLoveContent.querySelectorAll("[data-love-compare-collector]").forEach((button) => {
    button.addEventListener("click", () => {
      const collectorId = button.dataset.loveCompareCollector;
      closeAlbumLoveModal();
      openCollectorComparisonModal(collectorId);
    });
  });

  elements.albumLoveContent.querySelectorAll("[data-love-save-rec]").forEach((button) => {
    button.addEventListener("click", () => saveAlbumLoveRecommendation(button.dataset.loveSaveRec));
  });
}

function buildAlbumLoveExperience(album) {
  const matches = getAlbumLoveCollectors(album);
  return {
    matches,
    stats: getAlbumLoveStats(album, matches),
    socialRecommendations: getAlbumLoveRecommendations(album, matches)
  };
}

function getAlbumLoveCollectors(album) {
  const posts = getSocialPosts();
  return getSocialCollectors()
    .map((collector) => getAlbumLoveCollectorMatch(album, collector, posts))
    .filter((match) => match.score >= 22)
    .toSorted((a, b) => b.score - a.score || b.compatibility - a.compatibility)
    .slice(0, 6);
}

function getAlbumLoveCollectorMatch(album, collector, posts = []) {
  const normalizedAlbum = normalizeAlbum(album);
  const exactAlbums = (collector.collection || []).filter((item) => albumListHasAlbum([item], normalizedAlbum));
  const sameArtistAlbums = (collector.collection || []).filter(
    (item) => normalizeArtistForIdentity(item.artist) === normalizeArtistForIdentity(normalizedAlbum.artist)
  );
  const albumSignals = getAlbumLoveSignals(normalizedAlbum);
  const collectorSignals = uniqueList(
    (collector.collection || []).flatMap((item) => getAlbumLoveSignals(item)).concat(collector.favoriteGenres || [])
  );
  const directSignals = getSignalIntersection(albumSignals, collectorSignals);
  const adjacentSignals = getAdjacentSignalIntersection(albumSignals, collectorSignals);
  const socialPost = getCollectorPostForAlbum(album, collector, posts);
  const compatibility = compareCollections(state.collection, collector.collection || [], state.wishlist || [], collector.wishlist || [])
    .compatibilityPercent;
  const maxRated = Number(socialPost?.rating || 0) >= 5;
  const score = Math.min(
    100,
    (exactAlbums.length ? 44 : 0) +
      (sameArtistAlbums.length ? 22 : 0) +
      directSignals.length * 8 +
      adjacentSignals.length * 6 +
      (maxRated ? 10 : 0) +
      Math.round(compatibility / 5)
  );

  return {
    collector,
    score,
    compatibility,
    exactAlbums,
    sameArtistAlbums,
    directSignals,
    adjacentSignals,
    socialPost,
    reason: buildAlbumLoveReason({ exactAlbums, sameArtistAlbums, directSignals, adjacentSignals, socialPost, collector, album })
  };
}

function getAlbumLoveSignals(album = {}) {
  return uniqueList(
    [
      album.genre,
      album.style,
      ...(album.styles || []),
      ...(album.tags || []),
      ...(album.moods || []),
      ...(album.scenes || []),
      ...getAlbumStyleTerms(album).map((term) => term.label)
    ]
      .filter(Boolean)
      .map(formatStyleLabel)
  );
}

function getSignalIntersection(a = [], b = []) {
  const normalizedB = new Map(b.map((item) => [normalizeSignalTerm(item), item]));
  return uniqueList(a.filter((item) => normalizedB.has(normalizeSignalTerm(item)))).slice(0, 4);
}

function getAdjacentSignalIntersection(a = [], b = []) {
  const normalizedB = new Set(b.map(normalizeSignalTerm));
  const adjacent = [];
  a.forEach((signal) => {
    getAdjacentTerms(signal).forEach((term) => {
      if (normalizedB.has(normalizeSignalTerm(term))) adjacent.push(formatStyleLabel(term));
    });
  });
  return uniqueList(adjacent).slice(0, 4);
}

function getCollectorPostForAlbum(album, collector, posts = []) {
  const albumKey = albumIdentityKey(album);
  return posts.find((post) => post.userId === collector.id && albumIdentityKey(post.albumSnapshot || post) === albumKey) || null;
}

function buildAlbumLoveReason(match) {
  const { exactAlbums, sameArtistAlbums, directSignals, adjacentSignals, socialPost, album } = match;
  if (exactAlbums.length && Number(socialPost?.rating || 0) >= 5) {
    return `Também tem ${album.title} na estante e já registrou nota máxima.`;
  }
  if (exactAlbums.length) return `Também tem ${album.title} na estante demo.`;
  if (sameArtistAlbums.length) {
    return `Aparece porque a estante dela volta para ${album.artist}, especialmente em ${sameArtistAlbums
      .slice(0, 2)
      .map((item) => item.title)
      .join(" e ")}.`;
  }
  if (directSignals.length) return `A coleção cruza sinais fortes de ${formatHumanList(directSignals.slice(0, 3))}.`;
  if (adjacentSignals.length) return `A conexão vem por uma ponte próxima: ${formatHumanList(adjacentSignals.slice(0, 3))}.`;
  return "A afinidade aparece pela leitura geral da estante.";
}

function getAlbumLoveStats(album, matches = []) {
  const albumKey = albumIdentityKey(album);
  const exactCollectors = matches.filter((match) => match.exactAlbums.length);
  const exactPosts = getSocialPosts().filter((post) => albumIdentityKey(post.albumSnapshot || post) === albumKey);
  return {
    haveAlbum: exactCollectors.length,
    maxRating: exactPosts.filter((post) => Number(post.rating || 0) >= 5).length,
    similarCollections: matches.filter((match) => match.exactAlbums.length || match.compatibility >= 55 || match.score >= 45).length
  };
}

function renderAlbumLoveStat(value, label) {
  return `
    <div class="album-love-stat">
      <strong>${Number(value || 0)}</strong>
      <span>${escapeHtml(label)}</span>
    </div>
  `;
}

function renderAlbumLovePerson(match) {
  const collector = match.collector;
  const chips = uniqueList([
    ...(match.exactAlbums.length ? ["tem este disco"] : []),
    ...match.directSignals,
    ...match.adjacentSignals.map((signal) => `ponte: ${signal}`)
  ]).slice(0, 4);

  return `
    <article class="album-love-person">
      <div class="collector-head">
        <div class="collector-avatar">${escapeHtml(initials(collector.name))}</div>
        <div>
          <h4>${escapeHtml(collector.name)}</h4>
          <div class="collector-meta">@${escapeHtml(collector.handle)}${collector.city ? ` · ${escapeHtml(collector.city)}` : ""}</div>
        </div>
      </div>
      <div class="compatibility">
        <div class="compatibility-row">
          <span>compatibilidade</span>
          <strong>${match.compatibility}%</strong>
        </div>
        <div class="match-meter"><span style="width: ${match.compatibility}%"></span></div>
      </div>
      <p>${escapeHtml(match.reason)}</p>
      ${
        match.socialPost?.note
          ? `<blockquote>${escapeHtml(match.socialPost.note)}</blockquote>`
          : ""
      }
      <div class="collector-tags">
        ${chips.map((chip) => `<span class="profile-tag">${escapeHtml(chip)}</span>`).join("")}
      </div>
      <div class="collector-actions">
        <button class="mini-button" type="button" data-love-view-collector="${escapeAttribute(collector.id)}">
          <i data-lucide="library"></i>
          Ver estante
        </button>
        <button class="mini-button" type="button" data-love-compare-collector="${escapeAttribute(collector.id)}">
          <i data-lucide="git-compare"></i>
          Comparar
        </button>
      </div>
    </article>
  `;
}

function getAlbumLoveRecommendations(album, matches = []) {
  const fromWishlist = matches.flatMap((match) =>
    (match.collector.wishlist || []).map((item) => ({
      ...item,
      sourceCollector: match.collector.name,
      sourceHandle: match.collector.handle,
      affinity: scoreAlbumLoveRecommendation(album, item, match)
    }))
  );

  return uniqueAlbums(fromWishlist)
    .filter((item) => !collectionHasAlbum(item) && !wishlistHasAlbum(item))
    .filter((item) => item.affinity >= 18)
    .toSorted((a, b) => b.affinity - a.affinity)
    .slice(0, 4);
}

function scoreAlbumLoveRecommendation(sourceAlbum, candidate, match) {
  const sourceSignals = getAlbumLoveSignals(sourceAlbum).map(normalizeSignalTerm);
  const candidateSignals = getAlbumLoveSignals(candidate).map(normalizeSignalTerm);
  const direct = candidateSignals.filter((signal) => sourceSignals.includes(signal)).length * 10;
  const adjacent = candidateSignals.filter((signal) => sourceSignals.some((source) => getAdjacentTerms(source).map(normalizeSignalTerm).includes(signal))).length * 7;
  const sameArtist = normalizeArtistForIdentity(sourceAlbum.artist) === normalizeArtistForIdentity(candidate.artist) ? 12 : 0;
  return direct + adjacent + sameArtist + Math.round((match?.compatibility || 0) / 8);
}

function uniqueAlbums(albums = []) {
  const seen = new Set();
  return albums.filter((album) => {
    const key = albumIdentityKey(album);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function renderAlbumLoveRecommendation(album) {
  return `
    <article class="album-love-recommendation">
      <div>
        <strong>${escapeHtml(album.title)}</strong>
        <span>${escapeHtml([album.artist, album.year, album.genre].filter(Boolean).join(" · "))}</span>
        <p>${escapeHtml(album.sourceCollector ? `${album.sourceCollector} salvou este caminho no radar.` : "Sinal social do radar local.")}</p>
      </div>
      <button class="mini-button" type="button" data-love-save-rec="${escapeAttribute(albumIdentityKey(album))}">
        <i data-lucide="bookmark-plus"></i>
        Salvar no radar
      </button>
    </article>
  `;
}

function previewCollectorShelfFromAlbumLove(collectorId) {
  const collector = getSocialCollectors().find((item) => item.id === collectorId);
  const album = state.collection.find((item) => item.id === state.activeAlbumLoveId);
  if (!collector || !album) return;
  const shelf = (collector.collection || [])
    .slice(0, 4)
    .map((item) => `${item.title} · ${item.artist}`)
    .join("; ");
  state.albumLoveNotice = `Estante demo de ${collector.name}: ${shelf || "sem discos visíveis no momento"}.`;
  renderAlbumLoveModal(album);
  createIcons();
}

function saveAlbumLoveRecommendation(albumKey) {
  const album = state.collection.find((item) => item.id === state.activeAlbumLoveId);
  if (!album) return;
  const recommendation = buildAlbumLoveExperience(album).socialRecommendations.find((item) => albumIdentityKey(item) === albumKey);
  if (!recommendation) return;

  const result = addAlbumToWishlist(recommendation, { source: "album-love" });
  if (result.status === "saved") state.albumLoveNotice = `${result.album.title} foi salvo no radar.`;
  else if (result.status === "owned") state.albumLoveNotice = `${recommendation.title} já está na sua coleção.`;
  else if (result.status === "exists") state.albumLoveNotice = `${recommendation.title} já estava no radar.`;
  else state.albumLoveNotice = "Não consegui salvar este disco no radar.";

  renderRecommendations();
  renderAlbumLoveModal(album);
  createIcons();
}

function renderCollectorComparisonModal(collector) {
  const match = compareCollections(state.collection, collector.collection || [], state.wishlist || [], collector.wishlist || []);
  const isFollowing = state.following.includes(collector.id);
  const confidenceLabel = getCollectorConfidenceLabel(match.confidence);
  const affinityChips = buildCollectorAffinityChips(match, collector);

  elements.collectorComparisonContent.innerHTML = `
    <div class="dialog-header comparison-header">
      <div>
        <span class="eyebrow">Comparação de estantes</span>
        <h2>Você + ${escapeHtml(collector.name)}</h2>
        <p>${escapeHtml(buildCollectorConnectionPhrase(match))}</p>
      </div>
      <button class="icon-button" type="button" data-close-collector-comparison title="Fechar">
        <i data-lucide="x"></i>
      </button>
    </div>

    <div class="comparison-hero">
      <div class="comparison-score-card">
        <span>Afinidade · ${escapeHtml(confidenceLabel)}</span>
        <strong>${match.compatibilityPercent}%</strong>
        <div class="match-meter"><span style="width: ${match.compatibilityPercent}%"></span></div>
      </div>
      <div class="comparison-type-card">
        <span>Tipo de match</span>
        <strong>${escapeHtml(match.matchType)}</strong>
        <p>${escapeHtml(match.explanation)}</p>
      </div>
    </div>

    ${
      state.collectorComparisonNotice
        ? `<div class="comparison-notice">${escapeHtml(state.collectorComparisonNotice)}</div>`
        : ""
    }

    ${renderComparisonSection(
      "Discos que conectam vocês",
      "Pontos de contato",
      renderConnectionDetails(match),
      "Ainda não há discos iguais cadastrados. Por enquanto, a conexão aparece por gênero, estilo e década."
    )}

    ${renderComparisonSection(
      "Ele tem, você provavelmente gostaria",
      "Descoberta",
      renderComparisonAlbumFitList(match.albumsTheyHaveThatIFit, collector.id, true),
      "A estante dele ainda não encontrou discos claros para o seu radar."
    )}

    ${renderComparisonSection(
      "Você tem, ele provavelmente gostaria",
      "Troca de estante",
      renderComparisonAlbumFitList(match.albumsIHaveThatTheyFit, collector.id, false),
      "Com mais discos e notas, o Groova identifica o que sua estante poderia recomendar para ele."
    )}

    ${renderComparisonSection(
      "Lacunas que ele preenche",
      "Caminhos",
      renderComparisonSignalList(getCollectorGapSignals(match)),
      "Nenhuma lacuna forte foi detectada agora. A afinidade está mais nos gostos compartilhados."
    )}

    ${renderComparisonSection(
      "Afinidades",
      "Sinais",
      renderComparisonSignalList(affinityChips),
      "Sem sinais suficientes para montar chips de afinidade."
    )}

    <div class="comparison-dialog-actions">
      <button class="secondary-button" type="button" data-comparison-follow="${escapeAttribute(collector.id)}">
        <i data-lucide="${isFollowing ? "check" : "user-plus"}"></i>
        ${isFollowing ? "Seguindo" : "Seguir"}
      </button>
      <button class="primary-button" type="button" data-comparison-save-all="${escapeAttribute(collector.id)}">
        <i data-lucide="bookmark-plus"></i>
        Salvar recomendações no radar
      </button>
      <button class="secondary-button" type="button" data-close-collector-comparison>Fechar</button>
    </div>
  `;

  bindCollectorComparisonModalActions(collector.id);
}

function bindCollectorComparisonModalActions(collectorId) {
  elements.collectorComparisonContent.querySelectorAll("[data-close-collector-comparison]").forEach((button) => {
    button.addEventListener("click", closeCollectorComparisonModal);
  });

  elements.collectorComparisonContent.querySelectorAll("[data-comparison-follow]").forEach((button) => {
    button.addEventListener("click", () => toggleFollowFromComparison(button.dataset.comparisonFollow));
  });

  elements.collectorComparisonContent.querySelectorAll("[data-comparison-save]").forEach((button) => {
    button.addEventListener("click", () => saveComparisonAlbumToWishlist(collectorId, button.dataset.comparisonSave));
  });

  elements.collectorComparisonContent.querySelectorAll("[data-comparison-save-all]").forEach((button) => {
    button.addEventListener("click", () => saveComparisonRecommendationsToWishlist(button.dataset.comparisonSaveAll));
  });
}

function renderComparisonSection(title, eyebrow, content, emptyText) {
  const hasContent = String(content || "").trim().length > 0;
  return `
    <section class="comparison-section">
      <div class="section-mini-heading">
        <span class="eyebrow">${escapeHtml(eyebrow)}</span>
        <h3>${escapeHtml(title)}</h3>
      </div>
      ${hasContent ? content : `<p class="comparison-empty">${escapeHtml(emptyText)}</p>`}
    </section>
  `;
}

function renderConnectionDetails(match) {
  const groups = [
    renderConnectionGroup("Discos em comum", match.commonAlbums.map((album) => `${album.title} · ${album.artist}`)),
    renderConnectionGroup("Nota alta em ambos", match.sharedLovedAlbums.map((album) => `${album.title} · ${album.artist}`)),
    renderConnectionGroup("Artistas em comum", match.commonArtists)
  ].filter(Boolean);

  if (groups.length) return `<div class="comparison-connection-grid">${groups.join("")}</div>`;

  return renderComparisonSignalList([
    ...match.commonGenres.map((genre) => `gênero em comum: ${genre}`),
    ...match.commonStyles.map((style) => `estilo em comum: ${style}`),
    ...match.commonDecades.map((decade) => `década em comum: ${decade}`)
  ]);
}

function renderConnectionGroup(label, items = []) {
  const cleanItems = uniqueList(items).slice(0, 5);
  if (!cleanItems.length) return "";
  return `
    <div class="comparison-connection-group">
      <span>${escapeHtml(label)}</span>
      ${cleanItems.map((item) => `<strong>${escapeHtml(item)}</strong>`).join("")}
    </div>
  `;
}

function renderComparisonAlbumFitList(albums = [], collectorId, canSave) {
  const items = albums.filter(Boolean).slice(0, 6);
  if (!items.length) return "";
  return `
    <div class="comparison-album-list">
      ${items
        .map((album) => {
          const key = album.identityKey || albumIdentityKey(album);
          const saved = wishlistHasAlbum(album);
          const owned = collectionHasAlbum(album);
          return `
            <article class="comparison-album-row">
              <div>
                <strong>${escapeHtml(album.title)}</strong>
                <span>${escapeHtml([album.artist, album.year, album.genre].filter(Boolean).join(" · "))}</span>
                <p>${escapeHtml(getComparisonAlbumReason(album))}</p>
              </div>
              ${
                canSave
                  ? `<button class="mini-button" type="button" data-comparison-save="${escapeAttribute(key)}" ${saved || owned ? "disabled" : ""}>
                      <i data-lucide="${owned ? "check" : saved ? "bookmark-check" : "bookmark-plus"}"></i>
                      ${owned ? "Na coleção" : saved ? "No radar" : "Salvar no radar"}
                    </button>`
                  : ""
              }
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function getComparisonAlbumReason(album) {
  if (album.fitSignals?.length) return album.fitSignals.slice(0, 3).join(" · ");
  return "Conversa com os sinais principais da estante.";
}

function renderComparisonSignalList(signals = []) {
  const items = uniqueList(signals).slice(0, 10);
  if (!items.length) return "";
  return `<div class="comparison-chip-list">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`;
}

function buildCollectorAffinityChips(match, collector) {
  return uniqueList([
    ...match.commonGenres.map((genre) => `Gênero: ${genre}`),
    ...match.commonStyles.map((style) => `Estilo: ${style}`),
    ...match.commonDecades.map((decade) => `Década: ${decade}`),
    ...match.commonArtists.map((artist) => `Artista: ${artist}`),
    ...collector.favoriteGenres.map((genre) => `Estante dele: ${genre}`)
  ]).slice(0, 10);
}

function getCollectorGapSignals(match) {
  const directGapSignals = match.complementarySignals
    .filter((signal) => signal.includes("eles cobrem sua lacuna em"))
    .map((signal) => signal.replace("eles cobrem sua lacuna em", ""));
  const albumGapSignals = match.albumsTheyHaveThatIFit
    .flatMap((album) => album.fitSignals || [])
    .filter((signal) => normalizeSignalTerm(signal).includes("lacuna"))
    .map((signal) => signal.replace(/^lacuna:\s*/i, ""));
  return uniqueList([...directGapSignals, ...albumGapSignals]).map((gap) => `Preenche sua lacuna em ${gap}`);
}

function buildCollectorConnectionPhrase(match) {
  const signals = [
    ...match.commonGenres.slice(0, 2),
    ...match.commonStyles.slice(0, 2),
    ...match.commonArtists.slice(0, 1)
  ];
  if (signals.length) return `Vocês se conectam por ${formatHumanList(signals)}.`;
  if (match.albumsTheyHaveThatIFit.length) {
    return `Vocês se conectam por caminhos complementares: a estante dele abre portas para ${match.albumsTheyHaveThatIFit[0].title}.`;
  }
  return "Vocês ainda têm uma compatibilidade inicial; mais discos deixam essa leitura mais precisa.";
}

function toggleFollowFromComparison(collectorId) {
  const followed = toggleFollowCollector(collectorId);
  const collector = getSocialCollectors().find((item) => item.id === collectorId);
  if (!collector) return;
  state.collectorComparisonNotice = followed ? `Você está seguindo ${collector.name}.` : `Você deixou de seguir ${collector.name}.`;
  renderCollectorMatches();
  renderCollectorComparisonModal(collector);
  createIcons();
}

function saveComparisonAlbumToWishlist(collectorId, albumKey) {
  const collector = getSocialCollectors().find((item) => item.id === collectorId);
  if (!collector) return;
  const album = findCollectorAlbumByKey(collector, albumKey);
  const result = addAlbumToWishlist(album, { source: `comparison:${collector.handle}` });
  state.collectorComparisonNotice = getWishlistSaveNotice(result, collector.name);
  renderRecommendations();
  renderCollectorComparisonModal(collector);
  createIcons();
}

function saveComparisonRecommendationsToWishlist(collectorId) {
  const collector = getSocialCollectors().find((item) => item.id === collectorId);
  if (!collector) return;
  const match = compareCollections(state.collection, collector.collection || [], state.wishlist || [], collector.wishlist || []);
  const results = match.albumsTheyHaveThatIFit.map((album) => {
    const sourceAlbum = findCollectorAlbumByKey(collector, album.identityKey) || album;
    return addAlbumToWishlist(sourceAlbum, { source: `comparison:${collector.handle}` });
  });
  const savedCount = results.filter((result) => result.status === "saved").length;
  const skippedCount = results.length - savedCount;
  state.collectorComparisonNotice = savedCount
    ? `${savedCount} ${savedCount === 1 ? "disco salvo" : "discos salvos"} no radar.${skippedCount ? ` ${skippedCount} já estava no radar ou na coleção.` : ""}`
    : "Nenhuma nova recomendação para salvar agora.";
  renderRecommendations();
  renderCollectorComparisonModal(collector);
  createIcons();
}

function findCollectorAlbumByKey(collector, albumKey) {
  return (collector.collection || []).find((album) => albumIdentityKey(album) === albumKey);
}

function getWishlistSaveNotice(result, collectorName) {
  if (result.status === "saved") return `${result.album.title} entrou no radar a partir da estante de ${collectorName}.`;
  if (result.status === "owned") return `${result.album.title} já está na sua coleção.`;
  if (result.status === "exists") return `${result.album.title} já estava salvo no radar.`;
  return "Não consegui salvar este disco no radar.";
}

function toggleCollectorComparison(id) {
  state.activeCollectorComparison = state.activeCollectorComparison === id ? "" : id;
  renderCollectorMatches();
  createIcons();
}

function toggleFollow(id) {
  toggleFollowCollector(id);
  renderCommunity();
  createIcons();
}

function renderPressingDiscussions() {
  const { owned, discussions } = getRankedPressingDiscussions();

  elements.pressingDiscussions.innerHTML = discussions
    .slice(0, 2)
    .map((item) => {
      const inCollection = owned.has(normalize(`${item.album} ${item.artist}`));
      return `
        <article class="pressing-card">
          <div class="pressing-score">
            <span class="news-tag">${inCollection ? "na sua coleção" : "fora da estante"}</span>
            <span class="news-tag">${item.score}/100</span>
            <span class="news-tag">${item.comments} comentários</span>
          </div>
          <h3>${escapeHtml(item.album)} · ${escapeHtml(item.artist)}</h3>
          <div class="pressing-meta">${escapeHtml(item.pressing)} · ${escapeHtml(item.verdict)}</div>
          <p class="pressing-note">
            Sinal forte: ${escapeHtml(item.signal)}. Atenção: ${escapeHtml(item.caution)}.
          </p>
        </article>
      `;
    })
    .join("");
}

function renderPressingTimeline() {
  const { owned, discussions } = getRankedPressingDiscussions();

  elements.socialFeed.innerHTML = discussions
    .map((item) => {
      const inCollection = owned.has(normalize(`${item.album} ${item.artist}`));
      return `
        <article class="feed-card timeline-post pressing-timeline-post">
          <div class="feed-avatar"><i data-lucide="messages-square"></i></div>
          <div class="timeline-post-body">
            <div class="timeline-post-header">
              <div>
                <h3>${escapeHtml(item.album)} <span class="profile-handle">${escapeHtml(item.artist)}</span></h3>
                <div class="feed-meta">${escapeHtml(item.pressing)} · ${escapeHtml(item.verdict)}</div>
              </div>
              <span class="feed-meta">${item.score}/100</span>
            </div>
            <p class="feed-note">
              Sinal forte: ${escapeHtml(item.signal)}. Atenção: ${escapeHtml(item.caution)}.
            </p>
            <div class="feed-actions">
              <span class="news-tag">${inCollection ? "na sua coleção" : "fora da estante"}</span>
              <span class="news-tag">${item.comments} comentários</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
  resetSocialFeedScroll();
}

function getRankedPressingDiscussions() {
  const owned = new Set(state.collection.map((album) => normalize(`${album.title} ${album.artist}`)));
  const discussions = pressingDiscussions.toSorted((a, b) => {
    const aOwned = owned.has(normalize(`${a.album} ${a.artist}`));
    const bOwned = owned.has(normalize(`${b.album} ${b.artist}`));
    return Number(bOwned) - Number(aOwned) || b.score - a.score;
  });
  return { owned, discussions };
}

function scoreCollectorMatch(collector) {
  return compareCollections(state.collection, collector.collection || [], state.wishlist || [], collector.wishlist || []).compatibilityPercent;
}

function renderRecommendations() {
  const profile = getTasteProfile();
  const collectionSize = state.collection.length;
  const radarStage = getRadarStage(collectionSize);

  if (!collectionSize) {
    setRecommendationStatus("Cadastre 3 discos para ativar um radar pessoal.");
    elements.tasteProfile.innerHTML = renderTasteProfileSummary(profile, state.collection, radarStage, collectionSize);
    elements.recommendationGrid.innerHTML = renderRecommendationEmptyState();
    return;
  }

  setRecommendationStatus(
    state.recommendationNotice ||
      getRecommendationStatusText(collectionSize, radarStage, state.wishlist.length)
  );
  elements.tasteProfile.innerHTML = renderTasteProfileSummary(profile, state.collection, radarStage, collectionSize);

  const recommendations = scoreRecommendations(state.collection, recommendationPool, state.wishlist, state.recommendationFeedback);
  preloadImages(recommendations.map(getRecommendationCoverUrl).filter(Boolean));
  const wishlistCards = state.wishlist.length
    ? `
      <section class="wishlist-panel">
        <div class="section-mini-heading">
          <span class="eyebrow">Radar salvo</span>
          <h2>Quero garimpar</h2>
        </div>
        <div class="wishlist-list">
          ${state.wishlist.map(renderWishlistItem).join("")}
        </div>
      </section>
    `
    : "";

  const recommendationCards = recommendations.length
    ? recommendations
        .map(
          (album) => `
        <article class="recommendation-card">
          <div class="recommendation-cover">
            ${renderRecommendationCover(album)}
          </div>
            <div class="recommendation-body">
              <div class="recommendation-card-header">
                <span class="recommendation-label" data-section="${escapeAttribute(album.recommendationSection || "certeiras")}">${escapeHtml(album.recommendationLabel || "Próximo passo")}</span>
                <span class="recommendation-confidence">${escapeHtml(getRecommendationConfidenceLabel(album, radarStage))}</span>
              </div>
              <div class="recommendation-title-row">
                <h3>${escapeHtml(album.title)}</h3>
                <strong>${album.scorePercent}%</strong>
              </div>
              <div class="recommendation-meta">
                ${escapeHtml(album.artist)} · ${album.year} · ${escapeHtml(album.genre)}
              </div>
              <div class="recommendation-why">
                <span>Por que combina</span>
                <p>${escapeHtml(album.dynamicReason || album.reason)}</p>
              </div>
              ${renderRecommendationInfluence(album)}
              ${renderRecommendationSignalChips(album)}
              <div class="recommendation-score">
                <span>Aderência: ${album.scorePercent}%</span>
                <span class="score-meter"><span style="width: ${album.scorePercent}%"></span></span>
              </div>
            <div class="card-actions">
              <button class="mini-button" data-save-rec="${escapeAttribute(album.title)}|${escapeAttribute(album.artist)}">
                <i data-lucide="bookmark-plus"></i>
                Salvar no radar
              </button>
              <div class="recommendation-feedback-actions">
                <button class="ghost-mini-button" data-feedback-rec="${escapeAttribute(album.identityKey)}" data-feedback-action="more-like-this">
                  <i data-lucide="sparkles"></i>
                  Mais nessa linha
                </button>
                <button class="ghost-mini-button" data-feedback-rec="${escapeAttribute(album.identityKey)}" data-feedback-action="not-for-me">
                  <i data-lucide="x"></i>
                  Não é pra mim
                </button>
                <button class="ghost-mini-button" data-feedback-rec="${escapeAttribute(album.identityKey)}" data-feedback-action="owned">
                  <i data-lucide="check-circle-2"></i>
                  Já tenho
                </button>
              </div>
            </div>
          </div>
        </article>
      `
        )
        .join("")
    : renderRecommendationNoResults();

  elements.recommendationGrid.innerHTML = `${wishlistCards}${recommendationCards}`;

  elements.recommendationGrid.querySelectorAll("[data-save-rec]").forEach((button) => {
    button.addEventListener("click", () => {
      const [title, artist] = button.dataset.saveRec.split("|");
      saveRecommendationToWishlist(title, artist);
    });
  });

  elements.recommendationGrid.querySelectorAll("[data-feedback-rec]").forEach((button) => {
    button.addEventListener("click", () => {
      handleRecommendationFeedback(button.dataset.feedbackRec, button.dataset.feedbackAction);
    });
  });

  elements.recommendationGrid.querySelectorAll("[data-add-wishlist]").forEach((button) => {
    button.addEventListener("click", () => {
      addWishlistItemToCollection(button.dataset.addWishlist);
    });
  });

  renderCoverCanvases();
  createIcons();
  hydrateRecommendationCovers(recommendations);
}

function getRadarStage(collectionSize) {
  if (!collectionSize) return "cold";
  if (collectionSize < 3) return "initial";
  return "complete";
}

function getRecommendationStatusText(collectionSize, radarStage, wishlistSize) {
  const countText = `${collectionSize} ${collectionSize === 1 ? "disco" : "discos"}`;
  if (radarStage === "initial") {
    return `Radar inicial com ${countText}; a confiança melhora a partir de 3 discos.`;
  }
  return `Radar completo com ${countText} e ${wishlistSize} no radar salvo.`;
}

function renderTasteProfileSummary(profile, collection, radarStage, collectionSize) {
  const diagnosis = getCollectionDiagnosis(profile, collection);
  const stageContent = {
    cold: {
      kicker: "Radar em espera",
      title: "Cadastre 3 discos para ativar recomendações pessoais",
      body: "Comece pelo que você já ama. Com três LPs, o Groova já consegue ler gênero, década, estilo e lacunas da sua estante."
    },
    initial: {
      kicker: "Radar inicial",
      title: "Recomendações com baixa confiança",
      body: `${profile.profileSummary} Ainda há poucos sinais, então o radar mostra caminhos prováveis e aprende rápido com cada novo cadastro.`
    },
    complete: {
      kicker: "Radar personalizado",
      title: "Leitura atual da sua estante",
      body: profile.profileSummary
    }
  }[radarStage];
  const genres = getTopSignalLabels(profile.genreWeights, profile.genreCounts, 3).join(", ") || "em formação";
  const styles = (profile.topStyles || []).map((style) => style.label).slice(0, 3).join(", ") || "em formação";
  const decade = profile.topDecade || "em formação";
  const gap = profile.gapGenre || "em formação";

  return `
    <section class="taste-profile-panel" data-radar-stage="${escapeAttribute(radarStage)}">
      <div class="taste-profile-copy">
        <span class="taste-profile-kicker">${escapeHtml(stageContent.kicker)}</span>
        <h2>${escapeHtml(stageContent.title)}</h2>
        <p>${escapeHtml(stageContent.body)}</p>
        ${renderCollectionDiagnosis(diagnosis)}
      </div>
      <div class="taste-signal-grid">
        ${renderTasteSignal("Discos lidos", collectionSize ? `${collectionSize}/3+` : "0/3")}
        ${renderTasteSignal("Gêneros fortes", genres)}
        ${renderTasteSignal("Estilos fortes", styles)}
        ${renderTasteSignal("Década dominante", decade)}
        ${renderTasteSignal("Próxima lacuna", gap)}
      </div>
    </section>
  `;
}

function renderCollectionDiagnosis(diagnosis) {
  if (!diagnosis?.headline) return "";
  return `
    <aside class="collection-diagnosis">
      <span>Leitura do curador</span>
      <strong>${escapeHtml(diagnosis.headline)}</strong>
      <p>${escapeHtml(diagnosis.curatorNote || diagnosis.summary)}</p>
      <div class="diagnosis-chip-row">
        ${renderDiagnosisChips("Forças", diagnosis.strengths)}
        ${renderDiagnosisChips("Lacunas", diagnosis.gaps)}
        ${renderDiagnosisChips("Próximas rotas", diagnosis.nextDirections)}
      </div>
    </aside>
  `;
}

function renderDiagnosisChips(label, items = []) {
  const chips = items.filter(Boolean).slice(0, 3);
  if (!chips.length) return "";
  return `
    <div class="diagnosis-chip-group">
      <span>${escapeHtml(label)}</span>
      ${chips.map((item) => `<em>${escapeHtml(item)}</em>`).join("")}
    </div>
  `;
}

function renderTasteSignal(label, value) {
  return `
    <div class="taste-signal">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `;
}

function getTopSignalLabels(weights = {}, counts = {}, limit = 3) {
  const source = Object.keys(weights).length ? weights : counts;
  return weightedEntries(source)
    .map(([label]) => label)
    .filter(Boolean)
    .slice(0, limit);
}

function renderRecommendationEmptyState() {
  const steps = [
    {
      title: "Comece pelo que você já ama",
      body: "Cadastre 3 discos que você conhece bem para o radar entender seu gosto real."
    },
    {
      title: "Use gênero, estilo e tags",
      body: "Esses sinais ajudam o Groova a diferenciar rap narrativo, jazz rap, soul, MPB, rock e outras rotas."
    },
    {
      title: "Depois salve o que quiser garimpar",
      body: "As recomendações entram no radar de compras e podem virar discos da coleção."
    }
  ];

  return `
    <section class="radar-empty-state">
      ${steps
        .map(
          (item, index) => `
            <article class="radar-empty-step">
              <span>${index + 1}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.body)}</p>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderRecommendationNoResults() {
  return `
    <section class="radar-empty-state">
      <article class="radar-empty-step">
        <span>0</span>
        <h3>Radar sem novas sugestões</h3>
        <p>Sua coleção ou wishlist já cobre os candidatos atuais. Cadastre mais discos ou marque feedback para abrir novas rotas.</p>
      </article>
    </section>
  `;
}

function getRecommendationConfidenceLabel(album, radarStage) {
  if (radarStage === "initial") return "confiança baixa";
  return `confiança ${album.confidence || "média"}`;
}

function renderRecommendationCover(album) {
  const coverUrl = getRecommendationCoverUrl(album);
  const cacheKey = coverCacheKey(album);
  const officialCover = coverUrl
    ? `<img src="${escapeAttribute(coverUrl)}" alt="Capa de ${escapeAttribute(album.title)}" loading="eager" decoding="async" fetchpriority="high" data-cover-image data-cover-cache-key="${escapeAttribute(cacheKey)}" />`
    : "";

  return `
    <canvas width="420" height="420" data-cover-seed="${Number(album.coverSeed || 1)}"></canvas>
    ${officialCover}
  `;
}

function renderRecommendationReasonChips(album) {
  const chips = (album.reasonChips || []).slice(0, 4);
  if (!chips.length) return "";
  return `
    <div class="recommendation-chips">
      ${chips.map((chip) => `<span class="reason-chip">${escapeHtml(chip)}</span>`).join("")}
    </div>
  `;
}

function renderRecommendationSignalChips(album) {
  const chips = getRecommendationVisibleSignals(album);
  if (!chips.length) return "";
  return `
    <div class="recommendation-signal-block">
      <span>Sinais usados</span>
      <div class="recommendation-chips">
        ${chips.map((chip) => `<span class="reason-chip">${escapeHtml(chip)}</span>`).join("")}
      </div>
    </div>
  `;
}

function getRecommendationVisibleSignals(album) {
  const curated = (album.reasonChips || []).filter(Boolean);
  if (curated.length) return curated.slice(0, 4);
  return (album.matchedSignals || [])
    .map(formatRecommendationSignal)
    .filter(Boolean)
    .slice(0, 4);
}

function formatRecommendationSignal(signal) {
  const clean = String(signal || "")
    .replace(/^curadoria:/, "")
    .replace(/^gênero forte:/, "")
    .replace(/^gênero presente:/, "")
    .replace(/^adjacente:/, "")
    .replace(/^lacuna:[^:]+:/, "lacuna em ")
    .replace(/[:+]/g, " + ")
    .replace(/\s+/g, " ")
    .trim();
  return clean.length > 34 ? `${clean.slice(0, 31)}...` : clean;
}

function renderRecommendationInfluence(album) {
  const influences = (album.influencedBy || []).slice(0, 3);
  if (!influences.length) return "";
  return `
    <div class="recommendation-influence">
      <span>Influenciado por:</span>
      ${influences.map((item) => `<strong>${escapeHtml(item.title)}</strong>`).join("")}
    </div>
  `;
}

function renderWishlistItem(album) {
  return `
    <article class="wishlist-item">
      <div>
        <strong>${escapeHtml(album.title)}</strong>
        <span>${escapeHtml(album.artist)} · ${escapeHtml(album.year || "sem ano")} · ${escapeHtml(album.genre || "LP")}</span>
      </div>
      <button class="mini-button" data-add-wishlist="${escapeAttribute(album.id)}">
        <i data-lucide="plus"></i>
        Cadastrar
      </button>
    </article>
  `;
}

function getRecommendationCoverUrl(album) {
  return (
    album.coverUrl ||
    recommendationCoverUrls[albumIdentityKey(album)] ||
    state.coverCache[coverCacheKey(album)] ||
    state.coverCache[legacyCoverCacheKey(album)] ||
    ""
  );
}

function coverCacheKey(album) {
  return albumIdentityKey(album)
    .replace(/::/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function legacyCoverCacheKey(album) {
  return normalize(`${album.artist || ""} ${album.title || ""}`)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function hydrateRecommendationCovers(recommendations) {
  const albumsToHydrate = recommendations.filter((album) => {
    const cacheKey = coverCacheKey(album);
    return (
      cacheKey &&
      !getRecommendationCoverUrl(album) &&
      !pendingRecommendationCoverKeys.has(cacheKey) &&
      !missingRecommendationCoverKeys.has(cacheKey)
    );
  });
  if (!albumsToHydrate.length) return;

  if (state.activeView === "recommendations") {
    setRecommendationStatus("Buscando capas oficiais das recomendações...");
  }

  albumsToHydrate.forEach((album) => {
    pendingRecommendationCoverKeys.add(coverCacheKey(album));
  });

  let hasNewCovers = false;
  for (const album of albumsToHydrate) {
    const cacheKey = coverCacheKey(album);

    try {
      const candidates = await fetchCoverCandidates(album.title, album.artist);
      const best = candidates[0];
      if (best?.coverUrl && best.score >= 72) {
        state.coverCache[cacheKey] = best.coverUrl;
        hasNewCovers = true;
        saveCoverCache();
        state.recommendationNotice = "Capas oficiais atualizadas nas recomendações.";
        renderRecommendations();
      } else {
        missingRecommendationCoverKeys.add(cacheKey);
      }
    } catch {
      missingRecommendationCoverKeys.add(cacheKey);
    } finally {
      pendingRecommendationCoverKeys.delete(cacheKey);
    }
  }

  if (!hasNewCovers && state.activeView === "recommendations") {
    setRecommendationStatus("Ainda não encontrei capas oficiais confiáveis para estas recomendações.");
  }
}

function setRecommendationStatus(text) {
  if (!elements.recommendationStatus) return;
  elements.recommendationStatus.textContent = `${text} ${formatClock(new Date())}`;
}

function getTasteProfile(collection = state.collection) {
  return buildTasteProfile(collection);
}

// Radar da estante: funções puras para deixar o algoritmo mais previsível e testável.
function normalizeAlbum(album) {
  const rawTags = Array.isArray(album?.tags)
    ? album.tags
    : String(album?.tags || "")
        .split(",")
        .map((tag) => tag.trim());
  const tags = [...new Set(rawTags.map((tag) => String(tag || "").trim()).filter(Boolean))];
  const styles = normalizeList(album?.styles, album?.style);
  const moods = normalizeList(album?.moods);
  const scenes = normalizeList(album?.scenes);
  const bridgeFrom = normalizeList(album?.bridgeFrom);
  const goodForCollectionsWith = normalizeList(album?.goodForCollectionsWith);
  const gapForCollectionsMissing = normalizeList(album?.gapForCollectionsMissing);
  const avoidIfOverrepresented = normalizeList(album?.avoidIfOverrepresented);
  const year = Number(album?.year);
  const rating = Number(album?.rating);
  const title = String(album?.title || "").trim();
  const artist = String(album?.artist || "").trim();
  const genre = normalizeGenreLabel(album?.genre);
  const style = String(album?.style || styles[0] || "").trim();
  const lastPlayedAt = album?.lastPlayedAt || album?.lastPlayed || null;

  return {
    ...album,
    title,
    artist,
    year: Number.isFinite(year) ? year : "",
    country: String(album?.country || "").trim(),
    genre,
    style,
    styles,
    tags,
    moods,
    scenes,
    bridgeFrom,
    goodForCollectionsWith,
    gapForCollectionsMissing,
    avoidIfOverrepresented,
    rating: Number.isFinite(rating) ? Math.max(0, Math.min(5, rating)) : 0,
    purchasePlace: String(album?.purchasePlace || "").trim(),
    price: normalizePrice(album?.price),
    comment: String(album?.comment || "").trim(),
    lastPlayedAt,
    decade: Number.isFinite(year) ? `${Math.floor(year / 10) * 10}s` : "Não informado",
    identityKey: albumIdentityKey({ title, artist }),
    normalizedArtist: normalizeArtistForIdentity(artist),
    normalizedTitle: normalizeTitleForIdentity(title),
    normalizedGenre: normalize(genre),
    normalizedStyle: normalize(style),
    normalizedTags: tags.map(normalize).filter(Boolean),
    normalizedStyles: styles.map(normalizeSignalTerm).filter(Boolean),
    normalizedMoods: moods.map(normalizeSignalTerm).filter(Boolean),
    normalizedScenes: scenes.map(normalizeSignalTerm).filter(Boolean)
  };
}

function normalizeList(value, fallback = []) {
  const rawValues = [
    ...(Array.isArray(value) ? value : String(value || "").split(",")),
    ...(Array.isArray(fallback) ? fallback : [fallback])
  ];
  const seen = new Set();
  return rawValues
    .map((item) => String(item || "").trim())
    .filter(Boolean)
    .filter((item) => {
      const key = normalizeSignalTerm(item);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function buildTasteProfile(collection) {
  const albums = collection.map(normalizeAlbum).filter((album) => album.title && album.artist);
  const genreCounts = countBy(albums, "genre");
  const artistCounts = countBy(albums, "artist");
  const decadeCounts = countBy(albums, "decade");
  const preferredTags = countTags(albums);
  const normalizedTags = normalizeTagCounts(preferredTags);
  const genreWeights = {};
  const artistWeights = {};
  const decadeWeights = {};
  const styleWeights = {};
  const weightedTags = {};

  albums.forEach((album) => {
    const weight = getAlbumPreferenceWeight(album);
    addWeightedSignal(genreWeights, album.genre, weight);
    addWeightedSignal(artistWeights, album.artist, weight);
    addWeightedSignal(decadeWeights, album.decade, weight);

    getAlbumStyleTerms(album).forEach((term) => {
      addWeightedSignal(styleWeights, term.label, weight);
    });

    album.tags.forEach((tag) => {
      addWeightedSignal(weightedTags, normalize(tag), weight);
    });
  });

  const styleTerms = normalize(Object.keys(styleWeights).join(" "));
  const averageRating =
    albums.reduce((sum, album) => sum + Number(album.rating || 0), 0) / Math.max(albums.length, 1);
  const topStyles = weightedEntries(styleWeights)
    .slice(0, 8)
    .map(([label, weight]) => ({ label, weight: roundSignal(weight) }));
  const artistStats = buildArtistStats(albums, artistWeights);
  const anchorAlbums = buildAnchorAlbums(albums);
  const gaps = buildTasteGaps({ genreCounts, genreWeights, styleWeights });
  const gapGenre = pickPrimaryGapGenre(gaps, genreCounts, genreWeights);
  const topGenre = weightedEntries(genreWeights)[0]?.[0] || topEntry(genreCounts)?.[0];
  const topDecade = weightedEntries(decadeWeights)[0]?.[0] || topEntry(decadeCounts)?.[0];

  return {
    albums,
    genreCounts,
    genreWeights,
    artistCounts,
    artistWeights,
    decadeCounts,
    decadeWeights,
    preferredTags,
    normalizedTags,
    weightedTags,
    styleTerms,
    styleWeights,
    topStyles,
    topGenre,
    topDecade,
    averageRating,
    recurringArtists: artistStats.recurringArtists,
    highRatedArtists: artistStats.highRatedArtists,
    anchorAlbums,
    gaps,
    gapGenre,
    profileSummary: buildTasteProfileSummary({ topGenre, topDecade, topStyles, gaps, albums })
  };
}

function getAlbumPreferenceWeight(album) {
  const rating = Number(album.rating || 0);
  if (!rating) return 0.75;
  if (rating >= 4.75) return 1.45;
  if (rating >= 4.25) return 1.25;
  if (rating >= 3.75) return 1;
  if (rating >= 3) return 0.72;
  return 0.48;
}

function addWeightedSignal(target, label, weight) {
  const cleanLabel = String(label || "").trim();
  if (!cleanLabel || cleanLabel === "Não informado") return;
  target[cleanLabel] = (target[cleanLabel] || 0) + Number(weight || 0);
}

function weightedEntries(data) {
  return Object.entries(data).toSorted((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "pt-BR"));
}

function roundSignal(value) {
  return Math.round(Number(value || 0) * 100) / 100;
}

function getAlbumStyleTerms(album) {
  const sources = [
    album.style,
    ...(album.styles || []),
    ...(album.tags || []),
    ...(album.moods || []),
    ...(album.scenes || [])
  ];
  const seen = new Set();
  return sources
    .flatMap(extractStyleTerms)
    .filter((term) => {
      if (!term.normalized || seen.has(term.normalized)) return false;
      seen.add(term.normalized);
      return true;
    });
}

function extractStyleTerms(value) {
  const prepared = normalize(value)
    .replace(/&/g, " and ")
    .replace(/[-_]+/g, " ")
    .replace(/[^a-z0-9/+ ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!prepared) return [];

  const fragments = [prepared, ...prepared.split(/[\/+]+/)]
    .map((term) => term.replace(/\s+/g, " ").trim())
    .filter((term) => term.length > 1 && !isIgnoredStyleTerm(term));
  return [...new Set(fragments)].map((term) => ({
    normalized: term,
    label: formatStyleLabel(term)
  }));
}

function isIgnoredStyleTerm(term) {
  return ["album", "lp", "ep", "duplo lp", "reissue", "reedicao", "reedição", "nacional"].includes(term);
}

function formatStyleLabel(term) {
  const aliases = {
    "hip hop": "Hip-Hop",
    hiphop: "Hip-Hop",
    rap: "rap",
    "hip hop rap": "Hip-Hop/Rap",
    "r b": "R&B",
    rb: "R&B",
    "alternative r b": "alternative R&B",
    "neo soul": "neo soul",
    "jazz rap": "jazz rap",
    "west coast hip hop": "west coast hip-hop",
    "east coast hip hop": "east coast hip-hop",
    "alternative hip hop": "alternative hip-hop",
    "experimental hip hop": "experimental hip-hop",
    tropicalia: "tropicália",
    "musica brasileira": "música brasileira",
    eletronica: "eletrônica"
  };
  return aliases[term] || term;
}

function buildArtistStats(albums, artistWeights) {
  const grouped = albums.reduce((acc, album) => {
    if (!acc[album.artist]) acc[album.artist] = [];
    acc[album.artist].push(album);
    return acc;
  }, {});

  const stats = Object.entries(grouped).map(([artist, artistAlbums]) => {
    const averageRating =
      artistAlbums.reduce((sum, album) => sum + Number(album.rating || 0), 0) / Math.max(artistAlbums.length, 1);
    return {
      artist,
      count: artistAlbums.length,
      averageRating,
      weight: roundSignal(artistWeights[artist] || 0)
    };
  });

  return {
    recurringArtists: stats
      .filter((item) => item.count > 1)
      .toSorted((a, b) => b.count - a.count || b.averageRating - a.averageRating),
    highRatedArtists: stats
      .filter((item) => item.averageRating >= 4.5)
      .toSorted((a, b) => b.averageRating - a.averageRating || b.weight - a.weight)
  };
}

function buildAnchorAlbums(albums) {
  return albums
    .map((album) => {
      const commentWords = album.comment.split(/\s+/).filter(Boolean).length;
      const tagScore = Math.min(2, (album.tags || []).length * 0.35);
      const commentScore = Math.min(2, commentWords / 18);
      const ratingScore = Number(album.rating || 0) * 1.35;
      const listenScore = Math.min(1.2, Number(album.listenCount || 0) * 0.25);
      const recentSignal = album.lastPlayedAt ? 0.35 : 0;
      return {
        title: album.title,
        artist: album.artist,
        year: album.year,
        genre: album.genre,
        style: album.style,
        rating: album.rating,
        identityKey: album.identityKey,
        anchorScore: roundSignal(ratingScore + tagScore + commentScore + listenScore + recentSignal)
      };
    })
    .filter((album) => album.anchorScore >= 5.4)
    .toSorted((a, b) => b.anchorScore - a.anchorScore)
    .slice(0, 8);
}

function buildTasteGaps({ genreCounts, genreWeights, styleWeights }) {
  const coreGenres = ["Jazz", "MPB", "Rock", "Soul", "Eletrônica", "Hip-Hop", "Pop", "Experimental"];
  const presentGenres = new Set(Object.keys(genreCounts).filter((genre) => genreCounts[genre] > 0));
  const obvious = coreGenres.filter((genre) => !presentGenres.has(genre));
  const underrepresented = coreGenres.filter(
    (genre) => presentGenres.has(genre) && Number(genreCounts[genre] || 0) <= 1 && Number(genreWeights[genre] || 0) < 1
  );
  const adjacent = [];

  if (presentGenres.has("Hip-Hop") && presentGenres.has("Soul")) adjacent.push("Jazz", "R&B alternativo", "neo soul");
  if (presentGenres.has("Hip-Hop") && presentGenres.has("Jazz")) adjacent.push("Soul", "jazz rap");
  if (presentGenres.has("Rock") && presentGenres.has("MPB")) adjacent.push("tropicália", "psicodelia brasileira");
  if (presentGenres.has("Rock") && presentGenres.has("Eletrônica")) adjacent.push("pós-punk", "ambient");
  if (presentGenres.has("MPB") && presentGenres.has("Soul")) adjacent.push("soul brasileiro", "funk brasileiro");
  if (styleWeights["jazz rap"]) adjacent.push("hard bop", "jazz funk");
  if (styleWeights["alternative hip-hop"]) adjacent.push("neo soul", "R&B alternativo");

  const exploratory = ["Ambient", "Experimental", "Dub", "Afrobeat", "Jazz fusion"].filter(
    (gap) => !presentGenres.has(gap) && !styleWeights[gap]
  );

  return {
    obvious: uniqueList([...obvious, ...underrepresented]).slice(0, 5),
    adjacent: uniqueList(adjacent).filter((gap) => !hasGapSignal(gap, genreCounts, styleWeights)).slice(0, 5),
    exploratory: uniqueList(exploratory).slice(0, 5)
  };
}

function pickPrimaryGapGenre(gaps, genreCounts, genreWeights) {
  const coreGenres = ["Jazz", "MPB", "Rock", "Soul", "Eletrônica", "Hip-Hop", "Pop", "Experimental"];
  const adjacentGenre = (gaps.adjacent || []).find((gap) => coreGenres.includes(gap));
  if (adjacentGenre) return adjacentGenre;
  const obviousGenre = (gaps.obvious || []).find((gap) => coreGenres.includes(gap));
  if (obviousGenre) return obviousGenre;
  return coreGenres.toSorted((a, b) => (genreWeights[a] || genreCounts[a] || 0) - (genreWeights[b] || genreCounts[b] || 0))[0];
}

function buildTasteProfileSummary({ topGenre, topDecade, topStyles, gaps, albums }) {
  if (!albums.length) return "Sua estante ainda está começando; cadastre alguns discos para formar um radar mais fiel.";
  const stylePhrase = topStyles
    .map((style) => style.label)
    .filter((label) => normalize(label) !== normalize(topGenre))
    .slice(0, 2)
    .join(", ");
  const gap = [...(gaps.adjacent || []), ...(gaps.obvious || []), ...(gaps.exploratory || [])][0];
  const focus = [topGenre, stylePhrase].filter(Boolean).join(", ");
  const decade = topDecade && topDecade !== "Não informado" ? ` dos anos ${topDecade.replace("s", "")}` : "";
  return `Sua estante puxa para ${focus || "discos bem avaliados"}${decade}, com pouca presença de ${gap || "novas rotas de exploração"}.`;
}

function getCollectionDiagnosis(profile, collection = []) {
  const albums = profile?.albums?.length
    ? profile.albums
    : collection.map(normalizeAlbum).filter((album) => album.title && album.artist);
  const currentProfile = profile?.albums ? profile : buildTasteProfile(albums);

  if (!albums.length) {
    return {
      headline: "Seu radar ainda precisa dos primeiros discos.",
      summary: "Com três LPs cadastrados, o Groova começa a reconhecer gênero, década, estilo e lacunas reais da coleção.",
      strengths: ["coleção em formação"],
      gaps: ["3 discos iniciais"],
      nextDirections: ["cadastre favoritos", "adicione tags", "registre escutas"],
      curatorNote: "Comece por discos que você conhece bem; eles ensinam mais ao radar do que uma lista grande sem contexto."
    };
  }

  const topGenres = getTopSignalLabels(currentProfile.genreWeights, currentProfile.genreCounts, 2);
  const topGenre = topGenres[0] || currentProfile.topGenre || "discos bem avaliados";
  const topDecade = currentProfile.topDecade && currentProfile.topDecade !== "Não informado" ? currentProfile.topDecade : "";
  const decadeLabel = topDecade ? `anos ${topDecade.replace("s", "")}` : "";
  const styleStrengths = getDiagnosisStyleStrengths(currentProfile, topGenre);
  const textureStrength = getDiagnosisTextureStrength(currentProfile, albums);
  const strengths = uniqueList([
    [topGenre, decadeLabel].filter(Boolean).join(" "),
    ...styleStrengths,
    textureStrength,
    ...getDiagnosisArtistStrengths(currentProfile)
  ]).slice(0, 5);
  const gaps = getDiagnosisGaps(currentProfile).slice(0, 5);
  const nextDirections = getDiagnosisNextDirections(currentProfile, gaps).slice(0, 5);
  const anchorText = formatDiagnosisAnchorText(currentProfile.anchorAlbums || []);
  const summary = anchorText
    ? `As notas mais altas e os discos âncora indicam preferência por ${anchorText}, com sinais recorrentes de ${strengths.slice(0, 3).join(", ")}.`
    : `A coleção aponta para ${strengths.slice(0, 3).join(", ")}, com espaço para abrir novas rotas sem perder coerência.`;
  const headlineParts = [topGenre, decadeLabel].filter(Boolean).join(" dos ");
  const headlineTexture = textureStrength ? ` e ${textureStrength.toLowerCase()}` : "";

  return {
    headline: `Sua estante puxa para ${headlineParts || topGenre}${headlineTexture}.`,
    summary,
    strengths,
    gaps,
    nextDirections,
    curatorNote: buildDiagnosisCuratorNote(topGenre, strengths, gaps, nextDirections)
  };
}

function getDiagnosisStyleStrengths(profile, topGenre) {
  return (profile.topStyles || [])
    .map((style) => style.label)
    .filter((label) => normalizeSignalTerm(label) !== normalizeSignalTerm(topGenre))
    .filter((label) => !["album", "lp"].includes(normalizeSignalTerm(label)))
    .slice(0, 3);
}

function getDiagnosisTextureStrength(profile, albums) {
  const terms = new Set(
    [
      ...Object.keys(profile.weightedTags || {}),
      ...Object.keys(profile.styleWeights || {}),
      ...albums.flatMap((album) => [
        album.comment,
        album.style,
        ...(album.tags || []),
        ...(album.styles || []),
        ...(album.moods || []),
        ...(album.scenes || [])
      ])
    ].map(normalizeSignalTerm)
  );

  if (terms.has("conceitual")) return "discos conceituais";
  if (terms.has("producao") || terms.has("organico") || terms.has("groove")) return "produção orgânica";
  if (terms.has("sample")) return "textura de sample";
  if (terms.has("noturno")) return "escuta noturna";
  if (terms.has("introspectivo")) return "escuta introspectiva";
  return "";
}

function getDiagnosisArtistStrengths(profile) {
  return (profile.recurringArtists || [])
    .slice(0, 1)
    .map((artist) => `sequência de ${artist.artist}`);
}

function getDiagnosisGaps(profile) {
  return uniqueList([
    profile.gapGenre,
    ...(profile.gaps?.adjacent || []),
    ...(profile.gaps?.obvious || []),
    ...(profile.gaps?.exploratory || [])
  ]).filter(Boolean);
}

function getDiagnosisNextDirections(profile, gaps = []) {
  const topGenre = normalizeSignalTerm(profile.topGenre);
  const topStyles = new Set((profile.topStyles || []).map((style) => normalizeSignalTerm(style.label)));
  const directions = [];

  if (topGenre === "hip hop" || topGenre === "rap") directions.push("Jazz Rap", "Neo Soul", "Soul 70s");
  if (topGenre === "mpb") directions.push("Tropicalismo", "Clube da Esquina", "Soul brasileiro");
  if (topGenre === "rock") directions.push("Pós-punk", "Art Rock", "Psicodelia");
  if (topGenre === "jazz") directions.push("Jazz-funk", "Fusion", "Soul jazz");
  if (topGenre === "eletronica") directions.push("Trip-hop", "Ambient", "Downtempo");
  if (topStyles.has("alternative hip hop")) directions.push("Neo Soul", "R&B alternativo");
  if (topStyles.has("jazz rap")) directions.push("Hard bop", "Jazz-funk");

  gaps.forEach((gap) => {
    const normalizedGap = normalizeSignalTerm(gap);
    if (normalizedGap === "jazz") directions.push("Jazz Rap", "Hard bop");
    if (normalizedGap === "soul") directions.push("Soul 70s", "Neo Soul");
    if (normalizedGap === "mpb") directions.push("Tropicalismo", "MPB 70s");
    if (normalizedGap === "eletronica") directions.push("Trip-hop", "Downtempo");
    if (normalizedGap === "tropicalia") directions.push("Tropicalismo");
    if (normalizedGap === "soul brasileiro") directions.push("Tim Maia", "funk brasileiro");
  });

  return uniqueList(directions);
}

function formatDiagnosisAnchorText(anchorAlbums = []) {
  const anchors = anchorAlbums.slice(0, 2).map((album) => album.title).filter(Boolean);
  if (!anchors.length) return "";
  if (anchors.length === 1) return anchors[0];
  return `${anchors[0]} e ${anchors[1]}`;
}

function buildDiagnosisCuratorNote(topGenre, strengths, gaps, nextDirections) {
  const directionText = nextDirections.slice(0, 3).join(", ");
  const gapText = gaps.slice(0, 2).join(" e ");
  if (directionText && gapText) {
    return `O próximo salto natural é buscar ${directionText}, cobrindo ${gapText} sem abandonar o eixo de ${topGenre}.`;
  }
  if (directionText) {
    return `O próximo salto natural é seguir por ${directionText}, usando ${strengths[0] || topGenre} como ponto de partida.`;
  }
  return "O radar fica mais preciso quando você adiciona tags, comentários e escutas aos discos que já estão na estante.";
}

// Compatibilidade social: compara estantes por sinais musicais, não por amizade genérica.
function buildSocialTasteProfile(collection = [], wishlist = []) {
  const albums = (collection || []).map(normalizeAlbum).filter((album) => album.title && album.artist);
  const wishlistAlbums = (wishlist || []).map(normalizeAlbum).filter((album) => album.title && album.artist);
  const tasteProfile = buildTasteProfile(albums);
  const topGenres = buildSocialSignalEntries(tasteProfile.genreWeights, tasteProfile.genreCounts, 6);
  const topStyles = buildSocialSignalEntries(tasteProfile.styleWeights, {}, 10);
  const topArtists = buildSocialSignalEntries(tasteProfile.artistWeights, tasteProfile.artistCounts, 8, normalizeArtistForIdentity);
  const topDecades = buildSocialSignalEntries(tasteProfile.decadeWeights, tasteProfile.decadeCounts, 6);
  const lovedAlbums = albums
    .filter((album) => Number(album.rating || 0) >= 4.5)
    .toSorted((a, b) => Number(b.rating || 0) - Number(a.rating || 0) || a.title.localeCompare(b.title, "pt-BR"))
    .slice(0, 12)
    .map(socialAlbumReference);
  const wishlistSignals = buildSocialWishlistSignals(wishlistAlbums);
  const commentSignals = buildCommentSignalEntries(albums);
  const signalSet = buildSocialSignalSet({
    albums,
    topGenres,
    topStyles,
    topArtists,
    topDecades,
    wishlistSignals,
    commentSignals
  });

  return {
    topGenres,
    topStyles,
    topArtists,
    topDecades,
    anchorAlbums: (tasteProfile.anchorAlbums || []).map(socialAlbumReference),
    lovedAlbums,
    wishlistSignals,
    gaps: tasteProfile.gaps || { obvious: [], adjacent: [], exploratory: [] },
    profileSummary: tasteProfile.profileSummary || "",
    albums,
    wishlistAlbums,
    averageRating: tasteProfile.averageRating || 0,
    albumKeys: new Set(albums.map((album) => album.identityKey)),
    wishlistKeys: new Set(wishlistAlbums.map((album) => album.identityKey)),
    artistSet: new Set(albums.map((album) => album.normalizedArtist).filter(Boolean)),
    genreSet: new Set(topGenres.map((item) => normalizeSignalTerm(item.label))),
    styleSet: new Set(topStyles.map((item) => normalizeSignalTerm(item.label))),
    decadeSet: new Set(topDecades.map((item) => normalizeSignalTerm(item.label))),
    tagSet: new Set(albums.flatMap((album) => album.normalizedTags || [])),
    signalSet,
    commentSignals
  };
}

function compareCollections(myCollection = [], otherCollection = [], myWishlist = [], otherWishlist = []) {
  const myProfile = buildSocialTasteProfile(myCollection, myWishlist);
  const otherProfile = buildSocialTasteProfile(otherCollection, otherWishlist);
  const parts = buildSocialComparisonParts(myProfile, otherProfile);
  const affinity = calculateCollectorAffinity(myProfile, otherProfile);
  const dataConfidence = getCollectorAffinityConfidence(myProfile, otherProfile, affinity.score, parts);
  const compatibilityPercent = calibrateCollectorCompatibilityScore(affinity.score, myProfile, otherProfile, parts);
  const result = {
    compatibilityPercent,
    confidence: dataConfidence,
    commonAlbums: parts.commonAlbums,
    commonArtists: parts.commonArtists,
    commonGenres: parts.commonGenres,
    commonStyles: parts.commonStyles,
    commonDecades: parts.commonDecades,
    sharedLovedAlbums: parts.sharedLovedAlbums,
    complementaryAlbums: parts.complementaryAlbums,
    albumsTheyHaveThatIFit: parts.albumsTheyHaveThatIFit,
    albumsIHaveThatTheyFit: parts.albumsIHaveThatTheyFit,
    matchingSignals: parts.matchingSignals,
    complementarySignals: parts.complementarySignals,
    wishlistMatches: parts.wishlistMatches,
    scoreBreakdown: affinity.scoreBreakdown,
    explanation: "",
    matchType: ""
  };
  result.matchType = classifyMatchType(result);
  result.explanation = buildMatchExplanation(result);
  return result;
}

function calculateCollectorAffinity(myProfile, otherProfile) {
  const parts = buildSocialComparisonParts(myProfile, otherProfile);
  const albumsArtists = Math.min(
    25,
    parts.commonAlbums.length * 8 + parts.commonArtists.length * 4 + Math.min(5, parts.neighborAlbumSignals.length * 2)
  );
  const genresStyles = Math.min(20, parts.commonGenres.length * 6 + parts.commonStyles.length * 4 + parts.commentSignalMatches.length * 2);
  const notesFavorites = Math.min(
    15,
    parts.sharedLovedAlbums.length * 7 + getAverageRatingSimilarity(myProfile, otherProfile) + parts.sharedLovedGenreSignals.length * 2
  );
  const wishlistRadar = Math.min(
    15,
    parts.wishlistMatches.commonWishlist.length * 6 +
      parts.wishlistMatches.myWishlistInOtherCollection.length * 7 +
      parts.wishlistMatches.otherWishlistInMyCollection.length * 4 +
      parts.wishlistMatches.signalOverlap.length * 2
  );
  const complementaryGaps = Math.min(15, parts.gapsTheyCoverForMe.length * 6 + parts.gapsICoverForThem.length * 3);
  const diversityNovelty = Math.min(10, parts.diversitySignals.length * 2 + parts.albumsTheyHaveThatIFit.length * 1.5);
  const signalFloor = getCollectorAffinitySignalFloor(parts);
  const rawScore = Math.max(albumsArtists + genresStyles + notesFavorites + wishlistRadar + complementaryGaps + diversityNovelty, signalFloor);

  return {
    score: clampScore(rawScore),
    scoreBreakdown: {
      albumsArtists: Math.round(albumsArtists),
      genresStyles: Math.round(genresStyles),
      notesFavorites: Math.round(notesFavorites),
      wishlistRadar: Math.round(wishlistRadar),
      complementaryGaps: Math.round(complementaryGaps),
      diversityNovelty: Math.round(diversityNovelty),
      signalFloor: Math.round(signalFloor),
      finalScore: clampScore(rawScore)
    },
    matchingSignals: parts.matchingSignals,
    complementarySignals: parts.complementarySignals
  };
}

function classifyMatchType(result) {
  if (result.commonAlbums.length >= 2 || (result.commonArtists.length >= 2 && result.commonGenres.length && result.compatibilityPercent >= 70)) {
    return "Gêmeo de estante";
  }
  if (result.complementarySignals.length >= 2 && result.commonAlbums.length <= 1) {
    return "Complemento de estante";
  }
  if (result.commonGenres.length && result.albumsTheyHaveThatIFit.length >= 2) {
    return "Guia de gênero";
  }
  if (result.commonAlbums.length || result.commonArtists.length) {
    return "Vizinho de disco";
  }
  return "Garimpeiro exploratório";
}

function buildMatchExplanation(result) {
  if (result.confidence === "baixa" && result.compatibilityPercent < 45) {
    return "Ainda há poucos sinais musicais em comum. Cadastre mais discos, notas e itens no radar para o Groova comparar estantes com mais precisão.";
  }

  const sentences = [];
  const genreText = formatHumanList(result.commonGenres.slice(0, 3));
  const styleText = formatHumanList(result.commonStyles.slice(0, 3));
  const artistText = formatHumanList(result.commonArtists.slice(0, 3));
  const sharedAlbumText = formatHumanList(result.commonAlbums.map((album) => album.title).slice(0, 3));
  const lovedText = formatHumanList(result.sharedLovedAlbums.map((album) => album.title).slice(0, 2));
  const theyFitText = formatHumanList(result.albumsTheyHaveThatIFit.map((album) => album.title).slice(0, 3));
  const gapText = formatHumanList(result.complementarySignals.slice(0, 2));

  if (genreText || styleText) {
    sentences.push(
      `Vocês se encontram em ${[genreText, styleText].filter(Boolean).join(" com sinais de ")}.`
    );
  } else if (artistText) {
    sentences.push(`O primeiro ponto de contato está nos artistas em comum: ${artistText}.`);
  }

  if (sharedAlbumText) {
    sentences.push(`A ponte mais concreta é ${sharedAlbumText}${lovedText ? `, com nota alta para ${lovedText}` : ""}.`);
  } else if (artistText && !sentences.length) {
    sentences.push(`A afinidade começa por ${artistText}, mesmo sem muitos discos iguais cadastrados.`);
  }

  if (theyFitText) {
    sentences.push(`A estante dessa pessoa pode te puxar para ${theyFitText}.`);
  } else if (gapText) {
    sentences.push(`O valor do match está nas lacunas complementares: ${gapText}.`);
  }

  if (result.wishlistMatches?.myWishlistInOtherCollection?.length) {
    const radarText = formatHumanList(result.wishlistMatches.myWishlistInOtherCollection.map((album) => album.title).slice(0, 2));
    sentences.push(`${radarText} já aparece na outra estante e conversa diretamente com seu radar.`);
  }

  if (result.confidence === "baixa") {
    const confidenceNote = "A afinidade musical já aparece, mas a confiança ainda é inicial porque há poucos discos cadastrados.";
    return [...sentences.slice(0, 2), confidenceNote].join(" ");
  }

  return sentences.slice(0, 3).join(" ") || "A compatibilidade existe mais pela soma de sinais discretos do que por um único disco em comum.";
}

function buildSocialComparisonParts(myProfile, otherProfile) {
  const commonAlbums = getCommonAlbumReferences(myProfile.albums, otherProfile.albums);
  const commonArtists = intersectSocialLabels(
    myProfile.albums.map((album) => album.artist),
    otherProfile.albums.map((album) => album.artist),
    normalizeArtistForIdentity
  );
  const commonGenres = intersectSocialLabels(
    myProfile.topGenres.map((item) => item.label),
    otherProfile.topGenres.map((item) => item.label)
  );
  const commonStyles = intersectSocialLabels(
    myProfile.topStyles.map((item) => item.label),
    otherProfile.topStyles.map((item) => item.label)
  );
  const commonDecades = intersectSocialLabels(
    myProfile.topDecades.map((item) => item.label),
    otherProfile.topDecades.map((item) => item.label)
  );
  const commentSignalMatches = intersectSocialLabels(
    myProfile.commentSignals.map((item) => item.label),
    otherProfile.commentSignals.map((item) => item.label)
  );
  const sharedLovedAlbums = commonAlbums.filter((album) => Number(album.myRating || 0) >= 4.5 && Number(album.otherRating || 0) >= 4.5);
  const sharedLovedGenreSignals = intersectSocialLabels(
    myProfile.lovedAlbums.map((album) => album.genre),
    otherProfile.lovedAlbums.map((album) => album.genre)
  );
  const wishlistMatches = getWishlistMatchParts(myProfile, otherProfile);
  const gapsTheyCoverForMe = getComplementaryGapSignals(myProfile, otherProfile, "they-cover-mine");
  const gapsICoverForThem = getComplementaryGapSignals(otherProfile, myProfile, "i-cover-theirs");
  const albumsTheyHaveThatIFit = findAlbumsThatFitSocialProfile(otherProfile.albums, myProfile, myProfile.albumKeys);
  const albumsIHaveThatTheyFit = findAlbumsThatFitSocialProfile(myProfile.albums, otherProfile, otherProfile.albumKeys);
  const complementaryAlbums = uniqueSocialAlbumReferences([
    ...albumsTheyHaveThatIFit.filter((album) => album.fitSignals.some((signal) => normalizeSignalTerm(signal).includes("lacuna") || normalizeSignalTerm(signal).includes("radar"))),
    ...albumsIHaveThatTheyFit.filter((album) => album.fitSignals.some((signal) => normalizeSignalTerm(signal).includes("lacuna") || normalizeSignalTerm(signal).includes("radar")))
  ]).slice(0, 6);
  const neighborAlbumSignals = uniqueList([
    ...commonAlbums.map((album) => `disco em comum: ${album.title}`),
    ...commonArtists.map((artist) => `artista em comum: ${artist}`)
  ]);
  const diversitySignals = getDiversitySignals(myProfile, otherProfile);
  const matchingSignals = uniqueList([
    ...neighborAlbumSignals,
    ...commonGenres.map((genre) => `gênero em comum: ${genre}`),
    ...commonStyles.map((style) => `estilo em comum: ${style}`),
    ...commonDecades.map((decade) => `década em comum: ${decade}`),
    ...commentSignalMatches.map((signal) => `comentários parecidos: ${signal}`),
    ...sharedLovedAlbums.map((album) => `favorito compartilhado: ${album.title}`)
  ]);
  const complementarySignals = uniqueList([
    ...gapsTheyCoverForMe.map((gap) => `eles cobrem sua lacuna em ${gap.label}`),
    ...gapsICoverForThem.map((gap) => `você cobre a lacuna deles em ${gap.label}`),
    ...wishlistMatches.myWishlistInOtherCollection.map((album) => `${album.title} já está na estante deles`),
    ...diversitySignals
  ]);

  return {
    commonAlbums,
    commonArtists,
    commonGenres,
    commonStyles,
    commonDecades,
    sharedLovedAlbums,
    sharedLovedGenreSignals,
    commentSignalMatches,
    wishlistMatches,
    gapsTheyCoverForMe,
    gapsICoverForThem,
    albumsTheyHaveThatIFit,
    albumsIHaveThatTheyFit,
    complementaryAlbums,
    neighborAlbumSignals,
    diversitySignals,
    matchingSignals,
    complementarySignals
  };
}

function buildSocialSignalEntries(weights = {}, counts = {}, limit = 6, normalizer = normalizeSignalTerm) {
  const source = Object.keys(weights || {}).length ? weights : counts || {};
  const seen = new Set();
  return weightedEntries(source)
    .map(([label, weight]) => ({
      label,
      normalized: normalizer(label),
      weight: roundSignal(weight),
      count: Number(counts?.[label] || 0)
    }))
    .filter((entry) => {
      if (!entry.label || !entry.normalized || seen.has(entry.normalized)) return false;
      seen.add(entry.normalized);
      return true;
    })
    .slice(0, limit);
}

function buildSocialWishlistSignals(wishlistAlbums = []) {
  const genreWeights = {};
  const styleWeights = {};
  const artistWeights = {};
  const tagWeights = {};
  wishlistAlbums.forEach((album) => {
    addWeightedSignal(genreWeights, album.genre, 1);
    addWeightedSignal(artistWeights, album.artist, 1);
    getAlbumStyleTerms(album).forEach((term) => addWeightedSignal(styleWeights, term.label, 1));
    album.tags.forEach((tag) => addWeightedSignal(tagWeights, tag, 1));
  });
  const genres = buildSocialSignalEntries(genreWeights, {}, 6);
  const styles = buildSocialSignalEntries(styleWeights, {}, 8);
  const artists = buildSocialSignalEntries(artistWeights, {}, 8, normalizeArtistForIdentity);
  const tags = buildSocialSignalEntries(tagWeights, {}, 8);
  const signalSet = new Set(
    [...genres, ...styles, ...artists, ...tags].map((item) => item.normalized).filter(Boolean)
  );
  return {
    albums: wishlistAlbums.slice(0, 12).map(socialAlbumReference),
    albumKeys: new Set(wishlistAlbums.map((album) => album.identityKey)),
    genres,
    styles,
    artists,
    tags,
    signalSet
  };
}

function buildCommentSignalEntries(albums = []) {
  const weights = {};
  albums.forEach((album) => {
    extractCommentSignals(album.comment).forEach((signal) => {
      addWeightedSignal(weights, signal, getAlbumPreferenceWeight(album));
    });
  });
  return buildSocialSignalEntries(weights, {}, 8);
}

function extractCommentSignals(comment = "") {
  const text = normalize(comment);
  const signals = [];
  const rules = [
    ["conceit", "discos conceituais"],
    ["organ", "produção orgânica"],
    ["groove", "groove"],
    ["grave", "grave presente"],
    ["baixo", "baixo presente"],
    ["sample", "textura de sample"],
    ["noturn", "escuta noturna"],
    ["introspect", "escuta introspectiva"],
    ["danc", "dançante"],
    ["politic", "discurso político"],
    ["orquestr", "arranjo orquestral"],
    ["jazz", "jazz"],
    ["soul", "soul"],
    ["funk", "funk"],
    ["mpb", "MPB"],
    ["rap", "rap"]
  ];
  rules.forEach(([needle, label]) => {
    if (text.includes(needle)) signals.push(label);
  });
  return uniqueList(signals);
}

function buildSocialSignalSet({ albums = [], topGenres = [], topStyles = [], topArtists = [], topDecades = [], wishlistSignals = {}, commentSignals = [] }) {
  return new Set(
    [
      ...albums.flatMap((album) => [...getSocialAlbumSignalTerms(album)]),
      ...topGenres.map((item) => item.normalized),
      ...topStyles.map((item) => item.normalized),
      ...topArtists.map((item) => item.normalized),
      ...topDecades.map((item) => item.normalized),
      ...commentSignals.map((item) => item.normalized),
      ...[...(wishlistSignals.signalSet || [])]
    ].filter(Boolean)
  );
}

function getSocialAlbumSignalTerms(album = {}) {
  const normalized = normalizeAlbum(album);
  return new Set(
    [
      normalized.genre,
      normalized.decade,
      normalized.style,
      ...(normalized.styles || []),
      ...(normalized.tags || []),
      ...(normalized.moods || []),
      ...(normalized.scenes || []),
      ...getAlbumStyleTerms(normalized).map((term) => term.label),
      ...extractCommentSignals(normalized.comment)
    ].map(normalizeSignalTerm).filter(Boolean)
  );
}

function socialAlbumReference(album = {}) {
  const normalized = normalizeAlbum(album);
  return {
    id: normalized.id || normalized.identityKey,
    identityKey: normalized.identityKey,
    title: normalized.title,
    artist: normalized.artist,
    year: normalized.year || "",
    genre: normalized.genre || "",
    style: normalized.style || "",
    rating: Number(normalized.rating || 0),
    tags: normalized.tags || []
  };
}

function getCommonAlbumReferences(myAlbums = [], otherAlbums = []) {
  const otherByKey = new Map(otherAlbums.map((album) => [album.identityKey, album]));
  return myAlbums
    .filter((album) => otherByKey.has(album.identityKey))
    .map((album) => {
      const other = otherByKey.get(album.identityKey);
      return {
        ...socialAlbumReference(album),
        myRating: Number(album.rating || 0),
        otherRating: Number(other.rating || 0)
      };
    });
}

function intersectSocialLabels(left = [], right = [], normalizer = normalizeSignalTerm) {
  const leftMap = new Map();
  left.forEach((label) => {
    const key = normalizer(label);
    if (key && !leftMap.has(key)) leftMap.set(key, label);
  });
  return uniqueList(
    right
      .map((label) => {
        const key = normalizer(label);
        return leftMap.has(key) ? leftMap.get(key) : "";
      })
      .filter(Boolean)
  );
}

function getWishlistMatchParts(myProfile, otherProfile) {
  const commonWishlist = getCommonAlbumReferences(myProfile.wishlistAlbums, otherProfile.wishlistAlbums);
  const myWishlistInOtherCollection = myProfile.wishlistAlbums
    .filter((album) => otherProfile.albumKeys.has(album.identityKey))
    .map(socialAlbumReference);
  const otherWishlistInMyCollection = otherProfile.wishlistAlbums
    .filter((album) => myProfile.albumKeys.has(album.identityKey))
    .map(socialAlbumReference);
  const signalOverlap = intersectSocialLabels(
    [...(myProfile.wishlistSignals.signalSet || [])],
    [...(otherProfile.wishlistSignals.signalSet || [])]
  );
  return {
    commonWishlist,
    myWishlistInOtherCollection,
    otherWishlistInMyCollection,
    signalOverlap
  };
}

function getComplementaryGapSignals(profileWithGaps, profileThatMayCover, direction) {
  return getFlattenedSocialGaps(profileWithGaps)
    .filter((gap) => coversSocialGap(gap.label, profileThatMayCover))
    .map((gap) => ({ ...gap, direction }));
}

function getFlattenedSocialGaps(profile = {}) {
  return [
    ...(profile.gaps?.adjacent || []).map((label) => ({ label, type: "adjacent" })),
    ...(profile.gaps?.obvious || []).map((label) => ({ label, type: "obvious" })),
    ...(profile.gaps?.exploratory || []).map((label) => ({ label, type: "exploratory" }))
  ].filter((gap, index, list) => list.findIndex((item) => normalizeSignalTerm(item.label) === normalizeSignalTerm(gap.label)) === index);
}

function coversSocialGap(gap, profile = {}) {
  const gapKey = normalizeSignalTerm(gap);
  if (!gapKey) return false;
  if (profile.signalSet?.has(gapKey)) return true;
  return [...(profile.signalSet || [])].some((signal) => {
    if (signal.includes(gapKey) || gapKey.includes(signal)) return true;
    return getAdjacentTerms(signal).some((term) => normalizeSignalTerm(term) === gapKey);
  });
}

function findAlbumsThatFitSocialProfile(albums = [], targetProfile = {}, excludeKeys = new Set()) {
  return albums
    .filter((album) => !excludeKeys.has(album.identityKey))
    .map((album) => scoreSocialAlbumFit(album, targetProfile))
    .filter((album) => album.fitScore >= 12)
    .toSorted((a, b) => b.fitScore - a.fitScore || a.title.localeCompare(b.title, "pt-BR"))
    .slice(0, 6);
}

function scoreSocialAlbumFit(album = {}, targetProfile = {}) {
  const normalized = normalizeAlbum(album);
  const terms = getSocialAlbumSignalTerms(normalized);
  const fitSignals = [];
  let fitScore = 0;

  if (targetProfile.genreSet?.has(normalizeSignalTerm(normalized.genre))) {
    fitScore += 10;
    fitSignals.push(`gênero forte: ${normalized.genre}`);
  }

  const styleHits = [...terms].filter((term) => targetProfile.styleSet?.has(term));
  if (styleHits.length) {
    fitScore += Math.min(12, styleHits.length * 4);
    fitSignals.push(`estilo próximo: ${formatStyleLabel(styleHits[0])}`);
  }

  const tagHits = [...terms].filter((term) => targetProfile.tagSet?.has(term));
  if (tagHits.length) {
    fitScore += Math.min(8, tagHits.length * 2);
    fitSignals.push(`tags em comum: ${formatStyleLabel(tagHits[0])}`);
  }

  if (targetProfile.wishlistKeys?.has(normalized.identityKey)) {
    fitScore += 16;
    fitSignals.push("já está no seu radar");
  } else {
    const wishlistSignalHits = [...terms].filter((term) => targetProfile.wishlistSignals?.signalSet?.has(term));
    if (wishlistSignalHits.length) {
      fitScore += Math.min(10, wishlistSignalHits.length * 3);
      fitSignals.push(`radar parecido: ${formatStyleLabel(wishlistSignalHits[0])}`);
    }
  }

  const coveredGap = getFlattenedSocialGaps(targetProfile).find((gap) => terms.has(normalizeSignalTerm(gap.label)) || coversSocialGap(gap.label, { signalSet: terms }));
  if (coveredGap) {
    fitScore += coveredGap.type === "adjacent" ? 12 : 8;
    fitSignals.push(`lacuna: ${coveredGap.label}`);
  }

  return {
    ...socialAlbumReference(normalized),
    fitScore: Math.round(fitScore),
    fitSignals: uniqueList(fitSignals).slice(0, 4)
  };
}

function uniqueSocialAlbumReferences(albums = []) {
  const seen = new Set();
  return albums.filter((album) => {
    const key = album.identityKey || albumIdentityKey(album);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getAverageRatingSimilarity(myProfile, otherProfile) {
  const myAverage = Number(myProfile.averageRating || 0);
  const otherAverage = Number(otherProfile.averageRating || 0);
  if (!myAverage || !otherAverage) return 0;
  const difference = Math.abs(myAverage - otherAverage);
  if (difference <= 0.25) return 5;
  if (difference <= 0.75) return 3;
  if (difference <= 1.25) return 1;
  return 0;
}

function getDiversitySignals(myProfile, otherProfile) {
  const myGenres = new Set(myProfile.topGenres.map((item) => item.normalized));
  const otherGenres = otherProfile.topGenres.map((item) => item.normalized).filter(Boolean);
  return otherGenres
    .filter((genre) => !myGenres.has(genre))
    .filter((genre) => [...myGenres].some((myGenre) => getAdjacentTerms(myGenre).some((term) => normalizeSignalTerm(term) === genre)))
    .map((genre) => `abre caminho para ${formatStyleLabel(genre)}`)
    .slice(0, 4);
}

function getCollectorAffinitySignalFloor(parts = {}) {
  let floor = 0;
  if (parts.commonAlbums?.length) floor = Math.max(floor, 72 + Math.min(12, (parts.commonAlbums.length - 1) * 6));
  if (parts.commonArtists?.length) floor = Math.max(floor, 64 + Math.min(12, (parts.commonArtists.length - 1) * 4));
  if (parts.commonGenres?.length && parts.commonStyles?.length) floor = Math.max(floor, 58 + Math.min(14, parts.commonStyles.length * 5));
  if (parts.commonGenres?.length && parts.commentSignalMatches?.length) floor = Math.max(floor, 60 + Math.min(10, parts.commentSignalMatches.length * 4));
  if (parts.sharedLovedAlbums?.length) floor = Math.max(floor, 76 + Math.min(10, (parts.sharedLovedAlbums.length - 1) * 5));
  if (parts.wishlistMatches?.myWishlistInOtherCollection?.length) floor = Math.max(floor, 66);
  if (parts.albumsTheyHaveThatIFit?.length >= 2 && parts.commonGenres?.length) floor = Math.max(floor, 62);
  if (parts.gapsTheyCoverForMe?.length && (parts.commonGenres?.length || parts.commonStyles?.length || parts.albumsTheyHaveThatIFit?.length)) {
    floor = Math.max(floor, 58 + Math.min(10, parts.gapsTheyCoverForMe.length * 4));
  }
  if (parts.commonGenres?.length) floor = Math.max(floor, 48 + Math.min(8, (parts.commonGenres.length - 1) * 3));
  return floor;
}

function calibrateCollectorCompatibilityScore(score, myProfile, otherProfile, parts = {}) {
  const minAlbums = Math.min(myProfile.albums.length, otherProfile.albums.length);
  if (!myProfile.albums.length || !otherProfile.albums.length) return 0;
  const signalFloor = getCollectorAffinitySignalFloor(parts);
  const calibrated = Math.max(score, signalFloor);
  if (minAlbums === 1) return Math.min(80, calibrated);
  if (minAlbums === 2) return Math.min(86, calibrated);
  return Math.min(96, score);
}

function getCollectorAffinityConfidence(myProfile, otherProfile, score, parts) {
  const minAlbums = Math.min(myProfile.albums.length, otherProfile.albums.length);
  const signalCount = parts.matchingSignals.length + parts.complementarySignals.length;
  if (minAlbums < 3) return "baixa";
  if (signalCount < 2 || score < 45) return "baixa";
  if (minAlbums >= 5 && score >= 72 && signalCount >= 4) return "alta";
  return "média";
}

function getCollectorConfidenceLabel(confidence = "baixa") {
  if (confidence === "alta") return "confiança alta";
  if (confidence === "média") return "confiança média";
  return "confiança inicial";
}

function formatHumanList(items = []) {
  const cleanItems = items.filter(Boolean).slice(0, 4);
  if (!cleanItems.length) return "";
  if (cleanItems.length === 1) return cleanItems[0];
  if (cleanItems.length === 2) return `${cleanItems[0]} e ${cleanItems[1]}`;
  return `${cleanItems.slice(0, -1).join(", ")} e ${cleanItems.at(-1)}`;
}

function buildRecommendationContextForAI(collection = [], profile = null, candidates = recommendationPool, feedback = {}) {
  const normalizedCollection = (collection || []).map(normalizeAlbum).filter((album) => album.title && album.artist);
  const currentProfile = profile?.albums ? profile : buildTasteProfile(normalizedCollection);
  const wishlist = extractAIContextWishlist(feedback);
  const rankedCandidates = scoreRecommendations(normalizedCollection, candidates || recommendationPool, wishlist, feedback || {});
  const diagnosis = getCollectionDiagnosis(currentProfile, normalizedCollection);
  const knownCollectionAlbums = normalizedCollection.map(serializeCollectionAlbumForAI);
  const knownCollectionAlbumKeys = knownCollectionAlbums.map((album) => album.albumKey);

  return {
    schemaVersion: "groova.aiRecommendationContext.v1",
    purpose: "Preparar recomendações assistidas por IA sem chamar API externa.",
    generatedAt: new Date().toISOString(),
    collectionSummary: {
      totalAlbums: normalizedCollection.length,
      averageRating: roundSignal(currentProfile.averageRating || 0),
      topGenre: currentProfile.topGenre || "",
      topDecade: currentProfile.topDecade || "",
      profileSummary: currentProfile.profileSummary || "",
      diagnosis
    },
    knownCollectionAlbumKeys,
    knownCollectionAlbums,
    topAnchorAlbums: (currentProfile.anchorAlbums || []).slice(0, 8).map(serializeAnchorAlbumForAI),
    strongSignals: {
      genres: serializeWeightedSignals(currentProfile.genreWeights, 6),
      styles: serializeWeightedSignals(currentProfile.styleWeights, 8),
      decades: serializeWeightedSignals(currentProfile.decadeWeights, 5),
      recurringArtists: (currentProfile.recurringArtists || []).slice(0, 5).map((artist) => ({
        artist: artist.artist,
        count: artist.count,
        averageRating: roundSignal(artist.averageRating)
      })),
      highRatedArtists: (currentProfile.highRatedArtists || []).slice(0, 5).map((artist) => ({
        artist: artist.artist,
        count: artist.count,
        averageRating: roundSignal(artist.averageRating)
      }))
    },
    gaps: {
      primary: currentProfile.gapGenre || "",
      obvious: currentProfile.gaps?.obvious || [],
      adjacent: currentProfile.gaps?.adjacent || [],
      exploratory: currentProfile.gaps?.exploratory || []
    },
    rankedCandidates: rankedCandidates.slice(0, 12).map(serializeRankedCandidateForAI),
    recentFeedback: extractAIContextFeedbackEvents(feedback).slice(0, 12).map(serializeFeedbackForAI),
    safetyInstructions: [
      "Nao invente discos da colecao. Cite como influencia apenas itens presentes em knownCollectionAlbums ou topAnchorAlbums.",
      "Nao afirme que um candidato ja esta na colecao se o albumKey nao estiver em knownCollectionAlbumKeys.",
      "Use rankedCandidates como fonte principal de recomendacoes nesta etapa.",
      "Se uma informacao nao estiver no contexto, trate como desconhecida em vez de completar por suposicao.",
      "Nao use nem solicite preco, local de compra, dados pessoais ou outros campos fora deste payload.",
      "Preserve feedback negativo: itens marcados como 'not-for-me' ou 'owned' nao devem voltar como sugestao."
    ]
  };
}

function serializeCollectionAlbumForAI(album) {
  return {
    albumKey: album.identityKey,
    title: album.title,
    artist: album.artist,
    year: album.year || "",
    genre: album.genre || "",
    style: album.style || "",
    tags: (album.tags || []).slice(0, 8),
    rating: Number(album.rating || 0),
    decade: album.decade || "",
    hasListeningNote: Boolean(album.comment)
  };
}

function serializeAnchorAlbumForAI(album) {
  return {
    albumKey: album.identityKey || albumIdentityKey(album),
    title: album.title,
    artist: album.artist,
    year: album.year || "",
    genre: album.genre || "",
    style: album.style || "",
    rating: Number(album.rating || 0),
    anchorScore: roundSignal(album.anchorScore || 0)
  };
}

function serializeRankedCandidateForAI(album) {
  return {
    albumKey: album.identityKey || albumIdentityKey(album),
    title: album.title,
    artist: album.artist,
    year: album.year || "",
    country: album.country || "",
    genre: album.genre || "",
    styles: album.styles || (album.style ? [album.style] : []),
    tags: album.tags || [],
    moods: album.moods || [],
    scenes: album.scenes || [],
    recommendationLabel: album.recommendationLabel || "",
    scorePercent: album.scorePercent || 0,
    confidence: album.confidence || "baixa",
    gapFilled: album.gapFilled || "",
    reasons: album.reasons || [],
    reasonChips: album.reasonChips || [],
    influencedBy: (album.influencedBy || []).map((item) => ({
      albumKey: albumIdentityKey(item),
      title: item.title,
      artist: item.artist
    })),
    matchedSignals: album.matchedSignals || [],
    dynamicReason: album.dynamicReason || album.reason || ""
  };
}

function serializeWeightedSignals(signals = {}, limit = 6) {
  return weightedEntries(signals)
    .slice(0, limit)
    .map(([label, weight]) => ({
      label,
      weight: roundSignal(weight)
    }));
}

function extractAIContextWishlist(feedback = {}) {
  if (Array.isArray(feedback)) return [];
  if (Array.isArray(feedback.wishlist)) return feedback.wishlist;
  if (Array.isArray(feedback.savedAlbums)) return feedback.savedAlbums;
  return [];
}

function extractAIContextFeedbackEvents(feedback = {}) {
  const events = Array.isArray(feedback) ? feedback : feedback.events || feedback.recent || [];
  return [...events].toSorted((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
}

function serializeFeedbackForAI(item) {
  const normalized = normalizeAlbum(item);
  return {
    albumKey: item.albumKey || normalized.identityKey,
    action: item.action || "",
    title: normalized.title,
    artist: normalized.artist,
    genre: normalized.genre,
    style: normalized.style,
    tags: normalized.tags || [],
    createdAt: item.createdAt || ""
  };
}

function hasGapSignal(gap, genreCounts, styleWeights) {
  return Boolean(genreCounts[gap] || styleWeights[gap] || styleWeights[formatStyleLabel(normalize(gap))]);
}

function uniqueList(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = normalize(item);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function scoreCandidate(candidate, profile, collection, feedback = {}) {
  const album = normalizeAlbum(candidate);
  const normalizedCollection = profile.albums?.length ? profile.albums : collection.map(normalizeAlbum);
  const direct = calculateDirectAffinity(album, profile);
  const adjacent = calculateAdjacentAffinity(album, profile);
  const gapFilled = getCandidateGapFilled(album, profile);
  const influencedBy = getInfluentialAlbums(album, normalizedCollection, profile);
  const gapBonus = calculateGapBonus(album, profile, gapFilled, direct.score, adjacent.score);
  const anchorInfluence = calculateAnchorInfluence(influencedBy);
  const noveltyBonus = calculateNoveltyBonus(album, profile, gapFilled, direct.score, adjacent.score);
  const repetitionPenalty = calculateRepetitionPenalty(album, profile);
  const feedbackAdjustment = calculateFeedbackAdjustment(album, profile, feedback);
  const hiddenKeys = new Set(feedback.hiddenKeys || feedback.rejectedKeys || []);

  if (hiddenKeys.has(album.identityKey)) {
    const scoreBreakdown = {
      directAffinity: 0,
      adjacentAffinity: 0,
      gapBonus: 0,
      anchorInfluence: 0,
      noveltyBonus: 0,
      repetitionPenalty: 100,
      feedbackAdjustment: -100,
      finalScore: 0
    };
    return {
      ...album,
      score: 0,
      scorePercent: 0,
      confidence: "baixa",
      reasons: ["oculto pelo usuário"],
      influencedBy: [],
      gapFilled: "",
      matchedSignals: ["feedback:oculto"],
      scoreBreakdown,
      reasonChips: [],
      dynamicReason: buildRecommendationExplanation(album, { ...scoreBreakdown, reasons: ["oculto pelo usuário"] }, profile)
    };
  }

  const finalScore = clampScore(
    direct.score +
      adjacent.score +
      gapBonus.score +
      anchorInfluence.score +
      noveltyBonus.score +
      feedbackAdjustment.score -
      repetitionPenalty.score
  );
  const reasons = uniqueList([
    ...direct.reasons,
    ...adjacent.reasons,
    ...gapBonus.reasons,
    ...anchorInfluence.reasons,
    ...noveltyBonus.reasons,
    ...feedbackAdjustment.reasons
  ]).slice(0, 5);
  const matchedSignals = uniqueList([
    ...direct.signals,
    ...adjacent.signals,
    ...gapBonus.signals,
    ...anchorInfluence.signals,
    ...noveltyBonus.signals,
    ...feedbackAdjustment.signals,
    ...repetitionPenalty.signals
  ]);
  const scoreBreakdown = {
    directAffinity: direct.score,
    adjacentAffinity: adjacent.score,
    gapBonus: gapBonus.score,
    anchorInfluence: anchorInfluence.score,
    noveltyBonus: noveltyBonus.score,
    repetitionPenalty: repetitionPenalty.score,
    feedbackAdjustment: feedbackAdjustment.score,
    finalScore,
    confidence: confidenceFromScore(finalScore),
    reasons,
    influencedBy,
    gapFilled,
    matchedSignals,
    exploratory: noveltyBonus.exploratory
  };
  const reasonChips = buildRecommendationChips(album, scoreBreakdown, profile);

  return {
    ...album,
    score: Math.max(1, Math.min(10, Math.round(finalScore / 10))),
    scorePercent: finalScore,
    confidence: scoreBreakdown.confidence,
    reasons: scoreBreakdown.reasons,
    influencedBy,
    gapFilled,
    matchedSignals: scoreBreakdown.matchedSignals,
    scoreBreakdown,
    reasonChips,
    dynamicReason: buildRecommendationExplanation(album, scoreBreakdown, profile)
  };
}

function scoreRecommendations(collection, candidates = recommendationPool, wishlist = [], feedback = {}) {
  const profile = buildTasteProfile(collection);
  const scoringFeedback = buildRecommendationFeedback(collection, wishlist, feedback);
  const savedKeys = new Set(wishlist.map((album) => normalizeAlbum(album).identityKey));
  const hiddenKeys = new Set([...(scoringFeedback.hiddenKeys || []), ...(scoringFeedback.ownedKeys || [])]);
  const scored = candidates
    .filter((album) => !albumListHasAlbum(collection, album))
    .filter((album) => !savedKeys.has(normalizeAlbum(album).identityKey))
    .filter((album) => !hiddenKeys.has(normalizeAlbum(album).identityKey))
    .map((album) => scoreCandidate(album, profile, collection, scoringFeedback))
    .filter((album) => album.scorePercent > 0)
    .toSorted((a, b) => b.scorePercent - a.scorePercent || a.title.localeCompare(b.title, "pt-BR"));

  return selectDiverseRecommendations(scored, 6, profile);
}

function buildRecommendationExplanation(candidate, scoreBreakdown, profile = {}) {
  const sentences = [];
  const influences = (scoreBreakdown.influencedBy || []).slice(0, 3);
  const influenceText = formatInfluenceList(influences);
  const candidateStyle = getPrimaryCandidateStyle(candidate);
  const topStyle = profile.topStyles?.[0]?.label;
  const profileBase = [profile.topGenre, topStyle].filter(Boolean).join(" e ");
  const adjacentMatches = getAdjacentMatches(candidate, profile).slice(0, 2);

  if (influenceText) {
    sentences.push(
      `${candidate.title} entra como continuação natural da escuta que aparece em ${influenceText}.`
    );
  } else if (profileBase) {
    sentences.push(
      `A estante já mostra força em ${profileBase}; ${candidate.title} conversa com esse eixo por ${describeCandidateTexture(candidate, candidateStyle)}.`
    );
  } else {
    sentences.push(`${candidate.title} é uma entrada sólida para ampliar a estante com ${describeCandidateTexture(candidate, candidateStyle)}.`);
  }

  if (scoreBreakdown.gapBonus >= 8 && scoreBreakdown.gapFilled) {
    sentences.push(
      `Ele cobre uma lacuna em ${scoreBreakdown.gapFilled}${profile.topGenre ? ` sem abandonar o caminho aberto por ${profile.topGenre}` : ""}.`
    );
  } else if (adjacentMatches.length) {
    sentences.push(
      `A ponte mais forte aqui é ${candidate.genre} passando por ${adjacentMatches.join(" e ")}, então a sugestão amplia a coleção sem parecer aleatória.`
    );
  } else if (scoreBreakdown.directAffinity >= 14 && profile.topGenre) {
    sentences.push(`O sinal principal é direto: ${candidate.genre} já aparece bem na coleção e este disco aprofunda essa rota.`);
  } else if (scoreBreakdown.exploratory) {
    sentences.push(`É uma aposta de garimpo: sai um pouco do centro da coleção, mas ainda preserva sinais reconhecíveis de estilo e época.`);
  }

  if (scoreBreakdown.repetitionPenalty >= 8) {
    sentences.push("A aderência foi contida para não transformar o radar em mais do mesmo.");
  }

  return sentences.slice(0, 3).join(" ");
}

function buildRecommendationChips(candidate, scoreBreakdown, profile = {}) {
  const chips = [];
  const adjacentMatches = getAdjacentMatches(candidate, profile).slice(0, 2);
  const candidateStyle = getPrimaryCandidateStyle(candidate);
  const influence = scoreBreakdown.influencedBy?.[0];

  if (adjacentMatches.length) {
    chips.push(`${candidate.genre} + ${adjacentMatches[0]}`);
  } else if (candidateStyle) {
    chips.push(`${candidate.genre} + ${candidateStyle}`);
  } else {
    chips.push(candidate.genre);
  }

  if (scoreBreakdown.gapFilled) {
    chips.push(`lacuna em ${scoreBreakdown.gapFilled}`);
  } else if (candidate.genre !== profile.topGenre && candidate.decade !== "Não informado") {
    chips.push(`ponte para ${candidate.genre} ${candidate.decade.replace("s", "s")}`);
  }

  if (influence?.artist) {
    chips.push(`conversa com ${influence.artist}`);
  }

  const productionChip = getProductionChip(candidate);
  if (productionChip) chips.push(productionChip);

  return uniqueList(chips).slice(0, 4);
}

function getPrimaryCandidateStyle(candidate) {
  return getAlbumStyleTerms(candidate)[0]?.label || candidate.style || "";
}

function describeCandidateTexture(candidate, style) {
  if (style) return `${candidate.genre} com traço de ${style}`;
  if (candidate.tags?.length) return `${candidate.genre} e sinais de ${candidate.tags.slice(0, 2).join(" e ")}`;
  return candidate.genre;
}

function formatInfluenceList(influences) {
  const titles = influences.map((album) => album.title).filter(Boolean).slice(0, 3);
  if (!titles.length) return "";
  if (titles.length === 1) return titles[0];
  if (titles.length === 2) return `${titles[0]} e ${titles[1]}`;
  return `${titles[0]}, ${titles[1]} e ${titles[2]}`;
}

function getProductionChip(candidate) {
  const terms = getCandidateSignalTerms(candidate);
  if (terms.has("organico") || terms.has("producao") || terms.has("groove")) return "produção orgânica";
  if (terms.has("dancante")) return "dançante";
  if (terms.has("introspectivo")) return "introspectivo";
  if (terms.has("sample")) return "textura de sample";
  if (terms.has("noturno")) return "escuta noturna";
  if (terms.has("conceitual")) return "disco conceitual";
  if (terms.has("ambient")) return "atmosfera";
  return "";
}

function calculateDirectAffinity(album, profile) {
  let score = 0;
  const reasons = [];
  const signals = [];
  const maxGenreWeight = Math.max(...Object.values(profile.genreWeights || { base: 1 }), 1);
  const genreWeight = Number(profile.genreWeights?.[album.genre] || 0);
  const artistCount = Number(profile.artistCounts?.[album.artist] || 0);
  const decadeWeight = Number(profile.decadeWeights?.[album.decade] || 0);
  const styleMatches = getCandidateStyleMatches(album, profile).slice(0, 3);
  const tagMatches = getCandidateTagMatches(album, profile).slice(0, 4);
  const curationMatches = getCandidateCurationMatches(album, profile);

  if (album.genre === profile.topGenre) {
    score += 14;
    reasons.push(`acompanha seu gênero mais forte (${album.genre})`);
    signals.push(`gênero forte:${album.genre}`);
  } else if (genreWeight > 0) {
    score += Math.min(9, 4 + (genreWeight / maxGenreWeight) * 5);
    reasons.push(`mantém presença em ${album.genre}`);
    signals.push(`gênero presente:${album.genre}`);
  }

  if (styleMatches.length) {
    score += Math.min(11, styleMatches.length * 4);
    reasons.push(`repete sinais de ${styleMatches.join(" e ")}`);
    signals.push(`estilo:${styleMatches.join("+")}`);
  }

  if (tagMatches.length) {
    score += Math.min(10, tagMatches.length * 2.8);
    reasons.push(`cruza tags como ${tagMatches.slice(0, 2).join(" e ")}`);
    signals.push(`tags:${tagMatches.join("+")}`);
  }

  if (curationMatches.score) {
    score += curationMatches.score;
    reasons.push(...curationMatches.reasons);
    signals.push(...curationMatches.signals);
  }

  if (album.decade === profile.topDecade) {
    score += 6;
    reasons.push(`conversa com sua década dominante (${album.decade})`);
    signals.push(`década:${album.decade}`);
  } else if (decadeWeight > 0) {
    score += 3;
    signals.push(`década presente:${album.decade}`);
  }

  if (artistCount) {
    score += Math.min(9, 5 + artistCount * 2);
    reasons.push(`continua sua sequência de ${album.artist}`);
    signals.push(`artista:${album.artist}`);
  }

  return {
    score: Math.min(52, Math.round(score)),
    reasons,
    signals
  };
}

function getCandidateCurationMatches(album, profile) {
  let score = 0;
  const reasons = [];
  const signals = [];
  const bridgeMatches = getCandidateBridgeMatches(album, profile);
  const goodForMatches = getGoodForCollectionMatches(album, profile);
  const sceneMatches = getCandidateSceneMatches(album, profile);
  const moodMatches = getCandidateMoodMatches(album, profile);

  if (bridgeMatches.length) {
    score += Math.min(8, 4 + bridgeMatches.length * 2);
    reasons.push(`foi marcado como ponte a partir de ${bridgeMatches.slice(0, 2).join(" e ")}`);
    signals.push(`curadoria:ponte:${bridgeMatches.join("+")}`);
  }

  if (goodForMatches.length) {
    score += Math.min(10, 5 + goodForMatches.length * 3);
    reasons.push(`tem curadoria indicada para estantes com ${goodForMatches.slice(0, 2).join(" e ")}`);
    signals.push(`curadoria:coleção:${goodForMatches.join("+")}`);
  }

  if (sceneMatches.length) {
    score += Math.min(7, 3 + sceneMatches.length * 2);
    signals.push(`cena:${sceneMatches.join("+")}`);
  }

  if (moodMatches.length) {
    score += Math.min(5, moodMatches.length * 2);
    signals.push(`clima:${moodMatches.join("+")}`);
  }

  return { score, reasons, signals };
}

function calculateAdjacentAffinity(album, profile) {
  const matches = getAdjacentMatches(album, profile);
  if (!matches.length) return { score: 0, reasons: [], signals: [] };

  return {
    score: Math.min(22, 6 + matches.length * 5),
    reasons: [`faz ponte com ${matches.slice(0, 2).join(" e ")}`],
    signals: matches.map((match) => `adjacente:${match}`)
  };
}

function calculateGapBonus(album, profile, gapFilled, directAffinity, adjacentAffinity) {
  if (!gapFilled) return { score: 0, reasons: [], signals: [] };

  const category = getGapCategory(gapFilled, profile);
  const connected =
    directAffinity >= 12 ||
    adjacentAffinity >= 8 ||
    getCandidateStyleMatches(album, profile).length > 0 ||
    getCandidateBridgeMatches(album, profile).length > 0;
  const base = { adjacent: 9, obvious: 6, exploratory: 4 }[category] || 4;
  const score = connected ? base + 4 : Math.max(2, base - 3);

  return {
    score: Math.min(14, score),
    reasons: [`preenche ${category === "adjacent" ? "uma lacuna adjacente" : "uma lacuna"} em ${gapFilled}`],
    signals: [`lacuna:${category}:${gapFilled}`]
  };
}

function calculateAnchorInfluence(influencedBy) {
  const anchorHits = influencedBy.filter((album) => album.isAnchor);
  const regularHits = influencedBy.filter((album) => !album.isAnchor);
  const score = Math.min(14, anchorHits.length * 5 + regularHits.length * 1.5);
  return {
    score: Math.round(score),
    reasons: anchorHits.length ? [`conversa com ${anchorHits[0].title}`] : [],
    signals: anchorHits.length ? ["discos âncora"] : regularHits.length ? ["discos relacionados"] : []
  };
}

function calculateNoveltyBonus(album, profile, gapFilled, directAffinity, adjacentAffinity) {
  const gapCategory = gapFilled ? getGapCategory(gapFilled, profile) : "";
  const outsideMainGenre = album.genre !== profile.topGenre;
  const controlled = adjacentAffinity > 0 || gapCategory === "adjacent" || directAffinity >= 10;
  const exploratory = outsideMainGenre && controlled && directAffinity < 24;
  let score = 0;

  if (exploratory) score += gapCategory === "exploratory" ? 7 : 5;
  if (outsideMainGenre && adjacentAffinity >= 12) score += 2;

  return {
    score: Math.min(9, score),
    exploratory,
    reasons: exploratory ? ["funciona como exploração controlada"] : [],
    signals: exploratory ? ["exploração controlada"] : []
  };
}

function calculateRepetitionPenalty(album, profile) {
  let score = 0;
  const signals = [];
  const total = Math.max(profile.albums?.length || 0, 1);
  const genreCount = Number(profile.genreCounts?.[album.genre] || 0);
  const artistCount = Number(profile.artistCounts?.[album.artist] || 0);
  const styleMatches = getCandidateStyleMatches(album, profile);
  const avoidMatches = getAvoidOverrepresentationMatches(album, profile);

  if (genreCount >= 5 || genreCount / total >= 0.55) {
    score += 8;
    signals.push(`repetição de gênero:${album.genre}`);
  } else if (genreCount >= 3) {
    score += 4;
    signals.push(`gênero recorrente:${album.genre}`);
  }

  if (artistCount >= 3) {
    score += 9;
    signals.push(`artista saturado:${album.artist}`);
  } else if (artistCount >= 2) {
    score += 5;
    signals.push(`artista recorrente:${album.artist}`);
  }

  const saturatedStyle = styleMatches.find((style) => Number(profile.styleWeights?.[style] || 0) >= 4);
  if (saturatedStyle) {
    score += 4;
    signals.push(`estilo saturado:${saturatedStyle}`);
  }

  if (avoidMatches.length) {
    score += Math.min(8, avoidMatches.length * 4);
    signals.push(`evitar excesso:${avoidMatches.join("+")}`);
  }

  return {
    score: Math.min(20, score),
    reasons: [],
    signals
  };
}

function calculateFeedbackAdjustment(album, profile, feedback) {
  let score = 0;
  const reasons = [];
  const signals = [];
  const albumGenreSignal = normalizeSignalTerm(album.genre);
  const ignoredArtists = toArtistSet(feedback.ignoredArtists);
  const ignoredGenres = toNormalizedSet(feedback.ignoredGenres);
  const ignoredTags = toNormalizedSet(feedback.ignoredTags);
  const ignoredStyles = toNormalizedSet(feedback.ignoredStyles);
  const positiveArtists = toArtistSet(feedback.positiveArtists);
  const positiveGenres = toNormalizedSet(feedback.positiveGenres);
  const positiveTags = toNormalizedSet(feedback.positiveTags);
  const positiveStyles = toNormalizedSet(feedback.positiveStyles);
  const strongPositiveArtists = toArtistSet(feedback.strongPositiveArtists);
  const strongPositiveGenres = toNormalizedSet(feedback.strongPositiveGenres);
  const strongPositiveTags = toNormalizedSet(feedback.strongPositiveTags);
  const strongPositiveStyles = toNormalizedSet(feedback.strongPositiveStyles);

  if (ignoredArtists.has(album.normalizedArtist)) {
    score -= 12;
    reasons.push(`reduzido por artista ignorado`);
    signals.push(`feedback negativo:artista`);
  }
  if (ignoredGenres.has(albumGenreSignal)) {
    score -= 10;
    reasons.push(`reduzido por gênero ignorado`);
    signals.push(`feedback negativo:gênero`);
  }

  const ignoredTagHits = album.normalizedTags.filter((tag) => ignoredTags.has(normalizeSignalTerm(tag)));
  if (ignoredTagHits.length) {
    score -= Math.min(10, ignoredTagHits.length * 4);
    signals.push("feedback negativo:tag");
  }

  const ignoredStyleHits = getAlbumStyleTerms(album).filter((term) => ignoredStyles.has(normalizeSignalTerm(term.label)));
  if (ignoredStyleHits.length) {
    score -= Math.min(8, ignoredStyleHits.length * 3);
    signals.push("feedback negativo:estilo");
  }

  if (positiveArtists.has(album.normalizedArtist)) {
    score += 5;
    signals.push("feedback positivo:artista");
  }
  if (positiveGenres.has(albumGenreSignal)) {
    score += 4;
    signals.push("feedback positivo:gênero");
  }

  const positiveTagHits = album.normalizedTags.filter((tag) => positiveTags.has(normalizeSignalTerm(tag)));
  if (positiveTagHits.length) {
    score += Math.min(7, positiveTagHits.length * 2.5);
    signals.push("feedback positivo:tag");
  }

  const styleHits = getAlbumStyleTerms(album).filter((term) => positiveStyles.has(normalizeSignalTerm(term.label)));
  if (styleHits.length) {
    score += Math.min(6, styleHits.length * 3);
    signals.push("feedback positivo:estilo");
  }

  if (strongPositiveArtists.has(album.normalizedArtist)) {
    score += 9;
    signals.push("feedback forte:artista");
  }
  if (strongPositiveGenres.has(albumGenreSignal)) {
    score += 8;
    signals.push("feedback forte:gênero");
  }

  const strongTagHits = album.normalizedTags.filter((tag) => strongPositiveTags.has(normalizeSignalTerm(tag)));
  if (strongTagHits.length) {
    score += Math.min(12, strongTagHits.length * 4);
    signals.push("feedback forte:tag");
  }

  const strongStyleHits = getAlbumStyleTerms(album).filter((term) => strongPositiveStyles.has(normalizeSignalTerm(term.label)));
  if (strongStyleHits.length) {
    score += Math.min(10, strongStyleHits.length * 5);
    signals.push("feedback forte:estilo");
  }

  if (score > 0) reasons.push("reforçado pelo radar salvo");
  return {
    score: Math.max(-24, Math.min(24, Math.round(score))),
    reasons,
    signals
  };
}

function buildRecommendationFeedback(collection, wishlist, feedback = {}) {
  const explicitFeedback = Array.isArray(feedback) ? feedback : feedback.events || [];
  const wishlistAlbums = [...(wishlist || []), ...(feedback.savedAlbums || [])].map(normalizeAlbum);
  const wishlistConverted = collection.filter((album) => album?.fromWishlist || album?.origin === "wishlist").map(normalizeAlbum);
  const savedAlbums = explicitFeedback.filter((item) => item.action === "save").map(normalizeAlbum);
  const strongPositiveAlbums = explicitFeedback.filter((item) => item.action === "more-like-this").map(normalizeAlbum);
  const ignoredAlbums = explicitFeedback.filter((item) => item.action === "not-for-me").map(normalizeAlbum);
  const ownedAlbums = explicitFeedback.filter((item) => item.action === "owned").map(normalizeAlbum);
  const positiveAlbums = [...wishlistAlbums, ...wishlistConverted, ...savedAlbums];

  return {
    ...(Array.isArray(feedback) ? {} : feedback),
    hiddenKeys: [
      ...((Array.isArray(feedback) ? [] : feedback.hiddenKeys) || []),
      ...ignoredAlbums.map((album) => album.identityKey),
      ...ownedAlbums.map((album) => album.identityKey)
    ],
    ownedKeys: ownedAlbums.map((album) => album.identityKey),
    positiveArtists: [...((Array.isArray(feedback) ? [] : feedback.positiveArtists) || []), ...positiveAlbums.map((album) => album.artist)],
    positiveGenres: [...((Array.isArray(feedback) ? [] : feedback.positiveGenres) || []), ...positiveAlbums.map((album) => album.genre)],
    positiveTags: [...((Array.isArray(feedback) ? [] : feedback.positiveTags) || []), ...positiveAlbums.flatMap((album) => album.tags || [])],
    positiveStyles: [
      ...((Array.isArray(feedback) ? [] : feedback.positiveStyles) || []),
      ...positiveAlbums.flatMap((album) => getAlbumStyleTerms(album).map((term) => term.label))
    ],
    strongPositiveArtists: strongPositiveAlbums.map((album) => album.artist),
    strongPositiveGenres: strongPositiveAlbums.map((album) => album.genre),
    strongPositiveTags: strongPositiveAlbums.flatMap((album) => album.tags || []),
    strongPositiveStyles: strongPositiveAlbums.flatMap((album) => getAlbumStyleTerms(album).map((term) => term.label)),
    ignoredArtists: [...((Array.isArray(feedback) ? [] : feedback.ignoredArtists) || []), ...ignoredAlbums.map((album) => album.artist)],
    ignoredGenres: [...((Array.isArray(feedback) ? [] : feedback.ignoredGenres) || []), ...ignoredAlbums.map((album) => album.genre)],
    ignoredTags: [...((Array.isArray(feedback) ? [] : feedback.ignoredTags) || []), ...ignoredAlbums.flatMap((album) => album.tags || [])],
    ignoredStyles: ignoredAlbums.flatMap((album) => getAlbumStyleTerms(album).map((term) => term.label))
  };
}

function selectDiverseRecommendations(scored, limit, profile) {
  const selected = [];
  const genreUse = {};
  const artistUse = {};
  const prepared = scored.map((album) => decorateRecommendation(album, profile));

  const canAdd = (album) => {
    if (!album || selected.some((item) => item.identityKey === album.identityKey)) return false;
    const usedGenre = genreUse[album.genre] || 0;
    const usedArtist = artistUse[album.artist] || 0;
    if (usedGenre >= 2) return false;
    if (usedArtist >= 1) return false;
    return true;
  };

  const add = (album) => {
    if (selected.length >= limit || !canAdd(album)) return false;
    selected.push(album);
    genreUse[album.genre] = (genreUse[album.genre] || 0) + 1;
    artistUse[album.artist] = (artistUse[album.artist] || 0) + 1;
    return true;
  };

  if (profileSuggestsBrazilianMusic(profile)) {
    add(prepared.find(isBrazilianRecommendation));
  }

  add(prepared.find((album) => isAdjacentGapRecommendation(album, profile)));
  add(prepared.find(isReliableExploratoryRecommendation));

  const sectionOrder = ["certeiras", "lacunas", "exploratórias"];
  while (selected.length < limit) {
    const previousLength = selected.length;
    sectionOrder.forEach((section) => {
      if (selected.length >= limit) return;
      add(prepared.find((album) => album.recommendationSection === section && canAdd(album)));
    });
    if (selected.length === previousLength) break;
  }

  prepared.forEach((album) => {
    if (selected.length < limit) add(album);
  });

  return selected.slice(0, limit);
}

function decorateRecommendation(album, profile) {
  const recommendationSection = getRecommendationSection(album, profile);
  return {
    ...album,
    recommendationSection,
    recommendationLabel: getRecommendationLabel(album, recommendationSection)
  };
}

function getRecommendationSection(album, profile) {
  if (isAdjacentGapRecommendation(album, profile) || album.scoreBreakdown?.gapBonus >= 9) return "lacunas";
  if (isReliableExploratoryRecommendation(album)) return "exploratórias";
  return "certeiras";
}

function getRecommendationLabel(album, section) {
  if (section === "lacunas") return "Preenche lacuna";
  if (section === "exploratórias") return "Garimpo exploratório";
  if (album.scorePercent >= 74 || album.scoreBreakdown?.directAffinity >= 18) return "Combina muito";
  return "Próximo passo";
}

function isAdjacentGapRecommendation(album, profile) {
  if (!album?.gapFilled || !album?.scoreBreakdown?.gapBonus) return false;
  return getGapCategory(album.gapFilled, profile) === "adjacent";
}

function isReliableExploratoryRecommendation(album) {
  return Boolean(album?.scoreBreakdown?.exploratory && album.scorePercent >= 52);
}

function profileSuggestsBrazilianMusic(profile) {
  const terms = [
    profile.topGenre,
    ...(profile.topStyles || []).map((style) => style.label),
    ...Object.keys(profile.genreWeights || {}),
    ...Object.keys(profile.styleWeights || {}),
    ...Object.keys(profile.weightedTags || {})
  ].map(normalizeSignalTerm);
  return terms.some((term) => isBrazilianMusicSignal(term));
}

function isBrazilianRecommendation(album) {
  return getCandidateSignalTerms(album).has("mpb") || [...getCandidateSignalTerms(album)].some(isBrazilianMusicSignal);
}

function isBrazilianMusicSignal(term) {
  return [
    "mpb",
    "samba",
    "bossa nova",
    "tropicalia",
    "clube da esquina",
    "rap nacional",
    "soul brasileiro",
    "rock br",
    "rock brasileiro",
    "brasil",
    "musica brasileira",
    "psicodelia brasileira"
  ].includes(normalizeSignalTerm(term));
}

function getCandidateTagMatches(album, profile) {
  return album.tags.filter((tag, index) => profile.weightedTags?.[album.normalizedTags[index]]);
}

function getProfileSignalSet(profile) {
  return new Set(
    [
      profile.topGenre,
      profile.topDecade,
      ...Object.keys(profile.genreWeights || {}),
      ...Object.keys(profile.styleWeights || {}),
      ...Object.keys(profile.weightedTags || {}),
      ...(profile.topStyles || []).map((style) => style.label)
    ].map(normalizeSignalTerm)
  );
}

function getCandidateBridgeMatches(album, profile) {
  const profileTerms = getProfileSignalSet(profile);
  return (album.bridgeFrom || []).filter((term) => profileTerms.has(normalizeSignalTerm(term)));
}

function getGoodForCollectionMatches(album, profile) {
  const collectionArtists = new Set((profile.albums || []).map((item) => item.normalizedArtist));
  const collectionTitles = new Set((profile.albums || []).map((item) => item.normalizedTitle));
  return (album.goodForCollectionsWith || []).filter((term) => {
    const artistKey = normalizeArtistForIdentity(term);
    const titleKey = normalizeTitleForIdentity(term);
    return collectionArtists.has(artistKey) || collectionTitles.has(titleKey);
  });
}

function getCandidateSceneMatches(album, profile) {
  const profileTerms = getProfileSignalSet(profile);
  return (album.scenes || []).filter((scene) => {
    const sceneKey = normalizeSignalTerm(scene);
    return [...profileTerms].some((term) => term && sceneKey.includes(term));
  });
}

function getCandidateMoodMatches(album, profile) {
  const profileTerms = getProfileSignalSet(profile);
  return (album.moods || []).filter((mood) => profileTerms.has(normalizeSignalTerm(mood)));
}

function getAvoidOverrepresentationMatches(album, profile) {
  const total = Math.max(profile.albums?.length || 0, 1);
  const overrepresentedTerms = [
    ...Object.entries(profile.genreCounts || {})
      .filter(([, count]) => count >= 3 || count / total >= 0.55)
      .map(([genre]) => genre),
    ...Object.entries(profile.styleWeights || {})
      .filter(([, weight]) => weight >= 4)
      .map(([style]) => style)
  ].map(normalizeSignalTerm);

  return (album.avoidIfOverrepresented || []).filter((term) => {
    const avoidTerm = normalizeSignalTerm(term);
    return overrepresentedTerms.some((profileTerm) => avoidTerm.includes(profileTerm) || profileTerm.includes(avoidTerm));
  });
}

function getAdjacentMatches(album, profile) {
  const candidateTerms = getCandidateSignalTerms(album);
  const profileTerms = new Set([
    ...Object.keys(profile.genreWeights || {}),
    ...(profile.topStyles || []).map((style) => style.label)
  ].map(normalizeSignalTerm));
  const matches = [];

  profileTerms.forEach((term) => {
    getAdjacentTerms(term).forEach((adjacentTerm) => {
      if (candidateTerms.has(normalizeSignalTerm(adjacentTerm))) matches.push(formatStyleLabel(normalize(adjacentTerm)));
    });
  });

  getAdjacentTerms(album.genre).forEach((adjacentTerm) => {
    if (profileTerms.has(normalizeSignalTerm(adjacentTerm))) matches.push(formatStyleLabel(normalize(adjacentTerm)));
  });

  return uniqueList(matches);
}

function getCandidateSignalTerms(album) {
  return new Set(
    [
      album.genre,
      album.style,
      ...(album.styles || []),
      ...(album.tags || []),
      ...(album.moods || []),
      ...(album.scenes || []),
      ...(album.bridgeFrom || []),
      ...(album.goodForCollectionsWith || []),
      ...(album.gapForCollectionsMissing || []),
      ...getAlbumStyleTerms(album).map((term) => term.label)
    ].map(normalizeSignalTerm)
  );
}

function getAdjacentTerms(term) {
  const normalizedTerm = normalizeSignalTerm(term);
  const rules = {
    "hip hop": ["Soul", "Funk", "Jazz", "R&B", "jazz rap", "neo soul", "sample"],
    rap: ["Soul", "Funk", "Jazz", "R&B", "jazz rap", "neo soul"],
    soul: ["Hip-Hop", "Funk", "Jazz", "R&B", "neo soul", "MPB"],
    funk: ["Soul", "Hip-Hop", "Jazz", "jazz funk", "MPB"],
    jazz: ["Hip-Hop", "Soul", "hard bop", "modal", "fusion", "jazz funk", "jazz rap"],
    mpb: ["samba", "bossa nova", "tropicália", "Clube da Esquina", "soul brasileiro", "psicodelia brasileira"],
    rock: ["pós-punk", "psicodelia", "new wave", "art rock", "MPB"],
    eletronica: ["trip-hop", "ambient", "house", "downtempo", "Rock"],
    "alternative hip hop": ["neo soul", "R&B", "jazz rap"],
    "jazz rap": ["Jazz", "Hip-Hop", "Soul"],
    triphop: ["Eletrônica", "Hip-Hop", "downtempo", "ambient"],
    "trip hop": ["Eletrônica", "Hip-Hop", "downtempo", "ambient"],
    tropicalia: ["MPB", "psicodelia brasileira", "Rock"]
  };

  return rules[normalizedTerm] || [];
}

function getGapCategory(gap, profile) {
  const normalizedGap = normalize(gap);
  if ((profile.gaps?.adjacent || []).some((item) => normalize(item) === normalizedGap)) return "adjacent";
  if ((profile.gaps?.obvious || []).some((item) => normalize(item) === normalizedGap)) return "obvious";
  if ((profile.gaps?.exploratory || []).some((item) => normalize(item) === normalizedGap)) return "exploratory";
  return "";
}

function toNormalizedSet(items) {
  return new Set((items || []).map(normalizeSignalTerm).filter(Boolean));
}

function toArtistSet(items) {
  return new Set((items || []).map(normalizeArtistForIdentity).filter(Boolean));
}

function normalizeSignalTerm(value) {
  return normalize(formatStyleLabel(normalize(value)))
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function clampScore(value) {
  return Math.max(0, Math.min(100, Math.round(Number(value || 0))));
}

function getCandidateGapFilled(candidate, profile) {
  const candidateTerms = new Set([
    candidate.genre,
    ...(candidate.styles || []),
    ...(candidate.moods || []),
    ...(candidate.scenes || []),
    ...(candidate.gapForCollectionsMissing || []),
    ...getAlbumStyleTerms(candidate).map((term) => term.label),
    ...(candidate.tags || [])
  ].map(normalizeSignalTerm));
  const gapGroups = [profile.gaps?.adjacent || [], profile.gaps?.obvious || [], profile.gaps?.exploratory || []];
  const match = gapGroups.flat().find((gap) => candidateTerms.has(normalizeSignalTerm(gap)));
  if (match) return match;
  return candidate.genre === profile.gapGenre ? candidate.genre : "";
}

function getCandidateStyleMatches(candidate, profile) {
  return getAlbumStyleTerms(candidate)
    .filter((term) => profile.styleWeights?.[term.label] || profile.styleTerms.includes(term.normalized))
    .map((term) => term.label);
}

function getInfluentialAlbums(candidate, collection, profile = {}) {
  const candidateTags = new Set(candidate.normalizedTags || []);
  const candidateStyles = new Set(getAlbumStyleTerms(candidate).map((term) => normalizeSignalTerm(term.label)));
  const anchorKeys = new Set((profile.anchorAlbums || []).map((anchor) => anchor.identityKey));
  return collection
    .map((album) => {
      const tagHits = (album.normalizedTags || []).filter((tag) => candidateTags.has(tag));
      const styleHits = getAlbumStyleTerms(album).filter((term) => candidateStyles.has(normalizeSignalTerm(term.label)));
      const isAnchor = anchorKeys.has(album.identityKey);
      let influence = 0;
      if (album.normalizedArtist === candidate.normalizedArtist) influence += 4;
      if (album.genre === candidate.genre) influence += 3;
      if (album.decade === candidate.decade) influence += 1;
      if (tagHits.length) influence += Math.min(2, tagHits.length);
      if (styleHits.length) influence += Math.min(2, styleHits.length);
      if (candidate.normalizedStyle && album.normalizedStyle.includes(candidate.normalizedStyle)) influence += 1;
      influence += Math.min(1, Number(album.rating || 0) / 5);
      if (isAnchor) influence += 1.5;

      return {
        title: album.title,
        artist: album.artist,
        year: album.year,
        influence,
        isAnchor
      };
    })
    .filter((album) => album.influence >= 3)
    .toSorted((a, b) => b.influence - a.influence)
    .slice(0, 3)
    .map(({ title, artist, year, influence, isAnchor }) => ({ title, artist, year, influence: roundSignal(influence), isAnchor }));
}

function confidenceFromScore(scorePercent) {
  if (scorePercent >= 75) return "alta";
  if (scorePercent >= 50) return "média";
  return "baixa";
}

function saveRecommendationToWishlist(title, artist) {
  const rec = recommendationPool.find((album) => album.title === title && album.artist === artist);
  if (!rec) return;
  const result = addAlbumToWishlist(rec, { source: "recommendation" });
  if (result.status === "owned") {
    state.recommendationNotice = `${rec.title} já está na coleção.`;
    renderRecommendations();
    return;
  }
  if (result.status === "exists") {
    state.recommendationNotice = `${rec.title} já está salvo no radar.`;
    renderRecommendations();
    return;
  }
  state.recommendationNotice = result.status === "saved" ? `${rec.title} salvo no radar de garimpo.` : "Não consegui salvar este disco no radar.";
  renderRecommendations();
  createIcons();
}

function addAlbumToWishlist(album, options = {}) {
  const normalizedAlbum = normalizeAlbum(album);
  if (!normalizedAlbum.title || !normalizedAlbum.artist) {
    return { status: "invalid", album: normalizedAlbum };
  }
  if (collectionHasAlbum(normalizedAlbum)) {
    return { status: "owned", album: normalizedAlbum };
  }
  if (wishlistHasAlbum(normalizedAlbum)) {
    return { status: "exists", album: normalizedAlbum };
  }

  const wishlistItem = {
    ...album,
    ...normalizedAlbum,
    id: makeId(),
    coverUrl: normalizedAlbum.coverUrl || album.coverUrl || getRecommendationCoverUrl(normalizedAlbum),
    savedAt: new Date().toISOString(),
    status: options.status || "quero garimpar",
    source: options.source || "recommendation"
  };
  state.wishlist = [wishlistItem, ...state.wishlist].slice(0, 24);
  recordRecommendationFeedback(normalizedAlbum, "save");
  saveWishlist();
  if (options.createSocialPost !== false && state.socialState) {
    createSocialPost({
      type: "saved_to_radar",
      albumId: normalizedAlbum.identityKey,
      albumSnapshot: normalizeSocialAlbumSnapshot(wishlistItem),
      note: getComposerDefaultNote("saved_to_radar", wishlistItem),
      rating: Number(wishlistItem.rating || 0),
      tags: wishlistItem.tags || []
    });
  }
  return { status: "saved", album: wishlistItem };
}

function handleRecommendationFeedback(albumKey, action) {
  const rec = findRecommendationByIdentityKey(albumKey);
  if (!rec) return;

  recordRecommendationFeedback(rec, action);

  if (action === "not-for-me") {
    state.recommendationNotice = `${rec.title} saiu do radar. Vou reduzir sugestões com sinais parecidos.`;
    renderRecommendations();
    createIcons();
    return;
  }

  if (action === "more-like-this") {
    state.recommendationNotice = `Entendido: vou puxar mais discos na linha de ${rec.title}.`;
    renderRecommendations();
    createIcons();
    return;
  }

  if (action === "owned") {
    if (collectionHasAlbum(rec)) {
      state.recommendationNotice = `${rec.title} já está cadastrado. Não vou recomendar de novo.`;
      renderRecommendations();
      createIcons();
      return;
    }

    addRecommendationToCollection(rec.title, rec.artist);
  }
}

function findRecommendationByIdentityKey(albumKey) {
  return recommendationPool.find((album) => albumIdentityKey(album) === albumKey);
}

function recordRecommendationFeedback(album, action) {
  const normalizedAlbum = normalizeAlbum(album);
  const entry = {
    albumKey: normalizedAlbum.identityKey,
    action,
    title: normalizedAlbum.title,
    artist: normalizedAlbum.artist,
    genre: normalizedAlbum.genre,
    style: normalizedAlbum.style,
    tags: normalizedAlbum.tags,
    createdAt: new Date().toISOString()
  };
  state.recommendationFeedback = [
    entry,
    ...state.recommendationFeedback.filter(
      (item) => !(item.albumKey === entry.albumKey && item.action === entry.action)
    )
  ].slice(0, 160);
  saveRecommendationFeedback();
}

function wishlistHasAlbum(candidate) {
  return state.wishlist.some((album) => albumIdentityKey(album) === albumIdentityKey(candidate));
}

function addWishlistItemToCollection(id) {
  const item = state.wishlist.find((album) => album.id === id);
  if (!item) return;
  if (collectionHasAlbum(item)) {
    state.wishlist = state.wishlist.filter((album) => album.id !== id);
    saveWishlist();
    state.recommendationNotice = `${item.title} já estava na coleção. Removi do radar.`;
    renderRecommendations();
    return;
  }

  state.wishlist = state.wishlist.filter((album) => album.id !== id);
  saveWishlist();
  commitCollection(
    [
      {
        ...item,
        id: makeId(),
        condition: "Near Mint",
        rating: 4,
        purchasePlace: "",
        price: null,
        coverUrl: item.coverUrl || getRecommendationCoverUrl(item),
        comment: "",
        dateAdded: new Date().toISOString(),
        listenCount: 0,
        lastPlayed: null,
        fromWishlist: true,
        origin: "wishlist"
      },
      ...state.collection
    ],
    `${item.title} saiu do radar e entrou na coleção.`
  );
  switchView("collection");
}

function addRecommendationToCollection(title, artist) {
  const rec = recommendationPool.find((album) => album.title === title && album.artist === artist);
  if (!rec) return;
  if (collectionHasAlbum(rec)) {
    state.recommendationNotice = `${rec.title} já parece estar na sua coleção. Removi essa sugestão do radar.`;
    renderRecommendations();
    return;
  }

  commitCollection(
    [
    {
      ...rec,
      id: makeId(),
      condition: "Near Mint",
      rating: 4,
      purchasePlace: "",
      price: null,
      coverUrl: getRecommendationCoverUrl(rec),
      comment: rec.reason,
      dateAdded: new Date().toISOString(),
      listenCount: 0,
      lastPlayed: null
    },
    ...state.collection
    ],
    `Radar recalculado após adicionar ${rec.title}.`
  );
  switchView("collection");
}

function renderNewsFilters() {
  const categories = ["Todos", ...new Set(state.news.map((item) => item.category))];
  elements.newsFilters.innerHTML = categories
    .map(
      (category) => `
        <button class="${category === state.activeNewsCategory ? "active" : ""}" data-news-category="${escapeHtml(category)}">
          ${escapeHtml(category)}
        </button>
      `
    )
    .join("");

  elements.newsFilters.querySelectorAll("[data-news-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeNewsCategory = button.dataset.newsCategory;
      renderNewsFilters();
      renderNews();
    });
  });
}

function renderNews() {
  const items = state.news
    .filter((item) => state.activeNewsCategory === "Todos" || item.category === state.activeNewsCategory)
    .toSorted((a, b) => new Date(b.date) - new Date(a.date));

  if (!items.length) {
    elements.newsGrid.innerHTML = `
      <div class="empty-state">
        <div>
          <i data-lucide="newspaper"></i>
          <h3>Nenhuma matéria nesta seleção</h3>
          <p>Troque o filtro ou atualize para buscar novas matérias.</p>
        </div>
      </div>
    `;
    createIcons();
    return;
  }

  const [featured, ...listItems] = items;
  elements.newsGrid.innerHTML = `
    ${renderFeaturedNews(featured)}
    <div class="news-list">
      ${listItems.map(renderNewsRow).join("")}
    </div>
  `;
  bindNewsImageFallbacks();
  createIcons();
}

function renderFeaturedNews(item) {
  const imageUrl = getNewsImage(item, 0);
  const fallbackUrl = getFallbackNewsImage(item, 1);

  return `
    <article class="news-featured news-card">
      <a class="news-featured-image" href="${escapeAttribute(item.url)}" target="_blank" rel="noreferrer">
        <img src="${escapeAttribute(imageUrl)}" alt="Imagem da matéria ${escapeAttribute(item.title)}" data-news-image data-news-fallback="${escapeAttribute(fallbackUrl)}" />
        <span class="news-image-label">${escapeHtml(item.category)}</span>
      </a>
      <div class="news-featured-body">
        <div class="news-meta">
          <span class="news-tag">${escapeHtml(item.source)}</span>
          <span class="news-tag">${escapeHtml(formatDate(item.date))}</span>
          <span class="news-tag">${newsReadTime(item.summary)} min de leitura</span>
        </div>
        <h2>${escapeHtml(item.title)}</h2>
        <p class="news-summary">${escapeHtml(item.summary || "Resumo indisponível no feed.")}</p>
        <a class="news-link" href="${escapeAttribute(item.url)}" target="_blank" rel="noreferrer">
          Ler matéria
          <i data-lucide="arrow-up-right"></i>
        </a>
      </div>
    </article>
  `;
}

function renderNewsRow(item, index) {
  const imageUrl = getNewsImage(item, index + 1);
  const fallbackUrl = getFallbackNewsImage(item, index + 2);

  return `
    <article class="news-card news-row">
      <a class="news-thumb" href="${escapeAttribute(item.url)}" target="_blank" rel="noreferrer">
        <img src="${escapeAttribute(imageUrl)}" alt="Imagem da matéria ${escapeAttribute(item.title)}" loading="lazy" data-news-image data-news-fallback="${escapeAttribute(fallbackUrl)}" />
      </a>
      <div class="news-row-body">
        <div class="news-meta">
          <span class="news-tag">${escapeHtml(item.source)}</span>
          <span class="news-tag">${escapeHtml(item.category)}</span>
          <span class="news-tag">${escapeHtml(formatDate(item.date))}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="news-summary">${escapeHtml(item.summary || "Resumo indisponível no feed.")}</p>
      </div>
      <a class="news-row-action" href="${escapeAttribute(item.url)}" target="_blank" rel="noreferrer" aria-label="Abrir ${escapeAttribute(item.title)}">
        <i data-lucide="arrow-up-right"></i>
      </a>
    </article>
  `;
}

function getNewsImage(item, index = 0) {
  return item.imageUrl || getFallbackNewsImage(item, index);
}

function getFallbackNewsImage(item, index = 0) {
  const categoryImage = categoryNewsImages[item.category];
  if (categoryImage) return categoryImage;

  const seed = normalize(`${item.source || ""} ${item.title || ""}`).length + index;
  return editorialNewsImages[seed % editorialNewsImages.length];
}

function newsReadTime(summary) {
  const words = String(summary || "").split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.ceil(words / 120));
}

function bindNewsImageFallbacks() {
  elements.newsGrid.querySelectorAll("img[data-news-image]").forEach((image) => {
    image.addEventListener("error", () => {
      const fallback = image.dataset.newsFallback;
      if (fallback && image.getAttribute("src") !== fallback) {
        image.dataset.newsFallback = "";
        image.src = fallback;
        return;
      }
      image.remove();
    });
  });
}

async function refreshNews() {
  setNewsStatus("Atualizando seleção...");
  elements.refreshNewsButton.disabled = true;

  try {
    const batches = await Promise.allSettled(newsSources.map(fetchSourceNews));
    const items = batches
      .filter((result) => result.status === "fulfilled")
      .flatMap((result) => result.value)
      .filter(Boolean);

    if (!items.length) throw new Error("Nenhum item retornado pelos feeds.");

    state.news = dedupeNews([...items, ...fallbackNews]).slice(0, 24);
    saveNews();
    setNewsStatus("Seleção atualizada agora.");
  } catch (error) {
    setNewsStatus("Sem conexão com as fontes agora. Mantive a seleção salva.", "error");
  } finally {
    elements.refreshNewsButton.disabled = false;
    renderNewsFilters();
    renderNews();
    createIcons();
  }
}

function setNewsStatus(message, type = "") {
  elements.newsStatus.textContent = message;
  elements.newsStatus.classList.toggle("error", type === "error");
}

async function fetchSourceNews(source) {
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(source.feed)}`;
  const response = await fetch(proxyUrl, { cache: "no-store" });
  if (!response.ok) throw new Error(`Falha em ${source.name}`);

  const xmlText = await response.text();
  const xml = new DOMParser().parseFromString(xmlText, "text/xml");
  const nodes = [...xml.querySelectorAll("item, entry")].slice(0, 6);

  return nodes.map((node) => {
    const title = textFromNode(node, "title");
    const link = textFromNode(node, "link") || node.querySelector("link")?.getAttribute("href") || source.feed;
    const date = textFromNode(node, "pubDate") || textFromNode(node, "updated") || textFromNode(node, "published");
    const descriptionHtml = textFromNode(node, "description");
    const summaryHtml = textFromNode(node, "summary");
    const contentHtml = textFromLocalName(node, "encoded") || textFromLocalName(node, "content");
    const summary = stripHtml(descriptionHtml || summaryHtml || contentHtml || "");
    const category = classifyNews(title, summary, source.category);
    const imageUrl = normalizeImageUrl(extractNewsImage(node, [descriptionHtml, summaryHtml, contentHtml]), link || source.feed);

    return {
      source: source.name,
      category,
      title,
      date: date ? new Date(date).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10),
      summary: summary.slice(0, 170),
      url: link,
      imageUrl: imageUrl || getFallbackNewsImage({ category, source: source.name, title }),
      keywords: []
    };
  });
}

function extractNewsImage(node, htmlSnippets) {
  const mediaImage = [...node.querySelectorAll("*")].find((child) => {
    const url = child.getAttribute("url");
    if (!url) return false;

    const nodeName = normalize(child.nodeName);
    const type = normalize(child.getAttribute("type") || "");
    const medium = normalize(child.getAttribute("medium") || "");
    return nodeName.includes("media:content") || nodeName.includes("media:thumbnail") || type.startsWith("image") || medium === "image";
  });
  if (mediaImage) return mediaImage.getAttribute("url");

  const htmlImage = htmlSnippets.map(imageFromHtml).find(Boolean);
  return htmlImage || "";
}

function imageFromHtml(value) {
  if (!value) return "";

  const doc = new DOMParser().parseFromString(value, "text/html");
  return doc.querySelector("img")?.getAttribute("src") || "";
}

function normalizeImageUrl(value, baseUrl) {
  if (!value) return "";

  try {
    return new URL(value, baseUrl).href;
  } catch {
    return value;
  }
}

function classifyNews(title, summary, fallback) {
  const text = normalize(`${title} ${summary}`);
  if (["vinyl", "lp", "reissue", "pressing", "pressagem", "reedição"].some((word) => text.includes(normalize(word)))) {
    return "Vinil e reedições";
  }
  if (["review", "critica", "crítica", "album of the week"].some((word) => text.includes(normalize(word)))) {
    return "Críticas";
  }
  if (["announce", "new album", "single", "lança", "release"].some((word) => text.includes(normalize(word)))) {
    return "Lançamentos";
  }
  return fallback;
}

function renderInsights() {
  renderBarChart(elements.genreChart, countBy(state.collection, "genre"));
  renderBarChart(
    elements.decadeChart,
    state.collection.reduce((acc, album) => {
      const decade = `${Math.floor(Number(album.year) / 10) * 10}s`;
      acc[decade] = (acc[decade] || 0) + 1;
      return acc;
    }, {})
  );

  const revisit = state.collection
    .toSorted((a, b) => {
      const aDate = a.lastPlayed ? new Date(a.lastPlayed) : new Date(0);
      const bDate = b.lastPlayed ? new Date(b.lastPlayed) : new Date(0);
      return aDate - bDate;
    })
    .slice(0, 4);

  elements.revisitList.innerHTML = revisit
    .map(
      (album) => `
        <div class="revisit-item">
          <div>
            <strong>${escapeHtml(album.title)}</strong>
            <div class="album-meta">${escapeHtml(album.artist)} · ${escapeHtml(album.genre)}</div>
          </div>
          <button class="mini-button" data-play-album="${album.id}">
            <i data-lucide="rotate-cw"></i>
            Ouvi hoje
          </button>
        </div>
      `
    )
    .join("");

  elements.revisitList.querySelectorAll("[data-play-album]").forEach((button) => {
    button.addEventListener("click", () => markPlayed(button.dataset.playAlbum));
  });
}

function renderBarChart(container, data) {
  const entries = Object.entries(data).toSorted((a, b) => b[1] - a[1]);
  const max = Math.max(...entries.map((entry) => entry[1]), 1);
  container.innerHTML = entries.length
    ? entries
        .map(
          ([label, value]) => `
            <div class="bar-row">
              <span>${escapeHtml(label)}</span>
              <span class="bar-track"><span style="width: ${(value / max) * 100}%"></span></span>
              <strong>${value}</strong>
            </div>
          `
        )
        .join("")
    : `<p class="album-meta">Cadastre discos para visualizar este painel.</p>`;
}

function renderSidebarHighlight() {
  const highlight = state.collection.toSorted((a, b) => Number(b.rating) - Number(a.rating))[0];
  if (!highlight) {
    elements.sidebarHighlight.textContent = "Sem discos ainda";
    elements.sidebarHighlightMeta.textContent = "Comece cadastrando o primeiro LP.";
    return;
  }
  elements.sidebarHighlight.textContent = highlight.title;
  elements.sidebarHighlightMeta.textContent = `${highlight.artist} · nota ${Number(highlight.rating).toFixed(1)}`;
}

function renderCoverCanvases() {
  document.querySelectorAll("canvas[data-cover-seed]").forEach((canvas) => {
    const seed = Number(canvas.dataset.coverSeed || 1);
    drawGeneratedCover(canvas, seed);
  });
  document.querySelectorAll("img[data-cover-image]").forEach((image) => {
    image.addEventListener("error", () => {
      const cacheKey = image.dataset.coverCacheKey;
      if (cacheKey && state.coverCache[cacheKey]) {
        delete state.coverCache[cacheKey];
        saveCoverCache();
        missingRecommendationCoverKeys.delete(cacheKey);
      }
      const parent = image.parentElement;
      image.remove();
      if (parent?.classList.contains("review-post-cover") && !parent.querySelector("img, canvas, .cover-missing")) {
        parent.innerHTML = `<div class="cover-missing">Capa indisponível</div>`;
      }
    });
  });
}

function preloadImages(urls) {
  urls.forEach((url) => {
    if (!url || preloadedImageUrls.has(url)) return;
    preloadedImageUrls.add(url);
    const image = new Image();
    image.decoding = "async";
    image.src = url;
  });
}

function drawGeneratedCover(canvas, seed) {
  const ctx = canvas.getContext("2d");
  const size = canvas.width;
  const palette = getPalette(seed);
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, palette[0]);
  gradient.addColorStop(0.55, palette[1]);
  gradient.addColorStop(1, palette[2]);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  ctx.globalAlpha = 0.38;
  for (let i = 0; i < 16; i += 1) {
    const x = ((seed * 37 + i * 61) % size) - size * 0.12;
    const y = ((seed * 53 + i * 47) % size) - size * 0.12;
    const radius = 32 + ((seed + i * 19) % 120);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = i % 2 ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.28)";
    ctx.lineWidth = 2 + (i % 4);
    ctx.stroke();
  }

  ctx.globalAlpha = 1;
  ctx.fillStyle = "rgba(0,0,0,0.48)";
  ctx.beginPath();
  ctx.arc(size * 0.55, size * 0.52, size * 0.28, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.lineWidth = 2;
  for (let r = 0.08; r < 0.27; r += 0.035) {
    ctx.beginPath();
    ctx.arc(size * 0.55, size * 0.52, size * r, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.fillStyle = palette[3];
  ctx.beginPath();
  ctx.arc(size * 0.55, size * 0.52, size * 0.075, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(245,240,233,0.88)";
  ctx.fillRect(size * 0.09, size * 0.78, size * 0.48, 8);
  ctx.fillRect(size * 0.09, size * 0.83, size * 0.28, 8);
}

function getPalette(seed) {
  const palettes = [
    ["#2a2520", "#d84b3a", "#d5a84f", "#efe4d5"],
    ["#151311", "#6e96bd", "#78a97b", "#f05a41"],
    ["#211e1b", "#8f4b38", "#d8cec1", "#d5a84f"],
    ["#0f1415", "#315f6d", "#a04a40", "#f5f0e9"],
    ["#201d1a", "#7d6a55", "#c04c38", "#78a97b"]
  ];
  return palettes[seed % palettes.length];
}

function exportCollection() {
  const data = JSON.stringify(state.collection, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "minha-groova.json";
  link.click();
  URL.revokeObjectURL(url);
}

function countBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key] || "Não informado";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function countTags(items) {
  return items.reduce((acc, item) => {
    (item.tags || []).forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});
}

function normalizeTagCounts(tags) {
  return Object.entries(tags).reduce((acc, [tag, count]) => {
    const normalized = normalize(tag);
    acc[normalized] = (acc[normalized] || 0) + Number(count || 0);
    return acc;
  }, {});
}

function topEntry(data) {
  return Object.entries(data).toSorted((a, b) => b[1] - a[1])[0];
}

function ratingStars(rating) {
  const full = Math.floor(Number(rating));
  const half = Number(rating) % 1 >= 0.5;
  return `${"★".repeat(full)}${half ? "½" : ""}`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(date));
}

function formatClock(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2
  }).format(normalizePrice(value));
}

function parsePriceInput(value) {
  if (value === "" || value === null || value === undefined) return null;
  const price = Number(String(value).replace(",", "."));
  return Number.isFinite(price) && price >= 0 ? price : null;
}

function sanitizePurchaseUrl(value) {
  if (!value) return "";
  const amazonProduct = parseAmazonProductUrl(value);
  if (amazonProduct.isAmazon) return amazonProduct.canonicalUrl || value;

  try {
    return stripUrlTracking(normalizeUrlInput(value));
  } catch {
    return value;
  }
}

function normalizePrice(value) {
  const price = Number(value);
  return Number.isFinite(price) && price > 0 ? price : 0;
}

function getPurchaseSummary(album) {
  const parts = [];
  if (album.purchasePlace) parts.push(`Comprado em: ${album.purchasePlace}`);
  if (normalizePrice(album.price)) parts.push(formatCurrency(album.price));
  return parts.join(" · ");
}

function albumListHasAlbum(collection, candidate) {
  const candidateKey = albumIdentityKey(candidate);
  const candidateArtist = normalizeArtistForIdentity(candidate.artist);
  const candidateTitle = normalizeTitleForIdentity(candidate.title);

  return normalizeStoredCollection(collection).some((album) => {
    if (albumIdentityKey(album) === candidateKey) return true;
    if (normalizeArtistForIdentity(album.artist) !== candidateArtist) return false;
    return albumTitleSimilarity(normalizeTitleForIdentity(album.title), candidateTitle) >= 0.82;
  });
}

function collectionHasAlbum(candidate) {
  return albumListHasAlbum(state.collection, candidate);
}

function albumIdentityKey(album) {
  return `${normalizeArtistForIdentity(album?.artist)}::${normalizeTitleForIdentity(album?.title)}`;
}

function normalizeGenreLabel(value) {
  const normalizedGenre = normalize(value).replace(/[^a-z0-9]+/g, " ").trim();
  const aliases = {
    hiphop: "Hip-Hop",
    "hip hop": "Hip-Hop",
    "hip hop rap": "Hip-Hop",
    rap: "Hip-Hop",
    "r b": "Soul",
    rb: "Soul",
    "rhythm blues": "Soul",
    soul: "Soul",
    rock: "Rock",
    jazz: "Jazz",
    mpb: "MPB",
    "musica popular brasileira": "MPB",
    eletronica: "Eletrônica",
    electronic: "Eletrônica",
    electronica: "Eletrônica",
    pop: "Pop",
    experimental: "Experimental",
    classica: "Clássica",
    classical: "Clássica"
  };

  return aliases[normalizedGenre] || String(value || "Não informado").trim() || "Não informado";
}

function normalizeArtistForIdentity(value) {
  return normalizeIdentityText(value)
    .replace(/\b(the|and|thee)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeTitleForIdentity(value) {
  return collapseSingleLetterRuns(normalizeIdentityText(cleanReleaseTitle(value)));
}

function normalizeIdentityText(value) {
  return normalize(value)
    .replace(/&/g, " and ")
    .replace(/\+/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\b(vol|volume)\s+(\d+)\b/g, "vol$2")
    .replace(/\s+/g, " ")
    .trim();
}

function collapseSingleLetterRuns(value) {
  const tokens = String(value || "").split(/\s+/).filter(Boolean);
  const collapsed = [];

  for (let index = 0; index < tokens.length; index += 1) {
    if (tokens[index].length !== 1) {
      collapsed.push(tokens[index]);
      continue;
    }

    const run = [tokens[index]];
    while (tokens[index + 1]?.length === 1) {
      run.push(tokens[index + 1]);
      index += 1;
    }
    collapsed.push(run.length > 1 ? run.join("") : run[0]);
  }

  return collapsed.join(" ");
}

function albumTitleSimilarity(left, right) {
  const leftTokens = new Set(String(left || "").split(/\s+/).filter(Boolean));
  const rightTokens = new Set(String(right || "").split(/\s+/).filter(Boolean));
  if (!leftTokens.size || !rightTokens.size) return 0;

  const hits = [...leftTokens].filter((token) => rightTokens.has(token)).length;
  return hits / Math.max(leftTokens.size, rightTokens.size);
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function sanitizeHandle(value) {
  const handle = normalize(value)
    .replace(/[^a-z0-9_]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 30);
  return handle || defaultProfile.handle;
}

function initials(name) {
  return String(name || "V")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function relativeTime(date) {
  const diff = Date.now() - new Date(date).getTime();
  const minutes = Math.max(1, Math.round(diff / 60000));
  if (minutes < 60) return `há ${minutes} min`;

  const hours = Math.round(minutes / 60);
  if (hours < 24) return `há ${hours} h`;

  const days = Math.round(hours / 24);
  if (days < 8) return `há ${days} d`;

  return formatDate(date);
}

function textFromNode(node, selector) {
  return node.querySelector(selector)?.textContent?.trim() || "";
}

function textFromLocalName(node, localName) {
  const match = [...node.querySelectorAll("*")].find((child) => child.localName === localName);
  return match?.textContent?.trim() || "";
}

function stripHtml(value) {
  const doc = new DOMParser().parseFromString(value, "text/html");
  return doc.body.textContent?.replace(/\s+/g, " ").trim() || "";
}

function dedupeNews(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = normalize(`${item.source} ${item.title}`);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function makeId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `album-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function createIcons() {
  window.lucide?.createIcons();
}

init();
