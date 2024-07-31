import Previews from './previews';
import Episodes from './eps'
import Characters from './characters';
import Cast from './cast';
import Staff from './staff';
import Recommendations from './recos';
import React, { useEffect, useState } from 'react';

const MoreDetails = ({id}) => {
    const [activeTab, setActiveTab] = useState('Previews');
    const tabs = ['Previews', 'Episodes', 'Characters', 'Cast', 'Staff', 'Recommendations'];

    const renderTabs = () => {
        switch(activeTab){
            case 'Previews':
                return <Previews id={id} />
            case 'Episodes':
                return <Episodes id={id} />
            case 'Characters':
                return <Characters id={id} />
            case 'Cast':
                return <Cast id={id} />
            case 'Staff':
                return <Staff id={id} />
            case 'Recommendations':
                return <Recommendations id={id} />
        }
    };

    return(
        <main className="font-Montserrat">
            <div className="text-sm font-medium text-center text-neutral-50 border-b border-neutral-50 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    {tabs.map((tab) => (
                        <li key={tab} className="me-2">
                            <button onClick={() => setActiveTab(tab)} className={`inline-block p-4 border-b-2 rounded-t-lg 
                            ${ activeTab === tab? ('text-neutral-50 border-neutral-50')
                                : ('border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300')}`}>
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='text-neutral-50 mt-4'>
                {renderTabs()}
            </div>
        </main>
    )
}

export default MoreDetails;