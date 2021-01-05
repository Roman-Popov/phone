import * as React from 'react';
import { createBlock } from 'utils/bem-helper';
import { Carousel } from 'components/carousel';
import './phone-layer.scss';

const block = createBlock('phone-layer');

export class PhoneLayer extends React.PureComponent {
  render() {
    return (
      <div className={block.block()}>
        <div className={block.element('container')}>
          <Carousel  asNavFor={this.props.carouselRef} />
        </div>
        <div className={block.element('cover')} />
      </div>
    );
  }
}
