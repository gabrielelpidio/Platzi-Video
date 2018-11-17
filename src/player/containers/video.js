import React, { Component } from "react";
import './video.css'

class Video extends Component {
  state = {

  }
  togglePlay(){
    if(this.props.pause){
      this.video.pause()
    } else {
      this.video.play()
    }
  }

    componentDidUpdate(nextProps){
    if (nextProps.pause !== this.props.pause){
      this.togglePlay();
    }
  }
  setRef = element => {
    this.video = element
  }
  render() {
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked
    } = this.props
    return (
      <div className="Video">
        <video 
        ref={this.setRef}
        autoPlay={this.props.autoplay}
        src={this.props.src} 
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onSeeking={handleSeeking}
        onSeeked={handleSeeked}
        />
      </div>
    );
  }
}

export default Video;
