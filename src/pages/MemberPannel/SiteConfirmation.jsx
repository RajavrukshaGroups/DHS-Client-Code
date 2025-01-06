import React, { useEffect } from 'react';
import axios from 'axios';

const ViewSiteConfirmation = () => {
  useEffect(() => {
    const fetchUserPk = async () => {
      const seniorityId = sessionStorage.getItem('seniority_id');

      if (!seniorityId) {
        console.error('No seniority ID found in session');
        return;
      }

      try {
        const response = await axios.get('https://memberpanel.defencehousingsociety.com/getUserPk', {
          params: { seniority_id: seniorityId }
        });
        const userPk = response.data.user_pk;
        console.log("this is pk : ", userPk)

        // Redirect to the URL with user_pk as query parameter
        window.location.href = `http://adminpanel.defencehousingsociety.com/confirmationletterviewonly?user_pk=${userPk}`;
      } catch (error) {
        console.error('Error fetching user_pk:', error);
      }
    };

    fetchUserPk();
  }, []);

  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default ViewSiteConfirmation;
