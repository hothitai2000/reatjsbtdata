import React,{ useState} from "react";
import { Data } from "./data";
import Water from "./Menucon";

export default function Menu2(){
    const[waters,setWater]= useState(Data());

    return(
        <div className="container">
            <h1>Menu</h1>
            {waters.map((element)=>(
                <water name={element.name} price={element.price}
                />
            ))}
            <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input type="text"
                    class="form-control" name=""
                     id="" aria-describedby="helpId"
                     placeholder="name">Name </input>
                     <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Price</label>
                <input type="number"
                    class="form-control" name=""
                     id="" aria-describedby="helpId"
                     placeholder="name">Name </input>
                     <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
        </div>
    )
}
