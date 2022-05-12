import { useState, useEffect } from "react";
import formJSON from "../../formElement.json";
import { Form } from "../Form";


// import { CreateFormsNav } from "./CreateFormNav";

export const CreateForms = () => {
  const [elements, setElements] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    // setElements(formJSON[0]);
  }, []);

  //   console.log(formJSON[0].fields[0])
  // console.log(data)
  // console.log(elements)

  // const { fields, page_label } = data ?? {};


  const handleSubmit = () => {
    // console.log(data)
    // setElements( data)
    // console.log("data",{data})
    console.log("data",JSON.stringify(data))
    // console.log("elements", elements)

    fetch("http://localhost:5000/createforms", {
      method: "POST",
      headers: {
        // "Accept": "application/json",
        "Content-Type": "application/json",
      },
      // body: elements,
      // body: [...elements, data]
      body: data.map((d) => {
        return d
      })
    })
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <div>
        {/* <CreateFormsNav /> */}
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <button
              type="button"
              onClick={() => setData([...data, formJSON[0].fields[0]])}
              className="btn btn-light"
            >
              Input with Text
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              onClick={() => setData([...data, formJSON[0].fields[1]])}
              className="btn btn-light"
            >
              Input with Password
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              onClick={() => setData([...data, formJSON[0].fields[2]])}
              className="btn btn-light"
            >
              Input with Email
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              onClick={() => setData([...data, formJSON[0].fields[3]])}
              className="btn btn-light"
            >
              Checkbox
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              onClick={() => setData([...data, formJSON[0].fields[4]])}
              className="btn btn-light"
            >
              Select
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              onClick={() => setData([...data, formJSON[0].fields[5]])}
              className="btn btn-light"
            >
              Button
            </button>
          </li>
        </ul>
      </div>
      <div className="container">
        {/* <h3>{page_label}</h3> */}
        <form>
          {data
            ? data.map((field, i) => (
                <div>
                  <Form key={i} field={field} />
                </div>
              ))
            : null}
        </form>
      </div>
      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Save This Form
      </button>
    </div>
  );
};
