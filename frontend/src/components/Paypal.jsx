import React, { useContext, useEffect, useRef, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {makeresevation} from '../EXtras/PostFunctions'
import { DisplayLoader } from '../EXtras/DislayLoader';
const Paypal = () => {
  const {SERVER_URL, pendingRoom,reservations, setReservations} = useContext(AuthContext)
  const [transaction, setTransaction]= useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const paypal = useRef();

  useEffect(() => {
    // Load the PayPal script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AbCeQnCkWZD9HySep1ybyvwiEuuMdMKsB8lr6ro1k4Wyt2B64lzu8grud3GIaBxeYMfW_PN1We87WEEq&currency=USD';
    script.async = true;

    const initializePaypalButton = () => {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [
                {
                  room: 'room',
                  amount: {
                    currency_code: 'USD',
                    value: '26.00',
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            // Handle the transaction approval
            return actions.order.capture().then((details) => {
          setTransaction(true)
            });
          },
          onError: (err) => {
            // Handle errors
            alert('Error during PayPal checkout')
          },
        })
        .render(paypal.current);
    };

    script.onload = () => {
      initializePaypalButton();
    };

    script.onerror = () => {
      setMessage('Check your internet connection')
      
    };

    document.body.appendChild(script);

    return () => {
      
      setTimeout(() => {
        if (script.parentNode) {
          document.body.removeChild(script);
        }
      }, 0);
    };
  }, []); 
  const initializePaypalButton = () => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                room:pendingRoom.number,
                amount: {
                  currency_code: 'USD',
                  value: '26.00', // Make sure to use a string for the value
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          // Handle the transaction approval
          return actions.order.capture().then((details) => {
            setTransaction(true)
           
            // Add your custom logic here
          });
        },
        onError: (err) => {
          // Handle errors
          console.error('Error during PayPal checkout:', err);
        },
      })
      .render(paypal.current);
  };

  return (
    <div className="modal fade" id="paypalModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      {
        loading ? DisplayLoader : <div className="modal-dialog">
        <div className="modal-content bg-light">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              <small>Reservation</small>
            </h1>
            {
              !transaction && <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> 
            }
          </div>
          
          <div className="modal-body" >
              
            {
              !transaction ? <div >
                <div className='my-2'>You are about to make payment of $26 for booking room {pendingRoom && pendingRoom.number}</div>
                <div ref={paypal}>

                </div>

              </div>:
              <div className="my-2">
                <p>You have successfully paid $26 for booking room {pendingRoom.number}</p>
                <button data-bs-dismiss="modal"  className="btn btn-dark px-4 py-2 my-2" onClick={()=>makeresevation(SERVER_URL,pendingRoom.hostel,pendingRoom.id,26*3750,setLoading,navigate,setReservations )}>
                <small>Complete Transaction</small>
              </button>
              </div>
            }
            
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Paypal;
