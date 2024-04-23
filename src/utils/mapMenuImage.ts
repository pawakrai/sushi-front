import {
  // sushi
  AmaebiNigiri,
  EbiNigiri,
  HotateNigiri,
  IkaNigiri,
  MaguroNigiri,
  SabaNigiri,
  SakeNigiri,
  UnagiNigiri,

  // drinks
  BlackTea,
  BoberTea,
  CokeCan,
  FijiWater,
  GreenTea,

  // desserts
  Dessert01,
  Dessert02,
  Dessert03,
} from '@/components/Image'

export function mapMenuImage(name: string) {
  const imageMap = {
    'Sake Nigiri': SakeNigiri,
    'Ebi Nigiri': EbiNigiri,
    'Maguro Nigiri': MaguroNigiri,
    'Saba Nigiri': SabaNigiri,
    'Amaebi Nigiri': AmaebiNigiri,
    'Hotate Nigiri': HotateNigiri,
    'Ika Nigiri': IkaNigiri,
    'Unagi Nigiri': UnagiNigiri,
    'Black Tea': BlackTea,
    'Bober Tea': BoberTea,
    'Coke can': CokeCan,
    'FIJI Water': FijiWater,
    'Green Tea': GreenTea,
    'Dessert 01': Dessert01,
    'Dessert 02': Dessert02,
    'Dessert 03': Dessert03,
  }

  return imageMap[name as keyof typeof imageMap] || SakeNigiri
}
