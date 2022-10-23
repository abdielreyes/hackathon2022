interface SubtitleProps {
  rarity: 'common' | 'rare' | 'epic'
}

export default function RarityTag({rarity}:SubtitleProps) {
  const rarityTranslate = {
    'common': {
      label:'Común',
      color: 'bg-green-common'
    },
    'rare': {
      label:'Raro',
      color: 'bg-purple-rare'
    },
    'epic': {
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
