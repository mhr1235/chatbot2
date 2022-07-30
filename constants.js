// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you", "age"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you", "who's your daddy"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
]

// Possible responses, in corresponding order

const replies = [
  ["You don't have my permission to speak.", "The best way to relax is with a nice cigar and a good book", "I don't care that the gravel might hurt your knees. Get down there and start licking","As I watched muscular naked bodies smelled the sweat from the uniforms socks and jockstraps, I felt getting a hard-on. I wanted to stop it but I just couldn't. They kept talking about how horny they were and they stripped off their dirty uniforms, I saw several of the guys were semi-hard.", "See that riding crop? Then you know where to go", "Shouldn't you be down there, cleaning my boots with your tongue?"],
  [
    "The BF was annoying so I had to teach him a (soft) lesson :-)",
    "On your knees. Lick those boots!",
    "I'm a Sadist. I've participated in or endured every scene short of those that disfigure or require physical damage.",
    "Enjoying the sun earlier today, while having a nice cigar.",
    "We hit the showers. With the warm water streaming over our aching bodies, we talked about the upcoming game... Somehow I felt that after this session in the locker-room, the game had already played! WE WERE ALL WINNERS."
  ],
  [
    "Come here and get down!",
    "A leather uniform isn't complete unless you put on tight leather gloves",
    "Start licking, boys",
    "I swallowed and swallowed and swallowed he was PISSING IN ME!",
    "I walked home and beat off to remembered smell and sight of hairy, fleshy cock."
  ],
  ["I guess denying that I'm becoming a daddy isn't an option anymore", "But now, attractive and in my early 30s with a big, fat cock and balls, a masculine, solid, hairy body and an agile mind full of fantasies and fun, I've begun to specialize.", "SAN FRANCISCO. MS Libra.33. 6', 170. White. 8 1/2 inches. Knowledgeable. Prefers muscular, older, more mature. Box 110.", "SAN FRANCISCO. SM. Gemini. 31. 6. 185. HENDERSON. s. Aries. 37. 6'2. 190. White. Knowledgeable. Heavy into oral, 6 1/2. Knowledgable. Dominant, demeaning, strapping, whipping action. Will switch roles seeks partner Who does what he's told. No permanent relationships.","I'm not a doctor or psychiatrist or even a missionary. I'm a Masochist",
 ],
  ["It was months before I could going to Folsom Street again. But a friend invited me to the opening of an all-night place with swimming pool and orgy room.", "A good listener is a man whose social vocabulary is limited to yes and no and who occasionally comes up with the more sophisticated: 'that's too bad.'", "He had some kinky ideas he wanted me to try. I stumbled to shower and cleaned up, went home. I spent the night realizing that his conditioning had decided that shit was bad, piss was bad, fucking was bad, sucking was bad, kissing a man was bad.","JACK WRANGLER IS TWENTY-FOUR,5 foot 10 TALL, WEIGHS 140,IS BLONDE WITH BLUE EYES.HIS SIZE EIGHT BOOTS BELIE HIS ELEVEN INCHES.HE LIKES SWIMMING BAREBACK RIDING, TENNIS, SURFING AND IS NEW TO LEATHER."],
  ["It was my ole buddy, Jim, one of the more accomplished Masters who lived in San Francisco. What're you doing tonight? he asked. 'No client at the moment,'' I said. 'I thought I'd do the Leather scene over on Folsom. I ain't had a free evening from hustling for quite a spell' ", "Don't ask a Master to blow you. Ever.", "Butch type leather Master needs naked slave for fun and pleasure, Must be cut.", "GAY BONDAGE!! We specialize in BIZARRE BONDAGE tor the heavy-action male", "I arranged to meet my master through a referral service. Until that time I had always been on the aggressive side of every relationship and had decided to get a slave of my own."],
  ["You a skin queen—all you think of is how tight the asshole gotta be.", "Only nine inches? Sorry to hear about your deformity.", "Along with the change of image came change of name to Wrangler", "When he showed, and answered to the name of Bill, as per our telephone conversation, I tried to get fired up to turn on with him. I remembered, when l saw him, that his trip was mostly mental and he had lots of hang-ups. We were renewing old acquaintances when the phone rang.", "A homophobic postal inspector named Kenneth Schmidt, who seems more on the payroll of the SFPD than that of the Postal Department and who instigated the entire investigation."],
  ["That wall queen was as warm as a nap.", "He wore that red sweater to the grave, man—that’s one sweater you can’t take off."],
  ["This deputy is the Real Thing. WM, 30, 5-9, 150, digs arresting big hunky men, taking you out to the lonely countryside in my patrol car, and fullfilling EVERY COP FANTASY you ever had. The bigger you are, the harder you fall. Also into wrestling and jockstraps", "Very few men possess extremely t-h-i-c-k snowwhite gelatinous sperm.  I love it. Especially from UNCUT 10-inch joint. "],
  ["Lockerrooms. Sweaty jocks. Ripe, thick, wetwool socks. Worn, tight-stretched grey workout cotton teeshirts. Pure hunk. Hot hairy jock. Video cassettes and jockstrap exchange. At 6-2, 184, 9-plus inches, I can captain any team and call the plays! ", "I need to find out what real life is all about. Let me suck cock, ass, be your slave in all thing your way: fisting, bondage, discipline. Any cultures. Let me serve you. ", "Into cigarsmokers in the driver's seat of stalled cars, trucks, vans. Firebirds and Camaroes are real autofetish treats. FLOOD YOUR ENGINE, TURN THE KEY, AND BLOW SOME SMOKE MY WAY TO KNOW WHAT IT REALLY IS TO TURN A MAN ON. "],
  ["Feel them: thick big ARMS, muscle bulked heavily sweaty workouts huge girth sported in a teeshirt, or subtly concealed by shirt sleeves of well-washed flannel stretched across their mass, stripped to reveal mounds of baseball biceps cabled with vascularity, and thick horseshoe triceps, growing bigger before your eyes, the pump of each successive flex further expressing the disciplined power of the life force that built them. With those Big Guns lifted high in full frontal display of arm muscle, feel them again. Feel the density of each striation as it’s gathered down into the depths of muscle armpits rich with the heavy male scent of bodybuilder muscle sweat. After a bit of smoke and popper, if you find your nose exploring the heights of those pits, if you can take that big muscular arm in one hand, and your dick in the other, and discover that between the stroking of the two that you're cuming, then we’re both gonna have fun! I’m on my way to the gym now. If Big-Guns rap-n-jackoff makes you break into a sweat you can’t cool off by yourself, drop me a line!", "Hairy blonds with moustaches or beards and hairy asses. Dirty biker blonds. All-American boy blonds. Long-haired surfer blonds. Muscular trucker blonds. Construction blonds. Pretty blonds. Straight blonds. Sit on my face. Let me lick your balls, suck your cock, or vice versa. I’m a WM pervert, warped, with strawberry-blond moustache, good bod, fast tongue. "],
  ["Very butch greaser Hell's Angel type, lives to ride, will meet other Harley-Davidson riders, and men of HD interests: into face/arm sweat, grease, garage floors, leather in layers with Levi's; mechanical devices relative to internal combustion, under-chassis, grease pits, mud. You must like and live the above. I'm butch and very big. If you feel you're on your way to the world of the Easy Rider, you know that for a pleasureable time anything manly is possible. You must enjoy straight biker company and be able to fit into such groups undetected. ", "hunky, swarthy, very hairy, sweaty pits, solid athletic body. Americanized with memories of Algeria raised in a professional soldier household; want to live out acts of French/Algerian amours and roughness. Oneway top.  ", "Wears and gets off on longjohns, checkered or plaid wool lumbershirts, lumberjackets, heavy wool hunting coats and pants, thick wool socks, dirty Levis, construction and engineer boots. If you need to be kidnapped, hogtied, and gagged with sweaty bandanas by one or two hunters, lumberjacks, construction workers, truckers, or bikers in the woods or in abandoned backwoods cabins, write me. "],
  ["Let's fuck in a bed full of money. We'll go out together and ask hot straight guys (construction trucker cops) if they can change a ten spot with bills from their wallets riding tight against their butts, and with coins heated in their pockets hanging next to their warm dicks. You can move in close on a straight guy while he figures he's doing a man a favor. You can watch the intensity of his face closeup while his big hands count out the change. You can touch his hands as he lays the bills on you.", "We'll head home with mouthfuls of man collected coins. Spit cash into each other's mouths. Suck cock. Shove rolls of dimes quarters halves and silver dollars up each others ass. You haven't dumped till you've dumped dinero! Let's roll in greenbacks. Let's JERKOFF worshipping the money. Money is the only power. Money is the root of all evil. Let's celebrate our roots in a hot hard cash match. Let's put our money where our mouths are. Why keep it under the mattress? Let's put our cash on the sheets and celebrate male greed, power, lust, and the comfort of the almighty dollar.", "This is a very honest trip. You bring a couple hundred to match mine. All cash returned at end of night when we hose off the grease together. Gold Kruggerands and Maple Leafs a real turn on! No other foreign currency, and definitely no Susan B's! If you've worked hard for the money, then let it work for your hard, pard! "],
  ["newly divorced, trying to come out in San Francisco where my homomasculine inexperience seems a disadvantage in a City of Sexual Pro's. Would like to meet some patient guys interested in whatever all you guys do. Really, I'm serious.", "Want to service your hot black dick with my hungry mouth, tongueing deeply your sweet dark buns. Want to feel your black rod in my hairy white ass. Turned on by very dark black men in jockstraps and Levi's. Prefer young, classy, black business men; sweaty, muscular black construction workers; hot black jocks and truckers--especially married studs."],
  ["“I want to belong to that tiny, terrible elite: men who live their lives beyond thel imits and never die in their beds."],
  ["Don't be a bitch. It hardly becomes you."],
  ["We go to mass and communion and eat the body and blood of Jesus Christ. Then we eat little boys like you.","Nada to vada in the larda, what a sharda","Megahood spanned the area that to this day marks the boundaries of the fair: from 12th Street to 7th Street between Howard and Harrison, with Folsom at the center"],
  ["Harlem was the site for internal colonialism. Its sexual value was there for the convenience of white folks. But it had its own identity and formation in spite of the fact that white folks were intruding"],
  ["Haha!","Homomasculinity"]
]

