
import React, { useEffect, useState } from 'react'
import { MetaData } from '../components/MetaData'
import { FiSearch } from 'react-icons/fi'
import { Loader } from '../components/Loader'
import { JobCard } from '../components/JobCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs, getSingleJob } from '../actions/JobActions'
import { Slider } from '@mantine/core';
import { RxCross2 } from 'react-icons/rx'
import { Pagination } from '@mantine/core';


const NotificationPage = () => {
  const [notification, setNotification] = useState('');

  // This function will update the notification every 1 minute
  const fetchNotification = () => {
    // Simulating a static update that tells the user a job is ready
    setNotification('A job is ready for you!');
  };

  useEffect(() => {
    // Call fetchNotification initially when the component mounts
    fetchNotification();

    // Set up an interval to update the notification every 1 minute (60000ms)
    const intervalId = setInterval(() => {
      fetchNotification();
    }, 60000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      <div className="notification-box">
        <p>{notification}</p>
      </div>
    </div>
  );
};

export default NotificationPage;
