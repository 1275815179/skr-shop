import React from 'react'
import './index.scss'
export default function ShopNav() {
    const retreat=()=>{
       window.history.back()
    }
    const go=()=>{
       window.history.go()
    }
    return (
        <div className="dev-go">
            <h3 onClick={()=>retreat()}>Go Back</h3>
            <h3 onClick={()=>go()}>Go forward</h3>
        </div>
    )
}
