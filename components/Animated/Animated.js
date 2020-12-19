import {useSpring, animated} from 'react-spring'
import React from 'react'


export default function Animated({children}) {

  const props = useSpring({
    opacity: 1,
    height: 'inherit',
    from: {opacity: 0},
  });
  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  )
}