'use client'

import AnimatedCursor from 'react-animated-cursor'

const AnimateCursorPointer = () => {
  return (
    <div className='hidden lg:block'>
      <AnimatedCursor
        innerSize={20}
        outerSize={40}
        color='0, 255, 153'
        innerScale={2}
        outerScale={2}
        trailingSpeed={2}
        outerStyle={{ background: "transparent", border: "2px solid rgb(0, 255, 153)", }}
        innerStyle={{mixBlendMode: "difference", pointerEvents: "none",  }}
        showSystemCursor={true}
      />
    </div>
    
  )
}

export default AnimateCursorPointer