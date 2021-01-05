// @flow
import * as React from 'react';
import Slider from 'react-slick';
import { createBlock } from 'utils/bem-helper';
import './carousel.scss';

const block = createBlock('carousel');

export class Carousel extends React.PureComponent {
  render() {
    const { asNavFor, arrows = false, className = '', setCarouselRef = _ => _ } = this.props;

    return (
      <Slider
        arrows={arrows}
        asNavFor={asNavFor}
        className={`${className} ${block.block()}`}
        ref={setCarouselRef}
      >
        <div className={`${block.element('pic')} ${block.modifyElement('pic', '1')}`} />
        <div className={`${block.element('pic')} ${block.modifyElement('pic', '2')}`} />
        <div className={`${block.element('pic')} ${block.modifyElement('pic', '3')}`} />
        <div className={`${block.element('pic')} ${block.modifyElement('pic', '4')}`} />
        <div className={`${block.element('pic')} ${block.modifyElement('pic', '5')}`} />
        <div className={`${block.element('pic')} ${block.modifyElement('pic', '6')}`} />
      </Slider>
    );
  }
}
