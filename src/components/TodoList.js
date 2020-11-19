// import React, { Component } from 'react'
// import Tasks from './Tasks'
// import Input from './Input'

// class Todolist extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       tasks: []
//     }
//   }

//   render() {
//     return (
//       <div className="list">
//         <Input />
//         <Tasks tasks={this.state.tasks} />
//       </div>
//     )
//   }
// }

// export default Todolist

///////////////////////////////////////////////////////////////////

import React, {useState} from 'react';
import Tasks from './Tasks';
import Input from './Input';

const TodoList = () => {

  //array destructuring
  const [tasks, manageTasks] = useState([
    'Wow Much Do',
    'Much Do Wow',
    'Walk the doge',
    'Pet the doge'
  ]);
  const [entry, setEntry] = useState()

  const addTask = () => {
    let tempArray = [...tasks, entry];
    manageTasks(tempArray);
  };

  const handleChange = (event) => {
    setEntry(event.target.value)
  };

  const deleteTask = (index) => {
    let tempArray = [...tasks]
    tempArray.splice(index, 1)
    manageTasks(tempArray)
  }

  return (
    <div className='list'>
      <Input handleChange={handleChange} addTask={addTask}/>
      <Tasks tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
};

export default TodoList;