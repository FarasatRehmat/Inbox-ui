import React from 'react'

import './RecentComments.css'

import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

function RecentComments() {
  return (
    <div className='RecentComments-container'>
        <div className='RC-header'>
            <h2>Recent Comments</h2>
        </div>
        <div className="RC-body">
            <div className='blue RC-List'>
                <div className='RC-List-left'>
                    <span>
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13.4444L4.11111 10.3333M15 4.11111H1H15ZM15 4.11111L11.8889 7.22222L15 4.11111ZM15 4.11111L11.8889 1L15 4.11111ZM1 13.4444H15H1ZM1 13.4444L4.11111 16.5556L1 13.4444Z" stroke="#FDFDFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span>Date</span>
                    <span>Child</span>
                    <span>Thread</span>
                </div>
                <div className="RC-list-right">
                    <span>
                        <InsertPhotoOutlinedIcon />
                    </span>
                    <span>
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9375 0H0.8125L0 0.8125V5.6875L0.8125 6.5H1.625V20.3125L2.4375 21.125H20.3125L21.125 20.3125V6.5H21.9375L22.75 5.6875V0.8125L21.9375 0ZM20.3125 4.875H1.625V1.625H21.125V4.875H20.3125ZM3.25 19.5V6.5H19.5V19.5H3.25ZM16.25 9.75H6.5V11.375H16.25V9.75Z" fill="white"/>
                        </svg>
                    </span>
                    <span>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6738 0.81914C10.6736 0.64846 10.7268 0.482003 10.826 0.343064C10.9251 0.204124 11.0652 0.0996551 11.2267 0.0442763C11.3881 -0.0111025 11.5628 -0.0146197 11.7264 0.0342169C11.8899 0.0830534 12.0341 0.1818 12.1387 0.316637L17.8676 7.68232C17.9794 7.82598 18.04 8.00281 18.04 8.18482C18.04 8.36684 17.9794 8.54366 17.8676 8.68732L12.1387 16.053C12.0341 16.1878 11.8899 16.2866 11.7264 16.3354C11.5628 16.3843 11.3881 16.3807 11.2267 16.3254C11.0652 16.27 10.9251 16.1655 10.826 16.0266C10.7268 15.8876 10.6736 15.7212 10.6738 15.5505V12.2851C6.27156 12.3767 4.15679 13.2123 3.0945 14.1207C2.08458 14.9842 1.89962 15.9998 1.7073 17.0637L1.65737 17.3379C1.62065 17.5341 1.5135 17.7101 1.35608 17.8328C1.19867 17.9555 1.00184 18.0164 0.802631 18.0042C0.60342 17.9919 0.41556 17.9073 0.274391 17.7662C0.133223 17.6251 0.048481 17.4373 0.0361042 17.2381C-0.103844 14.9891 0.106487 11.7302 1.69502 9.00405C3.2369 6.35813 6.01377 4.32357 10.6738 4.11078V0.81914Z" fill="white"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="RC-text">
                <p>No comments in the last two weeks.</p>
            </div>
        </div>
    </div>
  )
}

export default RecentComments;