import React, { useState } from 'react'
import './Notifications.css'

export default function Notifications(props) {


    return (
        props.notifications.map((notifications, index) => {
            return (
                <div key={index} className={notifications.read ? 'notificationContainer' : 'notificationContainer active'}>
                    <div className='imgContainer'>
                        <img alt={notifications.userName} src={notifications.userImg} />
                    </div>
                    <div className='contentContainer'>
                        <p className='content'><strong>{notifications.userName}</strong> {notifications.notification[0].message} {notifications.notification[0].notificationPost && <span className={notifications.notification[0].notificationId === 'group' ? 'chess' : ''}>{notifications.notification[0].notificationPost}</span>}</p>
                        <span className='time'>{notifications.notification[0].time}</span>
                        {
                            notifications.notification[0].privateMessage && <p className='privateMessage'><span>{notifications.notification[0].privateMessage}</span></p>
                        }
                    </div>
                </div>
            )
        })
    )
}
