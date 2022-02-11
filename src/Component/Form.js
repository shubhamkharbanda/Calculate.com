import React,{useState} from 'react'

export default function Form(props) {
    
    const[number,setNum]=useState("")
    const[sign,setSign]=useState("")
    const[ptr,setptr]=useState(0)

    const on_change=(e)=>{

        setNum(e.target.value)
        console.log(number)





    }
    const handleClick1=async()=>{

         setNum((number.concat("1")))
    }
    const handleClick2=async()=>{

        setNum((number.concat("2")))
   }
    const handleClick3=async()=>{

        setNum((number.concat("3")))
   }
   const handleClick4=async()=>{

    setNum((number.concat("4")))
}
const handleClick5=async()=>{

    setNum((number.concat("5")))
}
const handleClick6=async()=>{

    setNum((number.concat("6")))
}
const handleClick7=async()=>{

    setNum((number.concat("7")))
}
const handleClick8=async()=>{

    setNum((number.concat("8")))
}
const handleClick9=async()=>{

    setNum((number.concat("9")))
}
const handleClick0=async()=>{

    setNum((number.concat("0")))
}
const handleplus=async()=>{

    setSign("+")

   
    setptr(Number(number))
    
    handleC();
    


    
}
const handleminus=async()=>{

    setSign("-")

    setptr(Number(number))
    console.log(ptr)
    
    handleC();
    


    
}
const handlemulti=async()=>{

    setSign("X")

    setptr(Number(number))
    console.log(ptr)
    
    handleC();
    


    
}
const handlediv=async()=>{

    setSign("/")

    setptr(Number(number))
    console.log(ptr)
    
    handleC();
    


    
}
const handleequal=async()=>{

    var result=0;
    console.log(ptr)
    if(sign=="+"){

        result=ptr+Number(number)
    }
    if(sign=="-"){


        result=ptr-Number(number)
    }
    if(sign=="X"){


        result=ptr*Number(number)
    }
    if(sign=="/"){


        result=ptr/Number(number)
    }


    
   setNum(result);
    


    
}
   const handleC=async()=>{

    setNum("")
}
  return (
    <div>



<div className="mb-3 text-center">
  <label for="exampleFormControlInput1" class="form-label">Number Screen</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"  value={number} onChange={on_change}/>
</div>





<div  style={{display:"flex",flexDirection:"column",alignItems:"center"}} >
    
    <div style={{display:"flex"}}>

<button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handleClick1}>1</button>
<button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handleClick2}>2</button>
<button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handleC}>C</button>
    </div>
    <br/>
    <div style={{display:"flex"}}>
        

<button type="button" className="btn btn-primary" style={{marginRight:"2vw"}}onClick={handleClick3}>3</button>
<button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handleClick4}>4</button>
<button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handleClick5}>5</button>
    </div>
    <br/>
    <div style={{display:"flex"}}>
        
    <button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handleClick6}>6</button>
    <button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handleClick7}>7</button>
    <button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handleClick8}>8</button>
    </div>
    <br/>
    <div style={{display:"flex"}}>
        
    <button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handleClick9}>9</button>
    <button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handleClick0}>0</button>
    <button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handleplus}>+</button>
    </div>
    <br/>
    <div >
    <div style={{display:"flex"}}>
    <button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handleminus}>-</button>
    <button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handlemulti}>X</button>
    <button type="button" className="btn btn-primary" style={{marginRight:"2vw"}} onClick={handlediv}>÷</button>
    </div>
    </div>
    <br/>
    <button type="button" className="btn btn-primary btn-lg " style={{marginRight:"2vw"}} onClick={handleequal}>=</button>

      </div >
    </div>
  )
}
