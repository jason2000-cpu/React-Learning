'use client'

import React, { useState, useEffect, useContext, useReducer } from 'react';

import { Menu } from './Menu';
import { Header } from './Header';
import SpeakerData from '../SpeakerData'
import SpeakerDetail from './SpeakerDetail'
import { ConfigContext } from './App';

const Speakers = ({}) =>{
    const [speakingSaturday, setSpeakingSaturday] = useState(true);
    const [speakingSunday, setSpeakingSunday] = useState(true);

    function speakerReducer(state, action){
        switch (action.type) {
            case "setSpeakerList": {
                return action.data
            }
            default:
                return state
        }
    }
    const [speakerList, dispatch] = useReducer(speakerReducer, []);
    const [isLoading, setIsloading] = useState(true);

    const context = useContext(ConfigContext);
    
    useEffect( ()=> {
        setIsloading(true);
        new Promise(function(resolve){
            setTimeout(function(){
                resolve();
            }, 1000);
        }).then(()=>{
            setIsloading(false);
        });
        // setSpeakerList(SpeakerData);
        dispatch({type: "setSpeakerList", data: SpeakerData})

        return ()=> {
            console.log('cleanup')
        }
    }, []);

    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday);
    }
    const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday);
    }

    const heartFavoriteHandler = (e, favouriteValue)=>{
        e.preventDefault();
        const sessionId = parseInt(e.target.attributes['data-sessionId'].value);
        setSpeakerList(
            speakerList.map((item) =>{
                if (item.id === sessionId){
                    return {...item, favorite: favouriteValue}
                }
                return item;
            })
        )
    }

    console.log(speakerList);
    const speakerListFiltered = isLoading ? [] : speakerList.filter(
        ({sat, sun}) => (speakingSaturday && sat) || (speakingSunday && sun),
    ).sort(function(a,b) {
        if (a.firstName < b.firstName) {
            return -1;
        }
        if (a.firstName > b.firstName) {
            return 1;
        }
        return 0;
    })

    console.log("LOADING", isLoading);
    console.log("FILTERED LIST", speakerListFiltered);

    if (isLoading) return <div>Loading</div>

    return (
        <div>
            <Header />
            <Menu />
            <div className='container'>
                {context.showSpeakerSpeakingDays ?
                    <div className='btn-toolbar margintopbottom5 checkbox-bigger'>
                    <div className='hide'>
                        <div className='form-check-inline'>
                            <label className='form-check-label'>
                                <input type='checkbox' className='form-check-input'
                                    onChange={handleChangeSaturday}
                                    checked={speakingSaturday}
                                /> Saturday Speakers
                            </label>
                        </div>
                        <div className='form-check-inline'>
                            <label className='form-check-label'>
                                <input type='checkbox' className='form-check-input'
                                    onChange={handleChangeSunday}
                                    checked={speakingSunday}
                                /> Sunday Speakers
                            </label>
                        </div>
                    </div>

                </div>
                : null}
                <div className='row'>
                    <div className='card-deck'>
                        {speakerListFiltered.map(
                            (speakerInfo) => {
                                return (
                                    <SpeakerDetail speakerInfo={speakerInfo} onHeartFavoriteHandler={heartFavoriteHandler} />
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speakers;