import { DataStore } from '@aws-amplify/datastore';
import { Email } from './models/Email';

const addEmail = async (emailAddress) => {
  try {
    
    const existingEmails = await DataStore.query(Email, (email) => email.address('eq', emailAddress));

    if (existingEmails.length > 0) {
      
      console.error('Email already exists.');
      return 409;
    }

    
    await DataStore.save(new Email({
      address: emailAddress,
    }));

    
    console.log('Email added successfully.');
    return 201;
  } catch (error) {
    
    console.error('Error adding email:', error);
    return 500; 
  }
};


const statusCode = await addEmail('example@email.com');
console.log('HTTP Status Code:', statusCode);
