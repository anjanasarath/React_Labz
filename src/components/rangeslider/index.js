import * as React from 'react';
import Range from './range';
import './range.css';

class RangeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            min: '',
            max: '',
            step: 2
        }
        this.updateRange = this.updateRange.bind(this);
    }

    updateRange(val) {
        this.setState({
            value: val
        })
    } 

    render() {
        const { value, min, max, step } = this.state;
        return (
            <Range range={value} min={min} max={max} step={step} updateRange={this.updateRange}/>
        )
    }  
}

export default RangeSlider;