import React, { useState } from 'react';

function TodayTime() {
        const [today, setToday] = useState(Date.now());

        function upTime() {
            setToday(Date.now());
        }

        setInterval(upTime, 1000);
       
        function Watch(props) {
            const date = new Date(props.milliseconds)
            const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric' };
            const time = date.toLocaleDateString('he-IL', options)
        
            return (
                <span>{time}</span>
            );
        }

    return (
        <Watch milliseconds={today} />
    );
}

export default TodayTime;
