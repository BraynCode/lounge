import { MenuSection } from '../types/menu';

const COCKTAILS_DESCRIPTIONS: Record<string, string> = {
  "Smoking Old Fashioned": "Classic whisky cocktail infused with aromatic smoke and bitters",
  "Whiskey Sour": "Smooth whisky balanced with fresh citrus and a hint of sweetness",
  "Mint Julep": "Refreshing blend of whisky, mint, and crushed ice",
  "Moscow Mule": "Crisp vodka cocktail with ginger beer and lime",
  "Texas Tear": "Bold and smoky house blend with a strong finish",
  "White Russian": "Creamy mix of vodka, coffee liqueur, and milk",
  "Montana": "Signature house cocktail with a smooth, refreshing twist",
  "Long Island Iced Tea": "Strong blend of multiple spirits",
  "Sex on the Beach": "Sweet fruity cocktail with citrus",
  "Piña Colada": "Creamy coconut and pineapple mix",
  "Margarita": "Tequila with fresh citrus kick",
  "Tequila Sunrise": "Sweet citrus with smooth finish",
  "Rixos Peach Margarita": "Peach-infused citrus cocktail",
  "Rixos Mango Margarita": "Mango twist on classic margarita",
  "Strawberry Daiquiri": "Fresh strawberry rum blend",
  "Rixos Pineapple Daiquiri": "Tropical pineapple cocktail",
  "Rixos Mango Daiquiri": "Sweet mango rum mix",
  "Strawberry Mojito": "Minty fresh with strawberry flavor",
  "Electrified Long Island": "Stronger version of classic mix",
  "Rixos Alexandra": "Signature house cocktail",
  "Rixos Montana": "Bold refreshing house mix",
  "Rixos Cosmopolitan": "Smooth citrus vodka cocktail",
  "Rixos Brambles": "Berry-infused refreshing drink",
  "Rixos Lagoons": "Cool tropical blend",
  "Rixos BJ": "Sweet creamy layered shot"
};

const COCKTAIL_NAMES = Object.keys(COCKTAILS_DESCRIPTIONS);

const getCocktails = (price: string, prefix: string) => 
  COCKTAIL_NAMES.map((name, index) => ({
    id: `${prefix}-ck-${index}`,
    name,
    price,
    description: COCKTAILS_DESCRIPTIONS[name] || ""
  }));

