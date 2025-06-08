export const sendEmailHandler = (call: any, callback: any) => {
    const { email, name } = call.request;
  
    console.log(`📩 Sending email to ${email} with name ${name}`);
    
    // Here you can do DB write, send real email, etc.
  
    callback(null, {
      status: 'Email sent successfully',
    });
  };
  