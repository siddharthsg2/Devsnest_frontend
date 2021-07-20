import React from 'react' 

export function Items({id,item,handleDelete}){
  // console.log(props);
  // const {name , cal } = props;
  return (
      <div className = 'item'>
          <h1 className = 'name'>{item.name}</h1>
          <p className = 'info'>You have consumed {item.cal} cals today</p>
          <button className='btn' onClick={()=>handleDelete(id)}    >Delete</button>
      </div>
  );
}
