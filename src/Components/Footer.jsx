import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styling/Footer.css'
//import ChatBot from 'react-simple-chatbot';
import Chatbot from './Chatbot'

export class Footer extends React.Component{
    render(){
        return <footer className='footer'>
            <div className="chatbot">
            <div className="container">
             <ChatBot bubbleStyle={{ fontSize: '12px'}}
             headerTitle="Chatbot"
             recognitionEnable={true}
             speechSynthesis={{ enable: true, lang: 'en' }}

             steps={[
                {
                    id:'1', 
                    message:'Hello People, I am here to help you!!', 
                    trigger:'2',
                   },
                   {
                    id:'2', 
                    user:true, 
                    trigger:'3',
                   },
                   {
                   id:'3',
                   message:'{previousValue}, What is your name?',
                   trigger:'4',
                   },
                   {
                    id:'4',
                    user:true,
                    validator: (value) => {
                        if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
                          {
                            return true;
                          }
                        else
                          {
                            return'Please input alphabet characters only.';
                          }
                     },
                    trigger:'5',
                   },
                   {
                    id:'5',
                    message:'Nice name {previousValue}!!!, How can I help you?',
                    trigger:'6',
                   },
                  {
                    id:'6',
                    options: [
                      { value: 1, label: 'How to buy products?', trigger: '7' },
                      { value: 2, label: 'How to Register?', trigger: '8' },
                      { value: 4, label: 'Will the product deliver to home If I make an order?', trigger: '10'},
                      { value: 5, label: 'All of these items are serviced already?', trigger: '11'},
                      { value: 6, label: 'How many days does it take to deliver to the exact location?', trigger: '12'},
                      { value: 7, label: 'Can all sellers be trusted?', trigger: '13'},
                      { value: 8, label: 'How can I trust the sellers?', trigger: '14'},
                      { value: 3, label: 'I dont want any help', trigger: '9'},

                    ],
                  },
                  {
                    id:'7',
                    message:'You can buy products using ADD TO CART option.',
                    trigger: '6',
                  },
                  {
                    id : '8',
                    message: 'You can register with the email id and password using register button which is present in the top right corner.',
                    trigger: '6',
                  },
                  {
                    id: '9',
                    message: 'Okay fine. Thank You!!!',
                    end: true,
                  },
                  {
                    id:'10',
                    message:'Definitely the orders will come to your exact location.',
                    trigger: '6',
                  },
                  {
                    id:'11',
                    message:'Yes, All of these products are serviced already.',
                    trigger: '6',
                  },
                  {
                    id:'12',
                    message:'It will take 5 to 6 days to deliver \n It may vary according to your location.',
                    trigger: '6',
                  },
                  {
                    id:'13',
                    message:'Yes all the sellers are trusted. We only include the items after checking.',
                    trigger: '6',
                  },
                  {
                    id:'14',
                    message:'You can trust the sellers because we have already verified them.',
                    trigger: '6',
                  },
                  
                ]}
            />
        </div>
        </div>
            <div className="preFinal">
                <h5>For Queries Contact:</h5>
                <p>missingenigma@gmail.com</p>
                <h5>Customer Support:</h5>
                <p>1804-2345-2345</p>
                <h5>https://missingenigma.com</h5>
            </div>
            <div className="finalTag">
                Copyright &copy;2021<strong>
                    MissingEnigma.com Ltd;
                </strong>
            </div>
        </footer>
    }
}
