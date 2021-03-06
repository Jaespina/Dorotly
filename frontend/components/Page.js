import React, { Component } from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";
import styled from "styled-components";


class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header></Header>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
