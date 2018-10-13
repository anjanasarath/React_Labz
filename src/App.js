import React, { Component } from 'react';
// import Accordion from './components/accordion';
// import RangeSlider from './components/rangeslider';
// import Input from './components/form/Input';
import Slider from './components/slider';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCount: 0
        }
        this.handleCurrentCountChange = this.handleCurrentCountChange.bind(this);
    }
    handleCurrentCountChange(e) {
        this.setState({ currentCount: e.target.value }, () => console.log('Count', this.state.currentCount));
    }
    render() {
        return (
            <div>
                    {/* <Accordion/>
                    <RangeSlider />
                    <Input
                        inputType={'number'}
                        title={'Count'}
                        name={'count'}
                        controlFunc={this.handleCurrentCountChange}
                        content={this.state.currentCount}
                        placeholder={'Count'} /> */}
                    <Slider/>             
            </div>
        );
    }
}

export default App;
