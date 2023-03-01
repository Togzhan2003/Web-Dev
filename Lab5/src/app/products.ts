export interface Product {
  id: number;
  category:string;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  brand: string;
  like:number;
  link: string;
}

export const products = [
{
  id: 1,
  category: "Hair care",
  name: 'Ollin Professional Perfect Hair 15 in 1 Spray Conditioner',
  price: 7.99,
  description: 'type: spray conditioner, action: moisturizing,nutrition, volume: 250, features: does not require rinsing',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8c/h9d/49612518391838/ollin-perfect-hair-15-v-1-250-ml-100008645-1-Container.jpg',
  rating: 4.9,
  brand: "Ollin",
  like: 5,
  link:"https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-v-1-sprei-konditsioner-250-ml-100008645/?c=151010000#!/item"
},
{
  id: 2,
  category: "Hair care",
  name: 'WELLA Pro Series Deep Recovery Shampoo',
  price: 3.89,
  description: 'action: giving shine, restoring color, strengthening, features: for daily use, purpose: for men, for women',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/hd0/47580561604638/wella-pro-series-glubokoe-vosstanovlenie-pridanie-bleska-500-ml-101001802-1.jpg',
  rating: 4.5,
  brand: "WELLA",
  like: 4,
  link:"https://kaspi.kz/shop/p/wella-pro-series-glubokoe-vosstanovlenie-shampun-500-ml-101001802/?c=151010000#!/item"
},
{
  id: 3,
  category: "Hair care",
  name: 'Compliment Naturalis 3in1 with pepper mask',
  price: 4.58,
  description: 'type: mask, action: against hair loss, growth activation, strengthening, hair type: for all types, colored, thin and damaged',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he7/h3c/48351550504990/compliment-naturalis-3v1-s-percem-500-ml-100319701-1-Container.jpg',
  rating: 4.3,
  brand: "Compliment Naturalis",
  like: 3,
  link:"https://kaspi.kz/shop/p/compliment-naturalis-3v1-s-pertsem-maska-500-ml-100319701/?c=151010000#!/item"
},
{
  id: 4,
  category: "Hair care",
  name: 'Herbal Essences Deep Recovery Moroccan Argan Oil',
  price: 4.36,
  description: 'action: moisturizing, protection, features: for daily use, purpose: for women',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/h0a/65289788882974/herbal-essences-marokkanskoe-arganovoe-maslo-400-ml-100224196-1.jpg',
  rating: 3.9,
  brand: "Herbal Essences",
  like: 2,
  link:"https://kaspi.kz/shop/p/herbal-essences-glubokoe-vosstanovlenie-marokkanskoe-arganovoe-maslo-shampun-400-ml-100224196/?c=151010000#!/item"
},
{
  id: 5,
  category: "Hair care",
  name: 'Oyster Cosmetics Sublime Fruit mask with olive extract',
  price: 8.35,
  description: 'type: mask, action: against hair loss, brightening, moisturizing, nutrition',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf5/h74/34257732599838/oyster-cosmetics-sublime-fruit-s-ekstraktom-olivy-1-l-101563671-1-Container.jpg',
  rating: 4.9,
  brand: "Oyster Cosmetics",
  like: 1,
  link:"https://kaspi.kz/shop/p/oyster-cosmetics-sublime-fruit-maska-s-ekstraktom-olivy-1000-ml-101563671/?c=151010000#!/item"
},
{
  id: 6,
  category: "Facial care",
  name: 'Farmstay All-In-One Collagen and Hyaluronic Acid Ampoule',
  price: 6.23,
  description: 'type: serum, action: nutrition, moisturizing, radiance',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/h24/49069796392990/farmstay-all-in-one-collagen-hyaluronic-acid-ampoule-250-ml-100028087-1-Container.jpg',
  rating: 3.5,
  brand: "Farmstay",
  like: 5,
  link:"https://kaspi.kz/shop/p/farmstay-all-in-one-collagen-and-hyaluronic-acid-ampoule-syvorotka-250-ml-100028087/?c=151010000#!/item"
},
{
  id: 7,
  category: "Facial care",
  name: 'Dr.Ceuracle Pro Balance Pure Cleansing hydrophilic Oil',
  price: 16.07,
  description: 'type: hydrophilic oil, volume: 155 ml',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h92/h3d/51067154530334/dr-ceuracle-pro-balance-pure-cleansing-gidrofil-noe-maslo-150-ml-101481415-1.jpg',
  rating: 4.9,
  brand: "Dr.Ceuracle",
  like: 4,
  link:"https://kaspi.kz/shop/p/dr-ceuracle-pro-balance-pure-cleansing-gidrofil-noe-maslo-155-ml-101481415/?c=151010000#!/item"
},
{
  id: 8,
  category: "Facial care",
  name: 'Heimish All Clean Balm',
  price: 12.75,
  description: 'type: balm, volume: 120 ml, skin type: for all types',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h7a/32773972426782/heimish-all-clean-balm-mnogofunkcionalnyj-dla-lica-120-ml-100341040-1-Container.jpg',
  rating: 3.9,
  brand: "Heimish",
  like: 3,
  link:"https://kaspi.kz/shop/p/heimish-all-clean-balm-bal-zam-120-ml-100341040/?c=151010000#!/item"
},
{
  id: 9,
  category: "Facial care",
  name: 'Dr.Ceuracle Pro Balance Biotics Moisturizer',
  price: 16.15,
  description: 'type: cream, action: moisturizing, application area: for face',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/h6d/33032604221470/dr-ceuracle-pro-balance-biotics-moisturizer-100-ml-100675870-1-Container.jpg',
  rating: 4.8,
  brand: "Dr.Ceuracle",
  like: 2,
  link:"https://kaspi.kz/shop/p/dr-ceuracle-pro-balance-biotics-moisturizer-krem-100-ml-100675870/?c=151010000#!/item"
},
{
  id: 10,
  category: "Facial care",
  name: 'MEDI-PEEL Algo-Tox Deep Clear',
  price: 9.98,
  description: 'type: foam, volume: 150 ml, skin type: for all types',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/he7/32765917593630/medi-peel-algo-tox-deep-clear-150-ml-100272231-1-Container.jpg',
  rating: 3.8,
  brand: "MEDI-PEEL",
  like: 1,
  link:"https://kaspi.kz/shop/p/medi-peel-algo-tox-deep-clear-penka-150-ml-100272231/?c=151010000#!/item"
},
{
  id: 11,
  category: "Decorative cosmetics",
  name: 'CROME BB Snail Cream',
  price: 3.56,
  description: 'type: BB cream, Skin type: for all types, shade: beige',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/h6a/31731057950750/crome-bb-snail-cream-50-ml-17500176-1-Container.jpg',
  rating: 3.8,
  brand: "Crome",
  like: 5,
  link:"https://kaspi.kz/shop/p/crome-bb-snail-cream-bb-krem-bezhevyi-50-ml-17500176/?c=151010000#!/item"
},
{
  id: 12,
  category: "Decorative cosmetics",
  name: 'Farmstay Visible Difference Volume Up Mascara',
  price: 3.11,
  description: 'Type: for volume, brush shape: straight, waterproof: No',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/hce/31731048775710/farmstay-visible-difference-volume-up-black-17400054-1-Container.jpg',
  rating: 3.5,
  brand: "Farmstay",
  like: 4,
  link:"https://kaspi.kz/shop/p/farmstay-visible-difference-volume-up-dlja-ob-ema-chernyi-17400054/?c=151010000#!/item"
},
{
  id: 13,
  category: "Decorative cosmetics",
  name: 'Beautyblender Sponge Beveled Original Pink',
  price: 1.67,
  description: 'type: chamfered sponge, quantity: 1, country of manufacture: USA',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h9a/49073675173918/beautyblender-sponzh-kaplya-original-rozovyi-1-sht-103933574-1.jpg',
  rating: 3.2,
  brand: "Original",
  like: 3,
  link:"https://kaspi.kz/shop/p/beautyblender-sponzh-skoshennyi-original-rozovyi-1-sht-103933574/?c=151010000#!/item"
},
{
  id: 14,
  category: "Decorative cosmetics",
  name: 'Sunrise Water beauty and air CC cream SPF15 kushon No. 1',
  price: 3.33,
  description: 'type: kushon, skin type: for all types, shade: light beige',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h08/51139543138334/tonalnyj-kuson-dla-lica-sunisa-104498646-1.jpg',
  rating: 3.8,
  brand: "Sunisa",
  like: 2,
  link:"https://kaspi.kz/shop/p/sunisa-water-beauty-and-air-cc-cream-spf15-kushon-1-20-ml-104498646/?c=151010000#!/item"
},
{
  id: 15,
  category: "Decorative cosmetics",
  name: 'CROME BB Snail Cream',
  price: 15.13,
  description: 'type: makeup base, Application area: for face, texture: creamy, skin type: for all types',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2a/h2a/32213948563486/heimish-artless-glow-base-spf-50-pa-40-ml-100486733-1-Container.jpg',
  rating: 4.8,
  brand: "Heimish",
  like: 1,
  link:"https://kaspi.kz/shop/p/heimish-artless-glow-base-osnova-pod-makijazh-40-ml-100486733/?c=151010000#!/item"
},
{
  id: 16,
  category: "Perfumery",
  name: 'MOSCHINO Funny toilet water EDT',
  price: 51.18,
  description: 'type: EDT eau de toilette, volume: 100 ml, Gender: for women',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/hfe/31584662814750/moschino-funny-edt-100-ml-17300760-1.jpg',
  rating: 4.7,
  brand: "MOSCHINO",
  like: 5,
  link:"https://kaspi.kz/shop/p/moschino-funny-tualetnaja-voda-edt-100-ml-17300760/?c=151010000#!/item"
},
{
  id: 17,
  category: "Perfumery",
  name: 'LANVIN Modern Princess',
  price: 33.37,
  description: 'type: EDP perfume water, volume: 30 ml, Gender: for women',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/hd2/31615761383454/lanvin-modern-princess-edp-30-ml-17300711-1.jpg',
  rating: 4.5,
  brand: "LANVIN",
  like: 4,
  link:"https://kaspi.kz/shop/p/lanvin-modern-princess-parfjumernaja-voda-edp-30-ml-17300711/?c=151010000#!/item"
},
{
  id: 18,
  category: "Perfumery",
  name: 'DOLCE&GABBANA 3 LImperatrice',
  price: 71.21,
  description: 'type: EDT eau de toilette, volume: 100 ml, Gender: for women',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h08/h46/68076494880798/dolce-gabbana-l-imperatrice-tualetnaya-voda-edt-100-ml-102466699-1.jpg',
  rating: 4.9,
  brand: "DOLCE&GABBANA",
  like: 3,
  link:"https://kaspi.kz/shop/p/dolce-gabbana-3-l-imperatrice-tualetnaja-voda-edt-100-ml-102466699/?c=151010000#!/item"
},
{
  id: 19,
  category: "Perfumery",
  name: 'LANVIN Jeanne',
  price: 44.26,
  description: 'type: EDT eau de toilette, volume: 100 ml, Gender: for women',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8d/hd9/31759080521758/lanvin-jeanne-edp-100-ml-17301088-1.jpg',
  rating: 4.8,
  brand: "LANVIN",
  like: 2,
  link:"https://kaspi.kz/shop/p/lanvin-jeanne-parfjumernaja-voda-edp-100-ml-17301088/?c=151010000#!/item"
},
{
  id: 20,
  category: "Perfumery",
  name: 'MOSCHINO Toy 2 Bubble Gum',
  price: 55.56,
  description: 'type: EDT eau de toilette, volume: 50 ml, Gender: for women',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hfa/52638386618398/moschino-toy-2-bubble-gum-tualetnaya-voda-edt-50-ml-105913157-1.jpg',
  rating: 5.0,
  brand: "MOSCHINO",
  like: 1,
  link:"https://kaspi.kz/shop/p/moschino-toy-2-bubble-gum-tualetnaja-voda-edt-50-ml-105913157/?c=151010000#!/item"
}
]