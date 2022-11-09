import React from 'react'

export function Contact() {
  return (
    <>
      <div className='div-center'>
        <h2>Responsive Contact Section</h2>
        <p>Resize the browser window to see the effect.</p>
      </div>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h2>Contact Us</h2>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
        </div>
        <div className="row">
          <div className="column">
            <img src={require("../assets/img/map.jpg")} style={{ width: "100%" }} />
          </div>
          <div className="column">
            <form action="/action_page.php">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: 170 }}
                defaultValue={""}
              />
              <input type="submit" defaultValue="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>

  )
}