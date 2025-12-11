import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { MdDelete } from "react-icons/md";

export default function Home() {
  const[todo, setTodo] = useState("");//todoは変数、setTodoは関数useStateの型推論でstring型になる""の部分
  const[todos, setTodos] = useState<string[]>([]); //したの行をuseState化で保持
  //const todos =["Reactを学ぶ", "TypeScriptを学ぶ"];
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
      <Card>
        <CardHeader>
          <CardTitle>TODO App</CardTitle>
          <CardDescription>はい</CardDescription>
        </CardHeader>
        
        <CardContent>
          <input 
          placeholder="タスクを追加" 
          onChange={(e) => setTodo(e.target.value)}//これでtodoの値をsetTodo関数で更新できる
          value ={todo}
          />
          {/* <div>{todo}</div> */}

          <button
            className="w-full mt-2"
            onClick={() => {
              setTodos([...todos,todo]);//...はスプレッド構文、todosの中身を展開して新しい配列を作る
              setTodo("")
            }}>
            追加
            </button>

          <ul>
            {todos.map((todo, index) =>(
              <li className ="bg-white p-2 m-2 flex">
                <div>
                  ・{todo}
                </div>
                <button 
                  className ="ml-2"
                  onClick={()=> {
                    setTodos(todos.filter((_, i) => i !== index));//filter関数はこちらで残す要素を決めるコールバック関数の一つ
                  }}>
                  <MdDelete color="blue"/>
                  </button>
              </li>
            ))}
          </ul>

        </CardContent>
        <CardFooter>
          <p>this is footer</p>
        </CardFooter>
      </Card> 
      </div>   
    </div>
  )
}
