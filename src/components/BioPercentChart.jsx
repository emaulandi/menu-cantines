import React from 'react';

import ContentLayout from './ContentLayout';

const chartConfig = {
  default: {
    layoutSize: 'lg',
    title: 'bioPercMonth_width',
    height: '520',
    width: '1000',
    src: 'https://observablehq.com/embed/857101b245272036?cells=bioPercMonth_width',
  },
  smallScreen: {
    layoutSize: 'sm',
    title: 'bioPercMonth_height',
    height: '676',
    width: '100%',
    src: 'https://observablehq.com/embed/857101b245272036?cells=bioPercMonth_height',
  },
};

const BioPercentChart = ({ config = 'default' }) => (
  <ContentLayout maxWidthSize={chartConfig[config].layoutSize} isFlex>
    <iframe
      title={chartConfig[config].title}
      width={chartConfig[config].width}
      height={chartConfig[config].height}
      frameBorder="0"
      src={chartConfig[config].src}
    />
  </ContentLayout>
);

export default BioPercentChart;
