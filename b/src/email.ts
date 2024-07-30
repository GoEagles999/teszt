
const sgMail = require('@sendgrid/mail');

const getSGClient = () => {
  sgMail.setApiKey(process.env.SG_KEY);
  return sgMail;
};

export default getSGClient;
