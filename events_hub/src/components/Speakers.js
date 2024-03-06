'use client'

import React, { useState, useEffect, useContext, useReducer, useCallback, useMemo } from 'react';

import { Menu } from './Menu';
import { Header } from './Header';
import SpeakerDetail from './SpeakerDetail'
import { ConfigContext } from './App';
import speakerData from '../SpeakerData';

const Speakers = ({}) =>{
    const [speakingSaturday, setSpeakingSaturday] = useState(true);
    const [speakingSunday, setSpeakingSunday] = useState(true);

    function speakerReducer(state, action){
        function updateFavorite(favouriteValue) {
            return state.map((item, index) =>{
                if (item.id === action.sessionId) {
                    return {...item, favorite: favouriteValue}
                }
                return item;
            })
        }
        switch (action.type) {
            case "setSpeakerList": {
                return action.data
            }
            case "favorite": {
              return  updateFavorite(true)
            }
            case "unfavorite": {
               return updateFavorite(false);
            }
            default:
                return state
        }
    }
    const [speakerList, dispatch] = useReducer(speakerReducer, []);
    const [isLoading, setIsloading] = useState(true);

    const context = useContext(ConfigContext);
    
    useEffect(()=>{
        setIsloading(true);
        new Promise( (resolve) => {
            setTimeout( () => {
                resolve()
            }, 1000)
        }).then( () => {
            setIsloading(false);
            const speakerListServerFilter = speakerData.filter( ({ sat, sun}) => {
                return (speakingSaturday && sat) || (speakingSunday && sun)
            })
            dispatch({
                type: "setSpeakerList",
                data : speakerListServerFilter
            })
        })
    },  []);      //[speakingSaturday, speakingSunday]);

    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday);
    }
    const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday);
    }

    const heartFavoriteHandler = useCallback((e, favouriteValue)=>{
        e.preventDefault();
        const sessionId = parseInt(e.target.attributes['data-sessionId'].value);
        // setSpeakerList(
        //     speakerList.map((item) =>{
        //         if (item.id === sessionId){
        //             return {...item, favorite: favouriteValue}
        //         }
        //         return item;
        //     })
        // )

        dispatch({
            type: favouriteValue === true ? "favorite" : "unfavorite",
            sessionId,
        })
    }, []);

    const newSpeakerList = useMemo( () =>
        speakerList.filter(
            ({sat, sun}) => (speakingSaturday && sat) || (speakingSunday && sun),
        ).sort(function(a,b) {
            if (a.firstName < b.firstName) {
                return -1;
            }
            if (a.firstName > b.firstName) {
                return 1;
            }
            return 0;
        }), [speakingSaturday, speakingSunday, speakerList]);

    const speakerListFiltered = isLoading ? [] : newSpeakerList;

    setTimeout(()=>{console.log(newSpeakerList)}, 1000)

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