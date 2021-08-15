const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBsAbrRjjKn9OY44uPT5OM8Wkk5Afsq4O8",
    authDomain: "makeshop-513ad.firebaseapp.com",
    projectId:  "makeshop-513ad"
  });
  
var db = firebase.firestore();

var products =[
  {
    "name": "Beach Day Paint-by-Number Kit",
    "url": "https://www.uncommongoods.com/product/beach-day-paint-by-number-kit",
    "price": "$45.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53300/53342_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/53300/53342_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/53300/53342_3_640px.jpg",
    "description": "Take a relaxing trip to the shore without tan lines or sand in your pants."
},
{
    "name": "Couch Bowl - Set of 2",
    "url": "https://www.uncommongoods.com/product/couch-bowl-set-of-2",
    "price": "$38.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/44300/44381_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/44300/44381_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/44300/44381_3_640px.jpg",
    "description": "This ergonomic ceramic bowl is specially designed for maximum couch-eating comfort and convenience."
},
{
    "name": "Pause Remote",
    "url": "https://www.uncommongoods.com/product/pause-remote",
    "price": "$149.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53100/53116_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/53100/53116_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/53100/53116_3_640px.jpg",
    "description": "A handmade, magnet-powered objet d'art that encourages mindful moments."
},
{
    "name": "Murder Mystery Jigsaw Puzzle",
    "url": "https://www.uncommongoods.com/product/murder-mystery-jigsaw-puzzle",
    "price": "$19.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/52800/52885_4_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/52800/52885_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/52800/52885_3_640px.jpg",
    "description": "Complete each 500 piece jigsaw to reveal the clues and solve the mystery."
},
{
    "name": "Make Your Own Family Tree Art",
    "url": "https://www.uncommongoods.com/product/make-your-own-family-tree-art",
    "price": "$25.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53700/53735_2_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/53700/53735_1_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/53700/53735_3_640px.jpg",
    "description": "A beautiful way to find your roots."
},
{
    "name": "Birthstone Hummingbird Feeder",
    "url": "https://www.uncommongoods.com/product/birthstone-hummingbird-feeder",
    "price": "$40.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/51500/51550_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/51500/51550_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/51500/51550_1_64px.jpg",
    "description": "The sparkling colors of these hand-blown glass globes make them part ornament, part hummingbird feeder."
},
{
    "name": "Ooma Bowl",
    "url": "https://www.uncommongoods.com/product/ooma-bowl",
    "price": "$28.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/18400/18412_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/18400/18412_3_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/18400/18412_2_640px.jpg",
    "description": "These ergonomic, handheld bowls keep favorite food duos separate. Great for chips, salsa, dips, and more."
},
{
    "name": "Personalized Compact Swivel Cheese Board",
    "url": "https://www.uncommongoods.com/product/personalized-compact-swivel-cheese-board",
    "price": "$80.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/50300/50335_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/50300/50335_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/50300/50335_3_640px.jpg",
    "description": "This personalized bamboo cheese board and knife set converts to a multi-level wheel."
},
{
    "name": "Gardener's Tool Seat",
    "url": "https://www.uncommongoods.com/product/gardeners-tool-seat",
    "price": "$40.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/18100/18126_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/18100/18126_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/18100/18126_3_640px.jpg",
    "description": "This lightweight steel and nylon garden stool combines the features of a tool bag and a folding chair."
},
{
    "name": "Climb With Me Glasses",
    "url": "https://www.uncommongoods.com/product/climb-with-me-glasses",
    "price": "$45.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53500/53548_1_640px.jpg",
    "imageURL2": "",
    "imageURL3": "",
    "description": "Love is an adventure: raise a toast to it with this pair of engraved, stemless wine glasses."
},
{
    "name": "Tarot Reading Class and Star Spinner Deck",
    "url": "https://www.uncommongoods.com/product/tarot-reading-class-and-star-spinner-deck",
    "price": "$50.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53700/53729_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/53700/53729_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/53700/53729_3_640px.jpg",
    "description": "A 90-minute introduction to basic tarot card reading and interpretation. Includes a unique tarot deck."
},
{
    "name": "Happy Hour Mixology Class and Simple Syrups",
    "url": "https://www.uncommongoods.com/product/happy-hour-mixology-class-and-simple-syrups",
    "price": "$55.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53200/53276_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/53200/53276_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/53200/53276_3_640px.jpg",
    "description": "Spend 90 minutes learning how to make three tasty craft cocktails from one of Brooklyn's best bartenders."
},
{
    "name": "Smoky Cocktails Class and Drink Smoking Kit",
    "url": "https://www.uncommongoods.com/product/smoky-cocktails-class-and-drink-smoking-kit",
    "price": "$90.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53800/53892_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/53800/53892_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/53800/53892_3_640px.jpg",
    "description": "Learn a deluxe mixology skill: making tasty, touched-by-fire drinks. Includes our Smoked Cocktail Kit."
},
{
    "name": "Pet Portrait Class AND Watercolor Kit",
    "url": "https://www.uncommongoods.com/product/pet-portrait-class-and-watercolor-kit",
    "price": "$55.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53600/53623_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/53600/53623_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/53600/53623_3_640px.jpg",
    "description": "Learn to paint a purr- or tail-wag-worthy portrait of your fur friend with an experienced art teacher."
},
{
    "name": "Bath Bombs Class and DIY Kit",
    "url": "https://www.uncommongoods.com/product/bath-bombs-class-and-diy-kit",
    "price": "$45.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53700/53743_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/53700/53743_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/53700/53743_3_640px.jpg",
    "description": "Learn to make bath bombs with an all-organic kit. Includes a cloth wrapping to make a pretty gift."
},
{
    "name": "Handmade Pasta Class and Pesto Jars 7/10 5pm EDT",
    "url": "https://www.uncommongoods.com/product/handmade-pasta-class-and-pesto-jars-7-10-5pm-edt",
    "price": "$60.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53800/53848_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/53800/53848_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/53800/53848_3_640px.jpg",
    "description": "Learn to make, shape, and cook fresh pasta using pantry ingredients. 90-minute class includes Gourmet Pesto."
},
{
    "name": "Truffle Class Sat 7/10 at 1pm EDT/10am PDT",
    "url": "https://www.uncommongoods.com/product/truffle-class-sat-7-10-at-1pm-edt-10am-pdt",
    "price": "$68.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53700/53783_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/53700/53783_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/53700/53783_3_640px.jpg",
    "description": "In 2 hours, learn to make melt-in-your-mouth chocolate confections. Includes Chocolate Truffles Kit."
},
{
    "name": "Mental Health Embroidery Class 07/18 4pm EDT",
    "url": "https://www.uncommongoods.com/product/mental-health-embroidery-class-07-18-4pm-edt",
    "price": "$60.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/54000/54003_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/54000/54003_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/54000/54003_3_640px.jpg",
    "description": "Learn the basics of this craft and how it can help when you’re low. Includes Embroidery Kit."
},
{
    "name": "Grapefruit Cocktails Class and Book 7/18 2pm",
    "url": "https://www.uncommongoods.com/product/grapefruit-cocktails-class-and-book-7-18-2pm",
    "price": "$40.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53800/53844_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/53800/53844_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/53800/53844_3_640px.jpg",
    "description": "You and Mom, spending a delicious hour together making two different grapefruit-based brunch cocktails."
},
{
    "name": "All About Bitters Class",
    "url": "https://www.uncommongoods.com/product/all-about-bitters-class",
    "price": "$55.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53600/53621_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/53600/53621_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/53600/53621_3_640px.jpg",
    "description": "Mixologist Amy K. will teach you the secrets of bitters and why they make cocktails magical."
},
{
    "name": "Custom Mixology Class and Product of Your Choice",
    "url": "https://www.uncommongoods.com/product/custom-mixology-class-and-product-of-your-choice",
    "price": "$600.00",
    "size": "n/a",
    "imageURL1": "https://www.uncommongoods.com/images/items/53700/53787_1_640px.jpg",
    "imageURL2": "https://www.uncommongoods.com/images/items/53700/53787_2_640px.jpg",
    "imageURL3": "https://www.uncommongoods.com/images/items/53700/53787_3_640px.jpg",
    "description": "Invite your group to a mixology class designed by you, taught by one of NYC’s most engaging bartenders."
},
{
    "name": "Vintage Nike You're Born You Die T Shirt NWT",
    "url": "https://www.rootsbk.net/nike-t-shirts/vintage-nike-youre-born-you-die-t-shirt-size-xxl-nwt-1",
    "price": "45.00",
    "size": "XXL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1619649195146-4FDP3SAVNYBZ68QAXD0L/Just+Do+It+gage+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1619649372098-B48NTTIEA0RIE9SN8XVP/youre+born+you+die+logo.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1619649558628-EY1FS9X87RIJWLBO6NKP/nike+grey+tag.jpg?format=750w",
    "description": "Vintage Nike Your’e Born You Die T shirt. On front is a Gas Gauge with the saying, Youre born, You Die, The Rest is up to you. The shirt is a hard to find item from the early 00s and has never been worn."
},
{
    "name": "Vintage Nike Baby Blue Mesh Basketball Shorts",
    "url": "https://www.rootsbk.net/shorts-and-trunks/vintage-nike-baby-blue-mesh-basketball-shorts-size-xl",
    "price": "58.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625240462884-2TZFQ3KXU34PKTKHYFUB/2+nike+basketball+shorts+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625240687180-MHA7I6OC5VH97RIFG1OR/back+of+Nike+shorts+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625240692970-2VU8889ENOKJYOXG3JCE/nike+white+tag+.jpg?format=750w",
    "description": "Vintage Nike baby Blue Mesh Basketball Shorts. These are your typical 90s mesh basketball shorts. They do not have any pockets. Swoosh is embroidered on."
},
{
    "name": "Vintage New York Empire State Games 1990 Tank Top",
    "url": "https://www.rootsbk.net/pop-culture/vintage-new-york-empire-state-games-1990-tank-top-size-xl",
    "price": "35.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625237339623-YYK03L18ATWWWOR15C96/2+empire+state+games+tank.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625237526283-68ITLCJZFKTK8H9APPXK/stains+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625237529510-QMQR36SHCPNIYZ9D398M/fruit+of+the+loom+tag+.jpg?format=1000w",
    "description": "Vintage New York Empire State Games 1990 Tank Top. The Empire State Games items always have an Olympic feel to them because it was created to take place of or at least be thought of us you think of the Olympics. The tee says New Yorks Finest on front."
},
{
    "name": "Vintage Mercedes Benz Experience Promo T Shirt NWOT",
    "url": "https://www.rootsbk.net/pop-culture/vintage-mercedes-benz-experience-promo-t-shirt-size-l-nwot",
    "price": "45.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625235950718-GDU4DNNWKFDAZODWSFPJ/benz+experience+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625236169564-NZRVFPBWTDOAJT6MF4BZ/front+of+benz+tee.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625236173678-Z1S6ZY8MXN59QI2V551M/benz+logo+.jpg?format=750w",
    "description": "Vintage Mercedes Benz Experience T Shirt. On back is a late 90s Mercedes SLK. It looks like it could be a brand new car for 2021. The shirt was a promo item from the Mercedes Experience in 1999."
},
{
    "name": "Vintage Nike Swoosh Tank Top Black NWT",
    "url": "https://www.rootsbk.net/nike-t-shirts/vintage-nike-swoosh-tank-top-black-size-xl-nwt",
    "price": "35.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1617831031194-HYTTFMVAKFCAR1RTP8UT/vtg+nike+tank+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1617831119467-NMZNUMAOVHAOU4CWNJRS/nike+white+tag.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1617831031194-HYTTFMVAKFCAR1RTP8UT/vtg+nike+tank+.jpg?format=100w",
    "description": "Vintage Nike Swoosh Tank Top Black. This is a simple lightweight black cotton tank with white embroidered Swoosh. It’s brand new with tag tags from the 90s."
},
{
    "name": "And 1 Mad Game Mid Royal / Black DS",
    "url": "https://www.rootsbk.net/nike/nqky8d0ypnhis1br9wm7nnzhjvqbs3",
    "price": "95.00",
    "size": "10",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1541718201763-E0FL8YZ44P7GM0DM3ES1/And+1+Mad+Game+Mid+Royal+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1541713907081-UDB51ZHSBTF9XQJB546C/and1+mad+game+mid2.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1541713911216-BQQ5Y0QG3XG6LQGLB5II/and1+mad+game+mid3.jpg?format=1500w",
    "description": "Released in 2001 And 1 Mad Game Mid Royal and black. In the early 00`s And 1 had a pretty big place in the Basketball scene. The t shirts were probably the most popular item but their footwear was next. I believe this was the pair worn on court by Latrell Sprewell before he went to Dada. They seem wearable, we do not suggest to wear to play ball. If worn casually they should last awhile but we cannot promise any amount of life."
},
{
    "name": "Nike Air Edge 2 Mid White / Black / Blue DS",
    "url": "https://www.rootsbk.net/nike/nike-air-edge-2-mid-white-black-blue-size-115-and-12-ds",
    "price": "115.00",
    "size": "10",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1487378812898-TXJRCO69OUY0M5MWXXQJ/Vintage%2BNike%2BAir%2BEdge%2B2%2BMid%2Bblack%2Bblue%2B173046041.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1484494726964-QCXZ3W42P6A8YIJ4XBQC/Nike+Edge+2+cross+trainer.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1484494862704-H9KQ5W3CX0VD4IOIVD1Q/Nike+Edge+Vintage+.jpg?format=1500w",
    "description": "Released in 1994. Nike Air Edge 2 Mid white black and blue. This pair is a classic cross trainer from 1994. Around this time Cross Trainers got very popular because of one man by the name of Bo Jackson. Cross Trainers are designed for multiple functions such as running and or side to side movement that you may do in other sports. This style does seem to be wearable but we cannot guarantee any amount of time it will last. Our suggestion is to wear it lightly indoors first for awhile before putting it to normal use."
},
{
    "name": "Nike Air Contrail White / Black / Lemon Twist DS",
    "url": "https://www.rootsbk.net/nike/wd896y6zbbyg749cmd4vyu4iiwcrax",
    "price": "75.00",
    "size": "8",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1511655940308-LJTBVS6W74FJ6N27PNM4/nike+contrail+og+vintage+lemon.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1511564292157-ZCYK2R831FUTLHPZYW0M/9-1.jpg?format=1500w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1511564207995-DVYXVMI38KK5OVNSBEF0/9-4.jpg?format=750w",
    "description": "Due to age we do not suggest to wear, they will not hold up. Nike Air Contrail White, black, and Lemon twist. In the mid 90s this silhouette along with designs like the Equivalent were not highly thought of by the many. They were looked at as grandpa or dad style of sneakers. But many things have changed since then. This pair looks so much better then it did in 1996, I cant really explain 100% why but it just does. "
},
{
    "name": "Nike Air Force Max Midnight Navy / White DS \"Charles Barkley\"",
    "url": "https://www.rootsbk.net/nike/airforcemaxbarkley",
    "price": "160.00",
    "size": "10",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1620871749181-5UCPFNL49T9F1UEHPJCN/air+force+max+b.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1620872215590-MMJNSDU2B2LOPZINA0WP/side+of+Air+force+max+.jpg?format=1000w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1620872220860-KQ7P45EQAN2ST1OB1SSA/bottom+of+nike+air+force+max+.jpg?format=1500w",
    "description": "Released in 2008. Nike Air Force Max Midnight navy and white. The Air Force Max is one of those pairs that never gets old. It has been rereleased a few times over the years but only once in this navy suede. The air bags are firm and not cloudy at all but due to age we cannot promise any amount of wear."
},
{
    "name": "Vintage Niketown NYC T Shirt",
    "url": "https://www.rootsbk.net/nike-t-shirts/vintage-niketown-nyc-t-shirt-size-l",
    "price": "75.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625160439019-TSNUKWOJ967OMAY98GLB/Niketown+NYC+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625160920870-R97LD5PHDGLI6W0YX4CY/niketown+front+tee.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625160701871-P815M1BVSLMLY7YV4YOI/niketown+logo.jpg?format=750w",
    "description": "Vintage Niketown NYC t shirt. On front is A small Niketown logo in back which is fine. But what makes this one special is the Niketown NYC colorful graphic. Unfortunately this store is closed and has moved down the block. Nike doesn’t make items like this often anymore."
},
{
    "name": "Vintage Nike Swoosh Strapback",
    "url": "https://www.rootsbk.net/nike-hats/vintage-nike-swoosh-strapback",
    "price": "65.00",
    "size": "OS",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625101338348-MVHCVPD6A3QXRWKAPCDX/Nike+Spell+Out+Swoosh+hat+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625101877127-UMKQMFP5M2QSNA99I9LK/back+of+Nike+cap+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625101824229-J04MB72ROMMFNW9K9U2X/nike+white+tag.jpg?format=750w",
    "description": "Vintage Nike Swoosh Strapback. This one is a classic tan hat. But what makes it special is the large embroidered green and orange Swoosh. It does have another nice detail, a black and red Swoosh logo on back."
},
{
    "name": "Vintage New York City 2000 T Shirt",
    "url": "https://www.rootsbk.net/pop-culture/vintage-new-york-city-2000-t-shirt-size-l",
    "price": "35.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625164529464-A5EJZDADVQ6C4F1K9S4E/2000+nyc+shirt+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625164741906-QFVMSP7H73851QUQRGR5/2000+nyc+graphic+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625164640349-OPOBMHAB4955EOEGZ7PY/sleeve+marks+.jpg?format=750w",
    "description": "Vintage New York City 2000 t shirt. On front is a colorful skyline of NYC in 2000. It’s strange they didn’t use the World Trade Center in the logo since it was still up. Either way this one is flawed but very wearable."
},
{
    "name": "Vintage Nike Swoosh Orange T Shirt NWT",
    "url": "https://www.rootsbk.net/nike-t-shirts/vintage-nike-swoosh-orange-t-shirt-size-xl-nwt",
    "price": "35.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625159075453-9IPA8IS6J3DKLUJXY8EQ/Nike+Orange+Swoosh+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625159249831-O0GFFSL7DI0D7NNKR36C/orange+swoosh+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625159075453-9IPA8IS6J3DKLUJXY8EQ/Nike+Orange+Swoosh+tee.jpg?format=100w",
    "description": "Length 29 inches; Width 22 inches; Sleeve 9 inches. Vintage 90s Nike Swoosh orange t shirt. This is an orange t with an embroidered Swoosh in a monochromatic orange, as well."
},
{
    "name": "Vintage Hanes Earth T Shirt",
    "url": "https://www.rootsbk.net/pop-culture/vintage-hanes-earth-t-shirt-size-l",
    "price": "45.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625157777457-UDBAICBVW9JGZCLDLRR4/Hanes+world+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625158322640-1D0MWX40Y1QLHOV15R5C/back+of+Hanes+shirt+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625158401776-U7S2L4RAJ8GB8R348TIN/just+wait+till+we+get+out+hanes+on+you+.jpg?format=1000w",
    "description": "Vintage Hanes Earth T Shirt. On front is a colorful graphic of hands touching the Earth. On back is says Just Wait’ll we get our Hanes on you. It’s a 90s single stitch promo item in good shape."
},
{
    "name": "Vintage Vibe Magazine Erykah Badu August 1997 Cover Issue",
    "url": "https://www.rootsbk.net/magazines-books/vintage-vibe-magazine-erykah-badu-august-1997-cover-issue",
    "price": "30.00",
    "size": "OS",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625156031703-YVK9QQQ9BUMZOJSPR1X4/erykah+badu+vibe+magazine+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625156620879-LPBYKXYWUKTZBYYEPO92/tommy+aaliyah+ad.jpg?format=1000w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625156244065-6RY23GJ4P1Q44ZW1UKE1/erykah+picture+.jpg?format=750w",
    "description": "Vintage Vibe Magazine Erykah Badu August 1997 Cover issue. This issue is filled with iconic ads with Aaliyah, Biggie, Kate Moss, and others."
},
{
    "name": "Vintage LL Bean 5 Panel Long Bill Royal Blue Hat",
    "url": "https://www.rootsbk.net/branded-hats/vintage-ll-bean-long-bill-royal-blue-hat",
    "price": "65.00",
    "size": "OS",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625155170724-MEQ13IR5ZNNTB7MDK8PK/LL+bean+long+bill+hat+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625155323263-ZVN7CFDHBJ9R7T8LGRIL/LL+bean+tag.jpg?format=1000w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625155326853-BB825F5J7ZBOI016DKM3/inside+of+LL+Bean+hat.jpg?format=750w",
    "description": "Vintage LL Bean 5 panel Long Bill Royal Blue Hat. This one is A traditional nylon blue 5 panel with long bill. The logo on front is embroidered in yellow. The size is XL but i wear a 7 1/8 and it fits me well, i think up 7 3/8 would work. Anything after that it would be too small."
},
{
    "name": "Vintage Nike Rhythm Motion Energy T Shirt NWT",
    "url": "https://www.rootsbk.net/nike-t-shirts/vintage-nike-rhythm-motion-energy-t-shirt-size-xl-nwt",
    "price": "40.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1590985772513-SFWOJ8W4F0NH2L293800/2+Nike+flo+jo+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1590985344542-8M2C58DEKUIECGLNEBIC/vintage+nike+tee.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1570816794675-NYYZW2R0BGTINOUFO3NV/vintage+nike+rythm+motion+energy+t+shirt+.jpg?format=750w",
    "description": "Length 31 inches; Width 23 inches; Sleeve 9 inches. Vintage 90s Nike Rhythm Motion Energy t shirt. So the graphic on back I believe is a silhouette of Florence Griffith Joyner also known as Flo Jo. If it is its an even more interesting tee then what we have it priced at. Flo Jo in the 80s was like the Usain Bolt of our time. She broke world records and was a star. Sadly she died way to young at the age of 38 in 1998. If anyone has anymore info if this is Flo Jo please let me know."
},
{
    "name": "Vintage Nike Just Do It Navy / Red T Shirt NWT",
    "url": "https://www.rootsbk.net/nike-t-shirts/vintage-nike-just-do-it-navy-red-t-shirt-size-xl-nwt",
    "price": "40.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1575326859439-3Z1Y28TCEGB5QY1MJWG6/back+of+Nike+Just+Do+it+tee+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1574360153757-WGUZNIDP8M4AD98L6QRX/front+of+nike+90s+just+do+it+t+shirt+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625154671702-5K3VDRR0CC69RA6ASIMG/nike+white+tag.jpg?format=750w",
    "description": "Made in the USA"
},
{
    "name": "Vintage Nike Big Swoosh T Shirt NWT",
    "url": "https://www.rootsbk.net/nike-t-shirts/vintage-nike-big-swoosh-t-shirt-size-xl-nwt",
    "price": "40.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625149287440-L6TT9PE8D42YD6RYMDSL/Vintage%2BNike%2BSwoosh%2Btee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1610126328289-FHYQKG97PDLSZT4CN46W/Nike+Swoosh+tee.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625149287440-L6TT9PE8D42YD6RYMDSL/Vintage%2BNike%2BSwoosh%2Btee.jpg?format=100w",
    "description": "Vintage Nike Big Swoosh T Shirt. On front is a big Swoosh in royal blue and black. Its on a white tee with white 90s tag."
},
{
    "name": "Vintage New Era New York Knicks Fitted Hat NWT",
    "url": "https://www.rootsbk.net/vintage-hats/vintage-new-era-new-york-knicks-fitted-hat-size-7-14-nwt",
    "price": "65.00",
    "size": "7 1/4",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625090181782-MAKQVPKKR9GH8L3VUX7D/vintage+new+era+knicks+hat.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625091976589-5FF5C26OY46HG1SETT5S/new+era+knicks+hat.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625092015545-YUNF1BQCNUJQJ2NEBB94/inside+of+Knicks+.jpg?format=750w",
    "description": "Vintage New Era New York Knicks Fitted Hat. The New York Knicks at were time a top tier team in the NBA. So with that came a lot of gear like this one. It has the embossed logo on a pinwheel design."

},
{
    "name": "Vintage Led Zeppelin T Shirt",
    "url": "https://www.rootsbk.net/rock/vintage-led-zeppelin-t-shirt-size-xl-fits-smaller",
    "price": "40.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625098453381-FHPEB7HL35IYYLCVO4F1/front+of+led+zeplin+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625098897567-NP9JCFYKYFKWBJT3BZ2E/back+of+led+zeppeln+tee.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625098852824-XW05R4MIO6NE2AUMFP61/bootleg+tag.jpg?format=750w",
    "description": "Vintage Led Zeppelin t shirt. Led Zeppelin a band thats heyday was the 70s is known one of the best Rock Bands ever. This tee is A early 00s bootleg and double sided."
},
{
    "name": "Vintage Nike Big Logo Red / Black Bathing Suit NWT",
    "url": "https://www.rootsbk.net/shorts-and-trunks/vintage-nike-big-logo-red-black-bathing-suit-size-l-nwt",
    "price": "65.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1563908402378-YKMW374DDI6B84E002HC/vintage+90s+Nike+red+black+swim+trunks+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1563908688127-0KLUA6E9828YAQACND3L/front+of+nike+swim+trunks+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1563909095625-LGLBO8UV2B7ASKPWRTP8/nike+white+tag+.jpg?format=750w",
    "description": "Vintage Nike Red / Black Bathing Suit (Size L) NWT. The first picture is actually the back and the second is the front. The back is the best part of the design though with the classic 90s style of logo. The front has the same logo but much smaller. These have never been worn and come with original store tags. they have side pockets and mesh lining. They double as great pair of shorts too."
},
{
    "name": "Vintage NYC MTA Metro Card \"Kate Moss Ad\"",
    "url": "https://www.rootsbk.net/miscellaneous/vintage-nyc-mta-metro-card-kate-moss-ad",
    "price": "25.00",
    "size": "NA",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625088698727-A7N2BW6U1UFB6URD9HPD/metro+card+kate+moss.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625088924152-P3PSWV0AK3DLC9ZSKEYN/back+of+Metro+card.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625088698727-A7N2BW6U1UFB6URD9HPD/metro+card+kate+moss.jpg?format=100w",
    "description": "Vintage NYC MTA Metro Card of Kate Moss. Calvin Klein loved using Kate Moss in ads in the 90s and we’re glad he did. This is an original late 90s issued Metro card with a CK One advertisement on back which happen to feature Kate."
},
{
    "name": "Vintage Bootleg Scarface DMX T Shirt NWOT",
    "url": "https://www.rootsbk.net/pop-culture/vintage-bootleg-scarface-dmx-t-shirt-size-xxl-nwot",
    "price": "98.00",
    "size": "XXL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625086537765-B3YQN258LHVTWAPQCU1W/2+scarface+x+DMX+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625086642323-H2FDQUDRWPNNELFSNJSQ/scarface+dmx+close+up+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625086645112-IF92Z6NOD9RGM19WQ68Z/bootleg+tag+.jpg?format=1000w",
    "description": "Length 34 inches; Pit to Pit 28 inches; Sleeve 10 inches. Vintage Bootleg Scarface DMX T Shirt. On front is graphic of Tony Montana and DMX. Im not sure why they chose to put these two together but i’m glad they did. The shirt does have some color bleeding but never been worn."
},
{
    "name": "Vintage Mad Hatters Gore-Tex 2000 Slopes & Snowmaking Seminar Snapback",
    "url": "https://www.rootsbk.net/branded-hats/vintage-mad-hatters-2000-slopes-snowmaking-seminar-snapback",
    "price": "65.00",
    "size": "OS",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625080897331-IFQG180EKW5DTP4O77YY/MAD+HATTERS+GORE+HAT.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625082167503-2O720RTO7IGEWGLLLCE0/inside+of+gore+hat+blk.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625082171432-4J4TD5BYQNQJPTVG7ZYR/mad+hatters+tag.jpg?format=750w",
    "description": "Vintage Mad Hatters 2000 Slopes & Snowmaking Seminar Snapback. I wish i went to this Snow seminar back in the late 90s early 00s just to get the hat. This one has a fully embroidered logo on a Gore-Tex hat."
},
{
    "name": "Reebok DMX Run Black / Silver / White / 3M DS",
    "url": "https://www.rootsbk.net/nike/reebok-dmx-run-black-silver-white-3m-size-95-ds",
    "price": "125.00",
    "size": "9.5",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625078174338-38WOKRG0DQ23R55YSCMS/reebok+DMX.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625079449528-4O0BX2YKZT291J49RJ9R/side+of+RBK+.jpg?format=1000w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625079454932-6WP34PZJPVO0U25PZ9FR/front+of+rbk+.jpg?format=750w",
    "description": "Released in 1998. Reebok DMX Run black, silver, white, and 3M. The Reebok DMX line is probably my favorite besides anything Nike has done. They all have unique designs with plenty of materials like this one. This late 90s version is one of there best, especially with all that 3M trim. Due to age we cannot promise any amount of wear."
},
{
    "name": "Patagonia Pataloha Hemp Button Down Shirt",
    "url": "https://www.rootsbk.net/button-downs/patagonia-patahola-hemp-button-down-shirt-size-l",
    "price": "45.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625071818692-G8A14RI7D9BL218N5XCS/patagonia+button+down+shirt+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625072425202-UJNPTKJE5L99APT8TDCE/2+patagonia+back+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625071882872-FFL5L6I1G2PSE62LOS7U/pataloha+tag.jpg?format=750w",
    "description": "Patagonia Pataloha Hemp button down shirt. This one is Patagonia not some phony knock off. Yes they had a Pataloha collection which features Hawaiian and other prints. This one is thin and made of lightweight hemp. The print is navy blue on a white shirt, with a fishermen’s feel to it."
},
{
    "name": "Vintage The North Face Crimson Supplex Hat NWT",
    "url": "https://www.rootsbk.net/branded-hats/vintage-the-north-face-crimson-nylon-hat-nwt",
    "price": "65.00",
    "size": "OS",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625013497931-8GS6946HV00BK5ZW03I1/tnf+supplex+red+hat.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625013790069-FO13NBAF0WSZZSH6HQTF/supplex+tag+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625013791120-3WQ6KD2D44CSLANS9IER/back+of+tnf+hat+.jpg?format=750w",
    "description": "Vintage The North Face Crimson and blue Nylon hat.  This one is all crimson with a navy embroidered logo on front.   Lightweight nylon with 6 vents around the hat.  This is brand new never worn with original North Face tag."
},
{
    "name": "Women's Nike Terra Triax Alligator / Emerald DS",
    "url": "https://www.rootsbk.net/deadstock-womens-footwear/nike-terra-triax",
    "price": "90.00",
    "size": "9",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1488683139344-HLW9RRW6E4S5J1BTUS1J/Vintage+Nike+Terra+Triax+green+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1488683477038-8UJ6ZT39VSUJQ6FK83BT/DSC_0346.JPG?format=1000w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1488683470898-XNXK7AB7WGQE2N70Z9QT/DSC_0342.JPG?format=1000w",
    "description": "Will need to be re-glued if worn eventually"
},
{
    "name": "Vintage Reebok Shaq 32 Black / Blue T Shirt NWT",
    "url": "https://www.rootsbk.net/branded-t-shirts/vintage-reebok-shaq-32-black-blue-t-shirt-size-l-nwt",
    "price": "35.00",
    "size": "M",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1581649679602-CUK3CNION0ASE1XFKVD1/90s+shaq+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1581617020422-5BYEINE3BOKQ8ZREFK1U/shaq+32+magic+tee+close+up.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624925362764-R1EC6XU9DNIN4DQGP3RU/reebok+tag.jpg?format=750w",
    "description": "Length 28 inches; Pit to Pit 19 inches; Sleeve 8 inches"
},
{
    "name": "Vintage Reebok Shaq Black / Blue Jersey NWT",
    "url": "https://www.rootsbk.net/jerseys/vintage-reebok-shaq-black-blue-jersey-size-l-nwt",
    "price": "65.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624924526782-652561COIQXRXRB8C85Y/reebok+shaq+jersey.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624925005905-GPYE9FIX3ZL4V3EGW2KA/back+of+Shaq+jersey.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624925045828-Y1LCOZS9LEDCPR8E8J8L/shaq+tag.jpg?format=750w",
    "description": "Vintage Reebok Shaq Black / Blue Jersey. This one is a 90s Reebok fashion jersey in the Orlando Magic colors. It’s made of a lightweight thin mesh and has sewn on blue and grey trim on the sides. This is an original 90s item."
},
{
    "name": "Nike Vandal Low Varsity Red / Orange Blaze DS",
    "url": "https://www.rootsbk.net/nike/nike-vandal-low-varsity-red-orange-blaze-size-9-ds",
    "price": "115.00",
    "size": "9",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624913443097-M0L98I8X45NMAOS6N5U5/vandal+low+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624913801703-UWU8N29CEVXO5EAF529D/side+of+nike+vandal+.jpg?format=1000w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624913811950-B1OMWTTQERT4OZCFV4Y2/front+of+nike+vandal+.jpg?format=750w",
    "description": "Pair is slightly yellow due to age"
},
{
    "name": "Vintage BMW White / Yellow Snapback",
    "url": "https://www.rootsbk.net/vintage-hats/vintage-bmw-white-yellow-snapback",
    "price": "60.00",
    "size": "OS",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624914820364-CZW8OG10A7GKRJUCUQY1/BMW+hat+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624914905482-ZNLRETOLKIBYIURA1XWZ/back+of+BMW+hat.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1604780850899-0OEHUEIZPUGZBC54NOIZ/inside+of+bmw+hat+.jpg?format=750w",
    "description": "Vintage BMW White and Yellow Snapback. This is a 90s BMW hat with yellow embroidered logo on front. and rope on brim. Its in good shape and fits all sizes."
},
{
    "name": "Vintage United Colors Of Benetton Crew Neck Sweatshirt",
    "url": "https://www.rootsbk.net/hoodies/vintage-united-colors-of-benetton",
    "price": "45.00",
    "size": "S",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624908206442-6BNOWFZZYHK8Z2SAUQXT/front+of+benetton+sweatshirt+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624908605966-MPB5G4KLUKJMPIMC9R86/back+of+Bentton+shirt.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624908267170-AV9ELMHF301M66VYTWCF/small+50+50+tag.jpg?format=750w",
    "description": "Vintage 80s United Colors Of Benetton crew neck. This one is a soft light cotton shirt with traditional colorful logo. The crew is white with a grey pattern through the middle. It is an 80s small so it runs very small, refer to measurements. The stains on back are near the left shoulder and are visible."
},
{
    "name": "Vintage Math Hurts All Over Print T Shirt",
    "url": "https://www.rootsbk.net/pop-culture/vintage-math-hurts-all-over-print-t-shirt-size-m",
    "price": "75.00",
    "size": "M",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624906250446-NZJZ7B55NBE0UFVXSJK7/math+hurts+vintage+t+shirt+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624906755051-0VPO58G3ZOHBUYDGECFI/back+of+einstein+shirt+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624906723860-JKQ1WBJJ5UY9TOFG3SCO/Einstein+shirt.jpg?format=750w",
    "description": "Vintage Math Hurts All Over Print t shirt. Through out the shirt is a double sided print of Math equations and Math leaders including Albert Einstein. Its on A late 90s early 00s Gildan tag."
},
{
    "name": "Vintage Nike Tiger Woods Precision Control White T Shirt NWT",
    "url": "https://www.rootsbk.net/nike-t-shirts/vintage-nike-tiger-woods-precision-control-white-t-shirt-size-xl-nwt",
    "price": "65.00",
    "size": "XXL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1620139340714-CJMURL9CKVZ3419SS17X/4+tiger+woods+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1620139599484-MBVJDKWXZ0I27W6DMVKP/back+of+Tiger+tee.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1583634176127-HU4P6EOQTVPC28VGGCT6/nike+tiger+woods+tag.jpg?format=750w",
    "description": "Vintage 90s Nike Tiger Woods Precision Control Power Tenacity Graphic T Shirt. Tiger Woods items like this one are not something you see every day. Tiger is arguably the best golfer in the history of Golf who took the world by storm in the late 90s. This piece is from that time period, it has colorful graphics on each side. The t shirt is brand new and never worn."
},
{
    "name": "Nike Beach Volleyball Arrows Yellow T-Shirt NWT",
    "url": "https://www.rootsbk.net/nike-t-shirts/nike-beach-volleyball-arrows-yellow-t-shirt-size-xl-nwt",
    "price": "75.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1562906024113-EZ694CZSA9PN6A0T0MNQ/vintage+Nike+Volley+ball+t+shirt+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1562906027937-WWW5HC8SHBOL73PBWBRE/back+of+Volley+ball+off+white+logo+t+shirt+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1563036507982-9Y4XDTBNLQAA9BACQC9M/nike+volley+t+shirt+.jpg?format=750w",
    "description": "Nike Beach Volleyball Arrows Yellow T-Shirt. NWT. This tee is simple in a nice canyon gold colorway with a contrasting charcoal grey accent. It features an interlocking set of arrows that reminds us of the directional pad on late 80s and 90s video game controllers. It represents the ability that beach volleyball players dig, dive and hustle to keep the game going. The back of the neck features a Nike Beach Volleyball spell out. Nike Beach Volleyball category was short lived and it’s extremely hard to find these days, especially in new with tags condition"
},
{
    "name": "Vintage Nike Swoosh White / Purple T Shirt NWT",
    "url": "https://www.rootsbk.net/nike-t-shirts/purpleswooshtee",
    "price": "35.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1623360403039-VA0BHOB1ZA2ZY2LI2G8I/2+swoosh+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1623360463016-GB8XA0L64IQAHC5YCJ14/purple+swoosh.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1623360403039-VA0BHOB1ZA2ZY2LI2G8I/2+swoosh+tee.jpg?format=100w",
    "description": "Vintage Nike Swoosh White and purple t shirt. On front is a small embroidered purple Swoosh and its on a white basic tee."
},
{
    "name": "Vintage America's Cup 1995 The Women's Team T Shirt",
    "url": "https://www.rootsbk.net/pop-culture/vintage-americas-cup-1995-the-womens-team-t-shirt-size-m",
    "price": "30.00",
    "size": "M",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624837126506-JUZ6UA460PJUTCSUYYQB/3+americas+cup+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624837451728-UHG9BCS2GASOTFN39UJS/front+of+americas+cup+tee.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624837454219-W29PTZS7T0UT0S5TOO2B/womens+team+logo.jpg?format=750w",
    "description": "Vintage America’s Cup 1995 Women’s Team T Shirt. The America’s Cup, is a well known Yachting race thats always sponsored by high end brands. This one is a promo tee for the 1995 Women’s American team."
},
{
    "name": "Vintage Alpine Design Gore-Tex Black Pants",
    "url": "https://www.rootsbk.net/pants/vintage-alpine-design-gore-tex-black-pants-size-l",
    "price": "95.00",
    "size": "M",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1608843731803-AX47EC82VPG18MOZYVYY/Gore-tex+alpine+design+pants+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1608844057323-TSDAIU86SEUTO46G6JXX/gore+logo+and+clip+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1608844056236-97AKVRJ9P1FTJKG9QXIX/front+of+Gore+pants+.jpg?format=750w",
    "description": "Vintage Alpine Design Gore-Tex Black pants. Alpine Design branded items are pretty much Gore-tex branded items. What I like is they didnt use too much branding, letting the Gore branding overpower theres. These are lightly used and ready to wear."
},
{
    "name": "Vintage New York City Mini Marathon 2000 Central Park T Shirt",
    "url": "https://www.rootsbk.net/pop-culture/vintage-new-york",
    "price": "30.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624828180623-ZACBL9BQJAF0QIBDJ6ZA/nyc+mini+marthon+shirt+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624833541477-DC0I70MMC3N0FU1I0ECZ/nyc+tag.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624833544097-EH3YBO2J2AQ3RNM9WRTX/mini+close+up.jpg?format=750w",
    "description": "Vintage New York City Mini Marathon 2000 Central Park t shirt. Besides the colorful graphic on front, the back is pretty interesting too. The Sponsors for this marathon were Road Runners club and Tavern On The Green, which is a restaurant located at Central Park."
},
{
    "name": "Vintage Mad Hatters Gore-Tex 2001 Slope Grooming & Snowmaking Seminar Snapback",
    "url": "https://www.rootsbk.net/branded-hats/vintage-2001-mad-hatters-gore-tex-slope-grooming-snowmaking-seminar-snapback",
    "price": "65.00",
    "size": "OS",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625081342479-JIAEIEX8VD5UQAWT8I8O/grooming+gore+hat.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625081878021-O475EF65MDXRYIFKMFE6/inside+of+gore+hat.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625081873976-II68JM3AMU0A3RUYIFEV/mad+hatters+tag+blue+.jpg?format=750w",
    "description": "Vintage Mad Hatters Gore-Tex 2001 Slope Grooming & Snowmaking Seminar. I wish i went to this Snow seminar back in the late 90s early 00s just to get the hat. This one has a fully embroidered logo on a Gore-Tex hat."
},
{
    "name": "Vintage Liquid Blue Tiger Double Sided T Shirt",
    "url": "https://www.rootsbk.net/pop-culture/vintage-liquid-blue-tiger-double-sided-t-shirt-size-l",
    "price": "50.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624826339078-HZWJBY18IIHDEXU7WWFS/liquid+blue+tiger+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624826558487-A09HYUN8XASW2UFYDX1I/back+of+tiger+shirt+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624826398672-9H1K58JBZB7AUIWW2BR6/liquid+blue+logo.jpg?format=750w",
    "description": "Vintage 1998 Liquid Blue Tiger Double Sided t shirt. Liquid blue shirts are always well detailed and in great colors. This one is a great example of that. It has a well detailed tiger on front and on back, The shirts colors are black, purple, white, and blue and its even better in person."
},
{
    "name": "Vintage 3D Emblem Smith & Wesson Sweatshirt",
    "url": "https://www.rootsbk.net/hoodies/vintage-3d-emblem-smith-wesson-sweatshirt-size-l",
    "price": "250.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624823517625-N5SDV64GOFS2HH1ADL4R/smith+and+wesson+3d+emblem+shirt+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624823799353-X6IR5LJVHMOR9IGW05WO/3D+emblem+tag+1992+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624823798892-ZLJM8G9S3OAD2WVJAPT4/3d+emblem+tag.jpg?format=750w",
    "description": "Vintage 3D Emblem Smith & Wesson Sweatshirt. This one is a hard to find in this size full print 3D Emblem. It’s an original 1992 Officially licensed item."
},
{
    "name": "Vintage Morehouse College Physical Education T Shirt",
    "url": "https://www.rootsbk.net/pop-culture/vintage-morehouse-college-physical-education-t-shirt-size-xxl",
    "price": "50.00",
    "size": "XXL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624825609102-ROTQZYXVNT64X9YF4PXG/2%2Bmorehouse%2Btee.jpeg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624823203600-KWS1AVD4Q3OCZL4782N3/morehouse+PE+tee.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624823205989-4LBCL0G8H2CHT1OBJOA5/russell+tag.jpg?format=1000w",
    "description": "Length 29 inches; Pit to Pit 26 inches; Sleeve 9 inches. Vintage Morehouse College Physical Education t shirt. In college, like any other era of schooling, you will have PE. This shirt is something a Morehouse student would have worn in the 90s during gym class. Its on a Russell Athletic single stitch shirt."
},
{
    "name": "Vintage Salvador Dali Museum Eye Of Time T Shirt NWT",
    "url": "https://www.rootsbk.net/pop-culture/vintage-salvador-dali-museum-eye-of-time-t-shirt-size-l-nwt",
    "price": "75.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624821598274-6HL4C6EVC9YB8BHUYP7G/eye+of+time+dali+shirt+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624822046171-A6DON0RMUY1TQG56KD5Y/back+of+Dali+tee.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624821797388-RO61E9OWPINIWHV6FLBL/dali+date+.jpg?format=750w",
    "description": "Vintage Salvador Dali Museum T Shirt. On front is A graphic of Dali’s Eye Of Time. Its on a black t shirt with a little thicker collar then normal. Its brand new with tags and never used on an Anvil shirt."
},
{
    "name": "Vintage Nike Block Letter T Shirt White / Navy NWT",
    "url": "https://www.rootsbk.net/nike-t-shirts/vintage-nike-block-letter-t-shirt-white-navy-size-l-nwt",
    "price": "65.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625062712683-45Y9JMCJV1TN4IVIXHB5/Nike+block+letter+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625062915253-IN42SBYZOTMQ64W8Q3MB/front+of+Nike+block+letter+shirt+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1625062951760-Y9NEYRFFFB3L3SINLU8Z/nike+swoosh+shirt+.jpg?format=750w",
    "description": "Vintage 90s Nike Block Letter white and navy T Shirt. The Back of This one is whats special. It has a large Nike block lettering in white and navy blue. The front is basic with a small blue Swoosh. Made In the USA"
},
{
    "name": "Vintage Polo Ralph Lauren PRL Outfitters Strapback",
    "url": "https://www.rootsbk.net/branded-hats/vintage-polo-ralph-lauren-prl-outfitters-strapback",
    "price": "50.00",
    "size": "OS",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624917148505-90PRW01POFI82ZNZF5W7/PRL+Outfitters+rl+hat.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624917358572-S7NZU668KCPNMYBEC4DC/inside+of+PRL+hat.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624917362262-UTX6ZFQTLBNXVOV1W2S2/polo+RL+Tag.jpg?format=750w",
    "description": "Vintage Polo Ralph Lauren PRL Outfitters Strapback. This one is an olive cotton hat with red and tan PRL Outfitters Fish & Game Club patch. The back has another embroidered logo. It does have some distressing but that just part of the design."
},
{
    "name": "Vintage Kacy Save The Children T Shirt",
    "url": "https://www.rootsbk.net/pop-culture/vintage-kacy-save-the-children-t-shirt-size-xl",
    "price": "150.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624658187301-KGH01TIVO8OQF5DMIJL0/2+save+the+children+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624658674162-5UTBSMJ7G4ILFET2TPGO/back+of+Kay+tee.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624658670109-JSAXF9XPTTJVK9C3LTPI/kacy+back+logo+.jpg?format=750w",
    "description": "Length 26 inches; Pit to Pit 24 inches; Sleeve 8 inches"
},
{
    "name": "Vintage Bootleg Tommy Hilfiger Denim Shorts",
    "url": "https://www.rootsbk.net/shorts-and-trunks/vintage-bootleg-tommy-hilfiger-denim-shorts-size-36",
    "price": "35.00",
    "size": "36",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624663819491-6RUMEZFK814ZFZGNAWO6/2+boot+tommy+shorts+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624664057709-AJNL3BZ1N4BT23BDBWNE/front+of+tommy+boot+shorts.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624663864900-5JE6Z13DW3EQWHENE6RI/boot+tommy+logo+.jpg?format=750w",
    "description": "Vintage Bootleg Tommy Hilfiger Denim Shorts. Tommy ruled mid to late 90s streetwear so with that came tons of bootlegs. Back then if you wore a bootleg you would’ve gotten made fun of. Funny how times have changed."
},
{
    "name": "Baby Nike Diamond Turf 2 White / Black / Red \"Og Release\"",
    "url": "https://www.rootsbk.net/dead-stock-grade-school-footwear/baby-nike-diamond-turf-2-white-black-red-size-4",
    "price": "80.00",
    "size": "4",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624661641479-K4I9JH3ILVHCZ4778TSE/Nike+Deion+Sanders+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624662021519-9Y6P6N7BDUQKAKGVBMQX/side+of+Nike+diamond+turf+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624662035979-FO4S7QUD1I8QHZ93L0VH/front+of+nike+Diamond+turf+.jpg?format=750w",
    "description": "Baby Nike Diamond Turf 2 White / Black / Red. Deion Sanders has some of Nike’s best signature models and this one up there with any athletes pairs. This babies pair is original from 1994 and never been worn!"
},
{
    "name": "Vintage Patagonia Organic Cotton Earth Off White T Shirt",
    "url": "https://www.rootsbk.net/branded-t-shirts/vintage-patagonia-organic-cotton-earth-t-shirt-size-l",
    "price": "75.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624648091379-MQ15SU8X6SD0BU0NA1JE/2+patagonia+organic+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624648227027-54Z003SUMLGRTNYQG5GK/earth+logo.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624648231111-ZLUDOG0AP30AAHRLZHHF/patagonia+tag.jpg?format=750w",
    "description": "Vintage Patagonia Organic Cotton Earth off white t shirt. On front is an earth logo with fruits and vegetables, knives and forks. Under that it says Healthy People Healthy Planet. Its all on A off white colored shirt."
},
{
    "name": "Nike Air Minot Midnight Navy / Taxi DS",
    "url": "https://www.rootsbk.net/nike/nike-air-minot-midnight-navy-taxi-size-13-ds",
    "price": "75.00",
    "size": "6",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1488324331360-BPL8UVTTO44E3XG1FICL/Nike%2BAir%2BMinot%2Bmidnight%2Bnavy%2Btaxi%2BDS%2Boriginal%2B1997%2B104100%2B471.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1486048057946-F4GOQ8QFIVWVCJSFDXCN/Nike+Minot+vintage+1997+.jpg?format=1000w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1486048257806-25OIYPBKUVTKASJY20PQ/bottom+of+Air+Minot+goretex.jpg?format=1500w",
    "description": "Released in 1997. Nike Air Minot Midnight navy and taxi.  Nike Air Minot Gore-Tex In Size 8.5 Released In 1997.   In 1997 Peter Fogg Designed One Of The Best Pairs In His Large Legacy.  The Pair was a Way Ahead Of Its Time.  It Uses ZOOM Air, Gore-Tex And 3M, Some Of Our Favorite Materials.  The Design And Use Of His Colors Are Just Perfection On A Boot.  The mix of colors and materials make this one of my favorites of all time.  "
},
{
    "name": "Vintage Nike Black / White Swoosh T Shirt NWT",
    "url": "https://www.rootsbk.net/nike-t-shirts/vintage-nike-black-white-swoosh-t-shirt-size-xl-nwt",
    "price": "35.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1582743314282-YUTNTMZMLF3DT8JB5WTD/vintage+nike+black+and+white+swoosh+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1582743835240-BMNB8F2RUT4220NRUT1U/nike+swoosh+logo+tee.jpg?format=750w",
    "imageURL3": "",
    "description": "Length 32 inches; Pit to Pit 25 inches; Sleeve 9 inches.Vintage 90s Nike Black and white Swoosh t shirt. On front is a small white embroidered Swoosh. Its on a black thick cotton 90s quality t shirt. This is an original 90s item with original tags."
},
{
    "name": "Vintage Nike Red Swoosh Shorts NWT",
    "url": "https://www.rootsbk.net/shorts-and-trunks/vintage-nike-red-swoosh-shorts-size-m-nwt",
    "price": "65.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1617843638326-K5K627W05IOBAX8ZD5F1/6+nike+red+shorts.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1617844089181-E5AUT17HQKT2RIC0Z7OL/back+of+Nike+red+shorts.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1617843554179-0O09E52ZTFTAPVVRLTKR/nike+grey+tag.jpg?format=750w",
    "description": "Length 18 inches; Waist laying flat 12 inches. Vintage Nike Red Swoosh Shorts. These are a red pair of khaki style of shorts. They have a drawstring, and embroidered red logo on front. Side pockets and a zippered back pocket."
},
{
    "name": "Vintage Nike Light Blue Swoosh Shorts NWT",
    "url": "https://www.rootsbk.net/shorts-and-trunks/vintage-nike-light-blue-swoosh-shorts-size-l-nwt",
    "price": "65.00",
    "size": "S",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1620257926678-G4IPBPT54C7TMWV49WNH/2+nike+light+blue+shorts.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1620258562258-RGUHRHVMWJGJMTTJZQ05/back+of+Nike+shorts+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1620258280170-EXYSZXCAF0AG3KN0TC3C/swoosh+logo.jpg?format=750w",
    "description": "Length 18 inches; Waist laying flat 12 inches"
},
{
    "name": "Vintage The North Face Grey Trail Shorts",
    "url": "https://www.rootsbk.net/shorts-and-trunks/vintage-the-north-face-grey-trail-shorts-size-xl",
    "price": "40.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624580862019-CYTGLGSO1I0PK0NFTLK8/3+tnf+shorts.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624580992517-GA4U3ESRPIA6GHFWRYDT/north+face+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624581209092-2PC6TZH9BG2I1WXA17AO/back+of+TNF+shorts+.jpg?format=750w",
    "description": "Vintage The North Face Grey Trail Shorts. When you think of The North Face, normally you think of winter gear. Well they made some nice shorts over the years too. This one has pockets all around and a thick belt buckle."
},
{
    "name": "Vintage Ecko Unltd Spittin 2001 T Shirt NWT",
    "url": "https://www.rootsbk.net/branded-t-shirts/vintage-ecko-unltd-spittin-2001-t-shirt-size-l-nwt",
    "price": "45.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624571360698-5SOHOW4Z8JHZVZBB9U9C/ecko+unltd+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624571638785-EVBQQGHFOQTIYH2VAYTL/back+of+ecko+tee.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624571640880-EAH3PM11NHXB59I1XT9Z/ecko+tag.jpg?format=750w",
    "description": "Vintage Ecko Unltd Spittin 2001 t shirt. In 2001, Ecko was one of the hottest brands out there. This tee is right from that era and never worn!"
},
{
    "name": "Vintage Fila Sport FS23 Pink / Blue Trail Shorts",
    "url": "https://www.rootsbk.net/shorts-and-trunks/vintage-fila-sport-fs23-pink-blue-trail-shorts-size-xl",
    "price": "58.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624563696652-J31FZY4PVGIJPYDIVEVL/fila+sport+shorts.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624563952087-2XM1MH3HWN29INKBAPNM/back+of+fila+shorts+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624564003460-QGK0ZN4MKN43IJR3WJBG/Fila+Sport+tag.jpg?format=750w",
    "description": "Vintage Fila Sport FS23 pink and blue trail shorts. Fila Sport to me is the best Fila line. This one is a well made pink pair of shorts with blue embroidered logo on front and mesh pocket on back. It has side pockets and the best detail a white thick belt."
},
{
    "name": "Vintage Fila Mind Bender Snapback",
    "url": "https://www.rootsbk.net/branded-hats/vintage-fila-mind-bender-hat",
    "price": "40.00",
    "size": "OS",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624561950358-XERX5GC0LLF4O0MDFB2C/flia+nylon+hat.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624562398068-B07086JEFSFU4Z7P78JV/fila+tag.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624562413638-TCQXPIUNAJCQR5VXMQ5U/inside+of+fila+hat.jpg?format=750w",
    "description": "Vintage 90s Fila Mind Bender hat. In 1995 Fila had one of the hottest and most popular silhouettes. Which was no easy feat with all that Nike was doing at the the time. You maybe thinking about the Grant Hill’s but there was another that was probably even more popular in New York City. It was the Fila Mind Bender, this hat goes perfectly with that silhouette. We have a pair in our office, we will put a picture up with them as soon as we find them."
},
{
    "name": "Kids Nike Air Force 1 Low Deep Burgundy / Red Earth / Aluminum Pink DS",
    "url": "https://www.rootsbk.net/dead-stock-grade-school-footwear/kids-nike-air-force-1-low-deep-burgundy-red-earth-aluminum-pink-size-5-ds",
    "price": "115.00",
    "size": "5",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624559572716-BI2TBZTHUSWULSHJF56Q/air+force+1+curdory+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624560080926-ISS9TJ9J64LSG81SODBL/side+of+nike+air+force+1+.jpg?format=1000w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624560091737-KRR512FGBNH3NGMZ9AZF/front++of+nike+af1+.jpg?format=750w",
    "description": "Released in 2008 (314219 661). Kids Nike Air Force 1 Low Deep Burgundy, Red Earth Aluminum. This one is a mix of materials and colors. It’s not a pair you will see everyday and not anything l’ve seen them do another time."
},
{
    "name": "Vintage Nike White / Grey Stitched Swoosh T Shirt NWT",
    "url": "https://www.rootsbk.net/nike-t-shirts/vintage-nike-grey-stitched-swoosh-t-shirt-size-l-nwt",
    "price": "35.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1578535083041-4N0IPYLO1ENBQRC7BLAO/2+nike+stitched+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1578507276203-PO0HMLZGOKYR4K3X73X2/stitched+Swoosh+logo+.jpg?format=1000w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624556204782-G13A1TTGCAM4QKE98VYV/nike+stitched+swoosh+shirt+.jpg?format=750w",
    "description": "Still in original packaging. Vintage 90s Nike white and grey stitched Swoosh t shirt. To the naked eye looks like just another Swoosh tee until you get a better look. The Swoosh looks like its stitched on but its not. Its a charcoal grey on a white cotton tee."
},
{
    "name": "Women's Vintage Tommy Hilfiger Est 1985 USA Flag Pants",
    "url": "https://www.rootsbk.net/pants/womens-vintage-tommy-hilfiger-est-1985-usa-flag-pants-size-womens-16",
    "price": "65.00",
    "size": "16",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624540334682-68R695TXEYZ8729S71XN/vintage+Tommy+jeans+flag.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624540769745-S28QYD68JWMCQ4QDOFX1/back+of+tommy+pants+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624540867570-CEIR89PM1A6GNYIPAZOQ/front+of+tommy+pants+.jpg?format=750w",
    "description": "Women’s Vintage Tommy Hilfiger Est 1985 USA Flag pants. These are a lightweight beige based pair. But what makes them special is the USA flag printed bottoms. Perfect for July 4th."
},
{
    "name": "Vintage Polo Sport Ralph Lauren Arrows Logo T Shirt",
    "url": "https://www.rootsbk.net/branded-t-shirts/vintage-polo-sport-ralph-lauren-arrows-logo-t-shirt-size-m",
    "price": "75.00",
    "size": "M",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624498541656-EDYE8CSXFPMNB41FIN7W/polo+sport+arrows+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624498189054-EN0AD7DWLNF2LOPOWHIL/polo+sport+arrows+logo+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624498209233-ZNHOUX87JKE3U7U50R4E/polo+sport+tag+.jpg?format=750w",
    "description": "Vintage Polo Sport Ralph Lauren Arrows logo t shirt. This one is made up of an arrows logo similar to the Nike Volley Ball logo and the Off White logo by Virgil. The shirt is an original item from the 90s and maybe was the influence for his logo. The shirt is heather grey with a charcoal grey logo."
},
{
    "name": "Polo Ralph Lauren Expedition Strapback",
    "url": "https://www.rootsbk.net/branded-hats/polo-expedition-hat",
    "price": "125.00",
    "size": "OS",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624480662730-6QTG3KUTX3UVJTYCEJ3L/polo+expedition+hat.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624481045698-827I5E493BTDJSROEYPY/inside+of+polo+expedition+hat.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624481053236-09TQZEZGFIODLDJJW6DZ/close+up+.jpg?format=750w",
    "description": "Polo Ralph Lauren Expedition Strapback. Now that all the 90s Polo stuff has been coming back out, the early - mid 00s items has become more desirable. The collection that goes with this hat is one of the most coveted of that era. The hat, is in good condition but has some what looks like sweat marks on the inside."
},
{
    "name": "Vintage Team USA 1996 Olympics T Shirt",
    "url": "https://www.rootsbk.net/pop-culture/vintage-team-usa-1996-olympics-t-shirt-size-xl",
    "price": "30.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624496286457-KVLNAMJ15XSHRDHI4RBX/2+olympics+tee.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624496595719-J0458KV2MT4AJBEASQ2B/back+of+team+usa+tee.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624496656304-846J3S3YZX28G7VF8PBH/hanes+tag.jpg?format=750w",
    "description": "Length 28 inches; Pit to Pit 23 inches; Sleeve 8. Vintage Team USA 1996 Olympics t shirt. This one is a double sided beauty. It does show its age, if you can live with flaws you will love this one."
},
{
    "name": "Vintage Bootleg Wu Tang Clan T Shirt",
    "url": "https://www.rootsbk.net/rock/wutangclanraptee",
    "price": "250.00",
    "size": "XXL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624452512773-N7US8OHYNJLNAPI7R0SQ/wu+wear+1995+shirt+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624452828961-4KMCGYCAE23RO7OPEE80/wu+wear+logo+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624452831018-XQR2MNYATELMC88RZOLG/sinlge+stitch+.jpg?format=750w",
    "description": "Length 28 inches; Pit to Pit 26 inches; Sleeve 9 1/2 inches. Vintage Bootleg Wu Tang Clan T Shirt. On front is a large Wu Tang yellow logo on a black single stitch t shirt. Its original from 1995 not a newer remake."
},
{
    "name": "Nike Zoom Wildhorse Green / Abyss / Volt DS",
    "url": "https://www.rootsbk.net/nike/nikezoomwildhorse",
    "price": "100.00",
    "size": "11",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624403674649-GH01PZ0XK2CCNFUU626J/nike+zoom+wildhorse+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624404336293-MXOHRO2H4A9MC3C3YXNW/side+of+nike+wildhorse+.jpg?format=1500w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624404340047-GM46AZNJUCZEZJ9UKN5I/front+of+nike+zoom+wildhorse+.jpg?format=750w",
    "description": "Released in 2013.Nike Zoom Wildhorse Green, Abyss, and Volt. The 2010s had a few under the radar silhouettes that will be gaining notoriety soon. The Wildhorse is one of them. It’s a lightweight, bright and has a zoom sole. It’s brand new never worn and fully wearable."
},
{
    "name": "Vintage Buenas Aires Argentina T Shirt",
    "url": "https://www.rootsbk.net/pop-culture/buenasairesargentinashirt",
    "price": "35.00",
    "size": "XL",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624402280519-D3SZVUMHK0OPE4L3I8GR/4+buenas+aires+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624402230543-J8KG619BJ85WG0SGJX2I/BA+tag.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624402280519-D3SZVUMHK0OPE4L3I8GR/4+buenas+aires+.jpg?format=100w",
    "description": "Vintage Buenas Aires Argentina T Shirt. On front is the Buenas Aires skyline with A dancing couple."
},
{
    "name": "Vintage Chaus Post Card Colorful Button Down Shirt",
    "url": "https://www.rootsbk.net/button-downs/postcardbuttondown",
    "price": "40.00",
    "size": "M",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624400864368-55YQVWARSVAYN34I8WFG/vintage+europe+button+down+shirt+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624401504506-IVIQPW4DGEAS7IJIXU3K/chaus+tag.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624401507747-69NO648UIX4ZN4X8LNIC/back+of+post+card+button+down+shirt+.jpg?format=750w",
    "description": "Vintage Chaus Post Card colorful button down shirt. Through out this shirt is colorful postcard like graphics with word like Wish You were Here and also European words like Arrivederci. The shirt is all red and very colorful."
},
{
    "name": "Vintage Tasmanian Devil Sweatshirt",
    "url": "https://www.rootsbk.net/hoodies/vintage-tasmanian-devil-sweatshirt-size-l-fits-smaller",
    "price": "40.00",
    "size": "L",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624398365897-X5O4SP99HSQ5JGPN0VYC/vintage+Taz+sweatsirt+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624398527141-JDDLSGCXHEEGLG031VXK/fruit+of+the+loom+tag.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624398365897-X5O4SP99HSQ5JGPN0VYC/vintage+Taz+sweatsirt+.jpg?format=100w",
    "description": "Length 26 inches; Pit to Pit 21 inches; Sleeve 22. Vintage Tasmanian Devil Sweatshirt. Taz was a popular character in the 90s which led to items like this early 90s crewneck."
},
{
    "name": "Nike Air Force 1 Black / Black / Volt DS",
    "url": "https://www.rootsbk.net/nike/nike-air-force-1-black-black-volt-size-115-ds",
    "price": "150.00",
    "size": "11.5",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624396912660-GCH8TW017CLBH2OHWFVR/air+force+1+blk+gum+volt+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624397701324-DFJBWPN388K4APKK5VEU/side+of+nike+Af1.jpg?format=1000w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624397704002-LVSFRN2NK0BEUC4C167E/front+of+nike+af1+low.jpg?format=750w",
    "description": "Released in 2007. Nike Air Force 1 Black, Black / Volt. In 2007, The Air Force 1 had many many different colorways. This one was an under the radar pair that did sell pretty well back then. It’s got a mix of black leather and suede, volt tongue and Swoosh. But my favorite detail is the gum sole."
},
{
    "name": "Vintage Vibe Magazine Usher June / July 1998 Cover Issue",
    "url": "https://www.rootsbk.net/magazines-books/ushervibemagazine",
    "price": "20.00",
    "size": "NA",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624395319824-KS3ZED06PNUMVOERJELQ/Usher+Vibe+Magazne+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624395548840-X9N6545RT0IQYVDRXQ10/usher+magazine+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624395549050-X5PZ2RE00W5S8WCQ8GMZ/usher+magazine+pic+2+.jpg?format=750w",
    "description": "Lightly used Vintage Vibe Magazine Usher June / July 1998 Cover Issue. Vibe magazine was an important magazine in the 90s and only featured the biggest stars. Usher, early in his career showed up on this hard to find issue."
},
{
    "name": "Vintage Chanel #5 Perfume Pens Set",
    "url": "https://www.rootsbk.net/miscellaneous/vintage-chanel-perfume-pens-set",
    "price": "45.00",
    "size": "NA",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624324405758-LP177P9HZ347CEJHWM88/chanel+pen+set+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624324535717-OK20L83ZKD1D3MLD6A4V/chanel+case+.jpg?format=1000w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624324679222-ZAQIE0JOZBD9Q649DN5F/back+of+Chanel+case.jpg?format=1000w",
    "description": "Vintage Chanel #5 Perfume Pens set. The pens are a true vintage set and they still write. They did smell like perfume at one time but not anymore. They seem to be in unused shape."
},
{
    "name": "Vintage WWF The Rock Foam Hand Sign",
    "url": "https://www.rootsbk.net/miscellaneous/vintage-wwf-the-rock-foam-hand-sign",
    "price": "45.00",
    "size": "NA",
    "imageURL1": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624228628878-5TLSBVGBQMNLJEDYRXPQ/the+rock+foam+finger+.jpg?format=750w",
    "imageURL2": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624229302163-LV5BFDWPN9NPZMW3QBD5/back+of+the+rock+foam+hand+.jpg?format=750w",
    "imageURL3": "https://images.squarespace-cdn.com/content/v1/549f12bae4b05ce481f174ec/1624229386686-TYOD7YOC6ABG986V3BRD/dated+1999.jpg?format=750w",
    "description": "Length 17 inches at it its highest point; 22 inches width from ear to ear. Vintage WWF The Rock Hand Sign. You know when you go to mainly A sporting event and they have those foam fingers saying number 1 fan and things like that. Well thats what this is but shaped as The Rock. It was most likely sold at a Wrestling arena. Your hole hand fits in the space under the chin. Fits adult sized hand."
}
]

products.forEach(function(obj) {
    db.collection("products").add({
        name: obj.name,
        url: obj.url,
        price: obj.price,
        size: obj.size,
        imageURL1: obj.imageURL1,
        imageURL2: obj.imageURL2,
        imageURL3: obj.imageURL3,
        description: obj.description
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});