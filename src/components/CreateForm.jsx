import { Form,Link,useActionData} from "react-router-dom";
import {ArrowLeftIcon} from "@heroicons/react/24/solid"

const CreateForm = ({header,btnText,oldCreateData}) => {
  const data =useActionData("post-detail");
  return (
    <section className='form-section'>
      <div className="detail-header">

      <p>{header}</p>

      <Link to={"/"}><ArrowLeftIcon className="arrow-icon"/></Link>
      </div>

      
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map(err=>(
                  <li key={err}>{err}</li>
            ))}
          </ul>
        ) }

    <Form method="post">
    <div className='form-input'>
    <label htmlFor="form-title">Title</label>
    <input type="text" id='form-title' name='title' required defaultValue={oldCreateData ? oldCreateData.title: ""}/>
    </div>
    <div>
    <label htmlFor="form-image">Image Url</label>
    <input type="url" id='form-image' name='image' required defaultValue={oldCreateData ? oldCreateData.image: ""}/>
    </div>
    <div>
    <label htmlFor="form-date">Date</label>
    <input type="date" id='form-date' name='date' required defaultValue={oldCreateData ? oldCreateData.data: ""}/>
    </div>
    <div>
    <label htmlFor="form-description">Description</label>
    <textarea 
    name="description" 
    id="form-description" 
    cols="30" 
    rows="5"
    required defaultValue={oldCreateData ? oldCreateData.description: ""}>
    </textarea>
    </div>
    <button className='btn'>{btnText}</button>
    
    </Form>
    </section>

  )
}

export default CreateForm;