import React from 'react';
import StatusCodeCard from './StatusCodeCard';

const StatusCodes = ({ status_codes, setShowDeleteMsg }) => {
    return (
        <main>
            {status_codes && 
              status_codes.sort((a, b) => a.status - b.status).map(status_code => {
                    return (
                        <StatusCodeCard
                            key={`sc${status_code.id}`}
                            status_code={status_code}
                            setShowDeleteMsg={setShowDeleteMsg}
                        />)                  
            })}
        </main>
    )
};

export default StatusCodes;