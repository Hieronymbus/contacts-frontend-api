import React, { useState } from 'react';
import ContactsList from '../components/ContactsList.jsx';
import CreateModal from '../components/CreateModal.jsx';

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

    const [image, setImage] = useState('');

    return (
        <main className='max-w-96'>
            {createModal && 
                <CreateModal 
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