import React, { Component } from 'react';

class ControlBtns extends Component {
    render () {
        return (

            <div className="flex gap-[20px]">

                <button onClick={PrevBtn}>
                    <div className="text-[70px]">
                        <MdSkipPrevious />
                    </div>
                </button>

                <button onClick={HandleMusic}>
                    {
                        isPlaying
                            ? <div className="text-[40px]"><FaPause /></div>
                            : <div className="text-[40px]"><FaPlay /></div>
                    }
                </button>

                <button onClick={NextBtn}>
                    <div className="text-[70px]">
                        <MdSkipNext />
                    </div>
                </button>

            </div>
            
        )
    }


} 

export default ControlBtns;