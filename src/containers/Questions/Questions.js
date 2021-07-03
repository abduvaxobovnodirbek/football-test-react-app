/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Beginner,Elementary,Pre_Intermediate,Intermediate,Advanced} from "../../Data/Data"
import { ElementaryData, infosData,PreData,InterData,AdvancedData } from '../../context/Action/Action'
import "./Questions.css"
import { Link } from 'react-router-dom'
import Modal from "../modals/modal"
export default function Questions() {
    const [showLevelB,setShowLevelB] = useState(false)
    const [showLevelC,setShowLevelC] = useState(false)
    const [showLevelD,setShowLevelD] = useState(false)
    const [showLevelE,setShowLevelE] = useState(false)

    const [findCorrect,setFindCorrect] = useState(0)
    const [findWrong,setFindWrong] = useState(0) 

   
    const username = useSelector(state=>state.UserInfo.info)
    const Data = useSelector(state=>state.Data)
    const Elementary_Level = useSelector(state=>state.ElementaryInfo)
    const Pre_Level = useSelector(state=>state.PreInfo)
    const Inter_Level = useSelector(state=>state.InterInfo)
    const Advanced_Level = useSelector(state=>state.AdvancedInfo)

    
    let renderList = Data.map(item=>item[Math.round(Math.random()*4)])[0]
    let renderList1 = Elementary_Level.map(item=>item[Math.round(Math.random()*4)])[0]
    let renderList2 = Pre_Level.map(item=>item[Math.round(Math.random()*4)])[0]
    let renderList3 = Inter_Level.map(item=>item[Math.round(Math.random()*4)])[0]
    let renderList4 = Advanced_Level.map(item=>item[Math.round(Math.random()*4)])[0]

    const dispatch = useDispatch()
    
    useEffect(()=>{
       dispatch(infosData(Beginner))
       dispatch(ElementaryData(Elementary))
       dispatch(ElementaryData(Elementary))
       dispatch(PreData(Pre_Intermediate))
       dispatch(InterData(Intermediate))
       dispatch(AdvancedData(Advanced))
    },[])
    
    let myProgress = 0
    if(showLevelB){
        myProgress = 25
    }

    if(showLevelC){
        myProgress = 50
    }
    
    if(showLevelD){
        myProgress = 75
    }

    if(showLevelE){
        myProgress = 100
    }
     let myModal = null;
    if(findCorrect === 5){
        myModal = <Modal/>
    }
    let handleData = null;
    if(Data.length !==0){
        const handleButtonClick=(currentObject,variant)=>{
            currentObject.fakeAnswers.find(item=>item===variant) === currentObject.answer?setFindCorrect(prev=>prev+1):setFindWrong(prev=>prev+1)
            return currentObject.fakeAnswers.find(item=>item===variant) === currentObject.answer?setShowLevelB(true):setShowLevelB(false)
        }
        
        const handleButtonClick1=(currentObject,variant)=>{
            currentObject.fakeAnswers.find(item=>item===variant) === currentObject.answer?setFindCorrect(prev=>prev+1):setFindWrong(prev=>prev+1)
            return currentObject.fakeAnswers.find(item=>item===variant) === currentObject.answer?setShowLevelC(true):setShowLevelC(false)
        }

        const handleButtonClick2=(currentObject,variant)=>{
            currentObject.fakeAnswers.find(item=>item===variant) === currentObject.answer?setFindCorrect(prev=>prev+1):setFindWrong(prev=>prev+1)
            return currentObject.fakeAnswers.find(item=>item===variant) === currentObject.answer?setShowLevelD(true):setShowLevelD(false)
        }
        
        const handleButtonClick3=(currentObject,variant)=>{
            currentObject.fakeAnswers.find(item=>item===variant) === currentObject.answer?setFindCorrect(prev=>prev+1):setFindWrong(prev=>prev+1)
            return currentObject.fakeAnswers.find(item=>item===variant) === currentObject.answer?setShowLevelE(true):setShowLevelE(false)
        }

        const handleButtonClick4=(currentObject,variant)=>{
            currentObject.fakeAnswers.find(item=>item===variant) === currentObject.answer?setFindCorrect(prev=>prev+1):setFindWrong(prev=>prev+1)
            return currentObject.fakeAnswers.find(item=>item===variant) === currentObject.answer?console.log(true):console.log(false);
        }
        //randomize

        let arr = []
        for (let i = 0; i <= 4; i++) {
          arr.push(i)
        }
      
        let result = [];
      
        for (let i = 1; i <= 4; i++) {
          const random = Math.floor(Math.random() * (4 - i));
          result.push(arr[random]);
          arr[random] = arr[4 - i];
        }
        //
  
        let variants1 = renderList.fakeAnswers[result[0]]
        let variants2 = renderList.fakeAnswers[result[1]]
        let variants3 = renderList.fakeAnswers[result[2]]
        let variants4 = renderList.fakeAnswers[result[3]]

        let variants12 = renderList2.fakeAnswers[result[0]]
        let variants22 = renderList2.fakeAnswers[result[1]]
        let variants32 = renderList2.fakeAnswers[result[2]]
        let variants42 = renderList2.fakeAnswers[result[3]]

        let variants1c = renderList3.fakeAnswers[result[0]]
        let variants2c = renderList3.fakeAnswers[result[1]]
        let variants3c = renderList3.fakeAnswers[result[2]]
        let variants4c = renderList3.fakeAnswers[result[3]]
      
        let variants1e = renderList4.fakeAnswers[result[0]]
        let variants2e = renderList4.fakeAnswers[result[1]]
        let variants3e = renderList4.fakeAnswers[result[2]]
        let variants4e = renderList4.fakeAnswers[result[3]]

        handleData = (
            <div className = "handleMe">
                <div className="a_b" style = {{display:showLevelC?'none':'block'}}>
                <div className="starter-level" style = {{display:showLevelB?'none':'block'}}>
                <h5>{renderList.question}</h5>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick(renderList,variants1)}>A){variants1}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick(renderList,variants2)}>B){variants2}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick(renderList,variants3)}>C){variants3}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick(renderList,variants4)}>D){variants4}</button>
                </div>
                
                <div style = {{display:showLevelB?'block':'none'}}>
                <h5>{renderList1.question}</h5>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick1(renderList1,renderList1.fakeAnswers[result[0]])}>A){renderList1.fakeAnswers[result[0]]}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick1(renderList1,renderList1.fakeAnswers[result[1]])}>B){renderList1.fakeAnswers[result[1]]}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick1(renderList1,renderList1.fakeAnswers[result[2]])}>C){renderList1.fakeAnswers[result[2]]}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick1(renderList1,renderList1.fakeAnswers[result[3]])}>D){renderList1.fakeAnswers[result[3]]}</button>
                </div>
                </div>

                <div className="b_c" style = {{display:showLevelD?'none':'block'}}>
                <div className="pre-level" style = {{display:showLevelC?'block':'none'}}>
                <h5>{renderList2.question}</h5>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick2(renderList2,variants12)}>A){variants12}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick2(renderList2,variants22)}>B){variants22}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick2(renderList2,variants32)}>C){variants32}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick2(renderList2,variants42)}>D){variants42}</button>
                </div>
                </div>

                <div className="d_e" style = {{display:showLevelE?'none':'block'}}>
                <div className="inter-level" style = {{display:showLevelD?'block':'none'}}>
                <h5>{renderList3.question}</h5>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick3(renderList3,variants1c)}>A){variants1c}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick3(renderList3,variants2c)}>B){variants2c}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick3(renderList3,variants3c)}>C){variants3c}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick3(renderList3,variants4c)}>D){variants4c}</button>
                </div>
                </div>

                <div className="advanced-level" style = {{display:showLevelE?'block':'none'}}>
                <h5>{renderList4.question}</h5>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick4(renderList4,variants1e)}>A){variants1e}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick4(renderList4,variants2e)}>B){variants2e}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick4(renderList4,variants3e)}>C){variants3e}</button>
                <button className="btn btn-warning m-2" onClick = {()=>handleButtonClick4(renderList4,variants4e)}>D){variants4e}</button>
                </div>
            </div>
        )
    }else{
        handleData = null;
    }
    return (
        <div style = {{position:'relative',top:'80px'}}>
            {username !== ""?(
                <div className="ball">
                    <div className = "bigData">
                    {myModal}
                <div className = "container my_container" style = {{display:myModal?"none":'block'}}>
                <div className = "row all-items">
                    <div className="col-md-2 levels">
                        <button className = "mb-3 btn-primary btn d-block">
                            Starter
                        </button>
                        <button disabled = {showLevelB?false:true} className = "mb-3 btn-primary btn d-block">
                            Elementary
                        </button>
                        <button disabled = {showLevelC?false:true} className = "mb-3 btn-primary btn d-block">
                            Pre-Intermediate
                        </button>
                        <button disabled = {showLevelD?false:true} className = "mb-3 btn-primary btn d-block">
                            Intermediate
                        </button>
                        <button disabled = {showLevelE?false:true} className = "mb-3 btn-primary btn d-block">
                            Advanced
                        </button>
                    </div>
                    <div className="col-md-10 myChange">
                        {handleData}
                        <div className = "rightSide">
                <h4 style = {{fontWeight:'bold'}}>user:{username}</h4>
                <span className = "d-block text-primary font-weight-bold" style = {{fontWeight:'bold'}}>correct answer(s): {findCorrect}</span>
                <span className = "d-block text-danger" style = {{fontWeight:'bold'}}>wrong answer(s): {findWrong}</span>
            </div>
                    </div>
                </div>
                </div>
                </div>
                <div className="game-ball text-white p-2 container">
                <div className="progress thisProgress">
                  <div className="progress-bar  progress-bar-animated progress-bar-striped" role="progressbar" style={{width:`${myProgress}%` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div> 
                 </div>
                </div>
                </div>
            ):(
                <div className = "myBody">
                  <h1 className = "myh1">404</h1>
                <div class="cloak__wrapper">
                <div class="cloak__container">
                <div class="cloak"></div>
               </div>
                  </div>
               <div class="infoss">
                <h2 className = "text-warning">Please Login </h2>
               <p className = "myP">We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p>
               <Link to = "/">
               <button className = "btn btn-outline-warning" style = {{fontWeight:'bold'}}>Login</button>
               </Link>
              </div>
                </div>
            )}
        </div>
    )
}
