'use client'

import {useFormStatus} from 'react-dom';
import Button from './button';

export default function FormSubmit({btnText}){
    const status = useFormStatus();
    console.log(status)
    if(status.pending){
        return <p className="w-36 block mx-auto" >Creating ...</p>
    }

    return ( 
    <div className="w-36 block mx-auto">
  <Button buttonText={btnText} />
    </div>
    )
}