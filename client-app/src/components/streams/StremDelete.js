import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStream, fetchStream } from "../../actions";
import history from "../../history";
import Modal from "../Modal";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions = () => {
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => {
            return this.props.deleteStream(this.props.match.params.id);
          }}
        >
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderContent = (title) => {
    if (this.props.stream) {
      return `Are you sure you want to delete the stream with title : ${this.props.stream.title}`;
    } else {
      return "Are you sure you want to delete the stream .?";
    }
  };
  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, {
  fetchStream: fetchStream,
  deleteStream: deleteStream,
})(StreamDelete);
