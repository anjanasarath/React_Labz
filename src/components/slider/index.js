import React from 'react';
import ContentSlider from './slider';
import { cardContent } from '../../api/card';
import './slider.css';
import ArrowLeft from './arrowLeft';
import ArrowRight from './arrowRight';

function transformScale(index, activeIndex) {
  let idx = index > activeIndex ? index - 1 : index;
  return {
    zIndex: -7 * idx,
    transform: 'scale(calc(1 - ' + (idx * 0.05) + '))',
    bottom: '-' + (idx * 20) + 'px'
  }
}

const ListCard = (props) => (
      <li className={props.activeIndex === props.index ? 'currentSlide' : 'offSlide'}
        style={props.activeIndex === props.index? {} : transformScale(props.index, props.activeIndex)}>
        <ContentSlider {...props.card} />
      </li>
)

class Slider extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          currIndex: 1
        }
    }

    prevSlide = () => {
      let currIndex = this.state.currIndex - 1;
      if(currIndex === 0){
        currIndex = cardContent.length;
      }
      this.setState({
        currIndex: currIndex,
      });
    }

    nextSlide = () => {
      let currIndex = this.state.currIndex + 1;
      if(currIndex > cardContent.length){
        currIndex = 1;
      }
      this.setState({
        currIndex: currIndex,
      });
    }

    render() {
          return(
            <div className="slider">
                <div className="dashboard-slider">
                    <div className="dashboard-slider-slides">
                        <ul>
                          {cardContent.map((card, index) => (
                              <ListCard card={card}
                                key={card.cardId}
                                index={index + 1}
                                activeIndex={this.state.currIndex}
                              />
                            )
                          )}
                        </ul>
                    </div>
                    <div className="slide-count">
                        <span>{this.state.currIndex}/{cardContent.length}</span>
                    </div>
                    <div className="dashboard-slider-controls">
                        <ArrowLeft prevSlide={this.prevSlide} />
                        <ArrowRight nextSlide={this.nextSlide}  />
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;
