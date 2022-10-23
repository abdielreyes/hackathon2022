interface SubtitleProps {
  rarity: string
}

export default function RarityTag({rarity}:SubtitleProps) {
  const rarityTranslate:any = {
    'Común': {
      label:'Común',
      color: 'bg-green-common'
    },
    'Raro': {
      label:'Raro',
      color: 'bg-purple-rare'
    },
    'Épico': {
      label:'Épico',
      color: 'bg-yellow-epic'
    },
  }
  return (
    <div className={`flex items-center text-white-2 py-1 px-3 rounded-xl text-xs w-fit ${rarityTranslate[rarity].color}`}>
      {rarityTranslate[rarity].label}
    </div>
  )
}
