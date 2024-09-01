export let arr = []
 export function statusMessage(message){
arr.push(message)
setTimeout(()=>{arr.length = 0}, 3000)
 }


 export default function ToastMsg(){  
  return (
      <>
      {arr.map((msg, index)=>(      
        <div key={index} className="has-[:checked]:hidden p-2 my-4 z-20 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          ✔️ {msg}
          <label htmlFor="checkinp">
            <input id="checkinp" type="checkbox" className="appearance-none" />
            <div className="text-right">✖️</div>            
          </label>         
      </div>
      )
      )}
      </>   
    )    
 }