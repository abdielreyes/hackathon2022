interface SubtitleProps {
  rarity: 'common' | 'rare' | 'epic'
}

export default function RarityTag({rarity}:SubtitleProps) {
  const rarityTranslate = {
    'common': {
      label:'Común',
      color: 'bg-green-500'
    },
    'rare': {
      label:'Rare',
      color: 'bg-purple-500'
    },
    'epic': {
      label:'Épico',
      color: 'bg-yellow-500'
    },
  }
  return (
    <div className={`text-gray-2 font-bold py-3 ${rarityTranslate[rarity].color}`}>
      {rarityTranslate[rarity].label}
    </div>
  )
}
