import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    return this.props.stream ? (
      <div>
        <h1>{this.props.stream.title}</h1>
        <h4>{this.props.stream.description}</h4>
      </div>
    ) : (
      <div>loading</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream: fetchStream })(
  StreamShow
);
