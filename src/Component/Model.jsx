import React,{Suspense, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import '../App.css';
import { PerspectiveCamera,OrbitControls } from '@react-three/drei';
import DFBXX from './DFBXZ'

const Model = () => {
    const [bodycolor , setBodyColor] = useState('yellow')
    const [pearlcolor , setPearlColor] = useState('red')

    const handleColor = (bg)=>{
        setBodyColor(bg)
       
      }
      const handlePearlColor = (bg)=>{
        setPearlColor(bg)
       
      }

      
  return (
    <div className='main-container'>

        <div>
        <div className='d-flex flex-column gap-3 ms-4 pos align-items-center'> 
        <p className='fw-bold fs-light'>Body Color</p>
      <div onClick={()=>handleColor('#54BAB9')} className='circle' style={{backgroundColor:'#54BAB9'}}></div> 
      <div onClick={()=>handleColor('#C3F8FF')} className='circle' style={{backgroundColor:'#C3F8FF'}}></div> 
      <div onClick={()=>handleColor('yellow')} className='circle' style={{backgroundColor:'yellow'}}></div>  
      <div onClick={()=>handleColor('#FFE9A0')} className='circle' style={{backgroundColor:'#FFE9A0'}}></div>  
    </div>
        </div>
        
             <Canvas>
                
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} />
            <PerspectiveCamera makeDefault position={[0,3,5]} />
            <Suspense fallback={null}>
                <DFBXX bodycolor={bodycolor} pearlcolor={pearlcolor} />
                
                
                </Suspense >
                
            <ambientLight args={['#ffffff',0.5]} />
            <directionalLight position={[-2,5,2]} />
        </Canvas>
        <div>
        <div className='d-flex flex-column gap-3 ms-4 posl align-items-center'> 
        <p className='fw-bold fs-light'>Pearl Color</p>
      <div onClick={()=>handlePearlColor('#000000')} className='circle' style={{backgroundColor:'#000000'}}></div> 
      <div onClick={()=>handlePearlColor('#D2001A')} className='circle' style={{backgroundColor:'#D2001A'}}></div> 
      <div onClick={()=>handlePearlColor('#182747')} className='circle' style={{backgroundColor:'#182747'}}></div>  
      <div onClick={()=>handlePearlColor('#FF8787')} className='circle' style={{backgroundColor:'#FF8787'}}></div>  
    </div>
        </div>
    </div>
  )
}

export default Model