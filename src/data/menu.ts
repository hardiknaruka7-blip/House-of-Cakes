import achariPaneerTikkaPizza from "@/assets/menu/achari-paneer-tikka-pizza.png";
import americanChopsy from "@/assets/menu/american-chopsy.png";
import arrabiataPasta from "@/assets/menu/arrabiata-pasta.png";
import bbqPaneerBurger from "@/assets/menu/bbq-paneer-burger.png";
import cheeseNachos from "@/assets/menu/cheese-nachos.png";
import chilliPaneer from "@/assets/menu/chilli-paneer.png";
import chocolateBomb from "@/assets/menu/chocolate-bomb.png";
import classicMasalaGrill from "@/assets/menu/classic-masala-grill.png";
import clubSandwich from "@/assets/menu/club-sandwich.png";
import coleslawSandwich from "@/assets/menu/coleslaw-sandwich.png";
import cornCheeseGrill from "@/assets/menu/corn-cheese-grill.png";
import deluxeVeggiePizza from "@/assets/menu/deluxe-veggie-pizza.png";
import focacciaSandwich from "@/assets/menu/focaccia-sandwich.png";
import frenchSandwich from "@/assets/menu/french-sandwich.png";
import friedRiceManchurian from "@/assets/menu/fried-rice-manchurian.png";
import garlicBread from "@/assets/menu/garlic-bread.png";
import hakkaNoodles from "@/assets/menu/hakka-noodles.png";
import hocExoticPizza from "@/assets/menu/hoc-exotic-pizza.png";
import hocVeggieBurger from "@/assets/menu/hoc-veggie-burger.png";
import honeyChilliPotato from "@/assets/menu/honey-chilli-potato.png";
import manchurian from "@/assets/menu/manchurian.png";
import margheritaPizza from "@/assets/menu/margherita-pizza.png";
import mexicanBurger from "@/assets/menu/mexican-burger.png";
import noodlesChilliPaneer from "@/assets/menu/noodles-chilli-paneer.png";
import otcPizza from "@/assets/menu/otc-pizza.png";
import paneerFriedRice from "@/assets/menu/paneer-fried-rice.png";
import paneerJalJala from "@/assets/menu/paneer-jal-jala.png";
import paneerKathiRoll from "@/assets/menu/paneer-kathi-roll.png";
import paneerSandwich from "@/assets/menu/paneer-sandwich.png";
import paneerSpinachRoll from "@/assets/menu/paneer-spinach-roll.png";
import periPeriNachos from "@/assets/menu/peri-peri-nachos.png";
import periPeriPaneerPizza from "@/assets/menu/peri-peri-paneer-pizza.png";
import pestoCottageCheesePizza from "@/assets/menu/pesto-cottage-cheese-pizza.png";
import pestoSaucePasta from "@/assets/menu/pesto-sauce-pasta.png";
import punjabiChanaMasalaRoll from "@/assets/menu/punjabi-chana-masala-roll.png";
import roseSaucePasta from "@/assets/menu/rose-sauce-pasta.png";
import schezwanFriedRice from "@/assets/menu/schezwan-fried-rice.png";
import singapuriPaneerNoodles from "@/assets/menu/singapuri-paneer-noodles.png";
import sizzlingBrownie from "@/assets/menu/sizzling-brownie.png";
import trioPizza from "@/assets/menu/trio-pizza.png";
import vegCheeseBurger from "@/assets/menu/veg-cheese-burger.png";
import vegChowmein from "@/assets/menu/veg-chowmein.png";
import vegFriedRice from "@/assets/menu/veg-fried-rice.png";
import vegPaneerTandooriGrill from "@/assets/menu/veg-paneer-tandoori-grill.png";
import vegetableCheeseRoll from "@/assets/menu/vegetable-cheese-roll.png";
import whiteSaucePasta from "@/assets/menu/white-sauce-pasta.png";

export type MenuItem = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  ingredients?: string;
  hero?: boolean;
};

