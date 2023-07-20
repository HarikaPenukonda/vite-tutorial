import React from "react";

export default function Contact(){
    return(
        <section className="content-section">
            <div className="content-row-section">
            <div className="content-col-1-section">
                <div className="col-1-content">
                <h2>Lets get in touch</h2>
                <p>We're open for any suggestion or just to have a chat</p>
                <div className="address-content">
                    <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className="phone-content">
                    <p><span>Phone:</span> +1-234-567-8900 </p>
                </div>
                <div className="email-content">
                    <p><span>Email:</span> info@yourwebsite.com</p>
                </div>
                <div className="website-content">
                    <p><span>Website:</span>yoursite.com</p>
                </div>
            </div>
                
            </div>
            <div className="content-col-2-section">
                <div className="form-content">
                    <h3 className="header-text-2">Get in touch</h3>
                    <form>
                <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>FULL NAME</label>
                </div>
                <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>EMAIL ADDRESS</label>
                </div>
                <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>SUBJECT</label>
                </div>
                <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>MESSAGE</label>
                </div>
            </form>
            <button>Send Message</button>                    
                </div>
            </div>

            </div>
        </section>
    )
}

