import React, { useState } from 'react';

import { useTransition, animated } from '@react-spring/web';

const SmileyAnimation = ({ firstElement, secondElement }) => {

  const defaultStyle = {
    fontSize: '50px',
    position: 'absolute',
    margin: '5px',
  }
  const maxOpacity = 0.8;
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: maxOpacity },
    leave: { opacity: 0 },
    reverse: toggle,
    config: { duration: 500 },
    delay: 200,
  });

  return transitions(({ opacity }, item) =>
    item ? (
      <animated.p
        style={{
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, maxOpacity] }),
          ...defaultStyle
        }}>
        { firstElement }
      </animated.p>
    ) : (
      <animated.p
        onMouseOver={() => set(!toggle)}
          style={{
          opacity: opacity.to({ range: [1.0, 0.0], output: [maxOpacity, 0] }),
          ...defaultStyle
        }}>
        { secondElement }
      </animated.p>
    )
  )
};

export default SmileyAnimation;