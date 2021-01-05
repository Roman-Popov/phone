// @flow
import * as React from 'react';
import { createBlock } from 'utils/bem-helper';
import { PhoneLayer } from 'components/phone-layer';
import { BgLayer } from 'components/bg-layer';
import './app.scss';

const block = createBlock('App');

export class App extends React.PureComponent {
  state = {
    carouselRef: null,
  };

  setCarouselRef = (carouselRef) => this.setState({ carouselRef })

  render() {
    return (
      <div className={block.block()}>
        <BgLayer setCarouselRef={this.setCarouselRef} />
        <PhoneLayer carouselRef={this.state.carouselRef} />
      </div>
    );
  }
}
