import React, { useState, useRef,useEffect } from 'react';
import { createWorker, createScheduler } from 'tesseract.js';
import ReactDOM from 'react-dom';
import * as XLSX from "xlsx";

const Stream = () => {
    const [matchData,setMatchData] = useState(null);
  const scheduler = createScheduler();
  
  useEffect(()=>{
        const someFunc = async ()=>{
           const worker = await createWorker();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        scheduler.addWorker(worker);

        var video = document.getElementById('video');
        var intervalID;
        video.addEventListener('play', () => {
            intervalID = setInterval(capture, 1000);
        });

        video.addEventListener('pause', () => {
            clearInterval(intervalID);
            console.log("paused");
        });
      
        video.controls = true;
        };
        someFunc();
    },[]);
    useEffect(()=>{
        const someFunc = async ()=>{
          var video = document.getElementById('video');
          ReactDOM.findDOMNode(video).style.display = matchData===null?'none' : 'grid';
          var file = document.getElementById('file');
          ReactDOM.findDOMNode(file).style.display = matchData===null?'grid' : 'none';
        };
        someFunc();
    },[matchData]);

    
const readExcel = (file)=>{
    const promise = new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsArrayBuffer(file);

        fileReader.onload = function(){
            const bufferArray = fileReader.result;

            const wb = XLSX.read(bufferArray,{type:'buffer'});

            const wsname= wb.SheetNames[0];

            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws);
            resolve(data);
        }

        fileReader.onerror = function(error){
            reject(error);
        }
    });

    promise.then((d)=>{
      try{
        let filtered_Data = [];
        for(let i=0;i<d.length;i++){
            let row = d[i];
                let no = row.$MemberNo;
                let curr_team = [];
                for(let j = 1;j<=no;j++){
                  let m = `row.Coloumn${j}`;
                    if(eval(m)){
                        curr_team.push({
                          name: eval(m),
                          score: 0
                          });
                    }else{
                        //throw Error
                        throw "INVALID SYNTAX OF EXCEL";
                    }
                }
            filtered_Data.push(curr_team);  
        }
        setMatchData(filtered_Data);
      }
      catch(e){
        setMatchData(null);
      }
    })
};

    async function capture() {
        var scaleFactor = 0.25;
        if(scaleFactor == null){
            scaleFactor = 1;
        }
        var video = document.getElementById('video');
        var w = video.videoWidth*scaleFactor;
        var h = video.videoHeight*scaleFactor;
        var canvas = document.createElement('canvas');
        canvas.width  = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        var sourceX = 1000;
        var sourceY = 0;
        var sourceWidth = w;
        var sourceHeight = h;
        var destWidth = w;
        var destHeight = h;
        var destX = canvas.width / 2 - destWidth / 2;
        var destY = canvas.height / 2 - destHeight / 2;
        ctx.drawImage(video, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);

        canvas.onclick = function(){
            window.open(this.toDataURL());
        };
        const { data: { text } } = await scheduler.addJob('recognize', canvas);


        console.log(text);


      }
    return (
      <div className="container">
      <video id="video" width="320" style={{display: 'none'}} crossOrigin="anonymous">
            <source src={require('./video.mp4')}/>
        </video>
        <br/>
        
        <input
        type="file"
        style={{display: 'grid'}}
        name="" id="file" onChange={(e)=>{
          const file = e.target.files[0];
          readExcel(file);
          }}
          placeholder="Upload File*"
          />                     
    </div>
    );
}

export default Stream;