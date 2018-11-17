import React from 'react'
import Category from './category'
import './categories.css'
import HeaderContainer from '../../widgets/container/header-container'
import Media from '../../playlist/components/media';

function Categories(props) { 
    
    return(
        <div className="Categories">
        <HeaderContainer user={props.user}/>
            {
                props.isLoading && 
                <p>Buscando tus videos favoritos...</p>
            }
            {   
                props.search.map(item => {
                    
                    return <Media 
                    title={item.get('title')}
                    author={item.get('author')}
                    type={item.get('type')}
                    cover={item.get('cover')}
                    src={item.get('src')}
                    id={item.get('id')}
                    key={item.get('id')}
                    openModal={props.handleOpenModal}
                    />   
                })
            }
            {
            props.categories.map((item) => {
              return <Category
            handleOpenModal = {props.handleOpenModal}
            title={item.get('title')}
            author ={item.get('author')}
            description={item.get('description')}
            playlist={item.get('playlist')}
            key={item.get('id')}
            />
            })
            }
        </div>
    )
}

export default Categories