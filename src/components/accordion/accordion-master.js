import React, { PureComponent } from 'react';

class Container extends PureComponent  {
  render() {
    console.log(this.props)
    return (
      <div className="card-accordion">
        <div className="card-tab">
          {this.props.children}
        </div>
      </div>
    );
  }
}

class Header extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <input id={this.props.id} type="checkbox" name="tabs" />
        <label htmlFor={this.props.id}>{this.props.children}<i className="fa fa-caret-right accordion-icon" aria-hidden="true" /></label>
      </React.Fragment>
    );
  }
}

class Items extends PureComponent {
  render() {
    return (
      <div className="card-tab-content">
        {this.props.children}
      </div>
    );
  }
}

class Item extends PureComponent {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default {
  Container,
  Items,
  Item,
  Header
};