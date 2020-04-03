import React, {useState} from "react"
import FeedIcon from "./FeedIcon"

export default FeedIconContainer = ({feed, disableTick, handleStory, section, size }) => { 
    const [selected, setSelected] = useState(feed.is_suscribed)
    const handlePress = ()=>{
        setSelected(!selected)
    }


    return (
        <FeedIcon 
            handlePress={disableTick? ()=>handleStory({id: feed.id, section}): handlePress} 
            tick={selected} 
            name={feed.name} 
            hasPendingStories={feed.has_pending_stories} 
            thumbnail={feed.thumbnail}
            preview={disableTick? feed.stories[0].thumbnail: null}
            disableTick={disableTick}
            size={size}
             />
    )

}
