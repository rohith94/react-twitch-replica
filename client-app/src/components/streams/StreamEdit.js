import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { editStream, fetchStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
  componentDidMount() {
    if (!this.props.stream) {
      this.props.fetchStream(this.props.match.params.id);
    }
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    return (
      <div>
        <div>
          <h3>Edit Stream</h3>
          <div>
            <StreamForm
              initialValues={_.pick(this.props.stream, "title", "description")}
              onSubmit={this.onSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, {
  fetchStream: fetchStream,
  editStream: editStream,
})(StreamEdit);
