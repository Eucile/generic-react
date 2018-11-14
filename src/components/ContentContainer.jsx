import React from "react";
import SidebarItems from "./SidebarItems";
import MainContent from "./MainContent";
import CommentList from './CommentList';
import NewCommentControl from './NewCommentControl';

class ContentContainer extends React.Component{
  constructor() {
    super();
    this.state = {
      masterCommentList: []
    };
    this.handleAddingNewCommentToList = this.handleAddingNewCommentToList.bind(this);
  }
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateCommentElapsedWaitTime(),
    60000
    );
  }
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }
  updateCommentElapsedWaitTime() {
    console.log("check");
    let newMasterCommentList = this.state.masterCommentList.slice();
    newMasterCommentList.forEach((comment) =>
      comment.formattedWaitTime = (comment.timeOpen).fromNow(true)
    );
    this.setState({masterCommentList: newMasterCommentList});
  }

  handleAddingNewCommentToList(newComment){
    var newMasterCommentList = this.state.masterCommentList.slice();
    newMasterCommentList.push(newComment);
    this.setState({masterCommentList: newMasterCommentList});
  }

  render(){
    var containerStyle = {
      position: "relative",
      marginTop: 100,
      marginLeft: "auto",
      marginRight: "auto",
      width: "45%",
    };

    return (
      <div style={containerStyle}>
        <SidebarItems/>
        <div>
          <MainContent/>
          <NewCommentControl
            onNewCommentCreation={this.handleAddingNewCommentToList}/>
          <CommentList
            commentList={this.state.masterCommentList}/>
        </div>
      </div>
    );
  }
}


export default ContentContainer;
