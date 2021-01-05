import * as React from 'react';
import { createBlock } from 'utils/bem-helper';
import { Carousel } from 'components/carousel';
import './bg-layer.scss';

const block = createBlock('bg-layer');

export class BgLayer extends React.PureComponent {
  render() {
    return (
      <div className={block.block()}>
        <Carousel setCarouselRef={this.props.setCarouselRef} className={block.element('carousel')} />
      </div>
    );
  }
}
