import React, { useState } from 'react';
import ContactsList from '../components/ContactsList.jsx';
import FormModal from '../components/FormModal.jsx';

function Main({ 
        setContactCount,    
        contactCount, 
        setContacts, 
        contacts, 
        createModal, 
        setCreateModal,
        errors,
        setErrors,    
}) {

    const [image, setImage] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png');

    return (
        <main className='max-w-96'>
            {createModal && 
                <FormModal 
                    createModal={createModal} 
                    setContactCount={setContactCount} 
                    setCreateModal={setCreateModal} 
                    errors={errors}
                    setErrors={setErrors}  
                    setImage={setImage} 
                />
            }
            <ContactsList 
                setContactCount={setContactCount} 
                contactCount={contactCount} 
                setContacts={setContacts} 
                contacts={contacts} 
                errors={errors}
                setErrors={setErrors}
                image={image}
            />
        </main>
    );
};

export default Main;