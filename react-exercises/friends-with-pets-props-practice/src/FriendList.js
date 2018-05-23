import React from 'react';
import Friend from './Friends';
import PropTypes from 'prop-types';

const FriendList = (props) => {

    const mappedFriends = props.friends.map(friend => {
       
        return(
            <Friend name={friend.name}
                    age={friend.age}
                    pet={friend.pets}
                    />
    )
})
        return(
            <div>
                { mappedFriends }
            </div>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}


export default FriendList;