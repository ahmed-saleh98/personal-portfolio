import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const TO_EMAIL = process.env.TO_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL;

export default async (req, res) => {
  const { name, email, message } = req.body;
  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: 'Contact Form from :' + name,
    text: `Name: ${name},/n Email: ${email}, /n Message: ${message}`,
    html: `Name: ${name}, Email: ${email}, Message: ${message}`,
  };
  console.log(name, email, message, msg);

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: 'We Got Your message :)' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email, please try again' });
  }
};
