import React, { useState } from 'react'
import Img from '../assets/images/avatar-mark-webber.webp'
import './Notifications.css' 

export default function Notifications(props) {

    let [notifications, setNotifications] = useState([]);
    let [readAll, setreadAll] = useState();
    
    
    notifications = [
        {
            userId: 1,
            userName: "Mark Webber",
            notificationId: "postReaction",
            userImg: '../assets/images/avatar-mark-webber.jpg',
            time: "1m ago",
            post: "My first tournament today!",
            postLink: "https://www.w3schools.com/howto/tryit.asp?font=Plus%20Jakarta%20Sans",
            read: true
        },
        {
            userId: 2,
            userName: "Angela Gray",
            notificationId: "followedYou",
            userImg: '../assets/images/avatar-angela-gray.jpg',
            time: "5m ago",
        },
        {
            userId: 3,
            userName: "Jacob Thompson",
            notificationId: "group",
            userImg: '../assets/images/avatar-jacob-thompson.jpg',
            time: "1 day ago",
            post: "Chess Club",
            postLink: "https://www.w3schools.com/howto/tryit.asp?font=Plus%20Jakarta%20Sans"
        },
        {
            userId: 4,
            userName: "Rizky Hasanuddin",
            notificationId: "privateMessage",
            userImg: '../assets/images/avatar-rizky-hasanuddin.jpg',
            time: "5 days ago",
            post: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
            postLink: "https://www.w3schools.com/howto/tryit.asp?font=Plus%20Jakarta%20Sans"
        },
        {
            userId: 5,
            userName: "Kimberly Smith",
            notificationid:  "comment",
            userImg: '../assets/images/avatar-kimberly-smith.jpg',
            time: "1 week ago",
            post: "",
            postLink: "https://www.w3schools.com/howto/tryit.asp?font=Plus%20Jakarta%20Sans"
        },
        {
            userId: 6,
            userName: "Nathan Peterson",
            notificationId: "postReaction",
            userImg: '../assets/images/avatar-rizky-hasanuddin.jpg',
            time: "2 weeks ago",
            post: "5 end-game strategies to increase your win rate",
            postLink: "https://www.w3schools.com/howto/tryit.asp?font=Plus%20Jakarta%20Sans"
        },
        {
            userId: 7,
            userName: "Anna Kim",
            notificationId: "group",
            userImg: '../assets/images/avatar-anna-kim.jpg',
            time: "2 weeks ago",
            post: "Chess Club",
            postLink: "https://www.w3schools.com/howto/tryit.asp?font=Plus%20Jakarta%20Sans"
        }
    ]
    

    return (
    <div className={ notifications[0].read ? 'notificationContainer' : 'notificationContainer active'}>
        <div className='imgContainer'>
            <img alt='Username' src={Img} />
        </div>
        <div className='contentContainer'>
            <p className='content'><strong>Mark Webber</strong> reacted to your recent post <span>My first tournament today!</span></p>
            <span className='time'>1m ago</span>
        </div>
    </div>
  )
}
