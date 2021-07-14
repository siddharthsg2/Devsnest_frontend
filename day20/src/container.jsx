export let Container = () => {
    return (
      <div className="container">
        <h1 className="heading">Calorie Chart</h1>
        <Cards />
      </div>
    );
  };
  
  function Items(props){
          console.log(props);
          const {name , cal } = props;
          return (
              <div className = 'item'>
                  <p className = 'name'>{name}</p>
                  <p className = 'info'>{'You have consumed ' + cal + ' cals today'}</p>
                  <button className='btn'>Delete</button>
              </div>
          );
  }
  
  function Cards(){
  return (
    <>
      <Items name="Avacado" cal="208"></Items>
      <Items name="Cheese" cal="371"></Items>
      <Items name="fish" cal="147 "></Items>
      <Items name="carrot" cal="33"></Items>
      <Items name="apple" cal="49"></Items>
      <Items name="orange" cal="38"></Items>
      <Items name="lemonn" cal="31 "></Items>
      <Items name="onion" cal="22"></Items>
      <Items name="strawberry" cal="41"></Items>
      <Items name="candy" cal="396"></Items>
    </>
  );
  }
  