import React from 'react';
import { shiftRight } from '../method';
import './index.scss'

export default function SkrOnLine() {

  
  
  return (
    <div className='SideSkrOnLine'>
      <h4>
        SKR线上<button onClick={shiftRight}>X</button>
      </h4>
      <div className='SkrOnLineContent'>
        <div className='SkrText'></div>
        <div className='contentFoot'>
          <input type='text' placeholder='客服将尽快回复你' />
          <button>发 送</button>
        </div>
      </div>
    </div>
  );
}
