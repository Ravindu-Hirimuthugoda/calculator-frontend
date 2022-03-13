import Wrapper from "../component/Wrapper";
import Screen from '../component/Screen';
import ButtonBox from '../component/ButtonBox';
import Button from '../component/Button';
import React,{Fragment, useState} from 'react';
import MainHeader from "../component/MainHeader";

const btnValues = [
    ["C","AC", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

const Calculator = ()=>{
    let [calc, setCalc] = useState({num:''});
    let [answer, setAnswer] = useState({ans:0});

    const btnHandler = (e)=>{
        let val = e.target.innerHTML;
        if(val === 'C' || val === 'AC'){
          setCalc({...calc,num:''});
          setAnswer({ans:0});
        }
        else if(val === '='){
          fetch('https://2a67uxwzf2.execute-api.eu-west-1.amazonaws.com/dev/add',{
            method: 'POST',
            body: JSON.stringify(calc.num),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res)=>{return res.json()}).then(data=>{
            setCalc({num:''});
            setAnswer({ans:data.result});
          });
        }else{
          setCalc({...calc, num:calc.num+e.target.innerHTML})
        }
    }

    return (
      <Fragment>
        <header>
          <MainHeader/>
        </header>
        <Wrapper>
          <Screen value = {calc.num ? calc.num : answer.ans}/>
          <ButtonBox>
            {btnValues.flat().map((btn,i)=>{
              return(
                <Button key={i} className={btn === '=' ?'equals':''} value={btn} onClick={btnHandler}/>
              )
            })}
          </ButtonBox>
        </Wrapper>
      </Fragment>
    );
}

export default Calculator;