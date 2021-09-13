import React from 'react';

import { Text } from '@visx/text';
import { scaleLinear } from '@visx/scale';
import { Wordcloud } from '@visx/wordcloud';

import bioEtIndusAliment from '../src/data/bioEtIndus.json';

const WordCloud = ({ data = bioEtIndusAliment, width = 800, height = 400 }) => {
  const words = data
    .filter(({ count }) => count > 1)
    .map(w => ({
      ...w,
      text: `${w.text.slice(0, 20)}${w.text.length > 20 ? '...' : ''}`,
    }));

  const fontScale = scaleLinear({
    domain: [Math.min(...words.map(w => w.count)), Math.max(...words.map(w => w.count))],
    range: [10, 100],
  });
  const colorScale = scaleLinear({
    domain: [10, 100],
    range: ['lightgrey', 'grey'],
  });

  const fontSizeSetter = datum => fontScale(datum.count);

  return (
    <Wordcloud
      words={words}
      width={width}
      height={height}
      fontSize={fontSizeSetter}
      font="Helevetica"
      padding={2}
      spiral="archimedean"
    >
      {cloudWords =>
        cloudWords.map(w => (
          <Text
            key={w.text}
            fill={colorScale[w.size]}
            textAnchor="middle"
            transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
            fontSize={w.size}
            fontFamily={w.font}
          >
            {w.text}
          </Text>
        ))}
    </Wordcloud>
  );
};

export default WordCloud;
