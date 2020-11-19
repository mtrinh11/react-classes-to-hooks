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

  const addTask = () => {
    let tempArray = [...tasks, 'New Task'];
    manageTasks(tempArray);
  };

  const handleChange = (event) => {

  };

  return (
    <div className='list'>
      <Input handleChange={handleChange} addTask={addTask}/>
      <Tasks tasks={tasks} />
    </div>
  );
};

export default TodoList;