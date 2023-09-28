import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpGenerated, setOtpGenerated] = useState(false);

  const generateOtp = () => {
    const generatedOtp = Math.floor(1000 + Math.random() * 9000);
    setOtp(generatedOtp.toString());
    setOtpGenerated(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!otpGenerated) {
      alert("Please generate OTP first.");
      return;
    }

    const details = {
      email: email,
      phone: phone,
      otp: otp
    };
    alert("Details submitted:\n" + JSON.stringify(details, null, 2));
  };

  return (
    <div className="lastCont" id="lastCont">
      <div className="footHead">
        <div>
          <h1 style={{ fontFamily: 'Lobster, cursive' }}>FilmFusionHub</h1>
        </div>
      </div>
      <div class="footerList">
            <div>
                <h4>MOVIES</h4> 
                <ul>
                    <li><a href="">Ice Cold</a></li>
                    <li><a href="">Love Is in the Air</a></li>
                    <li><a href="">The Swan</a></li>
                    <li><a href="">Mending the Line</a></li>
                    
                </ul>
            </div>
            <div>
                <h4>UPCOMING MOVIES</h4> 
                <ul>
                    <li><a href="">Don't Worry Darling</a></li>
                    <li><a href="">Smile</a></li>
                    <li><a href="">The School for Good and Evil</a></li>
                    <li><a href="">Goldfish</a></li>
                    
                </ul>
            </div>
            <div>
                <h4>MOVIE BY GENRE</h4> 
                <ul>
                    <li><a href="">Badaga cinema</a></li>
                    <li><a href="">History</a></li>
                    <li><a href="">Teen drama</a></li>
                    <li><a href="">Khasi cinema</a></li>
                    
                </ul>
            </div>
            
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 bg-secondary-subtle shadow rounded p-4 text-format">
            <h3 className="text-center mt-5 mb-5">OTP GENERATOR</h3>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="m-3">
                  <TextField
                    className="w-100"
                    id="standard-basic2"
                    label="E-Mail"
                    type="email"
                    variant="standard"
                    required
                    inputProps={{ pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', title: 'Enter a valid email address.' }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="m-3">
                  <TextField
                    className="w-100"
                    id="standard-basic3"
                    label="Mobile Number"
                    required
                    variant="standard"
                    type="tel"
                    inputProps={{
                      pattern: '^[0-9]{10}$',
                      title: 'Enter a valid 10-digit mobile number.'
                    }}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="m-3">
                  <TextField
                    className="w-100"
                    id="standard-basic4"
                    label="OTP Number"
                    required
                    variant="standard"
                    type="tel"
                    inputProps={{
                      pattern: '^[0-9]{4}$',
                      title: 'Enter a valid 4-digit OTP.',
                      readOnly: true
                    }}
                    value={otp}
                  />
                </div>
                <div>
                  {!otpGenerated && (
                    <Stack className="m-5">
                      <Button onClick={generateOtp} className="btn-primary rounded" variant="outlined">
                        Generate OTP
                      </Button>
                    </Stack>
                  )}
                  {otpGenerated && (
                    <Stack className="m-5">
                      <Button type="submit" className="btn-primary rounded" variant="outlined">
                        Submit
                      </Button>
                    </Stack>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footFt">
        <span>FilmFusionHub@std</span>
      </div>
    </div>
  );
}

export default Footer;
