import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types'
import './media.css'

class Media extends PureComponent{
    // state = {
    //     author: 'Leonidas Esteban'
    // }
    handleClick = (event) => {
    //     this.setState({
    //         author: 'Gabriel De Andrade'
    //     })
    this.props.openModal(this.props.id)
    }
    render(){
        const {title, author, cover, handleClick} = this.props     
        
        return(
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img
                    className= "Media-image" 
                    src={cover} 
                    alt=""
                    width={260}
                    height={160}
                    />
                </div>
                <h3 className="Media-title">{title}</h3>
                <p className="Media-author">{author}</p>
            </div>
        )
    }
}

// Media.propTypes = {
//     title : PropTypes.string,
//     author : PropTypes.string,
//     image: PropTypes.string
// }

export default Media 