// Random for any other user input

const alternative = [
  "Leather culture was constructed on a discreet circuit of bike runs, bars, back rooms, and the annual autumn orgy of the CMC Carnival",
  "In addition to community preservation, we were making big statements about the AIDS crisis and trying to raise funds there were no social services at that time",
  "Leatherfolk anxiety ran deep in Orwellian 1984 suspicious of event producers purposing leather for fundraising parallax the way Harvey Milk started the Castro Street Fair to sign up voters",
  "I understand the panic back in the day, but now most sex clubs don't have proper cleaning facilities - aside from bathroom sinks",
  "I watched leathermen blink for the first time outside of bike run, we saw ourselves not under red bulbs of bars, but like mad dogs and Englishmen out in the noonday sun. ",
  "For creatures of the bar bath beyond night a day on the pavement was a 180-degree spin as Folsom claimed the SoMa streets as out gay space by day as well as by night.",
  "It's a huge irony of gay history that our romantic outlaw leather culture of the 1950-1980s was largely repellent to many mainstream gays and politically correct faddists until promoters figured how to package cowhide for consumers the way militants had tit-twisted the grassroots joy of 1970s gay liberation into the retail business of 1980s gay politics.",
"Folsom Street and the South of Market is a neighborhood of minorities, the elderly, and gay men on the same block Only in San Francisco'.",
"It quickly turned into a dick-lick instead. And that got really rough once two burly biker guys found them in their favorite cruising spot. The bikers knew how to educate young men - Taking the boys for the proverbial ride of their lifetime.",
"Homosexuality itself is a magical act. You can do it a thousand times and it won't make you straight, but a straight guy can do it once and people say he's gay. It doesn't go the other way. You could be a homosexual and have straight sex a thousand times and they'll never say that you're straight. There's an inequity there.",
"Ready to dominate",
"Take it from a Chinese Alpha Master",
"OBEY SERVE FOLLOW masterpits",
"Lick those masterpits MASSIVE MASTER POWER",
"When was the last time you had a sausage",
"Should I finished the evening with a last shot of whiskey or call it a night? Decision decisions",
"6'2' and 230 lbs.. Submit and KNEEL in front of this massive frame!",
"you better submit to The Alpha master bulge",
"boy serve these pits gay armpit armpit licking armpit armpit worship muscle worship stud armpit fetish",
"you should be kneeling in front of me",
"Damn that's a hairy ass hole and erect cock",
"6 ft and 225 lb of Masculine Alpha Male in leather boots and jeans. Towering in front of you. Step by step you become more and more submissive.",
"OTHER KINKS BONDAGE, PAIN, HUMILIATION, W/S, HOUSEBOY, LEATHER, OWNING PROPERTY, PIMP,RANK, BEING SELFISH, CHASITY, CIGARS, TAKE ADVANTAGE, CASH SLAVES, FINANCIAL SLAVERY",
"ToolBox is Whole Foods now"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]