export type MenuCategory = {
  k: string;
  chapter: string;
  name: string;
  emphasis: string;
  tag: string;
  note: string;
  copy: string;
  overlay?: string;
  align: "left" | "right";
  tone: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    k: "02",
    chapter: "Chapter Two",
    name: "Gourmet Sandwiches & Grills",
    emphasis: "Grills",
    tag: "Pressed · Artisan · Golden",
    note: "Toasted Comfort",
    copy: "Cast iron pressed until the crust whispers. Focaccia kissed with rosemary smoke, paneer charred over an open flame, thousand island folded in slow.",
    overlay: "Golden",
    align: "left",
    tone: "from-[hsl(28_60%_20%_/_0.35)]",
    items: [
      { id: "veg-paneer-tandoori-grill", name: "Veg Paneer Tandoori Grill", image: vegPaneerTandooriGrill, description: "Smoky tandoor-charred paneer pressed between artisan bread with iceberg and thousand island.", ingredients: "Paneer, capsicum, lettuce, iceberg, thousand island", price: "$14", hero: true },
      { id: "focaccia-sandwich", name: "Focaccia Sandwich", image: focacciaSandwich, description: "Rosemary focaccia layered with jalapeño heat, briny olives, and herb oil.", ingredients: "Jalapeño, olives, basil, rosemary, thyme", price: "$13", hero: true },
      { id: "club-sandwich", name: "Club Sandwich", image: clubSandwich, description: "Triple-stack club with crisp lettuce, tomato, and house dressing.", ingredients: "Lettuce, tomato, cheese, house dressing", price: "$12" },
      { id: "coleslaw-sandwich", name: "Coleslaw Sandwich", image: coleslawSandwich, description: "Creamy coleslaw between toasted bread — cool, crisp, comforting.", ingredients: "Cabbage, carrot, mayonnaise, herbs", price: "$10" },
      { id: "paneer-sandwich", name: "Paneer Sandwich", image: paneerSandwich, description: "Spiced paneer with peppers, pressed golden.", ingredients: "Paneer, capsicum, onion, spices", price: "$11" },
      { id: "corn-cheese-grill", name: "Corn & Cheese Grill", image: cornCheeseGrill, description: "Sweet corn folded into molten mozzarella.", ingredients: "Corn, onion, tomato, capsicum, mozzarella", price: "$12" },
      { id: "classic-masala-grill", name: "Classic Masala Grill", image: classicMasalaGrill, description: "Spiced potato masala grilled between buttered bread.", ingredients: "Potato, Indian spice", price: "$10" },
      { id: "french-sandwich", name: "French Sandwich", image: frenchSandwich, description: "Kidney beans and sautéed lettuce in olive oil.", ingredients: "Kidney beans, lettuce, olive oil", price: "$11" },
      { id: "garlic-bread", name: "Hoc's Garlic Bread", image: garlicBread, description: "Crisp, herbed, butter-soaked.", ingredients: "Garlic butter, herbs, parmesan", price: "$8" },
    ],
  },
  {
    k: "03",
    chapter: "Chapter Three",
    name: "Burger Mania",
    emphasis: "Mania",
    tag: "Stacked · Bold · Indulgent",
    note: "Artisan Layers",
    copy: "Dramatic side light, floating layers, a brioche lacquered in its own glow. Built tall, eaten with two hands, photographed in shadow.",
    overlay: "Stacked",
    align: "right",
    tone: "from-[hsl(18_55%_18%_/_0.4)]",
    items: [
      { id: "bbq-paneer-burger", name: "Barbeque Paneer Burger", image: bbqPaneerBurger, description: "Smoky BBQ paneer patty with crisp coleslaw on a brioche bun.", ingredients: "BBQ paneer patty, iceberg, coleslaw", price: "$15", hero: true },
      { id: "mexican-burger", name: "Mexican Burger", image: mexicanBurger, description: "Kidney bean patty with bell pepper and mushroom heat.", ingredients: "Kidney bean patty, bell pepper, mushroom", price: "$14" },
      { id: "hoc-veggie-burger", name: "Hoc Veggie Burger", image: hocVeggieBurger, description: "Garden patty with thousand island on toasted brioche.", ingredients: "Beans, carrot, peas, potato, thousand island", price: "$13" },
      { id: "veg-cheese-burger", name: "Veg Cheese Burger", image: vegCheeseBurger, description: "Classic veggie patty with molten cheese pull.", ingredients: "Veg patty, cheese, lettuce, tomato", price: "$12" },
    ],
  },
  {
    k: "04",
    chapter: "Centerpiece",
    name: "Signature Handcrafted Pizzas",
    emphasis: "Handcrafted",
    tag: "Fire-Baked · Slow Crafted · Signature",
    note: "Crafted in Fire",
    copy: "The room turns toward the oven. Molten cheese, herb particles in the air, leopard-spotted crust pulled at the exact second. The night's loudest silence.",
    overlay: "Fire",
    align: "left",
    tone: "from-[hsl(22_70%_25%_/_0.5)]",
    items: [
      { id: "hoc-exotic-pizza", name: "Hoc Exotic Pizza", image: hocExoticPizza, description: "Signature house pizza — layered with seasonal exotic vegetables.", ingredients: "House blend cheese, exotic vegetables, herbs", price: "$19", hero: true },
      { id: "trio-pizza", name: "Trio Pizza", image: trioPizza, description: "Three sauces, one crust — pesto, BBQ, peri peri.", ingredients: "Pesto, BBQ, peri peri sauces", price: "$20", hero: true },
      { id: "pesto-cottage-cheese-pizza", name: "Pesto Cottage Cheese Pizza", image: pestoCottageCheesePizza, description: "Basil pesto base with creamy cottage cheese and olives.", ingredients: "Basil, olive oil, cottage cheese, olives", price: "$18", hero: true },
      { id: "achari-paneer-tikka-pizza", name: "Achari Paneer Tikka Pizza", image: achariPaneerTikkaPizza, description: "Achari-spiced paneer tikka on a herbed crust.", ingredients: "Bell peppers, rosemary, oregano, basil, paneer", price: "$18", hero: true },
      { id: "margherita-pizza", name: "Margherita Cheese Pizza", image: margheritaPizza, description: "Classic margherita — tomato, basil, layered cheese.", ingredients: "Tomato, basil, layered cheese blend", price: "$15" },
      { id: "peri-peri-paneer-pizza", name: "Peri Peri Paneer Pizza", image: periPeriPaneerPizza, description: "Homemade peri peri with fresh vegetables and paneer.", ingredients: "Peri peri sauce, paneer, fresh vegetables", price: "$17" },
      { id: "deluxe-veggie-pizza", name: "Deluxe Veggie Pizza", image: deluxeVeggiePizza, description: "Loaded with every garden vegetable and paneer.", ingredients: "Onion, capsicum, mushroom, paneer, corn, paprika", price: "$17" },
      { id: "otc-pizza", name: "Otc Pizza", image: otcPizza, description: "Onion, tomato, capsicum — clean and classic.", ingredients: "Onion, tomato, capsicum", price: "$14" },
    ],
  },
  {
    k: "05",
    chapter: "Chapter Five",
    name: "Artisan Pasta",
    emphasis: "Pasta",
    tag: "Creamy · Italian Soul · Slow Simmered",
    note: "Slow Simmered",
    copy: "Cream folded in low light. Basil torn by hand. The sauce reduced until it remembers itself.",
    overlay: "Slow",
    align: "right",
    tone: "from-[hsl(36_45%_25%_/_0.35)]",
    items: [
      { id: "rose-sauce-pasta", name: "Rose Sauce Pasta", image: roseSaucePasta, description: "A delicate blend of red and white — silky, balanced, romantic.", ingredients: "Tomato, cream, herbs, parmesan", price: "$16", hero: true },
      { id: "pesto-sauce-pasta", name: "Pesto Sauce Pasta", image: pestoSaucePasta, description: "Basil pesto with garden vegetables, finished with olive oil.", ingredients: "Broccoli, bell peppers, sweet corn, basil", price: "$16", hero: true },
      { id: "arrabiata-pasta", name: "Angry Arrabiata Pasta", image: arrabiataPasta, description: "Fiery red sauce with charred vegetables — bold and bright.", ingredients: "Broccoli, zucchini, mushroom, baby corn, red sauce", price: "$15" },
      { id: "white-sauce-pasta", name: "White Sauce Pasta", image: whiteSaucePasta, description: "Classic béchamel, creamy and comforting.", ingredients: "Cream, garlic, herbs, parmesan", price: "$15" },
    ],
  },
  {
    k: "06",
    chapter: "Chapter Six",
    name: "Flavors of the East",
    emphasis: "East",
    tag: "Wok Fire · Street Heat · Fusion",
    note: "Modern Asian",
    copy: "A darker chapter. Wok flame leaping up the side, schezwan caught mid-toss, chilli oil glistening at the rim.",
    overlay: "Heat",
    align: "left",
    tone: "from-[hsl(0_55%_20%_/_0.4)]",
    items: [
      { id: "chilli-paneer", name: "Chilli Paneer", image: chilliPaneer, description: "Wok-tossed paneer with chilli oil and spring onion.", ingredients: "Paneer, chilli oil, spring onion, soy", price: "$14", hero: true },
      { id: "paneer-jal-jala", name: "Paneer Jal Jala", image: paneerJalJala, description: "Smoky, layered, bright — house signature.", ingredients: "Paneer, peppers, smoked spices", price: "$15", hero: true },
      { id: "american-chopsy", name: "American Chopsy", image: americanChopsy, description: "Crisp noodle bed beneath saucy stir-fried vegetables.", ingredients: "Crisp noodles, vegetables, sweet-sour sauce", price: "$14", hero: true },
      { id: "singapuri-paneer-noodles", name: "Singapuri Paneer Noodles", image: singapuriPaneerNoodles, description: "Curry-spiced Singaporean noodles with paneer.", ingredients: "Noodles, paneer, curry spice, vegetables", price: "$14" },
      { id: "manchurian", name: "Manchurian", image: manchurian, description: "Crispy vegetable balls in tangy Indo-Chinese gravy.", ingredients: "Vegetable balls, garlic, ginger, soy", price: "$12" },
      { id: "hakka-noodles", name: "Hakka Noodles", image: hakkaNoodles, description: "Wok-tossed hakka noodles with crunchy vegetables.", ingredients: "Noodles, vegetables, soy, sesame", price: "$12" },
      { id: "veg-chowmein", name: "Veg Chowmein", image: vegChowmein, description: "Street-style chowmein with the wok's smoky breath.", ingredients: "Noodles, cabbage, carrot, peppers", price: "$11" },
      { id: "honey-chilli-potato", name: "Honey Chilli Potato", image: honeyChilliPotato, description: "Crispy potato batons glazed in honey-chilli lacquer.", ingredients: "Potato, honey, chilli, sesame", price: "$11" },
    ],
  },
  {
    k: "07a",
    chapter: "Interlude",
    name: "Indulgent Rolls & Wraps",
    emphasis: "Wraps",
    tag: "Handcrafted · Social · Layered",
    note: "Quiet Comfort",
    copy: "Folded slow, wrapped tight. The food you reach for between scenes.",
    align: "right",
    tone: "from-[hsl(28_40%_18%_/_0.3)]",
    items: [
      { id: "paneer-kathi-roll", name: "Paneer Kathi Roll", image: paneerKathiRoll, description: "Spiced paneer wrapped in a buttery paratha.", ingredients: "Paneer, onion, mint, paratha", price: "$10" },
      { id: "punjabi-chana-masala-roll", name: "Punjabi Chana Masala Roll", image: punjabiChanaMasalaRoll, description: "Hearty chana masala folded into warm flatbread.", ingredients: "Chickpeas, masala, onion, paratha", price: "$10" },
      { id: "paneer-spinach-roll", name: "Paneer Spinach Roll", image: paneerSpinachRoll, description: "Spinach and paneer wrapped tight, earthy and green.", ingredients: "Spinach, paneer, garlic, paratha", price: "$11" },
      { id: "vegetable-cheese-roll", name: "Vegetable Cheese Roll", image: vegetableCheeseRoll, description: "Garden vegetables and cheese in a crisp wrap.", ingredients: "Vegetables, cheese, herbs, paratha", price: "$10" },
    ],
  },
  {
    k: "07b",
    chapter: "Interlude",
    name: "The Snack Bar",
    emphasis: "Snack",
    tag: "Loaded · Crispy · Shared",
    note: "For The Table",
    copy: "Cheese pulled in long strands. Low light, loud company.",
    align: "left",
    tone: "from-[hsl(28_40%_18%_/_0.3)]",
    items: [
      { id: "peri-peri-nachos", name: "Peri Peri Nachos", image: periPeriNachos, description: "Crisp nachos under peri peri heat and molten cheese.", ingredients: "Tortilla, peri peri, cheese, jalapeño", price: "$12" },
      { id: "cheese-nachos", name: "Cheese Nachos", image: cheeseNachos, description: "Loaded nachos with a deep cheese pull.", ingredients: "Tortilla, cheese blend, salsa", price: "$11" },
    ],
  },
  {
    k: "07c",
    chapter: "Interlude",
    name: "Wok-Tossed Rice",
    emphasis: "Rice",
    tag: "Aromatic · Smoky · Fusion",
    note: "Bowls",
    copy: "Steam rising in cinematic columns. Grains separate, glossy, alive.",
    align: "right",
    tone: "from-[hsl(28_40%_18%_/_0.3)]",
    items: [
      { id: "veg-fried-rice", name: "Veg Fried Rice", image: vegFriedRice, description: "Wok-tossed rice with garden vegetables.", ingredients: "Rice, vegetables, soy, sesame", price: "$11" },
      { id: "schezwan-fried-rice", name: "Schezwan Fried Rice", image: schezwanFriedRice, description: "Spicy schezwan rice with smoky wok char.", ingredients: "Rice, schezwan sauce, vegetables", price: "$12" },
      { id: "paneer-fried-rice", name: "Paneer Fried Rice", image: paneerFriedRice, description: "Aromatic rice with cubes of golden paneer.", ingredients: "Rice, paneer, vegetables, soy", price: "$13" },
    ],
  },
  {
    k: "07d",
    chapter: "Interlude",
    name: "Curated Combo Treats",
    emphasis: "Combo",
    tag: "Paired · Considered · Complete",
    note: "Designed Together",
    copy: "Two plates, one rhythm. Pairings designed for satisfaction.",
    align: "left",
    tone: "from-[hsl(28_40%_18%_/_0.3)]",
    items: [
      { id: "fried-rice-manchurian", name: "Fried Rice + Manchurian", image: friedRiceManchurian, description: "Classic pairing — fried rice with tangy manchurian.", ingredients: "Fried rice, manchurian gravy", price: "$16" },
      { id: "noodles-chilli-paneer", name: "Noodles + Chilli Paneer", image: noodlesChilliPaneer, description: "Hakka noodles with wok-tossed chilli paneer.", ingredients: "Noodles, chilli paneer", price: "$17" },
    ],
  },
  {
    k: "08",
    chapter: "Final Course",
    name: "Rich & Tempting Desserts",
    emphasis: "Desserts",
    tag: "Warm Decadence · Chocolate Theatre",
    note: "Melt Into Luxury",
    copy: "The lights drop a half-stop. Molten chocolate breaks open, vanilla ice melts into the dark. The room exhales.",
    overlay: "Melt",
    align: "right",
    tone: "from-[hsl(22_75%_22%_/_0.55)]",
    items: [
      { id: "chocolate-bomb", name: "Chocolate Bomb", image: chocolateBomb, description: "Dark chocolate shell shattered tableside over brownie, fudge, and ice cream.", ingredients: "Chocolate shell, brownie, fudge, ice cream", price: "$14", hero: true },
      { id: "sizzling-brownie", name: "Sizzling Brownie", image: sizzlingBrownie, description: "Warm brownie on a sizzling cast iron with vanilla ice and molten fudge.", ingredients: "Brownie, vanilla ice cream, chocolate fudge", price: "$13", hero: true },
    ],
  },
];

// Sanity: 46 items, 46 unique images, 46 unique ids
export const ALL_MENU_ITEMS: MenuItem[] = menuCategories.flatMap((c) => c.items);