export const LOUNGE_MENU: MenuSection = {
  title: "Lounge",
  categories: [
    {
      title: "Cognac / Brandy",
      items: [
        { id: "l-c1", name: "Hennessy XO (W/Gift Box)", price: "400,000", description: "Rich and full-bodied with deep oak and spice notes" },
        { id: "l-c2", name: "Hennessy VSOP", price: "200,000", description: "Smooth and balanced with hints of vanilla and fruit" },
        { id: "l-c3", name: "Hennessy VS", price: "120,000", description: "Bold and lively with a clean warm finish" },
        { id: "l-c4", name: "Martell Blue Swift", price: "180,000", description: "Smooth cognac finished in bourbon casks" },
        { id: "l-c5", name: "Martell VS Single Distillery", price: "120,000", description: "Light and fruity with a mellow finish" },
        { id: "l-c6", name: "Remy Martin XO Excellence", price: "650,000", description: "Luxurious blend with rich complexity and depth" },
        { id: "l-c7", name: "Remy Martin 1738", price: "200,000", description: "Velvety smooth with toasted oak notes" },
        { id: "l-c8", name: "Remy Martin VSOP", price: "180,000", description: "Elegant and smooth with balanced fruit tones" },
        { id: "l-c9", name: "Martell XO", price: "670,000", description: "Full-bodied with intense richness and depth" },
      ]
    },
    {
      title: "Tequila",
      items: [
        { id: "l-t1", name: "Clase Azul Reposado", price: "350,000", description: "Ultra-smooth premium tequila with sweet vanilla notes" },
        { id: "l-t2", name: "Casamigos Reposado", price: "300,000", description: "Rich and smooth with caramel and spice hints" },
        { id: "l-t3", name: "Casamigos Blanco", price: "250,000", description: "Crisp and clean with fresh citrus finish" },
        { id: "l-t4", name: "Don Julio (700ml)", price: "700,000", description: "Luxury tequila with refined smooth character" },
        { id: "l-t5", name: "Don Julio Reposado", price: "300,000", description: "Aged with warm oak and smooth finish" },
        { id: "l-t6", name: "Don Julio Blanco", price: "300,000", description: "Fresh and bright with pure agave taste" },
        { id: "l-t7", name: "Olmeca Gold", price: "45,000", description: "Smooth with a slightly sweet finish" },
        { id: "l-t8", name: "Olmeca Blanco", price: "45,000", description: "Light and crisp with citrus edge" },
        { id: "l-t9", name: "Tequila Sierra", price: "40,000", description: "Bold and simple with strong finish" },
        { id: "l-t10", name: "Patron", price: "100,000", description: "Premium smooth tequila with clean finish" },
      ]
    },
    {
      title: "Whisky",
      items: [
        { id: "l-w1", name: "Glenfiddich 18 Years", price: "200,000", description: "Rich and complex with oak, spice, and dried fruit" },
        { id: "l-w2", name: "Glenfiddich 15 Years", price: "180,000", description: "Smooth with honey and warm spice notes" },
        { id: "l-w3", name: "Glenfiddich 12 Years", price: "100,000", description: "Fresh and fruity with soft oak finish" },
        { id: "l-w4", name: "Jameson", price: "50,000", description: "Light and smooth with subtle sweetness" },
        { id: "l-w5", name: "Jameson Black Barrel", price: "75,000", description: "Deep and rich with toasted wood notes" },
        { id: "l-w6", name: "Jack Daniel’s No.7", price: "50,000", description: "Bold with smoky vanilla finish" },
        { id: "l-w7", name: "Johnnie Walker Red Label", price: "35,000", description: "Spicy and vibrant with bold character" },
        { id: "l-w8", name: "Johnnie Walker Black Label", price: "60,000", description: "Smooth and smoky with balanced depth" },
        { id: "l-w9", name: "William Lawson’s", price: "30,000", description: "Easy-drinking with soft malty finish" },
      ]
    },
    {
      title: "Champagne & Sparkling",
      items: [
        { id: "l-ch1", name: "Moët & Chandon Nectar Rosé", price: "210,000", description: "Sweet and fruity with vibrant berry notes" },
        { id: "l-ch2", name: "Moët & Chandon Imperial Brut", price: "180,000", description: "Crisp and elegant with refreshing bubbles" },
        { id: "l-ch3", name: "Belaire Rosé Fantôme", price: "160,000", description: "Smooth rosé with rich sweet profile" },
        { id: "l-ch4", name: "André Rosé", price: "30,000", description: "Light sparkling wine with fruity taste" },
        { id: "l-ch5", name: "Martini Rosé", price: "30,000", description: "Soft and floral with gentle bubbles" },
      ]
    },
    {
      title: "Liqueurs / Rum / Bitters",
      items: [
        { id: "l-l1", name: "Jägermeister", price: "50,000", description: "Herbal liqueur with bold bittersweet taste" },
        { id: "l-l2", name: "Campari", price: "30,000", description: "Bitter and aromatic with citrus notes" },
        { id: "l-l3", name: "Captain Morgan", price: "25,000", description: "Spiced rum with warm sweet finish" },
        { id: "l-l4", name: "Baileys (Big)", price: "40,000", description: "Creamy liqueur with rich chocolate notes" },
        { id: "l-l5", name: "Baileys Strawberries", price: "40,000", description: "Sweet creamy liqueur with berry flavor" },
        { id: "l-l6", name: "Bacardi", price: "40,000", description: "Light rum with clean crisp finish" },
        { id: "l-l7", name: "Absolut Vodka", price: "40,000", description: "Smooth vodka with pure clean taste" },
        { id: "l-l8", name: "Gordon’s Gin", price: "20,000", description: "Classic dry gin with herbal freshness" },
      ]
    },
    {
      title: "Wine",
      items: [
        { id: "l-wn1", name: "Artesa Estate Pinot Noir 2017", price: "₦60,000", description: "Light-bodied red with soft berry notes" },
        { id: "l-wn2", name: "Willamette Jigsaw Pinot Noir 2017", price: "₦60,000", description: "Silky and elegant with smooth finish" },
        { id: "l-wn3", name: "Tre Ricci Cabernet Sauvignon", price: "₦65,000", description: "Bold red wine with rich deep flavor" },
        { id: "l-wn4", name: "Woodside Pinot Noir 2013", price: "₦70,000", description: "Aged and smooth with complex taste" },
        { id: "l-wn5", name: "Drostdy-Hof", price: "20,000", description: "Easy-drinking wine with soft finish" },
        { id: "l-wn6", name: "Carlo Rossi", price: "25,000", description: "Light and fruity with balanced taste" },
        { id: "l-wn7", name: "Four Cousins Red", price: "20,000", description: "Sweet and smooth red wine" },
        { id: "l-wn8", name: "Four Cousins White", price: "20,000", description: "Fresh and sweet white wine" },
        { id: "l-wn9", name: "Agor", price: "20,000", description: "Sweet wine with smooth profile" },
        { id: "l-wn10", name: "Sweet Kiss", price: "20,000", description: "Light and fruity sweet wine" },
      ]
    },
    {
      title: "Beer",
      items: [
        { id: "l-b1", name: "Heineken", price: "2,500", description: "Crisp lager with clean finish" },
        { id: "l-b2", name: "Budweiser", price: "2,500", description: "Smooth refreshing lager" },
        { id: "l-b3", name: "Desperados", price: "2,000", description: "Beer infused with tequila flavor" },
        { id: "l-b4", name: "Smirnoff Ice", price: "2,000", description: "Sweet citrus-flavored drink" },
        { id: "l-b5", name: "Orijin Beer", price: "2,000", description: "Herbal beer with unique taste" },
        { id: "l-b6", name: "Guinness Smooth", price: "2,000", description: "Creamy stout with rich flavor" },
        { id: "l-b7", name: "Double Black", price: "2,000", description: "Dark stout with bold taste" },
        { id: "l-b8", name: "Orijin Bitters", price: "2,000", description: "Herbal bitters with sharp finish" },
      ]
    },
    {
      title: "Soft Drinks / Mixers",
      items: [
        { id: "l-s1", name: "Cranberry Juice", price: "10,000", description: "Fruit juice" },
        { id: "l-s2", name: "Power Horse", price: "4,000", description: "Energy drink" },
        { id: "l-s3", name: "Red Bull", price: "3,000", description: "Energy drink" },
        { id: "l-s4", name: "Monster", price: "3,000", description: "Energy drink" },
        { id: "l-s5", name: "Active", price: "4,000", description: "Energy drink" },
        { id: "l-s6", name: "Hollandia", price: "4,000", description: "Yogurt drink" },
        { id: "l-s7", name: "Malt", price: "1,500", description: "Non-alcoholic malt drink" },
        { id: "l-s8", name: "Fayrouz", price: "1,500", description: "Non-alcoholic fruit malt" },
        { id: "l-s9", name: "Coke", price: "1,500", description: "Soft drink" },
        { id: "l-s10", name: "Sprite", price: "1,500", description: "Soft drink" },
        { id: "l-s11", name: "Water", price: "1,000", description: "Still water" },
      ]
    },
    {
      title: "Signature Bar",
      items: getCocktails("10,000", "l")
    },
    {
      title: "Mocktails",
      items: [
        { id: "l-m1", name: "Rixos Wise Lady", price: "8,000", description: "Refreshing fruit blend" },
        { id: "l-m2", name: "Rixos Blue Slush", price: "8,000", description: "Icy sweet citrus drink" },
        { id: "l-m3", name: "Rixos Chapman", price: "7,000", description: "Classic Nigerian fruit mix" },
        { id: "l-m4", name: "Virgin Colada", price: "8,000", description: "Coconut and pineapple blend" },
        { id: "l-m5", name: "Virgin Daiquiri", price: "8,000", description: "Sweet frozen fruit mix" },
        { id: "l-m6", name: "Rixos HMG Juice", price: "7,000", description: "House mixed fruit juice" },
        { id: "l-m7", name: "Rixos Traffic Relief", price: "8,000", description: "Cool refreshing blend" },
        { id: "l-m8", name: "Rixos Mojito", price: "8,000", description: "Minty fresh citrus drink" },
        { id: "l-m9", name: "Rixos Shandy", price: "8,000", description: "Light fruity soft drink mix" },
        { id: "l-m10", name: "Rixos Milky Chapman", price: "7,000", description: "Creamy Chapman twist" },
        { id: "l-m11", name: "Rixos Twisted Chapman", price: "8,000", description: "Bold flavored Chapman mix" },
        { id: "l-m12", name: "Rixos Lemonade", price: "8,000", description: "Fresh citrus lemonade" },
        { id: "l-m13", name: "Rixos Bubble Gum", price: "8,000", description: "Sweet playful drink" },
      ]
    },
    {
      title: "Milkshakes",
      items: [
        { id: "l-ms1", name: "Rixos Oreo Shake", price: "12,000", description: "Creamy chocolate cookie shake" },
        { id: "l-ms2", name: "Rixos Strawberry Shake", price: "12,000", description: "Smooth sweet strawberry blend" },
        { id: "l-ms3", name: "Rixos Chocolate Shake", price: "12,000", description: "Rich creamy chocolate drink" },
        { id: "l-ms4", name: "Rixos Banana Vanilla Shake", price: "12,000", description: "Banana and vanilla mix" },
        { id: "l-ms5", name: "Rixos Mixed Flavours", price: "15,000", description: "Blend of assorted flavors" },
      ]
    },
    {
      title: "Smoothies",
      items: [
        { id: "l-sm1", name: "Rixos Strawberry Delight", price: "8,000", description: "Fresh strawberry blend" },
        { id: "l-sm2", name: "Rixos Crystal", price: "8,000", description: "Light refreshing fruit mix" },
        { id: "l-sm3", name: "Rixos Fruitlicious", price: "8,000", description: "Mixed tropical fruits" },
        { id: "l-sm4", name: "Rixos Pineapple", price: "8,000", description: "Fresh pineapple smoothie" },
        { id: "l-sm5", name: "Rixos Enchanted", price: "8,000", description: "Sweet mixed fruit blend" },
        { id: "l-sm6", name: "Rixos Dates Smoothie", price: "8,000", description: "Rich creamy date blend" },
        { id: "l-sm7", name: "Nectar of the Gods", price: "8,000", description: "Premium fruit fusion" },
        { id: "l-sm8", name: "Rixos Berry Smoothie", price: "8,000", description: "Mixed berry blend" },
        { id: "l-sm9", name: "Rixos Strawman Smoothie", price: "8,000", description: "Strawberry and banana mix" },
      ]
    },
    {
      title: "Shisha",
      items: [
        { id: "l-sh1", name: "One Horse", price: "12,000", description: "Premium flavored shisha" },
      ]
    },
    {
      title: "Rice (Lounge)",
      items: [
        { id: "l-r1", name: "Jollof Rice (Chicken)", price: "9,500", description: "Smoky jollof rice served with chicken" },
        { id: "l-r2", name: "Jollof Rice (Beef)", price: "9,000", description: "Smoky rice served with beef" },
        { id: "l-r3", name: "Ofada Rice", price: "11,400", description: "Local rice with rich native sauce" },
        { id: "l-r4", name: "Native Rice", price: "7,900", description: "Traditional rice with bold local flavor" },
        { id: "l-r5", name: "Fried Rice (Chicken)", price: "9,500", description: "Savory rice with vegetables and chicken" },
        { id: "l-r6", name: "Asun Rice", price: "10,900", description: "Spicy rice served with grilled asun" },
      ]
    },
    {
      title: "Pasta & Noodles",
      items: [
        { id: "l-p1", name: "Jollof Pasta", price: "12,600", description: "Pasta cooked in rich jollof sauce" },
        { id: "l-p2", name: "Asun Pasta", price: "10,900", description: "Spicy pasta with grilled meat" },
        { id: "l-p3", name: "Native Pasta", price: "7,800", description: "Local-style seasoned pasta" },
        { id: "l-p4", name: "Stir-Fried Pasta", price: "7,600", description: "Lightly tossed with vegetables" },
        { id: "l-p5", name: "Egg Noodles", price: "3,500", description: "Noodles mixed with egg" },
        { id: "l-p6", name: "Veg Noodles", price: "3,000", description: "Vegetable stir-fried noodles" },
        { id: "l-p7", name: "Pepper Soup Noodles", price: "5,500", description: "Spicy broth noodles with meat" },
      ]
    },
    {
      title: "Soups",
      items: [
        { id: "l-s1-soup", name: "Afang", price: "4,800", description: "Rich vegetable soup with seafood" },
        { id: "l-s2-soup", name: "Edikang Ikong", price: "3,500", description: "Nutritious vegetable soup" },
        { id: "l-s3-soup", name: "Oha", price: "3,500", description: "Traditional eastern soup" },
        { id: "l-s4-soup", name: "Fisherman", price: "5,000", description: "Seafood-rich spicy soup" },
        { id: "l-s5-soup", name: "Bitter Leaf", price: "4,500", description: "Classic soup with bold taste" },
        { id: "l-s6-soup", name: "Banga", price: "3,600", description: "Palm nut soup with rich flavor" },
        { id: "l-s7-soup", name: "Ogbono", price: "3,000", description: "Draw soup with unique texture" },
        { id: "l-s8-soup", name: "Efo Riro", price: "3,500", description: "Spinach stew with rich sauce" },
        { id: "l-s9-soup", name: "Egusi", price: "3,000", description: "Melon seed soup with thick texture" },
      ]
    },
    {
      title: "Swallows",
      items: [
        { id: "l-sw1", name: "Eba", price: "1,500", description: "Garri swallow" },
        { id: "l-sw2", name: "Yellow Eba", price: "1,500", description: "Garri swallow with rich color" },
        { id: "l-sw3", name: "Semo", price: "1,500", description: "Smooth wheat swallow" },
        { id: "l-sw4", name: "Poundo", price: "1,500", description: "Soft pounded yam alternative" },
        { id: "l-sw5", name: "Plantain Swallow", price: "1,500", description: "Healthy plantain swallow" },
      ]
    },
    {
      title: "Protein & Grills",
      items: [
        { id: "l-pg1", name: "Isi Ewu", price: "6,000", description: "Spicy goat head delicacy" },
        { id: "l-pg2", name: "Nkwobi", price: "9,000", description: "Tender cow leg in rich sauce" },
        { id: "l-pg3", name: "Asun", price: "7,000", description: "Spicy grilled goat meat" },
        { id: "l-pg4", name: "Peppered Beef", price: "5,000", description: "Spicy sautéed beef" },
        { id: "l-pg5", name: "Peppered Chicken", price: "6,700", description: "Spicy grilled chicken" },
        { id: "l-pg6", name: "Peppered Turkey", price: "9,100", description: "Grilled turkey in spicy sauce" },
        { id: "l-pg7", name: "Peppered Gizzard", price: "5,700", description: "Spicy gizzard stir-fry" },
        { id: "l-pg8", name: "Peppered Snail", price: "9,800", description: "Snail in rich pepper sauce" },
      ]
    }
  ]
};

