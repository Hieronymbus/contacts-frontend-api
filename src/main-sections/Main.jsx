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
        editModal, 
        setEditModal, 
        errors,
        setErrors,    
}) {

    return (
        <main className='max-w-96'>
            {createModal && 
                <CreateModal 
                    isCreateModal={createModal} 
                    setContactCount={setContactCount} 
                    setState={setCreateModal} 
                    errors={errors}
                    setErrors={setErrors}    
                />}
            <ContactsList 
                setContactCount={setContactCount} 
                contactCount={contactCount} 
                setContacts={setContacts} 
                contacts={contacts} 
                setEditModal={setEditModal} 
                editModal={editModal}
                errors={errors}
                setErrors={setErrors}
            />
        </main>
    );
};

export default Main;