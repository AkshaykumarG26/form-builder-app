import {useState, useEffect} from 'react'
import { Form } from './Form';
import formJSON from '../formElement.json'


export const Element = () => {

  const [elements, setElements] = useState(null);

  // const handleSubmit = () => {
  //   console.log("handle Submit")
  // }

  // const handleChange = (id, event) => {
  //   const newElements = {...elements}
  //   newElements.fields.forEach(field => {
  //     const {filed_type, field_id, field_value} = field
  //   })
  //   console.log("handleChange")
  // }

  useEffect(() => {
    setElements(formJSON[0]);
  }, []);

//   console.log(formJSON[0])

  const { fields, page_label } = elements ?? {};
    return (
      <>
        <div className="container">
          <h3>{page_label}</h3>
          <form>
            {fields
              ? fields.map((field, i) => (
                  <div>
                    <Form key={i} field={field} />
                  </div>
                ))
              : null}
          </form>
        </div>
      </>
    );
}