export const RESTAURANT_MENU: MenuSection = {
  title: "Restaurant",
  categories: [
    {
      title: "Cognac / Brandy",
      items: [
        { id: "r-c1", name: "Hennessy XO", price: "450,000", description: "" },
        { id: "r-c2", name: "Hennessy VSOP", price: "225,000", description: "" },
        { id: "r-c3", name: "Hennessy VS", price: "150,000", description: "" },
        { id: "r-c4", name: "Martell Blue Swift", price: "200,000", description: "" },
        { id: "r-c5", name: "Martell VS", price: "135,000", description: "" },
        { id: "r-c6", name: "Remy Martin XO", price: "700,000", description: "" },
        { id: "r-c7", name: "Remy Martin 1738", price: "250,000", description: "" },
        { id: "r-c8", name: "Remy Martin VSOP", price: "200,000", description: "" },
        { id: "r-c9", name: "Martell XO", price: "700,000", description: "" },
      ]
    },
    {
      title: "Tequila",
      items: [
        { id: "r-t1", name: "Clase Azul", price: "400,000", description: "" },
        { id: "r-t2", name: "Casamigos Repo", price: "350,000", description: "" },
        { id: "r-t3", name: "Casamigos Blanco", price: "300,000", description: "" },
        { id: "r-t4", name: "Don Julio (750ml)", price: "750,000", description: "" },
        { id: "r-t5", name: "Don Julio Repo", price: "350,000", description: "" },
        { id: "r-t6", name: "Don Julio Blanco", price: "750,000", description: "" },
        { id: "r-t7", name: "Olmeca", price: "50,000", description: "" },
        { id: "r-t8", name: "Sierra", price: "50,000", description: "" },
        { id: "r-t9", name: "Patron", price: "150,000", description: "" },
        { id: "r-t10", name: "Sierra Tequila", price: "50,000", description: "" },
      ]
    },
    {
      title: "Whisky",
      items: [
        { id: "r-w1", name: "Glenfiddich 18Yo", price: "225,000", description: "" },
        { id: "r-w2", name: "Glenfiddich 15Yo", price: "200,000", description: "" },
        { id: "r-w3", name: "Glenfiddich 12Yo", price: "120,000", description: "" },
        { id: "r-w4", name: "Jameson whisky", price: "60,000", description: "" },
        { id: "r-w5", name: "Jameson Black Barrel", price: "85,000", description: "" },
        { id: "r-w6", name: "Jack Daniels No7", price: "65,000", description: "" },
        { id: "r-w7", name: "Johnnie Walker Red Label", price: "40,000", description: "" },
        { id: "r-w8", name: "Williams Lawson’s", price: "45,000", description: "" },
        { id: "r-w9", name: "Black label", price: "70,000", description: "" },
      ]
    },
    {
      title: "Champagne & Sparkling",
      items: [
        { id: "r-ch1", name: "Moet & Chandon Nectar Rose", price: "250,000", description: "" },
        { id: "r-ch2", name: "Moet & Chandon Imperial Brut", price: "230,000", description: "" },
        { id: "r-ch3", name: "Andre Rose Sparkling Wine", price: "40,000", description: "" },
        { id: "r-ch4", name: "Martini Rose", price: "50,000", description: "" },
        { id: "r-ch5", name: "Belaire Rose Fantome", price: "130,000", description: "" },
      ]
    },
    {
      title: "Liqueurs / Rum / Bitters",
      items: [
        { id: "r-l1", name: "Jagermeister", price: "50,000", description: "" },
        { id: "r-l2", name: "Campari Big", price: "40,000", description: "" },
        { id: "r-l3", name: "Captain Morgan", price: "30,000", description: "" },
        { id: "r-l4", name: "Baileys (Big)", price: "50,000", description: "" },
        { id: "r-l5", name: "Baileys Strawberries", price: "50,000", description: "" },
        { id: "r-l6", name: "Bacardi Carta Blanco", price: "50,000", description: "" },
        { id: "r-l7", name: "Absolut vodka", price: "50,000", description: "" },
        { id: "r-l8", name: "Gordon’s", price: "30,000", description: "" },
      ]
    },
    {
      title: "Wine",
      items: [
        { id: "r-wn1", name: "Artesa Estate Pinot Noir 2017", price: "₦65,000", description: "" },
        { id: "r-wn2", name: "Willamette Jigsaw Pinot Noir 2017", price: "₦65,000", description: "" },
        { id: "r-wn3", name: "Tre Ricci Cabernet Sauvignon", price: "₦70,000", description: "" },
        { id: "r-wn4", name: "Woodside Pinot Noir 2013", price: "₦75,000", description: "" },
        { id: "r-wn5", name: "Drostdy Hof", price: "30,000", description: "" },
        { id: "r-wn6", name: "Carlo Rossi", price: "30,000", description: "" },
        { id: "r-wn7", name: "Four Cousins Red", price: "30,000", description: "" },
        { id: "r-wn8", name: "Four Cousins White", price: "30,000", description: "" },
        { id: "r-wn9", name: "Agor", price: "30,000", description: "" },
        { id: "r-wn10", name: "Sweet Kiss", price: "25,000", description: "" },
      ]
    },
    {
      title: "Soft Drinks / Mixers",
      items: [
        { id: "r-s1", name: "Cranberry Juice", price: "12,000", description: "" },
        { id: "r-s2", name: "Power Horse", price: "4,000", description: "" },
        { id: "r-s3", name: "Red Bull", price: "3,000", description: "" },
        { id: "r-s4", name: "Monster Drink", price: "3,000", description: "" },
        { id: "r-s5", name: "Active", price: "4,500", description: "" },
        { id: "r-s6", name: "Hollandia", price: "5,000", description: "" },
        { id: "r-s7", name: "Malt", price: "2,000", description: "" },
        { id: "r-s8", name: "Farouz", price: "2,000", description: "" },
        { id: "r-s9", name: "Coke", price: "1,500", description: "" },
        { id: "r-s10", name: "Sprite", price: "1,500", description: "" },
        { id: "r-s11", name: "Water", price: "1,000", description: "" },
      ]
    },
    {
      title: "Signature Bar",
      items: getCocktails("10,000", "r")
    },
    {
      title: "Starters",
      items: [
        { id: "r-st1", name: "Buffalo Wings", price: "7,900", description: "Spicy crispy chicken wings" },
        { id: "r-st2", name: "Small Chops", price: "7,000", description: "Assorted bite-sized snacks" },
        { id: "r-st3", name: "Asun", price: "7,500", description: "Spicy grilled goat meat" },
        { id: "r-st4", name: "Honey Glazed Wings", price: "8,000", description: "Sweet glazed crispy wings" },
        { id: "r-st5", name: "Prawn Cocktail", price: "12,400", description: "Fresh prawns in creamy sauce" },
        { id: "r-st6", name: "Tempura Prawn", price: "9,000", description: "Crispy battered prawns" },
      ]
    },
    {
      title: "Salads",
      items: [
        { id: "r-sl1", name: "Caesar Salad", price: "10,700", description: "Fresh greens with creamy dressing" },
        { id: "r-sl2", name: "Chicken Salad", price: "8,800", description: "Grilled chicken with vegetables" },
      ]
    },
    {
      title: "Main / Pasta / Rice",
      items: [
        { id: "r-m1", name: "Ofada Rice", price: "16,300", description: "Local rice with rich sauce" },
        { id: "r-m2", name: "Seafood Rice", price: "15,700", description: "Rice cooked with fresh seafood" },
        { id: "r-m3", name: "Spaghetti Bolognese", price: "19,700", description: "Pasta with rich meat sauce" },
        { id: "r-m4", name: "Chicken Alfredo", price: "20,700", description: "Creamy pasta with chicken" },
      ]
    },
    {
      title: "Steakhouse Selection",
      items: [
        { id: "r-sk1", name: "Tomahawk", price: "38,700", description: "Large premium steak grilled to perfection" },
        { id: "r-sk2", name: "Ribeye", price: "30,700", description: "Juicy steak with rich marbling" },
        { id: "r-sk3", name: "T-Bone", price: "30,700", description: "Classic cut with bold flavor" },
      ]
    },
    {
      title: "Grill & Exotic",
      items: [
        { id: "r-ex1", name: "Crocodile", price: "66,000", description: "Grilled exotic meat with bold taste" },
        { id: "r-ex2", name: "Anaconda", price: "36,800", description: "Unique grilled delicacy" },
        { id: "r-ex3", name: "Bush Meat", price: "25,700", description: "Smoky traditional game meat" },
        { id: "r-ex4", name: "Rabbit", price: "22,700", description: "Tender grilled rabbit meat" },
      ]
    },
    {
      title: "Desserts",
      items: [
        { id: "r-ds1", name: "Apple Pie", price: "7,300", description: "Warm pastry with apple filling" },
        { id: "r-ds2", name: "Chocolate Cake", price: "10,300", description: "Rich chocolate dessert" },
        { id: "r-ds3", name: "Flan", price: "13,700", description: "Creamy caramel custard" },
      ]
    }
  ]
};
