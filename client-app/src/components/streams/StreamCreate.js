import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <div>
          <StreamForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default connect(null, { createStream: createStream })(StreamCreate);
