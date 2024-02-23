import  { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../../actions/user';


const Profil = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userData);
  const token = useSelector(state => state.user.token); 
  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState(userData?.firstName ); 
  const [newLastName, setNewLastName] = useState(userData?.lastName); 

  useEffect(() => {
    setNewFirstName(userData?.firstName);
    setNewLastName(userData?.lastName);
  }, [userData]);

  const handleSave = () => {
    dispatch(updateUserProfile(newFirstName, newLastName, token)); 
    setIsEditing(false);
  };


  return (
    <main className="main bg-dark">
    <div className="header">
      <h1>Welcome back <br /><span>{newFirstName}</span> <span>{newLastName}!</span></h1>
  
      
      {isEditing ? <form>
        <div className="edit-user-container">
        <div className="input-wrapper">
          <input type="text" value={newFirstName} id="firstName" onChange={e => setNewFirstName(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <input type="text" value={newLastName} id="lastName" onChange={e => setNewLastName(e.target.value)}/>
        </div>
        </div>
        <div className="edit-user-buttons">
        <button type="button" onClick={handleSave} className="edit-user-button">Save</button>
         <button className="edit-user-button">Cancel</button>
    
         </div>
      </form> : <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>}
    </div>
    <h2 className="sr-only">Accounts</h2>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button onClick={() => window.location.href="/transactions"}  className="transaction-button">View transactions</button>
      </div>
    </section>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
        <p className="account-amount">$10,928.42</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
        <p className="account-amount">$184.30</p>
        <p className="account-amount-description">Current Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  </main>
  )
}

export  { Profil }