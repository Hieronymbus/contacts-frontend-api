import React from 'react';
import ContactsList from '../components/ContactsList.jsx';
import CreateModal from '../components/CreateModal.jsx';
import EditModal from '../components/EditModal.jsx';

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

    return (
        <main className='max-w-96'>
            {createModal && 
                <CreateModal 
                    createModal={createModal} 
                    setContactCount={setContactCount} 
                    setCreateModal={setCreateModal} 
                    errors={errors}
                    setErrors={setErrors}    
                />
            }
            <ContactsList 
                setContactCount={setContactCount} 
                contactCount={contactCount} 
                setContacts={setContacts} 
                contacts={contacts} 
                errors={errors}
                setErrors={setErrors}
            />
        </main>
    );
};

export default Main;