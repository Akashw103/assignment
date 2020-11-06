import React from 'react';
import './style.css'
import Select from 'react-select';
import TimezonePicker from 'react-timezone';
import { Editor } from '@tinymce/tinymce-react';




const options = [
  { value: 'Event 1', label: 'Event 1' },
  { value: 'Event 2', label: 'Event 2' },
  { value: 'Event 3', label: 'Event 3' },
];
const Categories = [
  { value: 'obc', label: 'OBC' },
  { value: 'open', label: 'OPEN' },
  { value: 'sc/st', label: 'SC/ST' },
];



class Form extends React.Component {
  state = {
    selectedOption: null,
  }
  
  handleEditorChange = (content) => {
    console.log('Content was updated:', content);
  };

 
  constructor(props) {
    super(props);
    this.state = {
      error:{
        selectAddEvent: '',
        selectCategories: '',
        title: '',
        shortSummary: '',
        registration:'',
        onlineLink:''
      }
       
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
}
handleSubmit() {
  alert("registration successfully..!!");
}
handleChange = (selectedOption) => {
  this.setState({ selectedOption });
  console.log(`Option selected:`, selectedOption);
}


  render() {
    const { selectedOption } = this.state;
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="body">
          <section className="create-event">
            <h2>Create Event</h2>
            <button className="btn" id="btn" type="submit" value="Submit" >Create</button>
            <button className="btn" type="cancel">Cancel</button>
          </section>
        </div>
        <div className="form">
          <p>please fill all <em>*</em> mandatory field</p>
          <section className="Add-event">
            <span>Add Event in </span><em>*</em>
            <Select className="select"
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </section>

          <section className="upload-image">
            <h2>Upload <br /> Image</h2>
          </section>
          <section className="title">
            <span>title</span><em>*</em><br/>
            <input class="no-outline" value={this.state.title} name="title"  onChange={this.handleChange}  
            required  inputProps={{ maxLength: 250 }}></input>
          </section>
          <section className="Categories">
            <span>Categories</span><em> *</em>
            <Select className="select"
              options={Categories}
            />
          </section>
          <section className="short">
            <span>Short Summary</span><em> *</em><br />
            <input class="no-outline" name="shortSummary"  value={this.state.shortSummary} 
            onChange={this.handleChange} inputProps={{ maxLength: 500 }}></input>
          </section>
          <h4>Type:Public</h4>
          <section className="Registration">
            <span>Registration</span><em> *</em><br/>
            <input class="no-outline" name="registration" required value={this.state.registration} type="text" onChange={this.handleChange}
            inputProps={{ maxLength: 500 }}></input>
          </section>
          <section className="virtual">
            <h4>Is this a virtual event?      yes </h4>
            <label class="switch">
              <input type="checkbox" checked />
              <span class="slider round"></span>
            </label>
          </section>
          <section>
            <input class="no-outline" placeholder="Online link" required name="onlineLink" value={this.state.onlineLink}
            onChange={this.handleChange} ></input>
          </section>
          <section className="time-zone">
            <span>Select Timezone</span><em> *</em><br />
            <TimezonePicker className="timezonePicker"
              value="Asia/Yerevan"
              required
              onChange={timezone => console.log('New Timezone Select', timezone)}
              inputProps={{
              placeholder: 'Select',
              name: 'timezone',
              }}
            />
          </section>
          <seaction className="date-time">
            <div >
              <span>Start Date-Time</span><em> *</em>
              <input className="start" type="datetime-local" id="time" name="time" required />
            </div>
            <div >
              <span>End Date-Time</span><em> *</em>
              <input className="end" type="datetime-local" id="time" name="time" required />
            </div>
          </seaction>
        </div>
        <div className="editor">
      <Editor 
        initialValue="<p></p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
        }}
        onEditorChange={this.handleEditorChange}
      />
      <div className="Attachment">
        <h4>Attachment ? </h4>
        <section className="uplaod-file">
          <img src="/file-icon.jpg" width="50" height="50" className="img" alt="icon"/>
          <h2>Click Here to upload File</h2>
        </section>

      </div>
      </div>
      </form>
    );
  }

}


export default Form;