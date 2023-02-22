export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  link: string;
  image: string;
}

export const products = [
  {
    id: 1,
    name: 'ARONYX Vitamin Brightening',
    price: 45,
    description:
      'Type: a set of care cosmetics. Purpose: for women. The composition of the set: face cream, serum, cream for the skin around the eyes, foam for washing',
    rating: 9,
    link: 'https://kaspi.kz/shop/p/aronyx-vitamin-brightening-nabor-uhodovoi-kosmetiki-dlja-zhenschin-108115055/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/ha4/67049232236574/aronyx-vitamin-brightening-nabor-ukhodovoi-kosmetiki-dlya-zhenshchin-108115055-1.jpg',
  },
  {
    id: 2,
    name: 'Sulwhasoo Firming Care Essential Ritual 3 items',
    price: 50,
    description:
      'Type: a set of care cosmetics. Purpose: for women. The composition of the set: face cream,serum, emulsion, washing foam.',
    link: 'https://kaspi.kz/shop/p/sulwhasoo-firming-care-essential-ritual-3-items-nabor-uhodovoi-kosmetiki-dlja-zhenschin-101080509/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/ha2/62806020259870/sulwhasoo-firming-care-essential-ritual-3-items-101080509-1-Container.jpg',
  },
  {
    id: 3,
    name: 'O HUI Prime Advancer 2 Kind of Core Set',
    price: 60,
    description:
      'Type: a set of care cosmetics. Purpose: for women. The composition of the set: face cream,serum, emulsion, washing foam.',
    link: 'https://kaspi.kz/shop/p/o-hui-prime-advancer-2-kind-of-core-set-nabor-uhodovoi-kosmetiki-dlja-zhenschin-105813580/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/ha2/62806020259870/sulwhasoo-firming-care-essential-ritual-3-items-101080509-1-Container.jpg',
  },
  {
    id: 4,
    name: 'Dr.Ceuracle Cleansing Duo Collection',
    price: 42,
    description:
      'Type: a set of care cosmetics. Purpose: for women. The composition of the set: face cream,serum, emulsion, washing foam.',
    link: 'https://kaspi.kz/shop/p/dr-ceuracle-cleansing-duo-collection-nabor-uhodovoi-kosmetiki-dlja-zhenschin-101270564/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he1/ha9/52479565692958/nabor-dla-lica-prime-advancer-2-kind-of-core-set-105813580-1.jpg',
  },
  {
    id: 5,
    name: 'Dr.Ceuracle Tea Tree Purifine Duo Set ',
    price: 38,
    description:
      'Type: a set of care cosmetics. Purpose: for women. The composition of the set: face cream,serum, emulsion, washing foam.',
    link: 'https://kaspi.kz/shop/p/dr-ceuracle-tea-tree-purifine-duo-set-nabor-uhodovoi-kosmetiki-dlja-zhenschin-102019852/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6e/hef/49928495595550/dr-ceuracle-tea-tree-purifine-duo-set-102019852-1-Container.jpg',
  },
  {
    id: 6,
    name: 'BABOR Powder Pink',
    price: 24,
    description:
      'Type: a set of care cosmetics. Purpose: for women. The composition of the set: face cream,serum, emulsion, washing foam.',
    link: 'https://kaspi.kz/shop/p/babor-pudrovyi-rozovyi-nabor-uhodovoi-kosmetiki-dlja-zhenschin-102781003/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/h19/46977049985054/babor-pudrovyj-rozovyj-102781003-1.jpg',
  },
  {
    id: 7,
    name: 'Gemma Queen set',
    price: 48,
    description:
      'Type: a set of care cosmetics. Purpose: for women. The composition of the set: face cream,serum, emulsion, washing foam.',
    link: 'https://kaspi.kz/shop/p/gemma-queen-set-nabor-uhodovoi-kosmetiki-dlja-zhenschin-102663408/?c=750000000#!/item',

    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h65/49869014040606/gemmove-nabor-queen-set-170-ml-102663408-1.jpg',
  },
  {
    id: 8,
    name: 'Gemma Gemmove Queen',
    price: 73,
    description:
      'Type: a set of care cosmetics. Purpose: for women. The composition of the set: face cream,serum, emulsion, washing foam.',
    link: 'https://kaspi.kz/shop/p/gemma-gemmove-queen-nabor-uhodovoi-kosmetiki-uniseks-101473234/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/h16/45808680697886/gemma-gemmove-queen-set-multi-essence-ample-101473234-1.jpg',
  },
  {
    id: 9,
    name: 'KeraSys Perfume Lovely Romantic ',
    price: 67,
    description:
      'Type: a set of care cosmetics. Purpose: for women. The composition of the set: face cream,serum, emulsion, washing foam.',
    link: 'https://kaspi.kz/shop/p/kerasys-perfume-lovely-romantic-nabor-po-uhodu-za-volosami-i-telom-dlja-zhenschin-106938772/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/h74/63350032269342/nabor-podarocnyj-kerasys-perfume-lovely-romantic-kor-106938772-1.jpg',
  },
  {
    id: 10,
    name: 'Welcos Confume Argan Treatment Oil ',
    price: 50,
    description:
      'Type: a set of care cosmetics. Purpose: for women. The composition of the set: face cream,serum, emulsion, washing foam.',
    link: 'https://kaspi.kz/shop/p/welcos-confume-argan-treatment-oil-nabor-po-uhodu-za-volosami-dlja-zhenschin-100856938/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/h5e/33236425310238/welcos-confume-argan-treatment-oil-120-ml-25-ml-100856938-1-Container.jpg',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
