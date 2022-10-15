let notificationss = [
    {
        userId: 1,
        userName: "Mark Webber",
        notification: [
            {
                notificationId: "postReaction",
                message: "reacted to your recent post",
                notificationPost: "My first tournament today!",
                notificationLink: "https://www.w3schools.com/howto/tryit.asp?font=Plus%20Jakarta%20Sans",
                time: "1m ago"
            }
        ],
        userImg: "../assets/images/avatar-mark-webber.jpg",
        read: false
    },
    {
        userId: 2,
        userName: "Angela Gray",
        notification: [
            {
                notificationId: "followedYou",
                message: "followed you",
                time: "5m ago"
            }
        ],
        userImg: "../assets/images/avatar-angela-gray.jpg",
        read: false
    },
    {
        userId: 3,
        userName: "Jacob Thompson",
        notification: [
            {
                notificationId: "group",
                message: "has joined your group",
                notificationPost: "Chess Club",
                notificationLink: "https://www.w3schools.com/howto/tryit.asp?font=Plus%20Jakarta%20Sans",
                time: "1day ago"
            }
        ],
        userImg: "../assets/images/avatar-jacob-thompson.jpg",
        read: false
    },
    {
        userId: 4,
        userName: "Rizky Hasanuddin",
        notification: [
            {
                notificationId: "privateMessage",
                message: "Sent you a private message",
                privateMessage: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
                notificationLink: "https://www.w3schools.com/howto/tryit.asp?font=Plus%20Jakarta%20Sans",
                time: "5days ago"
            }
        ],
        userImg: "../assets/images/avatar-rizky-hasanuddin.jpg",
        read: true
    },
    {
        userId: 5,
        userName: "Kimberly Smith",
        notification: [
            {
                notificationId: "comment",
                message: "commented on your picture",
                notificationPost: " ",
                notificationLink: "https://www.w3schools.com/howto/tryit.asp?font=Plus%20Jakarta%20Sans",
                time: "1week ago"
            }
        ],
        userImg: "../assets/images/avatar-kimberly-smith.jpg",
        read: true
    },
    {
        userId: 6,
        userName: "Nathan Peterson",
        notification: [
            {
                notificationId: "postReaction",
                message: "reacted to your recent post",
                notificationPost: "5 end-game strategies to increase your win rate",
                notificationLink: "https://www.w3schools.com/howto/tryit.asp?font=Plus%20Jakarta%20Sans",
                time: "2weeks ago"
            }
        ],
        userImg: "../assets/images/avatar-rizky-hasanuddin.jpg",
        read: true
    },
    {
        userId: 7,
        userName: "Anna Kim",
        notification: [
            {
                notificationId: "group",
                message: "left the group",
                notificationPost: "Chess Club",
                notificationLink: "https://www.w3schools.com/howto/tryit.asp?font=Plus%20Jakarta%20Sans",
                time: "1day ago"
            }
        ],
        userImg: "../assets/images/avatar-anna-kim.jpg",
        read: true
    }
]

export default notificationss;