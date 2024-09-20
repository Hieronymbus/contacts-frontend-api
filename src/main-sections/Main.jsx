import React from 'react';
import ContactsList from '../components/ContactsList.jsx';
import CreateModal from '../components/CreateModal.jsx';
import EditModal from '../components/EditModal.jsx';

function Main({ setContactCount, contactCount, setContacts, contacts, createModal, setCreateModal, editModal, setEditModal }) {

    return (
        <main className='max-w-96'>
            {createModal && <CreateModal isCreateModal={createModal} setState={setCreateModal} />}
            {editModal && <EditModal setState={setEditModal} />}
            <ContactsList 
                setContactCount={setContactCount} 
                contactCount={contactCount} 
                setContacts={setContacts} 
                contacts={contacts}  
            />
        </main>
    );
};

export default Main;